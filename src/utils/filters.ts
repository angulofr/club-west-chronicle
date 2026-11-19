import { EraId, EventCategory, ProposalSpec, TimelineEvent } from '../types/clubWest';

export function filterTimelineEvents(
  events: TimelineEvent[],
  era: EraId | 'all',
  category: EventCategory | 'All',
  query: string,
): TimelineEvent[] {
  const normalizedQuery = query.trim().toLowerCase();

  return events
    .filter((event) => {
      if (era !== 'all' && event.era !== era) return false;
      if (category !== 'All' && event.category !== category) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        event.dateLabel,
        event.title,
        event.subtitle,
        event.summary,
        ...event.details,
        ...event.keyFigures,
        ...(event.metrics?.map((m) => `${m.label} ${m.value}`) ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function calculateDensityReductionPercent(
  baseline: ProposalSpec,
  challenger: ProposalSpec,
): number {
  if (baseline.homesCount <= 0) return 0;
  const diff = baseline.homesCount - challenger.homesCount;
  return Number(((diff / baseline.homesCount) * 100).toFixed(1));
}
