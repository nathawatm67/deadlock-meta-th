// ===================================================================
// Deadlock Meta Thailand — 39 Heroes Dataset
// Patch: 2026-10-14 Minor Patch
// Zero Emojis Policy
// ===================================================================

export const heroesData = [
  // S+ TIER
  {
    id: "graves",
    name: "Graves",
    thaiName: "เกรฟส์",
    role: "Carry / Brawler",
    tier: "S+",
    winRate: 57.69,
    winRateDelta: 1.02,
    pickRate: 43.15,
    pickRateDelta: 0.80,
    matchesWon: "223.6K",
    matchesLost: "164.0K",
    descriptionThai: "ฮีโร่สายยิงระยะประชิดด้วยปืนลูกซองพลังทำลายล้างสูง มีความทนทานและความคล่องตัวในการพุ่งประชิดเป้าหมาย สามารถเคลียร์เวฟและโซโล่คิลศัตรูได้อย่างรวดเร็ว ครองอันดับ 1 Win Rate ในแพตช์ปัจจุบัน",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Scatter Shot", cd: "8s", desc: "ยิงกระสุนลูกซองกระจายสร้างความเสียหายกายภาพรุนแรงในระยะใกล้และลดเกราะศัตรู" },
      { num: 2, name: "Smoke Screen", cd: "18s", desc: "ขว้างระเบิดควันบดบังทัศนวิสัยของศัตรูและทำให้เคลื่อนที่ช้าลง" },
      { num: 3, name: "Quickdraw Dash", cd: "12s", desc: "พุ่งตัวไปข้างหน้าพร้อมรีโหลดกระสุนทันทีและเพิ่มพลังป้องกันบัฟชั่วคราว" },
      { num: 4, name: "Collateral Impact", cd: "75s", desc: "อัลติเมท: ยิงระเบิดมวลวิญญาณระเบิดเป็นวงกว้าง สร้างความเสียหายมหาศาลและผลักศัตรูกระเด็น" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Hollow Point Ward", "Extra Health", "Sprint Boots"],
      mid: ["Point Blank", "Kinetic Dash", "Bullet Armor", "Combat Barrier"],
      late: ["Pristine Emblem", "Crippling Headshot", "Leech", "Unstoppable"],
      situational: ["Curse", "Debuff Remover", "Slowing Hex"]
    },
    strengths: ["ดาเมจเบิร์สระยะประชิดรุนแรงที่สุดในเกม", "ทนทานและพุ่งเข้าออกไฟต์ได้ดี", "เคลียร์ครีปและดันเลนไวมาก"],
    weaknesses: ["ระยะยิงจำกัด ต้องเข้าประชิด", "แพ้การถูกรุม CC ระยะไกล", "ต้องบริหารกระสุนในแมกกาซีนให้แม่นยำ"],
    counters: { strongAgainst: ["Abrams", "Kelvin", "Viscous"], weakAgainst: ["Vindicta", "Grey Talon", "Paradox"] }
  },
  {
    id: "rat_king",
    name: "Rat King",
    thaiName: "แรท คิง",
    role: "Ganker / Disruptor",
    tier: "S+",
    winRate: 56.55,
    winRateDelta: -1.27,
    pickRate: 62.92,
    pickRateDelta: -10.66,
    matchesWon: "319.6K",
    matchesLost: "245.6K",
    descriptionThai: "จอมป่วนแห่งท่อน้ำทิ้ง มีความสามารถในการเรียกลูกสมุนหนูเข้าก่อกวน กัดกร่อนสเตตัสศัตรู และดำดินเคลื่อนที่อย่างรวดเร็ว มี Pick Rate สูงเป็นอันดับต้นๆ ของเซิร์ฟเวอร์",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Swarm Call", cd: "10s", desc: "ปล่อยฝูงหนูเข้ากัดแทะเป้าหมาย สร้างดาเมจต่อเนื่องและลดความเร็วโจมตี" },
      { num: 2, name: "Toxic Trail", cd: "14s", desc: "ทิ้งรอยพิษตามทางเดิน ศัตรูที่เหยียบจะติดสถานะเน่าเปื่อยเสียเลือดเรื่อยๆ" },
      { num: 3, name: "Burrow Ambush", cd: "16s", desc: "ดำลงใต้พื้นดินเพิ่มสปีดและลอบโผล่ขึ้นมาสตันเป้าหมาย" },
      { num: 4, name: "Plague Eruption", cd: "85s", desc: "อัลติเมท: ระเบิดโรคระบาดครั้งใหญ่ สตัฟฟ์พิษกระจายใส่ศัตรูทุกคนในรัศมีพร้อมลดฮีล 50%" }
    ],
    itemBuilds: {
      early: ["Spirit Strike", "Infuser", "Extra Stamina", "Mystic Burst"],
      mid: ["Decay", "Torment Pulse", "Enduring Speed", "Cooldown Reduction"],
      late: ["Boundless Spirit", "Ethereal Shift", "Diviner's Kevlar", "Escalating Exposure"],
      situational: ["Knockdown", "Silence Glyph", "Metal Skin"]
    },
    strengths: ["ความสามารถในการลอบสังหารและตัดกำลังศัตรู", "ลดอัตราการฟื้นฟูเลือดของทีมตรงข้ามได้ดีเยี่ยม", "หนีการจับกุมได้ง่ายด้วยสกิลดำดิน"],
    weaknesses: ["เลือดพื้นฐานน้อย", "แพ้ไอเทมล้างดีบัฟ (Debuff Remover)", "ต้องพึ่งพาจังหวะคูลดาวน์สกิล"],
    counters: { strongAgainst: ["Seven", "Lady Geist", "Infernus"], weakAgainst: ["Wraith", "Yamato", "Pocket"] }
  },
  {
    id: "paige",
    name: "Paige",
    thaiName: "เพจ",
    role: "Support / Controller",
    tier: "S+",
    winRate: 55.83,
    winRateDelta: -1.07,
    pickRate: 31.57,
    pickRateDelta: -4.75,
    matchesWon: "158.3K",
    matchesLost: "125.3K",
    descriptionThai: "ผู้คุมกฎแห่งมิติวิญญาณ มีสกิลกักขังศัตรู เสริมเกราะป้องกันให้เพื่อนร่วมทีม และหยุดยั้งไฟต์ศัตรูได้อย่างเฉียบขาด เหมาะอย่างยิ่งสำหรับการเล่นเป็นทีมไฟต์หลัก",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Rift Shackle", cd: "12s", desc: "ผูกมัดศัตรูไว้กับพื้น หากพยายามเดินหนีจะถูกกระชากกลับมาพร้อมรับดาเมจ" },
      { num: 2, name: "Aegis Projection", cd: "15s", desc: "มอบบาเรียดูดซับความเสียหายและบัฟความเร็วเดินให้เพื่อนร่วมทีม" },
      { num: 3, name: "Static Field", cd: "20s", desc: "สร้างสนามพลังรบกวนขัดจังหวะการร่ายสกิลของศัตรูในพื้นที่" },
      { num: 4, name: "Chronosphere Lockdown", cd: "90s", desc: "อัลติเมท: ขังพื้นที่ทรงกลมขนาดใหญ่ หยุดการกระทำของทุกคนที่อยู่ภายใน ยกเว้นยูนิตพันธมิตร" }
    ],
    itemBuilds: {
      early: ["Healing Rite", "Extra Spirit", "Extra Stamina", "Restorative Locket"],
      mid: ["Rescue Beam", "Divine Barrier", "Superior Cooldown", "Combat Barrier"],
      late: ["Echo Shard", "Refresher", "Colossus", "Curse"],
      situational: ["Spellbreaker", "Debuff Reducer", "Warp Stone"]
    },
    strengths: ["ควบคุมทีมไฟต์ได้เด็ดขาดที่สุดตัวหนึ่งในเกม", "ช่วยเหลือเพื่อนร่วมเลนได้มีประสิทธิภาพ", "พลิกสถานการณ์การบุกของศัตรูได้ดี"],
    weaknesses: ["ดาเมจเดี่ยวสังหารศัตรูเองค่อนข้างต่ำ", "เคลื่อนที่ช้าเมื่อไม่มีสกิลช่วย", "อัลติเมทต้องอาศัยทีมเวิร์กเข้าประสาน"],
    counters: { strongAgainst: ["Haze", "Bebop", "Lash"], weakAgainst: ["Shiv", "Calico", "Drifter"] }
  },

  // S TIER
  {
    id: "victor",
    name: "Victor",
    thaiName: "วิกเตอร์",
    role: "Initiator / Tank",
    tier: "S",
    winRate: 55.04,
    winRateDelta: 1.61,
    pickRate: 29.22,
    pickRateDelta: 0.20,
    matchesWon: "144.5K",
    matchesLost: "118.0K",
    descriptionThai: "จักรกลจอมพลังแถวหน้า มีเกราะหนาพิเศษพร้อมหมัดพลังไอพ่นที่สามารถกระแทกแนวรับศัตรูให้แตกกระจายและเปิดไฟต์ได้อย่างดุดัน",
    skillPriority: "1 > 2 > 4 > 3",
    abilities: [
      { num: 1, name: "Piston Slam", cd: "7s", desc: "ทุบพื้นสร้างคลื่นสั่นสะเทือนทำดาเมจและลดเกราะกระสุนศัตรู" },
      { num: 2, name: "Steam Charge", cd: "14s", desc: "เร่งเครื่องพุ่งชนเป้าหมาย ผลักศัตรูไปชนกำแพงสตัน 1.5 วินาที" },
      { num: 3, name: "Overheat Armor", cd: "22s", desc: "ปล่อยไอร้อนดูดซับความเสียหาย 35% และสะท้อนดาเมจใส่ศัตรูรอบข้าง" },
      { num: 4, name: "Grand Overhaul", cd: "80s", desc: "อัลติเมท: เข้าสู่โหมดโอเวอร์ไดรฟ์ เพิ่มขนาดตัว เลือดสูงสุด พลังตี และสถานะป้องกัน CC ชั่วขณะ" }
    ],
    itemBuilds: {
      early: ["Melee Lifesteal", "Extra Health", "Sprint Boots", "Monster Rounds"],
      mid: ["Torment Pulse", "Bullet Armor", "Spirit Armor", "Healbane"],
      late: ["Colossus", "Phantom Strike", "Leech", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Reactive Barrier"]
    },
    strengths: ["เปิดไฟต์และดึงความสนใจได้ดีเยี่ยม", "ทนทานรับดาเมจได้มหาศาล", "CC ขัดจังหวะต่อเนื่อง"],
    weaknesses: ["เป้าหมายใหญ่ โดนสาดกระสุนเข้าง่าย", "แพ้ตัวยิงเจาะเกราะระยะไกล", "ใช้คูลดาวน์ค่อนข้างนาน"],
    counters: { strongAgainst: ["Seven", "Wraith", "McGinnis"], weakAgainst: ["Lady Geist", "Vindicta", "Infernus"] }
  },
  {
    id: "kelvin",
    name: "Kelvin",
    thaiName: "เคลวิน",
    role: "Support / Control",
    tier: "S",
    winRate: 54.94,
    winRateDelta: 1.15,
    pickRate: 13.39,
    pickRateDelta: -1.64,
    matchesWon: "66.1K",
    matchesLost: "54.2K",
    descriptionThai: "ผู้ควบคุมความเย็นและไอซ์เวิลด์ สามารถสร้างทางเดินน้ำแข็งลอยฟ้า สโลว์ศัตรูอย่างหนักหน่วง และสร้างโดมน้ำแข็งรักษาเพื่อนพร้อมขังศัตรู",
    skillPriority: "2 > 3 > 4 > 1",
    abilities: [
      { num: 1, name: "Frost Grenade", cd: "9s", desc: "ปาระเบิดน้ำแข็งระเบิดเป็นวงกว้าง ทำดาเมจวิญญาณและสโลว์ 40%" },
      { num: 2, name: "Ice Path", cd: "25s", desc: "สร้างรางน้ำแข็งลอยฟ้าให้ทีมวิ่งลอยเหนือพื้นดินด้วยความเร็วสูง" },
      { num: 3, name: "Arctic Beam", cd: "16s", desc: "ยิงลำแสงเยือกแข็งใส่เป้าหมายต่อเนื่อง ดาเมจจะแรงขึ้นเรื่อยๆ ตามระยะเวลาเชื่อมต่อ" },
      { num: 4, name: "Frozen Shelter", cd: "70s", desc: "อัลติเมท: สร้างโดมน้ำแข็งคุ้มกัน รีเจนเลือดพันธมิตร และหยุดดาเมจจากภายนอกโดมทั้งหมด" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Extra Stamina", "Healing Rite", "Mystic Reach"],
      mid: ["Slow Tech", "Superior Cooldown", "Combat Barrier", "Rescue Beam"],
      late: ["Boundless Spirit", "Echo Shard", "Curse", "Diviner's Kevlar"],
      situational: ["Warp Stone", "Debuff Remover", "Silence Glyph"]
    },
    strengths: ["สร้างความได้เปรียบด้านความสูงและพื้นที่ (High-ground control)", "สกิลสโลว์และกักขังทรงพลัง", "โดมอัลติเมทเซฟชีวิตเพื่อนได้เกือบทุกลักษณะไฟต์"],
    weaknesses: ["ดาเมจปืนธรรมดาเบา", "ถ้าใช้โดมผิดจังหวะอาจกักขังเพื่อนจนโดนสกิลหมู่ตาย", "พึ่งพาสปิริตไอเทมอย่างมาก"],
    counters: { strongAgainst: ["Abrams", "Haze", "Bebop"], weakAgainst: ["Yamato", "Drifter", "Shiv"] }
  },
  {
    id: "seven",
    name: "Seven",
    thaiName: "เซเว่น",
    role: "Carry / Teamfight AoE",
    tier: "S",
    winRate: 54.41,
    winRateDelta: -1.05,
    pickRate: 32.22,
    pickRateDelta: -2.62,
    matchesWon: "157.5K",
    matchesLost: "131.9K",
    descriptionThai: "นักโทษสายฟ้าแห่งทัณฑสถาน มีพลังช็อตสายฟ้ากระจายข้ามตัวศัตรู และมีอัลติเมทพายุสายฟ้าที่ครอบคลุมพื้นที่กว้างใหญ่ เปลี่ยนผลการแพ้ชนะของไฟต์ได้ในทันที",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Lightning Ball", cd: "12s", desc: "ปล่อยลูกบอลสายฟ้าเคลื่อนที่ช้าๆ ช็อตศัตรูทะลุกำแพงและสิ่งกีดขวาง" },
      { num: 2, name: "Static Charge", cd: "22s", desc: "วางประจุไฟฟ้าบนตัวศัตรู เมื่อครบกำหนดจะระเบิดสตันเป้าหมายและรอบข้าง" },
      { num: 3, name: "Power Surge", cd: "18s", desc: "บัฟการยิงปืนให้กระสุนชิ่งสายฟ้าใส่ศัตรูที่อยู่ใกล้เคียงแบบไม่จำกัดจำนวน" },
      { num: 4, name: "Storm Cloud", cd: "90s", desc: "อัลติเมท: ลอยตัวขึ้นฟ้า ปล่อยพายุสายฟ้าฟาดศัตรูทุกคนในระยะวงกว้างอย่างต่อเนื่อง" }
    ],
    itemBuilds: {
      early: ["Mystic Burst", "Basic Magazine", "Extra Spirit", "Sprint Boots"],
      mid: ["Tesla Bullets", "Bullet Resist Shredder", "Superior Cooldown", "Combat Barrier"],
      late: ["Ricochet", "Boundless Spirit", "Unstoppable", "Leech"],
      situational: ["Curse", "Phantom Strike", "Glass Cannon"]
    },
    strengths: ["พลังดาเมจทีมไฟต์พื้นที่กว้าง (AoE) สูงที่สุดในเกม", "ฟาร์มเงินและเคลียร์แคมป์มอนสเตอร์ได้ไวเป็นอันดับ 1", "กดดันศัตรูไม่ให้เข้าใกล้พื้นที่เป้าหมายได้ดี"],
    weaknesses: ["อัลติเมทลอยนิ่งเป็นเป้านิ่ง (ตกเป็นเป้าสไนเปอร์และสตันได้ง่าย)", "ไม่มีสกิลพุ่งหนีตัวเปล่า", "แพ้ไอเทมหยุดร่ายเช่น Knockdown หรือ Curse"],
    counters: { strongAgainst: ["McGinnis", "Mo & Krill", "Viscous"], weakAgainst: ["Vindicta", "Paradox", "Bebop"] }
  },
  {
    id: "ivy",
    name: "Ivy",
    thaiName: "ไอวี่",
    role: "Support / Enabler",
    tier: "S",
    winRate: 53.31,
    winRateDelta: 0.24,
    pickRate: 19.89,
    pickRateDelta: -3.30,
    matchesWon: "95.2K",
    matchesLost: "83.4K",
    descriptionThai: "การ์กอยล์สาวผู้พิทักษ์ สามารถเชื่อมโยงสายสัมพันธ์กับเพื่อนร่วมทีมเพื่อแชร์บัฟและฮีล พร้อมความสามารถในการบินอุ้มเพื่อนหรือระเบิดบินไปทิ้งใส่ศัตรู",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Kudzu Vine", cd: "14s", desc: "ทอดเถาว์หนามพิษลงบนพื้น สโลว์และทำดาเมจศัตรูที่เหยียบอย่างรวดเร็ว" },
      { num: 2, name: "Watcher's Covenant", cd: "20s", desc: "เชื่อมโยงกับเพื่อนร่วมทีม มอบความเร็วโจมตีและแชร์การดูดเลือดให้แก่กัน" },
      { num: 3, name: "Stone Form", cd: "24s", desc: "กลายร่างเป็นหินทุบพื้น สตันศัตรูรอบตัว พร้อมลบล้างดีบัฟและฮีลตัวเอง" },
      { num: 4, name: "Air Drop", cd: "75s", desc: "อัลติเมท: กางปีกบินขึ้นฟ้า สามารถหิ้วเพื่อนร่วมทีม 1 คนบินไปด้วยกัน แล้วทิ้งระเบิดสตันศัตรูเมื่อลงสู่พื้น" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Restorative Locket", "Extra Stamina", "Basic Magazine"],
      mid: ["Heroic Aura", "Rescue Beam", "Healing Booster", "Enduring Speed"],
      late: ["Colossus", "Curse", "Refresher", "Diviner's Kevlar"],
      situational: ["Debuff Remover", "Silence Glyph", "Metal Skin"]
    },
    strengths: ["ช่วยเสริมพลังให้แครี่ทีมเก่งขึ้นเป็นทวีคูณ", "มีสกิลหินแก้ทางดีบัฟและเอาตัวรอด", "บินพาเพื่อนเข้าไฟต์หรือหนีไฟต์ฉุกเฉินได้ทั่วแผนที่"],
    weaknesses: ["พึ่งพาเพื่อนร่วมทีมสูงมาก", "ถ้าเพื่อนร่วมเลนไม่พร้อมไฟต์จะเสียประโยชน์จากสกิลสายสัมพันธ์", "ดาเมจเดี่ยวปานกลาง"],
    counters: { strongAgainst: ["Haze", "Abrams", "Infernus"], weakAgainst: ["Lash", "Wraith", "Vindicta"] }
  },
  {
    id: "haze",
    name: "Haze",
    thaiName: "เฮซ",
    role: "Assassin / Hard Carry",
    tier: "S",
    winRate: 53.08,
    winRateDelta: -1.80,
    pickRate: 43.42,
    pickRateDelta: -5.55,
    matchesWon: "207.0K",
    matchesLost: "183.0K",
    descriptionThai: "มือสังหารล่องหนผู้เชี่ยวชาญการยิงเร็วด้วยปืนกลคู่ ยิ่งยิงเป้าหมายเดิมดาเมจยิ่งสะสมแรงขึ้น และมีอัลติเมทเต้นระบำกระสุนกราดยิงรอบทิศทางสังหารหมู่",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Sleep Dagger", cd: "15s", desc: "ปามีดพิษทำให้ศัตรูหลับใหลไร้ความสามารถชั่วขณะ หากถูกดาเมจจะตื่นทันที" },
      { num: 2, name: "Smoke Bomb", cd: "25s", desc: "เข้าสู่สถานะล่องหน เพิ่มความเร็วเคลื่อนที่และระยะตรวจจับแคบลง" },
      { num: 3, name: "Fixation", cd: "Passive", desc: "ทุกนัดที่ยิงโดนเป้าหมายเดิมจะสะสมสแต็คเพิ่มพลังโจมตีกระสุนขึ้นเรื่อยๆ" },
      { num: 4, name: "Bullet Dance", cd: "85s", desc: "อัลติเมท: หมุนตัวกราดยิงกระสุนรอบทิศทางอย่างบ้าคลั่ง พร้อมความแม่นยำสูงและหลบหลีกการโจมตี" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Hollow Point Ward", "Sprint Boots", "Headshot Booster"],
      mid: ["Tesla Bullets", "Kinetic Dash", "Quicksilver Reload", "Combat Barrier"],
      late: ["Ricochet", "Lucky Shot", "Unstoppable", "Silencer"],
      situational: ["Metal Skin", "Glass Cannon", "Slowing Hex"]
    },
    strengths: ["ดาเมจเดี่ยวและสังหารเป้าหมายเดี่ยวไวที่สุดช่วงท้ายเกม", "มีสกิลล่องหนและมีดสลบเปิดไฟต์ได้อย่างปลอดภัย", "สเกลพลังไอเทมสายปืนได้คุ้มค่าทุกชิ้น"],
    weaknesses: ["บางมาก โดนรุมสกัดจับตายทันที", "อัลติเมทแพ้ไอเทม Metal Skin (ศัตรูไม่โดนดาเมจกระสุน)", "ช่วงต้นเกมต้องใช้เวลาฟาร์ม"],
    counters: { strongAgainst: ["Seven", "McGinnis", "Vindicta"], weakAgainst: ["Abrams", "Victor", "Ivy"] }
  },

  // A TIER
  {
    id: "baba",
    name: "Baba",
    thaiName: "บาบา",
    role: "Brawler / Shifter",
    tier: "A",
    winRate: 52.94,
    winRateDelta: 0.09,
    pickRate: 20.04,
    pickRateDelta: -15.33,
    matchesWon: "95.3K",
    matchesLost: "84.7K",
    descriptionThai: "นักล่าสัตว์ป่าร่างใหญ่ มีสกิลกระโจนและกรงเล็บสังหาร เหมาะสำหรับการไล่ล่าตัวป่วนแถวหลังของศัตรู",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Feral Pounce", cd: "10s", desc: "กระโจนใส่เป้าหมายกดทับลงพื้นสตันและฉีกกระชากเกราะ" },
      { num: 2, name: "Beast Roar", cd: "16s", desc: "คำรามสร้างความกลัวให้ศัตรูวิ่งหนีและลดพลังโจมตีศัตรูรอบตัว" },
      { num: 3, name: "Predator Scent", cd: "20s", desc: "ตรวจจับศัตรูเลือดต่ำผ่านกำแพง พร้อมเพิ่มสปีดวิ่งมุ่งหน้าหาเป้าหมาย" },
      { num: 4, name: "Primal Rampage", cd: "75s", desc: "อัลติเมท: ปลดปล่อยสัญชาตญาณสัตว์ป่า ตะลุยฟันดาเมจหมู่พร้อมฟื้นฟูเลือดตามดาเมจที่ทำได้" }
    ],
    itemBuilds: {
      early: ["Melee Lifesteal", "Extra Health", "Sprint Boots", "Monster Rounds"],
      mid: ["Torment Pulse", "Lifesteal Booster", "Bullet Armor", "Combat Barrier"],
      late: ["Colossus", "Phantom Strike", "Leech", "Unstoppable"],
      situational: ["Metal Skin", "Debuff Remover", "Curse"]
    },
    strengths: ["ไล่ตามเก็บตัวแตกแถวได้ดีเลิศ", "มีไลฟ์สตีลฟื้นเลือดต่อเนื่อง", "ทนทานในไฟต์ยาว"],
    weaknesses: ["ขาดสกิลโจมตีระยะไกล", "แพ้สกิลสโลว์และสตันหนัก", "ต้องมีไอเทมกัน CC ช่วงเลทเกม"],
    counters: { strongAgainst: ["Grey Talon", "Vindicta", "Seven"], weakAgainst: ["Abrams", "Paige", "Kelvin"] }
  },
  {
    id: "dynamo",
    name: "Dynamo",
    thaiName: "ไดนาโม",
    role: "Support / Initiator",
    tier: "A",
    winRate: 51.95,
    winRateDelta: -0.27,
    pickRate: 21.06,
    pickRateDelta: -3.26,
    matchesWon: "98.3K",
    matchesLost: "90.9K",
    descriptionThai: "หุ่นยนต์วิศวกรพลังควอนตัม มีสกิลหลุมดำขนาดใหญ่ดูดศัตรูทั้งทีมมารวมกันเพื่อให้เพื่อนสาดสกิลคอมโบปิดฉาก",
    skillPriority: "4 > 2 > 1 > 3",
    abilities: [
      { num: 1, name: "Kinetic Pulse", cd: "8s", desc: "ยิงคลื่นพลังผลักศัตรูลอยขึ้นฟ้าและขัดจังหวะการเล็ง" },
      { num: 2, name: "Quantum Entanglement", cd: "15s", desc: "เทเลพอร์ตพาตัวเองและเพื่อนใกล้เคียงวาร์ปหลบหลีกพร้อมบัฟรีโหลดเร็ว" },
      { num: 3, name: "Rejuvenating Aurora", cd: "22s", desc: "กางออร่าฟื้นฟูเลือดเป็นเปอร์เซ็นต์ให้ตนเองและเพื่อนรอบข้าง" },
      { num: 4, name: "Singularity", cd: "95s", desc: "อัลติเมท: สร้างหลุมดำแรงโน้มถ่วงมหาศาล ดูดและขังศัตรูทุกคนในรัศมีเป็นเวลาหลายวินาที" }
    ],
    itemBuilds: {
      early: ["Healing Rite", "Extra Stamina", "Extra Spirit", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Divine Barrier"],
      late: ["Refresher", "Echo Shard", "Curse", "Diviner's Kevlar"],
      situational: ["Warp Stone", "Debuff Remover", "Spellbreaker"]
    },
    strengths: ["อัลติเมทหลุมดำ Singularity ทรงอิทธิพลที่สุดในเกม", "มีฮีลหมู่และวาร์ปช่วยเพื่อน", "คอมโบกับฮีโร่ AoE อย่าง Seven ได้ไร้ที่ติ"],
    weaknesses: ["ดาเมจส่วนตัวเบา", "อัลติเมทหลุดง่ายถ้าโดนสตันจากระยะไกล", "คูลดาวน์สกิลยาว"],
    counters: { strongAgainst: ["Seven", "Haze", "McGinnis"], weakAgainst: ["Lash", "Bebop", "Wraith"] }
  },
  {
    id: "abrams",
    name: "Abrams",
    thaiName: "อับรามส์",
    role: "Brawler / Frontline",
    tier: "A",
    winRate: 51.68,
    winRateDelta: 1.33,
    pickRate: 26.71,
    pickRateDelta: -1.25,
    matchesWon: "124.0K",
    matchesLost: "115.9K",
    descriptionThai: "นักสืบปีศาจหน้าดุผู้ใช้หนังสือเวทมนตร์และหมัดอันทรงพลัง มีความสามารถในการรีเจนเลือดคืนอย่างมหาศาลหลังถูกโจมตี",
    skillPriority: "2 > 3 > 1 > 4",
    abilities: [
      { num: 1, name: "Siphon Life", cd: "12s", desc: "ดูดพลังชีวิตจากศัตรูทุกคนรอบตัวมาฟื้นฟูเลือดตัวเอง" },
      { num: 2, name: "Shoulder Charge", cd: "14s", desc: "วิ่งกระแทกศัตรูด้านหน้าชนติดกำแพงสตันยาวนาน" },
      { num: 3, name: "Infernal Resilience", cd: "Passive", desc: "ฟื้นฟูความเสียหายที่ได้รับเมื่อครู่คืนมาเป็นเปอร์เซ็นต์อย่างต่อเนื่อง" },
      { num: 4, name: "Seismic Impact", cd: "80s", desc: "อัลติเมท: กระโดดลอยขึ้นฟ้าแล้วทุบลงมาดั่งอุกกาบาต สตันและทำดาเมจเป็นวงกว้าง" }
    ],
    itemBuilds: {
      early: ["Melee Lifesteal", "Extra Health", "Monster Rounds", "Sprint Boots"],
      mid: ["Torment Pulse", "Melee Charge", "Healbane", "Bullet Armor"],
      late: ["Colossus", "Phantom Strike", "Leech", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Reactive Barrier"]
    },
    strengths: ["หมัดหนักมาก ปิดคิลระยะประชิดได้เฉียบพลัน", "เลือดเด้งกลับไว ฆ่ายากเมื่อไฟต์เดี่ยว", "เปิดไฟต์ด้วยอัลติเมทกระโดดทุบได้จากระยะไกล"],
    weaknesses: ["แพ้ไอเทมลดการฮีลอย่างรุนแรง (Healbane, Toxic Bullets)", "โดนยิงตอดระยะไกลจนเข้าไม่ถึงตัว", "หากใช้ไหล่พุ่งพลาดจะหลุดตำแหน่งทันที"],
    counters: { strongAgainst: ["Haze", "Wraith", "Vindicta"], weakAgainst: ["Kelvin", "Lady Geist", "Infernus"] }
  },
  {
    id: "lady_geist",
    name: "Lady Geist",
    thaiName: "เลดี้ ไกส์ท",
    role: "Mage / Drainer",
    tier: "A",
    winRate: 51.65,
    winRateDelta: 1.47,
    pickRate: 21.66,
    pickRateDelta: -3.31,
    matchesWon: "100.5K",
    matchesLost: "94.1K",
    descriptionThai: "สตรีผู้เป็นอมตะด้วยเวทศาสตร์มืด ยอมสละเลือดของตนเพื่อสร้างดาเมจมหาศาล และมีอัลติเมทสลับเลือดกับศัตรูเมื่อตัวเองใกล้ตาย",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Essence Bomb", cd: "7s", desc: "สละเลือดตัวเองเสกบาปมืดระเบิดใส่ศัตรู ดาเมจวิญญาณรุนแรงมาก" },
      { num: 2, name: "Life Drain", cd: "16s", desc: "ยึดโยงสายใยวิญญาณดูดเลือดเป้าหมายต่อเนื่องและสโลว์" },
      { num: 3, name: "Malice", cd: "10s", desc: "ยิงสะเก็ดเลือดทิ่มแทงศัตรู ทำให้ติดสถานะลดเกราะและลดดาเมจ" },
      { num: 4, name: "Soul Exchange", cd: "65s", desc: "อัลติเมท: สลับเปอร์เซ็นต์พลังชีวิตปัจจุบันกับศัตรูเป้าหมายในพริบตา" }
    ],
    itemBuilds: {
      early: ["Mystic Burst", "Extra Spirit", "Healing Rite", "Sprint Boots"],
      mid: ["Decay", "Boundless Spirit", "Spirit Lifesteal", "Combat Barrier"],
      late: ["Echo Shard", "Diviner's Kevlar", "Escalating Exposure", "Curse"],
      situational: ["Warp Stone", "Spellbreaker", "Debuff Remover"]
    },
    strengths: ["ดาเมจวิญญาณระเบิดบอมบ์สูงมาก", "อัลติเมทสลับเลือดแก้ทางตัวแทงค์ได้ 100%", "สู้ในเลนเดี่ยวได้แข็งแกร่ง"],
    weaknesses: ["การใช้สกิลต้องเสียเลือดตัวเองตลอดเวลา เสี่ยงตายสูง", "ไม่มีสกิลหนีตัวเปล่า", "แพ้ศัตรูที่มีสกิลเงียบ (Silence) ไม่ให้กดสลับเลือด"],
    counters: { strongAgainst: ["Abrams", "Victor", "Mo & Krill"], weakAgainst: ["Rat King", "Wraith", "Haze"] }
  },
  {
    id: "lash",
    name: "Lash",
    thaiName: "แลช",
    role: "Initiator / Aerial Brawler",
    tier: "A",
    winRate: 50.98,
    winRateDelta: -0.24,
    pickRate: 30.96,
    pickRateDelta: -6.80,
    matchesWon: "141.8K",
    matchesLost: "136.3K",
    descriptionThai: "จอมยโสผู้เหินเวหา ใช้แส้และเชือกสลิงโหนขึ้นฟ้าแล้วทุบลงมาเปิดไฟต์ พร้อมอัลติเมทเหวี่ยงจับศัตรูทุกคนโยนลงพื้น",
    skillPriority: "1 > 2 > 4 > 3",
    abilities: [
      { num: 1, name: "Ground Strike", cd: "10s", desc: "ทุบพื้นสร้างคลื่นดาเมจ ยิ่งกระโดดมาจากที่สูง ดาเมจยิ่งทวีคูณ" },
      { num: 2, name: "Grapple", cd: "14s", desc: "ยิงตะขอโหนตัวขึ้นตึกหรือพุ่งเข้าใส่ศัตรูอย่างรวดเร็ว" },
      { num: 3, name: "Flog", cd: "12s", desc: "ตวัดแส้ฟาดศัตรูด้านหน้า ดูดพลังชีวิตและลดความเร็วโจมตีของเป้าหมาย" },
      { num: 4, name: "Death Slam", cd: "85s", desc: "อัลติเมท: ลอยตัวขึ้นฟ้า ปล่อยแส้ล็อกศัตรูหลายคนแล้วฟาดเหวี่ยงทุ่มลงพื้นสตันรุนแรง" }
    ],
    itemBuilds: {
      early: ["Extra Stamina", "Mystic Burst", "Extra Health", "Sprint Boots"],
      mid: ["Majestic Leap", "Superior Cooldown", "Bullet Armor", "Torment Pulse"],
      late: ["Colossus", "Boundless Spirit", "Ethereal Shift", "Unstoppable"],
      situational: ["Curse", "Knockdown", "Debuff Remover"]
    },
    strengths: ["ความคล่องตัวในแนวดิ่ง (Vertical Mobility) สูงที่สุดในเกม", "เปิดไฟต์และจัดระเบียบศัตรูได้ดีมาก", "ดาเมจทุบพื้นแรงมหาศาล"],
    weaknesses: ["แพ้การโดนสตันหรือสอยร่วงกลางอากาศ", "ถ้าเข้าไฟต์พลาดจะกลายเป็นเป้านิ่งทันที", "ต้องอาศัยภูมิประเทศของตึกสูงช่วย"],
    counters: { strongAgainst: ["Seven", "Dynamo", "Vindicta"], weakAgainst: ["Kelvin", "Bebop", "Paige"] }
  },
  {
    id: "wraith",
    name: "Wraith",
    thaiName: "เรธ",
    role: "Ganker / Duelist",
    tier: "A",
    winRate: 50.86,
    winRateDelta: -0.39,
    pickRate: 31.79,
    pickRateDelta: -0.29,
    matchesWon: "145.2K",
    matchesLost: "140.3K",
    descriptionThai: "มือปืนมาเฟียสาวผู้ใช้ไพ่เวทมนตร์ มีความเร็วการยิงสูงสุดในการดวล 1-1 และอัลติเมทเทเลคิเนซิสยกลอยเป้าหมายเดี่ยวจนตายคากลางอากาศ",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Card Trick", cd: "6s", desc: "ปาไพ่สังหารพุ่งเข้าหาศัตรูอัตโนมัติ ทำดาเมจวิญญาณรวดเร็ว" },
      { num: 2, name: "Project Mind", cd: "20s", desc: "เทเลพอร์ตระยะสั้นข้ามสิ่งกีดขวางหรือหลบหลีกสกิลอันตราย" },
      { num: 3, name: "Full Auto", cd: "18s", desc: "บัฟกระหน่ำยิง เพิ่มไฟร์เรตและพลังทำลายล้างของปืนทอมมี่อย่างบ้าคลั่ง" },
      { num: 4, name: "Telekinesis", cd: "75s", desc: "อัลติเมท: ใช้พลังจิตยกลอยศัตรูเป้าหมายขึ้นกลางอากาศ สตันและขัดจังหวะการกระทำทุกอย่าง" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Headshot Booster", "Sprint Boots", "Hollow Point Ward"],
      mid: ["Quicksilver Reload", "Tesla Bullets", "Kinetic Dash", "Combat Barrier"],
      late: ["Ricochet", "Silencer", "Lucky Shot", "Unstoppable"],
      situational: ["Curse", "Glass Cannon", "Metal Skin"]
    },
    strengths: ["พลังการดวล 1-1 ดุดันและเก็บคิลได้ไวมาก", "อัลติเมทยกลอยล็อกเป้าหมายชัวร์ 100%", "เทเลพอร์ตข้ามตึกและหนีได้ดี"],
    weaknesses: ["ไม่มีสกิลทำดาเมจหมู่ (Single-target focus)", "แพ้ไฟต์ตะลุมบอน 6-6 ถ้าเข้าไม่ถูกจังหวะ", "บางมาก"],
    counters: { strongAgainst: ["Lady Geist", "Vindicta", "Grey Talon"], weakAgainst: ["Abrams", "Victor", "Viscous"] }
  },
  {
    id: "drifter",
    name: "Drifter",
    thaiName: "ดริฟเตอร์",
    role: "Ganker / Mobility",
    tier: "A",
    winRate: 50.57,
    winRateDelta: 0.98,
    pickRate: 34.43,
    pickRateDelta: -5.12,
    matchesWon: "156.4K",
    matchesLost: "152.9K",
    descriptionThai: "คาวบอยท่องมิติผู้สามารถสไลด์และเร่งสปีดต่อเนื่อง รวดเร็วจนตามจับตัวได้ยาก พร้อมปืนลูกโม่คริติคอลหัวที่แม่นยำ",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Ghost Bullet", cd: "8s", desc: "ยิงกระสุนมิติทะลุกำแพงและศัตรู สร้างดาเมจคริติคอลสูง" },
      { num: 2, name: "Phase Slide", cd: "10s", desc: "สไลด์หลบหลีกอย่างรวดเร็ว ได้รับสถานะต้านทานกระสุนระหว่างสไลด์" },
      { num: 3, name: "Quick Draw", cd: "16s", desc: "บัฟการเล็งยิงทันทีและเพิ่มอัตราเจาะเกราะศัตรู" },
      { num: 4, name: "Dimensional Chase", cd: "70s", desc: "อัลติเมท: ล็อคเป้าหมายศัตรูและพุ่งทะลุมิติไปโผล่ด้านหลังพร้อมระเบิดสตัน" }
    ],
    itemBuilds: {
      early: ["Headshot Booster", "Basic Magazine", "Sprint Boots", "Extra Stamina"],
      mid: ["Kinetic Dash", "Pristine Emblem", "Combat Barrier", "Enduring Speed"],
      late: ["Crippling Headshot", "Lucky Shot", "Phantom Strike", "Leech"],
      situational: ["Curse", "Debuff Remover", "Slowing Hex"]
    },
    strengths: ["ความเร็วและการสไลด์คล่องแคล่วที่สุดในเกม", "ยิงเจาะหัวระยะกลางได้เฉียบขาด", "ลอบสังหารเป้าหมายเดี่ยวที่แยกดันเลน"],
    weaknesses: ["ต้องการความแม่นยำในการเล็งสูงมาก", "ถ้าโดนใบ้หรือสโลว์สปีดจะอ่อนแอทันที", "เลือดค่อนข้างน้อย"],
    counters: { strongAgainst: ["Kelvin", "Seven", "McGinnis"], weakAgainst: ["Paige", "Abrams", "Rat King"] }
  },
  {
    id: "violet",
    name: "Violet",
    thaiName: "ไวโอเล็ต",
    role: "Disruptor / Mage",
    tier: "A",
    winRate: 50.33,
    winRateDelta: 0.00,
    pickRate: 57.96,
    pickRateDelta: 0.00,
    matchesWon: "262.0K",
    matchesLost: "258.6K",
    descriptionThai: "ผู้ใช้เวทไอพิษสีม่วง มีความสามารถในการแผ่กระจายละอองพิษบ่อนทำลายการเคลื่อนที่และลดดาเมจศัตรูทั้งสนาม มี Pick Rate สูงถึง 57.96%",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Violet Mist", cd: "9s", desc: "ปล่อยหมอกพิษสีม่วงครอบคลุมทางเดิน สร้างความเสียหายและบดบังสายตา" },
      { num: 2, name: "Decay Spores", cd: "15s", desc: "โปรยสปอร์สลายเกราะ ศัตรูที่ติดจะเสียเลือดตามสัดส่วน HP สูงสุด" },
      { num: 3, name: "Phantom Leap", cd: "18s", desc: "กระโดดข้ามมิติสั้นๆ ทิ้งหมอกระเบิดไว้ด้านหลัง" },
      { num: 4, name: "Miasma Cataclysm", cd: "85s", desc: "อัลติเมท: ปลดปล่อยพายุไอดำครอบคลุมพื้นที่กว้าง ลดสปีดและสะกดพลังสกิลศัตรูทั้งหมด" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Mystic Burst", "Sprint Boots", "Extra Health"],
      mid: ["Decay", "Torment Pulse", "Superior Cooldown", "Combat Barrier"],
      late: ["Boundless Spirit", "Escalating Exposure", "Diviner's Kevlar", "Echo Shard"],
      situational: ["Curse", "Spellbreaker", "Debuff Remover"]
    },
    strengths: ["กดดันและโซนพื้นที่ได้ทรงพลัง", "Pick Rate ยอดนิยม ผู้เล่นเข้าถึงง่าย", "ตัดเลือดศัตรูเป็นเปอร์เซ็นต์ได้ดี"],
    weaknesses: ["ขาดดาเมจปิดคิลแบบเบิร์สฉับพลัน", "พึ่งพาการยืนไฟต์ที่ยืดเยื้อ", "แพ้ตัวพุ่งประชิดตัวไวอย่าง Graves"],
    counters: { strongAgainst: ["Victor", "McGinnis", "Mo & Krill"], weakAgainst: ["Graves", "Drifter", "Lash"] }
  },
  {
    id: "deadman_danny",
    name: "Deadman Danny",
    thaiName: "เดดแมน แดนนี่",
    role: "Duelist / Brawler",
    tier: "A",
    winRate: 48.46,
    winRateDelta: 9.93,
    pickRate: 67.86,
    pickRateDelta: 58.70,
    matchesWon: "295.4K",
    matchesLost: "314.1K",
    descriptionThai: "ฮีโร่ที่มาแรงที่สุดในแพตช์ล่าสุด Pick Rate พุ่งสูงถึง 67.86% (+58.70%) และ Win Rate ขยับขึ้นเกือบ 10% มีสไตล์การต่อสู้แบบลูกผสมระหว่างมือปืนและการฟื้นชีพจากความตาย",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Revolver Fan", cd: "7s", desc: "รัวกระสุนหมดโม่ใส่เป้าหมายตรงหน้า ดาเมจระยะประชิดแรงมาก" },
      { num: 2, name: "Grave Dust", cd: "14s", desc: "สาดผงสุสานทำให้ศัตรูตาบอดชั่วขณะและยิงพลาด 60%" },
      { num: 3, name: "Undying Grit", cd: "Passive", desc: "ยิ่งเลือดเหลือน้อย ยิ่งได้รับความเร็วโจมตีและเกราะป้องกันเพิ่มขึ้นมหาศาล" },
      { num: 4, name: "Last Stand Requiem", cd: "90s", desc: "อัลติเมท: เมื่อถูกสังหาร จะเข้าสู่สถานะวิญญาณคุ้มคลั่งต่อสู้ได้ต่ออีก 6 วินาทีแบบอมตะ" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Melee Lifesteal", "Headshot Booster", "Sprint Boots"],
      mid: ["Kinetic Dash", "Lifesteal Booster", "Bullet Armor", "Tesla Bullets"],
      late: ["Ricochet", "Leech", "Unstoppable", "Lucky Shot"],
      situational: ["Metal Skin", "Curse", "Debuff Remover"]
    },
    strengths: ["Pick Rate สูงที่สุดในเกม (67.86%)", "ความสามารถในการแลกชีวิตเอาศัตรูตายตามด้วยสถานะอมตะ", "ความรุนแรงของการรัวกระสุนระยะประชิด"],
    weaknesses: ["Win Rate รวมยังคงต่ำกว่า 50% เล็กน้อยเนื่องจากผู้เล่นฝึกเล่นเยอะ", "แพ้การโดนกักขังระหว่างอัลติเมททำงาน", "ช่วงต้นเกมต้องระวังการโดนตอด"],
    counters: { strongAgainst: ["Haze", "Wraith", "Vindicta"], weakAgainst: ["Paige", "Kelvin", "Viscous"] }
  },

  // B TIER (14 Heroes)
  {
    id: "nurse_harrow",
    name: "Nurse Harrow",
    thaiName: "เนิร์ส แฮร์โรว์",
    role: "Support / Medic",
    tier: "B",
    winRate: 51.16,
    winRateDelta: 0.12,
    pickRate: 15.73,
    pickRateDelta: -1.05,
    matchesWon: "78.2K",
    matchesLost: "74.6K",
    descriptionThai: "พยาบาลสนามผู้ใช้เข็มฉีดยาพิษและการรักษาพยาบาลเพื่อนร่วมทีมอย่างแม่นยำ",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Syringe Dart", cd: "8s", desc: "ยิงเข็มฉีดยาใส่ศัตรูทำดาเมจพิษ หรือยิงใส่เพื่อนเพื่อฮีล" },
      { num: 2, name: "Adrenaline Surge", cd: "16s", desc: "ฉีดสารกระตุ้นเพิ่มสปีดและลดคูลดาวน์ให้เพื่อนร่วมทีม" },
      { num: 3, name: "Sanitizing Ward", cd: "22s", desc: "ปักเสารักษาและล้างดีบัฟเป็นวงกว้าง" },
      { num: 4, name: "Resuscitate", cd: "85s", desc: "อัลติเมท: ชุบชีวิตเพื่อนร่วมทีมที่เพิ่งตายขึ้นมาทันทีด้วยเลือด 50%" }
    ],
    itemBuilds: {
      early: ["Healing Rite", "Extra Stamina", "Sprint Boots", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Divine Barrier"],
      late: ["Refresher", "Diviner's Kevlar", "Echo Shard", "Colossus"],
      situational: ["Debuff Remover", "Warp Stone", "Spellbreaker"]
    },
    strengths: ["การซัพพอร์ตและชุบชีวิตเพื่อน", "ฮีลต่อเนื่องในเลน", "ล้างดีบัฟได้ดี"],
    weaknesses: ["ดาเมจต่ำมาก", "หนีการโดนลอบฆ่ายาก", "พึ่งพาเพื่อนร่วมทีม"],
    counters: { strongAgainst: ["Seven", "McGinnis"], weakAgainst: ["Haze", "Drifter"] }
  },
  {
    id: "mo_and_krill",
    name: "Mo & Krill",
    thaiName: "โม แอนด์ คริลล์",
    role: "Initiator / Brawler",
    tier: "B",
    winRate: 50.67,
    winRateDelta: 1.54,
    pickRate: 19.10,
    pickRateDelta: 0.32,
    matchesWon: "92.1K",
    matchesLost: "89.6K",
    descriptionThai: "คู่หูดำดินจอมขุด สามารถดำดินไล่กวดศัตรูแล้วโผล่ขึ้นมาล็อกตัวกดแช่สตันเดี่ยวจนตาย",
    skillPriority: "1 > 2 > 4 > 3",
    abilities: [
      { num: 1, name: "Scorn", cd: "8s", desc: "ตวัดกรงเล็บดูดเลือดและทำดาเมจศัตรูรอบตัว" },
      { num: 2, name: "Burrow", cd: "18s", desc: "ดำดินเพิ่มความเร็วและเกราะโผล่มาสตันศัตรู" },
      { num: 3, name: "Sand Blast", cd: "14s", desc: "พ่นทรายทำให้ศัตรูตาบ็อดและปลดอาวุธห้ามยิง" },
      { num: 4, name: "Combo Hold", cd: "75s", desc: "อัลติเมท: จับตรึงเป้าหมายเดี่ยวนาน 3 วินาทีพร้อมรัวดาเมจ" }
    ],
    itemBuilds: {
      early: ["Melee Lifesteal", "Extra Health", "Sprint Boots", "Monster Rounds"],
      mid: ["Torment Pulse", "Bullet Armor", "Spirit Armor", "Healbane"],
      late: ["Phantom Strike", "Colossus", "Leech", "Unstoppable"],
      situational: ["Curse", "Debuff Remover", "Metal Skin"]
    },
    strengths: ["จับล็อกเป้าหมายเดี่ยวจนดิ้นไม่หลุด", "ดำดินเปิดไฟต์ได้เร็ว", "ปลดอาวุธศัตรูสายปืน"],
    weaknesses: ["ระหว่างใช้อัลติเมทตัวเองก็ยืนนิ่งด้วย", "แพ้ไอเทมดีบัฟรีมูฟเวอร์", "ระยะโจมตีสั้น"],
    counters: { strongAgainst: ["Haze", "Wraith"], weakAgainst: ["Lady Geist", "Paige"] }
  },
  {
    id: "apollo",
    name: "Apollo",
    thaiName: "อพอลโล",
    role: "Mage / Sniper",
    tier: "B",
    winRate: 49.51,
    winRateDelta: 0.20,
    pickRate: 26.50,
    pickRateDelta: -1.10,
    matchesWon: "128.4K",
    matchesLost: "131.0K",
    descriptionThai: "เทพสุริยะผู้ใช้ธนูแสง ยิงศรความร้อนแผดเผาศัตรูจากระยะไกลพร้อมสร้างแสงอาทิตย์เผาไหม้พื้นที่",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Solar Arrow", cd: "8s", desc: "ง้างยิงศรแสงความเร็วสูงทะลวงเป้าหมาย" },
      { num: 2, name: "Sun Flare", cd: "14s", desc: "ระเบิดแสงทำให้ศัตรูตาพร่ามัวและเคลื่อนที่ช้าลง" },
      { num: 3, name: "Radiant Blessing", cd: "20s", desc: "บัฟการยิงให้ติดสถานะเผาไหม้ไฟต์วิญญาณ" },
      { num: 4, name: "Supernova Strike", cd: "80s", desc: "อัลติเมท: ยิงลำแสงสุริยะขนาดมหึมาข้ามแมป สร้างความเสียหายมหาศาล" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Headshot Booster", "Sprint Boots", "Mystic Burst"],
      mid: ["Surge of Power", "Superior Cooldown", "Combat Barrier", "Enduring Speed"],
      late: ["Boundless Spirit", "Crippling Headshot", "Diviner's Kevlar", "Echo Shard"],
      situational: ["Curse", "Warp Stone", "Glass Cannon"]
    },
    strengths: ["ยิงสไนเปอร์ระยะไกลสุดจอ", "เผาไหม้ดาเมจต่อเนื่อง", "อัลติเมทสไนเปอร์ช่วยเลนอื่นได้"],
    weaknesses: ["แพ้การโดนประชิดตัว", "ไม่มีสกิลหนีที่ไวพอ", "ต้องใช้ฝีมือเล็งศรสูง"],
    counters: { strongAgainst: ["Seven", "McGinnis"], weakAgainst: ["Lash", "Graves"] }
  },
  {
    id: "infernus",
    name: "Infernus",
    thaiName: "อินเฟอร์นัส",
    role: "Skirmisher / Burner",
    tier: "B",
    winRate: 49.26,
    winRateDelta: 0.40,
    pickRate: 34.74,
    pickRateDelta: -0.85,
    matchesWon: "164.2K",
    matchesLost: "169.1K",
    descriptionThai: "ปีศาจเพลิงผู้ใช้กระสุนไฟ ยิ่งยิงติดสถานะเผาไหม้ศัตรูต่อเนื่อง และสามารถสปรินต์ทิ้งรอยไฟสโลว์ศัตรู",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Catalyst", cd: "9s", desc: "สาดสารเคมีลดการต้านทานไฟของศัตรู" },
      { num: 2, name: "Flame Dash", cd: "15s", desc: "พุ่งตัวด้วยความเร็วสูง ทิ้งรอยไฟเผาศัตรูที่เหยียบ" },
      { num: 3, name: "Afterburn", cd: "Passive", desc: "กระสุนทุกลูกสะสมความร้อน เมื่อเต็มจะเผาไหม้เลือดศัตรูอย่างรุนแรง" },
      { num: 4, name: "Concussive Combustion", cd: "80s", desc: "อัลติเมท: จุดระเบิดคลื่นเพลิงรอบตัว สตันศัตรูทุกคนในรัศมีหลังหน่วงเวลา 1.5 วิ" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Extra Spirit", "Sprint Boots", "Mystic Burst"],
      mid: ["Tesla Bullets", "Toxic Bullets", "Enduring Speed", "Combat Barrier"],
      late: ["Ricochet", "Leech", "Boundless Spirit", "Unstoppable"],
      situational: ["Healbane", "Metal Skin", "Curse"]
    },
    strengths: ["ดาเมจเผาไหม้สะสมต่อเนื่องสูงมาก", "วิ่งเร็วหนีและไล่ล่าได้ดี", "อัลติเมทสตันหมู่พลิกเกม"],
    weaknesses: ["แพ้ไอเทมล้างดีบัฟ Debuff Remover", "อัลติเมทหน่วงเวลา 1.5 วินาที ทำให้ศัตรูหลบทันได้", "ดาเมจเบิร์สระยะสั้นไม่สูงมาก"],
    counters: { strongAgainst: ["Victor", "Abrams"], weakAgainst: ["Rat King", "Ivy"] }
  },
  {
    id: "vindicta",
    name: "Vindicta",
    thaiName: "วินดิคต้า",
    role: "Sniper / Marksman",
    tier: "B",
    winRate: 48.90,
    winRateDelta: -1.16,
    pickRate: 30.96,
    pickRateDelta: -2.40,
    matchesWon: "142.3K",
    matchesLost: "148.7K",
    descriptionThai: "มือสไนเปอร์สาวผู้ลอยตัวบนอากาศ สอยศัตรูจากระยะไกลลิบด้วยสไนเปอร์ไรเฟิลและอีกาผูกมัด",
    skillPriority: "4 > 1 > 2 > 3",
    abilities: [
      { num: 1, name: "Stake", cd: "14s", desc: "ปักหมุดตรึงศัตรูไว้กับพื้น ไม่สามารถวิ่งหนีเกินระยะที่กำหนดได้" },
      { num: 2, name: "Flight", cd: "25s", desc: "บินลอยตัวขึ้นสู่ท้องฟ้า ยิงปืนจากมุมสูงพร้อมเพิ่มดาเมจกระสุน" },
      { num: 3, name: "Crow Familiar", cd: "16s", desc: "ปล่อยอีกาบินไปโฉบศัตรู ทำดาเมจวิญญาณและลดเลือดเป้าหมาย" },
      { num: 4, name: "Assassinate", cd: "45s", desc: "อัลติเมท: เล็งยิงสไนเปอร์ความแม่นยำสูง ดาเมจทวีคูณใส่ศัตรูเลือดต่ำ หากสังหารได้จะได้รับโบนัส Souls" }
    ],
    itemBuilds: {
      early: ["Headshot Booster", "Basic Magazine", "Extra Spirit", "Sprint Boots"],
      mid: ["Long Range", "Pristine Emblem", "Combat Barrier", "Quicksilver Reload"],
      late: ["Crippling Headshot", "Lucky Shot", "Glass Cannon", "Unstoppable"],
      situational: ["Warp Stone", "Curse", "Silence Glyph"]
    },
    strengths: ["ระยะยิงไกลที่สุดในเกม", "สเกลเงิน Souls ได้เร็วหากลาสช็อตด้วยอัลติเมท", "ลอยฟ้าหลบฮีโร่ระยะประชิดได้ดี"],
    weaknesses: ["บางที่สุดในเกม โดนเข้าถึงตัวตายทันที", "ขณะลอยฟ้าตกเป็นเป้าสายตาของทุกคน", "ต้องมีความแม่นยำในการเล็งสูงมาก"],
    counters: { strongAgainst: ["Seven", "McGinnis", "Abrams"], weakAgainst: ["Lash", "Graves", "Wraith"] }
  },
  {
    id: "mcginnis",
    name: "McGinnis",
    thaiName: "แมคกินนิส",
    role: "Pusher / Engineer",
    tier: "B",
    winRate: 48.87,
    winRateDelta: 1.39,
    pickRate: 11.74,
    pickRateDelta: 0.85,
    matchesWon: "53.4K",
    matchesLost: "55.9K",
    descriptionThai: "วิศวกรสาวผู้ใช้ปืนกลมินิกันและป้อมปืนมินิคอมเพล็กซ์ สามารถตั้งรับและดันป้อมศัตรูแตกได้อย่างรวดเร็ว",
    skillPriority: "2 > 1 > 3 > 4",
    abilities: [
      { num: 1, name: "Mini Turret", cd: "12s", desc: "สร้างป้อมปืนจิ๋วยิงศัตรูอัตโนมัติ วางได้สูงสุดหลายป้อม" },
      { num: 2, name: "Medicinal Specter", cd: "22s", desc: "เสกวิญญาณรักษาเพื่อนร่วมทีมและฟื้นฟูอัตราการยิงของป้อมปืน" },
      { num: 3, name: "Spectral Wall", cd: "18s", desc: "สร้างกำแพงวิญญาณขวางทางเดินศัตรูและทำให้เคลื่อนที่ช้าลง" },
      { num: 4, name: "Heavy Barrage", cd: "90s", desc: "อัลติเมท: ยิงระเบิดจรวดมิสไซล์ตกใส่พื้นที่เป้าหมายอย่างต่อเนื่อง" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Extra Health", "Sprint Boots", "Monster Rounds"],
      mid: ["Tesla Bullets", "Heroic Aura", "Bullet Armor", "Combat Barrier"],
      late: ["Ricochet", "Boundless Spirit", "Leech", "Unstoppable"],
      situational: ["Colossus", "Metal Skin", "Curse"]
    },
    strengths: ["ความสามารถในการดันป้อมและคุมพื้นที่สูงมาก", "ป้อมปืนช่วยฟาร์มและป้องกันเลนได้ดี", "ปืนกลมินิกันยิงต่อเนื่องทำดาเมจมหาศาล"],
    weaknesses: ["เคลื่อนที่ช้าและหมุนตัวช้าขณะหมุนปืนกล", "แพ้ฮีโร่ที่มีสกิล AoE ทำลายป้อมปืนทิ้งพร้อมกัน", "ไม่มีสกิลหนีตัวเปล่า"],
    counters: { strongAgainst: ["Abrams", "Mo & Krill"], weakAgainst: ["Seven", "Vindicta", "Lash"] }
  },
  {
    id: "celeste",
    name: "Celeste",
    thaiName: "เซเลสเต้",
    role: "Support / Enchanter",
    tier: "B",
    winRate: 48.86,
    winRateDelta: 0.10,
    pickRate: 32.02,
    pickRateDelta: -0.45,
    matchesWon: "146.1K",
    matchesLost: "152.9K",
    descriptionThai: "จอมเวทแห่งดวงดารา มีสกิลมอบเกราะดวงดาวและยิงดาวตกส่องสว่างขัดขวางศัตรู",
    skillPriority: "1 > 2 > 4 > 3",
    abilities: [
      { num: 1, name: "Starfall", cd: "8s", desc: "เรียกดาวตกขนาดเล็กถล่มพื้นที่ทำดาเมจวิญญาณ" },
      { num: 2, name: "Celestial Shield", cd: "15s", desc: "กางบาเรียดวงดาวปกป้องเพื่อนและสะท้อนความเสียหาย" },
      { num: 3, name: "Gravity Surge", cd: "18s", desc: "ดึงศัตรูมารวมกันชั่วขณะ" },
      { num: 4, name: "Astral Convergence", cd: "80s", desc: "อัลติเมท: ปล่อยลำแสงดวงดาวทั่วสนาม สตันศัตรูและฮีลเพื่อนทั้งหมด" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Healing Rite", "Extra Stamina", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Divine Barrier"],
      late: ["Boundless Spirit", "Echo Shard", "Refresher", "Diviner's Kevlar"],
      situational: ["Curse", "Debuff Remover", "Warp Stone"]
    },
    strengths: ["ซัพพอร์ตทีมไฟต์ได้รอบด้าน", "มีฮีลและสตันหมู่", "สแปมสกิลดาวตกเคลียร์เลนได้"],
    weaknesses: ["เลือดน้อยมาก", "พึ่งพามานาและสปิริตสูง", "สู้เดี่ยวแทบไม่ได้"],
    counters: { strongAgainst: ["Seven", "McGinnis"], weakAgainst: ["Drifter", "Haze"] }
  },
  {
    id: "bebop",
    name: "Bebop",
    thaiName: "บีบ็อป",
    role: "Initiator / Disruptor",
    tier: "B",
    winRate: 48.40,
    winRateDelta: 0.78,
    pickRate: 34.29,
    pickRateDelta: -1.02,
    matchesWon: "154.2K",
    matchesLost: "164.4K",
    descriptionThai: "หุ่นยนต์ไซบอร์กผู้ใช้ตะขอเหล็กดึงศัตรูเข้ามาติดระเบิดเวลาและต่อยเสยลอยฟ้า พร้อมอัลติเมทลำแสงเลเซอร์ยักษ์",
    skillPriority: "1 > 2 > 4 > 3",
    abilities: [
      { num: 1, name: "Exploding Uppercut", cd: "8s", desc: "ต่อยหมัดอัปเปอร์คัตเสยศัตรูลอยกระเด็นไปข้างหลัง" },
      { num: 2, name: "Sticky Bomb", cd: "14s", desc: "แปะระเบิดเวลาบนตัวศัตรู ยิ่งทำดาเมจใส่เป้าหมาย ระเบิดจะยิ่งแรงขึ้นเรื่อยๆ" },
      { num: 3, name: "Hook", cd: "18s", desc: "ยิงตะขอเหล็กดึงศัตรูจากระยะไกลมาอยู่ตรงหน้าตนเอง" },
      { num: 4, name: "Hyper Beam", cd: "90s", desc: "อัลติเมท: ยิงลำแสงเลเซอร์ทำลายล้างขนาดมหึมา กวาดทำดาเมจวิญญาณมหาศาล" }
    ],
    itemBuilds: {
      early: ["Mystic Burst", "Extra Spirit", "Sprint Boots", "Extra Health"],
      mid: ["Echo Shard", "Superior Cooldown", "Bullet Armor", "Combat Barrier"],
      late: ["Boundless Spirit", "Escalating Exposure", "Diviner's Kevlar", "Refresher"],
      situational: ["Curse", "Phantom Strike", "Debuff Remover"]
    },
    strengths: ["สกิลดึง Hook เปลี่ยนเกมและเปิดไฟต์ลักพาตัวศัตรู", "ระเบิด Sticky Bomb ติดสแต็คดาเมจแรงมหาศาล", "อัลติเมทเลเซอร์กวาดทีมไฟต์ระยะไกล"],
    weaknesses: ["ถ้าดึง Hook พลาดจะเสียความน่ากลัวไปมาก", "ตัวใหญ่ ตกเป็นเป้ากระสุนได้ง่าย", "แพ้ไอเทมลบดีบัฟหรือวาปหนี"],
    counters: { strongAgainst: ["Seven", "Vindicta", "Grey Talon"], weakAgainst: ["Abrams", "Kelvin", "Paige"] }
  },
  {
    id: "calico",
    name: "Calico",
    thaiName: "คาลิโก้",
    role: "Assassin / Skirmisher",
    tier: "B",
    winRate: 48.33,
    winRateDelta: 0.22,
    pickRate: 13.91,
    pickRateDelta: -0.15,
    matchesWon: "63.2K",
    matchesLost: "67.5K",
    descriptionThai: "นักฆ่าสาวผู้มีสัญชาตญาณแมวป่า เคลื่อนไหวรวดเร็ว ดักซุ่มโจมตี และปลิดชีพเป้าหมายเดี่ยวได้อย่างว่องไว",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Pounce Strike", cd: "8s", desc: "พุ่งจู่โจมเป้าหมายสร้างดาเมจคริติคอล" },
      { num: 2, name: "Feline Reflexes", cd: "16s", desc: "หลบหลีกการโจมตีทางกายภาพทั้งหมดชั่วคราว" },
      { num: 3, name: "Shadow Stalk", cd: "20s", desc: "ซ่อนตัวในเงามืดเพิ่มความเร็วในการเคลื่อนที่" },
      { num: 4, name: "Nine Lives Frenzy", cd: "75s", desc: "อัลติเมท: ฟันกระหน่ำ 9 ครั้งในพริบตา พร้อมดูดเลือดเป้าหมาย" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Headshot Booster", "Sprint Boots", "Melee Lifesteal"],
      mid: ["Kinetic Dash", "Pristine Emblem", "Combat Barrier", "Tesla Bullets"],
      late: ["Crippling Headshot", "Lucky Shot", "Leech", "Unstoppable"],
      situational: ["Curse", "Metal Skin", "Glass Cannon"]
    },
    strengths: ["ความคล่องตัวและการลอบสังหารเป้าหมายเดี่ยว", "มีสกิลหลบหลีกการโจมตีกายภาพ", "เก็บตกตัวเลือดน้อยได้ดี"],
    weaknesses: ["บางมาก โดนเวทแรงๆ ตายทันที", "ไม่มีดาเมจหมู่สำหรับทีมไฟต์ใหญ่", "พึ่งพาจังหวะเข้าทำ"],
    counters: { strongAgainst: ["Vindicta", "Paige"], weakAgainst: ["Abrams", "Victor"] }
  },
  {
    id: "billy",
    name: "Billy",
    thaiName: "บิลลี่",
    role: "Brawler / Demolitionist",
    tier: "B",
    winRate: 47.91,
    winRateDelta: 1.36,
    pickRate: 28.52,
    pickRateDelta: -0.60,
    matchesWon: "128.0K",
    matchesLost: "139.2K",
    descriptionThai: "มือระเบิดร่างบึกบึน ถนัดการขว้างดินปืนไดนาไมต์และการต่อยระยะประชิดถล่มศัตรูเป็นกลุ่ม",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Dynamite Toss", cd: "9s", desc: "ขว้างไดนาไมต์ระเบิดพื้นที่ศัตรู" },
      { num: 2, name: "Brawler Punch", cd: "12s", desc: "ต่อยหมัดหนักผลักศัตรูกระเด็นและสตัน" },
      { num: 3, name: "Blast Shield", cd: "18s", desc: "กางโล่กันระเบิดดูดซับความเสียหาย" },
      { num: 4, name: "Mega Barrel Blast", cd: "80s", desc: "อัลติเมท: กลิ้งถังระเบิดยักษ์ชนศัตรูแตกกระจายสร้างความเสียหายมหาศาล" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Monster Rounds", "Sprint Boots", "Melee Lifesteal"],
      mid: ["Torment Pulse", "Bullet Armor", "Combat Barrier", "Healbane"],
      late: ["Colossus", "Phantom Strike", "Leech", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Reactive Barrier"]
    },
    strengths: ["ดาเมจระเบิดพื้นที่รุนแรง", "ทนทานและมีหมัดผลักขัดจังหวะ", "ดันเลนและทำลายป้อมได้ดี"],
    weaknesses: ["ระยะยิงปืนสั้น", "แพ้ตัวโจมตีระยะไกล", "ความแม่นยำของระเบิดขึ้นกับการคาดเดาทางเดินศัตรู"],
    counters: { strongAgainst: ["Haze", "Seven"], weakAgainst: ["Vindicta", "Apollo"] }
  },
  {
    id: "yamato",
    name: "Yamato",
    thaiName: "ยามาโตะ",
    role: "Assassin / Duelist",
    tier: "B",
    winRate: 47.85,
    winRateDelta: 0.52,
    pickRate: 25.43,
    pickRateDelta: -0.80,
    matchesWon: "114.2K",
    matchesLost: "124.5K",
    descriptionThai: "ซามูไรหญิงผู้ใช้ดาบคาตานะและพลังวิญญาณ มีอัลติเมทแปลงร่างอมตะไม่ตายเป็นเวลาหลายวินาที",
    skillPriority: "1 > 2 > 4 > 3",
    abilities: [
      { num: 1, name: "Power Slash", cd: "9s", desc: "ชาร์จฟันดาบปล่อยคลื่นวิญญาณผ่าศัตรูเป็นแนวยาว" },
      { num: 2, name: "Flying Strike", cd: "14s", desc: "พุ่งตัวข้ามฟากไปฟันศัตรูเป้าหมายในพริบตา" },
      { num: 3, name: "Crimson Slash", cd: "16s", desc: "หมุนตัวฟันรอบทิศทาง ฟื้นฟูเลือดตามจำนวนศัตรูที่โดน" },
      { num: 4, name: "Shadow Transformation", cd: "85s", desc: "อัลติเมท: แปลงร่างเป็นวิญญาณซามูไร อมตะชั่วขณะ ลบล้างดีบัฟ และรีเซ็ตคูลดาวน์สกิลทั้งหมด" }
    ],
    itemBuilds: {
      early: ["Melee Lifesteal", "Mystic Burst", "Sprint Boots", "Extra Health"],
      mid: ["Torment Pulse", "Cooldown Reduction", "Bullet Armor", "Combat Barrier"],
      late: ["Boundless Spirit", "Leech", "Refresher", "Colossus"],
      situational: ["Curse", "Metal Skin", "Debuff Remover"]
    },
    strengths: ["อัลติเมทอมตะช่วยแก้ทางสกิลเบิร์สได้ทุกลักษณะ", "ความคล่องตัวในการพุ่งเข้าหาเป้าหมาย", "ฟื้นฟูเลือดระหว่างไฟต์ได้ดี"],
    weaknesses: ["เล่นยากมาก ต้องกะจังหวะชาร์จฟันดาบแม่นยำ", "ถ้าใช้อัลติเมทพลาดจะตายทันทีหลังหมดเวลา", "Win Rate ขึ้นอยู่กับทักษะของผู้เล่น"],
    counters: { strongAgainst: ["Kelvin", "Lady Geist", "Vindicta"], weakAgainst: ["Abrams", "Victor", "Rat King"] }
  },
  {
    id: "venator",
    name: "Venator",
    thaiName: "เวเนเตอร์",
    role: "Hunter / Tracker",
    tier: "B",
    winRate: 47.42,
    winRateDelta: 0.16,
    pickRate: 38.67,
    pickRateDelta: -0.90,
    matchesWon: "172.5K",
    matchesLost: "191.3K",
    descriptionThai: "นายพรานแห่งความมืด ผู้ใช้หน้าไม้กลและกับดักตาข่ายในการล่าสัตว์ประหลาดและผู้เล่นเป้าหมายเดี่ยว",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Crossbow Volley", cd: "7s", desc: "ยิงลูกดอกหน้าไม้รัว 3 ดอกติดต่อกัน" },
      { num: 2, name: "Hunter's Net", cd: "15s", desc: "ยิงตาข่ายจับกุมศัตรู ห้ามเคลื่อนที่และห้ามพุ่งหลบ" },
      { num: 3, name: "Tracking Mark", cd: "18s", desc: "ทำเครื่องหมายบนตัวศัตรู ทำให้รับดาเมจเพิ่มขึ้นจากทุกแหล่ง" },
      { num: 4, name: "Lethal Ambush", cd: "75s", desc: "อัลติเมท: ล่องหนและเพิ่มความเร็ว เมื่อโจมตีครั้งแรกจะทำดาเมจคริติคอล 200%" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Headshot Booster", "Sprint Boots", "Extra Stamina"],
      mid: ["Tesla Bullets", "Kinetic Dash", "Combat Barrier", "Quicksilver Reload"],
      late: ["Crippling Headshot", "Lucky Shot", "Unstoppable", "Silencer"],
      situational: ["Curse", "Glass Cannon", "Metal Skin"]
    },
    strengths: ["การจับกุมด้วยตาข่ายล็อกการเคลื่อนที่ได้เฉียบขาด", "มาร์กเป้าหมายให้เพื่อนช่วยรุมยิงตายไว", "ล่องหนลอบสังหาร"],
    weaknesses: ["ไม่มีสกิลทำดาเมจหมู่", "แพ้การโดนรุมหลายตัวพร้อมกัน", "บางและไม่มีสกิลฮีลตัวเอง"],
    counters: { strongAgainst: ["Haze", "Drifter"], weakAgainst: ["Abrams", "Victor"] }
  },
  {
    id: "grey_talon",
    name: "Grey Talon",
    thaiName: "เกรย์ ทาลอน",
    role: "Sniper / Trapper",
    tier: "B",
    winRate: 46.72,
    winRateDelta: -0.66,
    pickRate: 15.41,
    pickRateDelta: -1.20,
    matchesWon: "67.5K",
    matchesLost: "77.0K",
    descriptionThai: "พรานเฒ่าผู้ใช้ธนูยาวโบราณ มีสกิลกระโดดเหินเวหา ยิงกับดักรากไม้ และมีอัลติเมทนกฮูกวิญญาณควบคุมทิศทางได้",
    skillPriority: "1 > 4 > 3 > 2",
    abilities: [
      { num: 1, name: "Charged Shot", cd: "6s", desc: "ง้างยิงลูกศรวิญญาณทะลวงสิ่งกีดขวาง ดาเมจสูงมาก" },
      { num: 2, name: "Rain of Fire", cd: "22s", desc: "กระโดดเหินเวหาลอยฟ้า ยิงธนูติดไฟสร้างความเสียหายต่อเนื่อง" },
      { num: 3, name: "Root Trap", cd: "18s", desc: "วางกับดักรากไม้ ศัตรูที่เหยียบจะถูกพันธนาการขยับไม่ได้" },
      { num: 4, name: "Guided Owl", cd: "85s", desc: "อัลติเมท: ปล่อยนกฮูกวิญญาณที่ผู้เล่นสามารถควบคุมการบินได้ ระเบิดสตันและทำดาเมจมหาศาล" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Headshot Booster", "Sprint Boots", "Mystic Burst"],
      mid: ["Surge of Power", "Superior Cooldown", "Combat Barrier", "Enduring Speed"],
      late: ["Boundless Spirit", "Echo Shard", "Diviner's Kevlar", "Crippling Headshot"],
      situational: ["Warp Stone", "Curse", "Spellbreaker"]
    },
    strengths: ["อัลติเมทนกฮูกบินได้ไกลและทำดาเมจมหาศาล", "สกิลชาร์จยิงทะลุกำแพงและครีปได้", "กับดักรากไม้ช่วยป้องกันการโดนล้วง"],
    weaknesses: ["บางมากและไม่มีสกิลพุ่งหนีเร็ว", "ขณะคุมนกฮูกตัวจะยืนนิ่งสนิท", "แพ้ตัวล้วงไวอย่าง Lash หรือ Drifter"],
    counters: { strongAgainst: ["Seven", "McGinnis"], weakAgainst: ["Lash", "Graves", "Wraith"] }
  },
  {
    id: "solomon",
    name: "Solomon",
    thaiName: "โซโลมอน",
    role: "Support / Warder",
    tier: "B",
    winRate: 46.60,
    winRateDelta: 1.29,
    pickRate: 31.05,
    pickRateDelta: -0.40,
    matchesWon: "135.2K",
    matchesLost: "154.9K",
    descriptionThai: "ผู้คุมกฎแห่งศาลศาสตรา ใช้คทาแห่งแสงสร้างบาเรียปกป้องอาณาเขตและตัดสินโทษศัตรู",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Verdict Bolt", cd: "8s", desc: "ยิงสายฟ้าแห่งการตัดสินลงทัณฑ์ศัตรู" },
      { num: 2, name: "Sacred Ward", cd: "16s", desc: "สร้างเขตแดนศักดิ์สิทธิ์ลดดาเมจที่เพื่อนร่วมทีมได้รับ 40%" },
      { num: 3, name: "Chains of Justice", cd: "18s", desc: "ล่ามโซ่ศัตรู 2 ตัวเข้าหากัน" },
      { num: 4, name: "Divine Retribution", cd: "80s", desc: "อัลติเมท: ปลดปล่อยพลังแสงพิพากษา ทำดาเมจตามปริมาณเลือดที่ศัตรูสร้างต่อเพื่อน" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Restorative Locket", "Sprint Boots", "Extra Spirit"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Divine Barrier"],
      late: ["Refresher", "Colossus", "Diviner's Kevlar", "Echo Shard"],
      situational: ["Curse", "Debuff Remover", "Warp Stone"]
    },
    strengths: ["ลดดาเมจให้เพื่อนร่วมทีมได้ดีเยี่ยม", "โซ่ตรึงล่ามศัตรูสร้างจังหวะคอมโบ", "แก้ทางทีมไฟต์ที่พยายามเบิร์สดาเมจ"],
    weaknesses: ["ดาเมจของตัวเองค่อนข้างต่ำ", "เคลื่อนที่ช้า", "พึ่งพาตำแหน่งการยืนของทีม"],
    counters: { strongAgainst: ["Haze", "Seven"], weakAgainst: ["Drifter", "Lash"] }
  },

  // C TIER (9 Heroes)
  {
    id: "warden",
    name: "Warden",
    thaiName: "วาร์เดน",
    role: "Brawler / Enforcer",
    tier: "C",
    winRate: 46.56,
    winRateDelta: -0.20,
    pickRate: 9.17,
    pickRateDelta: -0.50,
    matchesWon: "40.1K",
    matchesLost: "46.0K",
    descriptionThai: "ผู้บังคับการกองปราบ สามารถขว้างขวดน้ำยาลดความเร็ว สวมเกราะพลังงาน และล็อกพันธนาการศัตรูให้อยู่กับที่",
    skillPriority: "3 > 1 > 2 > 4",
    abilities: [
      { num: 1, name: "Alchemical Flask", cd: "12s", desc: "ปาขวดสารเคมีลดความเร็วและลดความเสียหายของศัตรู" },
      { num: 2, name: "Willpower", cd: "20s", desc: "มอบบาเรียพลังงานป้องกันความเสียหายและเพิ่มความเร็วเดิน" },
      { num: 3, name: "Binding Word", cd: "16s", desc: "สาปเป้าหมาย หากศัตรูไม่ออกจากระยะภายในเวลาที่กำหนดจะถูกกักขังและสตัน" },
      { num: 4, name: "Last Stand", cd: "85s", desc: "อัลติเมท: ระเบิดคลื่นพลังงานดูดพลังชีวิตจากศัตรูรอบตัวอย่างต่อเนื่อง" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Basic Magazine", "Sprint Boots", "Monster Rounds"],
      mid: ["Torment Pulse", "Bullet Armor", "Healbane", "Combat Barrier"],
      late: ["Colossus", "Leech", "Phantom Strike", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Debuff Remover"]
    },
    strengths: ["ไล่จับเป้าหมายที่ไม่มีสกิลแดชได้ดี", "เกราะป้องกันตัวแน่นหนา", "อัลติเมทดูดเลือดช่วยยื้อไฟต์"],
    weaknesses: ["สกิลกักขังหลบหนีได้ง่ายถ้าศัตรูมีสกิลพุ่งหรือ Warp Stone", "ดาเมจปืนธรรมดาค่อนข้างจำกัด", "Win Rate ต่ำในแพตช์ปัจจุบัน"],
    counters: { strongAgainst: ["Haze", "Infernus"], weakAgainst: ["Drifter", "Yamato", "Vindicta"] }
  },
  {
    id: "vyper",
    name: "Vyper",
    thaiName: "ไวเปอร์",
    role: "Assassin / Skirmisher",
    tier: "C",
    winRate: 46.37,
    winRateDelta: -0.15,
    pickRate: 13.21,
    pickRateDelta: -0.40,
    matchesWon: "57.8K",
    matchesLost: "66.8K",
    descriptionThai: "มือสังหารพิษร้าย มีความคล่องตัวในการเลื้อยและฉีดพิษกัดกร่อนเป้าหมายเดี่ยว",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Venom Spit", cd: "7s", desc: "พ่นพิษกัดกร่อนเกราะและลดฮีลของศัตรู" },
      { num: 2, name: "Serpent Slither", cd: "14s", desc: "เลื้อยด้วยความเร็วสูงทะลุยูนิตและสิ่งกีดขวาง" },
      { num: 3, name: "Poison Needle", cd: "12s", desc: "ยิงเข็มพิษสะสมสแต็คดาเมจ" },
      { num: 4, name: "Constrict Strike", cd: "80s", desc: "อัลติเมท: รัดเป้าหมายเดี่ยวไม่ให้ขยับและบีบทำดาเมจรุนแรง" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Basic Magazine", "Sprint Boots", "Mystic Burst"],
      mid: ["Decay", "Tesla Bullets", "Combat Barrier", "Enduring Speed"],
      late: ["Boundless Spirit", "Leech", "Unstoppable", "Curse"],
      situational: ["Metal Skin", "Debuff Remover", "Silence Glyph"]
    },
    strengths: ["กัดกร่อนเกราะและตัดฮีลได้ดี", "เลื้อยหนีและเข้าทำได้ว่องไว", "ดวลเดี่ยวค่อนข้างดุดัน"],
    weaknesses: ["เลือดน้อยมาก", "ไม่มีดาเมจหมู่ในทีมไฟต์", "แพ้การโดนเบิร์สดาเมจเร็ว"],
    counters: { strongAgainst: ["Victor", "Abrams"], weakAgainst: ["Lash", "Graves"] }
  },
  {
    id: "holliday",
    name: "Holliday",
    thaiName: "ฮอลลิเดย์",
    role: "Marksman / Trapper",
    tier: "C",
    winRate: 46.30,
    winRateDelta: 0.10,
    pickRate: 19.00,
    pickRateDelta: -0.30,
    matchesWon: "82.9K",
    matchesLost: "96.1K",
    descriptionThai: "นายอำเภอหญิงผู้ใช้ลูกซองคาวบอย มีแทรมโพลีนดีดตัว และมีบ่วงบาศจับกุมศัตรู",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Dust Devil", cd: "9s", desc: "ยิงพายุหมุนทรายผลักศัตรูลอยกระเด็น" },
      { num: 2, name: "Bounce Pad", cd: "20s", desc: "วางแท่นกระโดดดีดตัวขึ้นสู่อากาศสูง" },
      { num: 3, name: "Crack Shot", cd: "12s", desc: "ยิงกระสุนคริติคอลพลังสูงใส่เป้าหมาย" },
      { num: 4, name: "Lasso Throw", cd: "75s", desc: "อัลติเมท: ขว้างบ่วงบาศมัดศัตรูแล้วลากไปตามพื้น" }
    ],
    itemBuilds: {
      early: ["Headshot Booster", "Basic Magazine", "Sprint Boots", "Extra Stamina"],
      mid: ["Kinetic Dash", "Pristine Emblem", "Combat Barrier", "Tesla Bullets"],
      late: ["Crippling Headshot", "Lucky Shot", "Unstoppable", "Leech"],
      situational: ["Curse", "Metal Skin", "Glass Cannon"]
    },
    strengths: ["ความคล่องตัวในการดีดตัวขึ้นฟ้า", "บ่วงบาศจับลากศัตรูตัวสำคัญ", "ดาเมจคริติคอลหัวรุนแรง"],
    weaknesses: ["บ่วงบาศเล็งยากและระยะไม่ไกลมาก", "อัตรายิงช้า", "แพ้ตัวพุ่งชาร์จประชิด"],
    counters: { strongAgainst: ["Seven", "McGinnis"], weakAgainst: ["Abrams", "Victor"] }
  },
  {
    id: "viscous",
    name: "Viscous",
    thaiName: "วิสคัส",
    role: "Support / Disruptor",
    tier: "C",
    winRate: 46.17,
    winRateDelta: -0.35,
    pickRate: 12.41,
    pickRateDelta: -0.80,
    matchesWon: "53.9K",
    matchesLost: "62.8K",
    descriptionThai: "สิ่งมีชีวิตเมือกเหนียวสีเขียว สามารถหุ้มเพื่อนร่วมทีมด้วยก้อนเมือกอมตะ และแปลงร่างเป็นลูกบอลเมือกยักษ์กลิ้งทับศัตรู",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Splatter", cd: "7s", desc: "ปาบอลเมือกเหนียวแตกกระจายทำดาเมจและสโลว์" },
      { num: 2, name: "The Cube", cd: "22s", desc: "หุ้มตัวเองหรือเพื่อนด้วยก้อนลูกบาศก์เมือก อมตะและฮีลเลือดชั่วขณะ" },
      { num: 3, name: "Puddle Punch", cd: "14s", desc: "งอกหมัดเมือกยักษ์ขึ้นมาจากพื้นเสยศัตรูลอยกระเด็น" },
      { num: 4, name: "Goo Ball", cd: "80s", desc: "อัลติเมท: แปลงร่างเป็นลูกบอลเมือกยักษ์กลิ้งทับศัตรู สตันและสะท้อนกระสุน" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Extra Spirit", "Sprint Boots", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Enduring Speed"],
      late: ["Boundless Spirit", "Colossus", "Diviner's Kevlar", "Echo Shard"],
      situational: ["Debuff Remover", "Curse", "Warp Stone"]
    },
    strengths: ["ก้อน Cube ช่วยชีวิตเพื่อนจากดาเมจเบิร์สได้ 100%", "ลูกบอลกลิ้งกวนทีมไฟต์ได้ยาวนาน", "หมัดเมือกต่อยข้ามกำแพงได้"],
    weaknesses: ["ดาเมจสังหารศัตรูต่ำ", "ลูกบอล Goo Ball เลี้ยวและบังคับทิศทางยาก", "ถ้าเซฟเพื่อนด้วย Cube ผิดจังหวะอาจทำให้เพื่อนหลุดคอมโบ"],
    counters: { strongAgainst: ["Wraith", "Haze", "Lady Geist"], weakAgainst: ["Seven", "Graves", "Kelvin"] }
  },
  {
    id: "silver",
    name: "Silver",
    thaiName: "ซิลเวอร์",
    role: "Carry / Marksman",
    tier: "C",
    winRate: 45.85,
    winRateDelta: -0.10,
    pickRate: 28.65,
    pickRateDelta: -1.20,
    matchesWon: "124.6K",
    matchesLost: "147.2K",
    descriptionThai: "มือปืนเงินบริสุทธิ์ ใช้กระสุนเงินเจาะเกราะปีศาจ มีความแม่นยำสูงแต่ต้องอาศัยการยืนยิงที่ปลอดภัย",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Silver Bullet", cd: "8s", desc: "ยิงกระสุนเงินทะลุเกราะสร้างดาเมจจริง" },
      { num: 2, name: "Purifying Smoke", cd: "18s", desc: "พรางตัวในควันสีเงินเพิ่มความเร็วหลบหลีก" },
      { num: 3, name: "Righteous Fury", cd: "Passive", desc: "เพิ่มพลังโจมตีต่อเนื่องเมื่อยิงเป้าหมายเดิม" },
      { num: 4, name: "Judgment Barrage", cd: "85s", desc: "อัลติเมท: กราดยิงกระสุนเงินรอบตัวสร้างความเสียหายรุนแรง" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Headshot Booster", "Sprint Boots", "Hollow Point Ward"],
      mid: ["Tesla Bullets", "Kinetic Dash", "Combat Barrier", "Quicksilver Reload"],
      late: ["Ricochet", "Lucky Shot", "Crippling Headshot", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Glass Cannon"]
    },
    strengths: ["ดาเมจเจาะเกราะสม่ำเสมอ", "ยิงฟรีระยะกลางได้ดี", "สเกลไอเทมเลทเกมได้แรง"],
    weaknesses: ["บางและขาดสกิลหนีที่ดี", "Win Rate ไม่โดดเด่นในแพตช์นี้", "ต้องการเพื่อนคอยช่วยเซฟ"],
    counters: { strongAgainst: ["McGinnis", "Abrams"], weakAgainst: ["Lash", "Graves"] }
  },
  {
    id: "paradox",
    name: "Paradox",
    thaiName: "พาราด็อกซ์",
    role: "Support / Control",
    tier: "C",
    winRate: 45.83,
    winRateDelta: -0.42,
    pickRate: 23.76,
    pickRateDelta: -0.90,
    matchesWon: "103.2K",
    matchesLost: "122.0K",
    descriptionThai: "ผู้ควบคุมกาลเวลาและมิติคู่ขนาน มีสกิลกำแพงเวลาหยุดกระสุน และอัลติเมทสลับตำแหน่งกับศัตรูในระยะไกล",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Pulse Grenade", cd: "10s", desc: "ปาระเบิดคลื่นเวลา สร้างความเสียหายเป็นจังหวะ 4 ครั้งและลดสปีด" },
      { num: 2, name: "Time Wall", cd: "22s", desc: "กางกำแพงมิติเวลาหยุดกระสุนทุกชนิด และทำให้ศัตรูที่เดินผ่านติดสตัน" },
      { num: 3, name: "Kinetic Carbine", cd: "14s", desc: "ชาร์จพลังปืนคาร์ไบน์ ยิงกระสุนเวลาสตันศัตรูและทำดาเมจแรงตามระยะทาง" },
      { num: 4, name: "Paradoxical Swap", cd: "65s", desc: "อัลติเมท: ยิงลำแสงสลับตำแหน่งกับศัตรูในพริบตา ดึงศัตรูมาอยู่กลางวงล้อมเพื่อน" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Mystic Burst", "Extra Stamina", "Sprint Boots"],
      mid: ["Superior Cooldown", "Combat Barrier", "Enduring Speed", "Rescue Beam"],
      late: ["Boundless Spirit", "Echo Shard", "Curse", "Diviner's Kevlar"],
      situational: ["Warp Stone", "Debuff Remover", "Spellbreaker"]
    },
    strengths: ["สกิลสลับตำแหน่ง Swap ดึงเป้าหมายสำคัญมาให้ทีมรุมฆ่าได้ชัวร์", "กำแพง Time Wall บล็อกการยิงของศัตรูได้สมบูรณ์แบบ", "สกิลชาร์จยิงสตันจากระยะไกล"],
    weaknesses: ["เมื่อกดสลับตำแหน่ง ตัวเองก็กระเด็นไปอยู่กลางวงศัตรูด้วย (เสี่ยงตายสูง)", "ดาเมจเบิร์สด้วยตัวเองไม่พอปิดคิล", "พึ่งพาเพื่อนร่วมทีมสูงมาก"],
    counters: { strongAgainst: ["Seven", "Graves", "Vindicta"], weakAgainst: ["Lash", "Bebop", "Drifter"] }
  },
  {
    id: "rem",
    name: "Rem",
    thaiName: "เรม",
    role: "Support / Enchanter",
    tier: "C",
    winRate: 45.65,
    winRateDelta: -0.18,
    pickRate: 32.82,
    pickRateDelta: -0.55,
    matchesWon: "141.6K",
    matchesLost: "168.6K",
    descriptionThai: "ผู้ชี้นำความฝัน มีพลังสะกดหลับและสร้างมิติภาพลวงตาหลอกล่อศัตรู",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Dream Shard", cd: "8s", desc: "ยิงสะเก็ดความฝันทำดาเมจวิญญาณ" },
      { num: 2, name: "Slumber Cloud", cd: "18s", desc: "ปล่อยละอองหลับทำให้ศัตรูในพื้นที่ง่วงนอนและหลับไป" },
      { num: 3, name: "Lucid Shield", cd: "16s", desc: "มอบบาเรียคุ้มกันความฝันดูดซับดาเมจ" },
      { num: 4, name: "Nightmare Labyrinth", cd: "85s", desc: "อัลติเมท: ขังศัตรูในเขาวงกตฝันร้าย สับสนทิศทางและทำดาเมจต่อเนื่อง" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Healing Rite", "Extra Stamina", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Divine Barrier"],
      late: ["Boundless Spirit", "Echo Shard", "Refresher", "Curse"],
      situational: ["Warp Stone", "Debuff Remover", "Spellbreaker"]
    },
    strengths: ["สกิลสะกดหลับหมู่หยุดไฟต์ได้ดี", "บาเรียป้องกันเพื่อนร่วมทีม", "ป่วนการเดินของศัตรู"],
    weaknesses: ["ดาเมจสังหารเดี่ยวต่ำ", "ศัตรูที่หลับจะตื่นทันทีเมื่อถูกดาเมจ", "บางมาก"],
    counters: { strongAgainst: ["Haze", "Seven"], weakAgainst: ["Lash", "Drifter"] }
  },
  {
    id: "the_doorman",
    name: "The Doorman",
    thaiName: "เดอะ ดอร์แมน",
    role: "Controller / Shifter",
    tier: "C",
    winRate: 45.52,
    winRateDelta: -0.30,
    pickRate: 15.56,
    pickRateDelta: -0.70,
    matchesWon: "67.1K",
    matchesLost: "80.3K",
    descriptionThai: "นายทวารมิติผู้เปิดประตูลัดข้ามสนามรบ สามารถเปิดประตูวาร์ปให้ทั้งทีมทะลุไปโผล่หลังศัตรู",
    skillPriority: "3 > 1 > 4 > 2",
    abilities: [
      { num: 1, name: "Door Slam", cd: "8s", desc: "ฟาดประตูมิติใส่ศัตรูทำดาเมจและสตัน" },
      { num: 2, name: "Revolving Door", cd: "16s", desc: "หมุนประตูผลักศัตรูกระเด็นและสะท้อนกระสุน" },
      { num: 3, name: "Portal Gateway", cd: "25s", desc: "เปิดประตูวาร์ป 2 บานเชื่อมต่อพื้นที่ให้ทีมเดินผ่าน" },
      { num: 4, name: "Grand Foyer", cd: "90s", desc: "อัลติเมท: ดึงศัตรูเข้ามาในโถงทางเชื่อมมิติ ขังเดี่ยวและทำดาเมจ" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Extra Stamina", "Sprint Boots", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Enduring Speed"],
      late: ["Colossus", "Boundless Spirit", "Diviner's Kevlar", "Refresher"],
      situational: ["Curse", "Debuff Remover", "Warp Stone"]
    },
    strengths: ["การเคลื่อนย้ายทีมข้ามแมปด้วยประตูวาร์ป", "เปิดมุมแก๊งค์ที่คาดเดาไม่ได้", "มีสกิลสะท้อนกระสุน"],
    weaknesses: ["ประตูวาร์ปศัตรูก็เดินผ่านได้ถ้าไม่ระวัง", "ดาเมจต่อวินาทีต่ำ", "ต้องอาศัยการสื่อสารในทีม"],
    counters: { strongAgainst: ["McGinnis", "Abrams"], weakAgainst: ["Seven", "Graves"] }
  },
  {
    id: "mina",
    name: "Mina",
    thaiName: "มิน่า",
    role: "Skirmisher / Duelist",
    tier: "C",
    winRate: 45.37,
    winRateDelta: -0.40,
    pickRate: 39.19,
    pickRateDelta: -1.10,
    matchesWon: "168.9K",
    matchesLost: "203.4K",
    descriptionThai: "นักแม่นปืนสั้นคู่ผู้รวดเร็ว มีการเคลื่อนไหวแบบกายกรรมและยิงสกัดขา มี Pick Rate สูงถึงเกือบ 40% แต่วินเรทค่อนข้างต่ำเนื่องจากเล่นยาก",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Acrobatic Shot", cd: "7s", desc: "ตีลังกายิงปืนคู่ทำดาเมจคริติคอล" },
      { num: 2, name: "Wire Trap", cd: "15s", desc: "ขึงลวดสลิงสโลว์และตัดความเร็วศัตรู" },
      { num: 3, name: "Gunslinger Reflex", cd: "18s", desc: "เพิ่มความเร็วการยิงและรีโหลดอัตโนมัติเมื่อหลบการโจมตี" },
      { num: 4, name: "Dual Barrage", cd: "80s", desc: "อัลติเมท: ระดมยิงปืนคู่รอบทิศทางอย่างรวดเร็วพร้อมสลายเกราะ" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Headshot Booster", "Sprint Boots", "Extra Stamina"],
      mid: ["Tesla Bullets", "Kinetic Dash", "Combat Barrier", "Quicksilver Reload"],
      late: ["Ricochet", "Lucky Shot", "Crippling Headshot", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Glass Cannon"]
    },
    strengths: ["ความเร็วและการเคลื่อนที่ว่องไว", "Pick Rate นิยมสูงมาก", "ดวล 1-1 ระยะกลางได้ดี"],
    weaknesses: ["Win Rate อยู่ในกลุ่มรั้งท้าย (45.37%)", "บางและแพ้ CC หนักๆ", "สเกลดาเมจสู้แครี่แท้ๆ ช่วงท้ายเกมยาก"],
    counters: { strongAgainst: ["Vindicta", "Seven"], weakAgainst: ["Abrams", "Victor", "Graves"] }
  },

  // D TIER (4 Heroes)
  {
    id: "shiv",
    name: "Shiv",
    thaiName: "ชิฟ",
    role: "Brawler / Executioner",
    tier: "D",
    winRate: 45.05,
    winRateDelta: 1.44,
    pickRate: 23.14,
    pickRateDelta: 0.15,
    matchesWon: "98.9K",
    matchesLost: "120.6K",
    descriptionThai: "นักเลงหัวไม้ผู้ใช้มีดสั้นและสุนัขดุ มีพลัง Rage สะสมดาเมจและมีอัลติเมทพุ่งปลิดชีพศัตรูเลือดต่ำทันทีโดยไม่สนเกราะ",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Serrated Knives", cd: "6s", desc: "ปามีดสั้นติดเลือดออก สร้างดาเมจและสโลว์ศัตรู" },
      { num: 2, name: "Slice and Dice", cd: "12s", desc: "พุ่งตัวไปข้างหน้าตวัดมีดฟันศัตรูเป็นแนวกว้าง" },
      { num: 3, name: "Bloodletting", cd: "20s", desc: "ผลัดผ่อนความเสียหายที่ได้รับไปเป็นดาเมจต่อเนื่องแทน และลบล้างดาเมจนั้นบางส่วน" },
      { num: 4, name: "Killing Blow", cd: "70s", desc: "อัลติเมท: พุ่งทะลวงปลิดชีพศัตรูทันทีหากเลือดศัตรูต่ำกว่าเกณฑ์ที่กำหนด (Execute)" }
    ],
    itemBuilds: {
      early: ["Extra Health", "Mystic Burst", "Sprint Boots", "Monster Rounds"],
      mid: ["Torment Pulse", "Lifesteal Booster", "Bullet Armor", "Healbane"],
      late: ["Colossus", "Boundless Spirit", "Leech", "Unstoppable"],
      situational: ["Metal Skin", "Curse", "Debuff Remover"]
    },
    strengths: ["สกิล Killing Blow ประหารชีวิตเป้าหมายเลือดต่ำได้ทันที", "มีดสั้นปาตอดและสโลว์ได้ดีในเลน", "ความสามารถในการยื้อเลือด Bloodletting"],
    weaknesses: ["Win Rate ต่ำสุดกลุ่มท้ายตาราง (45.05%)", "ระยะเข้าทำสั้นมาก เสี่ยงโดนยิงฟรี", "ถ้าอัลติเมทฟันไม่ตายจะหลุดตำแหน่งลึก"],
    counters: { strongAgainst: ["Kelvin", "Lady Geist"], weakAgainst: ["Vindicta", "Graves", "Wraith"] }
  },
  {
    id: "mirage",
    name: "Mirage",
    thaiName: "มิราจ",
    role: "Ganker / Global",
    tier: "D",
    winRate: 44.86,
    winRateDelta: 0.24,
    pickRate: 10.49,
    pickRateDelta: -0.60,
    matchesWon: "44.5K",
    matchesLost: "54.7K",
    descriptionThai: "ผู้เดินทางแห่งทะเลทราย สามารถปล่อยพายุทรายยกศัตรูขึ้นฟ้า ยิงสการับแมลงกัดกิน และมีอัลติเมทวาร์ปไปหาเพื่อนได้ทั่วแผนที่",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Tornado", cd: "14s", desc: "ปล่อยพายุหมุนทรายยกศัตรูทุกคนในทางที่ผ่านลอยขึ้นฟ้า" },
      { num: 2, name: "Fire Beetles", cd: "10s", desc: "ยิงฝูงแมลงปีกแข็งกัดกินพลังชีวิตและลดเกราะกระสุนศัตรู" },
      { num: 3, name: "Djinn's Mark", cd: "Passive", desc: "สะสมสแต็คกระสุนเพื่อสร้างระเบิดวิญญาณหลังจากยิงครบตามกำหนด" },
      { num: 4, name: "Traveler", cd: "90s", desc: "อัลติเมท: เทเลพอร์ตตัวเองข้ามแผนที่ไปหาเพื่อนร่วมทีมหรือครีปพันธมิตรได้ทุกที่ทันที" }
    ],
    itemBuilds: {
      early: ["Basic Magazine", "Extra Spirit", "Sprint Boots", "Headshot Booster"],
      mid: ["Tesla Bullets", "Quicksilver Reload", "Combat Barrier", "Enduring Speed"],
      late: ["Ricochet", "Lucky Shot", "Unstoppable", "Crippling Headshot"],
      situational: ["Curse", "Metal Skin", "Debuff Remover"]
    },
    strengths: ["การมีตัวตนอยู่ทั่วทั้งแผนที่ด้วยอัลติเมทวาร์ปช่วยเพื่อน", "พายุทรายยกศัตรูขัดจังหวะไฟต์ได้ดี", "สปริตสแต็คดาเมจยิงแรง"],
    weaknesses: ["Win Rate ต่ำ (44.86%) ไม่ได้รับความนิยมในเมต้าปัจจุบัน", "ไม่มีดาเมจเบิร์สปิดฉากทันใจ", "ต้องอาศัยทีมเวิร์กและการดักซุ่มสูง"],
    counters: { strongAgainst: ["McGinnis", "Seven"], weakAgainst: ["Graves", "Abrams", "Haze"] }
  },
  {
    id: "sinclair",
    name: "Sinclair",
    thaiName: "ซินแคลร์",
    role: "Support / Hexer",
    tier: "D",
    winRate: 44.84,
    winRateDelta: -1.96,
    pickRate: 9.44,
    pickRateDelta: -1.50,
    matchesWon: "39.8K",
    matchesLost: "49.0K",
    descriptionThai: "หมอผีวูดูผู้ใช้ตุ๊กตาสาปแช่งและพิธีกรรมมืด สามารถเสกศัตรูให้กลายเป็นกบไร้พลังป้องกัน",
    skillPriority: "2 > 1 > 4 > 3",
    abilities: [
      { num: 1, name: "Voodoo Doll", cd: "10s", desc: "ผูกมัดวิญญาณกับตุ๊กตา ถ่ายโอนดาเมจที่ทำต่อตุ๊กตาไปยังศัตรู" },
      { num: 2, name: "Hex Transformation", cd: "18s", desc: "เสกศัตรูเป้าหมายให้กลายเป็นกบชั่วคราว ปิดการใช้สกิลและการยิง" },
      { num: 3, name: "Cursed Totem", cd: "22s", desc: "ปักเสาโทเทมสาปแช่งลดดาเมจและลดความเร็วของศัตรูรอบข้าง" },
      { num: 4, name: "Soul Sacrifice", cd: "85s", desc: "อัลติเมท: สละพลังวิญญาณสร้างคลื่นคำสาปมืดระเบิดเลือดศัตรูเป็นเปอร์เซ็นต์" }
    ],
    itemBuilds: {
      early: ["Extra Spirit", "Healing Rite", "Extra Stamina", "Restorative Locket"],
      mid: ["Rescue Beam", "Superior Cooldown", "Combat Barrier", "Divine Barrier"],
      late: ["Boundless Spirit", "Echo Shard", "Refresher", "Curse"],
      situational: ["Debuff Remover", "Warp Stone", "Spellbreaker"]
    },
    strengths: ["สกิล Hex เสกศัตรูเป็นกบตัดตัวอันตรายออกจากไฟต์ได้เด็ดขาด", "ตุ๊กตาวูดูส่งต่อดาเมจจากระยะปลอดภัย", "เสาโทเทมลดทอนพลังศัตรู"],
    weaknesses: ["Win Rate ลดลงมากถึง -1.96% ในแพตช์ล่าสุด", "บางมากและเคลื่อนที่ช้า", "ขาดดาเมจของตนเอง"],
    counters: { strongAgainst: ["Haze", "Seven"], weakAgainst: ["Drifter", "Lash", "Graves"] }
  },
  {
    id: "pocket",
    name: "Pocket",
    thaiName: "พ็อกเก็ต",
    role: "Mage / Assassin",
    tier: "D",
    winRate: 44.72,
    winRateDelta: -0.13,
    pickRate: 16.85,
    pickRateDelta: -0.75,
    matchesWon: "71.4K",
    matchesLost: "88.3K",
    descriptionThai: "เด็กหนุ่มกระเป๋าเอกสารวิเศษ สามารถมุดหลบซ่อนตัวในกระเป๋า ปล่อยเสื้อคลุมบินทำดาเมจ และระเบิดพิษหมู่ที่สร้างความเสียหายอย่างรุนแรง",
    skillPriority: "1 > 3 > 4 > 2",
    abilities: [
      { num: 1, name: "Barrage", cd: "8s", desc: "ยิงคลื่นกระสุนวิเศษทำดาเมจเป็นแนวกว้างและสะสมสแต็คพิษ" },
      { num: 2, name: "Flying Cloak", cd: "16s", desc: "ปล่อยเสื้อคลุมบินไปข้างหน้า สามารถกดวาร์ปสลับไปยังตำแหน่งเสื้อคลุมได้" },
      { num: 3, name: "Enchanter's Satchel", cd: "18s", desc: "มุดหลบเข้าไปในกระเป๋าเอกสาร อมตะชั่วขณะและระเบิดดาเมจเมื่อโผล่ออกมา" },
      { num: 4, name: "Affliction", cd: "85s", desc: "อัลติเมท: ระเบิดคำสาปพิษร้ายใส่ศัตรูทุกคนในระยะวงกว้าง ลดเลือดศัตรูอย่างหนักหน่วงต่อเนื่องหลายวินาที" }
    ],
    itemBuilds: {
      early: ["Mystic Burst", "Extra Spirit", "Extra Stamina", "Sprint Boots"],
      mid: ["Majestic Leap", "Superior Cooldown", "Bullet Armor", "Combat Barrier"],
      late: ["Boundless Spirit", "Echo Shard", "Ethereal Shift", "Escalating Exposure"],
      situational: ["Curse", "Warp Stone", "Debuff Remover"]
    },
    strengths: ["หลบหลีกสกิลได้ดีด้วยกระเป๋า Satchel และเสื้อคลุมวาร์ป", "อัลติเมท Affliction สร้างดาเมจพิษหมู่สะสมมหาศาล", "ความสามารถในการเข้าออกไฟต์"],
    weaknesses: ["Win Rate ต่ำที่สุดในเกม (44.72%)", "เล่นยากมาก ความผิดพลาดเพียงครั้งเดียวทำให้ตายทันที", "พิษอัลติเมทไม่สามารถสังหารศัตรูให้ตายได้โดยตรง (ต้องมีดาเมจอื่นมาปิดคิล)"],
    counters: { strongAgainst: ["Rat King", "Seven"], weakAgainst: ["Graves", "Abrams", "Victor"] }
  }
];
