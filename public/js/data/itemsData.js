// ===================================================================
// Deadlock Meta Thailand — Items Dataset
// Categories: Weapon (ส้ม), Vitality (เขียว), Spirit (ม่วง)
// Tiers: 1 (500), 2 (1,250), 3 (3,000), 4 (6,200+)
// Zero Emojis Policy
// ===================================================================

export const itemsData = [
  // --- WEAPON ITEMS (ORANGE) ---
  // Tier 1 (500 Souls)
  {
    id: "basic_magazine",
    name: "Basic Magazine",
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+24% Ammo, +15% Weapon Damage",
    passive: "เพิ่มขนาดแมกกาซีนกระสุนและความเสียหายของอาวุธปืนขั้นพื้นฐาน",
    active: null,
    winRate: 51.4
  },
  {
    id: "hollow_point_ward",
    name: "Hollow Point Ward",
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+4% Spirit Shield, +20% Weapon Damage เมื่อเลือดเกิน 60%",
    passive: "เมื่อมีพลังชีวิตมากกว่า 60% จะได้รับโบนัสความเสียหายปืนเพิ่มขึ้นอย่างมาก",
    active: null,
    winRate: 52.8
  },
  {
    id: "headshot_booster",
    name: "Headshot Booster",
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+40 Bonus Headshot Damage, +40 Fire Rate Shield",
    passive: "การยิงโดนศีรษะจะสร้างความเสียหายโบนัสเพิ่มเติม (คูลดาวน์ 7 วินาที)",
    active: null,
    winRate: 51.9
  },
  {
    id: "monster_rounds",
    name: "Monster Rounds",
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+35% Weapon Damage vs Non-Heroes, +50 Health",
    passive: "เพิ่มความเสียหายกระสุนอย่างรุนแรงต่อครีปในเลนและมอนสเตอร์ในป่า ช่วยให้ฟาร์มเงินไวขึ้นมาก",
    active: null,
    winRate: 50.8
  },

  // Tier 2 (1,250 Souls)
  {
    id: "kinetic_dash",
    name: "Kinetic Dash",
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+100 Health, +1 Dash Stamina",
    passive: "การพุ่ง Dash จะมอบความเร็วในการยิง +25% และกระสุนไม่ลดลงชั่วคราวเป็นเวลา 5 วินาที",
    active: null,
    winRate: 53.2
  },
  {
    id: "quicksilver_reload",
    name: "Quicksilver Reload",
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+15% Weapon Damage, +12% Fire Rate",
    passive: "ผูกมัดกับสกิล 1 สกิล เมื่อกดใช้สกิลนั้นจะรีโหลดกระสุนในปืนเต็มทันที",
    active: null,
    winRate: 53.9
  },
  {
    id: "soul_shredder_bullets",
    name: "Soul Shredder Bullets",
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+6% Weapon Damage, +10% Spirit Amp",
    passive: "กระสุนที่ยิงโดนศัตรูจะลดการต้านทานสปิริตของศัตรูลง 12% และดูดเลือดวิญญาณ",
    active: null,
    winRate: 51.6
  },
  {
    id: "active_reload",
    name: "Active Reload",
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+10% Weapon Damage, -20% Reload Time",
    passive: "เมื่อกดรีโหลดจะมีแถบมินิเกม หากกดตรงจังหวะสีเขียวจะรีโหลดเสร็จทันทีและได้บัฟไฟร์เรต +20%",
    active: null,
    winRate: 52.4
  },

  // Tier 3 (3,000 Souls)
  {
    id: "tesla_bullets",
    name: "Tesla Bullets",
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+14% Fire Rate, +30 Spirit Damage Procs",
    passive: "กระสุนมีโอกาส 25% ปล่อยกระแสไฟฟ้าชิ่งโดนศัตรูรอบข้าง 3 ตัว ทำดาเมจวิญญาณต่อเนื่อง",
    active: null,
    winRate: 54.7
  },
  {
    id: "toxic_bullets",
    name: "Toxic Bullets",
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+100 Health, +15% Weapon Damage",
    passive: "กระสุนติดสารพิษ ลดการฮีลและการรีเจนเลือดของศัตรูลง 65% พร้อมเผาเลือด 3% ต่อวินาที",
    active: null,
    winRate: 54.2
  },
  {
    id: "pristine_emblem",
    name: "Pristine Emblem",
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+25% Weapon Damage, +12 Spirit Resist",
    passive: "สร้างความเสียหายปืนเพิ่มขึ้น +25% ต่อศัตรูที่มีพลังชีวิตมากกว่า 50%",
    active: null,
    winRate: 53.8
  },
  {
    id: "burst_fire",
    name: "Burst Fire",
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+12% Fire Rate, +50% Slide Distance",
    passive: "การยิงโดนศัตรูติดต่อกันจะเพิ่มความเร็วในการยิงขึ้นอีก +30% ชั่วคราว",
    active: null,
    winRate: 52.9
  },

  // Tier 4 (6,200+ Souls)
  {
    id: "ricochet",
    name: "Ricochet",
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+150 Health, +12% Fire Rate, +35% Ammo",
    passive: "กระสุนทุกลูกที่ยิงโดนเป้าหมายจะกระดอนชิ่งไปโดนศัตรูข้างเคียงอีก 2 ตัว ทำดาเมจ 60%",
    active: null,
    winRate: 58.6
  },
  {
    id: "crippling_headshot",
    name: "Crippling Headshot",
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+20% Weapon Damage, +10% Lifesteal",
    passive: "การยิงโดนศีรษะจะลดเกราะกระสุนและเกราะสปิริตของศัตรูลง 24% พร้อมสโลว์ 35%",
    active: null,
    winRate: 57.3
  },
  {
    id: "lucky_shot",
    name: "Lucky Shot",
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+30% Ammo, +100 Bonus Health",
    passive: "มีโอกาส 35% ในการยิงติดคริติคอลโชคดี ทำความเสียหายปืนรุนแรงขึ้น +80% และสโลว์ศัตรู",
    active: null,
    winRate: 57.9
  },
  {
    id: "silencer",
    name: "Silencer",
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+15% Fire Rate, +18% Weapon Damage",
    passive: "การยิงกระสุนโดนศัตรูจะสะสมสถานะใบ้ เมื่อสะสมครบจะปิดการใช้สกิลของศัตรู 2 วินาที",
    active: null,
    winRate: 56.4
  },

  // --- VITALITY ITEMS (GREEN) ---
  // Tier 1 (500 Souls)
  {
    id: "extra_health",
    name: "Extra Health",
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+160 Health, +5% Weapon Damage",
    passive: "เพิ่มพลังชีวิตสูงสุดขั้นพื้นฐานเพื่อความปลอดภัยในการยืนเลน",
    active: null,
    winRate: 50.9
  },
  {
    id: "healing_rite",
    name: "Healing Rite",
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+45 Health, +3 Spirit Power",
    passive: null,
    active: "กดใช้: ฟื้นฟูเลือด 370 HP และมอบความเร็วเดิน +2 ม./วิ ให้ตนเองหรือเพื่อน (คูลดาวน์ 60 วินาที ถูกยกเลิกหากโดนศัตรูยิง)",
    winRate: 52.1
  },
  {
    id: "sprint_boots",
    name: "Sprint Boots",
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+2 m/s Sprint Speed, +1 Health Regen",
    passive: "เพิ่มความเร็วในการวิ่งนอกการต่อสู้ ช่วยในการเดินกลับเลนและเดินเกมข้ามแมป",
    active: null,
    winRate: 51.5
  },
  {
    id: "melee_lifesteal",
    name: "Melee Lifesteal",
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+13% Melee Damage, +20% Melee Lifesteal vs Heroes",
    passive: "การต่อยหมัดระยะประชิดจะดูดพลังชีวิตกลับคืนมาอย่างมหาศาล",
    active: null,
    winRate: 52.4
  },

  // Tier 2 (1,250 Souls)
  {
    id: "combat_barrier",
    name: "Combat Barrier",
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+300 Bullet Shield, +22% Weapon Damage ขณะโล่ยังอยู่",
    passive: "มอบเกราะกระสุนดูดซับดาเมจ และขณะที่เกราะยังไม่แตกจะได้รับโบนัสพลังโจมตีปืน",
    active: null,
    winRate: 53.6
  },
  {
    id: "bullet_armor",
    name: "Bullet Armor",
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+20% Bullet Resistance, +6% Weapon Damage",
    passive: "ลดทอนความเสียหายจากกระสุนปืนของศัตรูลง 20%",
    active: null,
    winRate: 53.1
  },
  {
    id: "spirit_armor",
    name: "Spirit Armor",
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+20% Spirit Resistance, +5 Spirit Power",
    passive: "ลดทอนความเสียหายจากเวทและสกิลวิญญาณลง 20%",
    active: null,
    winRate: 52.8
  },
  {
    id: "enduring_speed",
    name: "Enduring Speed",
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+1.4 m/s Move Speed, +35% Slow Resistance",
    passive: "เพิ่มความเร็วเดินตลอดเวลา และลดระยะเวลาของสถานะสโลว์ลง 35%",
    active: null,
    winRate: 53.4
  },

  // Tier 3 (3,000 Souls)
  {
    id: "torment_pulse",
    name: "Torment Pulse",
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+140 Health, +16 Spirit Power",
    passive: "ปล่อยคลื่นพัลส์เผาไหม้ศัตรูทุกคนรอบตัวในรัศมี ทำดาเมจวิญญาณต่อเนื่องโดยอัตโนมัติ",
    active: null,
    winRate: 55.3
  },
  {
    id: "healbane",
    name: "Healbane",
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+75 Health, +14 Spirit Power",
    passive: "เมื่อทำดาเมจสกิลใส่ศัตรู จะลดการฮีลของเป้าหมายลง 40% และหากเป้าหมายตายจะระเบิดฮีลให้เพื่อนรอบตัว",
    active: null,
    winRate: 54.6
  },
  {
    id: "lifesteal_booster",
    name: "Lifesteal Booster",
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+175 Health, +16% Bullet Lifesteal",
    passive: "เพิ่มเปอร์เซ็นต์การดูดเลือดจากกระสุนปืนอย่างมีนัยสำคัญ",
    active: null,
    winRate: 53.7
  },
  {
    id: "reactive_barrier",
    name: "Reactive Barrier",
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+75 Health, +15% Ammo",
    passive: "เมื่อถูกสตัน สโลว์ หรือจับกุม จะกางบาเรียดูดซับดาเมจ 400 หน่วยทันทีโดยอัตโนมัติ",
    active: null,
    winRate: 54.1
  },

  // Tier 4 (6,200+ Souls)
  {
    id: "colossus",
    name: "Colossus",
    tier: 4,
    category: "vitality",
    cost: 6200,
    stats: "+600 Health, +20% Melee Damage, +2 m/s Sprint",
    passive: null,
    active: "กดใช้: ขยายร่างยักษ์ เพิ่มขนาดตัว เลือด และเกราะ พร้อมปล่อยออร่าสโลว์ศัตรูรอบตัว 35% เป็นเวลา 7 วินาที",
    winRate: 58.2
  },
  {
    id: "unstoppable",
    name: "Unstoppable",
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+150 Health, +12% Spirit Resist, +1 m/s Speed",
    passive: null,
    active: "กดใช้: เข้าสู่สถานะต้านทาน CC สมบูรณ์แบบ ไม่สามารถถูกสตัน ใบ้ สโลว์ หรือกักขังได้เป็นเวลา 6 วินาที",
    winRate: 59.4
  },
  {
    id: "leech",
    name: "Leech",
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+175 Health, +35% Bullet Lifesteal, +35% Spirit Lifesteal",
    passive: "ดูดพลังชีวิตมหาศาลจากทั้งความเสียหายกระสุนและความเสียหายสกิลพร้อมกัน",
    active: null,
    winRate: 57.8
  },
  {
    id: "metal_skin",
    name: "Metal Skin",
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+8% Spirit Resist, +120 Health",
    passive: null,
    active: "กดใช้: ผิวหนังกลายเป็นโลหะ ป้องกันความเสียหายจากกระสุนปืนและการต่อยหมัด 100% เป็นเวลา 3.5 วินาที",
    winRate: 56.9
  },

  // --- SPIRIT ITEMS (PURPLE) ---
  // Tier 1 (500 Souls)
  {
    id: "mystic_burst",
    name: "Mystic Burst",
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+6 Spirit Power, +40 Bonus Spirit Damage",
    passive: "เมื่อสกิลสร้างความเสียหายเดี่ยวเกิน 80 หน่วย จะระเบิดโบนัสดาเมจวิญญาณเพิ่มอีก 40 หน่วย",
    active: null,
    winRate: 52.3
  },
  {
    id: "extra_spirit",
    name: "Extra Spirit",
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+9 Spirit Power, +35 Health",
    passive: "เพิ่มพลังสปิริตพื้นฐานเพื่อเสริมความแรงของสกิลทุกท่า",
    active: null,
    winRate: 51.8
  },
  {
    id: "infuser",
    name: "Infuser",
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+50 Health, +16% Spirit Lifesteal ชั่วคราว",
    passive: null,
    active: "กดใช้: เติมพลังวิญญาณ มอบพลังสปิริต +16 และดูดเลือดวิญญาณ +20% เป็นเวลา 6 วินาที",
    winRate: 51.7
  },
  {
    id: "mystic_reach",
    name: "Mystic Reach",
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+16% Ability Range, +6 Spirit Power",
    passive: "ขยายระยะการยิงสกิลและรัศมีของวงสกิลให้กว้างขึ้น 16%",
    active: null,
    winRate: 52.0
  },

  // Tier 2 (1,250 Souls)
  {
    id: "decay",
    name: "Decay",
    category: "spirit",
    tier: 2,
    cost: 1250,
    stats: "+7 Spirit Power, +70 Health",
    passive: null,
    active: "กดใช้: ร่ายคำสาปเน่าเปื่อยใส่เป้าหมาย ลดเลือดศัตรู 3.1% ต่อวินาทีและลดการฮีล 50% เป็นเวลา 10 วินาที",
    winRate: 54.1
  },
  {
    id: "superior_cooldown",
    name: "Superior Cooldown",
    category: "spirit",
    tier: 2,
    cost: 1250,
    stats: "-24% Ability Cooldown, +8 Spirit Power",
    passive: "ลดระยะเวลาคูลดาวน์ของสกิลทุกท่าลงเกือบ 1 ใน 4",
    active: null,
    winRate: 53.8
  },
  {
    id: "duration_extender",
    name: "Duration Extender",
    category: "spirit",
    tier: 2,
    cost: 1250,
    stats: "+16% Ability Duration, +100 Health",
    passive: "ยืดระยะเวลาการแสดงผลของสกิล บาเรีย และบัฟต่างๆ ให้นานขึ้น",
    active: null,
    winRate: 52.9
  },
  {
    id: "quicksilver_spirit",
    name: "Quicksilver Spirit",
    category: "spirit",
    tier: 2,
    cost: 1250,
    stats: "+14 Spirit Power, +1 m/s Speed",
    passive: "เมื่อใช้สกิลจะได้รับความเร็วในการเคลื่อนที่เพิ่มขึ้น 2 วินาที",
    active: null,
    winRate: 53.0
  },

  // Tier 3 (3,000 Souls)
  {
    id: "surge_of_power",
    name: "Surge of Power",
    category: "spirit",
    tier: 3,
    cost: 3000,
    stats: "+28 Spirit Power, +150 Health",
    passive: "ผูกมัดกับสกิล 1 สกิล เมื่อใช้สกิลนั้นจะได้รับความเร็วเดิน +3 ม./วิ และพลังยิงปืน +20%",
    active: null,
    winRate: 54.8
  },
  {
    id: "knockdown",
    name: "Knockdown",
    category: "spirit",
    tier: 3,
    cost: 3000,
    stats: "+1 Spirit Stamina, +12 Spirit Power",
    passive: null,
    active: "กดใช้: สาปทุบศัตรูเป้าหมาย หลังจากผ่านไป 2 วินาที ศัตรูจะถูกกระแทกล้มลงพื้นสตัน 1.2 วินาที (ใช้สอยตัวบินตกได้)",
    winRate: 55.2
  },
  {
    id: "silence_glyph",
    name: "Silence Glyph",
    category: "spirit",
    tier: 3,
    cost: 3000,
    stats: "+100 Health, +12 Spirit Power",
    passive: null,
    active: "กดใช้: ยิงอักขระใบ้ใส่ศัตรู ห้ามเป้าหมายใช้สกิลใดๆ เป็นเวลา 3 วินาที",
    winRate: 54.9
  },
  {
    id: "ethereal_shift",
    name: "Ethereal Shift",
    category: "spirit",
    tier: 3,
    cost: 3000,
    stats: "+14 Spirit Power, +6% Spirit Resist",
    passive: null,
    active: "กดใช้: สลายร่างเข้าสู่มิติวิญญาณ อมตะและเคลื่อนที่ไม่ได้เป็นเวลา 3.5 วินาที พร้อมรีโหลดกระสุนเต็ม",
    winRate: 54.5
  },

  // Tier 4 (6,200+ Souls)
  {
    id: "boundless_spirit",
    name: "Boundless Spirit",
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+65 Spirit Power, +300 Health, +2.5 m/s Sprint",
    passive: "ไอเทมหัวใจหลักของสายเวท มอบพลังสปิริตมหาศาลที่สุดในเกม ทำให้สกิลรุนแรงขึ้นอย่างก้าวกระโดด",
    active: null,
    winRate: 58.7
  },
  {
    id: "echo_shard",
    name: "Echo Shard",
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+22 Spirit Power, +150 Health",
    passive: null,
    active: "กดใช้: รีเซ็ตคูลดาวน์ของสกิลปกติ (สกิล 1, 2 หรือ 3) ที่เพิ่งใช้ไปให้กลับมาพร้อมใช้ทันทีอีกครั้ง",
    winRate: 58.1
  },
  {
    id: "refresher",
    name: "Refresher",
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+16% Spirit Resist, +16 Spirit Power",
    passive: null,
    active: "กดใช้: รีเซ็ตคูลดาวน์ของสกิลทั้งหมดรวมถึงอัลติเมท และรีเซ็ตคูลดาวน์ไอเทมทั้งหมดในตัว (คูลดาวน์ 180 วินาที)",
    winRate: 59.2
  },
  {
    id: "curse",
    name: "Curse",
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+12 Spirit Power, +150 Health",
    passive: null,
    active: "กดใช้: สาปศัตรูเป้าหมายเดี่ยวอย่างเด็ดขาด ห้ามใช้สกิล ห้ามยิงปืน และห้ามกดใช้ไอเทมใดๆ เป็นเวลา 3.5 วินาที",
    winRate: 60.1
  }
];
