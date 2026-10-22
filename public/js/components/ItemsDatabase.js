// ===================================================================
// Deadlock Meta Thailand — Items Database Component (Redesigned)
// Clear Tier Groupings (Tier 1 to 4), Category Separation, High Contrast
// Zero Emojis Policy
// ===================================================================

import React, { useState, useMemo } from 'react';
import htm from 'htm';
import { getItemIconUrl, handleItemImgError, SOUL_ICON_URL } from '../utils/assets.js';

const html = htm.bind(React.createElement);

export function ItemsDatabase({ items, searchTerm, onSelectItem }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedTier, setSelectedTier] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'ทุกสาย (All)' },
    { id: 'weapon', label: 'Weapon (อาวุธปืน)' },
    { id: 'vitality', label: 'Vitality (พลังชีวิต)' },
    { id: 'spirit', label: 'Spirit (วิญญาณ/เวท)' }
  ];

  const tiers = [
    { id: 'ALL', label: 'ทุก Tier' },
    { id: 1, label: 'Tier 1 (500)' },
    { id: 2, label: 'Tier 2 (1,250)' },
    { id: 3, label: 'Tier 3 (3,000)' },
    { id: 4, label: 'Tier 4 (6,200+)' }
  ];

  const tierMetadata = {
    1: { name: 'Tier 1 — Early Lane Phase', cost: '500 Souls', desc: 'ไอเทมพื้นฐานสำหรับช่วงยืนเลน เพิ่มความอึด ดาเมจปืน และรีเจน' },
    2: { name: 'Tier 2 — Mid Game Core', cost: '1,250 Souls', desc: 'ไอเทมแกนหลักสำหรับเริ่มโรมมิ่ง แก๊งค์ และควบคุมเลน' },
    3: { name: 'Tier 3 — High Impact Upgrades', cost: '3,000 Souls', desc: 'ไอเทมเสริมพลังอย่างมีนัยสำคัญ บัฟสกิลและเกราะป้องกันทีมไฟต์' },
    4: { name: 'Tier 4 — Game Deciding Luxury', cost: '6,200+ Souls', desc: 'ไอเทมชี้ชะตาท้ายเกม พลิกไฟต์และตัดสินแพ้ชนะ' }
  };

  const filteredItems = useMemo(() => {
    let result = [...items];

    if (searchTerm && searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(item =>
        item.name.toLowerCase().includes(q) ||
        (item.passive && item.passive.toLowerCase().includes(q)) ||
        (item.active && item.active.toLowerCase().includes(q)) ||
        (item.stats && item.stats.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== 'ALL') {
      result = result.filter(item => item.category === selectedCategory);
    }

    if (selectedTier !== 'ALL') {
      result = result.filter(item => item.tier === Number(selectedTier));
    }

    return result;
  }, [items, searchTerm, selectedCategory, selectedTier]);

  return html`
    <div className="items-database">
      <div className="section-header" style=${{ marginBottom: '16px' }}>
        <div>
          <h1 className="section-title">สารานุกรมไอเทม (Items Database)</h1>
          <p style=${{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '4px' }}>
            คลังข้อมูลไอเทมครบ 3 สายหลัก แบ่งแยกตามระดับ Tier 1 ถึง 4 อย่างชัดเจน พร้อมไอคอนแท้และราคา Souls
          </p>
        </div>
      </div>

      <!-- Filters Bar -->
      <div className="filter-bar" style=${{ marginBottom: '24px' }}>
        <!-- Category Filters -->
        <div className="filter-group">
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>สายไอเทม:</span>
          ${categories.map(c => html`
            <button
              key=${c.id}
              className=${`filter-btn ${selectedCategory === c.id ? 'active' : ''}`}
              onClick=${() => setSelectedCategory(c.id)}
            >
              ${c.label}
            </button>
          `)}
        </div>

        <!-- Tier Filters -->
        <div className="filter-group">
          <span style=${{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', marginRight: '4px' }}>ระดับ TIER:</span>
          ${tiers.map(t => html`
            <button
              key=${t.id}
              className=${`filter-btn ${selectedTier === t.id ? 'active' : ''}`}
              onClick=${() => setSelectedTier(t.id)}
            >
              ${t.label}
            </button>
          `)}
        </div>

        <div style=${{ marginLeft: 'auto', fontSize: '0.82rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
          แสดง: <strong style=${{ color: 'var(--soul-amber)' }}>${filteredItems.length} ชิ้น</strong>
        </div>
      </div>

      <!-- Tier Grouped View (When Tier Filter is ALL) -->
      ${selectedTier === 'ALL' && (!searchTerm || searchTerm === '') ? (
        [1, 2, 3, 4].map(tierNum => {
          const tierItems = filteredItems.filter(item => item.tier === tierNum);
          if (tierItems.length === 0) return null;
          const meta = tierMetadata[tierNum];

          return html`
            <div key=${tierNum} style=${{ marginBottom: '36px' }}>
              <!-- Clear Tier Divider Header -->
              <div className="item-tier-divider">
                <div>
                  <div className="item-tier-title">
                    <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" style=${{ width: '18px', height: '18px' }} />
                    ${meta.name}
                    <span style=${{ fontSize: '0.78rem', color: 'var(--soul-amber)', background: 'rgba(229, 169, 59, 0.15)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(229, 169, 59, 0.3)' }}>
                      ${meta.cost}
                    </span>
                  </div>
                  <div style=${{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    ${meta.desc}
                  </div>
                </div>
                <div style=${{ fontSize: '0.82rem', color: 'var(--text-dim)', fontWeight: '600' }}>
                  จำนวน: <strong style=${{ color: '#fff' }}>${tierItems.length} ชิ้น</strong>
                </div>
              </div>

              <!-- Grid for this tier -->
              <div className="items-grid">
                ${tierItems.map(item => html`
                  <div
                    key=${item.id}
                    className=${`item-card ${item.category}`}
                    style=${{ cursor: 'pointer', transition: 'all 0.18s ease' }}
                    onClick=${() => onSelectItem && onSelectItem(item)}
                    title="คลิกเพื่อดูรายละเอียดสเตตัส สายผสม และ Passive/Active"
                  >
                    <div className="item-card-inner">
                      <div className="item-icon-box">
                        <img
                          className="item-icon-img"
                          src=${getItemIconUrl(item.name)}
                          alt=${item.name}
                          loading="lazy"
                          onError=${(e) => handleItemImgError(e, item.category)}
                        />
                      </div>
                      <div style=${{ flex: 1, minWidth: 0 }}>
                        <div className="item-name">${item.name}</div>
                        <div className="item-tier-tag">
                          Tier ${item.tier} • ${item.category.toUpperCase()}
                        </div>
                      </div>
                      <div className="item-cost-badge">
                        <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" />
                        ${item.cost.toLocaleString()}
                      </div>
                    </div>

                    <div className="item-stats">${item.stats}</div>

                    ${item.passive ? html`
                      <div style=${{ marginBottom: '10px', fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: '1.45' }}>
                        <span style=${{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', background: 'rgba(255, 255, 255, 0.06)', padding: '1px 5px', borderRadius: '3px', marginRight: '4px' }}>Passive</span>
                        ${item.passive}
                      </div>
                    ` : null}

                    ${item.active ? html`
                      <div style=${{ marginBottom: '10px', fontSize: '0.84rem', color: 'var(--soul-light)', background: 'rgba(229, 169, 59, 0.12)', padding: '8px 10px', borderRadius: '6px', borderLeft: '3px solid var(--soul-amber)', lineHeight: '1.45' }}>
                        <span style=${{ fontSize: '0.72rem', color: 'var(--soul-amber)', fontWeight: '800', textTransform: 'uppercase', marginRight: '4px' }}>Active:</span>
                        ${item.active}
                      </div>
                    ` : null}

                    <div style=${{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                      <span>Win Rate เฉลี่ยเมื่อมีไอเทมนี้</span>
                      <span style=${{ fontFamily: 'var(--font-display)', fontWeight: '700', color: item.winRate >= 55 ? 'var(--vitality-green)' : '#fff' }}>
                        ${item.winRate}%
                      </span>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          `;
        })
      ) : (
        html`
          <div className="items-grid">
            ${filteredItems.map(item => html`
              <div
                key=${item.id}
                className=${`item-card ${item.category}`}
                style=${{ cursor: 'pointer', transition: 'all 0.18s ease' }}
                onClick=${() => onSelectItem && onSelectItem(item)}
                title="คลิกเพื่อดูรายละเอียดสเตตัส สายผสม และ Passive/Active"
              >
                <div className="item-card-inner">
                  <div className="item-icon-box">
                    <img
                      className="item-icon-img"
                      src=${getItemIconUrl(item.name)}
                      alt=${item.name}
                      loading="lazy"
                      onError=${(e) => handleItemImgError(e, item.category)}
                    />
                  </div>
                  <div style=${{ flex: 1, minWidth: 0 }}>
                    <div className="item-name">${item.name}</div>
                    <div className="item-tier-tag">
                      Tier ${item.tier} • ${item.category.toUpperCase()}
                    </div>
                  </div>
                  <div className="item-cost-badge">
                    <img className="soul-icon" src=${SOUL_ICON_URL} alt="Souls" />
                    ${item.cost.toLocaleString()}
                  </div>
                </div>

                <div className="item-stats">${item.stats}</div>

                ${item.passive ? html`
                  <div style=${{ marginBottom: '10px', fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: '1.45' }}>
                    <span style=${{ fontSize: '0.72rem', color: 'var(--text-dim)', fontWeight: '700', textTransform: 'uppercase', background: 'rgba(255, 255, 255, 0.06)', padding: '1px 5px', borderRadius: '3px', marginRight: '4px' }}>Passive</span>
                    ${item.passive}
                  </div>
                ` : null}

                ${item.active ? html`
                  <div style=${{ marginBottom: '10px', fontSize: '0.84rem', color: 'var(--soul-light)', background: 'rgba(229, 169, 59, 0.12)', padding: '8px 10px', borderRadius: '6px', borderLeft: '3px solid var(--soul-amber)', lineHeight: '1.45' }}>
                    <span style=${{ fontSize: '0.72rem', color: 'var(--soul-amber)', fontWeight: '800', textTransform: 'uppercase', marginRight: '4px' }}>Active:</span>
                    ${item.active}
                  </div>
                ` : null}

                <div style=${{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  <span>Win Rate เฉลี่ยเมื่อมีไอเทมนี้</span>
                  <span style=${{ fontFamily: 'var(--font-display)', fontWeight: '700', color: item.winRate >= 55 ? 'var(--vitality-green)' : '#fff' }}>
                    ${item.winRate}%
                  </span>
                </div>
              </div>
            `)}
          </div>
        `
      )}

      <!-- Empty State -->
      ${filteredItems.length === 0 ? html`
        <div style=${{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
          <div style=${{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '8px' }}>ไม่พบไอเทมที่ค้นหา</div>
          <div style=${{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>ลองตรวจสอบคำสะกดหรือรีเซ็ตตัวกรองหมวดหมู่</div>
        </div>
      ` : null}
    </div>
  `;
}
