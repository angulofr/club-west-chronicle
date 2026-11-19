import { MapPin, ArrowUpRight, Compass, Layers } from 'lucide-react';
import { PARCEL_METADATA } from '../data/clubWestData';

export type ActiveTab = 'all' | 'flow' | 'timeline' | 'proposals' | 'vault' | 'sources';

interface HeroHeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

const TABS: { id: ActiveTab; label: string }[] = [
  { id: 'all', label: 'Full Dossier' },
  { id: 'flow', label: 'Ownership Flow' },
  { id: 'proposals', label: '278 vs. 573 Homes' },
  { id: 'timeline', label: '1989–2026 Timeline' },
  { id: 'vault', label: 'HOA & Court Vault' },
  { id: 'sources', label: 'Players & Sources' },
];

const KPIS = [
  { label: 'Parcel Footprint', value: '162 Acres', sub: '18 Holes · Par 72 (1993–2018)' },
  { label: 'Distressed Sale (2020)', value: '$750,000', sub: 'The Edge at Club West LLC' },
  { label: 'Post-Litigation Flip (2026)', value: '$2.1 Million', sub: 'Community Harmony Coalition' },
  { label: 'Latest Pre-App (Nov 2026)', value: '278 Homes', sub: 'Sekisui House · 88.5 Ac Open Space' },
];

export function HeroHeader({ activeTab, onTabChange }: HeroHeaderProps) {
  return (
    <header className="hero-header">
      <svg
        className="hero-topo"
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-40,340 C180,270 310,390 540,300 C770,210 920,330 1240,220"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M-40,280 C200,200 360,330 600,240 C840,150 980,260 1240,160"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M-40,220 C240,140 420,260 660,175 C900,90 1040,190 1240,95"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M-40,155 C280,75 470,190 720,105 C960,25 1090,115 1240,35"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </svg>

      <div className="container hero-inner">
        <div className="hero-top-row">
          <div className="eyebrow-pill">
            <Compass size={14} />
            <span>Ahwatukee Foothills Archive · Updated Nov 2026</span>
          </div>
          <a
            className="breaking-link"
            href="https://www.ahwatukee.com/news/new-builder-eyes-fewer-homes-for-club-west-course/article_c9b96076-7307-443f-8adf-fed3dcd0ddef.html"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ahwatukee Foothills News: Sekisui House 278-Home Filing</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="hero-title-block">
          <h1>Club West Chronicle</h1>
          <p className="hero-lead">
            The complete 37-year history of Phoenix’s <strong>162-acre Club West Golf Course</strong>—from
            1989 master covenants and the potable water crisis to closed-door HOA amendments, multi-year
            court battles, the $2.1M investor flip, and Sekisui House’s November 2026 lower-density proposal.
          </p>
          <div className="parcel-meta">
            <span>
              <MapPin size={14} /> {PARCEL_METADATA.address}
            </span>
            <span>
              <Layers size={14} /> {PARCEL_METADATA.village}
            </span>
          </div>
        </div>

        <div className="kpi-grid">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="kpi-card">
              <span className="kpi-label">{kpi.label}</span>
              <strong className="kpi-value">{kpi.value}</strong>
              <span className="kpi-sub">{kpi.sub}</span>
            </div>
          ))}
        </div>

        <nav className="section-nav" aria-label="Dossier views">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`nav-pill ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
