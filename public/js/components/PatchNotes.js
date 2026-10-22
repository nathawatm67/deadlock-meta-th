// ===================================================================
// Deadlock Meta Thailand — Patch Notes & Analysis Component
// Detailed 2026-10-14 Minor Patch Breakdown
// Zero Emojis Policy
// ===================================================================

import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export function PatchNotes({ patchData }) {
  return html`
    <div className="patch-notes-page">
      <div className="section-header" style=${{ marginBottom: '14px' }}>
        <div>
          <h1 className="section-title">บทวิเคราะห์แพตช์โน้ต (Patch Notes & Meta Analysis)</h1>
          <p style=${{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            เจาะลึกการปรับสมดุลล่าสุดรายฮีโร่และไอเทม พร้อมวิเคราะห์ทิศทางเมต้าเกม Deadlock
          </p>
        </div>
      </div>

      <!-- Main Patch Card -->
      <div className="patch-card">
        <div className="patch-header">
          <div>
            <div className="patch-version">${patchData.patchVersion}</div>
            <div className="patch-date">วันที่อัปเดต: ${patchData.releaseDate}</div>
          </div>
          <div className="patch-badge" style=${{ fontSize: '0.82rem', padding: '8px 16px' }}>
            ACTIVE PATCH
          </div>
        </div>

        <div style=${{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--soul-light)', marginBottom: '12px' }}>
          ${patchData.headline}
        </div>

        <p className="patch-summary-text">
          ${patchData.overviewThai}
        </p>

        <!-- Hero Adjustments -->
        <h3 className="patch-group-title">
          <span>การปรับสมดุลฮีโร่ (Hero Balance Adjustments)</span>
        </h3>

        <div>
          ${patchData.heroChanges.map(change => {
            const isBuff = change.type === 'buff';
            const borderCol = isBuff ? 'var(--vitality-green)' : 'var(--tier-s-plus)';
            const tagBg = isBuff ? 'var(--vitality-bg)' : 'var(--tier-s-plus-bg)';
            const tagText = isBuff ? 'BUFF' : 'NERF';

            return html`
              <div key=${change.hero} className="patch-item-line" style=${{ borderLeftColor: borderCol }}>
                <div style=${{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <strong>${change.hero}</strong>
                  <span style=${{
                    fontSize: '0.68rem',
                    fontWeight: '800',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: tagBg,
                    color: borderCol
                  }}>
                    ${tagText}
                  </span>
                </div>
                <div>${change.detail}</div>
              </div>
            `;
          })}
        </div>

        <!-- Item Adjustments -->
        <h3 className="patch-group-title" style=${{ marginTop: '28px' }}>
          <span>การปรับสมดุลไอเทม (Item Adjustments)</span>
        </h3>

        <div>
          ${patchData.itemChanges.map(change => {
            const isBuff = change.type === 'buff';
            const borderCol = isBuff ? 'var(--vitality-green)' : 'var(--soul-amber)';
            const tagText = isBuff ? 'BUFF' : 'ADJUSTMENT';

            return html`
              <div key=${change.item} className="patch-item-line" style=${{ borderLeftColor: borderCol }}>
                <div style=${{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <strong>${change.item}</strong>
                  <span style=${{
                    fontSize: '0.68rem',
                    fontWeight: '800',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: borderCol
                  }}>
                    ${tagText} • ${change.category.toUpperCase()}
                  </span>
                </div>
                <div>${change.detail}</div>
              </div>
            `;
          })}
        </div>
      </div>

      <!-- 5 Key Meta Takeaways -->
      <div className="section-header" style=${{ marginTop: '36px', marginBottom: '16px' }}>
        <h2 className="section-title">5 ข้อสรุปสำคัญในการไต่แรงค์ประจำแพตช์นี้</h2>
      </div>

      <div style=${{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
        ${patchData.metaTakeaways.map(item => html`
          <div key=${item.num} className="insight-card" style=${{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
            <div style=${{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--soul-amber)',
              color: '#080c14',
              fontFamily: 'var(--font-display)',
              fontWeight: '800',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              ${item.num}
            </div>
            <div>
              <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>
                ${item.title}
              </div>
              <div style=${{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                ${item.content}
              </div>
            </div>
          </div>
        `)}
      </div>
    </div>
  `;
}
