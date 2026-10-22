// ===================================================================
// Deadlock Meta Thailand — Asset Resolver Utility
// Provides high-res CDN images for Heroes, Items, Skills, Ranks & HUD
// Zero Emojis Policy
// ===================================================================

export const SOUL_ICON_URL = 'https://tracklock.gg/panorama/images/hud/icons/icon_soul.svg';

// Hero Portrait Mappings
const HERO_PORTRAIT_OVERRIDES = {
  'Grey Talon': 'Grey_Talon',
  'Lady Geist': 'Lady_Geist',
  'Mo & Krill': 'Mo_%26_Krill',
  'Deadman Danny': 'Danny',
  'Nurse Harrow': 'Harrow',
  'The Doorman': 'Doorman'
};

export function getHeroPortraitUrl(hero) {
  if (!hero) return '';
  const heroName = typeof hero === 'string' ? hero : hero.name;
  const mapped = HERO_PORTRAIT_OVERRIDES[heroName] || heroName.replace(/ /g, '_');
  return `https://cdn.deadlock.wiki/${mapped}.png`;
}

// Hero Background Artwork from Tracklock
export function getHeroBgUrl(hero) {
  if (!hero) return '';
  const id = typeof hero === 'object' ? hero.id : hero.toLowerCase().replace(/[^a-z0-9]/g, '_');
  const bgMap = {
    'grey_talon': 'archer',
    'greytalon': 'archer',
    'lady_geist': 'ladygeist',
    'mo_and_krill': 'digger'
  };
  const key = bgMap[id] || id;
  return `https://tracklock.gg/heros/${key}_bg.png`;
}

// Item Icon Mappings
const ITEM_OVERRIDES = {
  'Basic Magazine': 'Extended_Magazine',
  'Hollow Point Ward': 'Hollow_Point',
  'Curse': 'Cursed_Relic',
  'Quicksilver Reload': 'Quicksilver_Reload',
  'Soul Shredder Bullets': 'Soul_Shredder_Bullets',
  'Active Reload': 'Active_Reload',
  'Tesla Bullets': 'Tesla_Bullets',
  'Toxic Bullets': 'Toxic_Bullets',
  'Pristine Emblem': 'Pristine_Emblem',
  'Burst Fire': 'Burst_Fire',
  'Ricochet': 'Ricochet',
  'Crippling Headshot': 'Crippling_Headshot',
  'Lucky Shot': 'Lucky_Shot',
  'Silencer': 'Silencer',
  'Extra Health': 'Extra_Health',
  'Healing Rite': 'Healing_Rite',
  'Sprint Boots': 'Sprint_Boots',
  'Melee Lifesteal': 'Melee_Lifesteal',
  'Combat Barrier': 'Combat_Barrier',
  'Bullet Armor': 'Bullet_Armor',
  'Spirit Armor': 'Spirit_Armor',
  'Enduring Speed': 'Enduring_Speed',
  'Torment Pulse': 'Torment_Pulse',
  'Healbane': 'Healbane',
  'Lifesteal Booster': 'Lifesteal_Booster',
  'Reactive Barrier': 'Reactive_Barrier',
  'Colossus': 'Colossus',
  'Unstoppable': 'Unstoppable',
  'Leech': 'Leech',
  'Metal Skin': 'Metal_Skin',
  'Mystic Burst': 'Mystic_Burst',
  'Extra Spirit': 'Extra_Spirit',
  'Infuser': 'Infuser',
  'Mystic Reach': 'Mystic_Reach',
  'Decay': 'Decay',
  'Superior Cooldown': 'Superior_Cooldown',
  'Duration Extender': 'Duration_Extender',
  'Quicksilver Spirit': 'Quicksilver_Spirit',
  'Surge of Power': 'Surge_of_Power',
  'Knockdown': 'Knockdown',
  'Silence Glyph': 'Silence_Glyph',
  'Ethereal Shift': 'Ethereal_Shift',
  'Boundless Spirit': 'Boundless_Spirit',
  'Echo Shard': 'Echo_Shard',
  'Refresher': 'Refresher'
};

export function getItemIconUrl(itemName) {
  if (!itemName) return '';
  const mapped = ITEM_OVERRIDES[itemName] || itemName.replace(/ /g, '_');
  return `https://cdn.deadlock.wiki/${mapped}.png`;
}

// Ability / Skill Icon Mappings
const ABILITY_OVERRIDES = {
  'Immobilizing Trap': 'Immobilizing_Trap',
  'Rain of Fire': 'Rain_of_Fire',
  'Catalyst': 'Catalyst'
};

export function getAbilityIconUrl(abilityName) {
  if (!abilityName) return '';
  const mapped = ABILITY_OVERRIDES[abilityName] || abilityName.replace(/ /g, '_');
  return `https://cdn.deadlock.wiki/${mapped}.png`;
}

// Rank Badge Icon
export function getRankBadgeUrl(tierName) {
  if (!tierName) return '';
  const clean = tierName.toLowerCase().trim();
  return `https://tracklock.gg/ranks/${clean}.png`;
}

// Fallback handlers for img onError
export function handleHeroImgError(e, heroName) {
  e.target.onerror = null;
  // If portrait fails, try to show stylish placeholder
  e.target.style.display = 'none';
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.style.display = 'flex';
  }
}

export function handleItemImgError(e, category) {
  e.target.onerror = null;
  // Fallback to stylized SVG placeholder based on category
  const color = category === 'weapon' ? '#f59e0b' : category === 'vitality' ? '#10b981' : '#a855f7';
  e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="${encodeURIComponent(color)}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/></svg>`;
}

export function handleAbilityImgError(e, num) {
  e.target.onerror = null;
  e.target.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="%231a2234" stroke="%23e5a93b" stroke-width="2"><circle cx="12" cy="12" r="10"/><text x="12" y="16" font-size="12" font-family="sans-serif" font-weight="bold" fill="%23e5a93b" text-anchor="middle">${num || '!'}</text></svg>`;
}
