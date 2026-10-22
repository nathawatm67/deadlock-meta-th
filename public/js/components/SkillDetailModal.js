// ===================================================================
// Deadlock Meta Thailand — Skill Detail Modal Component
// In-Depth Ability Dossier: AP Upgrades (Tiers 1-3), Mechanics & Scaling
// Zero Emojis Policy
// ===================================================================

import React, { useEffect } from 'react';
import htm from 'htm';
import { getAbilityIconUrl, handleAbilityImgError, getHeroPortraitUrl, handleHeroImgError } from '../utils/assets.js';
import { getAbilityApDetails } from '../data/abilitiesApData.js';

const html = htm.bind(React.createElement);

export function SkillDetailModal({ ability, hero, onClose }) {
  if (!ability) return null;

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const apDetails = getAbilityApDetails(ability.name, hero);
  const apUpgrades = ability.apUpgrades || apDetails.apUpgrades;
  const tips = ability.tips || apDetails.tips;
  const scaling = ability.scaling || apDetails.scaling;

  return html`
    <div className="modal-overlay" onClick=${onClose} style=${{ zIndex: 1300 }}>
      <div className="modal-content" onClick=${(e) => e.stopPropagation()} style=${{ maxWidth: '720px' }}>
        <button className="modal-close" onClick=${onClose}>✕</button>

        <!-- Modal Header -->
        <div className="modal-header" style=${{ borderBottom: '2px solid var(--spirit-purple)' }}>
          <div style=${{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div className="ability-icon-wrap" style=${{ width: '68px', height: '68px', borderColor: 'var(--spirit-purple)', boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)' }}>
              <img
                className="ability-icon-img"
                src=${getAbilityIconUrl(ability.name)}
                alt=${ability.name}
                onError=${(e) => handleAbilityImgError(e, ability.num)}
              />
            </div>
            <div>
              <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', color: '#fff' }}>
                ${ability.name}
              </div>
              <div style=${{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                <span style=${{ background: 'var(--spirit-bg)', color: 'var(--spirit-purple)', border: '1px solid rgba(168, 85, 247, 0.4)', padding: '3px 10px', borderRadius: '6px', fontSize: '0.78rem', fontWeight: '800', textTransform: 'uppercase' }}>
                  ${ability.num === 4 ? 'ULTIMATE (สกิล 4)' : `สกิลประจำตัว ${ability.num}`}
                </span>
                ${hero ? html`
                  <span style=${{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    ฮีโร่: <strong>${hero.name}</strong> (${hero.thaiName})
                  </span>
                ` : null}
              </div>
            </div>
          </div>

          <div style=${{ textAlign: 'right' }}>
            <div style=${{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>คูลดาวน์พื้นฐาน</div>
            <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--soul-amber)' }}>
              ${ability.cd}
            </div>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div className="modal-body" style=${{ gap: '22px' }}>
          <!-- Main Ability Mechanics -->
          <section style=${{ background: 'rgba(10, 15, 24, 0.7)', padding: '18px 20px', borderRadius: '10px', borderLeft: '4px solid var(--spirit-purple)', border: '1px solid var(--border-subtle)' }}>
            <div style=${{ fontSize: '0.78rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
              กลไกการทำงานของสกิล (Mechanics)
            </div>
            <p style=${{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7' }}>
              ${ability.desc}
            </p>
            ${scaling ? html`
              <div style=${{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--spirit-purple)', fontWeight: '700', background: 'rgba(168, 85, 247, 0.1)', padding: '6px 12px', borderRadius: '6px', border: '1px solid rgba(168, 85, 247, 0.25)' }}>
                ${scaling}
              </div>
            ` : null}
          </section>

          <!-- 3-Tier Ability Point (AP) Upgrade Path -->
          <section>
            <div style=${{ fontSize: '0.85rem', color: 'var(--soul-amber)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
              เส้นทางการอัปเกรดความสามารถด้วย Ability Points (AP Progression):
            </div>

            <div style=${{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              ${apUpgrades.map(up => html`
                <div key=${up.tier} style=${{ display: 'flex', alignItems: 'flex-start', gap: '14px', background: 'rgba(18, 25, 40, 0.8)', padding: '14px 16px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style=${{ background: up.tier === 3 ? 'var(--spirit-purple)' : 'rgba(229, 169, 59, 0.2)', color: up.tier === 3 ? '#fff' : 'var(--soul-amber)', border: up.tier === 3 ? 'none' : '1px solid var(--border-highlight)', padding: '4px 10px', borderRadius: '6px', fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '0.85rem', flexShrink: 0, textAlign: 'center', minWidth: '70px' }}>
                    T${up.tier} (${up.ap} AP)
                  </div>
                  <div style=${{ flex: 1, fontSize: '0.88rem', color: 'var(--text-main)', lineHeight: '1.5' }}>
                    ${up.desc}
                  </div>
                </div>
              `)}
            </div>
          </section>

          <!-- Tactical Tips & Synergies -->
          <section style=${{ background: 'rgba(10, 15, 24, 0.6)', padding: '16px 20px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
            <div style=${{ fontSize: '0.78rem', color: 'var(--vitality-green)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px' }}>
              คำแนะนำและคอมโบในการเล่น (Tactical Advice)
            </div>
            <p style=${{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              ${tips || 'ควรคำนวณคูลดาวน์ก่อนเข้าปะทะ ประสานงานร่วมกับไอเทมสาย Spirit Power เพื่อดึงศักยภาพตัวคูณสเกลลิ่งให้เกิดประสิทธิภาพสูงสุดในการลอบฆ่าและทีมไฟต์'}
            </p>
          </section>
        </div>
      </div>
    </div>
  `;
}
