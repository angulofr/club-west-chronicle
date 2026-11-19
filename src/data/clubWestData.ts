import {
  TimelineEvent,
  OwnershipNode,
  ProposalSpec,
  HoaDocument,
  LegalDocket,
  Stakeholder,
  SourceReference,
  EraId,
} from '../types/clubWest';

export const PARCEL_METADATA = {
  name: 'Club West Golf Club (Foothills Club West)',
  address: '16400 S. 14th Ave, Phoenix, AZ 85045',
  clubhouseAddress: '16414 S. 14th Ave, Phoenix, AZ 85045',
  village: 'Ahwatukee Foothills Village (City of Phoenix)',
  totalAcres: 162,
  holes: 18,
  par: 72,
  architects: 'Brian Whitcomb & Ken Kavanaugh',
  openedYear: 1993,
  hoaName: 'Foothills Club West Community Association',
  hoaManagement: '360 Community Management, LLC (formerly Vision Community Management)',
  hoaContactEmail: 'clubwest@360communitymgmt.com',
  hoaPhone: '602-863-3600',
  hoaPortalUrl:
    'https://web.archive.org/web/20260619065059/https://www.360propertymgt.com/community/foothills-club-west-community-association/',
  hoaPortalLiveUrl: 'https://www.360propertymgt.com/community/foothills-club-west-community-association/',
};

export const ERAS: { id: EraId | 'all'; label: string; years: string; description: string }[] = [
  {
    id: 'all',
    label: 'Complete Saga',
    years: '1989–2026',
    description: 'Full 37-year arc from master-plan covenants to Sekisui House’s 278-home proposal.',
  },
  {
    id: 'founding',
    label: 'Founding & Covenants',
    years: '1989–2010',
    description: 'Master CC&Rs (Doc #89-337438), 1993 course opening, and declarant transfers.',
  },
  {
    id: 'water-crisis',
    label: 'Water Crisis & Closure',
    years: '2013–2018',
    description: 'Reclaimed water loss, potable city water bills, HOA feuds, and final shuttering.',
  },
  {
    id: 'legal-battles',
    label: 'HOA & Court Warfare',
    years: '2018–2025',
    description: 'Closed-door amendments, Club West Conservancy lawsuits, and appellate rulings.',
  },
  {
    id: 'redevelopment',
    label: 'Flips & Homebuilders',
    years: '2026',
    description: 'Community Harmony Coalition flip, D.R. Horton (573 homes), and Sekisui House (278 homes).',
  },
];

export const OWNERSHIP_FLOW: OwnershipNode[] = [
  {
    id: 'shea-founding',
    step: 1,
    period: '1989 – 1993',
    owner: 'Master Developer / Shea Homes',
    entityDetails: 'Original Foothills Club West master-planned developer (Shea Homes / UDC Homes lineage).',
    transactionPrice: 'Master-Planned Entitlement',
    landStatus: 'Dedicated Golf & Open Space',
    tone: 'emerald',
    highlights: [
      'July 21, 1989 Master CC&Rs (Doc #89-337438) required 75% member vote for major amendments.',
      '1993 Golf Course Declaration restricted parcel to golf, driving range & clubhouse.',
      '18-hole par-72 course designed by Brian Whitcomb & Ken Kavanaugh opened in 1993.',
    ],
  },
  {
    id: 'wilson-gee',
    step: 2,
    period: 'Pre-2016 – May 2020',
    owner: 'Wilson Gee (Kwang Co. / Hiro Investment)',
    entityDetails: 'Golf course owner/investor operating multiple Ahwatukee courses.',
    transactionPrice: 'Private Ownership Era',
    landStatus: 'Closed (2016) · Brief Revival (Late 2017–Feb 2018) · Barren',
    tone: 'amber',
    highlights: [
      'Shutdown of local water reclamation facility forced costly potable City of Phoenix drinking water.',
      '2016 water shutoff over ~$159K delinquency ($100K paid); course closed amid HOA lawsuits.',
      'Separate operator revived turf late 2017–Feb 2018 before going broke over $200K+ water bills.',
    ],
  },
  {
    id: 'the-edge',
    step: 3,
    period: 'June 1, 2020 – May 2026',
    owner: 'The Edge at Club West LLC',
    entityDetails: 'Redevelopment buyer acquiring the shuttered 162-acre parcel from Gee’s entities.',
    transactionPrice: '$750,000',
    landStatus: 'Litigated (CV2021-018435 & 1 CA-SA 25-0117) · Cleared for Alternative Use',
    tone: 'terracotta',
    highlights: [
      'Purchased shuttered course & clubhouse for $750,000 on June 1, 2020.',
      'Fought 4+ years of litigation against Club West Conservancy over perpetual golf covenants.',
      'Court rulings established owner is not permanently bound to keep land as a golf course.',
    ],
  },
  {
    id: 'harmony-coalition',
    step: 4,
    period: 'May 29, 2026 – Present',
    owner: 'Community Harmony Coalition LLC',
    entityDetails: '15-investor coalition that acquired the cleared parcel and retained Nathan & Associates.',
    transactionPrice: '$2.1 Million',
    landStatus: 'Marketed for Residential Redevelopment (2.8× 2020 Price)',
    tone: 'slate',
    highlights: [
      'Acquired 162 acres + clubhouse from The Edge for $2.1M on May 29, 2026.',
      'Placed property back on the market ~1 month later via Scottsdale brokerage Nathan & Associates Inc.',
      'Fielded competing builder pre-applications with City of Phoenix Planning & Development.',
    ],
  },
  {
    id: 'builder-proposals',
    step: 5,
    period: 'Mid – Nov 2026',
    owner: 'Builder Pre-Apps: D.R. Horton vs. Sekisui House',
    entityDetails: 'Active City of Phoenix Planning & Development pre-application phase (no final rezoning yet).',
    transactionPrice: 'Pending Builder Acquisition & Rezoning',
    landStatus: 'D.R. Horton (573 Homes) → Sekisui House (278 Homes / 88.5 Ac Open Space)',
    tone: 'cobalt',
    highlights: [
      'D.R. Horton filed pre-application for 573 homes (~3.54 DU/ac), sparking density concerns.',
      'Nov 2026: Japanese builder Sekisui House Ltd. filed pre-app for 278 single-family homes.',
      'Sekisui plan preserves 88.5 acres (54.6%) as amenitized/passive open space & drainage.',
    ],
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'evt-1989-ccrs',
    dateLabel: 'July 21, 1989',
    sortOrder: 198907,
    era: 'founding',
    category: 'Founding & Covenants',
    title: 'Master CC&Rs Recorded for Foothills Club West (Doc #89-337438)',
    subtitle: 'Foundational community governance with 75% supermajority protection',
    summary:
      'Recorded July 21, 1989 with the Maricopa County Recorder (Doc No. 89-337438), the Master Declaration of CC&Rs established Foothills Club West’s master governance, architectural controls, and high amendment thresholds.',
    details: [
      'Structured developer declarant rights alongside individual residential Tract Declarations.',
      'Required a strict 75% supermajority member vote for substantive amendments to the master covenants.',
      'Archived directly via Wayback Machine from Vision Community Management document records.',
    ],
    keyFigures: ['Shea Homes / UDC Homes', 'Maricopa County Recorder (Doc #89-337438)'],
    metrics: [
      { label: 'Recorder Doc', value: '89-337438' },
      { label: 'Amendment Threshold', value: '75% Supermajority' },
    ],
    sourceIds: ['src-ccr-pdf', 'src-savvy-area'],
  },
  {
    id: 'evt-1993-opening',
    dateLabel: '1993',
    sortOrder: 199301,
    era: 'founding',
    category: 'Founding & Covenants',
    title: 'Club West Golf Club Opens & Golf Course Declaration Recorded',
    subtitle: '162-acre, 18-hole championship desert course opens in Ahwatukee',
    summary:
      'Designed by golf course architects Brian Whitcomb and Ken Kavanaugh, the 18-hole, par-72 Club West Golf Club opened in 1993 alongside a recorded Golf Course Declaration restricting the land to golf, driving range, and clubhouse uses.',
    details: [
      'Built as the centerpiece recreational and visual greenbelt amenity for Foothills Club West homeowners.',
      'The separate Golf Course Declaration explicitly restricted the property to golf course, driving range, and clubhouse facilities.',
      'Adjacent premium lots were marketed and sold around fairway views and open-space corridors.',
    ],
    keyFigures: ['Brian Whitcomb', 'Ken Kavanaugh', 'Shea Homes'],
    metrics: [
      { label: 'Course Acreage', value: '162 Acres' },
      { label: 'Layout', value: '18 Holes · Par 72' },
    ],
    sourceIds: ['src-golf-dec-pdf', 'src-golfpass'],
  },
  {
    id: 'evt-2010-declarant',
    dateLabel: 'September 2010',
    sortOrder: 201009,
    era: 'founding',
    category: 'HOA & Governance',
    title: 'Assignment of Declarant Rights to the HOA Board',
    subtitle: 'Shea Homes transfers developer-era declarant rights to Foothills Club West HOA',
    summary:
      'In September 2010, the Foothills Club West Community Association executed and recorded an Assignment of Declarant Rights stepping into the shoes of original developer Shea Homes.',
    details: [
      'Intended at the time to wrap up developer transition control within the mature community.',
      'Later declared null and void ab initio by Judge Daniel J. Kiley in CV2020-003577 when used to bypass the 75% member vote.',
    ],
    keyFigures: ['Foothills Club West HOA', 'Shea Homes'],
    sourceIds: ['src-azhoawatch', 'src-azhoawatch-oral-2020'],
  },
  {
    id: 'evt-2016-water-crisis',
    dateLabel: '2016',
    sortOrder: 201606,
    era: 'water-crisis',
    category: 'Water & Operations',
    title: 'Water Shutoff, HOA Lawsuits & First Course Closure',
    subtitle: 'Loss of reclaimed gray water triggers $159K water dispute and bitter litigation',
    summary:
      'After a local water reclamation plant shut down, owner Wilson Gee was forced to irrigate 162 acres with expensive potable Phoenix city drinking water. Facing ~$159,000 in delinquent water bills, the city briefly cut water before Gee paid $100,000—amid dueling lawsuits with the HOA—and the course closed in 2016.',
    details: [
      'Recycled gray water was no longer reliably available, sending irrigation costs soaring toward hundreds of thousands of dollars annually.',
      'The Foothills Club West HOA sued Gee alleging intentional neglect and a "hay-like appearance" violating CC&Rs requiring first-class maintenance.',
      'Gee countersued, accusing the HOA and local officials of conspiring to depress the course’s market value and force a "$10 fire sale."',
    ],
    keyFigures: ['Wilson Gee (Kwang Co. / Hiro Investment)', 'Foothills Club West HOA', 'City of Phoenix'],
    metrics: [
      { label: 'Delinquent Water Bill', value: '~$159,000' },
      { label: 'Restoration Payment', value: '$100,000' },
    ],
    sourceIds: ['src-clubresort', 'src-kennard'],
  },
  {
    id: 'evt-2017-revival',
    dateLabel: 'Late 2017 – Feb 2018',
    sortOrder: 201802,
    era: 'water-crisis',
    category: 'Water & Operations',
    title: 'Brief Revival Ends After Water Bills Top $200,000',
    subtitle: 'Short-lived operator restores turf before potable water economics force final shutdown',
    summary:
      'A subsequent golf operator leased and reopened Club West in late 2017, briefly bringing fairways and greens back to lush condition. By February 2018, city potable water bills topped $200,000, bankrupting the revival and closing the course permanently.',
    details: [
      'Demonstrated to both residents and investors that traditional 18-hole irrigation using Phoenix municipal drinking water was financially unviable.',
      'Following the February 2018 shutdown, the 162-acre corridor dried out completely and sat barren for years.',
    ],
    keyFigures: ['Interim Golf Operator', 'City of Phoenix Water Services'],
    metrics: [{ label: 'Cumulative Water Bills', value: '$200,000+' }],
    sourceIds: ['src-kennard', 'src-arizonapress'],
  },
  {
    id: 'evt-2018-amendment',
    dateLabel: 'Oct 2018 – 2019',
    sortOrder: 201810,
    era: 'legal-battles',
    category: 'HOA & Governance',
    title: 'HOA Board Executes Closed-Session Golf Declaration Amendments',
    subtitle: 'First (2018) & Fifth (2019) Amendments attempt to bypass 75% supermajority rule',
    summary:
      'In October 2018 (First Amendment) and 2019 (Fifth Amendment), the Foothills Club West HOA board met in closed executive sessions to enact amendments lowering the vote required to transition the golf course to non-golf uses.',
    details: [
      'Created a mechanism allowing conversion to non-golf uses via a simple majority vote of a 31% member quorum rather than the Master CC&Rs’ 75% supermajority.',
      'Sparked intense homeowner backlash over transparency, Arizona HOA Open Meeting Law compliance, and board authority.',
    ],
    keyFigures: ['Foothills Club West HOA Board', 'Vision Community Management'],
    metrics: [
      { label: 'Master CC&R Rule', value: '75% Supermajority' },
      { label: 'Board Amendment Rule', value: 'Majority of 31% Quorum' },
    ],
    sourceIds: ['src-azhoawatch', 'src-azhoawatch-oral-2021'],
  },
  {
    id: 'evt-2020-edge-sale',
    dateLabel: 'June 1, 2020',
    sortOrder: 202006,
    era: 'legal-battles',
    category: 'Sales & Builders',
    title: 'The Edge at Club West LLC Buys Shuttered Course for $750,000',
    subtitle: 'Redevelopment entity acquires 162 acres from Wilson Gee’s ownership group',
    summary:
      'On June 1, 2020, The Edge at Club West LLC purchased the 162-acre defunct golf course and clubhouse from Wilson Gee’s entities (Kwang Co. LLC / Hiro Investment LLC) for $750,000, setting the stage for residential redevelopment proposals.',
    details: [
      'Price reflected heavily distressed value (~$4,630 per acre) due to perpetual golf-use covenant uncertainty and dead turf.',
      'The Edge explored residential development plans, immediately mobilizing neighborhood opposition.',
    ],
    keyFigures: ['The Edge at Club West LLC', 'Wilson Gee'],
    metrics: [
      { label: 'Sale Price', value: '$750,000' },
      { label: 'Implied Price / Acre', value: '~$4,630/ac' },
    ],
    sourceIds: ['src-ktar', 'src-kennard'],
  },
  {
    id: 'evt-2020-conservancy-hoa-suit',
    dateLabel: 'June 2020 – Early 2021',
    sortOrder: 202012,
    era: 'legal-battles',
    category: 'Litigation & Appeals',
    title: 'Conservancy Defeats Secret HOA Amendments (CV2020-003577)',
    subtitle: 'Judge Daniel J. Kiley rules 2010 assignment and 2018–2019 amendments void ab initio',
    summary:
      'Homeowner nonprofit Club West Conservancy sued the Foothills Club West Community Association in CV2020-003577. Maricopa County Superior Court Judge Daniel J. Kiley granted a preliminary injunction and summary judgment declaring the 2010 Assignment, 2018 First Amendment, and 2019 Fifth Amendment null and void ab initio.',
    details: [
      'Oral arguments held June 22, 2020 and January 22, 2021 (transcripts archived by AZ HOA Watch).',
      'Ruled the HOA board violated Arizona Open Meeting Law in closed executive sessions and lacked authority to bypass the 75% Master CC&R threshold.',
      'Judge Kiley affirmed adjacent homeowners’ representational standing and held that "good intentions cannot supersede the dictates of the master [covenants]."',
    ],
    keyFigures: ['Club West Conservancy', 'Foothills Club West HOA', 'Judge Daniel J. Kiley'],
    metrics: [{ label: 'Docket', value: 'CV2020-003577' }],
    sourceIds: ['src-azhoawatch', 'src-azhoawatch-oral-2020', 'src-azhoawatch-oral-2021'],
  },
  {
    id: 'evt-2021-edge-suit',
    dateLabel: 'Late 2021 – Mar 2025',
    sortOrder: 202403,
    era: 'legal-battles',
    category: 'Litigation & Appeals',
    title: 'Multi-Year Developer Litigation Clears Land Use (CV2021-018435)',
    subtitle: 'Courts rule property owners are not legally forced to operate golf in perpetuity',
    summary:
      'In CV2021-018435 (Club West Conservancy v. Shea Homes LP & The Edge at Club West LLC), Maricopa County Superior Court judges—including Judges Timothy Thompson and Susanna C. Pineda—ruled against the Conservancy’s bid to lock the 162 acres permanently as a golf course.',
    details: [
      'Spanning over four years of motions, standing challenges, and indemnification disputes.',
      'Cleared the overarching title/use cloud by confirming owners may pursue alternative uses subject to City of Phoenix zoning and General Plan rules.',
      'Left the Conservancy facing heavy attorney-fee awards reported up to $1.07 million.',
    ],
    keyFigures: ['The Edge at Club West LLC', 'Shea Homes LP', 'Club West Conservancy', 'Judge Susanna C. Pineda'],
    metrics: [
      { label: 'Docket', value: 'CV2021-018435' },
      { label: 'Reported Fee Toll', value: '~$1.07M' },
    ],
    sourceIds: ['src-omlaw-petition', 'src-kennard', 'src-savvy-blog'],
  },
  {
    id: 'evt-2025-appeals',
    dateLabel: 'May – Oct 27, 2025',
    sortOrder: 202510,
    era: 'legal-battles',
    category: 'Litigation & Appeals',
    title: 'Arizona Court of Appeals Special Action Ruling (1 CA-SA 25-0117)',
    subtitle: 'Appellate panel clarifies Rule 54(b) & attorney-fee timelines without restoring golf mandate',
    summary:
      'Following the May 1, 2025 Petition for Special Action, the Arizona Court of Appeals (Division One) issued a published opinion on October 27, 2025 clarifying how trial courts enter sua sponte Rule 54(b) partial final judgments alongside pending attorney-fee motions, while leaving the core redevelopment clearance intact.',
    details: [
      'Opinion delivered by Presiding Judge Michael S. Catlett, joined by Chief Judge Randall M. Howe and Judge D. Steven Williams.',
      'Clarified interplay between Arizona Rules of Civil Procedure 54(b), 54(g)(3), and 54(h) for partial judgments and fee deadlines.',
      'Full Special Action Petition PDF and published appellate opinion linked in the Legal Vault.',
    ],
    keyFigures: ['Presiding Judge Michael S. Catlett', 'Club West Conservancy', 'Shea Homes LP', 'The Edge at Club West LLC'],
    metrics: [{ label: 'Appellate Docket', value: '1 CA-SA 25-0117' }],
    sourceIds: ['src-justia-opinion', 'src-findlaw-opinion', 'src-omlaw-petition'],
  },
  {
    id: 'evt-2026-harmony-flip',
    dateLabel: 'May 29 – June 2026',
    sortOrder: 202605,
    era: 'redevelopment',
    category: 'Sales & Builders',
    title: 'Community Harmony Coalition Buys Site for $2.1M & Lists for Sale',
    subtitle: '15-investor LLC acquires 162 acres from The Edge and retains Nathan & Associates',
    summary:
      'On May 29, 2026, a 15-investor group called Community Harmony Coalition LLC acquired the 162-acre former course and clubhouse from The Edge for $2.1 million—2.8× the 2020 price—and roughly a month later listed the parcel with Scottsdale land brokerage Nathan & Associates Inc.',
    details: [
      'Demonstrated immediate market repricing once the perpetual golf-course litigation risk was resolved.',
      'Nathan & Associates solicited competitive offers from major regional and national homebuilders.',
    ],
    keyFigures: ['Community Harmony Coalition LLC', 'Nathan & Associates Inc.', 'The Edge at Club West LLC'],
    metrics: [
      { label: 'Acquisition Price', value: '$2.1 Million' },
      { label: 'Implied Price / Acre', value: '~$12,963/ac' },
    ],
    sourceIds: ['src-ktar', 'src-kennard'],
  },
  {
    id: 'evt-2026-dr-horton',
    dateLabel: 'Summer 2026',
    sortOrder: 202608,
    era: 'redevelopment',
    category: 'Sales & Builders',
    title: 'D.R. Horton Floats 573-Home Pre-Application Concept',
    subtitle: 'High-density layout (~3.54 homes/acre) triggers neighborhood concern over traffic & density',
    summary:
      'National volume builder D.R. Horton—already developing nearby Upper Canyon on 373 acres of former State Trust Land west of Club West—filed pre-application paperwork with the City of Phoenix Planning and Development Department eyeing roughly 573 single-family homes across the 162-acre site.',
    details: [
      'Represented roughly triple the density of earlier conceptual developer layouts floated during The Edge era.',
      'Ahwatukee residents raised alarms over traffic, school capacity, drainage, and loss of open space.',
    ],
    keyFigures: ['D.R. Horton', 'Phoenix Planning & Development Dept.'],
    metrics: [
      { label: 'Proposed Units', value: '573 Homes' },
      { label: 'Gross Density', value: '3.54 DU / Acre' },
    ],
    sourceIds: ['src-kennard', 'src-savvy-blog'],
  },
  {
    id: 'evt-2026-sekisui-house',
    dateLabel: 'November 2026',
    sortOrder: 202611,
    era: 'redevelopment',
    category: 'Sales & Builders',
    title: 'Sekisui House Files Lower-Density Pre-App: 278 Homes & 88.5 Acres Open Space',
    subtitle: 'Japanese homebuilder slashes proposed home count by 51.5% compared to D.R. Horton concept',
    summary:
      'As reported by Ahwatukee Foothills News executive editor Paul Maryniak, Japanese homebuilder Sekisui House Ltd.—the world’s largest homebuilder—submitted a new pre-application to the Phoenix Planning and Development Department proposing 278 single-family homes while preserving 88.5 acres of open space and drainage.',
    details: [
      'Cuts proposed residential unit count by 295 homes (-51.5%) relative to D.R. Horton’s 573-home pre-application.',
      'Dedicates 88.5 of the 162 acres (54.6% of the entire site) to a mix of amenitized open space, passive open space, and drainage areas.',
      'Pre-application is an early municipal step; any development still requires formal City of Phoenix rezoning, General Plan review, and public hearings.',
    ],
    keyFigures: ['Sekisui House Ltd.', 'Paul Maryniak (Ahwatukee Foothills News)', 'Phoenix Planning & Development Dept.'],
    metrics: [
      { label: 'Proposed Units', value: '278 Single-Family Homes' },
      { label: 'Preserved Open Space', value: '88.5 Acres (54.6%)' },
      { label: 'Gross Density', value: '1.72 DU / Acre' },
    ],
    sourceIds: ['src-ahwatukee-sekisui', 'src-azbigmedia'],
  },
];

export const PROPOSALS: ProposalSpec[] = [
  {
    id: 'prop-1993',
    name: 'Original Championship Golf Course',
    proponent: 'Shea Homes / Whitcomb & Kavanaugh',
    timeframe: '1993 – 2018',
    status: 'Closed Permanently (Feb 2018)',
    totalAcres: 162,
    homesCount: 0,
    openSpaceAcres: 162,
    developedAcres: 0,
    grossDensityPerAcre: 0,
    accentColor: '#1F4E3D',
    highlights: [
      '18-hole, par-72 desert championship layout + clubhouse at 16400 S. 14th Ave.',
      'Protected by 1993 Golf Course Declaration until water costs forced shutdown.',
      'Required costly potable City of Phoenix drinking water after reclamation plant closed.',
    ],
  },
  {
    id: 'prop-drhorton',
    name: 'High-Density Residential Concept',
    proponent: 'D.R. Horton',
    timeframe: 'Mid-2026 Pre-App',
    status: 'Superseded / Exploratory Pre-App',
    totalAcres: 162,
    homesCount: 573,
    openSpaceAcres: 0,
    developedAcres: 162,
    grossDensityPerAcre: 3.54,
    accentColor: '#B85335',
    highlights: [
      'Conceptual layout submitted to Phoenix Planning & Development for 573 homes.',
      'Highest-density scenario floated for the corridor (~3.54 dwelling units/acre gross).',
      'Faced heavy community pushback alongside D.R. Horton’s nearby 373-acre Upper Canyon project.',
    ],
  },
  {
    id: 'prop-sekisui',
    name: 'Lower-Density Open-Space Concept',
    proponent: 'Sekisui House Ltd.',
    timeframe: 'Nov 2026 Pre-App',
    status: 'Active City Pre-Application',
    totalAcres: 162,
    homesCount: 278,
    openSpaceAcres: 88.5,
    developedAcres: 73.5,
    grossDensityPerAcre: 1.72,
    accentColor: '#235789',
    highlights: [
      '278 single-family homes — 295 fewer homes (-51.5%) than D.R. Horton’s concept.',
      '88.5 acres (54.6% of site) set aside for amenitized open space, passive open space & drainage.',
      'Leaves ~73.5 acres for residential lots and internal street infrastructure (~1.72 DU/ac gross).',
    ],
  },
];

export const HOA_DOCUMENTS: HoaDocument[] = [
  {
    id: 'doc-1989-ccr',
    year: 'July 21, 1989',
    title: 'Master Declaration of CC&Rs (Foothills Club West)',
    recorderRef: 'Maricopa County Recorder Doc #89-337438',
    authority: 'Original Master Developer (Shea / UDC Homes)',
    thresholdOrRule: '75% Supermajority Member Vote for Major Amendments',
    significance:
      'Foundational governing covenant for Foothills Club West and its sub-association Tract Declarations. Establishes architectural rules, assessments, and the 75% homeowner approval barrier.',
    status: 'Active / Foundational',
    links: [
      {
        label: 'Master CC&Rs PDF (Wayback)',
        url: 'https://web.archive.org/web/20240616145328/https://www.visioncommunitymanagement.com/media/vcmdocs/500828.pdf',
        isWayback: true,
      },
      {
        label: 'Original PDF',
        url: 'https://www.visioncommunitymanagement.com/media/vcmdocs/500828.pdf?6ada46d142d88',
      },
    ],
  },
  {
    id: 'doc-1993-golf-dec',
    year: '1993',
    title: 'Golf Course Declaration',
    recorderRef: 'Recorded Maricopa County Covenant Instrument',
    authority: 'Original Developer / Foothills Club West',
    thresholdOrRule: 'Dedicated Golf, Driving Range & Clubhouse Use',
    significance:
      'Restricted the 162-acre golf parcel to golf and recreational clubhouse operations, serving as the cornerstone of homeowners’ preservation claims.',
    status: 'Disputed Mechanism',
    links: [
      {
        label: 'Golf Declaration PDF (Wayback)',
        url: 'https://web.archive.org/web/20240802175536/https://www.visioncommunitymanagement.com/media/vcmdocs/954973.pdf',
        isWayback: true,
      },
      {
        label: 'Original PDF',
        url: 'https://www.visioncommunitymanagement.com/media/vcmdocs/954973.pdf?63229b581f3e0',
      },
    ],
  },
  {
    id: 'doc-2010-declarant',
    year: 'Sept 2010',
    title: 'Assignment of Declarant Rights',
    authority: 'Shea Homes → Foothills Club West HOA Board',
    thresholdOrRule: 'Board Acceptance of Developer Transition Rights',
    significance:
      'Transferred remaining developer declarant rights to the HOA board; later declared null and void ab initio by Judge Daniel J. Kiley in CV2020-003577.',
    status: 'Challenged / Invalidated',
    links: [
      {
        label: 'CV2020-003577 Case Archive (Wayback)',
        url: 'https://web.archive.org/web/20260614135722/https://azhoawatch.org/court-cases/',
        isWayback: true,
      },
      {
        label: 'June 2020 Oral Argument PDF',
        url: 'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2020-06-22_003_oral-argument.pdf',
      },
    ],
  },
  {
    id: 'doc-2018-amendment',
    year: 'Oct 2018 – 2019',
    title: 'First Amendment (2018) & Fifth Amendment (2019) to Golf Declaration',
    authority: 'Foothills Club West HOA Board (Executive Session)',
    thresholdOrRule: 'Simple Majority of 31% Quorum (Bypass Attempt)',
    significance:
      'Attempted to create a lower-threshold vote to transition the course out of golf use. Declared null and void ab initio by Judge Daniel J. Kiley in CV2020-003577.',
    status: 'Challenged / Invalidated',
    links: [
      {
        label: 'Jan 2021 Oral Argument PDF',
        url: 'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2021-01-22_014_oral-argument.pdf',
      },
      {
        label: 'AZ HOA Watch Archive (Wayback)',
        url: 'https://web.archive.org/web/20260614135722/https://azhoawatch.org/court-cases/',
        isWayback: true,
      },
    ],
  },
  {
    id: 'doc-arch-guidelines',
    year: 'Rev. Jan 26, 2022',
    title: 'Architectural & Landscaping Guidelines + Approved Paint Palette',
    authority: 'Foothills Club West Architectural Committee (360 / Vision)',
    thresholdOrRule: 'Prior Approval Required for Exterior / Golf-Facing Lots',
    significance:
      'Details restrictions for lots facing washes and the former golf course, exterior paint approvals, front-yard plant minimums, pergolas, and shade sails.',
    status: 'Active / Foundational',
    links: [
      {
        label: 'Revised Guidelines (2022 PDF)',
        url: 'https://visioncommunitymanagement.com/images/surveymonkey/FCW%20Revised%20Guidelines%202022-01-26.pdf',
      },
      {
        label: 'Approved Paint Colors PDF',
        url: 'https://www.visioncommunitymanagement.com/media/vcmdocs/1494914.pdf?630a05db89ab9',
      },
      {
        label: '360 Portal (Wayback)',
        url: 'https://web.archive.org/web/20260619065059/https://www.360propertymgt.com/community/foothills-club-west-community-association/',
        isWayback: true,
      },
    ],
  },
];

export const LEGAL_DOCKETS: LegalDocket[] = [
  {
    id: 'case-2016-gee',
    caseNumber: '2016 Civil Claims',
    court: 'Maricopa County Civil Litigation',
    title: 'Foothills Club West HOA v. Wilson Gee (and Countersuit)',
    filedOrDecided: '2016',
    presidingJudges: 'Superior Court Civil Bench',
    outcome: 'Course shuttered in 2016; ownership eventually sold to The Edge in 2020.',
    coreIssues: [
      'HOA alleged Gee neglected irrigation, leaving course in a "hay-like appearance" contrary to maintenance covenants.',
      'Gee countersued alleging conspiracy between HOA and officials to depress property value and force a "$10 fire sale."',
      'Coincided with City of Phoenix water shutoff over ~$159,000 in unpaid potable water bills ($100,000 paid to restore service).',
    ],
    financialImpact: '$159K delinquent water dispute; $100K partial payment',
    links: [
      {
        label: 'Club + Resort Business Countersuit Report',
        url: 'https://clubandresortbusiness.com/club-west-gc-owner-countersues-hoa/',
      },
    ],
  },
  {
    id: 'case-2020-003577',
    caseNumber: 'CV2020-003577',
    court: 'Maricopa County Superior Court',
    title: 'Club West Conservancy v. Foothills Club West Community Association',
    filedOrDecided: 'Filed 2020 · Preliminary Injunction & 2021 Summary Judgment',
    presidingJudges: 'Judge Daniel J. Kiley',
    outcome:
      'Conservancy prevailed: 2010 Assignment, 2018 First Amendment & 2019 Fifth Amendment declared null and void ab initio.',
    coreIssues: [
      'Invalidated HOA board’s executive-session amendments bypassing the 75% Master CC&R threshold and Arizona Open Meeting Law.',
      'Affirmed adjacent homeowners’ representational standing to enforce master covenants.',
      'Held that "good intentions cannot supersede the dictates of the master [covenants]."',
    ],
    links: [
      {
        label: 'June 2020 Oral Argument PDF',
        url: 'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2020-06-22_003_oral-argument.pdf',
      },
      {
        label: 'Jan 2021 Oral Argument PDF',
        url: 'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2021-01-22_014_oral-argument.pdf',
      },
      {
        label: 'AZ HOA Watch Archive (Wayback)',
        url: 'https://web.archive.org/web/20260614135722/https://azhoawatch.org/court-cases/',
        isWayback: true,
      },
      {
        label: 'AZ Courts Minutes Search (CV2020-003577)',
        url: 'https://apps.azcourts.gov/publicaccess/minutes.aspx',
      },
    ],
  },
  {
    id: 'case-2021-018435',
    caseNumber: 'CV2021-018435',
    court: 'Maricopa County Superior Court',
    title: 'Club West Conservancy v. Shea Homes LP, Shea Homes Inc., & The Edge at Club West LLC',
    filedOrDecided: 'Filed Late 2021 · Major Rulings 2024–2026',
    presidingJudges: 'Judges Timothy Thompson & Susanna C. Pineda',
    outcome: 'Owners/developers prevailed on land-use freedom; parcel cleared for non-golf reuse.',
    coreIssues: [
      'Tested whether historical 1993 covenants perpetually forced private owners to maintain an active golf course.',
      'Court ruled current property owners are not legally required to keep the 162 acres as a golf course and may pursue alternative uses.',
      'Triggered heavy attorney-fee disputes and mid-March final judgment / fee milestones.',
    ],
    financialImpact: 'Reported ~$1.07M attorney-fee judgment / liability pressure on Conservancy',
    links: [
      {
        label: 'May 2025 Special Action Petition PDF (Wayback)',
        url: 'https://web.archive.org/web/20260216032008/https://www.omlaw.com/wp-content/uploads/2025-05-01-Club-West-Shea-Petition-for-Special-Action.pdf',
        isWayback: true,
      },
      {
        label: 'AZ Courts Minutes Search (CV2020-003577)',
        url: 'https://apps.azcourts.gov/publicaccess/minutes.aspx',
      },
    ],
  },
  {
    id: 'case-2025-1casa',
    caseNumber: '1 CA-SA 25-0117',
    court: 'Arizona Court of Appeals (Division One)',
    title: 'Club West Conservancy v. Shea Homes LP, et al.',
    filedOrDecided: 'Decided October 27, 2025',
    presidingJudges: 'Presiding Judge Michael S. Catlett, Chief Judge Randall M. Howe, Judge D. Steven Williams',
    outcome: 'Jurisdiction accepted & procedural relief granted on Rule 54(b) / fee mechanics; land-use outcome unchanged.',
    coreIssues: [
      'Addressed sua sponte Rule 54(b) partial final judgments entered without resolving pending Rule 54(g)(3) & 54(h) attorney-fee claims.',
      'Clarified appeal and fee-tracking timelines under Arizona Rules of Civil Procedure.',
      'Did not reinstate any perpetual golf-course mandate on the 162-acre parcel.',
    ],
    links: [
      {
        label: 'Published Opinion (Justia)',
        url: 'https://law.justia.com/cases/arizona/court-of-appeals-division-one-published/2025/1-ca-sa-25-0117.html',
      },
      {
        label: 'Published Opinion (FindLaw)',
        url: 'https://caselaw.findlaw.com/court/az-court-of-appeals/117877870.html',
      },
      {
        label: 'Petition PDF (Wayback)',
        url: 'https://web.archive.org/web/20260216032008/https://www.omlaw.com/wp-content/uploads/2025-05-01-Club-West-Shea-Petition-for-Special-Action.pdf',
        isWayback: true,
      },
    ],
  },
];

export const STAKEHOLDERS: Stakeholder[] = [
  {
    id: 'stk-shea',
    name: 'Shea Homes / UDC Homes',
    role: 'Original Master Developer (1989–1993)',
    category: 'Original Developer & Design',
    description:
      'Recorded the July 21, 1989 Master CC&Rs (Doc #89-337438) and 1993 Golf Course Declaration, transferred declarant rights in 2010, and was later named in CV2021-018435.',
  },
  {
    id: 'stk-architects',
    name: 'Brian Whitcomb & Ken Kavanaugh',
    role: 'Course Architects (1993)',
    category: 'Original Developer & Design',
    description:
      'Designed the 18-hole, par-72 desert championship golf layout spanning 162 acres through Foothills Club West.',
  },
  {
    id: 'stk-gee',
    name: 'Wilson Gee (Kwang Co. / Hiro Investment)',
    role: 'Former Course Owner (Pre-2016–2020)',
    category: 'Course Owners & Investors',
    description:
      'Operated multiple Ahwatukee golf courses; shut down Club West in 2016 amid potable water costs and HOA litigation before selling in June 2020.',
  },
  {
    id: 'stk-edge',
    name: 'The Edge at Club West LLC',
    role: 'Owner & Litigant (2020–2026)',
    category: 'Course Owners & Investors',
    description:
      'Bought the defunct 162-acre parcel for $750,000 on June 1, 2020; fought 4+ years of litigation clearing the land for alternative uses before selling for $2.1M.',
  },
  {
    id: 'stk-harmony',
    name: 'Community Harmony Coalition LLC',
    role: 'Current Owner (May 29, 2026–Present)',
    category: 'Course Owners & Investors',
    description:
      '15-investor LLC that acquired the 162 acres + clubhouse for $2.1M on May 29, 2026 and placed it on the market via Nathan & Associates.',
  },
  {
    id: 'stk-hoa',
    name: 'Foothills Club West HOA & 360 Community Management',
    role: 'Master Community Association',
    category: 'HOA & Community',
    description:
      'Manages community governance, architectural compliance, and public owner documents from 16414 S. 14th Ave after transitioning from Vision Community Management.',
  },
  {
    id: 'stk-conservancy',
    name: 'Club West Conservancy / Save Club West',
    role: 'Homeowner Advocacy Nonprofit',
    category: 'HOA & Community',
    description:
      'Resident coalition that voided secret 2018–2019 HOA amendments in CV2020-003577 but lost the broader perpetual-golf fight in CV2021-018435.',
  },
  {
    id: 'stk-nathan',
    name: 'Nathan & Associates Inc.',
    role: 'Scottsdale Land Brokerage',
    category: 'Homebuilders & Brokers',
    description:
      'Retained by Community Harmony Coalition in mid-2026 to market the 162-acre parcel to major homebuilders.',
  },
  {
    id: 'stk-horton',
    name: 'D.R. Horton',
    role: 'Prospective Builder (573-Home Concept)',
    category: 'Homebuilders & Brokers',
    description:
      'Nation’s largest homebuilder; filed a 573-home pre-application for Club West while also developing the adjacent 373-acre Upper Canyon community.',
  },
  {
    id: 'stk-sekisui',
    name: 'Sekisui House Ltd.',
    role: 'Prospective Builder (278-Home Concept)',
    category: 'Homebuilders & Brokers',
    description:
      'Japanese global homebuilder that submitted a Nov 2026 Phoenix pre-application for 278 single-family homes and 88.5 acres of open space & drainage.',
  },
];

export const SOURCES: SourceReference[] = [
  {
    id: 'src-ahwatukee-sekisui',
    title: 'New builder eyes fewer homes for Club West course',
    publisher: 'Ahwatukee Foothills News (Paul Maryniak)',
    url: 'https://www.ahwatukee.com/news/new-builder-eyes-fewer-homes-for-club-west-course/article_c9b96076-7307-443f-8adf-fed3dcd0ddef.html',
    kind: 'News Article',
    note: 'November 2026 report detailing Sekisui House Ltd.’s 278-home, 88.5-acre open space pre-application.',
  },
  {
    id: 'src-ktar',
    title: 'Owners of shuttered Club West Golf Course shop site to builders',
    publisher: 'KTAR News',
    url: 'https://ktar.com/arizona-business/owners-club-west-golf-course-shop-site',
    waybackUrl:
      'https://web.archive.org/web/20260809013035/https://ktar.com/arizona-business/owners-club-west-golf-course-shop-site',
    kind: 'News Article',
    note: 'Covers Community Harmony Coalition’s $2.1M purchase, $750K 2020 sale, and Nathan & Associates listing.',
  },
  {
    id: 'src-kennard',
    title: 'Why Ahwatukee’s Club West Golf Course Sold for $2.1 Million (and What That Means Next Door)',
    publisher: 'Camille Kennard Real Estate',
    url: 'https://camillekennardrealtor.com/blog/why-ahwatukees-club-west-golf-course-sold-for-dollar21-million-and-what-that-price-means-if-you-buy-next-door',
    kind: 'News Article',
    note: 'Full breakdown of 2016 closure, 2017–Feb 2018 $200K water bankruptcy, May 29, 2026 sale, and D.R. Horton’s 573-home pre-app.',
  },
  {
    id: 'src-azbigmedia',
    title: 'Here are the revitalization plans for Club West Golf Course land',
    publisher: 'AZ Big Media',
    url: 'https://azbigmedia.com/real-estate/commercial-real-estate/here-are-the-revitalization-plans-for-club-west-golf-course-land/',
    waybackUrl:
      'https://web.archive.org/web/20260317144920/https://azbigmedia.com/real-estate/commercial-real-estate/here-are-the-revitalization-plans-for-club-west-golf-course-land/',
    kind: 'News Article',
    note: 'Archived report covering earlier Club West revitalization and redevelopment concepts.',
  },
  {
    id: 'src-arizonapress',
    title: 'Closing golf courses can be bogeys for neighborhoods — Ahwatukee community analysis',
    publisher: 'Arizona Progress & Gazette',
    url: 'https://arizonaprogressgazette.com/closing-golf-courses-can-be-bogeys-for-neighborhoods-but-one-ahwatukee-community-may-show-a-compelling-way-forward/',
    waybackUrl:
      'https://web.archive.org/web/20260416015359/https://arizonaprogressgazette.com/closing-golf-courses-can-be-bogeys-for-neighborhoods-but-one-ahwatukee-community-may-show-a-compelling-way-forward/',
    kind: 'News Article',
    note: 'Examines neighborhood fallout from shuttered Ahwatukee golf courses and community alternatives.',
  },
  {
    id: 'src-clubresort',
    title: 'Club West GC Owner Countersues HOA',
    publisher: 'Club + Resort Business',
    url: 'https://clubandresortbusiness.com/club-west-gc-owner-countersues-hoa/',
    kind: 'News Article',
    note: '2016 coverage of the $159K water shutoff, $100K payment, "hay-like appearance" claims, and "$10 fire sale" countersuit.',
  },
  {
    id: 'src-savvy-blog',
    title: 'Ahwatukee Golf Courses: What Is Happening',
    publisher: 'Savvy Realty AZ',
    url: 'https://www.savvyrealtyaz.com/blog/ahwatukee-golf-courses-what-is-happening',
    kind: 'News Article',
    note: 'Tracks Club West vs. nearby Ahwatukee course closures, litigation, and zoning pressures.',
  },
  {
    id: 'src-savvy-area',
    title: 'Foothills Club West Community & Tract Overview',
    publisher: 'Savvy Realty AZ',
    url: 'https://www.savvyrealtyaz.com/areas/foothills-club-west',
    kind: 'Public Archive',
    note: 'Details Foothills Club West sub-associations, tract structure, and HOA transitions.',
  },
  {
    id: 'src-ccr-pdf',
    title: 'Foothills Club West Master Declaration of CC&Rs (Doc #89-337438, July 21, 1989)',
    publisher: 'Vision Community Management / Maricopa Recorder',
    url: 'https://www.visioncommunitymanagement.com/media/vcmdocs/500828.pdf?6ada46d142d88',
    waybackUrl:
      'https://web.archive.org/web/20240616145328/https://www.visioncommunitymanagement.com/media/vcmdocs/500828.pdf',
    kind: 'HOA Covenant / PDF',
    note: 'Primary recorded 1989 Master CC&Rs establishing the 75% supermajority amendment threshold.',
  },
  {
    id: 'src-golf-dec-pdf',
    title: 'Foothills Club West Golf Course Declaration (PDF)',
    publisher: 'Vision Community Management / Maricopa Recorder',
    url: 'https://www.visioncommunitymanagement.com/media/vcmdocs/954973.pdf?63229b581f3e0',
    waybackUrl:
      'https://web.archive.org/web/20240802175536/https://www.visioncommunitymanagement.com/media/vcmdocs/954973.pdf',
    kind: 'HOA Covenant / PDF',
    note: 'Recorded Golf Course Declaration restricting the 162-acre parcel to golf, driving range & clubhouse.',
  },
  {
    id: 'src-arch-pdf',
    title: 'Foothills Club West Revised Architectural & Landscaping Guidelines (Jan 26, 2022)',
    publisher: 'Vision Community Management',
    url: 'https://visioncommunitymanagement.com/images/surveymonkey/FCW%20Revised%20Guidelines%202022-01-26.pdf',
    kind: 'HOA Covenant / PDF',
    note: 'Governs exterior modifications, wash/golf-facing lot rules, and front-yard minimums.',
  },
  {
    id: 'src-360-portal',
    title: 'Foothills Club West Community Association Portal',
    publisher: '360 Community Management, LLC',
    url: 'https://www.360propertymgt.com/community/foothills-club-west-community-association/',
    waybackUrl:
      'https://web.archive.org/web/20260619065059/https://www.360propertymgt.com/community/foothills-club-west-community-association/',
    kind: 'HOA Covenant / PDF',
    note: 'Current HOA management portal replacing Vision Community Management.',
  },
  {
    id: 'src-azhoawatch',
    title: 'CV2020-003577 Court Case Archive (Club West Conservancy v. Foothills Club West HOA)',
    publisher: 'AZ HOA Watch',
    url: 'https://azhoawatch.org/court-cases/',
    waybackUrl: 'https://web.archive.org/web/20260614135722/https://azhoawatch.org/court-cases/',
    kind: 'Court Filing / Opinion',
    note: 'Tracks Judge Daniel J. Kiley’s injunction and summary judgment voiding 2010/2018/2019 board actions.',
  },
  {
    id: 'src-azhoawatch-oral-2020',
    title: 'CV2020-003577 Oral Argument Transcript PDF (June 22, 2020)',
    publisher: 'AZ HOA Watch Court Downloads',
    url: 'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2020-06-22_003_oral-argument.pdf',
    kind: 'Court Filing / Opinion',
    note: 'Full Superior Court oral argument filing in Club West Conservancy v. Foothills Club West HOA.',
  },
  {
    id: 'src-azhoawatch-oral-2021',
    title: 'CV2020-003577 Oral Argument Transcript PDF (January 22, 2021)',
    publisher: 'AZ HOA Watch Court Downloads',
    url: 'https://azhoawatch.org/wp-content/uploads/azhoawatch/court-case-downloads/club-west-conservancy-v-foothills-club-west-community-association/raw/2021-01-22_014_oral-argument.pdf',
    kind: 'Court Filing / Opinion',
    note: 'Summary judgment oral argument PDF in CV2020-003577.',
  },
  {
    id: 'src-omlaw-petition',
    title: 'Petition for Special Action PDF — Club West Conservancy v. Shea Homes / The Edge (May 1, 2025)',
    publisher: 'Osborn Maledon (CV2021-018435 / 1 CA-SA 25-0117)',
    url: 'https://www.omlaw.com/wp-content/uploads/2025-05-01-Club-West-Shea-Petition-for-Special-Action.pdf',
    waybackUrl:
      'https://web.archive.org/web/20260216032008/https://www.omlaw.com/wp-content/uploads/2025-05-01-Club-West-Shea-Petition-for-Special-Action.pdf',
    kind: 'Court Filing / Opinion',
    note: 'Complete appellate special action petition filed from Maricopa County Case CV2021-018435.',
  },
  {
    id: 'src-justia-opinion',
    title: 'Club West Conservancy v. Shea Homes LP, et al., No. 1 CA-SA 25-0117 (Oct 27, 2025)',
    publisher: 'Arizona Court of Appeals Div. One (Justia)',
    url: 'https://law.justia.com/cases/arizona/court-of-appeals-division-one-published/2025/1-ca-sa-25-0117.html',
    kind: 'Court Filing / Opinion',
    note: 'Published appellate decision by Presiding Judge Catlett addressing Rule 54(b) & fee awards.',
  },
  {
    id: 'src-findlaw-opinion',
    title: 'Club West Conservancy v. Shea Homes LP, et al. — Published Opinion Mirror',
    publisher: 'Arizona Court of Appeals Div. One (FindLaw)',
    url: 'https://caselaw.findlaw.com/court/az-court-of-appeals/117877870.html',
    kind: 'Court Filing / Opinion',
    note: 'Full text of the October 27, 2025 Court of Appeals special action opinion.',
  },
  {
    id: 'src-maricopa-minutes',
    title: 'AZ Courts Public Access — Maricopa Minute Entries (CV2020-003577 & CV2021-018435)',
    publisher: 'Arizona Judicial Branch Public Access',
    url: 'https://apps.azcourts.gov/publicaccess/minutes.aspx',
    kind: 'Court Filing / Opinion',
    note: 'Official portal to pull minute entries for CV2020-003577 (Judge Kiley) and CV2021-018435 (Judge Pineda).',
  },
  {
    id: 'src-golfpass',
    title: 'Club West Golf Club Course Profile (1993 Architecture)',
    publisher: 'GolfPass',
    url: 'https://www.golfpass.com/travel-advisor/courses/15697-club-west-golf-club',
    waybackUrl:
      'https://web.archive.org/web/20250328112134/https://www.golfpass.com/travel-advisor/courses/15697-club-west-golf-club',
    kind: 'Public Archive',
    note: 'Archived course specs confirming 1993 opening, par-72 layout, and architects Brian Whitcomb & Ken Kavanaugh.',
  },
  {
    id: 'src-issuu-afn',
    title: 'Ahwatukee Foothills News Digital Archive Editions (Issuu)',
    publisher: 'Times Media Group / Ahwatukee Foothills News',
    url: 'https://issuu.com/timespub/docs/afn_1215_book',
    waybackUrl: 'https://web.archive.org/web/20230305021908/https://issuu.com/timespub/docs/afn_1215_book',
    kind: 'Public Archive',
    note: 'Archived print edition preserving historical Ahwatukee Club West reporting.',
  },
];
