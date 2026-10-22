// ===================================================================
// Deadlock Meta Thailand — Navbar Component
// Zero Emojis Policy
// ===================================================================

import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export function Navbar({ activeTab, setActiveTab, searchTerm, setSearchTerm }) {
  const tabs = [
    { id: 'overview', label: 'ภาพรวมเมต้า' },
    { id: 'tierlist', label: 'Hero Tier List (39)' },
    { id: 'builds', label: 'Pro Builds (CN/EN)' },
    { id: 'items', label: 'คลังไอเทม' },
    { id: 'ranks', label: 'สถิติระดับแรงค์' },
    { id: 'patch', label: 'วิเคราะห์แพตช์ล่าสุด' }
  ];

  return html`
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" onClick=${() => setActiveTab('overview')}>
          <div className="brand-icon">
            <img src="https://tracklock.gg/panorama/images/hud/icons/icon_soul.svg" alt="Deadlock" style=${{ width: '22px', height: '22px' }} />
          </div>
          <div className="brand-text">
            <div className="brand-title">DEADLOCK <span>META TH</span></div>
            <div className="brand-subtitle">VALVE HERO SHOOTER ANALYTICS</div>
          </div>
        </a>

        <div className="nav-tabs">
          ${tabs.map(tab => html`
            <button
              key=${tab.id}
              className=${`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick=${() => setActiveTab(tab.id)}
            >
              ${tab.label}
            </button>
          `)}
        </div>

        <div className="nav-right">
          <div className="search-box">
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="ค้นหาฮีโร่ หรือไอเทม..."
              value=${searchTerm}
              onInput=${(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="patch-badge">Patch 2026-10-14</div>
        </div>
      </div>
    </header>
  `;
}
