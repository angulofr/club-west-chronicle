import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

interface ChartNode {
  id: string;
  x: number;
  year: string;
  label: string;
  metric: string;
  era: 'founding' | 'water' | 'legal' | 'builders';
  yValue: number;
  summary: string;
  docLabel?: string;
  docUrl?: string;
}

const CHART_NODES: ChartNode[] = [
  {
    id: 'c-1989',
    x: 65,
    year: '1989',
    label: 'Master CC&Rs',
    metric: '75% Vote Rule',
    era: 'founding',
    yValue: 185,
    summary:
      'Recorded July 21, 1989 (Doc #89-337438). Established Foothills Club West governance and 75% supermajority amendment threshold.',
    docLabel: '1989 Master CC&Rs PDF (Wayback)',
    docUrl: 'https://web.archive.org/web/20240616145328/https://www.visioncommunitymanagement.com/media/vcmdocs/500828.pdf',
  },
  {
    id: 'c-1993',
    x: 165,
    year: '1993',
    label: 'Course Opens',
    metric: '162 Ac · 0 Homes',
    era: 'founding',
    yValue: 185,
    summary:
      '18-hole, par-72 layout by Brian Whitcomb & Ken Kavanaugh opens with a separate Golf Course Declaration dedicating land to golf.',
    docLabel: 'Golf Course Declaration PDF (Wayback)',
    docUrl: 'https://web.archive.org/web/20240802175536/https://www.visioncommunitymanagement.com/media/vcmdocs/954973.pdf',
  },
  {
    id: 'c-2016',
    x: 285,
    year: '2016',
    label: 'Water Crisis',
    metric: '$159K Shutoff',
    era: 'water',
    yValue: 170,
    summary:
      'Reclamation plant closure forced costly potable city water. Water briefly shut off over ~$159K bill; HOA & Wilson Gee trade lawsuits.',
    docLabel: 'Club + Resort Business Report',
    docUrl: 'https://clubandresortbusiness.com/club-west-gc-owner-countersues-hoa/',
  },
  {
    id: 'c-2018',
    x: 395,
    year: '2018',
    label: 'Final Closure',
    metric: '$200K+ Water Bill',
    era: 'water',
    yValue: 165,
    summary:
      'Interim operator revival goes broke Feb 2018 after water bills top $200K. HOA board passes closed-session Oct 2018 amendment.',
    docLabel: 'CV2020-003577 Archive (Wayback)',
    docUrl: 'https://web.archive.org/web/20260614135722/https://azhoawatch.org/court-cases/',
  },
  {
    id: 'c-2020',
    x: 515,
    year: 'Jun 2020',
    label: 'The Edge Buys',
    metric: '$750K Sale',
    era: 'legal',
    yValue: 138,
    summary:
      'The Edge at Club West LLC buys 162 acres for $750,000. Judge Kiley later voids HOA board amendments in CV2020-003577.',
    docLabel: '2020 Oral Argument PDF (AZ HOA Watch)',
    docUrl:
      'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2020-06-22_003_oral-argument.pdf',
  },
  {
    id: 'c-2025',
    x: 645,
    year: '2021–2025',
    label: 'Court Clearance',
    metric: '1 CA-SA 25-0117',
    era: 'legal',
    yValue: 128,
    summary:
      'CV2021-018435 clears owners from perpetual golf mandate; Oct 27, 2025 Court of Appeals ruling addresses Rule 54(b) fee procedures.',
    docLabel: 'Special Action Petition PDF (Wayback)',
    docUrl:
      'https://web.archive.org/web/20260216032008/https://www.omlaw.com/wp-content/uploads/2025-05-01-Club-West-Shea-Petition-for-Special-Action.pdf',
  },
  {
    id: 'c-2026-may',
    x: 775,
    year: 'May 2026',
    label: '$2.1M Flip',
    metric: '+180% Land Value',
    era: 'builders',
    yValue: 96,
    summary:
      'Community Harmony Coalition LLC (15 investors) buys cleared 162 acres for $2.1M on May 29, 2026 and relists via Nathan & Associates.',
    docLabel: 'KTAR News Report (Wayback)',
    docUrl:
      'https://web.archive.org/web/20260809013035/https://ktar.com/arizona-business/owners-club-west-golf-course-shop-site',
  },
  {
    id: 'c-2026-mid',
    x: 890,
    year: 'Mid-2026',
    label: 'D.R. Horton',
    metric: '573 Homes',
    era: 'builders',
    yValue: 48,
    summary:
      'D.R. Horton submits Phoenix Planning pre-application eyeing 573 homes (~3.54 DU/ac), drawing pushback over density and traffic.',
    docLabel: 'Ahwatukee Market Analysis',
    docUrl:
      'https://camillekennardrealtor.com/blog/why-ahwatukees-club-west-golf-course-sold-for-dollar21-million-and-what-that-price-means-if-you-buy-next-door',
  },
  {
    id: 'c-2026-nov',
    x: 1015,
    year: 'Nov 2026',
    label: 'Sekisui House',
    metric: '278 Homes · 88.5 Ac Open',
    era: 'builders',
    yValue: 78,
    summary:
      'Sekisui House Ltd. files pre-application for 278 single-family homes (−51.5% units) preserving 88.5 acres of open space & drainage.',
    docLabel: 'Ahwatukee Foothills News Article',
    docUrl:
      'https://www.ahwatukee.com/news/new-builder-eyes-fewer-homes-for-club-west-course/article_c9b96076-7307-443f-8adf-fed3dcd0ddef.html',
  },
];

const ERA_COLORS: Record<ChartNode['era'], string> = {
  founding: '#1f4e3d',
  water: '#c58b2a',
  legal: '#b85335',
  builders: '#235789',
};

const PARCEL_STAGES = [
  {
    id: 'stage-golf',
    years: '1993–2015',
    title: 'Championship Fairways',
    subtitle: '162 Ac Greenbelt · 0 Homes',
    badge: '18 Holes · Par 72',
  },
  {
    id: 'stage-barren',
    years: '2018–2025',
    title: 'Parched Turf & Litigation',
    subtitle: 'Water Shutoff · CC&R Battles',
    badge: '$750K → Court Cleared',
  },
  {
    id: 'stage-horton',
    years: 'Mid-2026',
    title: 'D.R. Horton Concept',
    subtitle: '573 Homes · High Density',
    badge: '3.54 DU / Acre',
  },
  {
    id: 'stage-sekisui',
    years: 'Nov 2026',
    title: 'Sekisui House Pre-App',
    subtitle: '278 Homes · 88.5 Ac Open',
    badge: '54.6% Open Space',
  },
];

export function TimelineChart() {
  const [selectedId, setSelectedId] = useState<string>('c-2026-nov');
  const active = CHART_NODES.find((n) => n.id === selectedId) ?? CHART_NODES[CHART_NODES.length - 1];

  const pathD = CHART_NODES.map((n, i) => `${i === 0 ? 'M' : 'L'} ${n.x} ${n.yValue}`).join(' ');
  const areaD = `${pathD} L ${CHART_NODES[CHART_NODES.length - 1].x} 210 L ${CHART_NODES[0].x} 210 Z`;

  return (
    <section className="panel" aria-labelledby="timeline-chart-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">Visual Trajectory &amp; Parcel Illustration</span>
          <h2 id="timeline-chart-heading">37-Year Timeline Diagram &amp; Site Evolution</h2>
        </div>
        <span className="valuation-badge">
          <Sparkles size={14} />
          <span>Click any milestone dot to inspect primary filing</span>
        </span>
      </div>

      {/* Interactive SVG Chronological Trajectory Chart */}
      <div className="chart-frame">
        <svg
          viewBox="0 0 1080 275"
          className="chronicle-svg"
          role="img"
          aria-label="Interactive timeline chart of Club West Golf Course from 1989 to November 2026"
        >
          <defs>
            <linearGradient id="sagaAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#235789" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#1f4e3d" stopOpacity="0.03" />
            </linearGradient>
          </defs>

          {/* Era background bands */}
          <rect x="25" y="18" width="195" height="192" rx="8" fill="#1f4e3d" fillOpacity="0.06" />
          <rect x="228" y="18" width="222" height="192" rx="8" fill="#c58b2a" fillOpacity="0.08" />
          <rect x="458" y="18" width="252" height="192" rx="8" fill="#b85335" fillOpacity="0.07" />
          <rect x="718" y="18" width="338" height="192" rx="8" fill="#235789" fillOpacity="0.07" />

          <text x="36" y="36" className="svg-era-label" fill="#1f4e3d">
            FOUNDING (1989–2010)
          </text>
          <text x="240" y="36" className="svg-era-label" fill="#8f6114">
            WATER CRISIS (2016–2018)
          </text>
          <text x="470" y="36" className="svg-era-label" fill="#b85335">
            COURT BATTLES (2020–2025)
          </text>
          <text x="730" y="36" className="svg-era-label" fill="#235789">
            FLIPS &amp; BUILDER PRE-APPS (2026)
          </text>

          {/* Baseline & area curve */}
          <line x1="25" y1="210" x2="1055" y2="210" stroke="#cfc6b4" strokeWidth="1.5" />
          <path d={areaD} fill="url(#sagaAreaGrad)" />
          <path d={pathD} fill="none" stroke="#1f4e3d" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Interactive nodes */}
          {CHART_NODES.map((node, idx) => {
            const isActive = node.id === active.id;
            const color = ERA_COLORS[node.era];
            const labelAbove = idx % 2 === 0 ? node.yValue - 16 : node.yValue + 22;

            return (
              <g
                key={node.id}
                className="svg-node-group"
                onClick={() => setSelectedId(node.id)}
                style={{ cursor: 'pointer' }}
              >
                <line
                  x1={node.x}
                  y1={node.yValue}
                  x2={node.x}
                  y2={210}
                  stroke={isActive ? color : '#d8d0c0'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray="3 3"
                />
                {isActive && (
                  <circle cx={node.x} cy={node.yValue} r={14} fill={color} fillOpacity="0.18" />
                )}
                <circle
                  cx={node.x}
                  cy={node.yValue}
                  r={isActive ? 7.5 : 5.5}
                  fill={isActive ? color : '#ffffff'}
                  stroke={color}
                  strokeWidth="2.5"
                />
                <text x={node.x} y={labelAbove} textAnchor="middle" className="svg-node-title" fill="#191d1a">
                  {node.label}
                </text>
                <text x={node.x} y={228} textAnchor="middle" className="svg-node-year" fill="#4e5650">
                  {node.year}
                </text>
                <text x={node.x} y={244} textAnchor="middle" className="svg-node-metric" fill={color}>
                  {node.metric}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="chart-inspector" style={{ borderLeftColor: ERA_COLORS[active.era] }}>
          <div className="chart-inspector-main">
            <span className="mono-tag">
              {active.year} · {active.metric}
            </span>
            <h3>{active.label}</h3>
            <p>{active.summary}</p>
          </div>
          {active.docUrl && (
            <a href={active.docUrl} target="_blank" rel="noreferrer" className="chart-doc-btn">
              <span>{active.docLabel}</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* 4-Panel Illustrated Parcel Evolution Schematic */}
      <div className="parcel-illustration-grid">
        {PARCEL_STAGES.map((stage, index) => (
          <div key={stage.id} className="parcel-stage-card">
            <div className="parcel-stage-svg-wrap">
              <svg viewBox="0 0 240 120" className="parcel-mini-svg" aria-hidden="true">
                <rect x="0" y="0" width="240" height="120" rx="10" fill={index === 1 ? '#ebe1ce' : '#eef3ee'} />
                {index === 0 && (
                  <>
                    <path
                      d="M18,95 C52,25 96,100 135,38 C162,4 202,42 222,22 L226,45 C196,72 162,36 138,68 C102,115 58,52 34,106 Z"
                      fill="#2b6b4f"
                      opacity="0.88"
                    />
                    <ellipse cx="144" cy="76" rx="18" ry="10" fill="#4b9cd3" opacity="0.8" />
                    <circle cx="44" cy="30" r="8" fill="#1f4e3d" />
                    <circle cx="195" cy="90" r="9" fill="#1f4e3d" />
                    <path d="M22,96 C65,45 100,88 140,52 C170,26 196,46 220,30" fill="none" stroke="#f7f2e7" strokeWidth="2" strokeDasharray="4 3" />
                  </>
                )}
                {index === 1 && (
                  <>
                    <path
                      d="M18,95 C52,25 96,100 135,38 C162,4 202,42 222,22 L226,45 C196,72 162,36 138,68 C102,115 58,52 34,106 Z"
                      fill="#c2ab82"
                      opacity="0.9"
                    />
                    <line x1="30" y1="22" x2="210" y2="98" stroke="#b85335" strokeWidth="2.5" strokeDasharray="6 4" />
                    <rect x="92" y="42" width="56" height="34" rx="6" fill="#ffffff" stroke="#b85335" strokeWidth="2" />
                    <text x="120" y="63" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b85335">
                      SHUTDOWN
                    </text>
                  </>
                )}
                {index === 2 && (
                  <>
                    <rect x="14" y="14" width="212" height="92" rx="6" fill="#f7e5df" stroke="#b85335" strokeWidth="1.5" />
                    {Array.from({ length: 6 }).map((_, row) =>
                      Array.from({ length: 12 }).map((__, col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={22 + col * 16.5}
                          y={20 + row * 14}
                          width="12"
                          height="9"
                          rx="1.5"
                          fill="#b85335"
                          opacity="0.82"
                        />
                      )),
                    )}
                  </>
                )}
                {index === 3 && (
                  <>
                    <rect x="12" y="12" width="216" height="96" rx="8" fill="#d9eadf" stroke="#1f4e3d" strokeWidth="1.5" />
                    <path
                      d="M14,72 C65,42 125,92 226,44 L226,106 L14,106 Z"
                      fill="#357a5b"
                      opacity="0.32"
                    />
                    {Array.from({ length: 3 }).map((_, row) =>
                      Array.from({ length: 8 }).map((__, col) => (
                        <rect
                          key={`${row}-${col}`}
                          x={26 + col * 24}
                          y={22 + row * 17}
                          width="15"
                          height="10"
                          rx="2"
                          fill="#235789"
                        />
                      )),
                    )}
                    <text x="120" y="96" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#1b3f31">
                      88.5 AC OPEN SPACE &amp; DRAINAGE
                    </text>
                  </>
                )}
              </svg>
            </div>
            <div className="parcel-stage-body">
              <div className="parcel-stage-top">
                <span className="mono-tag">{stage.years}</span>
                <span className="status-chip">{stage.badge}</span>
              </div>
              <h4>{stage.title}</h4>
              <p>{stage.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
