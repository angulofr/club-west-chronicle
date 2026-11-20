import { useState } from 'react';
import { ArrowUpRight, Home, Image, Map, Maximize2, Trees, X } from 'lucide-react';
import { PARCEL_METADATA, PROPOSALS } from '../data/clubWestData';
import { calculateDensityReductionPercent } from '../utils/filters';
import { InteractiveSitePlanSvg } from './InteractiveSitePlanSvg';

const LOT_MIX = [
  { size: "50' × 125'", units: 82, mix: '29.5%', swatch: '#a79b64', zone: 'West corridor (W. Chandler Blvd / S. 17th Ave)' },
  { size: "60' × 135'", units: 96, mix: '34.5%', swatch: '#d697a8', zone: 'Central fairway corridor' },
  { size: "70' × 135'", units: 100, mix: '36.0%', swatch: '#cb834d', zone: 'East corridor (S. Central Ave) & gated hillside parcels' },
];

export function ProposalComparison() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [planView, setPlanView] = useState<'vector' | 'cad'>('vector');

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
            Sekisui House Ltd.’s preliminary pre-application proposes <strong>278 single-family lots</strong>{' '}
            across <strong>162.08 gross acres</strong> and preserves <strong>88.49 acres (55%)</strong> as
            amenitized open space, passive open space, and retention—down sharply from D.R. Horton’s
            573-home pre-application.
          </p>
        </div>

        <div className="allocation-visual" aria-label="162-acre land allocation breakdown for Sekisui House proposal">
          <div className="allocation-header">
            <span>Sekisui House 162.08-Acre Land Split</span>
            <span className="mono-tag">88.49 Ac Open · 73.59 Ac Residential/Streets</span>
          </div>
          <div className="allocation-bar">
            <div
              className="alloc-open"
              style={{ width: `${(88.49 / 162.08) * 100}%` }}
              title="88.49 Acres Amenitized / Passive Open Space & Retention (55%)"
            >
              <Trees size={14} />
              <span>55% Open &amp; Retention (88.49 ac)</span>
            </div>
            <div
              className="alloc-dev"
              style={{ width: `${(73.59 / 162.08) * 100}%` }}
              title="73.59 Acres Residential Lots & Streets (45%)"
            >
              <Home size={14} />
              <span>45% Lots &amp; Streets (73.59 ac)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Circulating Preliminary CAD Site Plan Exhibit + Crisp Vector Recreation */}
      <div className="site-plan-showcase">
        <div className="site-plan-media">
          <div className="site-plan-switcher">
            <div className="segmented-toggle" role="group" aria-label="Site plan display mode">
              <button
                type="button"
                className={planView === 'vector' ? 'active' : ''}
                onClick={() => setPlanView('vector')}
              >
                <Map size={13} style={{ marginRight: 5, verticalAlign: '-2px' }} />
                Crisp Vector Map
              </button>
              <button
                type="button"
                className={planView === 'cad' ? 'active' : ''}
                onClick={() => setPlanView('cad')}
              >
                <Image size={13} style={{ marginRight: 5, verticalAlign: '-2px' }} />
                Original CAD Image
              </button>
            </div>
          </div>

          {planView === 'vector' ? (
            <InteractiveSitePlanSvg />
          ) : (
            <button
              type="button"
              className="site-plan-zoom-btn"
              onClick={() => setLightboxOpen(true)}
              title="Click to inspect full-size site plan"
            >
              <img
                src="./images/sekisui-club-west-site-plan.jpg"
                alt="Preliminary CAD site plan exhibit for Club West showing 278 single-family lots and 88.49 acres of open space between W. Chandler Blvd, S. 17th Ave, S. Central Ave, W. Liberty Ln, and AZ Loop 202"
                loading="lazy"
              />
              <span className="zoom-pill">
                <Maximize2 size={14} />
                <span>Inspect Full-Size Plan</span>
              </span>
            </button>
          )}

          <p className="site-plan-caption">
            Vector schematic recreated from circulating preliminary CAD exhibit (<code>FS-BASE_Opt 5.dwg</code>,
            Sept 2026). Pre-application submittals live inside{' '}
            <a href="https://shapephx.phoenix.gov/" target="_blank" rel="noreferrer">
              Phoenix SHAPE PHX
            </a>{' '}
            prior to formal Village Planning Committee hearings.
          </p>
        </div>

        <div className="site-plan-data">
          <div className="site-plan-data-head">
            <span className="mono-tag">Exhibit Site Data · 162.08 Gross Acres</span>
            <h3>278-Lot Mix &amp; Parcel Identifiers</h3>
          </div>

          <div className="lot-mix-table">
            {LOT_MIX.map((row) => (
              <div key={row.size} className="lot-mix-row">
                <div className="lot-mix-title">
                  <span className="lot-swatch" style={{ backgroundColor: row.swatch }} />
                  <strong>{row.size}</strong>
                  <span className="mono-tag">
                    {row.units} lots ({row.mix})
                  </span>
                </div>
                <span className="lot-mix-zone">{row.zone}</span>
              </div>
            ))}
          </div>

          <div className="apn-block">
            <span className="mono-tag">Maricopa County APNs (City of Phoenix Zoning)</span>
            <div className="apn-pills">
              {PARCEL_METADATA.apns.map((apn) => (
                <span key={apn} className="figure-tag">
                  {apn}
                </span>
              ))}
            </div>
          </div>

          <div className="doc-links-row">
            <a
              href="https://lobbyist.phoenix.gov/Search/ClientInformation/3c285c95-af58-4c80-bae3-80bd90b653b4"
              target="_blank"
              rel="noreferrer"
              className="doc-link-btn wayback"
            >
              <span>Phoenix Lobbyist Record (Sekisui / Withey Morris)</span>
              <ArrowUpRight size={12} />
            </a>
            <a
              href="https://www.phoenix.gov/administration/departments/pdd/planning-zoning/villages/ahwatukee-foothills.html"
              target="_blank"
              rel="noreferrer"
              className="doc-link-btn"
            >
              <span>Ahwatukee Village Planning Committee</span>
              <ArrowUpRight size={12} />
            </a>
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

      {lightboxOpen && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Full-size Sekisui House preliminary site plan"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close full-size site plan"
            >
              <X size={20} />
            </button>
            <img
              src="./images/sekisui-club-west-site-plan.jpg"
              alt="Full-size preliminary CAD site plan exhibit for Club West 278-lot proposal"
            />
          </div>
        </div>
      )}
    </section>
  );
}
