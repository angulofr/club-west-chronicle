import { useState } from 'react';
import { Archive, BookOpen, ExternalLink, Users } from 'lucide-react';
import { SOURCES, STAKEHOLDERS } from '../data/clubWestData';
import { SourceReference, Stakeholder } from '../types/clubWest';

const STAKEHOLDER_GROUPS: (Stakeholder['category'] | 'All')[] = [
  'All',
  'Original Developer & Design',
  'Course Owners & Investors',
  'HOA & Community',
  'Homebuilders & Brokers',
];

const SOURCE_KINDS: (SourceReference['kind'] | 'All')[] = [
  'All',
  'News Article',
  'Court Filing / Opinion',
  'HOA Covenant / PDF',
  'Public Archive',
];

export function StakeholdersAndSources() {
  const [groupFilter, setGroupFilter] = useState<Stakeholder['category'] | 'All'>('All');
  const [sourceFilter, setSourceFilter] = useState<SourceReference['kind'] | 'All'>('All');

  const visibleStakeholders =
    groupFilter === 'All'
      ? STAKEHOLDERS
      : STAKEHOLDERS.filter((item) => item.category === groupFilter);

  const visibleSources =
    sourceFilter === 'All'
      ? SOURCES
      : SOURCES.filter((item) => item.kind === sourceFilter);

  return (
    <section className="panel" aria-labelledby="stakeholders-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">Directory &amp; Permanent Citations</span>
          <h2 id="stakeholders-heading">Key Players &amp; Verified Document Archive</h2>
        </div>
      </div>

      <div className="sub-section">
        <div className="sub-section-head">
          <div className="vault-col-title">
            <Users size={18} />
            <h3>Stakeholder Directory ({visibleStakeholders.length})</h3>
          </div>
          <div className="category-chips">
            {STAKEHOLDER_GROUPS.map((group) => (
              <button
                key={group}
                type="button"
                className={`chip ${groupFilter === group ? 'active' : ''}`}
                onClick={() => setGroupFilter(group)}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        <div className="stakeholder-grid">
          {visibleStakeholders.map((person) => (
            <article key={person.id} className="stakeholder-card">
              <span className="mono-tag">{person.category}</span>
              <h4>{person.name}</h4>
              <p className="stakeholder-role">{person.role}</p>
              <p className="stakeholder-desc">{person.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="sub-section">
        <div className="sub-section-head">
          <div className="vault-col-title">
            <BookOpen size={18} />
            <h3>Articles, Court Filings &amp; HOA Covenants ({visibleSources.length})</h3>
          </div>
          <div className="category-chips">
            {SOURCE_KINDS.map((kind) => (
              <button
                key={kind}
                type="button"
                className={`chip ${sourceFilter === kind ? 'active' : ''}`}
                onClick={() => setSourceFilter(kind)}
              >
                {kind}
              </button>
            ))}
          </div>
        </div>

        <div className="sources-grid">
          {visibleSources.map((source) => {
            const waybackLookup = `https://web.archive.org/web/*/${source.url}`;
            return (
              <article key={source.id} className="source-card">
                <div className="source-card-top">
                  <span className="mono-tag">{source.publisher}</span>
                  <span className="status-chip">{source.kind}</span>
                </div>
                <h4>{source.title}</h4>
                <p>{source.note}</p>
                <div className="doc-links-row">
                  {source.waybackUrl ? (
                    <a
                      href={source.waybackUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="doc-link-btn wayback"
                    >
                      <Archive size={12} />
                      <span>Wayback Snapshot</span>
                    </a>
                  ) : (
                    <a
                      href={waybackLookup}
                      target="_blank"
                      rel="noreferrer"
                      className="doc-link-btn"
                    >
                      <Archive size={12} />
                      <span>Wayback Index</span>
                    </a>
                  )}
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="doc-link-btn"
                  >
                    <ExternalLink size={12} />
                    <span>Direct Document / Article</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
