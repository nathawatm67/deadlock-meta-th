// ===================================================================
// Deadlock Meta Thailand — Deadlock Pro Builds Hub Component
// Curated Chinese (CN 完美世界) & Western (NA/EU) Competitive Builds
// Interactive Item & Skill Modals
// Zero Emojis Policy
// ===================================================================

import React, { useState, useMemo } from 'react';
import htm from 'htm';
import {
  getHeroPortraitUrl,
  handleHeroImgError,
  getItemIconUrl,
  handleItemImgError,
  SOUL_ICON_URL
} from '../utils/assets.js';

const html = htm.bind(React.createElement);

export function DeadlockBuilds({ builds, onSelectHero, onSelectItem, onSelectSkill }) {
  const [selectedRegion, setSelectedRegion] = useState('ALL'); // 'ALL', 'CN', 'EN'
  const [selectedHero, setSelectedHero] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  // Extract unique heroes in builds
  const availableHeroes = useMemo(() => {
    const map = new Map();
    builds.forEach(b => {
      if (!map.has(b.heroName)) {
        map.set(b.heroName, b.heroId);
      }
    });
    return Array.from(map.entries()).map(([name, id]) => ({ name, id }));
  }, [builds]);

  // Filtered builds
  const filteredBuilds = useMemo(() => {
    let result = [...builds];

    if (searchTerm && searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(b =>
        b.titleThai.toLowerCase().includes(q) ||
        b.titleOriginal.toLowerCase().includes(q) ||
        b.heroName.toLowerCase().includes(q) ||
        b.conceptThai.toLowerCase().includes(q) ||
        b.playstyle.toLowerCase().includes(q)
      );
    }

    if (selectedRegion !== 'ALL') {
      result = result.filter(b => b.region === selectedRegion);
    }

    if (selectedHero !== 'ALL') {
      result = result.filter(b => b.heroName === selectedHero);
    }

    return result;
  }, [builds, searchTerm, selectedRegion, selectedHero]);

  return html`
    <div className="deadlock-builds-page">
      <!-- Section Header -->
      <div className="section-header" style=${{ marginBottom: '16px', alignItems: 'flex-start' }}>
        <div>
          <h1 className="section-title">คลังจัดเซ็ตไอเทมยอดนิยม (Deadlock Pro Builds)</h1>
          <p style=${{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            รวบรวมแผนการออกของระดับโปรเพลเยอร์จาก <strong>ฝั่งจีน (CN 完美世界 / Bilibili)</strong> และ <strong>ฝั่งตะวันตก (NA / EU High MMR)</strong> คลิกที่ไอเทมเพื่อดูรายละเอียดเชิงลึก
          </p>
        </div>

        <div style=${{ fontSize: '0.85rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
          พบทั้งหมด: <strong style=${{ color: 'var(--soul-amber)' }}>${filteredBuilds.length} บิลด์</strong>
        </div>
      </div>

      <!-- Filter Controls Bar -->
      <div className="filter-bar" style=${{ marginBottom: '24px' }}>
        <!-- Region Filter -->
        <div className="filter-group">
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>โซนการเล่น:</span>
          <button
            className=${`filter-btn ${selectedRegion === 'ALL' ? 'active' : ''}`}
            onClick=${() => setSelectedRegion('ALL')}
          >
            ทุกโซน (All Regions)
          </button>
          <button
            className=${`filter-btn ${selectedRegion === 'CN' ? 'active' : ''}`}
            onClick=${() => setSelectedRegion('CN')}
            style=${{ borderColor: selectedRegion === 'CN' ? 'var(--tier-s-plus)' : undefined }}
          >
            ฝั่งจีน (CN 完美世界)
          </button>
          <button
            className=${`filter-btn ${selectedRegion === 'EN' ? 'active' : ''}`}
            onClick=${() => setSelectedRegion('EN')}
            style=${{ borderColor: selectedRegion === 'EN' ? 'var(--soul-amber)' : undefined }}
          >
            ฝั่งตะวันตก (NA / EU)
          </button>
        </div>

        <!-- Hero Selector -->
        <div className="filter-group">
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>เลือกฮีโร่:</span>
          <select
            className="filter-btn"
            style=${{ paddingRight: '24px', cursor: 'pointer' }}
            value=${selectedHero}
            onChange=${(e) => setSelectedHero(e.target.value)}
          >
            <option value="ALL">ฮีโร่ทั้งหมด (All Heroes)</option>
            ${availableHeroes.map(h => html`
              <option key=${h.id} value=${h.name}>${h.name}</option>
            `)}
          </select>
        </div>

        <!-- Quick Search -->
        <div style=${{ marginLeft: 'auto' }}>
          <input
            type="text"
            className="search-input"
            style=${{ width: '220px', padding: '6px 12px', fontSize: '0.85rem' }}
            placeholder="ค้นหาชื่อบิลด์ หรือสาย..."
            value=${searchTerm}
            onInput=${(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <!-- Builds List Grid -->
      <div style=${{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        ${filteredBuilds.map(build => html`
          <div
            key=${build.id}
            className="build-card"
            style=${{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderLeft: build.region === 'CN' ? '5px solid var(--tier-s-plus)' : '5px solid var(--soul-amber)',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <!-- Build Top Header -->
            <div style=${{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style=${{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  className="hero-avatar-wrap"
                  style=${{ width: '56px', height: '56px', cursor: 'pointer' }}
                  onClick=${() => onSelectHero && onSelectHero(build.heroName)}
                  title="คลิกเพื่อดูรายละเอียดฮีโร่"
                >
                  <img
                    className="hero-avatar-img"
                    src=${getHeroPortraitUrl(build.heroName)}
                    alt=${build.heroName}
                    loading="lazy"
                    onError=${(e) => handleHeroImgError(e, build.heroName)}
                  />
                  <div className="hero-avatar-fallback">${build.heroName.charAt(0)}</div>
                </div>

                <div>
                  <div style=${{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style=${{
                      background: build.region === 'CN' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(229, 169, 59, 0.2)',
                      color: build.region === 'CN' ? 'var(--tier-s-plus)' : 'var(--soul-amber)',
                      border: build.region === 'CN' ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(229, 169, 59, 0.4)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: '800'
                    }}>
                      ${build.region === 'CN' ? 'CN META' : 'WESTERN META'}
                    </span>
                    <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      แหล่งที่มา: <strong>${build.author}</strong>
                    </span>
                  </div>

                  <h2 style=${{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: '800', color: '#fff', marginTop: '4px' }}>
                    ${build.titleThai}
                  </h2>
                  <div style=${{ fontSize: '0.82rem', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                    ${build.titleOriginal} • สไตล์: <span style=${{ color: 'var(--soul-light)' }}>${build.playstyle}</span>
                  </div>
                </div>
              </div>

              <!-- Win Rate & Action -->
              <div style=${{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style=${{ textAlign: 'right' }}>
                  <div style=${{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700' }}>Win Rate บิลด์นี้</div>
                  <div style=${{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: 'var(--vitality-green)' }}>
                    ${build.winRate}%
                  </div>
                </div>

                <button
                  className="filter-btn active"
                  style=${{ padding: '8px 16px', fontSize: '0.85rem' }}
                  onClick=${() => onSelectHero && onSelectHero(build.heroName)}
                >
                  เจาะลึก ${build.heroName} →
                </button>
              </div>
            </div>

            <!-- Build Concept & Playstyle -->
            <div style=${{ margin: '16px 0', padding: '14px 18px', background: 'rgba(10, 15, 24, 0.6)', borderRadius: '8px', borderLeft: '3px solid var(--soul-amber)' }}>
              <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>
                แนวทางการเล่นและจุดเด่นของบิลด์นี้:
              </div>
              <p style=${{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: '1.6' }}>
                ${build.conceptThai}
              </p>
            </div>

            <!-- Skill Priority Bar -->
            <div style=${{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', background: 'rgba(18, 25, 40, 0.5)', padding: '10px 16px', borderRadius: '8px', flexWrap: 'wrap' }}>
              <span style=${{ fontSize: '0.78rem', color: 'var(--spirit-purple)', fontWeight: '700', textTransform: 'uppercase' }}>
                ลำดับการอัป Ability Points (AP):
              </span>
              <span style=${{ fontFamily: 'var(--font-display)', fontWeight: '800', color: 'var(--soul-amber)', fontSize: '1.05rem', letterSpacing: '1px' }}>
                ${build.skillOrder}
              </span>
              <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', flex: 1, minWidth: '200px' }}>
                ${build.skillNotes}
              </span>
              <button
                type="button"
                className="filter-btn"
                style=${{ fontSize: '0.75rem', padding: '3px 10px', borderColor: 'var(--spirit-purple)', color: 'var(--spirit-purple)', background: 'rgba(168, 85, 247, 0.1)' }}
                onClick=${() => onSelectHero && onSelectHero(build.heroName)}
                title="คลิกเพื่อดูรายละเอียดสกิลและการอัปเกรด AP"
              >
                ดูผังสกิลและ AP Upgrades →
              </button>
            </div>

            <!-- 4-Phase Interactive Item Progression -->
            <div>
              <div style=${{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '12px' }}>
                ไอเทมบิลด์ 4 ช่วงเวลา (คลิกที่ไอเทมเพื่อดูสเตตัสและคำอธิบายละเอียด):
              </div>

              <div style=${{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                <!-- Early Phase -->
                <div style=${{ background: 'rgba(10, 15, 24, 0.8)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', color: 'var(--soul-amber)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    <span>ช่วงต้นเกม (Early)</span>
                    <span>~500 Souls</span>
                  </div>
                  <div style=${{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    ${build.items.early.map(itemName => html`
                      <div
                        key=${itemName}
                        className="phase-item-pill"
                        style=${{ cursor: 'pointer', padding: '5px 8px' }}
                        onClick=${() => onSelectItem && onSelectItem(itemName)}
                        title="คลิกเพื่อดูรายละเอียดไอเทม"
                      >
                        <img
                          className="phase-item-icon"
                          src=${getItemIconUrl(itemName)}
                          alt=${itemName}
                          loading="lazy"
                          onError=${(e) => handleItemImgError(e, 'weapon')}
                          style=${{ width: '22px', height: '22px' }}
                        />
                        <span style=${{ fontSize: '0.8rem', flex: 1 }}>${itemName}</span>
                      </div>
                    `)}
                  </div>
                </div>

                <!-- Mid Phase -->
                <div style=${{ background: 'rgba(10, 15, 24, 0.8)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', color: 'var(--vitality-green)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    <span>ช่วงกลางเกม (Core)</span>
                    <span>1.2K - 3K</span>
                  </div>
                  <div style=${{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    ${build.items.mid.map(itemName => html`
                      <div
                        key=${itemName}
                        className="phase-item-pill"
                        style=${{ cursor: 'pointer', padding: '5px 8px' }}
                        onClick=${() => onSelectItem && onSelectItem(itemName)}
                        title="คลิกเพื่อดูรายละเอียดไอเทม"
                      >
                        <img
                          className="phase-item-icon"
                          src=${getItemIconUrl(itemName)}
                          alt=${itemName}
                          loading="lazy"
                          onError=${(e) => handleItemImgError(e, 'vitality')}
                          style=${{ width: '22px', height: '22px' }}
                        />
                        <span style=${{ fontSize: '0.8rem', flex: 1 }}>${itemName}</span>
                      </div>
                    `)}
                  </div>
                </div>

                <!-- Late Phase -->
                <div style=${{ background: 'rgba(10, 15, 24, 0.8)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', color: 'var(--spirit-purple)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    <span>ช่วงท้ายเกม (Luxury)</span>
                    <span>6,200+ Souls</span>
                  </div>
                  <div style=${{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    ${build.items.late.map(itemName => html`
                      <div
                        key=${itemName}
                        className="phase-item-pill"
                        style=${{ cursor: 'pointer', padding: '5px 8px' }}
                        onClick=${() => onSelectItem && onSelectItem(itemName)}
                        title="คลิกเพื่อดูรายละเอียดไอเทม"
                      >
                        <img
                          className="phase-item-icon"
                          src=${getItemIconUrl(itemName)}
                          alt=${itemName}
                          loading="lazy"
                          onError=${(e) => handleItemImgError(e, 'spirit')}
                          style=${{ width: '22px', height: '22px' }}
                        />
                        <span style=${{ fontSize: '0.8rem', flex: 1 }}>${itemName}</span>
                      </div>
                    `)}
                  </div>
                </div>

                <!-- Situational Phase -->
                <div style=${{ background: 'rgba(10, 15, 24, 0.8)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-dim)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    <span>แก้ทางตามเกม (Situational)</span>
                    <span>Optional</span>
                  </div>
                  <div style=${{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    ${build.items.situational.map(itemName => html`
                      <div
                        key=${itemName}
                        className="phase-item-pill"
                        style=${{ cursor: 'pointer', padding: '5px 8px' }}
                        onClick=${() => onSelectItem && onSelectItem(itemName)}
                        title="คลิกเพื่อดูรายละเอียดไอเทม"
                      >
                        <img
                          className="phase-item-icon"
                          src=${getItemIconUrl(itemName)}
                          alt=${itemName}
                          loading="lazy"
                          onError=${(e) => handleItemImgError(e, 'spirit')}
                          style=${{ width: '22px', height: '22px' }}
                        />
                        <span style=${{ fontSize: '0.8rem', flex: 1 }}>${itemName}</span>
                      </div>
                    `)}
                  </div>
                </div>
              </div>
            </div>

            <!-- Combos & Combat Guide -->
            ${build.combosThai ? html`
              <div style=${{ marginTop: '16px', padding: '12px 16px', background: 'rgba(18, 25, 40, 0.4)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong style=${{ color: 'var(--vitality-green)', marginRight: '6px' }}>ลำดับคอมโบโจมตี:</strong>
                ${build.combosThai}
              </div>
            ` : null}
          </div>
        `)}
      </div>

      <!-- Empty State -->
      ${filteredBuilds.length === 0 ? html`
        <div style=${{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
          <div style=${{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '8px' }}>ไม่พบบิลด์ตามเงื่อนไขที่เลือก</div>
          <div style=${{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>ลองสลับโซนการเล่น หรือเลือกฮีโร่ตัวอื่น</div>
        </div>
      ` : null}
    </div>
  `;
}
