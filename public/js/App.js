// ===================================================================
// Deadlock Meta Thailand — Main React Application
// Integrates Pro Builds Hub (CN/EN), Item Detail Modal, Skill Detail Modal
// Zero Emojis Policy
// ===================================================================

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import htm from 'htm';

import { heroesData } from './data/heroesData.js';
import { itemsData } from './data/itemsData.js';
import { ranksData } from './data/ranksData.js';
import { patchData } from './data/patchData.js';
import { buildsData } from './data/buildsData.js';

import { Navbar } from './components/Navbar.js';
import { MetaOverview } from './components/MetaOverview.js';
import { HeroTierList } from './components/HeroTierList.js';
import { DeadlockBuilds } from './components/DeadlockBuilds.js';
import { HeroDetailModal } from './components/HeroDetailModal.js';
import { ItemDetailModal } from './components/ItemDetailModal.js';
import { SkillDetailModal } from './components/SkillDetailModal.js';
import { ItemsDatabase } from './components/ItemsDatabase.js';
import { RankDistribution } from './components/RankDistribution.js';
import { PatchNotes } from './components/PatchNotes.js';
import { Footer } from './components/Footer.js';

const html = htm.bind(React.createElement);

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedHero, setSelectedHero] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Hero Selection Handler
  const handleSelectHero = (heroOrName) => {
    if (!heroOrName) return;
    if (typeof heroOrName === 'object') {
      setSelectedHero(heroOrName);
      return;
    }
    const clean = heroOrName.trim().toLowerCase();
    const found = heroesData.find(h => h.name.toLowerCase() === clean || h.id.toLowerCase() === clean);
    if (found) setSelectedHero(found);
  };

  // Item Selection Handler (works with object or item name string)
  const handleSelectItem = (itemOrName) => {
    if (!itemOrName) return;
    if (typeof itemOrName === 'object') {
      setSelectedItem(itemOrName);
      return;
    }
    const clean = itemOrName.trim().toLowerCase();
    const found = itemsData.find(i => i.name.toLowerCase() === clean);
    if (found) {
      setSelectedItem(found);
    } else {
      setSelectedItem({
        id: clean.replace(/ /g, '_'),
        name: itemOrName,
        category: 'spirit',
        tier: 3,
        cost: 3000,
        stats: '+สเตตัสความสามารถตามสาย',
        passive: 'ไอเทมปรับแต่งพิเศษตามเมต้าปัจจุบัน',
        active: null,
        winRate: 53.8,
        recommendedHeroes: ['Abrams', 'Seven', 'Haze']
      });
    }
  };

  // Skill Selection Handler
  const handleSelectSkill = (ability, hero) => {
    if (!ability) return;
    setSelectedSkill({ ability, hero });
  };

  return html`
    <div className="app-layout">
      <!-- Navbar Component -->
      <${Navbar}
        activeTab=${activeTab}
        setActiveTab=${setActiveTab}
        searchTerm=${searchTerm}
        setSearchTerm=${setSearchTerm}
      />

      <!-- Main Content Container -->
      <main className="container" style=${{ paddingTop: '24px', minHeight: 'calc(100vh - 180px)' }}>
        ${activeTab === 'overview' && html`
          <${MetaOverview}
            heroes=${heroesData}
            onSelectHero=${handleSelectHero}
            setActiveTab=${setActiveTab}
          />
        `}

        ${activeTab === 'tierlist' && html`
          <${HeroTierList}
            heroes=${heroesData}
            onSelectHero=${handleSelectHero}
            searchTerm=${searchTerm}
          />
        `}

        ${activeTab === 'builds' && html`
          <${DeadlockBuilds}
            builds=${buildsData}
            onSelectHero=${handleSelectHero}
            onSelectItem=${handleSelectItem}
            onSelectSkill=${handleSelectSkill}
          />
        `}

        ${activeTab === 'items' && html`
          <${ItemsDatabase}
            items=${itemsData}
            searchTerm=${searchTerm}
            onSelectItem=${handleSelectItem}
          />
        `}

        ${activeTab === 'ranks' && html`
          <${RankDistribution}
            ranks=${ranksData}
          />
        `}

        ${activeTab === 'patch' && html`
          <${PatchNotes}
            patchData=${patchData}
          />
        `}
      </main>

      <!-- MODALS -->

      <!-- 1. Hero Detail Modal -->
      ${selectedHero && html`
        <${HeroDetailModal}
          hero=${selectedHero}
          onClose=${() => setSelectedHero(null)}
          onSelectItem=${handleSelectItem}
          onSelectSkill=${handleSelectSkill}
        />
      `}

      <!-- 2. Item Detail Modal -->
      ${selectedItem && html`
        <${ItemDetailModal}
          item=${selectedItem}
          onClose=${() => setSelectedItem(null)}
          onSelectHero=${handleSelectHero}
        />
      `}

      <!-- 3. Skill Detail Modal -->
      ${selectedSkill && html`
        <${SkillDetailModal}
          ability=${selectedSkill.ability}
          hero=${selectedSkill.hero}
          onClose=${() => setSelectedSkill(null)}
        />
      `}

      <!-- Footer Component -->
      <${Footer} />
    </div>
  `;
}

// Bootstrap Application
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(html`<${App} />`);
}
