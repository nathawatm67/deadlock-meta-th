// ===================================================================
// Deadlock Meta Thailand — Item Details & Component Trees Data
// Builds From, Builds Into, Cooldowns, Recommended Heroes
// Zero Emojis Policy
// ===================================================================

export const itemsDetailData = {
  // --- WEAPON ITEMS ---
  "Basic Magazine": {
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+24% Ammo, +15% Weapon Damage",
    passive: "เพิ่มขนาดแมกกาซีนกระสุนและความเสียหายของอาวุธปืนขั้นพื้นฐาน ช่วยให้ยิงเทรดในเลนได้นานขึ้น",
    buildsFrom: null,
    buildsInto: "Titanic Magazine (Tier 3)",
    recommendedHeroes: ["Haze", "Wraith", "Infernus", "McGinnis", "Seven"]
  },
  "Hollow Point Ward": {
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+4% Spirit Shield, +20% Weapon Damage เมื่อเลือดเกิน 60%",
    passive: "เมื่อมีพลังชีวิตมากกว่า 60% จะได้รับโบนัสความเสียหายปืนเพิ่มขึ้นอย่างมาก",
    buildsFrom: null,
    buildsInto: "Pristine Emblem (Tier 3)",
    recommendedHeroes: ["Vindicta", "Grey Talon", "Haze", "Abrams"]
  },
  "Headshot Booster": {
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+40 Bonus Headshot Damage, +40 Fire Rate Shield",
    passive: "การยิงโดนศีรษะจะสร้างความเสียหายโบนัสเพิ่มเติม (คูลดาวน์ 7 วินาที)",
    passiveCd: "7s",
    buildsFrom: null,
    buildsInto: "Crippling Headshot (Tier 4)",
    recommendedHeroes: ["Vindicta", "Haze", "Wraith", "Abrams", "Grey Talon"]
  },
  "Monster Rounds": {
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+35% Weapon Damage vs Non-Heroes, +50 Health",
    passive: "เพิ่มความเสียหายกระสุนอย่างรุนแรงต่อครีปในเลนและมอนสเตอร์ในป่า ช่วยให้ฟาร์มเงินและวิญญาณไวขึ้นมาก",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "McGinnis", "Infernus", "Haze"]
  },
  "Close Quarters": {
    category: "weapon",
    tier: 1,
    cost: 500,
    stats: "+25% Weapon Damage เมื่ออยู่ในระยะ 15 เมตร",
    passive: "ยิงศัตรูในระยะประชิดแรงขึ้น 25%",
    buildsFrom: null,
    buildsInto: "Point Blank (Tier 2)",
    recommendedHeroes: ["Abrams", "Shiv", "Warden", "Graves"]
  },
  "Kinetic Dash": {
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+100 Health, +1 Dash Stamina",
    passive: "การพุ่ง Dash จะมอบความเร็วในการยิง +25% และกระสุนไม่ลดลงชั่วคราวเป็นเวลา 5 วินาที",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Haze", "Abrams", "Shiv", "Wraith", "Infernus"]
  },
  "Quicksilver Reload": {
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+15% Weapon Damage, +12% Fire Rate",
    passive: "ผูกมัดกับสกิล 1 สกิล เมื่อกดใช้สกิลนั้นจะรีโหลดกระสุนในปืนเต็มทันที",
    passiveCd: "12s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Haze", "Vindicta", "Seven", "Wraith"]
  },
  "Point Blank": {
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+300 Bullet Shield, +45% Weapon Damage in Close Range",
    passive: "เพิ่มพลังโจมตีปืนมหาศาลเมื่อยิงเป้าหมายในระยะ 15 เมตร",
    buildsFrom: "Close Quarters (Tier 1)",
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Shiv", "Graves", "Warden"]
  },
  "Active Reload": {
    category: "weapon",
    tier: 2,
    cost: 1250,
    stats: "+10% Weapon Damage, -20% Reload Time",
    passive: "เมื่อกดรีโหลดจะมีแถบมินิเกม หากกดตรงจังหวะสีเขียวจะรีโหลดเสร็จทันทีและได้บัฟไฟร์เรต +20%",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Infernus", "Abrams", "Ivy"]
  },
  "Tesla Bullets": {
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+14% Fire Rate, +30 Spirit Damage Procs",
    passive: "กระสุนมีโอกาส 25% ปล่อยกระแสไฟฟ้าชิ่งโดนศัตรูรอบข้าง 3 ตัว ทำดาเมจวิญญาณต่อเนื่อง",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Infernus", "Wraith", "McGinnis"]
  },
  "Toxic Bullets": {
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+100 Health, +15% Weapon Damage",
    passive: "กระสุนติดสารพิษ ลดการฮีลและการรีเจนเลือดของศัตรูลง 65% พร้อมเผาเลือด 3% ต่อวินาที",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Infernus", "Seven", "Mirage", "Haze"]
  },
  "Pristine Emblem": {
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+25% Weapon Damage, +12 Spirit Resist",
    passive: "สร้างความเสียหายปืนเพิ่มขึ้น +25% ต่อศัตรูที่มีพลังชีวิตมากกว่า 50%",
    buildsFrom: "Hollow Point Ward (Tier 1)",
    buildsInto: null,
    recommendedHeroes: ["Vindicta", "Grey Talon", "Abrams", "Haze"]
  },
  "Burst Fire": {
    category: "weapon",
    tier: 3,
    cost: 3000,
    stats: "+12% Fire Rate, +50% Slide Distance",
    passive: "การยิงโดนศัตรูติดต่อกันจะเพิ่มความเร็วในการยิงขึ้นอีก +30% ชั่วคราว",
    buildsFrom: null,
    buildsInto: "Ricochet (Tier 4)",
    recommendedHeroes: ["Haze", "Wraith", "Infernus"]
  },
  "Ricochet": {
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+150 Health, +12% Fire Rate, +35% Ammo",
    passive: "กระสุนทุกลูกที่ยิงโดนเป้าหมายจะกระดอนชิ่งไปโดนศัตรูข้างเคียงอีก 2 ตัว ทำดาเมจ 60%",
    buildsFrom: "Burst Fire (Tier 3)",
    buildsInto: null,
    recommendedHeroes: ["Seven", "Haze", "Infernus", "McGinnis", "Wraith"]
  },
  "Crippling Headshot": {
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+20% Weapon Damage, +10% Lifesteal",
    passive: "การยิงโดนศีรษะจะลดเกราะกระสุนและเกราะสปิริตของศัตรูลง 24% พร้อมสโลว์ 35%",
    buildsFrom: "Headshot Booster (Tier 1)",
    buildsInto: null,
    recommendedHeroes: ["Vindicta", "Haze", "Abrams", "Grey Talon", "Mirage"]
  },
  "Lucky Shot": {
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+30% Ammo, +100 Bonus Health",
    passive: "มีโอกาส 35% ในการยิงติดคริติคอลโชคดี ทำความเสียหายปืนรุนแรงขึ้น +80% และสโลว์ศัตรู",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Haze", "Seven", "Wraith", "Abrams", "Vindicta"]
  },
  "Silencer": {
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+15% Fire Rate, +18% Weapon Damage",
    passive: "การยิงกระสุนโดนศัตรูจะสะสมสถานะใบ้ เมื่อสะสมครบจะปิดการใช้สกิลของศัตรู 2 วินาที",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Haze", "Vindicta", "Wraith", "Paradox"]
  },
  "Glass Cannon": {
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+70% Weapon Damage, +10% Movement Speed",
    passive: "เพิ่มดาเมจปืนสูงสุดในเกม แต่ลดพลังชีวิตสูงสุดของตนเองลง 15%",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Vindicta", "Haze", "Grey Talon", "Wraith"]
  },
  "Siphon Bullets": {
    category: "weapon",
    tier: 4,
    cost: 6200,
    stats: "+15% Fire Rate, +150 Health",
    passive: "การยิงกระสุนโดนฮีโร่จะขโมยพลังชีวิตสูงสุดถาวรชั่วคราว +45 HP ต่อชุด พร้อมเพิ่มดาเมจปืน",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Seven", "Infernus", "Haze", "Warden"]
  },

  // --- VITALITY ITEMS ---
  "Extra Health": {
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+160 Health, +5% Weapon Damage",
    passive: "เพิ่มพลังชีวิตสูงสุดขั้นพื้นฐานเพื่อความปลอดภัยในการยืนเลน",
    buildsFrom: null,
    buildsInto: "Enduring Speed / Colossus (Tier 4)",
    recommendedHeroes: ["Abrams", "Seven", "Lady Geist", "Haze", "Bebop"]
  },
  "Sprint Boots": {
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+2 m/s Sprint Speed, +1 Health Regen",
    passive: "เพิ่มความเร็วในการวิ่งนอกการต่อสู้ ช่วยในการเดินกลับเลนและเดินเกมข้ามแมป",
    buildsFrom: null,
    buildsInto: "Enduring Speed (Tier 2)",
    recommendedHeroes: ["Abrams", "Seven", "Infernus", "Yamato", "Dynamo"]
  },
  "Melee Lifesteal": {
    category: "vitality",
    tier: 1,
    cost: 500,
    stats: "+13% Melee Damage, +20% Melee Lifesteal vs Heroes",
    passive: "การต่อยหมัดระยะประชิดจะดูดพลังชีวิตกลับคืนมาอย่างมหาศาล",
    buildsFrom: null,
    buildsInto: "Leech (Tier 4)",
    recommendedHeroes: ["Abrams", "Shiv", "Yamato"]
  },
  "Combat Barrier": {
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+300 Bullet Shield, +22% Weapon Damage ขณะโล่ยังอยู่",
    passive: "มอบเกราะกระสุนดูดซับดาเมจ และขณะที่เกราะยังไม่แตกจะได้รับโบนัสพลังโจมตีปืน",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Haze", "Yamato", "Bebop", "Warden"]
  },
  "Bullet Armor": {
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+20% Bullet Resistance, +6% Weapon Damage",
    passive: "ลดทอนความเสียหายจากกระสุนปืนของศัตรูลง 20%",
    buildsFrom: null,
    buildsInto: "Improved Bullet Armor (Tier 3)",
    recommendedHeroes: ["Abrams", "Seven", "Lady Geist", "Dynamo", "Warden"]
  },
  "Spirit Armor": {
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+20% Spirit Resistance, +5 Spirit Power",
    passive: "ลดทอนความเสียหายจากเวทและสกิลวิญญาณลง 20%",
    buildsFrom: null,
    buildsInto: "Improved Spirit Armor (Tier 3)",
    recommendedHeroes: ["Abrams", "Seven", "Lady Geist", "Dynamo", "Yamato"]
  },
  "Enduring Speed": {
    category: "vitality",
    tier: 2,
    cost: 1250,
    stats: "+1.4 m/s Move Speed, +35% Slow Resistance",
    passive: "เพิ่มความเร็วเดินตลอดเวลา และลดระยะเวลาของสถานะสโลว์ลง 35%",
    buildsFrom: "Sprint Boots (Tier 1)",
    buildsInto: null,
    recommendedHeroes: ["Infernus", "Seven", "Haze", "Bebop", "Shiv"]
  },
  "Torment Pulse": {
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+140 Health, +16 Spirit Power",
    passive: "ปล่อยคลื่นพัลส์เผาไหม้ศัตรูทุกคนรอบตัวในรัศมี ทำดาเมจวิญญาณต่อเนื่องโดยอัตโนมัติ",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Yamato", "Mo & Krill", "Warden", "Kelvin"]
  },
  "Healbane": {
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+75 Health, +14 Spirit Power",
    passive: "เมื่อทำดาเมจสกิลใส่ศัตรู จะลดการฮีลของเป้าหมายลง 40% และหากเป้าหมายตายจะระเบิดฮีลให้เพื่อนรอบตัว",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Infernus", "Lady Geist", "Shiv"]
  },
  "Lifesteal Booster": {
    category: "vitality",
    tier: 3,
    cost: 3000,
    stats: "+175 Health, +16% Bullet Lifesteal",
    passive: "เพิ่มเปอร์เซ็นต์การดูดเลือดจากกระสุนปืนอย่างมีนัยสำคัญ",
    buildsFrom: null,
    buildsInto: "Leech (Tier 4)",
    recommendedHeroes: ["Abrams", "Haze", "Infernus", "Shiv"]
  },
  "Colossus": {
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+600 Health, +20% Melee Damage, +2 m/s Sprint",
    passive: null,
    active: "กดใช้: ขยายร่างยักษ์ เพิ่มขนาดตัว เลือด และเกราะ พร้อมปล่อยออร่าสโลว์ศัตรูรอบตัว 35% เป็นเวลา 7 วินาที",
    activeCd: "45s",
    buildsFrom: "Extra Health (Tier 1)",
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Dynamo", "Mo & Krill", "Shiv", "Warden"]
  },
  "Unstoppable": {
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+150 Health, +12% Spirit Resist, +1 m/s Speed",
    passive: null,
    active: "กดใช้: เข้าสู่สถานะต้านทาน CC สมบูรณ์แบบ ไม่สามารถถูกสตัน ใบ้ สโลว์ หรือกักขังได้เป็นเวลา 6 วินาที",
    activeCd: "60s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Haze", "Abrams", "Yamato", "Dynamo", "Bebop"]
  },
  "Leech": {
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+175 Health, +35% Bullet Lifesteal, +35% Spirit Lifesteal",
    passive: "ดูดพลังชีวิตมหาศาลจากทั้งความเสียหายกระสุนและความเสียหายสกิลพร้อมกัน",
    buildsFrom: "Melee Lifesteal / Lifesteal Booster",
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Seven", "Haze", "Infernus", "Lady Geist", "Yamato"]
  },
  "Metal Skin": {
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+8% Spirit Resist, +120 Health",
    passive: null,
    active: "กดใช้: ผิวหนังกลายเป็นโลหะ ป้องกันความเสียหายจากกระสุนปืนและการต่อยหมัด 100% เป็นเวลา 3.5 วินาที",
    activeCd: "25s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Haze", "Seven", "McGinnis"]
  },
  "Soul Rebirth": {
    category: "vitality",
    tier: 4,
    cost: 6200,
    stats: "+12 Spirit Power, +200 Health",
    passive: "เมื่อถูกฆ่าตาย จะฟื้นคืนชีพกลับมาพร้อมเลือด 50% หลังจากผ่านไป 4 วินาที (คูลดาวน์ 240 วินาที)",
    passiveCd: "240s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Lady Geist", "Dynamo", "Yamato"]
  },

  // --- SPIRIT ITEMS ---
  "Mystic Burst": {
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+6 Spirit Power, +40 Bonus Spirit Damage",
    passive: "เมื่อสกิลสร้างความเสียหายเดี่ยวเกิน 80 หน่วย จะระเบิดโบนัสดาเมจวิญญาณเพิ่มอีก 40 หน่วย",
    buildsFrom: null,
    buildsInto: "Improved Burst / Boundless Spirit (Tier 4)",
    recommendedHeroes: ["Seven", "Lady Geist", "Yamato", "Bebop", "Lash", "Pocket"]
  },
  "Extra Spirit": {
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+9 Spirit Power, +35 Health",
    passive: "เพิ่มพลังสปิริตพื้นฐานเพื่อเสริมความแรงของสกิลทุกท่า",
    buildsFrom: null,
    buildsInto: "Boundless Spirit (Tier 4)",
    recommendedHeroes: ["Seven", "Lady Geist", "Yamato", "Bebop", "McGinnis"]
  },
  "Infuser": {
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+50 Health, +16% Spirit Lifesteal ชั่วคราว",
    passive: null,
    active: "กดใช้: เติมพลังวิญญาณ มอบพลังสปิริต +16 และดูดเลือดวิญญาณ +20% เป็นเวลา 6 วินาที",
    activeCd: "37s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Infernus", "Lady Geist", "Bebop"]
  },
  "Mystic Reach": {
    category: "spirit",
    tier: 1,
    cost: 500,
    stats: "+16% Ability Range, +6 Spirit Power",
    passive: "ขยายระยะการยิงสกิลและรัศมีของวงสกิลให้กว้างขึ้น 16%",
    buildsFrom: null,
    buildsInto: "Improved Reach (Tier 3)",
    recommendedHeroes: ["Dynamo", "Lady Geist", "Seven", "Pocket"]
  },
  "Superior Cooldown": {
    category: "spirit",
    tier: 2,
    cost: 1250,
    stats: "-24% Ability Cooldown, +8 Spirit Power",
    passive: "ลดระยะเวลาคูลดาวน์ของสกิลทุกท่าลงเกือบ 1 ใน 4",
    buildsFrom: null,
    buildsInto: "Refresher (Tier 4)",
    recommendedHeroes: ["Seven", "Lady Geist", "Yamato", "Bebop", "Dynamo", "McGinnis"]
  },
  "Duration Extender": {
    category: "spirit",
    tier: 2,
    cost: 1250,
    stats: "+16% Ability Duration, +100 Health",
    passive: "ยืดระยะเวลาการแสดงผลของสกิล บาเรีย และบัฟต่างๆ ให้นานขึ้น",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Vindicta", "Dynamo", "McGinnis"]
  },
  "Surge of Power": {
    category: "spirit",
    tier: 3,
    cost: 3000,
    stats: "+28 Spirit Power, +150 Health",
    passive: "ผูกมัดกับสกิล 1 สกิล เมื่อใช้สกิลนั้นจะได้รับความเร็วเดิน +3 ม./วิ และพลังยิงปืน +20%",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Wraith", "Grey Talon", "Pocket"]
  },
  "Echo Shard": {
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+22 Spirit Power, +150 Health",
    passive: null,
    active: "กดใช้: รีเซ็ตคูลดาวน์ของสกิลปกติ (สกิล 1, 2 หรือ 3) ที่เพิ่งใช้ไปให้กลับมาพร้อมใช้ทันทีอีกครั้ง",
    activeCd: "22s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Bebop", "Seven", "McGinnis", "Lash", "Pocket"]
  },
  "Boundless Spirit": {
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+65 Spirit Power, +300 Health, +2.5 m/s Sprint",
    passive: "ไอเทมหัวใจหลักของสายเวท มอบพลังสปิริตมหาศาลที่สุดในเกม ทำให้สกิลรุนแรงขึ้นอย่างก้าวกระโดด",
    buildsFrom: "Mystic Burst / Extra Spirit",
    buildsInto: null,
    recommendedHeroes: ["Seven", "Lady Geist", "Yamato", "Bebop", "Dynamo", "Vindicta"]
  },
  "Refresher": {
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+16% Spirit Resist, +16 Spirit Power",
    passive: null,
    active: "กดใช้: รีเซ็ตคูลดาวน์ของสกิลทั้งหมดรวมถึงอัลติเมท และรีเซ็ตคูลดาวน์ไอเทมทั้งหมดในตัว (คูลดาวน์ 180 วินาที)",
    activeCd: "180s",
    buildsFrom: "Superior Cooldown (Tier 2)",
    buildsInto: null,
    recommendedHeroes: ["Seven", "Yamato", "Bebop", "Dynamo", "Lash"]
  },
  "Curse": {
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+12 Spirit Power, +150 Health",
    passive: null,
    active: "กดใช้: สาปศัตรูเป้าหมายเดี่ยวอย่างเด็ดขาด ห้ามใช้สกิล ห้ามยิงปืน และห้ามกดใช้ไอเทมใดๆ เป็นเวลา 3.5 วินาที",
    activeCd: "45s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Abrams", "Seven", "Haze", "Lady Geist", "Dynamo", "Yamato"]
  },
  "Diviner's Kevlar": {
    category: "spirit",
    tier: 4,
    cost: 6200,
    stats: "+700 Bullet Shield, +700 Spirit Shield เมื่อกดใช้อัลติเมท",
    passive: "เมื่อกดใช้อัลติเมท จะได้รับเกราะยักษ์ 1,400 หน่วย และลดคูลดาวน์",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Seven", "Lady Geist", "Yamato", "Bebop"]
  },
  "Warp Stone": {
    category: "spirit",
    tier: 3,
    cost: 3000,
    stats: "+20 Spirit Power, +11% Weapon Damage",
    passive: null,
    active: "กดใช้: เทเลพอร์ตพุ่งไปข้างหน้า 13 เมตรทันที และเพิ่มเกราะกระสุน +300",
    activeCd: "16s",
    buildsFrom: null,
    buildsInto: null,
    recommendedHeroes: ["Pocket", "Lash", "Dynamo", "Vindicta", "Wraith"]
  }
};

/**
 * Lookup helper to get complete item details from name or id
 */
export function getItemFullDetails(itemNameOrId, baseItem = null) {
  if (!itemNameOrId) return baseItem;

  const normalized = itemNameOrId.trim();
  const detail = itemsDetailData[normalized];

  if (!detail) {
    if (baseItem) return baseItem;
    return {
      name: normalized,
      category: "spirit",
      tier: 1,
      cost: 500,
      stats: "+สเตตัสตามสายพื้นฐาน",
      passive: "ไอเทมยุทธวิธีในระบบเกม Deadlock",
      buildsFrom: null,
      buildsInto: null,
      recommendedHeroes: ["Abrams", "Seven", "Haze"]
    };
  }

  return {
    ...(baseItem || {}),
    ...detail,
    name: normalized,
    winRate: baseItem?.winRate || detail.winRate || 53.5
  };
}
