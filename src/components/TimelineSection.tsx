import { useMemo, useState } from 'react';
import { Archive, Calendar, ChevronDown, ChevronUp, ExternalLink, Search } from 'lucide-react';
import { ERAS, SOURCES, TIMELINE_EVENTS } from '../data/clubWestData';
import { EraId, EventCategory } from '../types/clubWest';
import { filterTimelineEvents } from '../utils/filters';

const CATEGORIES: (EventCategory | 'All')[] = [
  'All',
  'Founding & Covenants',
  'Water & Operations',
  'HOA & Governance',
  'Litigation & Appeals',
  'Sales & Builders',
];

export function TimelineSection() {
  const [selectedEra, setSelectedEra] = useState<EraId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    'evt-2026-sekisui-house': true,
    'evt-2020-conservancy-hoa-suit': true,
  });

  const filteredEvents = useMemo(
    () => filterTimelineEvents(TIMELINE_EVENTS, selectedEra, selectedCategory, query),
    [selectedEra, selectedCategory, query],
  );

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="panel" aria-labelledby="timeline-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">Chronological Archive (1989–2026)</span>
          <h2 id="timeline-heading">The Full Flow of Events</h2>
        </div>
        <span className="count-pill">
          Showing {filteredEvents.length} of {TIMELINE_EVENTS.length} milestones
        </span>
      </div>

      <div className="era-strip" role="tablist" aria-label="Filter by historical era">
        {ERAS.map((era) => (
          <button
            key={era.id}
            type="button"
            role="tab"
            aria-selected={selectedEra === era.id}
            className={`era-card ${selectedEra === era.id ? 'active' : ''}`}
            onClick={() => setSelectedEra(era.id)}
          >
            <span className="mono-tag">{era.years}</span>
            <strong>{era.label}</strong>
            <span className="era-desc">{era.description}</span>
          </button>
        ))}
      </div>

      <div className="timeline-controls">
        <div className="search-box">
          <Search size={16} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search judges, builders, dollar amounts, case numbers (e.g. Kiley, Pineda, 278, $159,000)..."
            aria-label="Search Club West timeline"
          />
        </div>

        <div className="category-chips">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="empty-state">
          <p>No timeline milestones matched "{query}".</p>
          <button
            type="button"
            className="chip active"
            onClick={() => {
              setSelectedEra('all');
              setSelectedCategory('All');
              setQuery('');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="timeline-list">
          {filteredEvents.map((event) => {
            const isExpanded = Boolean(expandedIds[event.id]);
            const eventSources = SOURCES.filter((src) => event.sourceIds.includes(src.id));

            return (
              <article key={event.id} className="timeline-item">
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-top">
                    <div className="timeline-badges">
                      <span className="date-badge">
                        <Calendar size={13} />
                        {event.dateLabel}
                      </span>
                      <span className="cat-badge">{event.category}</span>
                    </div>
                    <button
                      type="button"
                      className="expand-btn"
                      onClick={() => toggleExpand(event.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'Inspect Dossier'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>
                  </div>

                  <h3>{event.title}</h3>
                  <p className="timeline-subtitle">{event.subtitle}</p>
                  <p className="timeline-summary">{event.summary}</p>

                  {event.metrics && event.metrics.length > 0 && (
                    <div className="metrics-row">
                      {event.metrics.map((metric) => (
                        <div key={metric.label} className="metric-pill">
                          <span>{metric.label}</span>
                          <strong>{metric.value}</strong>
                        </div>
                      ))}
                    </div>
                  )}

                  {isExpanded && (
                    <div className="timeline-drawer">
                      <div className="drawer-section">
                        <h4>Key Facts &amp; Record Details</h4>
                        <ul className="compact-list">
                          {event.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="drawer-footer">
                        <div className="figures-wrap">
                          <span className="mono-tag">Key Figures:</span>
                          {event.keyFigures.map((fig) => (
                            <span key={fig} className="figure-tag">
                              {fig}
                            </span>
                          ))}
                        </div>

                        {eventSources.length > 0 && (
                          <div className="sources-inline">
                            {eventSources.map((src) => (
                              <a
                                key={src.id}
                                href={src.waybackUrl ?? src.url}
                                target="_blank"
                                rel="noreferrer"
                                className="source-chip"
                                title={src.title}
                              >
                                {src.waybackUrl ? <Archive size={12} /> : <ExternalLink size={12} />}
                                <span>
                                  {src.publisher}
                                  {src.waybackUrl ? ' (Wayback)' : ''}
                                </span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
