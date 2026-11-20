import { useState } from 'react';
import { Eye, EyeOff, Info } from 'lucide-react';

type ZoneId = 'west-50' | 'central-60' | 'east-70' | 'hillside-70' | 'open-amenity';

interface ZoneInfo {
  id: ZoneId;
  title: string;
  lotSize: string;
  units: string;
  mix: string;
  color: string;
  notes: string;
}

const ZONES: Record<ZoneId, ZoneInfo> = {
  'west-50': {
    id: 'west-50',
    title: 'West Fairway Corridor',
    lotSize: "50' × 125'",
    units: '82 Lots',
    mix: '29.5%',
    color: '#a79b64',
    notes:
      'Follows the former western 9 holes from W. Chandler Blvd & S. 17th Ave curving southeast toward W. Liberty Ln.',
  },
  'central-60': {
    id: 'central-60',
    title: 'Central Fairway Corridor',
    lotSize: "60' × 135'",
    units: '96 Lots',
    mix: '34.5%',
    color: '#d697a8',
    notes:
      'Central north-south spine from W. Chandler Blvd down to W. Liberty Ln, flanked by wide retention & greenbelt corridors.',
  },
  'east-70': {
    id: 'east-70',
    title: 'East Fairway & Connector Corridors',
    lotSize: "70' × 135'",
    units: '100 Lots (incl. Hillside)',
    mix: '36.0% combined',
    color: '#cb834d',
    notes:
      'Includes the east-west central connector arm and the northeast fairway corridor running parallel to S. Central Ave up to W. Chandler Blvd.',
  },
  'hillside-70': {
    id: 'hillside-70',
    title: 'Gated Hillside Parcels (East of S. Central Ave)',
    lotSize: "70' × 135'",
    units: 'Part of 100-Lot 70\' Tier',
    mix: 'Gated Enclaves',
    color: '#b86832',
    notes:
      'Three hillside open-space envelopes east of S. Central Ave tucked into the foothills ridge, including two parcels marked GATED PARCELS.',
  },
  'open-amenity': {
    id: 'open-amenity',
    title: 'Amenitized & Passive Open Space + Retention',
    lotSize: 'Open Space & Drainage',
    units: '88.49 Acres',
    mix: '55.0% of Site',
    color: '#4c9562',
    notes:
      'Wraps all residential pods with retention basins (RET.), perimeter buffers, hillside preserve, and the standalone AMENITY park parcel.',
  },
};

export function InteractiveSitePlanSvg() {
  const [activeZone, setActiveZone] = useState<ZoneId>('open-amenity');
  const [showStreets, setShowStreets] = useState(true);
  const [showOpenSpace, setShowOpenSpace] = useState(true);
  const [showLots, setShowLots] = useState(true);

  const info = ZONES[activeZone];

  return (
    <div className="vector-plan-wrap">
      <div className="vector-toolbar">
        <div className="vector-layer-toggles" role="group" aria-label="Map layers">
          <button
            type="button"
            className={`layer-btn ${showOpenSpace ? 'active' : ''}`}
            onClick={() => setShowOpenSpace((v) => !v)}
          >
            {showOpenSpace ? <Eye size={13} /> : <EyeOff size={13} />}
            <span>Open Space (88.49 ac)</span>
          </button>
          <button
            type="button"
            className={`layer-btn ${showLots ? 'active' : ''}`}
            onClick={() => setShowLots((v) => !v)}
          >
            {showLots ? <Eye size={13} /> : <EyeOff size={13} />}
            <span>278 Lot Pods</span>
          </button>
          <button
            type="button"
            className={`layer-btn ${showStreets ? 'active' : ''}`}
            onClick={() => setShowStreets((v) => !v)}
          >
            {showStreets ? <Eye size={13} /> : <EyeOff size={13} />}
            <span>Arterial Roads</span>
          </button>
        </div>
        <span className="mono-tag">Tap any corridor or parcel to inspect</span>
      </div>

      <svg
        viewBox="0 0 960 640"
        className="vector-site-svg"
        role="img"
        aria-label="Vector schematic of Club West 278-lot preliminary site plan with 88.49 acres of open space"
      >
        <defs>
          <pattern id="topoGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e4ddd0" strokeWidth="0.6" />
          </pattern>
        </defs>

        {/* Surrounding Ahwatukee Foothills neighborhood context */}
        <rect x="0" y="0" width="960" height="640" rx="12" fill="#f3efe6" />
        <rect x="0" y="0" width="960" height="640" rx="12" fill="url(#topoGrid)" opacity="0.65" />

        {/* Subtle hillside contour lines on east/southeast foothills */}
        <g fill="none" stroke="#d5ccb9" strokeWidth="1" opacity="0.85">
          <path d="M740,180 C800,210 830,270 920,300" />
          <path d="M720,230 C790,260 825,330 930,360" />
          <path d="M680,295 C750,315 810,390 930,420" />
          <path d="M620,460 C710,435 810,470 930,520" />
          <text x="860" y="255" fontSize="9.5" fill="#9a907c" fontFamily="JetBrains Mono, monospace">
            FOOTHILLS
          </text>
          <text x="858" y="268" fontSize="9.5" fill="#9a907c" fontFamily="JetBrains Mono, monospace">
            RIDGELINE
          </text>
        </g>

        {/* Open Space / Retention / Amenity Envelopes (88.49 AC - 55%) */}
        {showOpenSpace && (
          <g
            onClick={() => setActiveZone('open-amenity')}
            style={{ cursor: 'pointer' }}
            opacity={activeZone === 'open-amenity' ? 1 : 0.88}
          >
            {/* West corridor green envelope */}
            <path
              d="M74,142 L198,144 L208,195 L134,196 L132,272 L212,350 L328,468 L374,504 L360,526 L282,475 L155,342 L74,242 Z"
              fill="#97cfa1"
              stroke="#245c39"
              strokeWidth={activeZone === 'open-amenity' ? '2.5' : '1.4'}
            />

            {/* Standalone AMENITY park parcel */}
            <path
              d="M210,206 C235,204 252,240 278,295 C295,332 315,350 296,368 C275,382 238,342 218,302 C202,268 198,218 210,206 Z"
              fill="#84c890"
              stroke="#245c39"
              strokeWidth={activeZone === 'open-amenity' ? '2.5' : '1.5'}
            />
            <text
              x="252"
              y="292"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#153c24"
              fontFamily="JetBrains Mono, monospace"
            >
              AMENITY
            </text>

            {/* Central corridor wide retention + open space */}
            <path
              d="M335,112 L462,102 L468,185 L452,320 L620,318 L632,374 L486,380 L476,418 L572,492 L554,515 L446,455 L428,530 L380,536 L384,458 L338,402 L344,335 L330,275 Z"
              fill="#97cfa1"
              stroke="#245c39"
              strokeWidth={activeZone === 'open-amenity' ? '2.5' : '1.4'}
            />

            {/* Retention labels inside central corridor */}
            <g fontSize="9" fontWeight="700" fill="#18472a" fontFamily="JetBrains Mono, monospace">
              <text x="355" y="185">RET.</text>
              <text x="366" y="295">RET.</text>
              <text x="444" y="405">RET.</text>
              <text x="458" y="268">RET.</text>
            </g>

            {/* Northeast fairway green corridor */}
            <path
              d="M546,298 L536,222 L630,132 L725,42 L768,68 L740,104 L675,168 L610,232 L612,298 Z"
              fill="#97cfa1"
              stroke="#245c39"
              strokeWidth={activeZone === 'open-amenity' ? '2.5' : '1.4'}
            />
            <text x="556" y="268" fontSize="9" fontWeight="700" fill="#18472a" fontFamily="JetBrains Mono, monospace">
              RET.
            </text>
            <text x="722" y="88" fontSize="9" fontWeight="700" fill="#18472a" fontFamily="JetBrains Mono, monospace">
              RET.
            </text>

            {/* 3 Southeast Hillside Envelopes */}
            <path
              d="M622,332 C642,332 652,355 648,412 C645,428 628,432 620,418 C612,395 612,345 622,332 Z"
              fill="#84c890"
              stroke="#245c39"
              strokeWidth="1.4"
            />
            <text x="633" y="388" textAnchor="middle" fontSize="8" fontWeight="700" fill="#153c24" fontFamily="JetBrains Mono, monospace">
              HILLSIDE
            </text>

            <path
              d="M674,312 C704,310 732,332 728,365 C722,382 690,370 670,350 C662,338 664,316 674,312 Z"
              fill="#84c890"
              stroke="#245c39"
              strokeWidth="1.4"
            />
            <text x="688" y="336" textAnchor="middle" fontSize="8" fontWeight="700" fill="#153c24" fontFamily="JetBrains Mono, monospace">
              HILLSIDE
            </text>

            <path
              d="M768,362 L798,370 L792,438 L762,492 L652,542 L636,515 L736,464 L760,415 Z"
              fill="#84c890"
              stroke="#245c39"
              strokeWidth="1.4"
            />
          </g>
        )}

        {/* Residential Lot Pods (278 Lots) */}
        {showLots && (
          <g>
            {/* 1. West Corridor: 50' x 125' (82 Lots / 29.5%) */}
            <g
              onClick={() => setActiveZone('west-50')}
              style={{ cursor: 'pointer' }}
              opacity={activeZone === 'west-50' ? 1 : 0.9}
            >
              <path
                d="M84,152 L190,154 L190,182 L118,182 L118,266 L154,282 L192,350 L348,504 L334,518 L174,362 L134,292 L88,248 Z"
                fill="#b8aa6d"
                stroke={activeZone === 'west-50' ? '#191d1a' : '#574f29'}
                strokeWidth={activeZone === 'west-50' ? '2.5' : '1.2'}
              />
              {/* Internal street centerline */}
              <path
                d="M98,166 L186,168 M102,166 L102,244 L152,292 L185,356 L340,510"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <rect x="86" y="378" width="106" height="34" rx="6" fill="#ffffff" fillOpacity="0.92" stroke="#857941" />
              <text x="139" y="393" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#463f1e">
                50&apos; × 125&apos; Pod
              </text>
              <text x="139" y="405" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#6b6133" fontFamily="JetBrains Mono, monospace">
                82 LOTS (29.5%)
              </text>
            </g>

            {/* 2. Central Corridor: 60' x 135' (96 Lots / 34.5%) */}
            <g
              onClick={() => setActiveZone('central-60')}
              style={{ cursor: 'pointer' }}
              opacity={activeZone === 'central-60' ? 1 : 0.9}
            >
              <path
                d="M388,120 L432,120 L432,334 L410,334 L410,368 L352,368 L352,334 L388,334 Z"
                fill="#dca1b1"
                stroke={activeZone === 'central-60' ? '#191d1a' : '#733b4b'}
                strokeWidth={activeZone === 'central-60' ? '2.5' : '1.2'}
              />
              <path
                d="M402,380 L438,380 L452,440 L516,472 L516,496 L432,462 L422,522 L386,522 L396,440 Z"
                fill="#dca1b1"
                stroke={activeZone === 'central-60' ? '#191d1a' : '#733b4b'}
                strokeWidth={activeZone === 'central-60' ? '2.5' : '1.2'}
              />
              {/* Internal street centerlines */}
              <path
                d="M410,124 L410,350 L356,350 M410,350 L414,448 L512,484 M414,448 L404,518"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <rect x="282" y="218" width="102" height="34" rx="6" fill="#ffffff" fillOpacity="0.93" stroke="#995267" />
              <text x="333" y="233" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#6b2e41">
                60&apos; × 135&apos; Pod
              </text>
              <text x="333" y="245" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#8f435a" fontFamily="JetBrains Mono, monospace">
                96 LOTS (34.5%)
              </text>
            </g>

            {/* 3. East Corridor + Connector: 70' x 135' (part of 100 Lots / 36.0%) */}
            <g
              onClick={() => setActiveZone('east-70')}
              style={{ cursor: 'pointer' }}
              opacity={activeZone === 'east-70' ? 1 : 0.9}
            >
              {/* East-West central connector */}
              <path
                d="M446,334 L592,334 L592,366 L446,360 Z"
                fill="#d48d56"
                stroke={activeZone === 'east-70' ? '#191d1a' : '#7a451c'}
                strokeWidth={activeZone === 'east-70' ? '2.5' : '1.2'}
              />
              {/* Northeast fairway arm */}
              <path
                d="M558,282 L554,230 L642,142 L724,62 L750,80 L674,162 L592,240 L592,282 Z"
                fill="#d48d56"
                stroke={activeZone === 'east-70' ? '#191d1a' : '#7a451c'}
                strokeWidth={activeZone === 'east-70' ? '2.5' : '1.2'}
              />
              {/* Internal street centerlines */}
              <path
                d="M448,348 L588,350 M574,278 L572,235 L736,72"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <rect x="492" y="138" width="118" height="34" rx="6" fill="#ffffff" fillOpacity="0.93" stroke="#9e5924" />
              <text x="551" y="153" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#6b3912">
                70&apos; × 135&apos; East Pod
              </text>
              <text x="551" y="165" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#9e5924" fontFamily="JetBrains Mono, monospace">
                100 LOTS TIER (36.0%)
              </text>
            </g>

            {/* 4. Gated Hillside Enclaves (70' x 135') */}
            <g
              onClick={() => setActiveZone('hillside-70')}
              style={{ cursor: 'pointer' }}
              opacity={activeZone === 'hillside-70' ? 1 : 0.92}
            >
              <path
                d="M622,340 L644,340 L644,364 L622,364 Z"
                fill="#d48d56"
                stroke={activeZone === 'hillside-70' ? '#191d1a' : '#7a451c'}
                strokeWidth={activeZone === 'hillside-70' ? '2.5' : '1.2'}
              />
              <path
                d="M694,322 L724,338 L718,360 L692,348 Z"
                fill="#d48d56"
                stroke={activeZone === 'hillside-70' ? '#191d1a' : '#7a451c'}
                strokeWidth={activeZone === 'hillside-70' ? '2.5' : '1.2'}
              />
              <path
                d="M770,370 L790,374 L782,434 L752,482 L652,530 L644,510 L740,464 L764,418 Z"
                fill="#d48d56"
                stroke={activeZone === 'hillside-70' ? '#191d1a' : '#7a451c'}
                strokeWidth={activeZone === 'hillside-70' ? '2.5' : '1.2'}
              />
              <path
                d="M650,520 L748,472 L774,424 L780,374"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              {/* Gated Parcels callout */}
              <line x1="712" y1="354" x2="718" y2="395" stroke="#191d1a" strokeWidth="1.2" />
              <line x1="735" y1="418" x2="758" y2="432" stroke="#191d1a" strokeWidth="1.2" />
              <rect x="668" y="395" width="90" height="28" rx="5" fill="#ffffff" fillOpacity="0.94" stroke="#7a451c" />
              <text x="713" y="408" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#191d1a">
                GATED HILLSIDE
              </text>
              <text x="713" y="418" textAnchor="middle" fontSize="8" fontWeight="700" fill="#9e5924" fontFamily="JetBrains Mono, monospace">
                PARCELS (70&apos;)
              </text>
            </g>
          </g>
        )}

        {/* Major Arterial Roads */}
        {showStreets && (
          <g>
            {/* W. Chandler Blvd */}
            <path
              d="M15,126 C180,144 350,115 510,92 C645,74 715,28 795,46 C860,60 905,74 945,86"
              fill="none"
              stroke="#5b635e"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M15,126 C180,144 350,115 510,92 C645,74 715,28 795,46 C860,60 905,74 945,86"
              fill="none"
              stroke="#e9ecef"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <rect x="128" y="102" width="120" height="18" rx="4" fill="#ffffff" fillOpacity="0.92" />
            <text x="188" y="114" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#191d1a">
              W. CHANDLER BLVD.
            </text>
            <rect x="530" y="64" width="120" height="18" rx="4" fill="#ffffff" fillOpacity="0.92" />
            <text x="590" y="76" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#191d1a">
              W. CHANDLER BLVD.
            </text>

            {/* S. 17th Ave */}
            <path
              d="M15,286 C52,275 68,248 68,200 L72,134"
              fill="none"
              stroke="#6c757d"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <rect x="16" y="218" width="84" height="17" rx="4" fill="#ffffff" fillOpacity="0.92" />
            <text x="58" y="230" textAnchor="middle" fontSize="9" fontWeight="700" fill="#191d1a">
              S. 17TH AVE.
            </text>

            {/* S. Central Ave */}
            <path
              d="M524,552 C578,510 598,425 604,352 C610,275 655,212 720,152 L795,46"
              fill="none"
              stroke="#5b635e"
              strokeWidth="7.5"
              strokeLinecap="round"
            />
            <rect x="615" y="216" width="96" height="17" rx="4" fill="#ffffff" fillOpacity="0.92" />
            <text x="663" y="228" textAnchor="middle" fontSize="9" fontWeight="700" fill="#191d1a">
              S. CENTRAL AVE.
            </text>

            {/* W. Liberty Ln */}
            <path
              d="M140,516 C270,564 435,568 565,542"
              fill="none"
              stroke="#6c757d"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <rect x="292" y="544" width="98" height="17" rx="4" fill="#ffffff" fillOpacity="0.92" />
            <text x="341" y="556" textAnchor="middle" fontSize="9" fontWeight="700" fill="#191d1a">
              W. LIBERTY LN.
            </text>

            {/* AZ Loop 202 */}
            <rect x="12" y="592" width="936" height="20" rx="3" fill="#495057" />
            <line x1="12" y1="602" x2="948" y2="602" stroke="#f8f9fa" strokeWidth="1.5" strokeDasharray="10 8" />
            <rect x="415" y="593" width="130" height="18" rx="4" fill="#ffffff" />
            <text x="480" y="605" textAnchor="middle" fontSize="10" fontWeight="700" fill="#191d1a">
              AZ LOOP 202
            </text>
          </g>
        )}

        {/* North Arrow & Scale Bar */}
        <g transform="translate(888, 505)">
          <polygon points="0,-24 -7,0 0,-6 7,0" fill="#191d1a" />
          <text x="0" y="14" textAnchor="middle" fontSize="11" fontWeight="700" fill="#191d1a">
            N
          </text>
          <text x="0" y="28" textAnchor="middle" fontSize="8" fill="#495057" fontFamily="JetBrains Mono, monospace">
            1&quot; = 250&apos;
          </text>
        </g>
      </svg>

      {/* Interactive Zone Inspector Card */}
      <div className="vector-inspector" style={{ borderLeftColor: info.color }}>
        <div className="vector-inspector-head">
          <div className="vector-zone-title">
            <span className="lot-swatch" style={{ backgroundColor: info.color }} />
            <div>
              <span className="mono-tag">
                {info.lotSize} · {info.units} ({info.mix})
              </span>
              <h4>{info.title}</h4>
            </div>
          </div>
          <div className="vector-zone-pills">
            {(Object.keys(ZONES) as ZoneId[]).map((zId) => (
              <button
                key={zId}
                type="button"
                className={`chip ${activeZone === zId ? 'active' : ''}`}
                onClick={() => setActiveZone(zId)}
              >
                {zId === 'west-50'
                  ? "50' West"
                  : zId === 'central-60'
                    ? "60' Central"
                    : zId === 'east-70'
                      ? "70' East"
                      : zId === 'hillside-70'
                        ? "70' Hillside"
                        : 'Open Space'}
              </button>
            ))}
          </div>
        </div>
        <p className="vector-inspector-note">
          <Info size={14} />
          <span>{info.notes}</span>
        </p>
      </div>
    </div>
  );
}
