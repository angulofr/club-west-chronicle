import { describe, expect, it } from 'vitest';
import { HOA_DOCUMENTS, LEGAL_DOCKETS, PROPOSALS, SOURCES, TIMELINE_EVENTS } from '../data/clubWestData';
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

describe('source and document citation integrity', () => {
  it('ensures every source links to a deep article, PDF, or filing rather than a bare domain homepage', () => {
    for (const src of SOURCES) {
      const parsed = new URL(src.url);
      expect(parsed.pathname.length).toBeGreaterThan(1);
    }
  });

  it('ensures all HOA documents and legal dockets include direct document or portal links', () => {
    expect(HOA_DOCUMENTS.every((doc) => doc.links.length > 0)).toBe(true);
    expect(LEGAL_DOCKETS.every((docket) => docket.links.length > 0)).toBe(true);
  });
});
