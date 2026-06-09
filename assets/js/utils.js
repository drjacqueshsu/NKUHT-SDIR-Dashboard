// 工具函式：色彩、SDG icons、簡單圖表組件、格式化
window.NKUHT_UTIL = (() => {
  const SDG_COLORS = {
    1:"#E5243B",2:"#DDA63A",3:"#4C9F38",4:"#C5192D",5:"#FF3A21",6:"#26BDE2",
    7:"#FCC30B",8:"#A21942",9:"#FD6925",10:"#DD1367",11:"#FD9D24",12:"#BF8B2E",
    13:"#3F7E44",14:"#0A97D9",15:"#56C02B",16:"#00689D",17:"#19486A"
  };
  const SDG_NAME_ZH = {
    1:"消除貧窮",2:"消除飢餓",3:"健康福祉",4:"優質教育",5:"性別平權",6:"潔淨水",
    7:"可負擔能源",8:"就業與經濟",9:"產業創新",10:"減少不平等",11:"永續城市",
    12:"責任消費",13:"氣候行動",14:"水下生命",15:"陸上生命",16:"和平正義",17:"全球夥伴"
  };
  const SDG_NAME_EN = {
    1:"No Poverty",2:"Zero Hunger",3:"Good Health",4:"Quality Education",5:"Gender Equality",
    6:"Clean Water",7:"Clean Energy",8:"Decent Work",9:"Industry & Innovation",10:"Reduced Inequalities",
    11:"Sustainable Cities",12:"Responsible Consumption",13:"Climate Action",14:"Life Below Water",
    15:"Life on Land",16:"Peace & Justice",17:"Partnerships"
  };
  const fmt = n => n == null ? "-" : (typeof n==="number" ? n.toLocaleString("en-US",{maximumFractionDigits:2}) : n);
  const pct = n => n == null ? "-" : `${n.toFixed(1)}%`;

  // ZH → EN dictionary for department/college/city/country/item names
  const DICT = {
    // Colleges
    "餐旅學院":"Hospitality College","觀光學院":"Tourism College","廚藝學院":"Culinary College","國際學院":"International College",
    // Departments
    "餐旅管理研究所":"Hosp. Mgmt Grad School","飲食文化暨餐飲創新研究所":"Food Culture & Innovation Grad","國際觀光餐旅全英文碩士學位學程":"All-English MA in Intl. Hosp.",
    "觀光研究所":"Tourism Grad School","應用日語系":"Applied Japanese","餐飲廚藝科":"Culinary Arts (5-yr)",
    "旅運管理系":"Travel Mgmt","應用英語系":"Applied English","餐飲管理系":"F&B Mgmt",
    "旅館管理系":"Hotel Mgmt","休閒暨遊憩管理系":"Leisure Mgmt","休閒遊憩管理系":"Leisure Mgmt",
    "中餐廚藝系":"Chinese Culinary","西餐廚藝系":"Western Culinary","航空暨運輸服務管理系":"Aviation & Transport",
    "餐旅暨會展行銷管理系":"Hosp. & MICE Mktg","烘焙管理系":"Baking Mgmt",
    "國際廚藝學士學位學程":"Intl. Culinary BA","國際觀光學士學位學程":"Intl. Tourism BA",
    "通識教育中心":"General Education","其他":"Other","其他 (勒令)":"Other (Forced)",
    // Cities (TW)
    "高雄市":"Kaohsiung","臺中市":"Taichung","桃園市":"Taoyuan","臺南市":"Tainan","彰化縣":"Changhua",
    "新北市":"New Taipei","屏東縣":"Pingtung","新竹縣":"Hsinchu County","臺北市":"Taipei","宜蘭縣":"Yilan",
    "臺東縣":"Taitung","南投縣":"Nantou","新竹市":"Hsinchu City","苗栗縣":"Miaoli","嘉義縣":"Chiayi County",
    "澎湖縣":"Penghu","嘉義市":"Chiayi City","雲林縣":"Yunlin","金門縣":"Kinmen","花蓮縣":"Hualien",
    "基隆市":"Keelung","連江縣":"Lienchiang",
    // Countries
    "中華民國":"Taiwan","新加坡":"Singapore","日本":"Japan","香港":"Hong Kong","義大利":"Italy",
    "美國":"USA","澳大利亞":"Australia","加拿大":"Canada","瑞士":"Switzerland","英國":"UK",
    "荷蘭":"Netherlands","澳門":"Macau","印尼":"Indonesia","馬來西亞":"Malaysia","越南":"Vietnam",
    "泰國":"Thailand","緬甸":"Myanmar","菲律賓":"Philippines","南韓":"S. Korea","蒙古":"Mongolia",
    "聖文森":"St. Vincent","墨西哥":"Mexico","巴拉圭":"Paraguay","法國":"France","大陸地區":"Mainland China",
    // Regions
    "東南亞":"Southeast Asia","東北亞":"Northeast Asia","美洲":"Americas","歐洲":"Europe","全部":"All",
    // Leave reasons
    "就讀學校、科系不符期待":"School/major mismatch","工作":"Work","傷病":"Illness/Injury",
    "學業成績不佳":"Poor grades","考試訓練":"Exam preparation","家務或家人照顧":"Family care",
    "經濟困難":"Financial hardship","出國":"Going abroad","兵役":"Military service",
    "就學環境":"Campus environment","育嬰":"Childcare","論文撰寫":"Thesis writing","違反校規 (勒令)":"Code violation",
    // Project types
    "企業產學計畫":"Industry Projects","教育部計畫型獎助案":"MOE Grants","政府產學計畫":"Government Projects",
    "國科會專題研究":"NSTC Research","其他單位產學":"Other Industry","企業委訓":"Corporate Training",
    // Admin satisfaction items
    "重視智慧財產權保護":"IP protection emphasis","建立性別平等友善職場":"Gender-equal workplace",
    "資通安全維護":"Cybersecurity","行政單位內部分組與人力配置":"Internal org. & staffing",
    "建立合宜的升遷制度":"Proper promotion system","內控制度完善與內外部溝通":"Internal control & communication",
    // SDG indicator keys
    "註冊率":"Enrollment Rate","性別比":"Gender Ratio","休退學":"Leave/Withdraw",
    "經濟不利學生獎助":"Financial Aid","實習":"Internship","證照":"Certifications",
    "畢業流向":"Graduate Outcomes","境外生":"Intl. Students","教師研究":"Faculty Research",
    "產學合作":"Industry Collab.","校地校舍":"Campus & Buildings","ISO 14064 碳盤查":"ISO 14064 Inventory",
    "智慧校園":"Smart Campus","滿意度":"Satisfaction",
    // Survey types
    "行政人員":"Admin Staff","教師":"Faculty","學生":"Students",
  };
  const tr = (zh) => DICT[zh] || zh;

  return { SDG_COLORS, SDG_NAME_ZH, SDG_NAME_EN, fmt, pct, DICT, tr };
})();
