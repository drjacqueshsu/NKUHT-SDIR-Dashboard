// 國立高雄餐旅大學 - 校務公開資料 數據集 (依據問責報告0325 + 校務基本資料庫)
// 數據以學年度為主軸；S1 為上學期、S2 為下學期；單位區分行政/學術(系/所/學程/院)

window.NKUHT_DATA = {
  meta: {
    school: { zh: "國立高雄餐旅大學", en: "National Kaohsiung University of Hospitality and Tourism" },
    publisher: {
      zh: "永續發展與校務研究中心 校務策略研究組",
      en: "Office of Institutional Research, Center for Sustainability Development and Institutional Research"
    },
    url: "https://sdir.nkuht.edu.tw/",
    openDataHub: "https://sites.google.com/staff.nkuht.edu.tw/sdir-ir/opendata",
    years: [109, 110, 111, 112, 113, 114],
    semesters: ["S1", "S2"],
  },

  // --- 官方開放資料專區連結 (補充本儀表板未涵蓋的「報告書 PDF」) ---
  // 註:本儀表板已涵蓋學生/教務/學務/教師/研究面的數據視覺化,
  // 此處僅保留「報告書下載」類資料(財務、ESG、校務研究)
  officialLinks: {
    finance: {
      zh: "財務面 — 學校收入及支出報告",
      en: "Finance — Income & Expenditure Reports",
      url: "https://sites.google.com/staff.nkuht.edu.tw/sdirfin",
      tag: "財務報告",
      icon: "💰",
      desc: { zh: "本校財務報表、收支結構", en: "Financial statements" }
    },
    esg: {
      zh: "ESG 永續發展 — 2023 USR 年報、2023 永續報告書",
      en: "ESG — USR Annual & Sustainability Report 2023",
      url: "https://sites.google.com/staff.nkuht.edu.tw/sdiresg",
      tag: "永續報告",
      icon: "🌱",
      desc: { zh: "大學社會責任年報、永續報告書 PDF", en: "USR & sustainability PDFs" }
    },
    ir: {
      zh: "校務研究 — 108-114 學年研究議題、校務問責報告書",
      en: "Institutional Research — Topics & Accountability Reports",
      url: "https://sites.google.com/staff.nkuht.edu.tw/sdirra",
      tag: "問責報告",
      icon: "📊",
      desc: { zh: "校務研究議題彙編、問責報告書", en: "IR topics & accountability reports" }
    }
  },

  // --- 1. 學生數規模 (表4-2) ---
  studentsByYear: [
    { year: 109, total: 4929, day: 3140, ext: 1299, master: 168, masterExec: 56, doc: 35, fiveYr: 252 },
    { year: 110, total: 4798, day: 3106, ext: 1208, master: 168, masterExec: 51, doc: 32, fiveYr: 252 },
    { year: 111, total: 4521, day: 3009, ext: 1052, master: 155, masterExec: 33, doc: 31, fiveYr: 254 },
    { year: 112, total: 4303, day: 2891, ext: 973,  master: 124, masterExec: 33, doc: 37, fiveYr: 252 },
    { year: 113, total: 4101, day: 2772, ext: 889,  master: 130, masterExec: 26, doc: 39, fiveYr: 250 },
    { year: 114, total: 3972, day: 2745, ext: 889,  master: 149, masterExec: 28, doc: 39, fiveYr: 252 },
  ],

  // --- 2. 各學院規模 (表1-2) ---
  collegeStudents: {
    "國際學院":  [623, 624, 612, 591, 580, 581],
    "廚藝學院":  [895, 897, 896, 897, 900, 911],
    "餐旅學院":  [1934,1917,1816,1702,1583,1513],
    "觀光學院":  [1477,1360,1197,1113,1038, 967],
  },

  // --- 3. 性別分布 (表1-3) ---
  genderByYear: [
    { year: 109, m: 1552, f: 3377 },
    { year: 110, m: 1597, f: 3201 },
    { year: 111, m: 1538, f: 2983 },
    { year: 112, m: 1497, f: 2806 },
    { year: 113, m: 1454, f: 2647 },
    { year: 114, m: 1468, f: 2504 },
  ],

  // --- 4. 師資結構 (表1-4 / 1-5) ---
  faculty: [
    { year: 109, prof: 37, asso: 60, asst: 52, lect: 11, total: 160, doc: 0, profTech: 0 },
    { year: 110, prof: 35, asso: 58, asst: 53, lect: 12, total: 164, doc: 109, profTech: 23 },
    { year: 111, prof: 36, asso: 51, asst: 55, lect: 12, total: 158, doc: 111, profTech: 23 },
    { year: 112, prof: 35, asso: 55, asst: 46, lect: 15, total: 155, doc: 110, profTech: 20 },
    { year: 113, prof: 38, asso: 53, asst: 47, lect: 17, total: 159, doc: 112, profTech: 23 },
    { year: 114, prof: 35, asso: 55, asst: 44, lect: 13, total: 151, doc: 108, profTech: 21 },
  ],
  facultyGender114: { m: 92, f: 59 },

  // --- 5. 生師比 (圖1-10) ---
  studentTeacherRatio: [
    { year: 111, all: 18.5, day: 18.0 },
    { year: 112, all: 18.0, day: 17.6 },
    { year: 113, all: 17.6, day: 17.4 },
    { year: 114, all: 17.4, day: 17.2 },
  ],

  // --- 6. 學生 / 職員比 (表1-7) ---
  staffRatio: [
    { year: 110, staff: 194, students: 4798, ratio: 26.36 },
    { year: 111, staff: 193, students: 4521, ratio: 24.98 },
    { year: 112, staff: 183, students: 4303, ratio: 23.51 },
    { year: 113, staff: 176, students: 4101, ratio: 23.30 },
    { year: 114, staff: 176, students: 3972, ratio: 22.57 },
  ],

  // --- 7. 校地校舍 (表1-1) ---
  campus: [
    { year: 109, students: 4929, land: 150044, building: 105706, perStudentLand: 30.44, perStudentBuilding: 21.45 },
    { year: 110, students: 4798, land: 150044, building: 105706, perStudentLand: 31.27, perStudentBuilding: 22.03 },
    { year: 111, students: 4521, land: 150044, building: 105706, perStudentLand: 33.19, perStudentBuilding: 23.38 },
    { year: 112, students: 4303, land: 150044, building: 105706, perStudentLand: 34.87, perStudentBuilding: 24.57 },
    { year: 113, students: 4100, land: 150044, building: 105706, perStudentLand: 36.60, perStudentBuilding: 25.78 },
    { year: 114, students: 3972, land: 150044, building: 105706, perStudentLand: 37.97, perStudentBuilding: 26.75 },
  ],

  // --- 8. 註冊率 (圖2-1, 2-2) ---
  registration: {
    school: [{y:111, r:89.1},{y:112,r:84.5},{y:113,r:78.8},{y:114,r:86.83}],
    nation: [{y:111, r:87.2},{y:112,r:86.46},{y:113,r:87.5},{y:114,r:87.97}],
    byProgram: {
      "學士班(四技)": [{y:111,r:84.21},{y:112,r:79.52},{y:113,r:69.47},{y:114,r:83.42}],
      "二技":        [{y:111,r:72.24},{y:112,r:57.81},{y:113,r:60.28},{y:114,r:65.77}],
      "碩士班":      [{y:111,r:61.77},{y:112,r:48.01},{y:113,r:71.10},{y:114,r:62.50}],
    }
  },

  // --- 9. 就學穩定率 (圖2-3) ---
  retention: [
    { year: 111, day: 96.5, ext: 96.94 },
    { year: 112, day: 95.8, ext: 94.5 },
    { year: 113, day: 94.23, ext: 92.3 },
    { year: 114, day: 97.08, ext: 90.91 },
  ],

  // --- 10. 113 休學率 (表2-4) ---
  leaveRate113: [
    { dept: "餐旅管理研究所", n: 28, leave: 15, rate: 53.57 },
    { dept: "飲食文化暨餐飲創新研究所", n: 64, leave: 18, rate: 28.13 },
    { dept: "國際觀光餐旅全英文碩士學位學程", n: 23, leave: 5, rate: 21.74 },
    { dept: "觀光研究所", n: 76, leave: 11, rate: 14.47 },
    { dept: "應用日語系", n: 153, leave: 14, rate: 9.15 },
    { dept: "餐飲廚藝科", n: 249, leave: 22, rate: 8.84 },
    { dept: "旅運管理系", n: 293, leave: 22, rate: 7.51 },
    { dept: "應用英語系", n: 157, leave: 10, rate: 6.37 },
    { dept: "餐飲管理系", n: 762, leave: 35, rate: 4.59 },
    { dept: "旅館管理系", n: 555, leave: 23, rate: 4.14 },
    { dept: "休閒暨遊憩管理系", n: 292, leave: 10, rate: 3.42 },
    { dept: "中餐廚藝系", n: 192, leave: 5, rate: 2.60 },
    { dept: "西餐廚藝系", n: 194, leave: 5, rate: 2.58 },
    { dept: "航空暨運輸服務管理系", n: 377, leave: 9, rate: 2.39 },
    { dept: "餐旅暨會展行銷管理系", n: 238, leave: 5, rate: 2.10 },
    { dept: "烘焙管理系", n: 201, leave: 4, rate: 1.99 },
    { dept: "國際廚藝學士學位學程", n: 126, leave: 2, rate: 1.59 },
    { dept: "國際觀光學士學位學程", n: 121, leave: 1, rate: 0.83 },
  ],

  // --- 11. 休學原因 (表2-5) ---
  leaveReason: [
    { reason: "就讀學校、科系不符期待", n: 49, pct: 23.67 },
    { reason: "工作", n: 44, pct: 21.26 },
    { reason: "傷病", n: 24, pct: 11.59 },
    { reason: "學業成績不佳", n: 20, pct: 9.66 },
    { reason: "考試訓練", n: 18, pct: 8.70 },
    { reason: "家務或家人照顧", n: 15, pct: 7.25 },
    { reason: "經濟困難", n: 14, pct: 6.76 },
    { reason: "其他", n: 5, pct: 2.42 },
    { reason: "出國", n: 7, pct: 3.38 },
    { reason: "兵役", n: 4, pct: 1.93 },
    { reason: "就學環境", n: 3, pct: 1.45 },
    { reason: "育嬰", n: 2, pct: 0.97 },
    { reason: "論文撰寫", n: 2, pct: 0.97 },
    { reason: "違反校規 (勒令)", n: 0, pct: 0 },
    { reason: "其他 (勒令)", n: 9, pct: 4.17 },
  ],

  // --- 12. 113 退學率 (表2-6) ---
  withdrawRate113: [
    { dept: "飲食文化暨餐飲創新研究所", n: 64, w: 15, rate: 23.44 },
    { dept: "餐旅管理研究所", n: 28, w: 5, rate: 17.86 },
    { dept: "觀光研究所", n: 76, w: 9, rate: 11.84 },
    { dept: "國際觀光餐旅全英文碩士學位學程", n: 23, w: 2, rate: 8.70 },
    { dept: "應用日語系", n: 153, w: 11, rate: 7.19 },
    { dept: "餐旅暨會展行銷管理系", n: 238, w: 12, rate: 5.04 },
    { dept: "國際廚藝學士學位學程", n: 126, w: 6, rate: 4.76 },
    { dept: "西餐廚藝系", n: 194, w: 9, rate: 4.64 },
    { dept: "國際觀光學士學位學程", n: 121, w: 4, rate: 3.31 },
    { dept: "餐飲廚藝科", n: 249, w: 7, rate: 2.81 },
    { dept: "餐飲管理系", n: 762, w: 21, rate: 2.76 },
    { dept: "旅館管理系", n: 555, w: 14, rate: 2.52 },
    { dept: "休閒暨遊憩管理系", n: 292, w: 7, rate: 2.40 },
    { dept: "航空暨運輸服務管理系", n: 377, w: 9, rate: 2.39 },
    { dept: "旅運管理系", n: 293, w: 6, rate: 2.05 },
    { dept: "烘焙管理系", n: 201, w: 3, rate: 1.49 },
    { dept: "應用英語系", n: 157, w: 2, rate: 1.27 },
    { dept: "中餐廚藝系", n: 192, w: 1, rate: 0.52 },
  ],

  // --- 13. 實習 113 學年度 (表2-8 / 2-10) ---
  internCollege113: {
    "餐旅學院": 405, "觀光學院": 198, "廚藝學院": 186, "國際學院": 133,
  },
  internCountry113: [
    { country: "中華民國", n: 734 },
    { country: "新加坡", n: 105 },
    { country: "日本", n: 44 },
    { country: "香港", n: 12 },
    { country: "義大利", n: 7 },
    { country: "美國", n: 6 },
    { country: "澳大利亞", n: 5 },
    { country: "加拿大", n: 3 },
    { country: "瑞士", n: 2 },
    { country: "英國", n: 2 },
    { country: "荷蘭", n: 1 },
    { country: "澳門", n: 1 },
  ],
  internCity113: [
    { city: "臺北市", n: 308, pct: 42.82 },
    { city: "高雄市", n: 147, pct: 18.43 },
    { city: "臺中市", n: 89, pct: 11.92 },
    { city: "桃園市", n: 47, pct: 5.69 },
    { city: "臺南市", n: 33, pct: 4.61 },
    { city: "宜蘭縣", n: 33, pct: 4.07 },
    { city: "新北市", n: 23, pct: 3.52 },
    { city: "花蓮縣", n: 17, pct: 2.71 },
    { city: "新竹市", n: 10, pct: 1.90 },
    { city: "南投縣", n: 10, pct: 1.63 },
    { city: "新竹縣", n: 11, pct: 1.36 },
    { city: "屏東縣", n: 4, pct: 0.81 },
  ],

  // --- 14. 證照數 (表2-11) ---
  cert: {
    years: [111, 112, 113],
    college: {
      "餐旅學院": [312, 264, 447],
      "觀光學院": [288, 165, 333],
      "廚藝學院": [179, 137, 159],
      "國際學院": [160, 152, 146],
    },
    total: [939, 718, 1085]
  },

  // --- 15. 畢業生流向 (表2-18) ---
  gradFlow: {
    "國際學院": [
      { year:110, e:74.69, s:4.32, m:7.41, a:1.85, o:11.73 },
      { year:111, e:69.86, s:2.05, m:8.90, a:4.79, o:14.38 },
      { year:112, e:78.06, s:0.65, m:10.97, a:1.94, o:8.39 },
      { year:113, e:81.25, s:3.47, m:5.56, a:1.39, o:8.33 },
    ],
    "廚藝學院": [
      { year:110, e:62.96, s:15.34, m:11.64, a:2.12, o:7.94 },
      { year:111, e:64.65, s:14.65, m:9.09, a:2.53, o:9.09 },
      { year:112, e:68.56, s:20.62, m:6.19, a:0,    o:4.64 },
      { year:113, e:66.83, s:19.02, m:8.78, a:0,    o:5.37 },
    ],
    "餐旅學院": [
      { year:110, e:80.23, s:5.89, m:6.08, a:0.19, o:7.60 },
      { year:111, e:82.17, s:3.48, m:7.38, a:1.84, o:5.12 },
      { year:112, e:86.88, s:2.80, m:6.24, a:0.43, o:3.66 },
      { year:113, e:81.65, s:3.90, m:7.57, a:0.46, o:6.42 },
    ],
    "觀光學院": [
      { year:110, e:78.04, s:4.30, m:8.59, a:0.24, o:8.83 },
      { year:111, e:80.63, s:2.81, m:6.56, a:0,    o:10.00 },
      { year:112, e:78.79, s:4.24, m:7.27, a:0.91, o:8.79 },
      { year:113, e:76.00, s:2.33, m:10.00, a:1.00, o:10.67 },
    ],
  },

  // --- 16. 畢業人數 (表2-16) ---
  gradCount: {
    "餐旅學院": [538, 526, 489, 465, 436],
    "觀光學院": [443, 420, 319, 330, 300],
    "廚藝學院": [206, 189, 198, 194, 205],
    "國際學院": [136, 162, 146, 155, 144],
  },

  // --- 17. 計畫經費 (圖1-12 ~ 1-15) 單位:萬元 ---
  projectFund: [
    { year: 109, gov: 13800, biz: 919, other: 350, total: 15069 },
    { year: 110, gov: 13200, biz: 850, other: 280, total: 14330 },
    { year: 111, gov: 14500, biz: 950, other: 320, total: 15770 },
    { year: 112, gov: 15100, biz: 880, other: 410, total: 16390 },
    { year: 113, gov: 15900, biz: 834, other: 380, total: 17114 },
  ],
  industryFund: [
    { year: 109, gov: 1900,  biz: 850,  total: 2887 },
    { year: 110, gov: 2200,  biz: 800,  total: 3050 },
    { year: 111, gov: 3100,  biz: 920,  total: 4120 },
    { year: 112, gov: 3650,  biz: 850,  total: 4600 },
    { year: 113, gov: 4130.5,biz: 793.8,total: 5405 },
  ],

  // --- 18. 教師研究產出 (表1-8/1-9/1-10) ---
  papersByYear: [
    { year: 111, EI:0,  SCI:11, SCIE:3, SSCI:19, TSSCI:2, other:24, total:59 },
    { year: 112, EI:1,  SCI:10, SCIE:1, SSCI:22, TSSCI:1, other:18, total:53 },
    { year: 113, EI:0,  SCI:11, SCIE:2, SSCI:16, TSSCI:0, other:22, total:51 },
  ],
  papersByDept: [
    { dept: "飲食文化暨餐飲創新研究所", v: [11,7,8] },
    { dept: "觀光研究所", v: [10,8,6] },
    { dept: "旅運管理系", v: [4,6,8] },
    { dept: "通識教育中心", v: [3,7,5] },
    { dept: "應用英語系", v: [5,5,4] },
    { dept: "餐旅管理研究所", v: [6,5,2] },
    { dept: "休閒遊憩管理系", v: [2,4,6] },
    { dept: "國際觀光餐旅全英文碩士學位學程", v: [5,3,4] },
    { dept: "旅館管理系", v: [6,3,1] },
    { dept: "餐飲管理系", v: [0,2,3] },
    { dept: "其他", v: [7,3,4] },
  ],
  confByYear: [
    { year:111, n:49 },{ year:112, n:42 },{ year:113, n:49 },
  ],
  confLocations: [
    { country:"中華民國", v:[44,24,38] },
    { country:"日本",     v:[0,2,4] },
    { country:"大陸地區", v:[2,5,0] },
    { country:"義大利",   v:[0,2,2] },
    { country:"南韓",     v:[0,1,2] },
    { country:"泰國",     v:[0,2,1] },
    { country:"美國",     v:[1,1,1] },
    { country:"其他",     v:[2,5,2] },
  ],
  projectsByYear: [
    { year:112, n:99 },{ year:113, n:80 },{ year:114, n:83 },
  ],
  projectByType: [
    { type:"企業產學計畫", v:[21,18,21] },
    { type:"教育部計畫型獎助案", v:[20,18,20] },
    { type:"政府產學計畫", v:[15,18,14] },
    { type:"國科會專題研究", v:[12,13,17] },
    { type:"其他單位產學", v:[13,9,10] },
    { type:"企業委訓", v:[9,2,0] },
    { type:"其他", v:[9,2,1] },
  ],

  // --- 19. 新生身分別 114 (表2-1) ---
  freshmanType114: {
    "餐旅學院": { 一般:372, 身障:3, 原住民:10, 僑生:9, 港澳:0, 外國:16, 大陸:0, 離島:4, 退伍:2, total:416 },
    "觀光學院": { 一般:238, 身障:0, 原住民:8, 僑生:3, 港澳:0, 外國:9, 大陸:0, 離島:1, 退伍:0, total:259 },
    "廚藝學院": { 一般:192, 身障:2, 原住民:10, 僑生:12, 港澳:4, 外國:7, 大陸:0, 離島:11, 退伍:0, total:238 },
    "國際學院": { 一般:113, 身障:0, 原住民:1, 僑生:13, 港澳:0, 外國:49, 大陸:0, 離島:0, 退伍:0, total:176 },
  },

  // --- 20. 新生縣市分布 (表2-2) ---
  freshmanCity: [
    { city:"高雄市", v:[185,180,196] },
    { city:"臺中市", v:[188,156,193] },
    { city:"桃園市", v:[161,141,140] },
    { city:"臺南市", v:[116,121,121] },
    { city:"彰化縣", v:[44,50,42] },
    { city:"新北市", v:[53,34,44] },
    { city:"屏東縣", v:[32,37,34] },
    { city:"新竹縣", v:[19,26,18] },
    { city:"臺北市", v:[17,18,15] },
    { city:"宜蘭縣", v:[17,17,9] },
    { city:"臺東縣", v:[21,12,22] },
    { city:"南投縣", v:[11,20,16] },
    { city:"新竹市", v:[21,18,13] },
    { city:"苗栗縣", v:[12,15,15] },
    { city:"嘉義縣", v:[9,13,11] },
    { city:"澎湖縣", v:[9,11,11] },
    { city:"嘉義市", v:[17,10,13] },
    { city:"雲林縣", v:[11,13,10] },
    { city:"金門縣", v:[8,9,6] },
    { city:"花蓮縣", v:[2,10,4] },
    { city:"基隆市", v:[6,2,6] },
    { city:"連江縣", v:[3,1,4] },
  ],

  // --- 21. 境外生 (表2-3) ---
  intlStudents: [
    { country:"印尼", region:"東南亞", v:[135,126,129,138] },
    { country:"馬來西亞", region:"東南亞", v:[91,85,76,72] },
    { country:"越南", region:"東南亞", v:[24,24,22,37] },
    { country:"泰國", region:"東南亞", v:[11,13,10,11] },
    { country:"緬甸", region:"東南亞", v:[6,8,12,18] },
    { country:"菲律賓", region:"東南亞", v:[8,7,10,11] },
    { country:"香港", region:"東北亞", v:[20,18,15,9] },
    { country:"日本", region:"東北亞", v:[14,10,7,7] },
    { country:"澳門", region:"東北亞", v:[10,10,11,11] },
    { country:"南韓", region:"東北亞", v:[2,2,2,2] },
    { country:"蒙古", region:"東北亞", v:[1,2,2,3] },
    { country:"聖文森", region:"美洲", v:[2,2,3,3] },
    { country:"墨西哥", region:"美洲", v:[2,3,3,1] },
    { country:"巴拉圭", region:"美洲", v:[3,1,1,1] },
    { country:"法國", region:"歐洲", v:[1,1,2,1] },
    { country:"其他", region:"其他", v:[14,11,15,22] },
  ],
  intlYears: [111, 112, 113, 114],

  // --- 22. 滿意度調查 ---
  // ⚠️ 來源說明：本資料【非】源自校務基本資料庫 (校基庫無滿意度表格)
  // 真實來源：依「113 學年校務問責報告書」內附之滿意度調查結果整理
  // 報告書位置：https://drive.google.com/drive/folders/1MZ2M-MvavSM1Iz2lfj7Lf0a4PXX9Vnu3
  // 註：本儀表板未持有原始問卷檔，僅整理自報告書數字
  satisfaction: {
    samples: [
      { type:"行政人員", target:40, actual:43, rate:107.5 },
      { type:"教師",     target:103, actual:106, rate:102.9 },
      { type:"學生",     target:200, actual:223, rate:111.5 },
    ],
    adminTop: [
      { item:"重視智慧財產權保護", score:4.45 },
      { item:"建立性別平等友善職場", score:4.43 },
      { item:"資通安全維護", score:4.38 },
    ],
    adminBottom: [
      { item:"行政單位內部分組與人力配置", score:3.21 },
      { item:"建立合宜的升遷制度", score:3.41 },
      { item:"內控制度完善與內外部溝通", score:3.51 },
    ],
  },

  // --- 23. 院系 (For drill-down) ---
  colleges: {
    "餐旅學院": ["餐旅管理研究所","旅館管理系","餐飲管理系","餐旅暨會展行銷管理系"],
    "觀光學院": ["觀光研究所","旅運管理系","休閒暨遊憩管理系","航空暨運輸服務管理系"],
    "廚藝學院": ["飲食文化暨餐飲創新研究所","中餐廚藝系","西餐廚藝系","烘焙管理系","餐飲廚藝科"],
    "國際學院": ["應用英語系","應用日語系","國際觀光學士學位學程","國際廚藝學士學位學程","國際觀光餐旅全英文碩士學位學程"],
  },
  // 系/所/學程 分類
  unitTypes: {
    "餐旅管理研究所": "所", "觀光研究所": "所", "飲食文化暨餐飲創新研究所": "所",
    "國際觀光餐旅全英文碩士學位學程": "學程",
    "國際觀光學士學位學程": "學程", "國際廚藝學士學位學程": "學程",
    "餐飲廚藝科": "科",
    // 其餘預設 "系"
  },
  adminUnits: [
    "教務處","學生事務處","總務處","研究發展處","國際事務處","圖書資訊處",
    "推廣教育暨技能認證中心","體育與健康中心","軍訓室","秘書室","主計室","人事室",
    "永續發展與校務研究中心","共同教育委員會"
  ],

  // --- 24. SDGs 對應 ---
  sdgMap: {
    "註冊率": [4],
    "性別比": [4, 5, 10],
    "休退學": [4, 10],
    "經濟不利學生獎助": [1, 4, 10],
    "實習": [4, 8],
    "證照": [4, 8],
    "畢業流向": [4, 8],
    "境外生": [4, 17],
    "教師研究": [4, 9],
    "產學合作": [8, 9, 17],
    "校地校舍": [11],
    "ISO 14064 碳盤查": [13],
    "智慧校園": [9, 11],
    "滿意度": [16],
  },

  // --- 24b. SDG 策略行動 (校級宣傳) ---
  sdgStrategy: {
    headline: "餐旅永續・教育向善",
    headlineEn: "Hospitality for Good. Education for All.",
    tagline: "以餐旅專業實踐永續發展，培育全球餐旅產業的負責任領袖",
    taglineEn: "Cultivating responsible leaders for the global hospitality industry through sustainable education",
    pillars: [
      { key:"教育", zh:"優質教育", en:"Quality Education", sdgs:[4,10], color:"#C5192D",
        kpi:"註冊率 89.62%", kpiEn:"89.62% Enrollment",
        action:"特色化課程・雙語教學・產學接軌",
        actionEn:"Signature curriculum · Bilingual programs · Industry alignment" },
      { key:"產學", zh:"就業與創新", en:"Work & Innovation", sdgs:[8,9], color:"#A21942",
        kpi:"產學經費 5,405 萬", kpiEn:"NT$54M Funding",
        action:"五年成長 87%・政府+企業雙軌合作",
        actionEn:"5-yr growth 87% · Gov + Industry dual-track" },
      { key:"國際", zh:"全球夥伴", en:"Partnerships", sdgs:[17,4], color:"#19486A",
        kpi:"海外實習 188 人", kpiEn:"188 Overseas Interns",
        action:"東南亞+東北亞雙軸國際化",
        actionEn:"Southeast + Northeast Asia dual-axis" },
      { key:"平權", zh:"性別與包容", en:"Equity & Inclusion", sdgs:[5,10,1], color:"#FF3A21",
        kpi:"經濟不利獎助完整", kpiEn:"Full Aid Coverage",
        action:"性別友善・多元入學・全方位獎助",
        actionEn:"Gender-friendly · Diverse admission · Full aid" },
      { key:"環境", zh:"永續校園", en:"Sustainable Campus", sdgs:[11,13,12], color:"#FD9D24",
        kpi:"ISO 14064 碳盤查", kpiEn:"ISO 14064 Certified",
        action:"智慧校園・每生 38㎡ 校地・低碳餐飲",
        actionEn:"Smart campus · 38㎡/student · Low-carbon dining" },
    ],
    commitments: [
      { icon:"🎓", zh:"承諾一：學以致用", en:"Commitment 1: Learn by Doing",
        body:"每位學生畢業前完成至少 1 次企業實習、考取 1 張專業證照，將餐旅專業內化為終身能力。",
        bodyEn:"Every student completes at least one industry internship and earns one certification before graduation." },
      { icon:"🌏", zh:"承諾二：放眼國際", en:"Commitment 2: Think Global",
        body:"擴大東南亞與東北亞雙軸佈局，深耕新加坡、日本、印尼三大樞紐，培養具國際移動力的餐旅人才。",
        bodyEn:"Expand SEA & NEA strategic axes, deepening hubs in Singapore, Japan and Indonesia." },
      { icon:"🤝", zh:"承諾三：產業共榮", en:"Commitment 3: Co-prosper with Industry",
        body:"以業師協同、產學合作、技術移轉三大機制，將學術研究轉化為產業價值，五年產學經費成長 87%。",
        bodyEn:"Adjunct faculty + industry collaboration + tech transfer drive 87% 5-yr funding growth." },
      { icon:"♻️", zh:"承諾四：低碳前行", en:"Commitment 4: Lead with Low-Carbon",
        body:"完成 ISO 14064 碳盤查，推動智慧校園與低碳餐飲教學，以行動回應氣候議題。",
        bodyEn:"ISO 14064 carbon inventory complete, advancing smart campus and low-carbon culinary education." },
    ],
  },

  // --- 25. AI 洞見 (從問責報告歸納) ---
  insights: [
    { title:"研究所招生逆勢成長", titleEn:"Graduate Enrollment Defies the Trend", body:"面對少子化趨勢，本校研究所層級呈現亦趨生機，國際學院碩士班人數累積成長 63%。國際招生與高階人才培育成為本校轉型重點。", bodyEn:"Despite declining birth rates, graduate-level enrollment is thriving — International College's master's program has grown 63% cumulatively. International recruitment and advanced talent cultivation are key transformation priorities.", tag:"招生亮點", tagEn:"Enrollment Highlight" },
    { title:"產學合作亮眼成長", titleEn:"Industry Collaboration Surges", body:"產學合作經費由 109 學年 2,887 萬元 → 113 學年 5,405 萬元，五年成長 87%；政府產學佔 76.4%，充分展現本校與公部門及業界之堅實連結。", bodyEn:"Industry-academia funding grew from NT$28.87M (AY109) to NT$54.05M (AY113) — 87% growth in 5 years. Government-led collaborations account for 76.4%, reflecting solid public-sector and industry ties.", tag:"產學能量", tagEn:"Industry Power" },
    { title:"證照表現重拾佳績", titleEn:"Certifications Bounce Back", body:"113 學年度證照數達 1,085 張，較 112 學年增加 367 張；反映填報機制愪趨完備之外，亦顯示學生專業能力藷褐及考證動能仍亍強勁，餐旅學院 447 張領先。", bodyEn:"AY113 reached 1,085 certifications — 367 more than AY112. Hospitality College leads with 447, demonstrating strong student professional capability and certification momentum.", tag:"學習成效", tagEn:"Learning Outcomes" },
    { title:"實習布局多元並進", titleEn:"Diverse Internship Footprint", body:"113 學年度實習生共 922 位，海外實習 188 位 (20.4%)。新加坡 105 位、日本 44 位為兩大海外據點，符合本校「東南亞 + 東北亞」雙軸國際化策略。", bodyEn:"AY113 had 922 interns total, 188 (20.4%) overseas. Singapore (105) and Japan (44) anchor our 'Southeast + Northeast Asia' dual-axis strategy.", tag:"國際化", tagEn:"Globalization" },
    { title:"生師比與職員能量同步提升", titleEn:"Ratios Improve Across the Board", body:"全校生師比由 18.5(111) → 17.6(113)，學生/職員比由 26.36 → 22.57。教學質量與行政服務能量同步伸長，服務點能更為細致。", bodyEn:"Student-faculty ratio improved from 18.5 (AY111) to 17.6 (AY113); student-staff ratio from 26.36 to 22.57. Teaching quality and administrative service capacity have advanced in tandem.", tag:"治理質感", tagEn:"Governance Quality" },
    { title:"全英學位學程招生勢頭", titleEn:"All-English Programs Gain Momentum", body:"國際觀光餐旅全英文碩士學位學程及國際學院碩士班人數逆勢上揚，願意來台就讀之國際生持續成長，帶動高雄餐旅在國際育成上能見度。", bodyEn:"Enrollment in our all-English MA in International Hospitality & Tourism and other International College programs continues to rise, boosting NKUHT's global visibility.", tag:"國際生", tagEn:"Intl. Students" },
    { title:"校地資源使用更為充裕", titleEn:"More Campus Space per Student", body:"每生平均校地由 30.44 ↑ 37.97 ㎡、每生校舍由 21.45 ↑ 26.75 ㎡；在現有資源下學生可使用空間越來越寬裕，有助提升學習與生活品質。", bodyEn:"Per-student land grew from 30.44 to 37.97㎡; per-student building from 21.45 to 26.75㎡. Students enjoy more space, improving learning and living quality.", tag:"學習環境", tagEn:"Environment" },
    { title:"性別友善與多元包容", titleEn:"Gender-Friendly & Inclusive", body:"校園重視性別平等與多元友善之學習環境；廚藝學院男女比例接近 1:1，呈現餐饮專業多元人才參與。本校並荷全國領先推動性別包容術語。", bodyEn:"Our campus prioritizes gender equity and inclusion. Culinary College has near-1:1 gender balance, showing diverse participation. NKUHT also leads nationally in inclusive terminology.", tag:"多元包容", tagEn:"Inclusion" },
  ],
};
