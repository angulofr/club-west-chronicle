import { describe, expect, it } from 'vitest';
import { PROPOSALS, TIMELINE_EVENTS } from '../data/clubWestData';
import { calculateDensityReductionPercent, filterTimelineEvents } from './filters';

describe('filterTimelineEvents', () => {
  it('returns all events sorted chronologically when no filters are active', () => {
    const result = filterTimelineEvents(TIMELINE_EVENTS, 'all', 'All', '');
    expect(result.length).toBe(TIMELINE_EVENTS.length);
    expect(result[0].id).toBe('evt-1989-ccrs');
    expect(result[result.length - 1].id).toBe('evt-2026-sekisui-house');
  });

  it('filters by era and search query', () => {
    const result = filterTimelineEvents(TIMELINE_EVENTS, 'redevelopment', 'All', 'sekisui');
    expect(result).toHaveLength(1);
    expect(result[0].title).toContain('278 Homes');
  });

  it('filters by category accurately', () => {
    const result = filterTimelineEvents(TIMELINE_EVENTS, 'all', 'Litigation & Appeals', '');
    expect(result.every((item) => item.category === 'Litigation & Appeals')).toBe(true);
    expect(result.length).toBeGreaterThanOrEqual(3);
  });
});

describe('calculateDensityReductionPercent', () => {
  it('calculates the home-count reduction from D.R. Horton (573) to Sekisui House (278)', () => {
    const horton = PROPOSALS.find((p) => p.id === 'prop-drhorton')!;
    const sekisui = PROPOSALS.find((p) => p.id === 'prop-sekisui')!;
    expect(calculateDensityReductionPercent(horton, sekisui)).toBe(51.5);
  });
});
