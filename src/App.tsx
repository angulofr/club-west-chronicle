import { useState } from 'react';
import { ActiveTab, HeroHeader } from './components/HeroHeader';
import { OwnershipFlow } from './components/OwnershipFlow';
import { ProposalComparison } from './components/ProposalComparison';
import { TimelineSection } from './components/TimelineSection';
import { LegalAndHoaVault } from './components/LegalAndHoaVault';
import { StakeholdersAndSources } from './components/StakeholdersAndSources';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('all');

  const show = (tab: Exclude<ActiveTab, 'all'>) => activeTab === 'all' || activeTab === tab;

  return (
    <div className="app-shell">
      <HeroHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="container main-content">
        {show('flow') && <OwnershipFlow />}
        {show('proposals') && <ProposalComparison />}
        {show('timeline') && <TimelineSection />}
        {show('vault') && <LegalAndHoaVault />}
        {show('sources') && <StakeholdersAndSources />}
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <strong>Club West Chronicle</strong> · Ahwatukee Foothills Parcel Archive (16400 S. 14th Ave, Phoenix, AZ 85045)
          </div>
          <div className="footer-note">
            Compiled from Ahwatukee Foothills News, Maricopa County Superior Court &amp; AZ Court of Appeals records, and Foothills Club West HOA disclosures (updated Nov 2026).
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
