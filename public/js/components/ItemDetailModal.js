// ===================================================================
// Deadlock Meta Thailand — Item Detail Modal Component
// In-Depth Item Dossier: Stats, Passives, Actives, Components & Synergies
// Zero Emojis Policy
// ===================================================================

import React, { useEffect } from 'react';
import htm from 'htm';
import { getItemIconUrl, handleItemImgError, getHeroPortraitUrl, handleHeroImgError, SOUL_ICON_URL } from '../utils/assets.js';
import { getItemFullDetails } from '../data/itemsDetailData.js';

const html = htm.bind(React.createElement);

export function ItemDetailModal({ item, onClose, onSelectHero }) {
  if (!item) return null;

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const fullItem = getItemFullDetails(typeof item === 'string' ? item : item.name, typeof item === 'object' ? item : null);

  const categoryColor = fullItem.category === 'weapon'
    ? 'var(--weapon-orange)'
    : fullItem.category === 'vitality'
    ? 'var(--vitality-green)'
    : 'var(--spirit-purple)';

  const categoryBg = fullItem.category === 'weapon'
    ? 'rgba(245, 158, 11, 0.15)'
    : fullItem.category === 'vitality'
    ? 'rgba(16, 185, 129, 0.15)'
    : 'rgba(168, 85, 247, 0.15)';

  return html`
    <div className="modal-overlay" onClick=${onClose} style=${{ zIndex: 1200 }}>
      <div className="modal-content" onClick=${(e) => e.stopPropagation()} style=${{ maxWidth: '720px' }}>
        <button className="modal-close" onClick=${onClose}>✕</button>

        <!-- Modal Header -->
        <div className="modal-header" style=${{ borderBottom: `2px solid ${categoryColor}` }}>
          <div style=${{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div className="item-icon-box" style=${{ width: '68px', height: '68px', borderColor: categoryColor, boxShadow: `0 0 20px ${categoryColor}40` }}>
              <img
                className="item-icon-img"
                src=${getItemIconUrl(fullItem.name)}
                alt=${fullItem.name}
                onError=${(e) => handleItemImgError(e, fullItem.category)}
              />
            </div>
            <div>
              <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', color: '#fff' }}>
                ${fullItem.name}
              </div>
              <div style=${{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                <span style=${{ background: categoryBg, color: categoryColor, border: `1px solid ${categoryColor}60`, padding: '3px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '700', textTransform: 'uppercase' }}>
                  ${fullItem.category.toUpperCase()} • TIER ${fullItem.tier}
                </span>
                <span className="item-cost-badge" style=${{ fontSize: '0.85rem', padding: '3px 10px' }}>
                  <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" style=${{ width: '16px', height: '16px' }} />
                  ${fullItem.cost ? fullItem.cost.toLocaleString() : '500'} Souls
                </span>
              </div>
            </div>
          </div>

          <div style=${{ textAlign: 'right' }}>
            <div style=${{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Win Rate เฉลี่ย</div>
            <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '800', color: fullItem.winRate >= 54 ? 'var(--vitality-green)' : '#fff' }}>
              ${fullItem.winRate}%
            </div>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div className="modal-body" style=${{ gap: '20px' }}>
          <!-- Main Stat Attributes -->
          <section style=${{ background: 'rgba(10, 15, 24, 0.7)', padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style=${{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
              คุณสมบัติและสเตตัสหลัก (Attributes)
            </div>
            <div style=${{ fontSize: '1.05rem', color: 'var(--vitality-green)', fontWeight: '600', lineHeight: '1.5' }}>
              ${fullItem.stats || '+สเตตัสตามสายพื้นฐาน'}
            </div>
          </section>

          <!-- Passive Ability Details -->
          ${fullItem.passive ? html`
            <section style=${{ background: 'rgba(18, 25, 40, 0.7)', padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
              <div style=${{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style=${{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style=${{ background: 'rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '0.72rem', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    Passive
                  </span>
                  <span style=${{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>เอฟเฟกต์ติดตัว</span>
                </div>
                ${fullItem.passiveCd ? html`<span style=${{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>คูลดาวน์: ${fullItem.passiveCd}</span>` : null}
              </div>
              <p style=${{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                ${fullItem.passive}
              </p>
            </section>
          ` : null}

          <!-- Active Ability Details -->
          ${fullItem.active ? html`
            <section style=${{ background: 'rgba(229, 169, 59, 0.08)', padding: '16px 20px', borderRadius: '10px', border: '1px solid rgba(229, 169, 59, 0.3)' }}>
              <div style=${{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style=${{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style=${{ background: 'var(--soul-amber)', color: '#000', fontSize: '0.72rem', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                    Active
                  </span>
                  <span style=${{ fontWeight: '700', color: 'var(--soul-amber)', fontSize: '0.95rem' }}>ความสามารถกดใช้</span>
                </div>
                ${fullItem.activeCd ? html`<span style=${{ fontSize: '0.75rem', color: 'var(--soul-light)' }}>คูลดาวน์: ${fullItem.activeCd}</span>` : null}
              </div>
              <p style=${{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                ${fullItem.active}
              </p>
            </section>
          ` : null}

          <!-- Component Tree: Builds From & Builds Into -->
          <section style=${{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style=${{ background: 'rgba(10, 15, 24, 0.6)', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                สร้างต่อยอดจาก (Builds From):
              </div>
              <div style=${{ fontSize: '0.88rem', color: '#fff', fontWeight: '500' }}>
                ${fullItem.buildsFrom ? fullItem.buildsFrom : 'ไม่มี (ซื้อตรงด้วย Souls)'}
              </div>
            </div>

            <div style=${{ background: 'rgba(10, 15, 24, 0.6)', padding: '14px 16px', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
              <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
                สามารถอัปเกรดเป็น (Builds Into):
              </div>
              <div style=${{ fontSize: '0.88rem', color: 'var(--soul-amber)', fontWeight: '500' }}>
                ${fullItem.buildsInto ? fullItem.buildsInto : 'ขั้นสูงสุดของสายนี้'}
              </div>
            </div>
          </section>

          <!-- Recommended Heroes -->
          <section style=${{ background: 'rgba(18, 25, 40, 0.6)', padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style=${{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
              ฮีโร่แนะนำที่ควรออกไอเทมนี้ (Synergy Heroes):
            </div>
            <div style=${{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              ${(fullItem.recommendedHeroes || ['Abrams', 'Seven', 'Haze', 'Infernus', 'Lady Geist']).map(hName => html`
                <div
                  key=${hName}
                  className="counter-hero-pill"
                  style=${{ cursor: onSelectHero ? 'pointer' : 'default', transition: 'all 0.15s ease' }}
                  onClick=${() => {
                    if (onSelectHero) {
                      onClose();
                      onSelectHero(hName);
                    }
                  }}
                >
                  <img
                    className="counter-hero-img"
                    src=${getHeroPortraitUrl(hName)}
                    alt=${hName}
                    onError=${(e) => handleHeroImgError(e, hName)}
                  />
                  <span>${hName}</span>
                </div>
              `)}
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
}
