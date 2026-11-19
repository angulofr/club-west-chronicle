import { useState } from 'react';
import { BookOpen, ExternalLink, Users } from 'lucide-react';
import { SOURCES, STAKEHOLDERS } from '../data/clubWestData';
import { Stakeholder } from '../types/clubWest';

const STAKEHOLDER_GROUPS: (Stakeholder['category'] | 'All')[] = [
  'All',
  'Original Developer & Design',
  'Course Owners & Investors',
  'HOA & Community',
  'Homebuilders & Brokers',
];

export function StakeholdersAndSources() {
  const [groupFilter, setGroupFilter] = useState<Stakeholder['category'] | 'All'>('All');

  const visibleStakeholders =
    groupFilter === 'All'
      ? STAKEHOLDERS
      : STAKEHOLDERS.filter((item) => item.category === groupFilter);

  return (
    <section className="panel" aria-labelledby="stakeholders-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">Directory &amp; Verified References</span>
          <h2 id="stakeholders-heading">Key Players &amp; Source Archive</h2>
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
        <div className="vault-col-title">
          <BookOpen size={18} />
          <h3>News Coverage, Court Opinions &amp; Public Records ({SOURCES.length})</h3>
        </div>

        <div className="sources-grid">
          {SOURCES.map((source) => (
            <a
              key={source.id}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className="source-card"
            >
              <div className="source-card-top">
                <span className="mono-tag">{source.publisher}</span>
                <ExternalLink size={14} />
              </div>
              <h4>{source.title}</h4>
              <p>{source.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
