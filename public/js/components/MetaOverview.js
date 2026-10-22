// ===================================================================
// Deadlock Meta Thailand — Meta Overview Component
// Zero Emojis Policy
// ===================================================================

import React from 'react';
import htm from 'htm';
import { getHeroPortraitUrl, handleHeroImgError, SOUL_ICON_URL } from '../utils/assets.js';

const html = htm.bind(React.createElement);

export function MetaOverview({ heroes, onSelectHero, setActiveTab }) {
  // Compute Top Win Rates
  const topWinRate = [...heroes].sort((a, b) => b.winRate - a.winRate).slice(0, 4);
  // Compute Top Pick Rates
  const topPickRate = [...heroes].sort((a, b) => b.pickRate - a.pickRate).slice(0, 4);
  // Biggest Movers
  const biggestMovers = [...heroes].sort((a, b) => b.winRateDelta - a.winRateDelta).slice(0, 4);

  return html`
    <div className="meta-overview">
      <!-- Main Hero Banner -->
      <section className="hero-banner">
        <div className="banner-tag">OFFICIAL META ANALYSIS - THAILAND</div>
        <h1 className="banner-title">สถิติและเมต้าฮีโร่เกม DEADLOCK ฉบับภาษาไทย</h1>
        <p className="banner-desc">
          รวบรวมและวิเคราะห์สถิติจากห้องแข่งระดับสูงกว่า 32.2 ล้านแมตช์ ประจำแพตช์ล่าสุด 2026-10-14 
          เจาะลึกฮีโร่ครบทั้ง 39 ตัว คลังไอเทม 3 สาย และแนวทางการไต่แรงค์อย่างมีประสิทธิภาพ
        </p>

        <div className="banner-stats">
          <div className="stat-item">
            <div className="stat-value gold">
              <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" style=${{ width: '20px', height: '20px' }} />
              32.2M+
            </div>
            <div className="stat-label">แมตช์ที่นำมาวิเคราะห์</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">6.6M+</div>
            <div className="stat-label">ผู้เล่นในฐานข้อมูล</div>
          </div>
          <div className="stat-item">
            <div className="stat-value gold">39 ตัว</div>
            <div className="stat-label">ฮีโร่ทั้งหมดในระบบ</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">2026-10-14</div>
            <div className="stat-label">แพตช์ปัจจุบัน</div>
          </div>
        </div>
      </section>

      <!-- Section: Top Win Rate Heroes -->
      <section className="overview-section" style=${{ marginBottom: '36px' }}>
        <div className="section-header">
          <h2 className="section-title">ฮีโร่อัตราการชนะสูงสุด (Top Win Rate)</h2>
          <button className="filter-btn active" onClick=${() => setActiveTab('tierlist')}>
            ดู Tier List ทั้งหมด (39 ตัว) →
          </button>
        </div>

        <div className="heroes-grid">
          ${topWinRate.map(hero => html`
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

              <div className="hero-desc-short">${hero.descriptionThai}</div>
            </div>
          `)}
        </div>
      </section>

      <!-- Section: Most Picked & Meta Movers Grid -->
      <div style=${{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '24px', marginBottom: '36px' }}>
        <!-- Most Picked -->
        <div className="insight-card">
          <div className="section-header" style=${{ marginBottom: '14px' }}>
            <h3 className="section-title" style=${{ fontSize: '1.2rem' }}>ฮีโร่ยอดนิยมสูงสุด (Top Pick Rate)</h3>
          </div>
          <div style=${{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            ${topPickRate.map((hero, idx) => html`
              <div
                key=${hero.id}
                onClick=${() => onSelectHero(hero)}
                style=${{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'rgba(10, 15, 24, 0.6)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <div style=${{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style=${{ fontFamily: 'var(--font-display)', fontWeight: '800', color: 'var(--soul-amber)', width: '20px' }}>#${idx + 1}</span>
                  <img
                    className="counter-hero-img"
                    src=${getHeroPortraitUrl(hero)}
                    alt=${hero.name}
                    loading="lazy"
                    onError=${(e) => handleHeroImgError(e, hero.name)}
                    style=${{ width: '32px', height: '32px' }}
                  />
                  <div>
                    <div style=${{ fontWeight: '700', color: '#fff' }}>${hero.name} <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>(${hero.thaiName})</span></div>
                    <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Win Rate: ${hero.winRate}%</div>
                  </div>
                </div>
                <div style=${{ textAlign: 'right' }}>
                  <div style=${{ fontFamily: 'var(--font-display)', fontWeight: '700', color: '#fff', fontSize: '1.1rem' }}>${hero.pickRate}%</div>
                  <div style=${{ fontSize: '0.72rem', color: hero.pickRateDelta >= 0 ? 'var(--vitality-green)' : 'var(--tier-s-plus)' }}>
                    ${hero.pickRateDelta >= 0 ? `+${hero.pickRateDelta}%` : `${hero.pickRateDelta}%`}
                  </div>
                </div>
              </div>
            `)}
          </div>
        </div>

        <!-- Biggest Gainers -->
        <div className="insight-card">
          <div className="section-header" style=${{ marginBottom: '14px' }}>
            <h3 className="section-title" style=${{ fontSize: '1.2rem' }}>ฮีโร่ที่วินเรทพุ่งแรงสุด (Biggest Gainers)</h3>
          </div>
          <div style=${{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            ${biggestMovers.map(hero => html`
              <div
                key=${hero.id}
                onClick=${() => onSelectHero(hero)}
                style=${{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  background: 'rgba(10, 15, 24, 0.6)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <div style=${{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className=${`tier-badge tier-${hero.tier.toLowerCase().replace('+', '-plus')}`}>${hero.tier}</div>
                  <img
                    className="counter-hero-img"
                    src=${getHeroPortraitUrl(hero)}
                    alt=${hero.name}
                    loading="lazy"
                    onError=${(e) => handleHeroImgError(e, hero.name)}
                    style=${{ width: '32px', height: '32px' }}
                  />
                  <div>
                    <div style=${{ fontWeight: '700', color: '#fff' }}>${hero.name} <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>(${hero.thaiName})</span></div>
                    <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>${hero.role}</div>
                  </div>
                </div>
                <div style=${{ textAlign: 'right' }}>
                  <div style=${{ fontFamily: 'var(--font-display)', fontWeight: '700', color: 'var(--vitality-green)', fontSize: '1.05rem' }}>
                    +${hero.winRateDelta}%
                  </div>
                  <div style=${{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>ปัจจุบัน: ${hero.winRate}%</div>
                </div>
              </div>
            `)}
          </div>
        </div>
      </div>

      <!-- Quick Tips & Tactical Overview -->
      <section className="insight-card" style=${{ marginBottom: '30px' }}>
        <h3 className="insight-title">สรุปแนวโน้มเมต้าเกมประจำสัปดาห์</h3>
        <p className="insight-desc" style=${{ marginBottom: '16px' }}>
          ในแพตช์ปัจจุบัน ฮีโร่สาย Brawler และมือปืนประชิดอย่าง <strong>Graves</strong> และ <strong>Victor</strong> มีอิทธิพลต่อผลแพ้ชนะสูงมาก
          ขณะที่ <strong>Deadman Danny</strong> ขึ้นแท่นเป็นฮีโร่ที่มีการเลือกเล่นสูงสุดในเกมหลังจากได้รับการบัฟความเร็วรัวกระสุนและสถานะอมตะ
          แนะนำให้ผู้เล่นเตรียมไอเทมตัดฮีลเช่น <em>Toxic Bullets</em> หรือ <em>Healbane</em> และไอเทมต้านสถานะ <em>Unstoppable</em> เพื่อรับมือในทุกแมตช์
        </p>
        <div style=${{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button className="filter-btn" onClick=${() => setActiveTab('items')}>เปิดดูสารานุกรมไอเทม →</button>
          <button className="filter-btn" onClick=${() => setActiveTab('ranks')}>ดูการกระจายตัวของระดับแรงค์ →</button>
          <button className="filter-btn" onClick=${() => setActiveTab('patch')}>อ่านบทวิเคราะห์แพตช์ฉบับเต็ม →</button>
        </div>
      </section>
    </div>
  `;
}
