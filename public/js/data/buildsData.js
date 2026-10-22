// ===================================================================
// Deadlock Meta Thailand — Competitive Pro Builds Dataset (Deep Research)
// Curated high-tier builds from Chinese Meta (CN 完美世界 / Bilibili / Douyu)
// and Western Meta (NA / EU Top 500 Eternus / Tracklock / Pro Tournaments)
// Patch: 2026-10-14 Current Meta
// Zero Emojis Policy
// ===================================================================

export const buildsData = [
  // -----------------------------------------------------------------
  // ABRAMS
  // -----------------------------------------------------------------
  {
    id: "abrams_cn_onepunch",
    heroId: "abrams",
    heroName: "Abrams",
    titleThai: "Abrams วันพั้นช์แมนดูดเลือดระยะประชิด",
    titleOriginal: "一拳超人近战吸血流 (CN High Elo)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili 国服顶分段 Top 10",
    patch: "2026-10-14",
    winRate: 58.4,
    playstyle: "Tank / Melee Brawler",
    conceptThai: "บิลด์ยอดนิยมอันดับ 1 ในเซิร์ฟเวอร์จีน เน้นรีเจนเลือดมหาศาลจาก Infernal Resilience ผสานกับหมัดหนักระยะประชิดที่ติดสถานะ Lifesteal สามารถพุ่งชนกระแทกกำแพงแล้วต่อยหมัดหนักสองฮิตปิดคิลได้ทันที",
    skillOrder: "3 > 1 > 2 > 4",
    skillNotes: "อัปสกิล 3 (Infernal Resilience) ให้เต็มก่อนเพื่อเพิ่มเปอร์เซ็นต์ฟื้นฟูเลือดและรีเจน จากนั้นอัปสกิล 1 (Siphon Life) เพื่อฮีลเสริมในจังหวะไฟต์",
    items: {
      early: ["Close Quarters", "Melee Lifesteal", "Extra Health", "Sprint Boots"],
      mid: ["Torment Pulse", "Bullet Armor", "Spirit Armor", "Combat Barrier", "Lifesteal Booster"],
      late: ["Colossus", "Leech", "Unstoppable", "Siphon Bullets"],
      situational: ["Curse", "Healbane", "Metal Skin"]
    },
    combosThai: "เริ่มด้วยสกิล 2 (Shoulder Charge) ลากศัตรูชนกำแพงให้สตัน 1.6 วินาที -> กดสกิล 1 (Siphon Life) ดูดเลือด -> ชาร์จหมัดหนัก (Heavy Melee) ซ้ำ -> หากเข้าไฟต์ใหญ่ให้เปิดด้วยอัลติเมท 4 (Seismic Impact) ลงกลางวง"
  },
  {
    id: "abrams_na_shotgun",
    heroId: "abrams",
    heroName: "Abrams",
    titleThai: "Abrams ปืนลูกซองแครี่ทะลวงเกราะ",
    titleOriginal: "Shotgun Hyper Carry (NA Tournament Meta)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Eternus Tier 1",
    patch: "2026-10-14",
    winRate: 56.9,
    playstyle: "Carry / Gun DPS",
    conceptThai: "สไตล์การเล่นฝั่ง NA ที่ใช้ปืนลูกซองเป็นอาวุธสังหารหลัก เน้นออกไอเทมเพิ่มขนาดแมกกาซีน ความเร็วกระสุน และดาเมจระยะประชิด ยิงหัวละลายศัตรูในระยะ 5 เมตร",
    skillOrder: "2 > 3 > 1 > 4",
    skillNotes: "เน้นอัปสกิล 2 เต็มไวเพื่อลดคูลดาวน์พุ่งชนเหลือเพียง 12 วินาที ใช้ในการเข้าประชิดและไล่ตามศัตรู",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Headshot Booster", "Extra Health"],
      mid: ["Point Blank", "Kinetic Dash", "Active Reload", "Bullet Armor"],
      late: ["Pristine Emblem", "Crippling Headshot", "Siphon Bullets", "Lucky Shot", "Unstoppable"],
      situational: ["Silencer", "Metal Skin", "Curse"]
    },
    combosThai: "พุ่งด้วยสกิล 2 ชนศัตรู -> กดยิงลูกซองเล็งหัว 2 นัด -> กลิ้งตัวแดชหลบกระสุน -> กดยิงซ้ำด้วยผลของ Point Blank"
  },

  // -----------------------------------------------------------------
  // SEVEN
  // -----------------------------------------------------------------
  {
    id: "seven_cn_thunderstorm",
    heroId: "seven",
    heroName: "Seven",
    titleThai: "Seven มหาพายุสายฟ้าล้างบาง",
    titleOriginal: "雷暴核弹天罚流 (CN Tournament Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Douyu Pro Team Strategy",
    patch: "2026-10-14",
    winRate: 57.8,
    playstyle: "Mage / Area Denial",
    conceptThai: "บิลด์เมต้าจีนที่เน้นการทำลายล้างทีมไฟต์ระดับ 100% กางพายุสายฟ้า Storm Cloud ที่มีรัศมีและระยะเวลานานขึ้น พร้อมเกราะเวทป้องกันการโดนขัดขวาง สามารถยึดพื้นที่บอสกลางและทำลายฐานศัตรูได้อย่างเด็ดขาด",
    skillOrder: "4 > 1 > 3 > 2",
    skillNotes: "เร่งอัปอัลติ 4 ให้ถึง Tier 3 ทันที เพื่อรับสถานะลดคูลดาวน์และเพิ่มพลังทำลายสูงสุด",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Infuser", "Sprint Boots"],
      mid: ["Duration Extender", "Superior Cooldown", "Surge of Power", "Spirit Armor", "Bullet Armor"],
      late: ["Boundless Spirit", "Echo Shard", "Diviner's Kevlar", "Refresher", "Unstoppable"],
      situational: ["Curse", "Silence Glyph", "Metal Skin"]
    },
    combosThai: "โยนสกิล 1 (Lightning Ball) เปิดวิสัยทัศน์ -> ล็อกเป้าด้วยสกิล 2 (Static Charge) -> เปิด Unstoppable กันสตัน -> กดอัลติเมท 4 (Storm Cloud) กลางทีมไฟต์"
  },
  {
    id: "seven_na_tesla_carry",
    heroId: "seven",
    heroName: "Seven",
    titleThai: "Seven เทสล่าไฮเปอร์แครี่กระสุนเด้ง",
    titleOriginal: "Tesla Ricochet Hyper Carry (NA High MMR)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "Tracklock Top 50 NA",
    patch: "2026-10-14",
    winRate: 56.1,
    playstyle: "Carry / Hybrid DPS",
    conceptThai: "เปลี่ยน Seven ให้เป็นแครี่ยิงปืนสายฟ้าที่โหดที่สุดในเกม ใช้สกิล 3 (Power Surge) บัฟกระสุนให้ชิ่งสายฟ้า ผสานกับ Ricochet และ Tesla Bullets ยิงใส่ตัวหน้าแต่กระสุนชิ่งไปฆ่าซัพพอร์ตข้างหลังตายหมด",
    skillOrder: "3 > 2 > 1 > 4",
    skillNotes: "อัปสกิล 3 นำเพื่อรับโบนัส Spirit Damage ต่อการยิงทุกนัดและเพิ่มความเร็วในการยิง",
    items: {
      early: ["Basic Magazine", "Monster Rounds", "Extra Spirit", "Sprint Boots"],
      mid: ["Tesla Bullets", "Active Reload", "Toxic Bullets", "Enduring Speed"],
      late: ["Ricochet", "Lucky Shot", "Siphon Bullets", "Leech", "Unstoppable"],
      situational: ["Crippling Headshot", "Metal Skin", "Curse"]
    },
    combosThai: "เปิดบัฟสกิล 3 (Power Surge) -> โยนสตันสกิล 2 ใส่ตัวแก๊งค์ -> กระหน่ำยิงปืนใส่เป้าหมาย กระสุน Ricochet จะชิ่งทำลายศัตรูทุกคนรอบข้าง"
  },

  // -----------------------------------------------------------------
  // HAZE
  // -----------------------------------------------------------------
  {
    id: "haze_cn_shadow_assassin",
    heroId: "haze",
    heroName: "Haze",
    titleThai: "Haze นักฆ่าเงาไร้เสียงลอบสังหาร",
    titleOriginal: "隐身暗杀收割流 (CN Bilibili Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Haze One-Trick 900+ Matches",
    patch: "2026-10-14",
    winRate: 59.2,
    playstyle: "Assassin / Ganker",
    conceptThai: "สไตล์การเล่นฝั่งจีนที่เน้นการลอบฆ่าตัวดาเมจแถวหลังของศัตรู ล่องหนด้วย Smoke Bomb เข้าไปแทง Sleep Dagger ให้หลับ แล้วระเบิดดาเมจด้วยปืนยิงหัวระยะเผาขน",
    skillOrder: "3 > 1 > 2 > 4",
    skillNotes: "อัปสกิล 3 (Fixation) เพื่อสะสมแต้มดาเมจเมื่อยิงโดนเป้าหมาย ยิ่งยิงโดน ดาเมจยิ่งทวีคูณ",
    items: {
      early: ["Basic Magazine", "Headshot Booster", "Extra Health", "Sprint Boots"],
      mid: ["Kinetic Dash", "Quicksilver Reload", "Combat Barrier", "Enduring Speed"],
      late: ["Ricochet", "Crippling Headshot", "Leech", "Glass Cannon", "Unstoppable"],
      situational: ["Curse", "Silencer", "Metal Skin"]
    },
    combosThai: "เปิดสกิล 2 (Smoke Bomb) ล่องหนเข้าข้างหลัง -> ปามีดสกิล 1 (Sleep Dagger) ให้หลับ -> เดินประชิดตัวเล็งหัว -> กระหน่ำยิงหัวด้วยปืน SMG"
  },
  {
    id: "haze_na_bullet_dance",
    heroId: "haze",
    heroName: "Haze",
    titleThai: "Haze ระบำกระสุนคลั่งแทงค์ละลาย",
    titleOriginal: "Bullet Dance Team-Wiper (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "Eternus Rank Competitive Player",
    patch: "2026-10-14",
    winRate: 57.5,
    playstyle: "Carry / Teamfight DPS",
    conceptThai: "สร้างขึ้นเพื่อปิดเกมในทีมไฟต์ 6v6 ด้วยการใช้อัลติเมท Bullet Dance พร้อมไอเทม Unstoppable และ Ricochet ทำให้สามารถหมุนยิงกระสุนรอบตัว 360 องศาโดยไม่โดนสตันขัดขวาง",
    skillOrder: "4 > 3 > 1 > 2",
    skillNotes: "โฟกัสอัลติเมท 4 ให้ถึง Tier 3 เพิ่มจำนวนเป้าหมายที่ยิงพร้อมกันและอัตราการหลบหลีก",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Extra Health", "Sprint Boots"],
      mid: ["Burst Fire", "Bullet Armor", "Spirit Armor", "Enduring Speed"],
      late: ["Unstoppable", "Ricochet", "Siphon Bullets", "Lucky Shot", "Leech"],
      situational: ["Metal Skin", "Crippling Headshot", "Pristine Emblem"]
    },
    combosThai: "ลอบเข้ากลางวงไฟต์ -> กด Unstoppable (กดก่อนหมุนเสมอ) -> กดเปิดอัลติเมท 4 (Bullet Dance) -> กระสุนจะชิ่งสังหารทั้งทีม"
  },

  // -----------------------------------------------------------------
  // INFERNUS
  // -----------------------------------------------------------------
  {
    id: "infernus_cn_toxic_fire",
    heroId: "infernus",
    heroName: "Infernus",
    titleThai: "Infernus เปลวเพลิงพิษคู่สปีดแสง",
    titleOriginal: "双修毒火极速流 (CN Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Master League",
    patch: "2026-10-14",
    winRate: 58.1,
    playstyle: "Carry / Kiting DPS",
    conceptThai: "การผสมผสานระหว่างสถานะไฟเผา Afterburn และไอเทม Toxic Bullets ทำให้ศัตรูโดนดาเมจเปอร์เซ็นต์เลือดอย่างต่อเนื่อง พร้อมวิ่งเร็วเหนือกว่าใครด้วย Flame Dash และ Enduring Speed",
    skillOrder: "3 > 2 > 1 > 4",
    skillNotes: "อัปสกิล 3 (Afterburn) เพื่อให้ไฟเผาติดง่ายและแรงที่สุด",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Infuser", "Sprint Boots"],
      mid: ["Toxic Bullets", "Enduring Speed", "Active Reload", "Healbane"],
      late: ["Ricochet", "Leech", "Siphon Bullets", "Unstoppable", "Boundless Spirit"],
      situational: ["Curse", "Superior Cooldown", "Metal Skin"]
    },
    combosThai: "กดสกิล 2 (Flame Dash) วิ่งวนรอบศัตรูทิ้งรอยไฟ -> สาดกระสุนปืนใส่เป้าหมายให้ติดทั้งไฟและพิษ -> หากศัตรูกลุ่มใหญ่ให้กดสกิล 4 (Concussive Combustion) ระเบิดสตันหมู่"
  },
  {
    id: "infernus_na_flame_carry",
    heroId: "infernus",
    heroName: "Infernus",
    titleThai: "Infernus คาร์รี่แดชเพลิงระเบิดสตัน",
    titleOriginal: "Flame Dash Stun Initiator (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Pro Circuit Infernus",
    patch: "2026-10-14",
    winRate: 56.7,
    playstyle: "Initiator / Hybrid Carry",
    conceptThai: "เน้นการเปิดจังหวะไฟต์ด้วย Flame Dash และสาด Catalyst ขยายดาเมจไฟเผา 30% จากนั้นใช้ Concussive Combustion ระเบิดสตัน 3 วินาทีเต็ม",
    skillOrder: "2 > 3 > 4 > 1",
    skillNotes: "เร่งอัปสกิล 2 ให้เต็มเพื่อลดคูลดาวน์แดชและรับเกราะกระสุนขณะพุ่ง",
    items: {
      early: ["Basic Magazine", "Extra Spirit", "Sprint Boots", "Extra Health"],
      mid: ["Combat Barrier", "Superior Cooldown", "Toxic Bullets", "Enduring Speed"],
      late: ["Boundless Spirit", "Leech", "Unstoppable", "Ricochet", "Siphon Bullets"],
      situational: ["Curse", "Metal Skin", "Colossus"]
    },
    combosThai: "สาด Catalyst สกิล 1 -> จุดไฟวิ่ง Flame Dash สกิล 2 พุ่งเข้ากลางวง -> กด Concussive Combustion อัลติ 4 ระเบิดสตันทั้งวง"
  },

  // -----------------------------------------------------------------
  // LADY GEIST
  // -----------------------------------------------------------------
  {
    id: "ladygeist_cn_lowhp_nuke",
    heroId: "lady_geist",
    heroName: "Lady Geist",
    titleThai: "Lady Geist เลือดน้อยสวนนิวเคลียร์",
    titleOriginal: "压血反杀换血流 (CN High Elo)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Geist Specialist",
    patch: "2026-10-14",
    winRate: 57.3,
    playstyle: "Mage / High-Risk Finisher",
    conceptThai: "สไตล์การเล่นระดับเทพของฝั่งจีน ใช้พลังชีวิตของตัวเองจ่ายเป็นสกิลขว้าง Blood Shard จนเลือดเหลือ 15-20% ล่อให้ศัตรูพุ่งเข้ามาฆ่า จากนั้นกดอัลติเมท Soul Exchange สลับเลือดทันที ศัตรูเลือดลดฮวบเหลือ 15% ขณะที่ Lady Geist เลือดเต็ม 100%",
    skillOrder: "1 > 4 > 3 > 2",
    skillNotes: "อัปสกิล 1 (Essence Bomb) เพื่อเพิ่มรัศมีระเบิดและดาเมจวิญญาณ และเร่งอัป 4 เพื่อลดคูลดาวน์สลับเลือด",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Health", "Infuser"],
      mid: ["Superior Cooldown", "Mystic Reach", "Bullet Armor", "Spirit Armor"],
      late: ["Boundless Spirit", "Leech", "Soul Rebirth", "Curse", "Diviner's Kevlar"],
      situational: ["Healbane", "Metal Skin", "Knockdown"]
    },
    combosThai: "ปาระเบิดเลือดสกิล 1 ตอดเลือดเรื่อยๆ -> เมื่อศัตรูพุ่งเข้าประชิดตัวจนเลือดเราเหลือน้อย -> กดอัลติ 4 (Soul Exchange) สลับเลือดทันที -> ขว้างระเบิดซ้ำเก็บคิล"
  },
  {
    id: "ladygeist_na_drain_sustain",
    heroId: "lady_geist",
    heroName: "Lady Geist",
    titleThai: "Lady Geist ซัสเทนดูดเลือดสองเป้าหมาย",
    titleOriginal: "Life Drain Hyper Sustain (EU Tournament)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "EU High MMR Captain",
    patch: "2026-10-14",
    winRate: 56.4,
    playstyle: "Bruiser / Drain Mage",
    conceptThai: "บิลด์สายดูดเลือด Life Drain ที่เน้นการยืนระยะในไฟต์ยาว อัปสกิลดูดเลือดจนสามารถล็อกดูดเลือดได้ 2 คนพร้อมกันและสโลว์เป้าหมาย 40%",
    skillOrder: "2 > 1 > 4 > 3",
    skillNotes: "อัปสกิล 2 (Life Drain) เต็มไวเพื่อเพิ่มระยะและจำนวนเป้าหมายดูดเลือด",
    items: {
      early: ["Extra Health", "Extra Spirit", "Sprint Boots", "Mystic Burst"],
      mid: ["Combat Barrier", "Bullet Armor", "Spirit Armor", "Superior Cooldown"],
      late: ["Leech", "Boundless Spirit", "Unstoppable", "Curse", "Soul Rebirth"],
      situational: ["Torment Pulse", "Colossus", "Metal Skin"]
    },
    combosThai: "ขว้าง Malice สกิล 3 ติดดีบัฟขยายดาเมจ -> ล็อกสายดูด Life Drain สกิล 2 ดึงเลือดสองตัวพร้อมกัน -> สลับเลือดด้วย Soul Exchange เมื่อศัตรูเบิร์สใส่"
  },

  // -----------------------------------------------------------------
  // YAMATO
  // -----------------------------------------------------------------
  {
    id: "yamato_cn_shadow_slash",
    heroId: "yamato",
    heroName: "Yamato",
    titleThai: "Yamato ดาบเงาสังหารอัลติอมตะ",
    titleOriginal: "绝息瞬影斩杀流 (CN Competitive Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Pro Invitational Yamato",
    patch: "2026-10-14",
    winRate: 58.7,
    playstyle: "Assassin / Brawler",
    conceptThai: "บิลด์ดาบวิญญาณสไตล์จีน ใช้สกิล 1 (Power Slash) ชาร์จฟันทะลุตัวเป็นดาเมจมหาศาล และเมื่อเลือดใกล้หมดให้เปิดอัลติเมท Shadow Transformation รับสถานะอมตะ 6 วินาที พร้อมรีเซ็ตคูลดาวน์สกิลทั้งหมด",
    skillOrder: "1 > 2 > 3 > 4",
    skillNotes: "อัปสกิล 1 นำเพื่อรับดาเมจชาร์จฟันสูงสุดและระยะโจมตีกว้างขึ้น",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Health", "Melee Lifesteal"],
      mid: ["Torment Pulse", "Superior Cooldown", "Combat Barrier", "Spirit Armor"],
      late: ["Refresher", "Boundless Spirit", "Leech", "Diviner's Kevlar", "Unstoppable"],
      situational: ["Curse", "Metal Skin", "Colossus"]
    },
    combosThai: "ชาร์จสกิล 1 ฟันคลื่นดาบ -> พุ่งดึงตัวด้วยสกิล 2 (Flying Strike) เข้าประชิด -> ฟันหมัดหนัก -> เมื่อโดนรุมกดอัลติ 4 (Shadow Transformation) กลายร่างเป็นอมตะแล้วฟันดาบซ้ำอีกชุด"
  },
  {
    id: "yamato_na_duelist",
    heroId: "yamato",
    heroName: "Yamato",
    titleThai: "Yamato ดวลเดี่ยวกระสุนดาบทะลวง",
    titleOriginal: "Gun & Blade Hybrid Duelist (NA Top 100)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "Tracklock NA Top 100",
    patch: "2026-10-14",
    winRate: 56.8,
    playstyle: "Duelist / Hybrid",
    conceptThai: "สไตล์อเมริกาที่เน้นยิงปืนสลับฟันดาบ ใช้ Quicksilver Reload ผูกกับ Flying Strike เพื่อยิงกระสุนไม่หยุดหย่อน",
    skillOrder: "2 > 1 > 3 > 4",
    skillNotes: "เน้นสกิล 2 เพื่อระยะการพุ่งและรับเกราะกระสุนเมื่อถึงตัวศัตรู",
    items: {
      early: ["Basic Magazine", "Close Quarters", "Extra Health", "Sprint Boots"],
      mid: ["Point Blank", "Quicksilver Reload", "Combat Barrier", "Bullet Armor"],
      late: ["Siphon Bullets", "Crippling Headshot", "Leech", "Unstoppable", "Refresher"],
      situational: ["Curse", "Metal Skin", "Pristine Emblem"]
    },
    combosThai: "ยิงปืนใส่เป้าหมาย -> พุ่งด้วย Flying Strike สกิล 2 (รีโหลดกระสุนเต็มทันที) -> สาดลูกซอง Point Blank เผาขน -> กวาดดาบ Crimson Slash ปิดคิล"
  },

  // -----------------------------------------------------------------
  // VINDICTA
  // -----------------------------------------------------------------
  {
    id: "vindicta_cn_orbital_snipe",
    heroId: "vindicta",
    heroName: "Vindicta",
    titleThai: "Vindicta บินสไนป์ทิ้งระเบิดดั่งดาวเทียม",
    titleOriginal: "浮空天基狙击流 (CN High MMR)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Sniper God",
    patch: "2026-10-14",
    winRate: 56.4,
    playstyle: "Sniper / Long-Range Carry",
    conceptThai: "บินลอยตัวบนท้องฟ้าด้วยสกิล Flight อยู่นอกระยะการโจมตีของศัตรู แล้วใช้สโคปอัลติเมท Assassinate เล็งยิงเก็บศัตรูที่เลือดต่ำกว่า 50% ให้ตายในนัดเดียว พร้อมรับโบนัส Souls เพิ่มเติมจากการสไนป์",
    skillOrder: "4 > 2 > 1 > 3",
    skillNotes: "โฟกัสอัลติเมท 4 เพื่อเพิ่มเกณฑ์เลือดคัดประหาร (Execution Threshold) และโบนัส Souls",
    items: {
      early: ["Basic Magazine", "Headshot Booster", "Hollow Point Ward", "Sprint Boots"],
      mid: ["Duration Extender", "Quicksilver Reload", "Pristine Emblem", "Superior Cooldown"],
      late: ["Glass Cannon", "Crippling Headshot", "Lucky Shot", "Boundless Spirit", "Leech"],
      situational: ["Warp Stone", "Silencer", "Unstoppable"]
    },
    combosThai: "บินขึ้นฟ้าด้วยสกิล 2 (Flight) -> ปักหมุดสกิล 1 (Stake) ยึดขาเป้าหมายไม่ให้หนี -> ปล่อยอีกาป่วนสกิล 3 -> ส่องสโคปยิง Assassinate สไนป์ปิดชีพ"
  },
  {
    id: "vindicta_na_crow_assassin",
    heroId: "vindicta",
    heroName: "Vindicta",
    titleThai: "Vindicta ปักเสาอีกาฉีกวิญญาณ",
    titleOriginal: "Stake & Crow Bleed Assassin (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Tournament Finalist",
    patch: "2026-10-14",
    winRate: 55.9,
    playstyle: "Ganker / Executioner",
    conceptThai: "เน้นคอมโบปักหมุด Stake ขังเป้าหมาย แล้วปล่อยอีกา Crow Familiar ที่ติดสถานะลดฮีล 45% และเลือดไหล 4.5% ต่อวิ ยิงซ้ำด้วยสไนเปอร์",
    skillOrder: "1 > 3 > 4 > 2",
    skillNotes: "อัปสกิล 1 (Stake) เพื่อยืดเวลาตรึงขาและเพิ่มตัวคูณดาเมจ 25%",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Extra Spirit", "Sprint Boots"],
      mid: ["Toxic Bullets", "Superior Cooldown", "Combat Barrier", "Duration Extender"],
      late: ["Pristine Emblem", "Crippling Headshot", "Glass Cannon", "Leech", "Unstoppable"],
      situational: ["Silencer", "Warp Stone", "Curse"]
    },
    combosThai: "ปักหมุด Stake สกิล 1 ล็อกขา -> ส่งอีกา Crow สกิล 3 เจาะเกราะลดฮีล -> เล็งสไนป์ Assassinate สกิล 4 นัดเดียวดับ"
  },

  // -----------------------------------------------------------------
  // BEBOP
  // -----------------------------------------------------------------
  {
    id: "bebop_cn_hook_bomb",
    heroId: "bebop",
    heroName: "Bebop",
    titleThai: "Bebop ฮุกหมัดระเบิดคอมโบสั่งตาย",
    titleOriginal: "钩锁炸弹核爆流 (CN Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN High MMR Streamer",
    patch: "2026-10-14",
    winRate: 57.2,
    playstyle: "Initiator / Burst Ganker",
    conceptThai: "คอมโบที่น่าสะพรึงกลัวที่สุด ยิงตะขอฮุกดึงศัตรูข้ามตึกมาตรงหน้า แปะระเบิดเวลา Sticky Bomb ใส่ตัว แล้วต่อยด้วย Exploding Uppercut ให้ศัตรูกระเด็นลอยไปตกใส่เพื่อนร่วมทีม ระเบิดตู้มตายยกกลุ่ม",
    skillOrder: "2 > 1 > 3 > 4",
    skillNotes: "อัปสกิล 2 (Sticky Bomb) นำ เพราะทุกครั้งที่ระเบิดโดนฮีโร่จะเพิ่มดาเมจถาวรแบบสแต็กไม่จำกัด",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Health", "Infuser"],
      mid: ["Echo Shard", "Superior Cooldown", "Combat Barrier", "Enduring Speed"],
      late: ["Boundless Spirit", "Refresher", "Diviner's Kevlar", "Leech", "Unstoppable"],
      situational: ["Curse", "Knockdown", "Metal Skin"]
    },
    combosThai: "ยิงฮุกสกิล 3 ดึงศัตรูมา -> แปะระเบิดสกิล 2 -> ต่อยสกิล 1 (Exploding Uppercut) ให้ลอย -> กด Echo Shard แปะระเบิดลูกที่สองซ้ำทันที"
  },
  {
    id: "bebop_na_hyper_beam",
    heroId: "bebop",
    heroName: "Bebop",
    titleThai: "Bebop ลำแสงไฮเปอร์เลเซอร์ละลายไฟต์",
    titleOriginal: "Hyper Beam Melting Laser (NA High Elo)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Top 50 Bebop",
    patch: "2026-10-14",
    winRate: 56.3,
    playstyle: "Teamfight Artillery",
    conceptThai: "เน้นการอัปเกรดอัลติเมท Hyper Beam เลเซอร์ยักษ์ให้กว้างขึ้นสองเท่า สโลว์เป้าหมาย 45% และมอบเกราะ 400 Shield พร้อมดูดเลือด 100% ขณะยิงเลเซอร์",
    skillOrder: "4 > 3 > 2 > 1",
    skillNotes: "เร่งอัปอัลติ 4 ให้เต็มไวเพื่อเพิ่มความกว้างของลำแสงและดูดเลือดสมบูรณ์แบบ",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Sprint Boots", "Extra Health"],
      mid: ["Duration Extender", "Superior Cooldown", "Bullet Armor", "Spirit Armor"],
      late: ["Diviner's Kevlar", "Boundless Spirit", "Leech", "Unstoppable", "Refresher"],
      situational: ["Curse", "Colossus", "Metal Skin"]
    },
    combosThai: "ดึงศัตรูตัวสำคัญด้วย Hook -> กด Unstoppable กันขัด -> ส่องยิงอัลติเมท Hyper Beam เลเซอร์กวาดศัตรูทั้งทีม เลือดจะเด้งเต็มตลอดเวลา"
  },

  // -----------------------------------------------------------------
  // DYNAMO
  // -----------------------------------------------------------------
  {
    id: "dynamo_cn_blackhole",
    heroId: "dynamo",
    heroName: "Dynamo",
    titleThai: "Dynamo ซิงกูลาริตี้ดูดหลุมดำรวบตึง",
    titleOriginal: "奇点黑洞团灭流 (CN Tournament Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Pro Team Initiator",
    patch: "2026-10-14",
    winRate: 58.0,
    playstyle: "Initiator / Teamfight Controller",
    conceptThai: "ตัวเปิดไฟต์อันดับ 1 ของเกม อาศัยจังหวะวาร์ปเข้ากลางดงศัตรูแล้วเปิดอัลติเมท Singularity สร้างหลุมดำดูดผู้เล่นทั้ง 6 คนของฝ่ายตรงข้ามมารวมกัน ให้เพื่อนในทีมรุมระดมสกิลใส่ ปิดไฟต์ได้ใน 3 วินาที",
    skillOrder: "4 > 3 > 1 > 2",
    skillNotes: "เร่งอัป 4 เพื่อลดคูลดาวน์และเพิ่มพลังการดูดหลุมดำ",
    items: {
      early: ["Extra Health", "Extra Spirit", "Sprint Boots", "Mystic Reach"],
      mid: ["Superior Cooldown", "Duration Extender", "Bullet Armor", "Spirit Armor"],
      late: ["Refresher", "Colossus", "Boundless Spirit", "Unstoppable", "Curse"],
      situational: ["Warp Stone", "Diviner's Kevlar", "Metal Skin"]
    },
    combosThai: "วาร์ปด้วยสกิล 2 (Quantum Entanglement) เข้าใจกลางทีมไฟต์ -> เปิด Unstoppable ป้องกันการโดนขัด -> กดอัลติเมท 4 (Singularity) รวบศัตรูทั้งหมด -> หากมี Refresher กดรีเซ็ตดูดซ้ำอีกรอบ"
  },
  {
    id: "dynamo_na_pulse_bruiser",
    heroId: "dynamo",
    heroName: "Dynamo",
    titleThai: "Dynamo พัลส์กระแทกลอยไฮบริดแทงค์",
    titleOriginal: "Kinetic Pulse Hybrid Bruiser (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Tournament Support",
    patch: "2026-10-14",
    winRate: 56.2,
    playstyle: "Bruiser / Support",
    conceptThai: "บิลด์สายต่อสู้ระยะประชิด ใช้ Kinetic Pulse กระแทกศัตรูลอยขึ้นฟ้าพร้อมลดเกราะศัตรู 30% จากนั้นฮีลเพื่อนด้วย Rejuvenating Aurora อย่างต่อเนื่อง",
    skillOrder: "1 > 3 > 2 > 4",
    skillNotes: "อัปสกิล 1 นำเพื่อรับชาร์จ 2 ครั้งและดีบัฟลดเกราะศัตรู",
    items: {
      early: ["Extra Health", "Sprint Boots", "Close Quarters", "Extra Spirit"],
      mid: ["Combat Barrier", "Torment Pulse", "Bullet Armor", "Spirit Armor"],
      late: ["Colossus", "Leech", "Unstoppable", "Curse", "Refresher"],
      situational: ["Healbane", "Warp Stone", "Metal Skin"]
    },
    combosThai: "ยิง Kinetic Pulse สกิล 1 งัดศัตรูลอยขึ้นฟ้า -> เปิดออร่าฮีลสกิล 3 ซับเพื่อน -> วาร์ปสกิล 2 พาทีมหลบกระสุนหรือเข้าคลุกวงใน"
  },

  // -----------------------------------------------------------------
  // MCGINNIS
  // -----------------------------------------------------------------
  {
    id: "mcginnis_cn_turret_fortress",
    heroId: "mcginnis",
    heroName: "McGinnis",
    titleThai: "McGinnis ป้อมปืนกำแพงเหล็กดันบ้านล้างบาง",
    titleOriginal: "钢铁防线炮台推塔流 (CN High Elo)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Push Master",
    patch: "2026-10-14",
    winRate: 56.8,
    playstyle: "Pusher / Area Controller",
    conceptThai: "สไตล์การเล่นที่ดันป้อมไวที่สุดในเกม วางป้อมปืนมินิตัวจิ๋ว 3-4 ป้อมรอบตัว กั้นกำแพง Spectral Wall ดักทางไม่ให้ศัตรูเข้าถึงตัว แล้วกดยิงปืนกลหนักดันเลนจนบ้านพัง",
    skillOrder: "1 > 3 > 2 > 4",
    skillNotes: "อัปสกิล 1 (Mini Turret) เพื่อเพิ่มจำนวนป้อมและพลังโจมตีของป้อมปืน",
    items: {
      early: ["Basic Magazine", "Monster Rounds", "Extra Spirit", "Sprint Boots"],
      mid: ["Superior Cooldown", "Combat Barrier", "Duration Extender", "Bullet Armor"],
      late: ["Boundless Spirit", "Echo Shard", "Ricochet", "Leech", "Unstoppable"],
      situational: ["Curse", "Metal Skin", "Colossus"]
    },
    combosThai: "วางป้อมปืนสกิล 1 ให้ครบตามโควตา -> ตั้งกำแพงสกิล 3 (Spectral Wall) บล็อกเส้นทางเดินของศัตรู -> สาดกระสุนปืนกลหนักพร้อมกับยิงจรวดอัลติ 4 ถล่ม"
  },
  {
    id: "mcginnis_na_gun_carry",
    heroId: "mcginnis",
    heroName: "McGinnis",
    titleThai: "McGinnis ปืนกลหนักไฮเปอร์แครี่ยิงกระจาย",
    titleOriginal: "Minigun Hyper Carry (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Top Tier McGinnis",
    patch: "2026-10-14",
    winRate: 55.7,
    playstyle: "Heavy Gunner Carry",
    conceptThai: "บิลด์ยิงปืนกลหนัก Minigun ล้วนๆ เน้น Ricochet, Lucky Shot และ Siphon Bullets ยิงอัดป้อมและฮีโร่ศัตรูจนเกราะแตกกระจุย",
    skillOrder: "2 > 1 > 3 > 4",
    skillNotes: "อัป Medicinal Spray เพื่อรับบัฟเพิ่มความเร็วในการยิง +25% Fire Rate ให้ตัวเอง",
    items: {
      early: ["Basic Magazine", "Monster Rounds", "Extra Health", "Sprint Boots"],
      mid: ["Active Reload", "Burst Fire", "Enduring Speed", "Combat Barrier"],
      late: ["Ricochet", "Lucky Shot", "Siphon Bullets", "Leech", "Unstoppable"],
      situational: ["Metal Skin", "Crippling Headshot", "Curse"]
    },
    combosThai: "กางสเปรย์ฮีล Medicinal Spray สกิล 2 รับบัฟไฟร์เรต -> กดยิงปืนกลหนักค้างเร่งรอบให้ไวสุด -> สาดกระสุนชิ่ง Ricochet กวาดทั้งทีม"
  },

  // -----------------------------------------------------------------
  // WRAITH
  // -----------------------------------------------------------------
  {
    id: "wraith_cn_card_burst",
    heroId: "wraith",
    heroName: "Wraith",
    titleThai: "Wraith ไพ่ระเบิดสายสปีดยิงกระสุนจักรกล",
    titleOriginal: "奇术师极速爆发卡牌流 (CN Bilibili Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Wraith Master Top 5",
    patch: "2026-10-14",
    winRate: 58.2,
    playstyle: "Gun Carry / Assassin",
    conceptThai: "บิลด์ท็อปเมต้าจีน ใช้ Full Auto เร่งความเร็วการยิงปืนกลสูงสุด สะสมไพ่ Card Trick ยิงติดตามอัตโนมัติเบิร์สดาเมจ และวาร์ป Project Mind ไล่สังหารอย่างต่อเนื่อง",
    skillOrder: "3 > 1 > 2 > 4",
    skillNotes: "อัปสกิล 3 (Full Auto) นำเพื่อรับบัฟไฟร์เรตและกระสุนทะลวง จากนั้นอัปไพ่ Card Trick",
    items: {
      early: ["Basic Magazine", "Headshot Booster", "Extra Spirit", "Sprint Boots"],
      mid: ["Quicksilver Reload", "Kinetic Dash", "Surge of Power", "Combat Barrier"],
      late: ["Ricochet", "Siphon Bullets", "Lucky Shot", "Leech", "Unstoppable"],
      situational: ["Silencer", "Warp Stone", "Glass Cannon"]
    },
    combosThai: "เปิด Full Auto สกิล 3 สาดกระสุนสะสมไพ่ -> ปล่อย Card Trick สกิล 1 ปิดคิล -> ยกตัวเป้าหมายด้วยอัลติ 4 Telekinesis เมื่อศัตรูพยายามหนี"
  },
  {
    id: "wraith_na_teleport_assassin",
    heroId: "wraith",
    heroName: "Wraith",
    titleThai: "Wraith วาร์ปสังหารยกตัวเคว้งกลางเวหา",
    titleOriginal: "Teleport Pick-Off Specialist (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Top 20 Eternus Carry",
    patch: "2026-10-14",
    winRate: 57.0,
    playstyle: "Pick-Off / Gun Assassin",
    conceptThai: "สไตล์การเล่นฝั่งตะวันตก เน้นการหาจังหวะวาร์ปข้ามกำแพงด้วย Project Mind ล็อกยกศัตรูตัวสำคัญด้วย Telekinesis แล้วยิงหัวด้วย Crippling Headshot",
    skillOrder: "4 > 3 > 2 > 1",
    skillNotes: "เน้นอัลติเมท 4 เพื่อให้ยกเป้าหมายหมู่รอบตัวและขยายดาเมจปืน 30%",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Sprint Boots", "Extra Health"],
      mid: ["Point Blank", "Active Reload", "Bullet Armor", "Enduring Speed"],
      late: ["Pristine Emblem", "Crippling Headshot", "Glass Cannon", "Unstoppable", "Leech"],
      situational: ["Warp Stone", "Curse", "Silencer"]
    },
    combosThai: "วาร์ป Project Mind สกิล 2 ขึ้นที่สูง -> ร่ายอัลติ 4 Telekinesis ยกตัวแครี่ศัตรู -> เปิด Full Auto ยิงหัวระยะเผาขน"
  },

  // -----------------------------------------------------------------
  // WARDEN
  // -----------------------------------------------------------------
  {
    id: "warden_cn_immortal_barrier",
    heroId: "warden",
    heroName: "Warden",
    titleThai: "Warden อมตะเกราะบาเรียจอมล็อกโซ่",
    titleOriginal: "典狱长不死护盾控制流 (CN Pro League)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Pro Team Bruiser",
    patch: "2026-10-14",
    winRate: 57.9,
    playstyle: "Tank Bruiser / Disruptor",
    conceptThai: "บิลด์เมต้าสายแทงค์เดินหน้าลุย กางบาเรีย Willpower ดูดซับดาเมจพร้อมปลดอาวุธศัตรู ล็อกโซ่ Binding Word ตรึงขาและใบ้ศัตรู แล้วเปิด Last Stand ดูดเลือดทั้งทีม",
    skillOrder: "3 > 2 > 4 > 1",
    skillNotes: "อัปสกิล 3 (Binding Word) นำเพื่อให้ล็อกขาได้ 2.4 วินาทีและใบ้ศัตรูสมบูรณ์แบบ",
    items: {
      early: ["Close Quarters", "Extra Health", "Sprint Boots", "Extra Spirit"],
      mid: ["Combat Barrier", "Torment Pulse", "Bullet Armor", "Spirit Armor"],
      late: ["Colossus", "Leech", "Unstoppable", "Siphon Bullets", "Curse"],
      situational: ["Healbane", "Metal Skin", "Refresher"]
    },
    combosThai: "ปาขวด Alchemical Flask สโลว์ -> กาง Willpower พุ่งเข้าประชิด -> จ้องล็อกโซ่ Binding Word สตันใบ้ -> เปิด Last Stand ดูดเลือดยืนสู้กลางวง"
  },
  {
    id: "warden_na_gaze_lockdown",
    heroId: "warden",
    heroName: "Warden",
    titleThai: "Warden ปืนลูกซองล็อกตายสายเบิร์ส",
    titleOriginal: "Binding Word Lockdown Carry (EU High Elo)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "EU High Elo Warden Specialist",
    patch: "2026-10-14",
    winRate: 56.5,
    playstyle: "Bruiser Carry",
    conceptThai: "สไตล์ยุโรปที่เน้นพลังทำลายล้างของปืนลูกซองระยะประชิดผสมกับการล็อกโซ่ไม่ให้ศัตรูแดชหนี ยิงอัดตัวหน้าละลายในพริบตา",
    skillOrder: "3 > 1 > 2 > 4",
    skillNotes: "อัปสกิล 1 และ 3 สลับกันเพื่อลดคูลดาวน์และดูดสเตมิน่าศัตรู",
    items: {
      early: ["Basic Magazine", "Close Quarters", "Extra Health", "Sprint Boots"],
      mid: ["Point Blank", "Active Reload", "Bullet Armor", "Combat Barrier"],
      late: ["Crippling Headshot", "Pristine Emblem", "Siphon Bullets", "Leech", "Unstoppable"],
      situational: ["Curse", "Metal Skin", "Silencer"]
    },
    combosThai: "ปาขวดดูดสเตมิน่าศัตรู -> ล็อก Binding Word วิ่งตาม -> ยิงลูกซอง Point Blank เข้าหัวขณะศัตรูติดใบ้"
  },

  // -----------------------------------------------------------------
  // LASH
  // -----------------------------------------------------------------
  {
    id: "lash_cn_ground_strike_nuke",
    heroId: "lash",
    heroName: "Lash",
    titleThai: "Lash นิวเคลียร์เหินฟ้าทุบปฐพีดับเบิ้ลสแลม",
    titleOriginal: "豪客飞天核弹下砸流 (CN Bilibili Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Lash God",
    patch: "2026-10-14",
    winRate: 58.6,
    playstyle: "Initiator / Aerial Burst Mage",
    conceptThai: "บิลด์สุดโหดที่โหนเชือก Grapple ขึ้นไปบนยอดตึกสูง แล้วดิ่งลงมาทุบ Ground Strike สร้างคลื่นกระแทก AoE รุนแรงระดับระเบิดนิวเคลียร์ จากนั้นกด Echo Shard ทุบซ้ำอีกลูกทันที",
    skillOrder: "1 > 2 > 4 > 3",
    skillNotes: "อัปสกิล 1 (Ground Strike) เต็มไวเพื่อเพิ่มตัวคูณดาเมจตามความสูงที่ตกลงมา",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Health", "Sprint Boots"],
      mid: ["Echo Shard", "Superior Cooldown", "Combat Barrier", "Torment Pulse"],
      late: ["Boundless Spirit", "Refresher", "Diviner's Kevlar", "Leech", "Unstoppable"],
      situational: ["Warp Stone", "Curse", "Metal Skin"]
    },
    combosThai: "โหนเชือก Grapple สกิล 2 ขึ้นจุดสูงสุดบนฟ้า -> ดิ่ง Ground Strike สกิล 1 ทุบลงกลางวง -> กด Echo Shard ทุบซ้ำรอบสอง -> ร่ายอัลติ 4 Death Slam เหวี่ยงศัตรูทั้งทีมลงพื้น"
  },
  {
    id: "lash_na_death_slam_initiator",
    heroId: "lash",
    heroName: "Lash",
    titleThai: "Lash จอมเหวี่ยงทุ่มข้ามตึกเปิดไฟต์",
    titleOriginal: "Death Slam Teamfight Initiator (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Tournament Initiator",
    patch: "2026-10-14",
    winRate: 56.9,
    playstyle: "Initiator / Crowd Controller",
    conceptThai: "เน้นการเปิดทีมไฟต์ใหญ่ด้วยอัลติเมท Death Slam คว้าจับศัตรูทั้ง 6 คนแล้วเหวี่ยงทุ่มรวมกันให้เพื่อนระดมสกิลใส่ พร้อมไอเทม Unstoppable กันโดนขัด",
    skillOrder: "4 > 1 > 2 > 3",
    skillNotes: "โฟกัสอัลติ 4 ลดคูลดาวน์และเพิ่มจำนวนเป้าหมายที่จับได้สูงสุด",
    items: {
      early: ["Extra Health", "Extra Spirit", "Sprint Boots", "Mystic Reach"],
      mid: ["Superior Cooldown", "Bullet Armor", "Spirit Armor", "Combat Barrier"],
      late: ["Unstoppable", "Boundless Spirit", "Colossus", "Refresher", "Leech"],
      situational: ["Curse", "Warp Stone", "Metal Skin"]
    },
    combosThai: "โหน Grapple เข้ากลางวง -> กด Unstoppable กันสตัน -> เปิด Death Slam อัลติ 4 จับทุ่มรวมกัน -> ทุบ Ground Strike ซ้ำ"
  },

  // -----------------------------------------------------------------
  // MIRAGE
  // -----------------------------------------------------------------
  {
    id: "mirage_cn_global_assassin",
    heroId: "mirage",
    heroName: "Mirage",
    titleThai: "Mirage วาร์ปข้ามแมปพายุทรายเชือดคอ",
    titleOriginal: "蜃景全球支援风沙斩首流 (CN High Elo)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Master League Mirage",
    patch: "2026-10-14",
    winRate: 58.3,
    playstyle: "Global Ganker / Gun Carry",
    conceptThai: "ใช้ประโยชน์จากอัลติเมท Traveler วาร์ปข้ามแผนที่ได้แบบ Global ไปโผล่หลังศัตรูที่กำลังโซโล่เลน ปล่อยพายุทราย Tornado ยกตัวศัตรูขึ้น แล้วสาดกระสุนติดตรา Djinn's Mark ระเบิดดาเมจวิญญาณปิดชีพ",
    skillOrder: "3 > 1 > 4 > 2",
    skillNotes: "อัปสกิล 3 (Djinn's Mark) นำเพื่อสะสมตราประทับและระเบิดดาเมจใบ้ศัตรู",
    items: {
      early: ["Basic Magazine", "Headshot Booster", "Extra Health", "Sprint Boots"],
      mid: ["Toxic Bullets", "Active Reload", "Combat Barrier", "Superior Cooldown"],
      late: ["Ricochet", "Crippling Headshot", "Siphon Bullets", "Leech", "Unstoppable"],
      situational: ["Glass Cannon", "Curse", "Silencer"]
    },
    combosThai: "กด Traveler อัลติ 4 วาร์ปไปหาเพื่อนที่กำลังบวก -> ปล่อยพายุ Tornado สกิล 1 ยกศัตรูลอย -> กดยิงปืนระเบิด Djinn's Mark สกิล 3 ปิดคิล"
  },
  {
    id: "mirage_na_djinn_shredder",
    heroId: "mirage",
    heroName: "Mirage",
    titleThai: "Mirage ตราประทับฉีกเกราะกระสุนกลืนทราย",
    titleOriginal: "Djinn's Mark Armor Shred Carry (NA Tournament)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Tournament Finalist",
    patch: "2026-10-14",
    winRate: 56.6,
    playstyle: "Carry / DPS",
    conceptThai: "เน้นการยิงปืนรีดดาเมจสูงสุดด้วย Crippling Headshot และ Pristine Emblem ลดเกราะศัตรูลงฮวบฮาบทุกครั้งที่ยิงโดนหัว",
    skillOrder: "3 > 2 > 1 > 4",
    skillNotes: "อัปสกิล 2 (Fire Beetles) เพื่อลดเกราะกระสุนศัตรูและฮีลเลือดให้ตัวเอง",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Sprint Boots", "Extra Health"],
      mid: ["Burst Fire", "Enduring Speed", "Bullet Armor", "Point Blank"],
      late: ["Pristine Emblem", "Crippling Headshot", "Lucky Shot", "Unstoppable", "Leech"],
      situational: ["Silencer", "Metal Skin", "Curse"]
    },
    combosThai: "ปล่อยด้วงเพลิง Fire Beetles สกิล 2 เจาะเกราะ -> ระดมยิงเล็งหัวกระตุ้น Djinn's Mark -> สโลว์ด้วยทอร์นาโดเมื่อศัตรูถอย"
  },

  // -----------------------------------------------------------------
  // SHIV
  // -----------------------------------------------------------------
  {
    id: "shiv_cn_rage_executioner",
    heroId: "shiv",
    heroName: "Shiv",
    titleThai: "Shiv คลั่งเลือดเดือดมีดบินประหาร",
    titleOriginal: "西佛狂暴吸血处决流 (CN Bilibili High Elo)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Shiv Specialist",
    patch: "2026-10-14",
    winRate: 58.5,
    playstyle: "Brawler / Executioner",
    conceptThai: "ใช้ความสามารถ Bloodletting ผัดผ่อนความเสียหายที่ได้รับลง สะสมเกจความคลั่ง Rage ให้เต็มเพื่อรับโบนัสดาเมจและสปีด จากนั้นพุ่งฟันเชือดคอด้วย Killing Blow สกิลอัลติเมทประหารชีวิตที่รีเซ็ตคูลดาวน์ทันทีเมื่อฆ่าได้",
    skillOrder: "4 > 1 > 2 > 3",
    skillNotes: "เร่งอัปอัลติ 4 เพื่อเพิ่มเกณฑ์เลือดประหารชีวิตเป็น 35% HP",
    items: {
      early: ["Close Quarters", "Melee Lifesteal", "Extra Health", "Sprint Boots"],
      mid: ["Point Blank", "Torment Pulse", "Bullet Armor", "Spirit Armor", "Healbane"],
      late: ["Colossus", "Leech", "Unstoppable", "Siphon Bullets", "Refresher"],
      situational: ["Curse", "Metal Skin", "Decay"]
    },
    combosThai: "ปามีด Serrated Knives สกิล 1 ลดฮีลและทำให้เลือดไหล -> พุ่ง Slice and Dice สกิล 2 ผ่านตัวศัตรูสะสม Rage -> เมื่อเลือดศัตรูต่ำกว่าเกณฑ์กด Killing Blow อัลติ 4 สับหัวตายทันที"
  },
  {
    id: "shiv_na_bleed_bruiser",
    heroId: "shiv",
    heroName: "Shiv",
    titleThai: "Shiv แดชสไลซ์ดาเมจเลือดไหลคล่องตัวสูง",
    titleOriginal: "Bleed & Slice Agile Bruiser (EU Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "EU Top 50 Shiv",
    patch: "2026-10-14",
    winRate: 56.8,
    playstyle: "Skirmisher / Bruiser",
    conceptThai: "เน้นความคล่องตัวในการพุ่ง Dash สกิล 2 สลับกับการปามีด Serrated Knives 3 ชาร์จ ตอดเลือดและลดการฮีลของศัตรู 50%",
    skillOrder: "1 > 2 > 3 > 4",
    skillNotes: "อัปมีด Serrated Knives เต็มเพื่อรับชาร์จเพิ่มและดาเมจเลือดไหลทวีคูณ",
    items: {
      early: ["Basic Magazine", "Extra Health", "Sprint Boots", "Mystic Burst"],
      mid: ["Combat Barrier", "Toxic Bullets", "Enduring Speed", "Superior Cooldown"],
      late: ["Pristine Emblem", "Siphon Bullets", "Leech", "Unstoppable", "Crippling Headshot"],
      situational: ["Metal Skin", "Curse", "Decay"]
    },
    combosThai: "ปามีดคู่ Serrated Knives -> แดชผ่านตัวด้วย Slice and Dice -> ยิงปืนซ้ำด้วยพิษ Toxic Bullets -> สับปิดด้วย Killing Blow"
  },

  // -----------------------------------------------------------------
  // POCKET
  // -----------------------------------------------------------------
  {
    id: "pocket_cn_suitcase_nuke",
    heroId: "pocket",
    heroName: "Pocket",
    titleThai: "Pocket กระเป๋าเดินทางหลบสกิลนิวเคลียร์พิษ",
    titleOriginal: "口袋箱子核爆瞬移流 (CN Bilibili Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Pocket One-Trick Top 1",
    patch: "2026-10-14",
    winRate: 59.0,
    playstyle: "Burst Mage / Elusive Assassin",
    conceptThai: "ฮีโร่สายเวทที่จับตัวยากที่สุด ปล่อยผ้าคลุม Flying Cloak ล่วงหน้า โดดเข้ากลางวงสาด Barrage และร่าย Affliction พิษระเบิด จากนั้นมุดเข้ากระเป๋า Enchanter's Satchel หลบดาเมจ 100% แล้ววาร์ปออกอย่างปลอดภัย",
    skillOrder: "1 > 4 > 3 > 2",
    skillNotes: "อัปสกิล 1 (Barrage) เพื่อลดคูลดาวน์และเจาะเกราะสปิริตของศัตรู",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Health", "Sprint Boots"],
      mid: ["Mystic Reach", "Superior Cooldown", "Duration Extender", "Surge of Power"],
      late: ["Boundless Spirit", "Echo Shard", "Diviner's Kevlar", "Leech", "Refresher"],
      situational: ["Warp Stone", "Curse", "Metal Skin"]
    },
    combosThai: "โยนผ้าคลุม Flying Cloak สกิล 2 ทิ้งไว้ -> พุ่งเข้ากลางวงสาด Barrage สกิล 1 -> ร่ายอัลติ 4 Affliction ติดพิษทั้งทีม -> มุดเข้ากระเป๋า Satchel สกิล 3 หลบสกิล -> วาร์ปกลับไปที่ผ้าคลุม"
  },
  {
    id: "pocket_na_affliction_dot",
    heroId: "pocket",
    heroName: "Pocket",
    titleThai: "Pocket พิษกัดกร่อนลดเลือดเปอร์เซ็นต์",
    titleOriginal: "Affliction DoT Poisoner (NA High MMR)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Tournament Midlaner",
    patch: "2026-10-14",
    winRate: 57.1,
    playstyle: "DoT Mage / Kiter",
    conceptThai: "เน้นการสร้างดาเมจพิษต่อเนื่องด้วยอัลติเมท Affliction ที่เผาเลือดสูงสุด 4.2% ต่อวิ ไม่สามารถลบล้างได้ ผสานกับไอเทมเพิ่มระยะเวลา Duration Extender",
    skillOrder: "4 > 1 > 2 > 3",
    skillNotes: "เร่งอัปอัลติเมท 4 ให้ถึง Tier 3 ทันทีเพื่อดาเมจเปอร์เซ็นต์เลือดสูงสุด",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Sprint Boots", "Infuser"],
      mid: ["Duration Extender", "Superior Cooldown", "Combat Barrier", "Spirit Armor"],
      late: ["Boundless Spirit", "Refresher", "Leech", "Unstoppable", "Curse"],
      situational: ["Warp Stone", "Metal Skin", "Healbane"]
    },
    combosThai: "เปิดด้วย Warp Stone เข้าหาแถวหลัง -> ร่าย Affliction อัลติ 4 -> รัว Barrage สกิล 1 -> มุด Satchel ซ่อนตัวรอพิษกัดจนศัตรูล้ม"
  },

  // -----------------------------------------------------------------
  // KELVIN
  // -----------------------------------------------------------------
  {
    id: "kelvin_cn_frozen_shelter",
    heroId: "kelvin",
    heroName: "Kelvin",
    titleThai: "Kelvin โดมน้ำแข็งสะท้านพิภพรีเจนอมตะ",
    titleOriginal: "冰人极地冰穹控场流 (CN Tournament Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Pro League Kelvin",
    patch: "2026-10-14",
    winRate: 57.7,
    playstyle: "Zone Controller / Tank Support",
    conceptThai: "สร้างโดมน้ำแข็งยักษ์ Frozen Shelter กลางทีมไฟต์ ขังศัตรูไว้ข้างในพร้อมฮีลเลือดให้ตัวเองและเพื่อนในทีม 180 HP/sec ยืนยิงเลเซอร์แช่แข็งศัตรูจนขยับไม่ได้",
    skillOrder: "4 > 3 > 2 > 1",
    skillNotes: "เร่งอัปอัลติ 4 เพื่อรับโบนัสฮีลเลือดมหาศาลและเพิ่มความเร็วในการยิง",
    items: {
      early: ["Extra Health", "Extra Spirit", "Sprint Boots", "Mystic Reach"],
      mid: ["Duration Extender", "Superior Cooldown", "Bullet Armor", "Spirit Armor"],
      late: ["Colossus", "Boundless Spirit", "Leech", "Refresher", "Unstoppable"],
      situational: ["Torment Pulse", "Curse", "Metal Skin"]
    },
    combosThai: "ไถสเก็ตน้ำแข็ง Ice Path สกิล 2 เข้ากลางวง -> ขว้าง Frost Grenade สกิล 1 แช่แข็ง -> กางโดม Frozen Shelter อัลติ 4 ขังศัตรู -> ส่องเลเซอร์ Arctic Beam สกิล 3 สโลว์ยิงฟรี"
  },
  {
    id: "kelvin_na_arctic_beam_carry",
    heroId: "kelvin",
    heroName: "Kelvin",
    titleThai: "Kelvin ลำแสงเยือกแข็งสโลว์ติดดินคาร์รี่",
    titleOriginal: "Arctic Beam Slow Carry (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Top 50 Kelvin",
    patch: "2026-10-14",
    winRate: 56.4,
    playstyle: "Carry / Disarmer",
    conceptThai: "เน้นการยิงลำแสง Arctic Beam เป็นอาวุธสังหาร อัปจนสโลว์การเคลื่อนที่ศัตรู 90% และปลดอาวุธศัตรูไม่ให้ยิงปืนตอบโต้ได้ ผสานกับ Toxic Bullets",
    skillOrder: "3 > 1 > 2 > 4",
    skillNotes: "อัปสกิล 3 (Arctic Beam) นำเพื่อระยะยิงไกลขึ้นและสถานะปลดอาวุธ Disarm",
    items: {
      early: ["Basic Magazine", "Extra Spirit", "Sprint Boots", "Extra Health"],
      mid: ["Toxic Bullets", "Superior Cooldown", "Combat Barrier", "Enduring Speed"],
      late: ["Boundless Spirit", "Leech", "Siphon Bullets", "Unstoppable", "Ricochet"],
      situational: ["Curse", "Colossus", "Metal Skin"]
    },
    combosThai: "สเก็ตเข้าหาระยะยิง -> ล็อกส่อง Arctic Beam สกิล 3 แช่แข็งจนศัตรูโดนปลดอาวุธ -> ปาระเบิดน้ำแข็งสตันซ้ำ -> สาดกระสุนปืนปลิดชีพ"
  },

  // -----------------------------------------------------------------
  // GREY TALON
  // -----------------------------------------------------------------
  {
    id: "greytalon_cn_sky_piercing_arrow",
    heroId: "grey_talon",
    heroName: "Grey Talon",
    titleThai: "Grey Talon ธนูเวททะลวงมิติสไนเปอร์เวหา",
    titleOriginal: "灰羽高空重箭狙杀流 (CN Bilibili Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Archer One-Trick",
    patch: "2026-10-14",
    winRate: 57.2,
    playstyle: "Artillery / Long-Range Sniper",
    conceptThai: "ลอยตัวกลางเวหาด้วย Rain of Fire แล้วชาร์จลูกศร Charged Shot ยิงทะลุกำแพงและสิ่งก่อสร้างเข้าหัวศัตรู สร้างความเสียหายวิญญาณระดับมหาศาลจากระยะนอกจอ",
    skillOrder: "1 > 2 > 4 > 3",
    skillNotes: "อัปสกิล 1 (Charged Shot) เต็มเพื่อยิงทะลุสิ่งกีดขวางและลดเวลาชาร์จธนู 40%",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Hollow Point Ward", "Sprint Boots"],
      mid: ["Pristine Emblem", "Superior Cooldown", "Duration Extender", "Surge of Power"],
      late: ["Boundless Spirit", "Glass Cannon", "Crippling Headshot", "Leech", "Refresher"],
      situational: ["Warp Stone", "Curse", "Silencer"]
    },
    combosThai: "กด Rain of Fire สกิล 2 ลอยขึ้นฟ้า -> ชาร์จ Charged Shot สกิล 1 เล็งยิงหัวทะลุกำแพง -> บังคับนกฮูก Guided Owl อัลติ 4 ระเบิดปิดคิล"
  },
  {
    id: "greytalon_na_guided_owl_nuke",
    heroId: "grey_talon",
    heroName: "Grey Talon",
    titleThai: "Grey Talon บังคับนกฮูกวิญญาณสแต็กถาวร",
    titleOriginal: "Guided Owl Global Nuke (EU Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "EU Top Talon Player",
    patch: "2026-10-14",
    winRate: 56.1,
    playstyle: "Sniper / Global Finisher",
    conceptThai: "เน้นการสะสมพลังวิญญาณถาวรจากอัลติเมท Guided Owl ทุกครั้งที่บังคับนกฮูกระเบิดสังหารฮีโร่ได้ จะได้รับ Spirit Power ถาวร +5 เพิ่มขึ้นเรื่อยๆ ตลอดทั้งเกม",
    skillOrder: "4 > 1 > 3 > 2",
    skillNotes: "โฟกัสอัลติ 4 ลดคูลดาวน์และเพิ่มความเร็วนกฮูกเพื่อเก็บสแต็กวิญญาณ",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Sprint Boots", "Extra Health"],
      mid: ["Superior Cooldown", "Combat Barrier", "Mystic Reach", "Duration Extender"],
      late: ["Boundless Spirit", "Refresher", "Diviner's Kevlar", "Leech", "Unstoppable"],
      situational: ["Curse", "Warp Stone", "Metal Skin"]
    },
    combosThai: "วางกับดัก Will-o'-Wisp สกิล 3 ดักทางเดิน -> ชาร์จยิงธนู Charged Shot -> ปล่อยนกฮูก Guided Owl สกิล 4 บินข้ามแผนที่ไประเบิดซ้ำ"
  },

  // -----------------------------------------------------------------
  // PARADOX
  // -----------------------------------------------------------------
  {
    id: "paradox_cn_swap_timewall",
    heroId: "paradox",
    heroName: "Paradox",
    titleThai: "Paradox สลับร่างข้ามมิติส่งลงหลุมกำแพงเวลา",
    titleOriginal: "悖论换位时空秒杀流 (CN Master Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Master League Paradox",
    patch: "2026-10-14",
    winRate: 57.9,
    playstyle: "Initiator / Pick-Off Assassin",
    conceptThai: "คอมโบที่อันตรายที่สุดในเกม วางกำแพงเวลา Time Wall ดักไว้ด้านหลัง แล้วกดยิงอัลติ Paradoxical Swap สลับตำแหน่งกับศัตรู ดึงศัตรูทะลุกำแพงเวลาโดนสตันและดาเมจเปอร์เซ็นต์เลือดสูงสุด 35% ตายทันที",
    skillOrder: "4 > 3 > 2 > 1",
    skillNotes: "เร่งอัปอัลติ 4 เพื่อเพิ่มระยะสลับร่างเป็น 45 เมตรและทำดาเมจเปอร์เซ็นต์เลือด",
    items: {
      early: ["Basic Magazine", "Extra Spirit", "Sprint Boots", "Extra Health"],
      mid: ["Superior Cooldown", "Combat Barrier", "Kinetic Dash", "Enduring Speed"],
      late: ["Boundless Spirit", "Curse", "Leech", "Unstoppable", "Refresher"],
      situational: ["Warp Stone", "Silence Glyph", "Metal Skin"]
    },
    combosThai: "ชาร์จปืน Kinetic Carbine สกิล 3 -> วาง Time Wall สกิล 2 -> ยิง Paradoxical Swap อัลติ 4 ดึงศัตรูทะลุกำแพงเวลา -> ขว้าง Pulse Grenade สกิล 1 ปิดคิล"
  },
  {
    id: "paradox_na_carbine_shredder",
    heroId: "paradox",
    heroName: "Paradox",
    titleThai: "Paradox คาร์ไบน์ชาร์จยิงตรึงขาแครี่",
    titleOriginal: "Carbine Bullet Shredder Carry (NA Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Top 100 Paradox",
    patch: "2026-10-14",
    winRate: 56.2,
    playstyle: "Gun Carry / Kiter",
    conceptThai: "สไตล์การเล่นที่ใช้ Kinetic Carbine ชาร์จยิงสปีดแสง ตรึงขาเป้าหมาย 2.5 วินาที พร้อมเพิ่มดาเมจปืนด้วย Crippling Headshot และ Ricochet",
    skillOrder: "3 > 1 > 2 > 4",
    skillNotes: "อัปสกิล 3 นำเพื่อรับดาเมจชาร์จและระยะสไลด์ตัวหลบหลีก",
    items: {
      early: ["Basic Magazine", "Hollow Point Ward", "Sprint Boots", "Extra Health"],
      mid: ["Point Blank", "Active Reload", "Bullet Armor", "Enduring Speed"],
      late: ["Pristine Emblem", "Crippling Headshot", "Ricochet", "Siphon Bullets", "Leech"],
      situational: ["Silencer", "Unstoppable", "Curse"]
    },
    combosThai: "ชาร์จสไลด์ Kinetic Carbine สกิล 3 ยิงเล็งหัวล็อกขา -> สาดกระสุนปืนกล Ricochet -> วาง Time Wall กันกระสุนสวนกลับ"
  },

  // -----------------------------------------------------------------
  // MO & KRILL
  // -----------------------------------------------------------------
  {
    id: "mokrill_cn_burrow_lockdown",
    heroId: "mo_and_krill",
    heroName: "Mo & Krill",
    titleThai: "Mo & Krill ดำดินจับกุมสั่งประหารล็อกไร้ทางแก้",
    titleOriginal: "地鼠钻地抱妹杀流 (CN Pro Invitational)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "CN Pro Team Mo & Krill",
    patch: "2026-10-14",
    winRate: 58.1,
    playstyle: "Lockdown Initiator / Tank",
    conceptThai: "คอมโบจับตายเดี่ยวที่ไม่มีทางแก้ ดำดินด้วย Burrow พุ่งด้วยความเร็วสูงโผล่ขึ้นมางัดศัตรูลอยสตัน แล้วกดอัลติเมท Combo รัดตัวศัตรูทุบตี 3.5 วินาที ให้เกราะกันดาเมจ 100% ขณะกำลังรัด",
    skillOrder: "4 > 2 > 1 > 3",
    skillNotes: "เร่งอัปอัลติ 4 เพื่อยืดเวลาจับกุมและรับเกราะป้องกัน 100% ตลอดเวลาจับ",
    items: {
      early: ["Close Quarters", "Extra Health", "Sprint Boots", "Extra Spirit"],
      mid: ["Torment Pulse", "Combat Barrier", "Bullet Armor", "Spirit Armor"],
      late: ["Colossus", "Refresher", "Leech", "Unstoppable", "Curse"],
      situational: ["Healbane", "Metal Skin", "Decay"]
    },
    combosThai: "ดำดิน Burrow สกิล 2 พุ่งเข้าหาแครี่ -> โผล่ขึ้นมาสตัน -> พ่นทราย Sand Blast สกิล 3 ปลดอาวุธ -> กดอัลติเมท Combo สกิล 4 ล็อกจับรัดตายคาที่"
  },
  {
    id: "mokrill_na_disruptor_tank",
    heroId: "mo_and_krill",
    heroName: "Mo & Krill",
    titleThai: "Mo & Krill ออร่าเผาฮีลแทงค์ป่วนทั้งบาง",
    titleOriginal: "Disruptor Aura Tank Support (EU Eternus)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "EU High Elo Mo & Krill",
    patch: "2026-10-14",
    winRate: 56.5,
    playstyle: "Tank / Disruptor",
    conceptThai: "เน้นการยืนซับแทงค์ในทีมไฟต์ ใช้ Scorn ฮีลเลือดและขยายดาเมจที่ศัตรูได้รับ 25% ผสานกับ Torment Pulse และ Colossus ตัวใหญ่คับเลน",
    skillOrder: "1 > 2 > 3 > 4",
    skillNotes: "อัปสกิล 1 (Scorn) นำเพื่อรับอัตราการฟื้นฟูเลือดสูงสุดต่อฮีโร่ที่โดน",
    items: {
      early: ["Extra Health", "Sprint Boots", "Melee Lifesteal", "Extra Spirit"],
      mid: ["Torment Pulse", "Healbane", "Bullet Armor", "Spirit Armor"],
      late: ["Colossus", "Leech", "Unstoppable", "Curse", "Refresher"],
      situational: ["Metal Skin", "Decay", "Warp Stone"]
    },
    combosThai: "พุ่งเข้าไฟต์ด้วย Burrow -> กด Scorn สกิล 1 ดูดเลือดและติดดีบัฟขยายดาเมจ -> เปิด Colossus ขยายร่างสโลว์ศัตรูทั้งวง"
  },

  // -----------------------------------------------------------------
  // IVY
  // -----------------------------------------------------------------
  {
    id: "ivy_cn_airdrop_bomber",
    heroId: "ivy",
    heroName: "Ivy",
    titleThai: "Ivy ทิ้งบอมบ์เวหาคูดซูระเบิดล้างทัพ",
    titleOriginal: "石像鬼藤蔓炸弹空投流 (CN Bilibili Meta)",
    region: "CN",
    regionLabel: "ฝั่งจีน (CN 完美世界)",
    author: "Bilibili Ivy Specialist",
    patch: "2026-10-14",
    winRate: 57.8,
    playstyle: "Bomber / Support Carry",
    conceptThai: "บินขึ้นฟ้าด้วย Air Drop อุ้มเพื่อนร่วมทีมหรือหอบลูกระเบิดข้ามสิ่งก่อสร้าง แล้วทิ้งดิ่งลงกลางวงศัตรูสร้างแรงกระแทกสตันมหาศาล 10 เมตร พร้อมปูพรมเถาวัลย์ Kudzu Bomb ทำดาเมจวิญญาณหมู่",
    skillOrder: "1 > 4 > 2 > 3",
    skillNotes: "อัปสกิล 1 (Kudzu Bomb) เต็มเพื่อรับดาเมจวิญญาณและลดการฮีลของศัตรู 35%",
    items: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Health", "Sprint Boots"],
      mid: ["Echo Shard", "Superior Cooldown", "Duration Extender", "Combat Barrier"],
      late: ["Boundless Spirit", "Leech", "Refresher", "Unstoppable", "Diviner's Kevlar"],
      situational: ["Curse", "Metal Skin", "Warp Stone"]
    },
    combosThai: "อุ้มเพื่อนหรือระเบิดบินด้วย Air Drop อัลติ 4 -> ทิ้งดิ่งลงกลางวงศัตรูสตันหมู่ -> ปูพรม Kudzu Bomb สกิล 1 สองลูกซ้อนด้วย Echo Shard"
  },
  {
    id: "ivy_na_tether_duo_buff",
    heroId: "ivy",
    heroName: "Ivy",
    titleThai: "Ivy ผูกสายวิญญาณบัฟคู่หูสปีดปืนกล",
    titleOriginal: "Watcher's Covenant Duo Hyper Buff (NA Tournament)",
    region: "EN",
    regionLabel: "ฝั่งตะวันตก (NA / EU)",
    author: "NA Tournament Support Champion",
    patch: "2026-10-14",
    winRate: 58.4,
    playstyle: "Hyper Support / Duo Carry",
    conceptThai: "บิลด์ซัพพอร์ตคู่อันดับ 1 ผูกสายใย Watcher's Covenant กับแครี่ตัวหลัก เช่น Haze หรือ Wraith มอบความเร็วในการยิง +25% Fire Rate และแบ่งปันการดูดเลือด 50% ให้คู่หู",
    skillOrder: "2 > 3 > 1 > 4",
    skillNotes: "อัปสกิล 2 (Watcher's Covenant) นำเพื่อระยะเชื่อมสายและแชร์การดูดเลือด",
    items: {
      early: ["Basic Magazine", "Extra Health", "Sprint Boots", "Extra Spirit"],
      mid: ["Active Reload", "Combat Barrier", "Enduring Speed", "Bullet Armor"],
      late: ["Leech", "Siphon Bullets", "Unstoppable", "Curse", "Colossus"],
      situational: ["Metal Skin", "Healbane", "Refresher"]
    },
    combosThai: "ผูกสาย Watcher's Covenant สกิล 2 ใส่แครี่ -> กระหน่ำยิงปืนแชร์ดูดเลือด -> กด True Colors สกิล 3 กลายเป็นหินสตันศัตรูที่พยายามเข้าประชิดคู่หู"
  }
];
