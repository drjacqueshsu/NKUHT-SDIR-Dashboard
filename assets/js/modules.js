"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var D = window.NKUHT_DATA;
var U = window.NKUHT_UTIL;
var UN = window.NKUHT_UNIT;
var DX = window.NKUHT_DATA_X;
function unitCollege(unit) {
  if (!unit || unit === "全校") return null;
  if (D.colleges[unit]) return unit;
  for (var _i = 0, _Object$entries = Object.entries(D.colleges); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      col = _Object$entries$_i[0],
      depts = _Object$entries$_i[1];
    if (depts.includes(unit)) return col;
  }
  return null;
}
function unitColor(unit) {
  var col = unitCollege(unit);
  return {
    "餐旅學院": "#0a5a2e",
    "觀光學院": "#156c3a",
    "廚藝學院": "#c8a64b",
    "國際學院": "#b08c2f"
  }[col] || "#0a5a2e";
}
function UnitFocus(_ref) {
  var unit = _ref.unit,
    lang = _ref.lang,
    year = _ref.year;
  if (!unit || unit === "全校") return null;
  var col = unitCollege(unit);
  var isCollege = !!D.colleges[unit];
  var students = UN.studentsAt(unit, year);
  return React.createElement("div", {
    className: "ai-strip",
    style: {
      background: "linear-gradient(135deg, ".concat(unitColor(unit), ", var(--green-2))")
    }
  }, React.createElement("div", {
    className: "ai-icon",
    style: {
      background: "#fff",
      color: unitColor(unit)
    }
  }, isCollege ? "院" : "系"), React.createElement("div", {
    className: "ai-text"
  }, T(React.createElement(React.Fragment, null, "\u76EE\u524D\u805A\u7126:", React.createElement("b", null, unit), col && col !== unit ? React.createElement(React.Fragment, null, "(\u96B8\u5C6C ", React.createElement("b", null, col), ")") : null, students ? React.createElement(React.Fragment, null, ",", year, " \u5B78\u5E74\u5B78\u751F\u6578 ", React.createElement("b", null, U.fmt(students)), " \u4EBA\u3002") : "。", "\u4E0B\u65B9\u6240\u6709\u9762\u677F\u5DF2\u5207\u63DB\u70BA\u6B64\u55AE\u4F4D\u7684\u6578\u64DA;\u90E8\u5206\u7CFB\u6240\u5C64\u7D1A\u70BA\u4F9D 113 \u5B78\u5E74\u5BE6\u969B\u503C\u8207\u5B78\u9662\u5360\u6BD4\u63A8\u4F30\u3002"), React.createElement(React.Fragment, null, "Currently focused: ", React.createElement("b", null, unit), col && col !== unit ? React.createElement(React.Fragment, null, " (under ", React.createElement("b", null, col), ")") : null, students ? React.createElement(React.Fragment, null, ", AY", year, " students ", React.createElement("b", null, U.fmt(students)), ".") : ".", " All panels below show this unit's data (department-level figures partly estimated from college share)."), lang)));
}
function EstNote(_ref2) {
  var lang = _ref2.lang;
  return React.createElement("span", {
    className: "tag",
    style: {
      background: "#fef6e3",
      color: "#a07a1f",
      marginLeft: 6,
      fontSize: 10
    }
  }, T("估算", "Est.", lang));
}
function OverviewModule(_ref3) {
  var _D$registration$schoo;
  var lang = _ref3.lang,
    year = _ref3.year,
    unit = _ref3.unit;
  var yIdx = D.meta.years.indexOf(year);
  var isAll = unit === "全校";
  var isDept = !isAll && !D.colleges[unit];
  var cur = {
    total: UN.studentsAt(unit, year)
  };
  var fac = UN.facultyAt(unit, year);
  var ratio = D.studentTeacherRatio.find(function (r) {
    return r.year === year;
  }) || D.studentTeacherRatio[D.studentTeacherRatio.length - 1];
  var reg = ((_D$registration$schoo = D.registration.school.find(function (r) {
    return r.y === year;
  })) === null || _D$registration$schoo === void 0 ? void 0 : _D$registration$schoo.r) || 86.83;
  var gradFundCur = UN.industryFundAt(unit, year);
  var studentsTrend = D.meta.years.map(function (y) {
    return UN.studentsAt(unit, y) || 0;
  });
  var ratioTrend = D.studentTeacherRatio.map(function (r) {
    return r.all;
  });
  var fundTrend = D.industryFund.map(function (f, i) {
    var y = f.year;
    var sh = isAll ? 1 : UN.shareOf(unit, y);
    return Math.round(f.total * sh);
  });
  var facTrend = D.faculty.map(function (f, i) {
    var y = f.year;
    var sh = isAll ? 1 : UN.shareOf(unit, y);
    return Math.max(1, Math.round(f.total * sh));
  });
  var interns = UN.internsAt(unit);
  var certs = UN.certSeries(unit);
  var certLatest = certs ? certs[certs.length - 1] : 0;
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#0a5a2e",
    pattern: "dots",
    eyebrow: T("校務脈動・即時掌握", "Pulse of the University", lang),
    headline: isAll ? T("一頁掌握 NKUHT", "NKUHT at a Glance", lang) : T("\u4E00\u9801\u638C\u63E1 ".concat(unit), "".concat(unit, " at a Glance"), lang),
    headlineEn: "NKUHT at a Glance",
    tagline: T("六年趨勢 × 八大指標", "6-year trends, 8 indicators", lang),
    taglineEn: "",
    stats: [{
      value: U.fmt(cur.total || 0),
      label: isAll ? "全校學生" : "單位學生",
      labelEn: "Students",
      yearLabel: "AY".concat(year),
      targetId: "sec-overview-kpi"
    }, {
      value: fac.total,
      label: "專任教師",
      labelEn: "Faculty",
      yearLabel: "AY".concat(year),
      targetId: "sec-overview-kpi"
    }, {
      value: U.fmt(gradFundCur.total),
      unit: "萬",
      unitEn: "",
      label: "產學經費",
      labelEn: "Funding (10K)",
      yearLabel: "AY".concat(year),
      targetId: "sec-overview-trends"
    }, {
      value: U.fmt(interns || 0),
      label: "實習生",
      labelEn: "Interns",
      yearLabel: "AY113",
      targetId: "sec-overview-trends"
    }],
    sdgs: [4, 8, 9, 17]
  }), React.createElement(UnitFocus, {
    unit: unit,
    lang: lang,
    year: year
  }), React.createElement(Section, {
    id: "sec-overview-kpi",
    title: T("關鍵指標總覽", "KPI Overview", lang),
    subtitle: isAll ? T("六大核心指標的最新數據與五年趨勢", "6 core indicators with 5-yr trend", lang) : T("".concat(unit, " \u7BC4\u570D\u4E0B\u7684\u6307\u6A19\u5207\u63DB\u986F\u793A"), "Filtered to ".concat(unit), lang),
    sdgs: [4, 8, 9, 17]
  }, React.createElement(HeroKPIWall, {
    lang: lang,
    items: [{
      label: T("學生總數", "Students", lang),
      value: cur.total || 0,
      unit: T("人", ""),
      sub: isAll ? "".concat(T("日間", "Day", lang), " ").concat(U.fmt(D.studentsByYear[yIdx].day), " \xB7 ").concat(T("進修", "Ext", lang), " ").concat(U.fmt(D.studentsByYear[yIdx].ext)) : T("AY".concat(year, " \u4F30\u503C"), "AY".concat(year, " est."), lang),
      accent: "#0a5a2e",
      fmt: function fmt(v) {
        return U.fmt(Math.round(v));
      },
      sparkline: studentsTrend
    }, {
      label: T("專任師資", "Full-time Faculty", lang),
      value: fac.total,
      unit: T("人", ""),
      sub: "".concat(T("教授", "Prof", lang), " ").concat(fac.prof, " \xB7 ").concat(T("副教授", "Assoc", lang), " ").concat(fac.asso),
      accent: "#c8a64b",
      fmt: function fmt(v) {
        return Math.round(v);
      },
      sparkline: facTrend
    }, {
      label: T("生師比", "Stu/Fac Ratio", lang),
      value: ratio.all,
      sub: T("\u65E5\u9593\u90E8 ".concat(ratio.day), "Day ".concat(ratio.day), lang),
      accent: "#156c3a",
      fmt: function fmt(v) {
        return v.toFixed(2);
      }
    }, {
      label: T("註冊率", "Enrollment", lang),
      value: reg,
      unit: "%",
      sub: T("全國平均 87.97%", "Nat'l 87.97%", lang),
      accent: "#c8a64b",
      fmt: function fmt(v) {
        return v.toFixed(1);
      }
    }, {
      label: T("產學經費", "Industry Funding", lang),
      value: gradFundCur.total,
      unit: T("萬", "K"),
      sub: T("政府+企業", "Gov+Biz", lang),
      accent: "#b08c2f",
      fmt: function fmt(v) {
        return U.fmt(Math.round(v));
      },
      sparkline: fundTrend
    }, {
      label: T("實習生", "Interns", lang),
      value: interns || 0,
      unit: T("人", ""),
      sub: T("AY113 真實值", "AY113 actual", lang),
      accent: "#0a5a2e",
      fmt: function fmt(v) {
        return U.fmt(Math.round(v));
      }
    }, {
      label: T("專業證照", "Certifications", lang),
      value: certLatest,
      unit: T("張", ""),
      sub: T("AY113 累計", "AY113", lang),
      accent: "#156c3a",
      fmt: function fmt(v) {
        return U.fmt(Math.round(v));
      }
    }, {
      label: T("校地/生", "Land per Student", lang),
      value: 38.0,
      unit: "㎡",
      sub: T("AY114", "AY114", lang),
      accent: "#c8a64b",
      fmt: function fmt(v) {
        return v.toFixed(1);
      }
    }]
  })), React.createElement(Section, {
    id: "sec-overview-trends",
    title: T("六年走勢", "6-Year Trends", lang),
    subtitle: isAll ? T("四維度同步觀察", "Multi-dim view", lang) : T("".concat(unit, " \u5B50\u96C6\u6578\u64DA"), "".concat(unit, " subset"), lang)
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("學生數", "Students", lang), !isAll && isDept && React.createElement(EstNote, {
      lang: lang
    })),
    subtitle: isAll ? T("依學制", "By program", lang) : T("依學年", "By year", lang),
    sdgs: [4]
  }, isAll ? React.createElement(BarChart, {
    data: D.studentsByYear.map(function (s) {
      return {
        name: s.year,
        day: s.day,
        ext: s.ext,
        master: s.master + s.masterExec,
        doc: s.doc,
        fiveYr: s.fiveYr
      };
    }),
    keys: ["day", "ext", "master", "doc", "fiveYr"],
    colors: ["#0a5a2e", "#156c3a", "#c8a64b", "#e8d27a", "#8aa57a"],
    labels: [T("日間學士", "Day Bach.", lang), T("進修學士", "Ext Bach.", lang), T("碩士", "Master", lang), T("博士", "PhD", lang), T("五專", "5-yr", lang)],
    formatter: U.fmt
  }) : React.createElement(LineChart, {
    xLabels: D.meta.years,
    series: [{
      name: unit,
      color: unitColor(unit),
      data: studentsTrend
    }],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("生師比 vs 學生/職員比", "Ratios", lang),
    sdgs: [4]
  }, React.createElement(LineChart, {
    xLabels: [111, 112, 113, 114],
    series: [{
      name: T("生師比", "Stu/Fac", lang),
      color: "#0a5a2e",
      data: D.studentTeacherRatio.map(function (r) {
        return r.all;
      })
    }, {
      name: T("日間部", "Day", lang),
      color: "#156c3a",
      data: D.studentTeacherRatio.map(function (r) {
        return r.day;
      })
    }, {
      name: T("學生/職員", "Stu/Staff", lang),
      color: "#c8a64b",
      data: D.staffRatio.filter(function (s) {
        return s.year >= 111;
      }).map(function (s) {
        return s.ratio;
      })
    }],
    yMax: 30,
    formatter: function formatter(v) {
      return v.toFixed(2);
    }
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("產學合作經費", "Industry Funding", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    subtitle: T("單位:萬元", "NT$ 10K", lang),
    sdgs: [8, 9]
  }, isAll ? React.createElement(BarChart, {
    data: D.industryFund.map(function (f) {
      return {
        name: f.year,
        gov: f.gov,
        biz: f.biz
      };
    }),
    keys: ["gov", "biz"],
    colors: ["#0a5a2e", "#c8a64b"],
    labels: [T("政府產學", "Gov", lang), T("企業產學", "Biz", lang)],
    formatter: U.fmt
  }) : React.createElement(LineChart, {
    xLabels: D.industryFund.map(function (f) {
      return f.year;
    }),
    series: [{
      name: T("總經費", "Total", lang),
      color: unitColor(unit),
      data: fundTrend
    }],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("註冊率(全校 vs 全國)", "Enrollment", lang),
    sdgs: [4]
  }, React.createElement(LineChart, {
    xLabels: [111, 112, 113, 114],
    series: [{
      name: T("本校", "NKUHT", lang),
      color: "#0a5a2e",
      data: D.registration.school.map(function (r) {
        return r.r;
      })
    }, {
      name: T("全國平均", "National", lang),
      color: "#c8a64b",
      data: D.registration.nation.map(function (r) {
        return r.r;
      })
    }],
    yMax: 100,
    formatter: function formatter(v) {
      return "".concat(v.toFixed(1), "%");
    }
  }))))), isAll && React.createElement(Section, {
    title: T("AI 洞見", "AI Insights", lang),
    subtitle: T("從問責報告自動歸納的8個重點觀察", "8 observations", lang)
  }, React.createElement("div", {
    className: "grid g-12"
  }, D.insights.map(function (ins, i) {
    return React.createElement("div", {
      className: "span-3",
      key: i
    }, React.createElement("div", {
      className: "insight-card"
    }, React.createElement("span", {
      className: "insight-tag"
    }, lang === "en" && ins.tagEn ? ins.tagEn : ins.tag), React.createElement("div", {
      className: "insight-title"
    }, lang === "en" && ins.titleEn ? ins.titleEn : ins.title), React.createElement("div", {
      className: "insight-body"
    }, lang === "en" && ins.bodyEn ? ins.bodyEn : ins.body)));
  }))));
}
function StudentsModule(_ref4) {
  var lang = _ref4.lang,
    year = _ref4.year,
    unit = _ref4.unit;
  var yIdx = D.meta.years.indexOf(year);
  var isAll = unit === "全校";
  var isCol = !!D.colleges[unit];
  var isDept = !isAll && !isCol;
  var col = unitCollege(unit);
  var gen = UN.genderAt(unit, year);
  var totalStu = UN.studentsAt(unit, year) || 0;
  var totalGen = ((gen === null || gen === void 0 ? void 0 : gen.m) || 0) + ((gen === null || gen === void 0 ? void 0 : gen.f) || 0);
  var femalePct = totalGen ? Math.round(gen.f / totalGen * 100) : 0;
  var intlYearIdx = Math.min(Math.max(0, year - 111), D.intlYears.length - 1);
  var intlAll = D.intlStudents.reduce(function (s, c) {
    return s + (c.v[intlYearIdx] || 0);
  }, 0);
  var intl = isAll ? intlAll : Math.round(intlAll * UN.shareOf(unit, year));
  var collegeData = Object.entries(D.collegeStudents).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      name = _ref6[0],
      arr = _ref6[1];
    return {
      name: name,
      value: arr[yIdx] || arr[arr.length - 1],
      color: {
        "餐旅學院": "#0a5a2e",
        "觀光學院": "#156c3a",
        "廚藝學院": "#c8a64b",
        "國際學院": "#b08c2f"
      }[name]
    };
  });
  var leaveRows = D.leaveRate113;
  if (isCol) leaveRows = leaveRows.filter(function (r) {
    return D.colleges[unit].includes(r.dept);
  });
  if (isDept) leaveRows = leaveRows.filter(function (r) {
    return r.dept === unit;
  });
  var freshmanShown = isAll ? Object.entries(D.freshmanType114) : isCol ? [[unit, D.freshmanType114[unit]]] : col ? [[col, D.freshmanType114[col]]] : [];
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#156c3a",
    pattern: "grid",
    eyebrow: T("學生圖譜", "Students", lang),
    headline: isAll ? T("從一萬人視角看校園", "Through 10K Students", lang) : T("\u805A\u7126 ".concat(unit), unit, lang),
    headlineEn: "",
    tagline: T("性別、學制、學院、境外、註冊率與流失", "Gender, level, college, intl", lang),
    taglineEn: "",
    stats: [{
      value: U.fmt(totalStu),
      label: isAll ? "全校學生" : "單位學生",
      labelEn: "Students",
      yearLabel: "AY".concat(year),
      targetId: "sec-students-comp"
    }, {
      value: femalePct,
      unit: "%",
      label: "女性比例",
      labelEn: "Female %",
      yearLabel: "AY".concat(year),
      targetId: "sec-students-comp"
    }, {
      value: U.fmt(intl),
      label: "境外學生",
      labelEn: "Intl."
    }, {
      value: isAll ? "4" : isCol ? D.colleges[unit].length : 1,
      label: isAll ? "學院" : "涵蓋單位",
      labelEn: "Units"
    }],
    sdgs: [4, 5, 10]
  }), React.createElement(UnitFocus, {
    unit: unit,
    lang: lang,
    year: year
  }), React.createElement(Section, {
    id: "sec-students-comp",
    title: T("學生組成", "Composition", lang),
    sdgs: [4, 5, 10]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: T("各學院學生數", "By College", lang),
    subtitle: year + " " + T("學年", "AY", lang)
  }, React.createElement(Donut, {
    data: collegeData,
    centerValue: U.fmt(totalStu),
    centerLabel: isAll ? T("總人數", "Total", lang) : unit,
    highlight: isAll ? null : col || unit
  }))), React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("性別分布", "Gender", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    subtitle: year + " " + T("學年", "AY", lang),
    sdgs: [5]
  }, React.createElement(Donut, {
    data: [{
      name: T("女", "Female", lang),
      value: gen.f,
      color: "#c8a64b"
    }, {
      name: T("男", "Male", lang),
      value: gen.m,
      color: "#0a5a2e"
    }],
    centerValue: "".concat(femalePct, "%"),
    centerLabel: T("女性", "Female", lang)
  }))), React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: T("114 新生身分別", "AY114 Freshman Type", lang),
    subtitle: isAll ? T("依學院", "By College", lang) : isCol ? unit : "".concat(col, " ").concat(T("所屬", "under", lang)),
    sdgs: [10]
  }, React.createElement("div", {
    className: "freshman-legend"
  }, [{
    n: T("一般", "General", lang),
    c: "#0a5a2e"
  }, {
    n: T("僑生", "Overseas", lang),
    c: "#c8a64b"
  }, {
    n: T("外國", "Intl", lang),
    c: "#b08c2f"
  }, {
    n: T("原住民", "Indig", lang),
    c: "#156c3a"
  }, {
    n: T("其他", "Other", lang),
    c: "#8aa57a"
  }].map(function (s) {
    return React.createElement("span", {
      key: s.n,
      className: "fl-item"
    }, React.createElement("span", {
      className: "fl-dot",
      style: {
        background: s.c
      }
    }), s.n);
  })), React.createElement("div", {
    className: "hbar-list freshman-stack"
  }, freshmanShown.map(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
      cn = _ref8[0],
      v = _ref8[1];
    return v && React.createElement("div", {
      className: "fs-row",
      key: cn
    }, React.createElement("div", {
      className: "fs-name"
    }, lang === "en" ? U.tr(cn) : cn), React.createElement("div", {
      className: "fs-bar"
    }, React.createElement(StackedBar, {
      segments: [{
        name: T("一般", "General", lang),
        value: v.一般,
        color: "#0a5a2e"
      }, {
        name: T("僑生", "Overseas", lang),
        value: v.僑生,
        color: "#c8a64b"
      }, {
        name: T("外國", "Intl", lang),
        value: v.外國,
        color: "#b08c2f"
      }, {
        name: T("原住民", "Indig", lang),
        value: v.原住民,
        color: "#156c3a"
      }, {
        name: T("其他", "Other", lang),
        value: v.離島 + v.身障 + v.港澳 + v.退伍,
        color: "#8aa57a"
      }],
      height: 20
    })), React.createElement("div", {
      className: "fs-total"
    }, v.total));
  }), freshmanShown.length === 0 && React.createElement("div", {
    className: "note"
  }, T("此單位未提供 114 新生身分別細項", "No detail at this unit", lang))))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("六年學生數量趨勢", "6-Year Trend", lang),
    subtitle: isAll ? T("學院別", "By College", lang) : unit,
    sdgs: [4]
  }, React.createElement(LineChart, {
    xLabels: D.meta.years,
    series: isAll ? [{
      name: T("餐旅學院", "Hospitality", lang),
      color: "#0a5a2e",
      data: D.collegeStudents["餐旅學院"]
    }, {
      name: T("觀光學院", "Tourism", lang),
      color: "#156c3a",
      data: D.collegeStudents["觀光學院"]
    }, {
      name: T("廚藝學院", "Culinary", lang),
      color: "#c8a64b",
      data: D.collegeStudents["廚藝學院"]
    }, {
      name: T("國際學院", "International", lang),
      color: "#b08c2f",
      data: D.collegeStudents["國際學院"]
    }] : [{
      name: unit,
      color: unitColor(unit),
      data: D.meta.years.map(function (y) {
        return UN.studentsAt(unit, y) || 0;
      })
    }],
    formatter: U.fmt
  }))))), React.createElement(Section, {
    title: T("註冊率與留生", "Enrollment & Retention", lang),
    sdgs: [4]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("註冊率(學程別)", "By Program", lang),
    subtitle: "111-114"
  }, React.createElement(LineChart, {
    xLabels: [111, 112, 113, 114],
    series: [{
      name: T("學士班(四技)", "Bachelor", lang),
      color: "#0a5a2e",
      data: D.registration.byProgram["學士班(四技)"].map(function (x) {
        return x.r;
      })
    }, {
      name: T("二技", "2-yr", lang),
      color: "#c8a64b",
      data: D.registration.byProgram["二技"].map(function (x) {
        return x.r;
      })
    }, {
      name: T("碩士班", "Master", lang),
      color: "#b08c2f",
      data: D.registration.byProgram["碩士班"].map(function (x) {
        return x.r;
      })
    }],
    yMax: 100,
    formatter: function formatter(v) {
      return "".concat(v.toFixed(1), "%");
    }
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("就學穩定率", "Retention", lang),
    subtitle: T("全校 — 系所未提供細項", "All-school", lang)
  }, React.createElement(LineChart, {
    xLabels: [111, 112, 113, 114],
    series: [{
      name: T("日間部", "Day", lang),
      color: "#0a5a2e",
      data: D.retention.map(function (r) {
        return r.day;
      })
    }, {
      name: T("進修部", "Ext", lang),
      color: "#c8a64b",
      data: D.retention.map(function (r) {
        return r.ext;
      })
    }],
    yMax: 100,
    formatter: function formatter(v) {
      return "".concat(v.toFixed(1), "%");
    }
  }))), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: isAll ? T("113 各系所休學率 (前12)", "AY113 Leave Rate Top 12", lang) : T("113 ".concat(unit, " \u7BC4\u570D\u4F11\u5B78\u7387"), "AY113 Leave Rate \u2013 ".concat(unit), lang),
    sdgs: [4, 10]
  }, React.createElement(HBarList, {
    data: (isAll ? leaveRows.slice(0, 12) : leaveRows).map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.dept) : d.dept,
        value: d.rate,
        color: d.rate > 15 ? "#c8a64b" : "#0a5a2e"
      };
    }),
    formatter: function formatter(v) {
      return v.toFixed(1);
    },
    valueLabel: "%",
    highlight: isAll ? null : lang === "en" ? U.tr(unit) : unit
  }), leaveRows.length === 0 && React.createElement("div", {
    className: "note"
  }, T("該單位無休學資料", "No data", lang)))), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("113 休學原因", "AY113 Reasons", lang),
    subtitle: T("全校 — 系所未提供細項", "All-school", lang)
  }, React.createElement(HBarList, {
    data: D.leaveReason.filter(function (r) {
      return r.n > 0;
    }).slice(0, 8).map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.reason) : d.reason,
        value: d.pct
      };
    }),
    formatter: function formatter(v) {
      return v.toFixed(1);
    },
    valueLabel: "%"
  }))))), React.createElement(Section, {
    title: T("各學制學生人數", "Students by Program Type", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-2",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("全校學制組成", "Program Composition", lang),
    subtitle: T("114 學年上", "AY114 S1", lang)
  }, React.createElement(Donut, {
    data: Object.entries(DX.programStudents114).filter(function (_ref9) {
      var _ref0 = _slicedToArray(_ref9, 1),
        k = _ref0[0];
      return k !== "總計";
    }).map(function (_ref1, i) {
      var _ref10 = _slicedToArray(_ref1, 2),
        k = _ref10[0],
        v = _ref10[1];
      return {
        name: k,
        value: v.m + v.f,
        color: ["#0a5a2e", "#156c3a", "#c8a64b", "#b08c2f", "#8aa57a", "#a07a1f", "#2da267", "#e8d27a"][i % 8]
      };
    }),
    centerValue: U.fmt(DX.programStudents114["總計"].m + DX.programStudents114["總計"].f),
    centerLabel: T("總人數", "Total", lang)
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("各學制男女人數", "By Program · Gender", lang)
  }, React.createElement(BarChart, {
    data: Object.entries(DX.programStudents114).filter(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 1),
        k = _ref12[0];
      return k !== "總計";
    }).map(function (_ref13) {
      var _ref14 = _slicedToArray(_ref13, 2),
        k = _ref14[0],
        v = _ref14[1];
      return {
        name: k,
        男: v.m,
        女: v.f
      };
    }),
    keys: ["男", "女"],
    colors: ["#0a5a2e", "#c8a64b"],
    labels: [T("男", "Male", lang), T("女", "Female", lang)],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("各學院 × 學制人數", "By College × Program", lang),
    subtitle: T("包含日間/進修/碩士/博士等全部學制", "All program types", lang)
  }, React.createElement(Heatmap, {
    rows: Object.keys(DX.programByCollege114),
    cols: _toConsumableArray(new Set(Object.values(DX.programByCollege114).flatMap(function (p) {
      return Object.keys(p);
    }))),
    values: Object.keys(DX.programByCollege114).map(function (c) {
      var cols = _toConsumableArray(new Set(Object.values(DX.programByCollege114).flatMap(function (p) {
        return Object.keys(p);
      })));
      return cols.map(function (p) {
        var v = DX.programByCollege114[c][p];
        return v ? v.m + v.f : null;
      });
    }),
    formatter: U.fmt
  }))))), React.createElement(Section, {
    title: T("學生流動(休學·退學·轉學·延畢)", "Student Mobility (Leave · Withdraw · Transfer · Delayed)", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-18 / 4-19 / 4-2-4 / 4-2-8",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4, 10]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("休學人次", "Leaves", lang),
    value: U.fmt(DX.leave114.total),
    unit: T("人次", "", lang),
    sub: "".concat(T("男", "M", lang), " ").concat(DX.leave114.totalM, " / ").concat(T("女", "F", lang), " ").concat(DX.leave114.totalF),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("退學人次", "Withdrawals", lang),
    value: U.fmt(DX.withdraw114.total),
    unit: T("人次", "", lang),
    sub: "".concat(T("男", "M", lang), " ").concat(DX.withdraw114.totalM, " / ").concat(T("女", "F", lang), " ").concat(DX.withdraw114.totalF),
    accent: "#a07a1f"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("轉學生(校外轉入)", "Transfer In", lang),
    value: U.fmt(DX.transfer114.extTotal),
    unit: T("人", "", lang),
    sub: "".concat(T("男", "M", lang), " ").concat(DX.transfer114.extM, " / ").concat(T("女", "F", lang), " ").concat(DX.transfer114.extF),
    accent: "#156c3a"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("延畢生", "Delayed", lang),
    value: U.fmt(DX.delayed114.total),
    unit: T("人", "", lang),
    sub: T("114 學年上", "AY114 S1", lang),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("休學原因 (合併同類)", "Leave Reasons (Aggregated)", lang)
  }, React.createElement(HBarList, {
    data: function () {
      var agg = {};
      Object.entries(DX.leave114.reasons).filter(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 1),
          k = _ref16[0];
        return k !== "總計";
      }).forEach(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
          k = _ref18[0],
          v = _ref18[1];
        var key = k.replace(/^於學期底處於休學狀態之人數-/, "期底-");
        agg[key] = (agg[key] || 0) + v;
      });
      return Object.entries(agg).sort(function (a, b) {
        return b[1] - a[1];
      }).slice(0, 12).map(function (_ref19) {
        var _ref20 = _slicedToArray(_ref19, 2),
          k = _ref20[0],
          v = _ref20[1];
        return {
          name: k,
          value: v
        };
      });
    }(),
    color: "#c8a64b",
    formatter: U.fmt,
    valueLabel: T(" 人次", "", lang)
  }))), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("休學人數·系所", "Leave by Department", lang)
  }, React.createElement(HBarList, {
    data: Object.entries(DX.leave114.byDept).filter(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 1),
        k = _ref22[0];
      return k !== "總計";
    }).map(function (_ref23) {
      var _ref24 = _slicedToArray(_ref23, 2),
        k = _ref24[0],
        v = _ref24[1];
      return {
        name: k,
        value: v
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    }).slice(0, 10),
    color: "#0a5a2e",
    formatter: U.fmt,
    valueLabel: T(" 人次", "", lang),
    compact: true
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("退學原因", "Withdraw Reasons", lang)
  }, React.createElement(HBarList, {
    data: Object.entries(DX.withdraw114.reasons).filter(function (_ref25) {
      var _ref26 = _slicedToArray(_ref25, 1),
        k = _ref26[0];
      return k !== "總計";
    }).map(function (_ref27) {
      var _ref28 = _slicedToArray(_ref27, 2),
        k = _ref28[0],
        v = _ref28[1];
      return {
        name: k.replace(/學期間退學人數-/, ""),
        value: v
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    }).slice(0, 10),
    color: "#a07a1f",
    formatter: U.fmt,
    valueLabel: T(" 人", "", lang),
    compact: true
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("轉學生(系所·轉入)", "Transfer In by Dept", lang)
  }, React.createElement(HBarList, {
    data: Object.entries(DX.transfer114.byDept).filter(function (_ref29) {
      var _ref30 = _slicedToArray(_ref29, 1),
        k = _ref30[0];
      return k !== "總計" && DX.transfer114.byDept[k] > 0;
    }).map(function (_ref31) {
      var _ref32 = _slicedToArray(_ref31, 2),
        k = _ref32[0],
        v = _ref32[1];
      return {
        name: k,
        value: v
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    }),
    color: "#156c3a",
    formatter: U.fmt,
    valueLabel: T(" 人", "", lang),
    compact: true
  }))))));
}
function FacultyModule(_ref33) {
  var _ratio$all;
  var lang = _ref33.lang,
    unit = _ref33.unit,
    year = _ref33.year;
  var fac = UN.facultyAt(unit, year || 114);
  var isAll = unit === "全校";
  var ratio = D.studentTeacherRatio[D.studentTeacherRatio.length - 1];
  var phdPct = fac.doc && fac.total ? Math.round(fac.doc / fac.total * 100) : 0;
  var gen114 = isAll ? D.facultyGender114 : function () {
    var sh = UN.shareOf(unit, 114);
    return {
      m: Math.max(1, Math.round(D.facultyGender114.m * sh)),
      f: Math.max(1, Math.round(D.facultyGender114.f * sh)),
      est: true
    };
  }();
  var facBars = D.faculty.map(function (f, i) {
    if (isAll) return {
      name: f.year,
      prof: f.prof,
      asso: f.asso,
      asst: f.asst,
      lect: f.lect
    };
    var sh = UN.shareOf(unit, f.year);
    return {
      name: f.year,
      prof: Math.max(0, Math.round(f.prof * sh)),
      asso: Math.max(0, Math.round(f.asso * sh)),
      asst: Math.max(0, Math.round(f.asst * sh)),
      lect: Math.max(0, Math.round(f.lect * sh))
    };
  });
  var phdSeries = [110, 111, 112, 113, 114].map(function (y) {
    var all = {
      110: 109,
      111: 111,
      112: 110,
      113: 112,
      114: 108
    }[y];
    if (isAll) return all;
    return Math.max(0, Math.round(all * UN.shareOf(unit, y)));
  });
  var techSeries = [110, 111, 112, 113, 114].map(function (y) {
    var all = {
      110: 23,
      111: 23,
      112: 20,
      113: 23,
      114: 21
    }[y];
    if (isAll) return all;
    return Math.max(0, Math.round(all * UN.shareOf(unit, y)));
  });
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#c8a64b",
    pattern: "diag",
    eyebrow: T("師資結構", "Faculty", lang),
    headline: isAll ? T("師資金字塔與教學能量", "Pyramid & Capacity", lang) : T("".concat(unit, " \u5E2B\u8CC7"), "".concat(unit, " Faculty"), lang),
    headlineEn: "",
    tagline: T("職級、性別、學位、生師比", "Rank, gender, degree", lang),
    taglineEn: "",
    stats: [{
      value: fac.total,
      label: "專任教師",
      labelEn: "Full-time",
      yearLabel: "AY114",
      targetId: "sec-faculty-struct"
    }, {
      value: phdPct,
      unit: "%",
      label: "博士比例",
      labelEn: "PhD %",
      yearLabel: "AY114",
      targetId: "sec-faculty-struct"
    }, {
      value: (ratio === null || ratio === void 0 || (_ratio$all = ratio.all) === null || _ratio$all === void 0 ? void 0 : _ratio$all.toFixed(1)) || "—",
      label: "生師比",
      labelEn: "S/F",
      yearLabel: "AY114",
      targetId: "sec-faculty-struct"
    }, {
      value: "4",
      label: "職級階梯",
      labelEn: "Ranks"
    }],
    sdgs: [4, 5, 8]
  }), React.createElement(UnitFocus, {
    unit: unit,
    lang: lang,
    year: year || 114
  }), React.createElement(Section, {
    id: "sec-faculty-struct",
    title: T("師資結構", "Faculty Structure", lang),
    sdgs: [4]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-8"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("六年師資結構變化", "6-Yr Composition", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    subtitle: isAll ? T("專任", "Full-time", lang) : unit
  }, React.createElement(BarChart, {
    data: facBars,
    keys: ["prof", "asso", "asst", "lect"],
    colors: ["#0a5a2e", "#156c3a", "#c8a64b", "#e8d27a"],
    labels: [T("教授", "Prof.", lang), T("副教授", "Assoc.", lang), T("助理教授", "Asst.", lang), T("講師", "Lect.", lang)],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("114 教師性別", "AY114 Gender", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    sdgs: [5]
  }, React.createElement(Donut, {
    data: [{
      name: T("男", "Male", lang),
      value: gen114.m,
      color: "#0a5a2e"
    }, {
      name: T("女", "Female", lang),
      value: gen114.f,
      color: "#c8a64b"
    }],
    centerValue: "".concat((gen114.f / (gen114.m + gen114.f) * 100).toFixed(0), "%"),
    centerLabel: T("女性", "Female", lang)
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("博士學位 / 業界專家", "PhD / Industry", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    subtitle: "110-114"
  }, React.createElement(LineChart, {
    xLabels: [110, 111, 112, 113, 114],
    series: [{
      name: T("具博士學位", "PhD", lang),
      color: "#0a5a2e",
      data: phdSeries
    }, {
      name: T("專業技術人員", "Industry", lang),
      color: "#c8a64b",
      data: techSeries
    }],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("學生 / 職員比", "Stu/Staff", lang),
    subtitle: T("全校指標", "All-school", lang)
  }, React.createElement(LineChart, {
    xLabels: D.staffRatio.map(function (s) {
      return s.year;
    }),
    series: [{
      name: T("學生/職員", "Stu/Staff", lang),
      color: "#c8a64b",
      data: D.staffRatio.map(function (s) {
        return s.ratio;
      })
    }],
    yMax: 30,
    formatter: function formatter(v) {
      return v.toFixed(2);
    }
  }))))), React.createElement(Section, {
    title: T("專任 / 兼任教師類別", "Full-Time / Part-Time Faculty", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88681-1-3",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-4"
  }, React.createElement(KPICard, {
    label: T("專任教師", "Full-Time", lang),
    value: DX.facultyFTPT114.full,
    unit: T("人", "", lang),
    sub: T("含一般教師", "Regular", lang),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-4"
  }, React.createElement(KPICard, {
    label: T("兼任教師", "Part-Time", lang),
    value: DX.facultyFTPT114.part || "—",
    unit: T("人", "", lang),
    sub: T("本表不含·詳見人事室", "Not in this table", lang),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-4"
  }, React.createElement(KPICard, {
    label: T("專任·系所包含", "Units Covered", lang),
    value: Object.keys(DX.facultyFTPT114.byDept).length,
    unit: T("個", "", lang),
    sub: T("含院校級中心", "+ univ.-level centers", lang),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("專任教師人數·系所", "Full-Time by Dept", lang)
  }, React.createElement(HBarList, {
    data: Object.entries(DX.facultyFTPT114.byDept).map(function (_ref34) {
      var _ref35 = _slicedToArray(_ref34, 2),
        k = _ref35[0],
        v = _ref35[1];
      return {
        name: k,
        value: v.full || v
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    }),
    color: "#0a5a2e",
    formatter: U.fmt,
    valueLabel: T(" 人", "", lang)
  }))))), React.createElement(Section, {
    title: T("教師專利 · 技術移轉授權", "Faculty Patents & Tech Transfer", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88681-12 / 1-16",
      year: "114",
      lang: lang
    })),
    sdgs: [4, 8, 9]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("專利总件數", "Patents Total", lang),
    value: DX.patent114.total,
    unit: T("件", "", lang),
    sub: "".concat(T("已核准", "Approved", lang), " ").concat(DX.patent114.approved),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("技術移轉", "Tech Transfer", lang),
    value: DX.techTransfer114.total,
    unit: T("件", "", lang),
    sub: T("114 學年上", "AY114 S1", lang),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("技轉金額", "Tech Transfer $", lang),
    value: "$".concat((DX.techTransfer114.totalAmt / 1e4).toFixed(1), "\u4E07"),
    sub: "NTD ".concat(U.fmt(DX.techTransfer114.totalAmt)),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("專利類型", "Patent Types", lang),
    value: Object.keys(DX.patent114.byType).length,
    unit: T("類", "", lang),
    sub: Object.keys(DX.patent114.byType).join(" / "),
    accent: "#156c3a"
  })), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("專利類型分布", "Patents by Type", lang)
  }, React.createElement(Donut, {
    data: Object.entries(DX.patent114.byType).map(function (_ref36, i) {
      var _ref37 = _slicedToArray(_ref36, 2),
        k = _ref37[0],
        v = _ref37[1];
      return {
        name: k,
        value: v,
        color: ["#0a5a2e", "#c8a64b", "#b08c2f", "#156c3a"][i % 4]
      };
    }),
    centerValue: DX.patent114.total,
    centerLabel: T("專利件", "Patents", lang)
  }))), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("專利清單", "Patent List", lang)
  }, React.createElement("table", {
    className: "data data-tight"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, T("系所", "Dept", lang)), React.createElement("th", null, T("教師", "Teacher", lang)), React.createElement("th", null, T("專利名稱", "Name", lang)), React.createElement("th", null, T("類型", "Type", lang)), React.createElement("th", null, T("狀態", "Status", lang)))), React.createElement("tbody", null, DX.patent114.list.map(function (p, i) {
    return React.createElement("tr", {
      key: i
    }, React.createElement("td", null, p.dept), React.createElement("td", null, p.teacher), React.createElement("td", null, p.name), React.createElement("td", null, p.type), React.createElement("td", null, React.createElement("span", {
      className: "tag",
      style: {
        background: p.status === "已核准" ? "#e8f1eb" : "#fef6e3",
        color: p.status === "已核准" ? "#0a5a2e" : "#a07a1f"
      }
    }, p.status)));
  }))))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("技術移轉·授權清單", "Tech Transfer List", lang)
  }, React.createElement("table", {
    className: "data data-tight"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, T("系所", "Dept", lang)), React.createElement("th", null, T("教師", "Teacher", lang)), React.createElement("th", null, T("技轉名稱", "Name", lang)), React.createElement("th", null, T("廠商", "Company", lang)), React.createElement("th", null, T("金額", "Amount", lang)))), React.createElement("tbody", null, DX.techTransfer114.list.map(function (p, i) {
    return React.createElement("tr", {
      key: i
    }, React.createElement("td", null, p.dept), React.createElement("td", null, p.teacher), React.createElement("td", null, p.name), React.createElement("td", null, p.company), React.createElement("td", null, "$", U.fmt(p.amt)));
  }))))))));
}
function ResearchModule(_ref38) {
  var lang = _ref38.lang,
    unit = _ref38.unit,
    year = _ref38.year;
  var isAll = unit === "全校";
  var isCol = !!D.colleges[unit];
  var isDept = !isAll && !isCol;
  var col = unitCollege(unit);
  var gf = UN.industryFundAt(unit, year || 113);
  var pp = D.papersByYear[D.papersByYear.length - 1];
  var papersByDept = D.papersByDept;
  if (isCol) papersByDept = papersByDept.filter(function (d) {
    return D.colleges[unit].includes(d.dept);
  });
  if (isDept) papersByDept = papersByDept.filter(function (d) {
    return d.dept === unit;
  });
  var totalPapers = isAll ? pp.total : papersByDept.reduce(function (s, d) {
    return s + d.v[2];
  }, 0);
  var interns = UN.internsAt(unit) || 188;
  var papersScaled = D.papersByYear.map(function (p) {
    if (isAll) return p;
    var sh = UN.shareOf(unit, p.year);
    return {
      year: p.year,
      SCI: Math.round(p.SCI * sh),
      SCIE: Math.round(p.SCIE * sh),
      SSCI: Math.round(p.SSCI * sh),
      TSSCI: Math.round(p.TSSCI * sh),
      EI: Math.round(p.EI * sh),
      other: Math.round(p.other * sh)
    };
  });
  var projectFundScaled = D.projectFund.map(function (p) {
    if (isAll) return p;
    var sh = UN.shareOf(unit, p.year);
    return {
      year: p.year,
      gov: Math.round(p.gov * sh),
      biz: Math.round(p.biz * sh),
      other: Math.round(p.other * sh)
    };
  });
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#a07a1f",
    pattern: "dots",
    eyebrow: T("研究與產學", "Research", lang),
    headline: isAll ? T("產學合作與學術產出", "Industry & Output", lang) : T("".concat(unit, " \u7814\u7A76\u7522\u51FA"), "".concat(unit, " Output"), lang),
    headlineEn: "",
    tagline: T("產學經費、論文密度、實習與賽事", "Funding, papers, internships", lang),
    taglineEn: "",
    stats: [{
      value: U.fmt((gf === null || gf === void 0 ? void 0 : gf.total) || 0),
      unit: "萬",
      unitEn: "",
      label: "產學經費",
      labelEn: "Funding (10K)",
      yearLabel: "AY".concat((gf === null || gf === void 0 ? void 0 : gf.year) || 113),
      targetId: "sec-research-output"
    }, {
      value: totalPapers,
      label: isAll ? "年度論文" : "系所論文",
      labelEn: "Papers",
      yearLabel: "AY".concat((pp === null || pp === void 0 ? void 0 : pp.year) || 113),
      targetId: "sec-research-output"
    }, {
      value: U.fmt(interns),
      label: "實習生",
      labelEn: "Interns"
    }, {
      value: "33",
      label: "國際獎項",
      labelEn: "Awards"
    }],
    sdgs: [8, 9, 17]
  }), React.createElement(UnitFocus, {
    unit: unit,
    lang: lang,
    year: year || 113
  }), React.createElement(Section, {
    id: "sec-research-output",
    title: T("研究產出", "Research Output", lang),
    sdgs: [4, 9]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("論文發表類型", "Papers by Type", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    }))
  }, React.createElement(BarChart, {
    data: papersScaled.map(function (p) {
      return {
        name: p.year,
        SCI: p.SCI,
        SCIE: p.SCIE,
        SSCI: p.SSCI,
        TSSCI: p.TSSCI,
        EI: p.EI,
        other: p.other
      };
    }),
    keys: ["SCI", "SCIE", "SSCI", "TSSCI", "EI", "other"],
    colors: ["#0a5a2e", "#156c3a", "#2da267", "#c8a64b", "#b08c2f", "#8aa57a"],
    labels: ["SCI", "SCIE", "SSCI", "TSSCI", "EI", T("其他", "Other", lang)],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("研討會發表(地區)", "Conferences", lang),
    subtitle: T("全校", "All-school", lang),
    sdgs: [17]
  }, React.createElement(Heatmap, {
    rows: D.confLocations.map(function (c) {
      return lang === "en" ? U.tr(c.country) : c.country;
    }),
    cols: [111, 112, 113],
    values: D.confLocations.map(function (c) {
      return c.v;
    }),
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: isAll ? T("論文發表(系所別)", "Papers by Department", lang) : T("".concat(unit, " \u7BC4\u570D \u8AD6\u6587"), "".concat(unit, " Papers"), lang)
  }, papersByDept.length > 0 ? React.createElement(BarChart, {
    data: papersByDept.map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.dept) : d.dept,
        "111": d.v[0],
        "112": d.v[1],
        "113": d.v[2]
      };
    }),
    keys: ["111", "112", "113"],
    colors: ["#8aa57a", "#c8a64b", "#0a5a2e"],
    highlight: lang === "en" ? U.tr(unit) : unit,
    labels: ["111", "112", "113"],
    formatter: U.fmt
  }) : React.createElement("div", {
    className: "note"
  }, T("該單位 113 年無發表記錄", "No paper records", lang)))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("研究計畫類型", "Projects by Type", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    sdgs: [8, 9]
  }, React.createElement(BarChart, {
    data: D.projectByType.map(function (p) {
      var sh = isAll ? 1 : UN.shareOf(unit, 114);
      return {
        name: lang === "en" ? U.tr(p.type) : p.type,
        "112": Math.round(p.v[0] * sh),
        "113": Math.round(p.v[1] * sh),
        "114": Math.round(p.v[2] * sh)
      };
    }),
    keys: ["112", "113", "114"],
    colors: ["#8aa57a", "#c8a64b", "#0a5a2e"],
    labels: ["112", "113", "114"],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("總研究計畫經費", "Total Funding", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    })),
    subtitle: T("單位:萬元", "NT$ 10K", lang)
  }, React.createElement(BarChart, {
    data: projectFundScaled.map(function (p) {
      return {
        name: p.year,
        gov: p.gov,
        biz: p.biz,
        other: p.other
      };
    }),
    keys: ["gov", "biz", "other"],
    colors: ["#0a5a2e", "#c8a64b", "#8aa57a"],
    labels: [T("政府", "Gov", lang), T("企業", "Biz", lang), T("其他", "Other", lang)],
    formatter: U.fmt
  }))))));
}
function GovernanceModule(_ref39) {
  var _sat$samples, _sat$samples2, _sat$samples3, _stuSample$rate, _teacherSample$rate, _adminSample$rate;
  var lang = _ref39.lang,
    unit = _ref39.unit,
    year = _ref39.year;
  var isAll = unit === "全校";
  var sat = D.satisfaction;
  var stuSample = sat === null || sat === void 0 || (_sat$samples = sat.samples) === null || _sat$samples === void 0 ? void 0 : _sat$samples.find(function (s) {
    return s.type === "學生";
  });
  var adminSample = sat === null || sat === void 0 || (_sat$samples2 = sat.samples) === null || _sat$samples2 === void 0 ? void 0 : _sat$samples2.find(function (s) {
    return s.type === "行政人員";
  });
  var teacherSample = sat === null || sat === void 0 || (_sat$samples3 = sat.samples) === null || _sat$samples3 === void 0 ? void 0 : _sat$samples3.find(function (s) {
    return s.type === "教師";
  });
  var totalSamples = ((sat === null || sat === void 0 ? void 0 : sat.samples) || []).reduce(function (a, s) {
    return a + (s.actual || 0);
  }, 0);
  var showCols = isAll ? Object.entries(D.gradFlow) : function () {
    var col = unitCollege(unit);
    return col ? [[col, D.gradFlow[col]]] : [];
  }();
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#0a5a2e",
    pattern: "grid",
    eyebrow: T("治理與品質", "Governance", lang),
    headline: isAll ? T("治理透明 × 滿意度 × 永續校園", "Governance · Quality", lang) : T("".concat(unit, " \u6CBB\u7406\u8996\u89D2"), "".concat(unit, " View"), lang),
    headlineEn: "",
    tagline: T("財務、性別、滿意度、淨零", "Finance, gender, satisfaction", lang),
    taglineEn: "",
    stats: [{
      value: U.fmt(totalSamples),
      label: "滿意度樣本",
      labelEn: "Samples",
      yearLabel: "AY113",
      targetId: "sec-gov-satisfaction"
    }, {
      value: (stuSample === null || stuSample === void 0 || (_stuSample$rate = stuSample.rate) === null || _stuSample$rate === void 0 ? void 0 : _stuSample$rate.toFixed(1)) || "—",
      unit: "%",
      label: "學生達成率",
      labelEn: "Student",
      yearLabel: "AY113",
      targetId: "sec-gov-satisfaction"
    }, {
      value: (teacherSample === null || teacherSample === void 0 || (_teacherSample$rate = teacherSample.rate) === null || _teacherSample$rate === void 0 ? void 0 : _teacherSample$rate.toFixed(1)) || "—",
      unit: "%",
      label: "教師達成率",
      labelEn: "Teacher",
      yearLabel: "AY113",
      targetId: "sec-gov-satisfaction"
    }, {
      value: (adminSample === null || adminSample === void 0 || (_adminSample$rate = adminSample.rate) === null || _adminSample$rate === void 0 ? void 0 : _adminSample$rate.toFixed(1)) || "—",
      unit: "%",
      label: "行政達成率",
      labelEn: "Admin",
      yearLabel: "AY113",
      targetId: "sec-gov-satisfaction"
    }],
    sdgs: [5, 8, 12, 13, 16]
  }), React.createElement(UnitFocus, {
    unit: unit,
    lang: lang,
    year: year || 114
  }), React.createElement(Section, {
    id: "sec-gov-satisfaction",
    title: T("校地、校舍與滿意度", "Campus & Satisfaction", lang),
    sdgs: [11, 16]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("每生平均校地/校舍", "Per-Student Land", lang),
    subtitle: T("全校指標", "All-school", lang)
  }, React.createElement(LineChart, {
    xLabels: D.campus.map(function (c) {
      return c.year;
    }),
    series: [{
      name: T("校地/生", "Land", lang),
      color: "#0a5a2e",
      data: D.campus.map(function (c) {
        return c.perStudentLand;
      })
    }, {
      name: T("校舍/生", "Building", lang),
      color: "#c8a64b",
      data: D.campus.map(function (c) {
        return c.perStudentBuilding;
      })
    }],
    formatter: function formatter(v) {
      return v.toFixed(1);
    }
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement("div", {
    className: "src-warning"
  }, React.createElement("span", {
    className: "src-warning-icon"
  }, "\u26A0\uFE0F"), React.createElement("div", null, React.createElement("b", null, T("下方滿意度資料來源說明", "Satisfaction Data Source Notice", lang)), "\u3000", T("本区塊數據「非」源自校務基本資料庫（校基庫無滿意度問卷表），而是依「113 學年校務問責報告書」內附之調查結果整理。原始問卷檔存於校務研究雲端資料夾。", "Data here is NOT from the IR database (no satisfaction table exists there). Source: AY113 Accountability Report. Original questionnaires are stored in the IR cloud folder.", lang), "\xA0", React.createElement("a", {
    href: DX.cloudLinks.ir,
    target: "_blank",
    rel: "noreferrer",
    className: "src-warning-link"
  }, T("校務研究雲端資料夾 ↗", "IR Cloud Folder ↗", lang))))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("113 滿意度問卷樣本", "Survey", lang),
    subtitle: T("來源：113 問責報告書", "Source: AY113 Accountability Report", lang)
  }, React.createElement("table", {
    className: "data"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, T("身分", "Type", lang)), React.createElement("th", null, T("目標", "Target", lang)), React.createElement("th", null, T("實際", "Actual", lang)), React.createElement("th", null, T("達成率", "Rate", lang)))), React.createElement("tbody", null, D.satisfaction.samples.map(function (s) {
    return React.createElement("tr", {
      key: s.type
    }, React.createElement("td", null, lang === "en" ? U.tr(s.type) : s.type), React.createElement("td", null, s.target), React.createElement("td", null, s.actual), React.createElement("td", null, React.createElement("span", {
      className: "tag"
    }, s.rate, "%")));
  }))))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("行政人員滿意度TOP3", "Top 3 Admin", lang),
    subtitle: T("來源：113 問責報告書", "Source: AY113 Accountability Report", lang)
  }, React.createElement(HBarList, {
    data: D.satisfaction.adminTop.map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.item) : d.item,
        value: d.score
      };
    }),
    color: "#0a5a2e",
    formatter: function formatter(v) {
      return v.toFixed(2);
    }
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("行政人員需改善", "Lowest 3 Admin", lang),
    subtitle: T("來源：113 問責報告書", "Source: AY113 Accountability Report", lang)
  }, React.createElement(HBarList, {
    data: D.satisfaction.adminBottom.map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.item) : d.item,
        value: d.score
      };
    }),
    color: "#c8a64b",
    formatter: function formatter(v) {
      return v.toFixed(2);
    }
  }))))));
}
function SDGsModule(_ref40) {
  var lang = _ref40.lang;
  var counts = {};
  Object.values(D.sdgMap).forEach(function (arr) {
    return arr.forEach(function (g) {
      counts[g] = (counts[g] || 0) + 1;
    });
  });
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var S = D.sdgStrategy;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "sdg-hero"
  }, React.createElement("div", {
    className: "sdg-hero-bg"
  }, Array.from({
    length: 17
  }, function (_, i) {
    return i + 1;
  }).map(function (id) {
    return React.createElement("span", {
      key: id,
      className: "sdg-hero-chip",
      style: {
        background: U.SDG_COLORS[id]
      }
    }, id);
  })), React.createElement("div", {
    className: "sdg-hero-inner"
  }, React.createElement("div", {
    className: "sdg-hero-eyebrow"
  }, React.createElement("span", {
    className: "sdg-hero-dot"
  }), T("NKUHT × UN SDGs 2030", "NKUHT × UN SDGs 2030", lang)), React.createElement("h1", {
    className: "sdg-hero-headline"
  }, lang === "en" ? S.headlineEn : S.headline), React.createElement("p", {
    className: "sdg-hero-tag"
  }, lang === "en" ? S.taglineEn : S.tagline), React.createElement("div", {
    className: "sdg-hero-stats"
  }, React.createElement("div", null, React.createElement("b", null, "17"), React.createElement("span", null, T("永續目標", "SDG Goals", lang))), React.createElement("div", null, React.createElement("b", null, "14"), React.createElement("span", null, T("校務指標對應", "Mapped", lang))), React.createElement("div", null, React.createElement("b", null, "5"), React.createElement("span", null, T("策略支柱", "Pillars", lang))), React.createElement("div", null, React.createElement("b", null, "4"), React.createElement("span", null, T("永續承諾", "Commitments", lang)))))), React.createElement(Section, {
    title: T("五大永續策略支柱", "Five Pillars", lang),
    subtitle: T("以餐旅專業實踐 SDGs", "Hospitality SDG action", lang)
  }, React.createElement("div", {
    className: "sdg-pillars"
  }, S.pillars.map(function (p) {
    return React.createElement("div", {
      key: p.key,
      className: "sdg-pillar",
      style: {
        "--pc": p.color
      }
    }, React.createElement("div", {
      className: "sdg-pillar-head"
    }, React.createElement("div", {
      className: "sdg-pillar-badges"
    }, p.sdgs.map(function (id) {
      return React.createElement("span", {
        key: id,
        className: "sdg-badge",
        style: {
          background: U.SDG_COLORS[id],
          width: 32,
          height: 32,
          fontSize: 13
        }
      }, id);
    })), React.createElement("div", {
      className: "sdg-pillar-key"
    }, lang === "en" ? p.en : p.zh)), React.createElement("div", {
      className: "sdg-pillar-kpi"
    }, lang === "en" ? p.kpiEn : p.kpi), React.createElement("div", {
      className: "sdg-pillar-action"
    }, lang === "en" ? p.actionEn : p.action));
  }))), React.createElement(Section, {
    title: T("我們的四大永續承諾", "Four Commitments", lang),
    subtitle: T("從教學到社會影響", "Classroom to community", lang)
  }, React.createElement("div", {
    className: "grid g-12"
  }, S.commitments.map(function (c, i) {
    return React.createElement("div", {
      key: i,
      className: "span-6"
    }, React.createElement("div", {
      className: "sdg-commit"
    }, React.createElement("div", {
      className: "sdg-commit-num"
    }, "0", i + 1), React.createElement("div", {
      className: "sdg-commit-icon"
    }, c.icon), React.createElement("div", {
      className: "sdg-commit-title"
    }, lang === "en" ? c.en : c.zh), React.createElement("div", {
      className: "sdg-commit-body"
    }, lang === "en" ? c.bodyEn : c.body)));
  }))), React.createElement(Section, {
    title: T("17 項 SDGs × 校務指標", "17 SDGs × Indicators", lang),
    subtitle: T("Hover 右側看對應", "Hover to highlight", lang)
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("SDGs Sunburst — 五大支柱 × 17 目標 × 校務指標", "Sunburst", lang),
    subtitle: T("從內到外:策略支柱 → SDGs → 校務指標。點擊 SDG 可固定篩選", "Pillar → SDG → Indicator", lang)
  }, React.createElement(SDGSunburst, {
    pillars: S.pillars,
    sdgMap: D.sdgMap,
    sdgColors: U.SDG_COLORS,
    sdgNameZh: U.SDG_NAME_ZH,
    sdgNameEn: U.SDG_NAME_EN,
    lang: lang,
    size: 520
  }))), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("17 項目標涵蓋熱度", "Coverage", lang)
  }, React.createElement("div", {
    className: "sdg-grid"
  }, Array.from({
    length: 17
  }, function (_, i) {
    return i + 1;
  }).map(function (id) {
    var _D$sdgMap$active;
    var c = counts[id] || 0;
    var dim = active && !((_D$sdgMap$active = D.sdgMap[active]) !== null && _D$sdgMap$active !== void 0 && _D$sdgMap$active.includes(id));
    return React.createElement("div", {
      key: id,
      className: "sdg-tile ".concat(dim ? "dim" : ""),
      style: {
        background: U.SDG_COLORS[id],
        outline: c > 0 ? "" : "1px dashed rgba(0,0,0,.15)"
      }
    }, React.createElement("div", {
      className: "sdg-tile-num"
    }, id), React.createElement("div", {
      className: "sdg-tile-name"
    }, lang === "en" ? U.SDG_NAME_EN[id] : U.SDG_NAME_ZH[id]), c > 0 && React.createElement("div", {
      className: "sdg-tile-count"
    }, c));
  })))), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("校務指標 → SDGs", "Indicator → SDGs", lang)
  }, React.createElement("div", {
    className: "hbar-list"
  }, Object.entries(D.sdgMap).map(function (_ref41) {
    var _ref42 = _slicedToArray(_ref41, 2),
      k = _ref42[0],
      arr = _ref42[1];
    return React.createElement("div", {
      className: "hbar-row",
      key: k,
      style: {
        cursor: "pointer"
      },
      onMouseEnter: function onMouseEnter() {
        return setActive(k);
      },
      onMouseLeave: function onMouseLeave() {
        return setActive(null);
      }
    }, React.createElement("div", {
      className: "hbar-name"
    }, lang === "en" ? U.tr(k) : k), React.createElement("div", {
      className: "hbar-track",
      style: {
        background: "transparent",
        justifyContent: "flex-start",
        gap: 4,
        paddingLeft: 6
      }
    }, arr.map(function (id) {
      return React.createElement("span", {
        key: id,
        className: "sdg-badge",
        style: {
          background: U.SDG_COLORS[id],
          width: 22,
          height: 22,
          fontSize: 11
        }
      }, id);
    })));
  })))))), React.createElement(ESGCloudSection, {
    lang: lang
  }));
}
function ExploreModule(_ref43) {
  var lang = _ref43.lang,
    unit = _ref43.unit,
    year = _ref43.year;
  var isAll = unit === "全校";
  var _useState3 = useState("全部"),
    _useState4 = _slicedToArray(_useState3, 2),
    region = _useState4[0],
    setRegion = _useState4[1];
  var regions = ["全部", "東南亞", "東北亞", "美洲", "歐洲", "其他"];
  var yrs = D.intlYears;
  var filtered = D.intlStudents.filter(function (s) {
    return region === "全部" || s.region === region;
  });
  var sh = isAll ? 1 : UN.shareOf(unit, year || 114);
  var totals = yrs.map(function (_, i) {
    return Math.round(filtered.reduce(function (s, r) {
      return s + r.v[i];
    }, 0) * sh);
  });
  var heatValues = filtered.map(function (s) {
    return s.v.map(function (v) {
      return Math.round(v * sh);
    });
  });
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#b08c2f",
    pattern: "diag",
    eyebrow: T("境外生探索", "Intl. Students", lang),
    headline: isAll ? T("境外生起源、分布與趨勢", "Intl. Students: Origin, Spread & Trends", lang) : T("".concat(unit, " \u63A2\u7D22\u8996\u89D2"), "".concat(unit, " View"), lang),
    headlineEn: "",
    tagline: T("切換指標、單位與年份", "Switch indicators", lang),
    taglineEn: "",
    stats: [{
      value: "6",
      label: "學年資料",
      labelEn: "Years"
    }, {
      value: "50+",
      label: "指標欄位",
      labelEn: "Indicators"
    }, {
      value: "5",
      label: "地理區域",
      labelEn: "Regions"
    }, {
      value: "CSV",
      label: "可下載",
      labelEn: "Export"
    }],
    sdgs: [4, 9, 17]
  }), React.createElement(UnitFocus, {
    unit: unit,
    lang: lang,
    year: year || 114
  }), React.createElement(Section, {
    title: T("境外生來源探索", "Intl. Students", lang),
    subtitle: isAll ? "" : React.createElement(React.Fragment, null, T("已縮放至", "Scaled to ", lang), React.createElement("b", null, unit), " ", React.createElement(EstNote, {
      lang: lang
    })),
    sdgs: [4, 17]
  }, React.createElement("div", {
    className: "filter-bar",
    style: {
      padding: 0,
      background: "transparent",
      border: 0,
      marginBottom: 14
    }
  }, React.createElement("span", {
    className: "filter-label"
  }, T("區域", "Region", lang)), regions.map(function (r) {
    return React.createElement("button", {
      key: r,
      className: "chip ".concat(region === r ? "on" : ""),
      onClick: function onClick() {
        return setRegion(r);
      }
    }, lang === "en" ? U.tr(r) : r);
  })), React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("方位地圖 — 以高雄為原點", "Azimuthal Map", lang),
    subtitle: T("方位 = 真實方位角・距離 = 飛行公里・圓點大小 = 人數", "Bearing & distance from NKUHT", lang)
  }, React.createElement(WorldDotMap, {
    countries: filtered.filter(function (c) {
      return c.country !== "其他";
    }).map(function (c) {
      var _c$v$D$intlYears$inde;
      return {
        name: lang === "en" ? U.tr(c.country) : c.country,
        region: c.region,
        value: Math.round(((_c$v$D$intlYears$inde = c.v[D.intlYears.indexOf(year)]) !== null && _c$v$D$intlYears$inde !== void 0 ? _c$v$D$intlYears$inde : c.v[c.v.length - 1]) * sh)
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    }),
    year: year || 114,
    total: Math.round(filtered.reduce(function (s, r) {
      var _r$v$D$intlYears$inde;
      return s + ((_r$v$D$intlYears$inde = r.v[D.intlYears.indexOf(year)]) !== null && _r$v$D$intlYears$inde !== void 0 ? _r$v$D$intlYears$inde : r.v[r.v.length - 1]);
    }, 0) * sh),
    height: 420
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("區域走勢", "Trend", lang),
    subtitle: "".concat(region, " | ").concat(yrs[0], "-").concat(yrs[yrs.length - 1])
  }, React.createElement(LineChart, {
    xLabels: yrs,
    series: [{
      name: T("總人數", "Total", lang),
      color: isAll ? "#0a5a2e" : unitColor(unit),
      data: totals
    }],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("國別人數(熱度圖)", "By Country", lang)
  }, React.createElement(Heatmap, {
    rows: filtered.map(function (s) {
      return lang === "en" ? U.tr(s.country) : s.country;
    }),
    cols: yrs,
    values: heatValues,
    formatter: U.fmt,
    color: [200, 166, 75]
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: React.createElement(React.Fragment, null, T("114 新生縣市分布(前 12)", "AY114 Freshmen by City", lang), !isAll && React.createElement(EstNote, {
      lang: lang
    }))
  }, React.createElement(HBarList, {
    data: D.freshmanCity.slice(0, 12).map(function (c) {
      return {
        name: lang === "en" ? U.tr(c.city) : c.city,
        value: Math.round(c.v[2] * sh)
      };
    }),
    color: isAll ? "#0a5a2e" : unitColor(unit),
    formatter: U.fmt
  }))))));
}
Object.assign(window, {
  OverviewModule: OverviewModule,
  StudentsModule: StudentsModule,
  FacultyModule: FacultyModule,
  ResearchModule: ResearchModule,
  GovernanceModule: GovernanceModule,
  SDGsModule: SDGsModule,
  ExploreModule: ExploreModule,
  ReportsModule: ReportsModule
});
function ReportsModule(_ref44) {
  var lang = _ref44.lang;
  var links = D.officialLinks;
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#0a5a2e",
    pattern: "dots",
    eyebrow: T("報告書下載", "Reports Hub", lang),
    headline: T("補充報告書下載專區", "Supplementary Reports Hub", lang),
    headlineEn: "",
    tagline: T("文字型報告書與政府公開資料 · 點擊卡片另開官方頁面下載", "Text reports & government open data", lang),
    taglineEn: "",
    stats: [{
      value: 3,
      label: "報告類別",
      labelEn: "Categories",
      targetId: "sec-reports-cats"
    }, {
      value: T("8 面向", "8", lang),
      label: "開放資料",
      labelEn: "Dimensions"
    }, {
      value: T("雲端", "Cloud", lang),
      label: "PDF 下載",
      labelEn: "PDF"
    }, {
      value: "↗",
      label: "官方總入口",
      labelEn: "Portal"
    }],
    sdgs: [16, 17]
  }), React.createElement(Section, {
    id: "sec-reports-cats",
    title: T("三大類報告書", "Three Report Categories", lang),
    subtitle: T("點擊卡片另開新頁面", "Click to open in new tab", lang)
  }, React.createElement("div", {
    className: "rep-grid"
  }, Object.entries(links).map(function (_ref45) {
    var _ref46 = _slicedToArray(_ref45, 2),
      k = _ref46[0],
      v = _ref46[1];
    return React.createElement("a", {
      key: k,
      href: v.url,
      target: "_blank",
      rel: "noreferrer",
      className: "rep-card"
    }, React.createElement("div", {
      className: "rep-icon"
    }, v.icon), React.createElement("div", {
      className: "rep-tag"
    }, v.tag), React.createElement("div", {
      className: "rep-title"
    }, lang === "zh" ? v.zh : v.en), React.createElement("div", {
      className: "rep-desc"
    }, lang === "zh" ? v.desc.zh : v.desc.en), React.createElement("div", {
      className: "rep-cta"
    }, T("前往官方頁面下載 →", "Open official source →", lang)));
  }))), React.createElement(Section, {
    title: T("校務研究公開資料總入口", "Open Data Portal", lang),
    subtitle: T("永續發展與校務研究中心 (NKUHT-SDIR)", "NKUHT Sustainability & IR Center", lang)
  }, React.createElement("div", {
    className: "rep-portal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "rep-portal-title"
  }, T("NKUHT-SDIR 校務研究公開資料", "NKUHT-SDIR Institutional Research Open Data", lang)), React.createElement("div", {
    className: "rep-portal-desc"
  }, T("八大面向開放資料總目錄:學生、教務、學務、教師人事、研究、財務、ESG 永續、校務研究", "8 dimensions: Student, Academic, Student Affairs, Teachers, Research, Finance, ESG, IR", lang))), React.createElement("a", {
    className: "rep-portal-btn",
    href: D.meta.openDataHub,
    target: "_blank",
    rel: "noreferrer"
  }, T("前往總入口 ↗", "Visit portal ↗", lang)))));
}