// ===================================================================
// Deadlock Meta Thailand — Rank Distribution Component
// Visualizing 11 Ranks, Percentages, Meta Advice with Official Emblems
// Zero Emojis Policy
// ===================================================================

import React from 'react';
import htm from 'htm';
import { getRankBadgeUrl, SOUL_ICON_URL } from '../utils/assets.js';

const html = htm.bind(React.createElement);

export function RankDistribution({ ranks }) {
  // Find maximum percentage for bar scaling
  const maxPct = Math.max(...ranks.map(r => r.playerPercentage));

  return html`
    <div className="rank-distribution-page">
      <div className="section-header" style=${{ marginBottom: '14px' }}>
        <div>
          <h1 className="section-title">สถิติการกระจายตัวของระดับแรงค์ (Rank Distribution)</h1>
          <p style=${{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            สัดส่วนผู้เล่น Deadlock ในระบบ Beta Season 1 พร้อมตราสัญลักษณ์ทางการ (Official Rank Badges) คำนวณจากฐานข้อมูลผู้เล่นกว่า 6.6 ล้านคน
          </p>
        </div>
      </div>

      <!-- Rank Distribution Chart Rows -->
      <div className="ranks-container">
        ${ranks.map(rank => {
          const barWidth = `${(rank.playerPercentage / maxPct) * 100}%`;
          return html`
            <div key=${rank.tierName} className="rank-row">
              <!-- Official Rank Emblem Badge -->
              <div className="rank-badge-wrap">
                <img
                  className="rank-badge-img"
                  src=${getRankBadgeUrl(rank.tierName)}
                  alt=${rank.tierName}
                  loading="lazy"
                />
              </div>

              <!-- Rank Title & Percentile -->
              <div>
                <div className="rank-title" style=${{ color: rank.color }}>${rank.tierName}</div>
                <div style=${{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>${rank.cumulativePercentile}</div>
              </div>

              <!-- Bar Fill & Strategy Description -->
              <div>
                <div className="rank-bar-bg">
                  <div
                    className="rank-bar-fill"
                    style=${{
                      width: barWidth,
                      background: `linear-gradient(90deg, rgba(180, 83, 9, 0.4) 0%, ${rank.color} 100%)`
                    }}
                  ></div>
                </div>
                <div style=${{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '4px', color: 'var(--text-dim)' }}>
                  <span>${rank.thaiName}</span>
                  <span style=${{ fontStyle: 'italic' }}>${rank.metaStrategy}</span>
                </div>
              </div>

              <!-- Percentage Number -->
              <div className="rank-pct">
                ${rank.playerPercentage}%
              </div>
            </div>
          `;
        })}
      </div>

      <!-- Rank Tier Tactical Insights -->
      <div className="section-header" style=${{ marginTop: '36px', marginBottom: '16px' }}>
        <h2 className="section-title">วิเคราะห์ความแตกต่างของเมต้าในแต่ละช่วงแรงค์</h2>
      </div>

      <div className="rank-insights-grid">
        <div className="insight-card">
          <div className="insight-title" style=${{ color: '#10b981' }}>ช่วงแรงค์เริ่มต้น (Initiate - Alchemist)</div>
          <div className="insight-desc">
            กลุ่มผู้เล่นเกือบ 50% ของระบบ จุดตัดสินการแพ้ชนะอยู่ที่ 
            <strong>
              <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" style=${{ marginLeft: '4px' }} />
              การยิงเก็บดวงวิญญาณ (Soul Orbs)
            </strong> ในช่วงยืนเลน 10 นาทีแรก 
            ผู้เล่นที่ฝึกยิงลาสช็อตและดีไนล์ได้แม่นยำจะมีเงินออกไอเทม Tier 2 นำหน้าศัตรู 2-3 ชิ้น และสามารถสโนว์บอลชนะเกมได้อย่างง่ายดาย
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-title" style=${{ color: '#3b82f6' }}>ช่วงแรงค์ระดับกลาง (Arcanist - Emissary)</div>
          <div className="insight-desc">
            การดวลตัวต่อตัวเริ่มไม่ใช่ปัจจัยเดียว กุญแจสำคัญคือ <strong>การอ่านจังหวะเดินเกม (Map Rotation)</strong> 
            และการเก็บ Soul Urn ไปส่งข้ามฝั่ง การมีไอเทมแก้ทางอย่าง <em>Debuff Remover</em> และ <em>Healbane</em> 
            ช่วยหยุดยั้งฮีโร่สายดูดเลือดอย่าง Abrams หรือ Infernus ได้อย่างมีประสิทธิภาพ
          </div>
        </div>

        <div className="insight-card">
          <div className="insight-title" style=${{ color: '#e5a93b' }}>ช่วงแรงค์ระดับสูง (Archon - Eternus)</div>
          <div className="insight-desc">
            ท็อป 13% ของผู้เล่น การประสานงานและการควบคุมวัตถุประสงค์ (Objective Control) กลายเป็นหัวใจสำคัญ
            การชิง <strong>Mid Boss (Rejuvenator)</strong> ในช่วงกลาง-ท้ายเกมตัดสินการดันบ้านแตกเกือบ 80% ของแมตช์
            และไอเทมระดับ 6,200 Souls อย่าง <em>Unstoppable</em> และ <em>Curse</em> ถือเป็นไอเทมบังคับในการเปิดและปิดทีมไฟต์
          </div>
        </div>
      </div>
    </div>
  `;
}
