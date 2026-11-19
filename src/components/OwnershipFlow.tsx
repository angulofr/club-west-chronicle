import { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { OWNERSHIP_FLOW } from '../data/clubWestData';

export function OwnershipFlow() {
  const [selectedId, setSelectedId] = useState<string>(OWNERSHIP_FLOW[OWNERSHIP_FLOW.length - 1].id);
  const selected = OWNERSHIP_FLOW.find((node) => node.id === selectedId) ?? OWNERSHIP_FLOW[0];

  return (
    <section className="panel" aria-labelledby="ownership-flow-heading">
      <div className="section-header">
        <div>
          <span className="section-kicker">Chain of Custody & Land-Use Flow</span>
          <h2 id="ownership-flow-heading">How the 162-Acre Parcel Evolved (1989 → 2026)</h2>
        </div>
        <div className="valuation-badge">
          <TrendingUp size={15} />
          <span>2020 → 2026 Land Value: $750K → $2.1M (+180%)</span>
        </div>
      </div>

      <div className="flow-track" role="list">
        {OWNERSHIP_FLOW.map((node, index) => {
          const isSelected = node.id === selected.id;
          return (
            <div key={node.id} className="flow-step-wrapper" role="listitem">
              <button
                type="button"
                className={`flow-node tone-${node.tone} ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedId(node.id)}
              >
                <div className="flow-node-top">
                  <span className="step-num">0{node.step}</span>
                  <span className="flow-period">{node.period}</span>
                </div>
                <strong className="flow-owner">{node.owner}</strong>
                <span className="flow-price">{node.transactionPrice}</span>
              </button>
              {index < OWNERSHIP_FLOW.length - 1 && (
                <div className="flow-connector" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={`flow-detail-card tone-${selected.tone}`}>
        <div className="flow-detail-header">
          <div>
            <span className="mono-tag">{selected.period}</span>
            <h3>{selected.owner}</h3>
            <p className="muted-copy">{selected.entityDetails}</p>
          </div>
          <div className="flow-detail-badges">
            <div className="stat-box">
              <span className="stat-label">Valuation / Deal</span>
              <strong>{selected.transactionPrice}</strong>
            </div>
            <div className="stat-box">
              <span className="stat-label">Land-Use Status</span>
              <strong>{selected.landStatus}</strong>
            </div>
          </div>
        </div>

        <ul className="detail-list">
          {selected.highlights.map((item) => (
            <li key={item}>
              <CheckCircle2 size={15} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
