import { useState } from 'react';
import { Building2, ExternalLink, FileText, Gavel, Mail, Phone } from 'lucide-react';
import { HOA_DOCUMENTS, LEGAL_DOCKETS, PARCEL_METADATA } from '../data/clubWestData';

export function LegalAndHoaVault() {
  const [vaultTab, setVaultTab] = useState<'both' | 'hoa' | 'courts'>('both');

  return (
    <section className="panel" aria-labelledby="vault-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">Governing Documents &amp; Judicial Record</span>
          <h2 id="vault-heading">HOA Documentation &amp; Court Dockets</h2>
        </div>

        <div className="segmented-toggle" role="group" aria-label="Vault view">
          <button
            type="button"
            className={vaultTab === 'both' ? 'active' : ''}
            onClick={() => setVaultTab('both')}
          >
            Split View
          </button>
          <button
            type="button"
            className={vaultTab === 'hoa' ? 'active' : ''}
            onClick={() => setVaultTab('hoa')}
          >
            HOA &amp; CC&amp;Rs ({HOA_DOCUMENTS.length})
          </button>
          <button
            type="button"
            className={vaultTab === 'courts' ? 'active' : ''}
            onClick={() => setVaultTab('courts')}
          >
            Court Dockets ({LEGAL_DOCKETS.length})
          </button>
        </div>
      </div>

      <div className="hoa-banner">
        <div className="hoa-banner-main">
          <div className="hoa-icon-badge">
            <Building2 size={20} />
          </div>
          <div>
            <h3>{PARCEL_METADATA.hoaName}</h3>
            <p>
              Managed by <strong>{PARCEL_METADATA.hoaManagement}</strong> · Clubhouse:{' '}
              {PARCEL_METADATA.clubhouseAddress}
            </p>
          </div>
        </div>

        <div className="hoa-banner-links">
          <a href={`mailto:${PARCEL_METADATA.hoaContactEmail}`} className="hoa-contact-chip">
            <Mail size={14} />
            <span>{PARCEL_METADATA.hoaContactEmail}</span>
          </a>
          <span className="hoa-contact-chip">
            <Phone size={14} />
            <span>{PARCEL_METADATA.hoaPhone}</span>
          </span>
          <a
            href={PARCEL_METADATA.hoaPortalUrl}
            target="_blank"
            rel="noreferrer"
            className="hoa-portal-btn"
          >
            <span>Open 360 Management Portal</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className={`vault-grid ${vaultTab !== 'both' ? 'single-col' : ''}`}>
        {(vaultTab === 'both' || vaultTab === 'hoa') && (
          <div className="vault-column">
            <div className="vault-col-title">
              <FileText size={18} />
              <h3>HOA Covenants &amp; Governing Instruments</h3>
            </div>
            <div className="vault-stack">
              {HOA_DOCUMENTS.map((doc) => (
                <article key={doc.id} className="vault-card">
                  <div className="vault-card-head">
                    <span className="mono-tag">{doc.year}</span>
                    <span
                      className={`doc-status ${
                        doc.status === 'Active / Foundational'
                          ? 'status-green'
                          : doc.status === 'Disputed Mechanism'
                            ? 'status-amber'
                            : 'status-red'
                      }`}
                    >
                      {doc.status}
                    </span>
                  </div>
                  <h4>{doc.title}</h4>
                  <p className="vault-meta">
                    <strong>Authority:</strong> {doc.authority}
                  </p>
                  <p className="vault-rule">
                    <strong>Rule / Threshold:</strong> {doc.thresholdOrRule}
                  </p>
                  <p className="vault-desc">{doc.significance}</p>
                </article>
              ))}
            </div>
          </div>
        )}

        {(vaultTab === 'both' || vaultTab === 'courts') && (
          <div className="vault-column">
            <div className="vault-col-title">
              <Gavel size={18} />
              <h3>Litigation &amp; Appellate Dockets</h3>
            </div>
            <div className="vault-stack">
              {LEGAL_DOCKETS.map((docket) => (
                <article key={docket.id} className="vault-card docket-card">
                  <div className="vault-card-head">
                    <span className="mono-tag docket-num">{docket.caseNumber}</span>
                    <span className="court-label">{docket.court}</span>
                  </div>
                  <h4>{docket.title}</h4>
                  <p className="vault-meta">
                    <strong>Timing:</strong> {docket.filedOrDecided} · <strong>Bench:</strong>{' '}
                    {docket.presidingJudges}
                  </p>
                  <p className="docket-outcome">
                    <strong>Outcome:</strong> {docket.outcome}
                  </p>
                  <ul className="compact-list">
                    {docket.coreIssues.map((issue) => (
                      <li key={issue}>{issue}</li>
                    ))}
                  </ul>
                  {docket.financialImpact && (
                    <div className="fee-callout">
                      <strong>Financial Toll:</strong> {docket.financialImpact}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
