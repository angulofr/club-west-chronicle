import { ArrowUpRight, Home, Trees } from 'lucide-react';
import { PROPOSALS } from '../data/clubWestData';
import { calculateDensityReductionPercent } from '../utils/filters';

export function ProposalComparison() {
  const horton = PROPOSALS.find((p) => p.id === 'prop-drhorton')!;
  const sekisui = PROPOSALS.find((p) => p.id === 'prop-sekisui')!;
  const reductionPct = calculateDensityReductionPercent(horton, sekisui);
  const homesSaved = horton.homesCount - sekisui.homesCount;

  return (
    <section className="panel" aria-labelledby="proposal-comparison-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">2026 Phoenix Planning Pre-Applications</span>
          <h2 id="proposal-comparison-heading">
            Builder Showdown: 573 Homes vs. 278 Homes &amp; 88.5 Acres Open Space
          </h2>
        </div>
        <a
          className="text-action-link"
          href="https://www.ahwatukee.com/news/new-builder-eyes-fewer-homes-for-club-west-course/article_c9b96076-7307-443f-8adf-fed3dcd0ddef.html"
          target="_blank"
          rel="noreferrer"
        >
          <span>Read Ahwatukee Foothills News Report</span>
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="comparison-callout">
        <div className="callout-metric">
          <span className="mono-tag">Density Shift (2026)</span>
          <strong>
            −{homesSaved} Homes (−{reductionPct}%)
          </strong>
          <p>
            Sekisui House Ltd.’s November 2026 pre-application proposes <strong>278 single-family homes</strong>{' '}
            and preserves <strong>88.5 acres (54.6%)</strong> as amenitized open space, passive open space,
            and drainage—down sharply from D.R. Horton’s 573-home pre-application.
          </p>
        </div>

        <div className="allocation-visual" aria-label="162-acre land allocation breakdown for Sekisui House proposal">
          <div className="allocation-header">
            <span>Sekisui House 162-Acre Land Split</span>
            <span className="mono-tag">88.5 Ac Open · 73.5 Ac Residential/Streets</span>
          </div>
          <div className="allocation-bar">
            <div
              className="alloc-open"
              style={{ width: `${(88.5 / 162) * 100}%` }}
              title="88.5 Acres Amenitized / Passive Open Space & Drainage (54.6%)"
            >
              <Trees size={14} />
              <span>54.6% Open &amp; Drainage (88.5 ac)</span>
            </div>
            <div
              className="alloc-dev"
              style={{ width: `${(73.5 / 162) * 100}%` }}
              title="73.5 Acres Residential Lots & Streets (45.4%)"
            >
              <Home size={14} />
              <span>45.4% Lots &amp; Streets (73.5 ac)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="proposal-grid">
        {PROPOSALS.map((prop) => {
          const homePctOfMax = (prop.homesCount / 573) * 100;
          return (
            <article
              key={prop.id}
              className="proposal-card"
              style={{ borderTopColor: prop.accentColor }}
            >
              <div className="proposal-card-head">
                <span className="mono-tag">{prop.timeframe}</span>
                <span className="status-chip">{prop.status}</span>
              </div>
              <h3>{prop.name}</h3>
              <p className="proponent-line">{prop.proponent}</p>

              <div className="proposal-stats">
                <div>
                  <span>Proposed Homes</span>
                  <strong>{prop.homesCount.toLocaleString()}</strong>
                </div>
                <div>
                  <span>Open Space</span>
                  <strong>{prop.openSpaceAcres} ac</strong>
                </div>
                <div>
                  <span>Gross Density</span>
                  <strong>{prop.grossDensityPerAcre.toFixed(2)} DU/ac</strong>
                </div>
              </div>

              <div className="density-meter">
                <div className="density-meter-label">
                  <span>Unit Count vs. Peak Proposal (573)</span>
                  <span className="mono-tag">{prop.homesCount} / 573</span>
                </div>
                <div className="meter-track">
                  <div
                    className="meter-fill"
                    style={{
                      width: `${Math.max(homePctOfMax, prop.homesCount === 0 ? 4 : 0)}%`,
                      backgroundColor: prop.accentColor,
                    }}
                  />
                </div>
              </div>

              <ul className="compact-list">
                {prop.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
