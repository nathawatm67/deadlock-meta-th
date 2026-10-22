// ===================================================================
// Deadlock Meta Thailand — Footer Component
// Zero Emojis Policy
// ===================================================================

import React from 'react';
import htm from 'htm';

const html = htm.bind(React.createElement);

export function Footer() {
  return html`
    <footer className="footer">
      <div className="container footer-inner">
        <div style=${{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>
          DEADLOCK META THAILAND
        </div>
        <div>
          ระบบวิเคราะห์สถิติและข้อมูลเมต้าเกม Deadlock ภาษาไทย • อ้างอิงสถิติจาก Tracklock & Valve Telemetry API
        </div>
        <div style=${{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '4px' }}>
          Deadlock เป็นเครื่องหมายการค้าจดทะเบียนของ Valve Corporation • พัฒนาเพื่อชุมชนผู้เล่นชาวไทย
        </div>
      </div>
    </footer>
  `;
}
