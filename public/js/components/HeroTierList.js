// ===================================================================
// Deadlock Meta Thailand — Hero Tier List Component (Redesigned)
// Clear Division, High-Contrast Typography, Dual-View (Grid & Table)
// Zero Emojis Policy
// ===================================================================

import React, { useState, useMemo } from 'react';
import htm from 'htm';
import { getHeroPortraitUrl, handleHeroImgError } from '../utils/assets.js';

const html = htm.bind(React.createElement);

export function HeroTierList({ heroes, onSelectHero, searchTerm }) {
  const [selectedTier, setSelectedTier] = useState('ALL');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [sortBy, setSortBy] = useState('tier'); // tier, winrate, pickrate, name
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'table'

  const tiers = ['ALL', 'S+', 'S', 'A', 'B', 'C', 'D'];
  const roles = [
    { id: 'ALL', label: 'ทุกสาย' },
    { id: 'Carry', label: 'แครี่ (Carry)' },
    { id: 'Brawler', label: 'ประชิด (Brawler)' },
    { id: 'Initiator', label: 'เปิดไฟต์ (Initiator)' },
    { id: 'Support', label: 'ซัพพอร์ต (Support)' },
    { id: 'Ganker', label: 'แก๊งค์ (Ganker)' },
    { id: 'Sniper', label: 'สไนเปอร์ (Sniper)' },
    { id: 'Mage', label: 'เมจ (Mage)' }
  ];

  // Filtered and Sorted Heroes
  const filteredHeroes = useMemo(() => {
    let result = [...heroes];

    // Search filter
    if (searchTerm && searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(h =>
        h.name.toLowerCase().includes(q) ||
        h.thaiName.toLowerCase().includes(q) ||
        h.role.toLowerCase().includes(q)
      );
    }

    // Tier filter
    if (selectedTier !== 'ALL') {
      result = result.filter(h => h.tier === selectedTier);
    }

    // Role filter
    if (selectedRole !== 'ALL') {
      result = result.filter(h => h.role.toLowerCase().includes(selectedRole.toLowerCase()));
    }

    // Sorting
    if (sortBy === 'winrate') {
      result.sort((a, b) => b.winRate - a.winRate);
    } else if (sortBy === 'pickrate') {
      result.sort((a, b) => b.pickRate - a.pickRate);
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'tier') {
      const tierRank = { 'S+': 1, 'S': 2, 'A': 3, 'B': 4, 'C': 5, 'D': 6 };
      result.sort((a, b) => {
        const diff = (tierRank[a.tier] || 99) - (tierRank[b.tier] || 99);
        if (diff !== 0) return diff;
        return b.winRate - a.winRate;
      });
    }

    return result;
  }, [heroes, searchTerm, selectedTier, selectedRole, sortBy]);

  // Tier groupings for default tier view
  const tierOrder = ['S+', 'S', 'A', 'B', 'C', 'D'];
  const tierDescriptions = {
    'S+': 'เมต้าทรงพลังสูงสุด อัตราการชนะเกิน 55% มีอิทธิพลต่อผลแพ้ชนะทุกเกม',
    'S': 'ฮีโร่แถวหน้าของเกม สถิติสม่ำเสมอ แข็งแกร่งในทุกช่วงเวลา',
    'A': 'ฮีโร่เก่งรอบด้าน พึ่งพาได้สูงหากเล่นเข้ากับคอมป์ทีม',
    'B': 'กลุ่มมาตรฐานตามสถานการณ์ เล่นได้ดีหากไม่โดนเคาน์เตอร์',
    'C': 'ต่ำกว่าค่าเฉลี่ย ต้องอาศัยความชำนาญสูงหรือคอมป์เฉพาะทาง',
    'D': 'ฮีโร่อ่อนแอกว่าค่าเฉลี่ยในแพตช์ปัจจุบัน วินเรทต่ำกว่า 45.1%'
  };

  return html`
    <div className="tierlist-container">
      <!-- Section Header with View Mode Switcher -->
      <div className="section-header" style=${{ marginBottom: '16px', alignItems: 'flex-start' }}>
        <div>
          <h1 className="section-title">ตารางจัดอันดับฮีโร่ (Hero Tier List)</h1>
          <p style=${{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            รวบรวมสถิติครบทั้ง 39 ฮีโร่ แบ่งตามระดับ Tier, Win Rate และ Pick Rate ประจำแพตช์ 2026-10-14
          </p>
        </div>

        <!-- View Mode Switcher -->
        <div className="view-toggle-group">
          <button
            className=${`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick=${() => setViewMode('grid')}
            title="แสดงแบบการ์ด"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            การ์ด (Grid)
          </button>
          <button
            className=${`view-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick=${() => setViewMode('table')}
            title="แสดงแบบตารางสรุปเร็ว"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            ตารางด่วน (Table)
          </button>
        </div>
      </div>

      <!-- Filters & Sorting Bar -->
      <div className="filter-bar" style=${{ marginBottom: '24px' }}>
        <!-- Tier Filters -->
        <div className="filter-group">
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>TIER:</span>
          ${tiers.map(t => html`
            <button
              key=${t}
              className=${`filter-btn ${selectedTier === t ? 'active' : ''}`}
              onClick=${() => setSelectedTier(t)}
            >
              ${t}
            </button>
          `)}
        </div>

        <!-- Role Filters -->
        <div className="filter-group">
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>สาย:</span>
          ${roles.map(r => html`
            <button
              key=${r.id}
              className=${`filter-btn ${selectedRole === r.id ? 'active' : ''}`}
              onClick=${() => setSelectedRole(r.id)}
            >
              ${r.label}
            </button>
          `)}
        </div>

        <!-- Sort Select -->
        <div className="filter-group" style=${{ marginLeft: 'auto' }}>
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>เรียงลำดับ:</span>
          <select
            className="filter-btn"
            style=${{ paddingRight: '24px', cursor: 'pointer' }}
            value=${sortBy}
            onChange=${(e) => setSortBy(e.target.value)}
          >
            <option value="tier">ระดับ Tier (S+ → D)</option>
            <option value="winrate">Win Rate (สูง → ต่ำ)</option>
            <option value="pickrate">Pick Rate (มาก → น้อย)</option>
            <option value="name">ชื่อฮีโร่ (A → Z)</option>
          </select>
        </div>
      </div>

      <!-- Content View: Table vs Grid -->
      ${viewMode === 'table' ? html`
        <!-- TABLE VIEW -->
        <div className="table-responsive">
          <table className="meta-table">
            <thead>
              <tr>
                <th style=${{ width: '60px', textAlign: 'center' }}>#</th>
                <th style=${{ width: '90px' }}>Tier</th>
                <th>ฮีโร่ (Hero)</th>
                <th>บทบาท (Role)</th>
                <th style=${{ width: '160px' }}>Win Rate</th>
                <th style=${{ width: '130px' }}>Pick Rate</th>
                <th>แมตช์ชนะ / แพ้</th>
                <th style=${{ textAlign: 'right' }}>คู่มือ & บิลด์</th>
              </tr>
            </thead>
            <tbody>
              ${filteredHeroes.map((hero, idx) => html`
                <tr key=${hero.id} className="table-row-hover" onClick=${() => onSelectHero(hero)}>
                  <td style=${{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--text-dim)' }}>
                    ${idx + 1}
                  </td>
                  <td>
                    <span className=${`tier-badge tier-${hero.tier.toLowerCase().replace('+', '-plus')}`}>
                      ${hero.tier}
                    </span>
                  </td>
                  <td>
                    <div style=${{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div className="hero-avatar-wrap" style=${{ width: '38px', height: '38px' }}>
                        <img
                          className="hero-avatar-img"
                          src=${getHeroPortraitUrl(hero)}
                          alt=${hero.name}
                          loading="lazy"
                          onError=${(e) => handleHeroImgError(e, hero.name)}
                        />
                        <div className="hero-avatar-fallback">${hero.name.charAt(0)}</div>
                      </div>
                      <div>
                        <div style=${{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>${hero.name}</div>
                        <div style=${{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>${hero.thaiName}</div>
                      </div>
                    </div>
                  </td>
                  <td style=${{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    ${hero.role}
                  </td>
                  <td>
                    <div style=${{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                      <span style=${{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1.05rem', color: hero.winRate >= 50 ? 'var(--vitality-green)' : 'var(--tier-s-plus)' }}>
                        ${hero.winRate}%
                      </span>
                      <span className=${`delta ${hero.winRateDelta >= 0 ? 'positive' : 'negative'}`}>
                        ${hero.winRateDelta >= 0 ? `+${hero.winRateDelta}%` : `${hero.winRateDelta}%`}
                      </span>
                    </div>
                    <div className="wr-progress-bar">
                      <div
                        className="wr-progress-fill"
                        style=${{
                          width: `${Math.min(100, Math.max(0, (hero.winRate - 40) * 5))}%`,
                          background: hero.winRate >= 50 ? 'var(--vitality-green)' : 'var(--tier-s-plus)'
                        }}
                      ></div>
                    </div>
                  </td>
                  <td>
                    <div style=${{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '1rem', color: '#fff' }}>
                      ${hero.pickRate}%
                    </div>
                    <div style=${{ fontSize: '0.72rem', color: hero.pickRateDelta >= 0 ? 'var(--vitality-green)' : 'var(--tier-s-plus)' }}>
                      ${hero.pickRateDelta >= 0 ? `+${hero.pickRateDelta}%` : `${hero.pickRateDelta}%`}
                    </div>
                  </td>
                  <td style=${{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>
                    <div>ชนะ: <strong style=${{ color: '#fff' }}>${hero.matchesWon}</strong></div>
                    <div>แพ้: ${hero.matchesLost}</div>
                  </td>
                  <td style=${{ textAlign: 'right' }}>
                    <button
                      className="filter-btn active"
                      style=${{ fontSize: '0.78rem', padding: '5px 12px' }}
                      onClick=${(e) => { e.stopPropagation(); onSelectHero(hero); }}
                    >
                      ดูข้อมูล →
                    </button>
                  </td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      ` : html`
        <!-- GRID VIEW (Grouped by Tier when Tier filter is ALL) -->
        ${selectedTier === 'ALL' && selectedRole === 'ALL' && (!searchTerm || searchTerm === '') && sortBy === 'tier' ? (
          tierOrder.map(tier => {
            const tierHeroes = filteredHeroes.filter(h => h.tier === tier);
            if (tierHeroes.length === 0) return null;

            return html`
              <div key=${tier} className="tier-section" style=${{ marginBottom: '32px' }}>
                <!-- Clear Tier Band Header -->
                <div className=${`tier-band-header tier-${tier.toLowerCase().replace('+', '-plus')}`}>
                  <div style=${{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span className=${`tier-badge tier-${tier.toLowerCase().replace('+', '-plus')}`} style=${{ fontSize: '1.1rem', padding: '6px 16px' }}>
                      ${tier} TIER
                    </span>
                    <span style=${{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      ${tierDescriptions[tier]}
                    </span>
                  </div>
                  <div style=${{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                    จำนวน: <strong style=${{ color: 'var(--soul-amber)' }}>${tierHeroes.length} ตัว</strong>
                  </div>
                </div>

                <div className="heroes-grid">
                  ${tierHeroes.map(hero => html`
                    <div key=${hero.id} className="hero-card" onClick=${() => onSelectHero(hero)}>
                      <div className="hero-card-header">
                        <div className="hero-identity">
                          <div className="hero-avatar-wrap">
                            <img
                              className="hero-avatar-img"
                              src=${getHeroPortraitUrl(hero)}
                              alt=${hero.name}
                              loading="lazy"
                              onError=${(e) => handleHeroImgError(e, hero.name)}
                            />
                            <div className="hero-avatar-fallback">${hero.name.charAt(0)}</div>
                          </div>
                          <div>
                            <div className="hero-name">${hero.name}</div>
                            <div className="hero-role">${hero.thaiName} • ${hero.role}</div>
                          </div>
                        </div>
                        <div className=${`tier-badge tier-${hero.tier.toLowerCase().replace('+', '-plus')}`}>
                          ${hero.tier}
                        </div>
                      </div>

                      <div className="hero-metrics">
                        <div className="metric-col">
                          <span className="metric-label">Win Rate</span>
                          <span className="metric-val">
                            ${hero.winRate}%
                            <span className=${`delta ${hero.winRateDelta >= 0 ? 'positive' : 'negative'}`}>
                              ${hero.winRateDelta >= 0 ? `+${hero.winRateDelta}%` : `${hero.winRateDelta}%`}
                            </span>
                          </span>
                        </div>
                        <div className="metric-col">
                          <span className="metric-label">Pick Rate</span>
                          <span className="metric-val">${hero.pickRate}%</span>
                        </div>
                      </div>

                      <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '8px' }}>
                        <span>ชนะ: <strong style=${{ color: '#fff' }}>${hero.matchesWon}</strong></span>
                        <span>แพ้: ${hero.matchesLost}</span>
                      </div>

                      <div className="hero-desc-short">${hero.descriptionThai}</div>
                    </div>
                  `)}
                </div>
              </div>
            `;
          })
        ) : (
          html`
            <div className="heroes-grid">
              ${filteredHeroes.map(hero => html`
                <div key=${hero.id} className="hero-card" onClick=${() => onSelectHero(hero)}>
                  <div className="hero-card-header">
                    <div className="hero-identity">
                      <div className="hero-avatar-wrap">
                        <img
                          className="hero-avatar-img"
                          src=${getHeroPortraitUrl(hero)}
                          alt=${hero.name}
                          loading="lazy"
                          onError=${(e) => handleHeroImgError(e, hero.name)}
                        />
                        <div className="hero-avatar-fallback">${hero.name.charAt(0)}</div>
                      </div>
                      <div>
                        <div className="hero-name">${hero.name}</div>
                        <div className="hero-role">${hero.thaiName} • ${hero.role}</div>
                      </div>
                    </div>
                    <div className=${`tier-badge tier-${hero.tier.toLowerCase().replace('+', '-plus')}`}>
                      ${hero.tier}
                    </div>
                  </div>

                  <div className="hero-metrics">
                    <div className="metric-col">
                      <span className="metric-label">Win Rate</span>
                      <span className="metric-val">
                        ${hero.winRate}%
                        <span className=${`delta ${hero.winRateDelta >= 0 ? 'positive' : 'negative'}`}>
                          ${hero.winRateDelta >= 0 ? `+${hero.winRateDelta}%` : `${hero.winRateDelta}%`}
                        </span>
                      </span>
                    </div>
                    <div className="metric-col">
                      <span className="metric-label">Pick Rate</span>
                      <span className="metric-val">${hero.pickRate}%</span>
                    </div>
                  </div>

                  <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '8px' }}>
                    <span>ชนะ: <strong style=${{ color: '#fff' }}>${hero.matchesWon}</strong></span>
                    <span>แพ้: ${hero.matchesLost}</span>
                  </div>

                  <div className="hero-desc-short">${hero.descriptionThai}</div>
                </div>
              `)}
            </div>
          `
        )}
      `}

      <!-- Empty State -->
      ${filteredHeroes.length === 0 ? html`
        <div style=${{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
          <div style=${{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '8px' }}>ไม่พบฮีโร่ตามเงื่อนไขที่เลือก</div>
          <div style=${{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>ลองรีเซ็ตตัวกรองหรือค้นหาด้วยชื่ออื่น</div>
        </div>
      ` : null}
    </div>
  `;
}
