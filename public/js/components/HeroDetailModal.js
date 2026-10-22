// ===================================================================
// Deadlock Meta Thailand — Hero Detail Modal Component (Redesigned)
// Structured 3-Tab Architecture: Overview/Skills, Item Builds, Counters
// Interactive Ability & Item Modals
// Zero Emojis Policy
// ===================================================================

import React, { useState, useEffect } from 'react';
import htm from 'htm';
import {
  getHeroPortraitUrl,
  handleHeroImgError,
  getAbilityIconUrl,
  handleAbilityImgError,
  getItemIconUrl,
  handleItemImgError,
  SOUL_ICON_URL
} from '../utils/assets.js';

const html = htm.bind(React.createElement);

export function HeroDetailModal({ hero, onClose, onSelectItem, onSelectSkill }) {
  if (!hero) return null;

  const [activeModalTab, setActiveModalTab] = useState('skills'); // 'skills', 'builds', 'tactics'

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return html`
    <div className="modal-overlay" onClick=${onClose}>
      <div className="modal-content" onClick=${(e) => e.stopPropagation()}>
        <button className="modal-close" onClick=${onClose}>✕</button>

        <!-- Modal Header -->
        <div className="modal-header">
          <div className="modal-hero-left">
            <div className="modal-avatar-wrap">
              <img
                className="modal-avatar-img"
                src=${getHeroPortraitUrl(hero)}
                alt=${hero.name}
                onError=${(e) => handleHeroImgError(e, hero.name)}
              />
              <div className="hero-avatar-fallback">${hero.name.charAt(0)}</div>
            </div>
            <div>
              <div className="modal-name">
                ${hero.name} <span style=${{ fontSize: '1.2rem', color: 'var(--text-dim)', fontWeight: '500' }}>(${hero.thaiName})</span>
              </div>
              <div className="modal-tags">
                <span className=${`tier-badge tier-${hero.tier.toLowerCase().replace('+', '-plus')}`}>
                  ${hero.tier} TIER
                </span>
                <span style=${{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>สาย: <strong style=${{ color: '#fff' }}>${hero.role}</strong></span>
              </div>
            </div>
          </div>

          <div style=${{ display: 'flex', gap: '24px', textAlign: 'right' }}>
            <div>
              <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Win Rate</div>
              <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>
                ${hero.winRate}%
              </div>
              <div style=${{ fontSize: '0.75rem', color: hero.winRateDelta >= 0 ? 'var(--vitality-green)' : 'var(--tier-s-plus)', fontWeight: '600' }}>
                ${hero.winRateDelta >= 0 ? `+${hero.winRateDelta}%` : `${hero.winRateDelta}%`}
              </div>
            </div>
            <div>
              <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Pick Rate</div>
              <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '800', color: '#fff' }}>
                ${hero.pickRate}%
              </div>
              <div style=${{ fontSize: '0.75rem', color: hero.pickRateDelta >= 0 ? 'var(--vitality-green)' : 'var(--tier-s-plus)', fontWeight: '600' }}>
                ${hero.pickRateDelta >= 0 ? `+${hero.pickRateDelta}%` : `${hero.pickRateDelta}%`}
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Sub-Tabs (Clean Categorization) -->
        <div className="modal-subtabs">
          <button
            className=${`modal-subtab-btn ${activeModalTab === 'skills' ? 'active' : ''}`}
            onClick=${() => setActiveModalTab('skills')}
          >
            1. สกิลและแนวทางการเล่น (Abilities)
          </button>
          <button
            className=${`modal-subtab-btn ${activeModalTab === 'builds' ? 'active' : ''}`}
            onClick=${() => setActiveModalTab('builds')}
          >
            2. ไอเทมบิลด์ 3 ช่วงเวลา (Item Progression)
          </button>
          <button
            className=${`modal-subtab-btn ${activeModalTab === 'tactics' ? 'active' : ''}`}
            onClick=${() => setActiveModalTab('tactics')}
          >
            3. จุดแข็ง/จุดอ่อน และตัวแก้ทาง (Counters)
          </button>
        </div>

        <!-- Modal Body Panels -->
        <div className="modal-body">
          <!-- PANEL 1: ABILITIES & OVERVIEW -->
          ${activeModalTab === 'skills' && html`
            <div className="modal-panel">
              <section>
                <h3 className="modal-section-title">บทวิเคราะห์และภาพรวมของฮีโร่</h3>
                <p style=${{ fontSize: '0.95rem', color: 'var(--text-main)', lineHeight: '1.7', background: 'rgba(10, 15, 24, 0.6)', padding: '18px 20px', borderRadius: '10px', borderLeft: '4px solid var(--soul-amber)' }}>
                  ${hero.descriptionThai}
                </p>
              </section>

              <section>
                <div style=${{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                  <div>
                    <h3 className="modal-section-title" style=${{ margin: 0 }}>สกิลประจำตัวครบ 4 สกิล</h3>
                    <div style=${{ fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '2px' }}>คลิกที่สกิลเพื่อดูรายละเอียด AP Upgrades และสเตตัสเชิงลึก</div>
                  </div>
                  <div style=${{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    ลำดับการอัปสกิลแนะนำ: <strong style=${{ color: 'var(--soul-amber)', fontFamily: 'var(--font-display)', fontSize: '1rem' }}>${hero.skillPriority}</strong>
                  </div>
                </div>

                <div className="abilities-grid">
                  ${hero.abilities.map(ab => html`
                    <div
                      key=${ab.num}
                      className="ability-card"
                      style=${{ cursor: 'pointer', transition: 'border-color 0.15s ease' }}
                      onClick=${() => onSelectSkill && onSelectSkill(ab, hero)}
                      title="คลิกเพื่อดูรายละเอียดสเกลลิ่งและ AP Upgrades"
                    >
                      <div className="ability-card-content">
                        <div className="ability-icon-wrap">
                          <img
                            className="ability-icon-img"
                            src=${getAbilityIconUrl(ab.name)}
                            alt=${ab.name}
                            loading="lazy"
                            onError=${(e) => handleAbilityImgError(e, ab.num)}
                          />
                        </div>
                        <div style=${{ flex: 1, minWidth: 0 }}>
                          <div className="ability-header">
                            <span className="ability-num">สกิล ${ab.num}</span>
                            <span className="ability-cd">CD: ${ab.cd}</span>
                          </div>
                          <div className="ability-name">${ab.name}</div>
                        </div>
                      </div>
                      <div className="ability-desc" style=${{ marginTop: '10px', fontSize: '0.84rem', lineHeight: '1.5' }}>${ab.desc}</div>
                      <div style=${{ marginTop: '10px' }}>
                        <span style=${{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: 'var(--spirit-purple)', fontWeight: '700', background: 'rgba(168, 85, 247, 0.15)', padding: '4px 10px', borderRadius: '6px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                          ดูสเตตัสและ AP Upgrades (T1-T3) →
                        </span>
                      </div>
                    </div>
                  `)}
                </div>
              </section>
            </div>
          `}

          <!-- PANEL 2: ITEM BUILDS -->
          ${activeModalTab === 'builds' && html`
            <div className="modal-panel">
              <section>
                <div style=${{ marginBottom: '12px' }}>
                  <h3 className="modal-section-title" style=${{ margin: 0 }}>แผนผังการออกไอเทม 3 ช่วงเวลา (Item Progression)</h3>
                  <p style=${{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    คลิกที่ไอเทมแต่ละชิ้นเพื่อดูสเตตัสละเอียด, ค่า Passive/Active และสายอัปเกรด
                  </p>
                </div>

                <div className="builds-layout">
                  <!-- Early Game -->
                  <div className="build-phase-card">
                    <div className="phase-header">
                      <span className="phase-name">ช่วงต้นเกม (Early Game)</span>
                      <span className="phase-souls">
                        <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" />
                        ~500 Souls
                      </span>
                    </div>
                    <div className="phase-items-list">
                      ${hero.itemBuilds.early.map(item => html`
                        <div
                          key=${item}
                          className="phase-item-pill"
                          style=${{ cursor: 'pointer' }}
                          onClick=${() => onSelectItem && onSelectItem(item)}
                          title="คลิกเพื่อดูรายละเอียดไอเทม"
                        >
                          <img
                            className="phase-item-icon"
                            src=${getItemIconUrl(item)}
                            alt=${item}
                            loading="lazy"
                            onError=${(e) => handleItemImgError(e, 'weapon')}
                          />
                          <span style=${{ flex: 1, fontWeight: '600' }}>${item}</span>
                          <span style=${{ fontSize: '0.75rem', color: 'var(--soul-amber)', fontWeight: '700' }}>500</span>
                        </div>
                      `)}
                    </div>
                  </div>

                  <!-- Mid Game -->
                  <div className="build-phase-card">
                    <div className="phase-header">
                      <span className="phase-name">ช่วงกลางเกม (Core Build)</span>
                      <span className="phase-souls">
                        <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" />
                        1,250 - 3,000 Souls
                      </span>
                    </div>
                    <div className="phase-items-list">
                      ${hero.itemBuilds.mid.map(item => html`
                        <div
                          key=${item}
                          className="phase-item-pill"
                          style=${{ cursor: 'pointer' }}
                          onClick=${() => onSelectItem && onSelectItem(item)}
                          title="คลิกเพื่อดูรายละเอียดไอเทม"
                        >
                          <img
                            className="phase-item-icon"
                            src=${getItemIconUrl(item)}
                            alt=${item}
                            loading="lazy"
                            onError=${(e) => handleItemImgError(e, 'vitality')}
                          />
                          <span style=${{ flex: 1, fontWeight: '600' }}>${item}</span>
                          <span style=${{ fontSize: '0.75rem', color: 'var(--vitality-green)', fontWeight: '700' }}>Core</span>
                        </div>
                      `)}
                    </div>
                  </div>

                  <!-- Late Game -->
                  <div className="build-phase-card">
                    <div className="phase-header">
                      <span className="phase-name">ช่วงท้ายเกม (Luxury Power)</span>
                      <span className="phase-souls">
                        <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" />
                        6,200+ Souls
                      </span>
                    </div>
                    <div className="phase-items-list">
                      ${hero.itemBuilds.late.map(item => html`
                        <div
                          key=${item}
                          className="phase-item-pill"
                          style=${{ cursor: 'pointer' }}
                          onClick=${() => onSelectItem && onSelectItem(item)}
                          title="คลิกเพื่อดูรายละเอียดไอเทม"
                        >
                          <img
                            className="phase-item-icon"
                            src=${getItemIconUrl(item)}
                            alt=${item}
                            loading="lazy"
                            onError=${(e) => handleItemImgError(e, 'spirit')}
                          />
                          <span style=${{ flex: 1, fontWeight: '600' }}>${item}</span>
                          <span style=${{ fontSize: '0.75rem', color: 'var(--spirit-purple)', fontWeight: '700' }}>6.2K+</span>
                        </div>
                      `)}
                    </div>
                  </div>
                </div>

                <!-- Situational Items -->
                <div style=${{ marginTop: '18px', padding: '16px 20px', background: 'rgba(10, 15, 24, 0.7)', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                  <div style=${{ fontSize: '0.85rem', color: 'var(--soul-amber)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
                    ไอเทมแก้ทางตามสถานการณ์ (Situational Options):
                  </div>
                  <div style=${{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    ${hero.itemBuilds.situational.map(item => html`
                      <div
                        key=${item}
                        className="phase-item-pill"
                        style=${{ padding: '6px 12px', cursor: 'pointer' }}
                        onClick=${() => onSelectItem && onSelectItem(item)}
                        title="คลิกเพื่อดูรายละเอียดไอเทม"
                      >
                        <img
                          className="phase-item-icon"
                          src=${getItemIconUrl(item)}
                          alt=${item}
                          loading="lazy"
                          onError=${(e) => handleItemImgError(e, 'spirit')}
                          style=${{ width: '22px', height: '22px' }}
                        />
                        <span style=${{ fontSize: '0.85rem' }}>${item}</span>
                      </div>
                    `)}
                  </div>
                </div>
              </section>
            </div>
          `}

          <!-- PANEL 3: TACTICS & COUNTERS -->
          ${activeModalTab === 'tactics' && html`
            <div className="modal-panel">
              <!-- Strengths & Weaknesses -->
              <section className="tactics-grid">
                <div className="tactic-box" style=${{ borderLeft: '4px solid var(--vitality-green)' }}>
                  <h4 style=${{ fontWeight: '700', color: 'var(--vitality-green)', marginBottom: '12px', fontSize: '1rem' }}>
                    จุดแข็งที่ควรใช้ให้เป็นประโยชน์ (Strengths)
                  </h4>
                  <ul className="tactic-list">
                    ${hero.strengths.map(s => html`<li key=${s}>${s}</li>`)}
                  </ul>
                </div>

                <div className="tactic-box" style=${{ borderLeft: '4px solid var(--tier-s-plus)' }}>
                  <h4 style=${{ fontWeight: '700', color: 'var(--tier-s-plus)', marginBottom: '12px', fontSize: '1rem' }}>
                    จุดอ่อนและข้อควรระวัง (Weaknesses)
                  </h4>
                  <ul className="tactic-list">
                    ${hero.weaknesses.map(w => html`<li key=${w}>${w}</li>`)}
                  </ul>
                </div>
              </section>

              <!-- Counter Matchups -->
              <section style=${{ background: 'rgba(18, 25, 40, 0.7)', padding: '20px 24px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                <div style=${{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                  <div>
                    <span style=${{ fontSize: '0.85rem', color: 'var(--vitality-green)', fontWeight: '700', textTransform: 'uppercase' }}>
                      ได้เปรียบเมื่อเจอ (Strong Against):
                    </span>
                    <div style=${{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                      ${hero.counters.strongAgainst.map(c => html`
                        <div key=${c} className="counter-hero-pill" style=${{ borderColor: 'rgba(34, 197, 94, 0.5)', background: 'rgba(34, 197, 94, 0.1)' }}>
                          <img
                            className="counter-hero-img"
                            src=${getHeroPortraitUrl(c)}
                            alt=${c}
                            loading="lazy"
                            onError=${(e) => handleHeroImgError(e, c)}
                          />
                          <span style=${{ color: '#fff', fontWeight: '600' }}>${c}</span>
                        </div>
                      `)}
                    </div>
                  </div>

                  <div>
                    <span style=${{ fontSize: '0.85rem', color: 'var(--tier-s-plus)', fontWeight: '700', textTransform: 'uppercase' }}>
                      เสียเปรียบเมื่อเจอ (Weak Against):
                    </span>
                    <div style=${{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                      ${hero.counters.weakAgainst.map(c => html`
                        <div key=${c} className="counter-hero-pill" style=${{ borderColor: 'rgba(239, 68, 68, 0.5)', background: 'rgba(239, 68, 68, 0.1)' }}>
                          <img
                            className="counter-hero-img"
                            src=${getHeroPortraitUrl(c)}
                            alt=${c}
                            loading="lazy"
                            onError=${(e) => handleHeroImgError(e, c)}
                          />
                          <span style=${{ color: '#fff', fontWeight: '600' }}>${c}</span>
                        </div>
                      `)}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          `}
        </div>
      </div>
    </div>
  `;
}
