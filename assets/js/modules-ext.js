"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DX = window.NKUHT_DATA_X;
var COLLEGE_COLORS = {
  "餐旅學院": "#0a5a2e",
  "觀光學院": "#156c3a",
  "廚藝學院": "#c8a64b",
  "國際學院": "#b08c2f"
};
function toSorted(obj) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var exclude = opts.exclude || ["總計", "", null];
  return Object.entries(obj).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];
    return !exclude.includes(k) && v;
  }).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      k = _ref4[0],
      v = _ref4[1];
    return {
      name: k,
      value: v
    };
  }).sort(function (a, b) {
    return b.value - a.value;
  });
}
function CloudCard(_ref5) {
  var icon = _ref5.icon,
    title = _ref5.title,
    subtitle = _ref5.subtitle,
    url = _ref5.url,
    color = _ref5.color,
    lang = _ref5.lang,
    items = _ref5.items;
  return React.createElement("a", {
    className: "cloud-card",
    href: url,
    target: "_blank",
    rel: "noreferrer",
    style: {
      "--cloud-accent": color
    }
  }, React.createElement("div", {
    className: "cloud-card-head"
  }, React.createElement("div", {
    className: "cloud-card-icon"
  }, icon), React.createElement("div", {
    className: "cloud-card-text"
  }, React.createElement("div", {
    className: "cloud-card-title"
  }, title), React.createElement("div", {
    className: "cloud-card-sub"
  }, subtitle))), items && React.createElement("ul", {
    className: "cloud-card-list"
  }, items.map(function (it, i) {
    return React.createElement("li", {
      key: i
    }, it);
  })), React.createElement("div", {
    className: "cloud-card-cta"
  }, T("開啟 Google 雲端資料夾", "Open Google Drive folder", lang), " \u2197"));
}
function SourceBadge(_ref6) {
  var table = _ref6.table,
    year = _ref6.year,
    lang = _ref6.lang;
  return React.createElement("span", {
    className: "src-badge",
    title: T("\u8CC7\u6599\u4F86\u6E90:\u6821\u52D9\u57FA\u672C\u8CC7\u6599\u5EAB ".concat(table), "Source: IR DB ".concat(table), lang)
  }, React.createElement("span", {
    className: "src-badge-dot"
  }), table, year ? " \xB7 ".concat(year) : "");
}
function ProportionStat(_ref7) {
  var label = _ref7.label,
    value = _ref7.value,
    total = _ref7.total,
    color = _ref7.color,
    _ref7$formatter = _ref7.formatter,
    formatter = _ref7$formatter === void 0 ? function (v) {
      return v;
    } : _ref7$formatter;
  var pct = total ? (value / total * 100).toFixed(1) : 0;
  return React.createElement("div", {
    className: "prop-stat"
  }, React.createElement("div", {
    className: "prop-stat-bar"
  }, React.createElement("div", {
    style: {
      width: "".concat(pct, "%"),
      background: color
    }
  })), React.createElement("div", {
    className: "prop-stat-meta"
  }, React.createElement("span", {
    className: "prop-stat-label"
  }, label), React.createElement("span", {
    className: "prop-stat-value"
  }, formatter(value), " ", React.createElement("small", null, "(", pct, "%)"))));
}
function EmployabilityModule(_ref8) {
  var lang = _ref8.lang,
    year = _ref8.year,
    unit = _ref8.unit;
  var isAll = unit === "全校";
  var intern = DX.internship114;
  var tech = DX.techCert114;
  var lang2 = DX.langCert114;
  var compete = DX.compete113;
  var grad = DX.gradFlow113Detail;
  var overseas = intern.total - (intern.byCountry["中華民國"] || 0);
  var overseaPct = intern.total ? (overseas / intern.total * 100).toFixed(1) : 0;
  var gt = grad.totals;
  var gradTotal = gt.ed + gt.work + gt.mil + gt.abroad + gt.wait + gt.other;
  var workRate = gradTotal ? (gt.work / gradTotal * 100).toFixed(1) : 0;
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#0a5a2e",
    pattern: "dots",
    eyebrow: T("學生就業力", "Employability", lang),
    headline: T("從實習到職場 — 就業力全景", "From Internship to Career", lang),
    headlineEn: "",
    tagline: T("實習・證照・競賽・畢業流向", "Internship · Certifications · Competition · Outcomes", lang),
    taglineEn: "",
    stats: [{
      value: U.fmt(intern.total),
      label: "實習人次",
      labelEn: "Internships",
      yearLabel: "AY114上",
      targetId: "sec-intern"
    }, {
      value: U.fmt(tech.total),
      label: "技術證照",
      labelEn: "Tech Cert.",
      yearLabel: "AY114上",
      targetId: "sec-cert-tech"
    }, {
      value: U.fmt(lang2.total),
      label: "外語證照",
      labelEn: "Lang. Cert.",
      yearLabel: "AY114上",
      targetId: "sec-cert-lang"
    }, {
      value: U.fmt(compete.competeTotal),
      label: "競賽獲獎",
      labelEn: "Awards",
      yearLabel: "AY113",
      targetId: "sec-compete"
    }],
    sdgs: [4, 8, 9, 17]
  }), React.createElement(Section, {
    id: "sec-intern",
    title: T("國內外實習全景", "Internship Landscape", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-7-4",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4, 8, 17]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("實習總人次", "Total", lang),
    value: U.fmt(intern.total),
    unit: T("人次", ""),
    sub: T("114 學年上學期", "AY114 S1", lang),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("海外實習", "Overseas", lang),
    value: U.fmt(overseas),
    unit: T("人次", ""),
    sub: "".concat(overseaPct, "% ").concat(T("佔比", "share", lang)),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("實習月薪平均", "Avg Wage", lang),
    value: "$".concat(U.fmt(intern.avgMonthlyWage)),
    sub: T("月薪 (NTD)", "Monthly NTD", lang),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("實習國家數", "Countries", lang),
    value: Object.keys(intern.byCountry).length,
    unit: "",
    sub: T("實習地遍布", "Spread", lang),
    accent: "#156c3a"
  })), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("國別/地區分布", "By Country", lang)
  }, React.createElement(Donut, {
    data: toSorted(intern.byCountry).map(function (d, i) {
      return _objectSpread(_objectSpread({}, d), {}, {
        color: ["#0a5a2e", "#c8a64b", "#156c3a", "#b08c2f", "#8aa57a", "#a07a1f"][i % 6]
      });
    }),
    centerValue: U.fmt(intern.total),
    centerLabel: T("實習人次", "Interns", lang)
  }))), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("行業別分布", "By Industry", lang)
  }, React.createElement(HBarList, {
    data: toSorted(intern.byIndustry).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    color: "#0a5a2e",
    formatter: U.fmt,
    valueLabel: T(" 人次", "", lang)
  }))), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("國內縣市分布", "Domestic Cities", lang),
    subtitle: T("僅含中華民國境內實習", "Taiwan only", lang)
  }, React.createElement(HBarList, {
    data: toSorted(intern.byCity).slice(0, 12).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    color: "#c8a64b",
    formatter: U.fmt,
    valueLabel: T(" 人次", "", lang)
  }))), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("給付類型", "Pay Type", lang)
  }, React.createElement(Donut, {
    data: Object.entries(intern.payTypes).filter(function (_ref9) {
      var _ref0 = _slicedToArray(_ref9, 2),
        k = _ref0[0],
        v = _ref0[1];
      return k && v;
    }).map(function (_ref1, i) {
      var _ref10 = _slicedToArray(_ref1, 2),
        k = _ref10[0],
        v = _ref10[1];
      return {
        name: lang === "en" ? U.tr(k) : k,
        value: v,
        color: ["#0a5a2e", "#c8a64b", "#b08c2f", "#8aa57a", "#156c3a"][i % 5]
      };
    }),
    centerValue: U.fmt(intern.total),
    centerLabel: T("人次", "", lang)
  }))))), React.createElement(Section, {
    id: "sec-cert-tech",
    title: T("學生技術證照", "Technical Certifications", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-8-2",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4, 8]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("技術證照", "Total", lang),
    value: U.fmt(tech.total),
    unit: T("張", ""),
    sub: "".concat(T("男", "M", lang), " ").concat(tech.m, " / ").concat(T("女", "F", lang), " ").concat(tech.f),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("與科系相關", "Related", lang),
    value: tech.total ? Math.round(tech.related.related / tech.total * 100) : 0,
    unit: "%",
    sub: "".concat(U.fmt(tech.related.related), " ").concat(T("張", "", lang)),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("學院別分布", "By College", lang),
    className: "card-compact"
  }, React.createElement(HBarList, {
    data: toSorted(tech.byCollege).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        color: COLLEGE_COLORS[d.name] || "#0a5a2e",
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    formatter: U.fmt,
    valueLabel: T(" 張", "", lang),
    compact: true
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("證照類別分布", "By Category", lang)
  }, React.createElement(HBarList, {
    data: toSorted(tech.byCategory).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    color: "#0a5a2e",
    formatter: U.fmt,
    valueLabel: T(" 張", "", lang)
  }))))), React.createElement(Section, {
    id: "sec-cert-lang",
    title: T("學生外語證照", "Language Certifications", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-8-3",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4, 17]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: T("語別分布", "By Language", lang)
  }, React.createElement(Donut, {
    data: toSorted(lang2.byLanguage).map(function (d, i) {
      return _objectSpread(_objectSpread({}, d), {}, {
        color: ["#0a5a2e", "#c8a64b", "#b08c2f", "#156c3a"][i % 4]
      });
    }),
    centerValue: U.fmt(lang2.total),
    centerLabel: T("張", "Certs", lang)
  }))), React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: T("通過等級", "Level", lang)
  }, React.createElement(HBarList, {
    data: toSorted(lang2.byLevel).slice(0, 8),
    color: "#c8a64b",
    formatter: U.fmt,
    valueLabel: T(" 張", "", lang),
    compact: true
  }))), React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: T("學院別分布", "By College", lang)
  }, React.createElement(HBarList, {
    data: toSorted(lang2.byCollege).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        color: COLLEGE_COLORS[d.name] || "#0a5a2e",
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    formatter: U.fmt,
    valueLabel: T(" 張", "", lang),
    compact: true
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("檢測類型", "Test Types", lang)
  }, React.createElement(HBarList, {
    data: toSorted(lang2.byTest).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    color: "#b08c2f",
    formatter: U.fmt,
    valueLabel: T(" 張", "", lang)
  }))))), React.createElement(Section, {
    id: "sec-compete",
    title: T("學生競賽 / 學術活動", "Competition & Academic Activity", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-8-4",
      year: "113_S2",
      lang: lang
    })),
    sdgs: [4, 8, 9]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("競賽獲獎", "Awards", lang),
    value: U.fmt(compete.competeTotal),
    unit: T("人次", ""),
    sub: "".concat(T("台", "TW", lang)).concat(compete.competeTW, "\u30FB").concat(T("陸港澳", "CN", lang)).concat(compete.competeCN, "\u30FB").concat(T("其他", "Other", lang)).concat(compete.competeOther),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("論文/展演", "Papers/Performances", lang),
    value: U.fmt(compete.papers),
    unit: T("篇/場", "", lang),
    sub: "".concat(compete.paperPeople, " ").concat(T("人次", "ppl", lang)),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("出席國際會議", "Int'l Meetings", lang),
    value: U.fmt(compete.meetingTotal),
    unit: T("人次", ""),
    sub: "".concat(T("海外", "Overseas", lang), " ").concat(compete.meetingCN + compete.meetingOther),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("海外獲獎佔比", "Overseas %", lang),
    value: compete.competeTotal ? Math.round((compete.competeCN + compete.competeOther) / compete.competeTotal * 100) : 0,
    unit: "%",
    sub: T("國際舞台表現", "Global stage", lang),
    accent: "#156c3a"
  })), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("競賽地區分布", "Awards by Region", lang)
  }, React.createElement(Donut, {
    data: [{
      name: T("臺灣地區", "Taiwan", lang),
      value: compete.competeTW,
      color: "#0a5a2e"
    }, {
      name: T("陸港澳地區", "CN/HK/MO", lang),
      value: compete.competeCN,
      color: "#c8a64b"
    }, {
      name: T("其他地區", "Other", lang),
      value: compete.competeOther,
      color: "#b08c2f"
    }],
    centerValue: U.fmt(compete.competeTotal),
    centerLabel: T("人次", "", lang)
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("學院別獲獎人次", "Awards by College", lang)
  }, React.createElement(HBarList, {
    data: toSorted(compete.byCollege).map(function (d) {
      return _objectSpread(_objectSpread({}, d), {}, {
        color: COLLEGE_COLORS[d.name] || "#0a5a2e",
        name: lang === "en" ? U.tr(d.name) : d.name
      });
    }),
    formatter: U.fmt,
    valueLabel: T(" 人次", "", lang)
  }))))), React.createElement(Section, {
    id: "sec-grad",
    title: T("113 畢業生流向(實際人數)", "AY113 Graduate Outcomes (Headcount)", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88684-10",
      year: "113_S2",
      lang: lang
    })),
    sdgs: [4, 8]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-4"
  }, React.createElement(Card, {
    title: T("整體流向", "Overall", lang)
  }, React.createElement(Donut, {
    data: [{
      name: T("就業", "Employment", lang),
      value: gt.work,
      color: "#0a5a2e"
    }, {
      name: T("升學", "Grad School", lang),
      value: gt.ed,
      color: "#c8a64b"
    }, {
      name: T("服兵役", "Military", lang),
      value: gt.mil,
      color: "#156c3a"
    }, {
      name: T("待業", "Waiting", lang),
      value: gt.wait,
      color: "#b08c2f"
    }, {
      name: T("留學", "Overseas Study", lang),
      value: gt.abroad,
      color: "#8aa57a"
    }, {
      name: T("其他", "Other", lang),
      value: gt.other,
      color: "#a07a1f"
    }],
    centerValue: U.fmt(gradTotal),
    centerLabel: T("畢業生", "Grads", lang)
  }))), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("就業率", "Employment Rate", lang),
    value: workRate,
    unit: "%",
    sub: "".concat(U.fmt(gt.work), " / ").concat(U.fmt(gradTotal), " ").concat(T("人", "", lang)),
    accent: "#0a5a2e"
  }), React.createElement("div", {
    style: {
      height: 8
    }
  }), React.createElement(KPICard, {
    label: T("升學率", "Grad School Rate", lang),
    value: gradTotal ? (gt.ed / gradTotal * 100).toFixed(1) : 0,
    unit: "%",
    sub: "".concat(gt.ed, " ").concat(T("人", "", lang)),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("學院別流向(人數)", "By College (Headcount)", lang)
  }, React.createElement(BarChart, {
    data: Object.entries(grad.byCollege).map(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 2),
        c = _ref12[0],
        v = _ref12[1];
      return {
        name: lang === "en" ? U.tr(c) : c,
        work: v.work,
        ed: v.ed,
        mil: v.mil,
        wait: v.wait,
        abroad: v.abroad,
        other: v.other
      };
    }),
    keys: ["work", "ed", "mil", "wait", "abroad", "other"],
    colors: ["#0a5a2e", "#c8a64b", "#156c3a", "#b08c2f", "#8aa57a", "#a07a1f"],
    labels: [T("就業", "Empl", lang), T("升學", "Grad", lang), T("服兵役", "Mil", lang), T("待業", "Wait", lang), T("留學", "Abroad", lang), T("其他", "Other", lang)],
    formatter: U.fmt
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("學院別流向(百分比堆疊)", "By College (% Stacked)", lang),
    subtitle: T("各學院內部結構比較", "Within-college composition", lang)
  }, React.createElement("div", {
    className: "stack-list"
  }, Object.entries(grad.byCollege).map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      c = _ref14[0],
      v = _ref14[1];
    var t = v.work + v.ed + v.mil + v.wait + v.abroad + v.other;
    return React.createElement("div", {
      key: c,
      className: "stack-row"
    }, React.createElement("div", {
      className: "stack-name"
    }, lang === "en" ? U.tr(c) : c), React.createElement("div", {
      className: "stack-bar"
    }, React.createElement(StackedBar, {
      segments: [{
        name: T("就業", "Empl", lang),
        value: v.work,
        color: "#0a5a2e"
      }, {
        name: T("升學", "Grad", lang),
        value: v.ed,
        color: "#c8a64b"
      }, {
        name: T("服兵役", "Mil", lang),
        value: v.mil,
        color: "#156c3a"
      }, {
        name: T("待業", "Wait", lang),
        value: v.wait,
        color: "#b08c2f"
      }, {
        name: T("留學", "Abroad", lang),
        value: v.abroad,
        color: "#8aa57a"
      }, {
        name: T("其他", "Other", lang),
        value: v.other,
        color: "#a07a1f"
      }],
      height: 22
    })), React.createElement("div", {
      className: "stack-total"
    }, U.fmt(t)));
  })))))));
}
function WelfareModule(_ref15) {
  var lang = _ref15.lang,
    year = _ref15.year,
    unit = _ref15.unit;
  var aid = DX.aid113;
  var work = DX.work113;
  var social = DX.social114;
  var aidItems = Object.entries(aid.byType).map(function (_ref16) {
    var _ref17 = _slicedToArray(_ref16, 2),
      k = _ref17[0],
      v = _ref17[1];
    return _objectSpread(_objectSpread({}, v), {}, {
      name: k
    });
  });
  var moeTotal = aidItems.reduce(function (s, d) {
    return s + (d.moe || 0);
  }, 0);
  var selfTotal = aid.totalFund - moeTotal;
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#156c3a",
    pattern: "grid",
    eyebrow: T("學務助學", "Student Welfare & Aid", lang),
    headline: T("從助學到工讀 — 全方位學生支持", "Holistic Student Support", lang),
    headlineEn: "",
    tagline: T("助學・工讀・社會關切教育", "Aid · Work-study · Civic Education", lang),
    taglineEn: "",
    stats: [{
      value: U.fmt(aid.totalPpl),
      label: "助學受惠",
      labelEn: "Aid Beneficiaries",
      yearLabel: "AY113",
      targetId: "sec-aid"
    }, {
      value: "$".concat((aid.totalFund / 1e6).toFixed(1), "M"),
      label: "助學總金額",
      labelEn: "Total Funding",
      yearLabel: "AY113",
      targetId: "sec-aid"
    }, {
      value: U.fmt(work.totalPpl),
      label: "工讀生",
      labelEn: "Work-study",
      yearLabel: "AY113",
      targetId: "sec-work"
    }, {
      value: social.totalSessions,
      label: "社會關切場次",
      labelEn: "Civic Events",
      yearLabel: "AY114上",
      targetId: "sec-social"
    }],
    sdgs: [1, 4, 10]
  }), React.createElement(Section, {
    id: "sec-aid",
    title: T("助學措施統計", "Student Aid Programs", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88687-5",
      year: "113_S2",
      lang: lang
    })),
    sdgs: [1, 4, 10]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("總受惠人次", "Beneficiaries", lang),
    value: U.fmt(aid.totalPpl),
    unit: T("人次", ""),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("總經費", "Total Fund", lang),
    value: "$".concat((aid.totalFund / 1e6).toFixed(2), "M"),
    sub: "NTD",
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("教育部補助", "MOE Subsidy", lang),
    value: "$".concat((moeTotal / 1e6).toFixed(2), "M"),
    sub: "".concat(aid.totalFund ? Math.round(moeTotal / aid.totalFund * 100) : 0, "%"),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("學校自籌", "Self-funded", lang),
    value: "$".concat((selfTotal / 1e6).toFixed(2), "M"),
    sub: "".concat(aid.totalFund ? Math.round(selfTotal / aid.totalFund * 100) : 0, "%"),
    accent: "#156c3a"
  })), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("助學類別:受惠人次", "By Category: Beneficiaries", lang)
  }, React.createElement(HBarList, {
    data: aidItems.sort(function (a, b) {
      return b.ppl - a.ppl;
    }).map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.name) : d.name,
        value: d.ppl
      };
    }),
    color: "#0a5a2e",
    formatter: U.fmt,
    valueLabel: T(" 人次", "", lang)
  }))), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("助學類別:金額分布", "By Category: Funding", lang)
  }, React.createElement(Donut, {
    data: aidItems.sort(function (a, b) {
      return b.total - a.total;
    }).filter(function (d) {
      return d.total > 0;
    }).map(function (d, i) {
      return {
        name: lang === "en" ? U.tr(d.name) : d.name,
        value: d.total,
        color: ["#0a5a2e", "#c8a64b", "#156c3a", "#b08c2f", "#8aa57a", "#a07a1f"][i % 6]
      };
    }),
    centerValue: "$".concat((aid.totalFund / 1e6).toFixed(1), "M"),
    centerLabel: T("總金額", "Total", lang)
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("助學類別詳表", "Aid Details", lang)
  }, React.createElement("table", {
    className: "data data-tight"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, T("助學類別", "Category", lang)), React.createElement("th", null, T("人次", "People", lang)), React.createElement("th", null, T("教育部補助", "MOE", lang)), React.createElement("th", null, T("學校自籌", "Self", lang)), React.createElement("th", null, T("總金額", "Total", lang)))), React.createElement("tbody", null, aidItems.sort(function (a, b) {
    return b.total - a.total;
  }).map(function (d) {
    return React.createElement("tr", {
      key: d.name
    }, React.createElement("td", null, lang === "en" ? U.tr(d.name) : d.name), React.createElement("td", null, U.fmt(d.ppl)), React.createElement("td", null, "$", U.fmt(d.moe)), React.createElement("td", null, "$", U.fmt(d.self)), React.createElement("td", null, React.createElement("b", null, "$", U.fmt(d.total))));
  }))))))), React.createElement(Section, {
    id: "sec-work",
    title: T("工讀助學情形", "Work-Study Programs", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88687-9",
      year: "113_S2",
      lang: lang
    })),
    sdgs: [1, 4, 8]
  }, React.createElement("div", {
    className: "grid g-12"
  }, work.items.map(function (it, i) {
    return React.createElement("div", {
      className: "span-6",
      key: i
    }, React.createElement(Card, {
      title: it.type,
      subtitle: "".concat(it.method, " \xB7 ").concat(T("113 學年", "AY113", lang))
    }, React.createElement("div", {
      className: "work-stat-row"
    }, React.createElement("div", {
      className: "work-stat"
    }, React.createElement("div", {
      className: "work-stat-v"
    }, U.fmt(it.ppl)), React.createElement("div", {
      className: "work-stat-l"
    }, T("參與人數", "Participants", lang))), React.createElement("div", {
      className: "work-stat"
    }, React.createElement("div", {
      className: "work-stat-v"
    }, "$", U.fmt(it.avgAmount)), React.createElement("div", {
      className: "work-stat-l"
    }, T("每月平均領取", "Avg Monthly", lang))), React.createElement("div", {
      className: "work-stat"
    }, React.createElement("div", {
      className: "work-stat-v"
    }, it.hours, React.createElement("small", null, T(" 小時", "h", lang))), React.createElement("div", {
      className: "work-stat-l"
    }, T("每月平均時數", "Avg Hours", lang))))));
  }))), React.createElement(Section, {
    id: "sec-social",
    title: T("社會關切教育執行情況", "Civic & Public Concern Education", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88687-4",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [4, 5, 16]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("活動場次", "Sessions", lang),
    value: social.totalSessions,
    unit: T("場", ""),
    sub: T("114 學年上", "AY114 S1", lang),
    accent: "#0a5a2e"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("參與人次", "Total Participation", lang),
    value: U.fmt(social.totalM + social.totalF),
    unit: T("人次", ""),
    sub: T("男+女", "M+F", lang),
    accent: "#c8a64b"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("女性參與", "Female", lang),
    value: U.fmt(social.totalF),
    unit: T("人次", ""),
    sub: "".concat((social.totalF / (social.totalM + social.totalF) * 100).toFixed(1), "%"),
    accent: "#b08c2f"
  })), React.createElement("div", {
    className: "span-3"
  }, React.createElement(KPICard, {
    label: T("男性參與", "Male", lang),
    value: U.fmt(social.totalM),
    unit: T("人次", ""),
    sub: "".concat((social.totalM / (social.totalM + social.totalF) * 100).toFixed(1), "%"),
    accent: "#156c3a"
  })), React.createElement("div", {
    className: "span-7"
  }, React.createElement(Card, {
    title: T("活動類別:場次", "Sessions by Category", lang)
  }, React.createElement(HBarList, {
    data: social.items.sort(function (a, b) {
      return b.sessions - a.sessions;
    }).map(function (d) {
      return {
        name: lang === "en" ? U.tr(d.cat) : d.cat,
        value: d.sessions
      };
    }),
    color: "#0a5a2e",
    formatter: U.fmt,
    valueLabel: T(" 場", "", lang)
  }))), React.createElement("div", {
    className: "span-5"
  }, React.createElement(Card, {
    title: T("活動類別:參與人次", "Participation by Category", lang)
  }, React.createElement(Donut, {
    data: social.items.sort(function (a, b) {
      return b.m + b.f - (a.m + a.f);
    }).slice(0, 8).map(function (d, i) {
      return {
        name: lang === "en" ? U.tr(d.cat) : d.cat,
        value: d.m + d.f,
        color: ["#0a5a2e", "#c8a64b", "#156c3a", "#b08c2f", "#8aa57a", "#a07a1f", "#2da267", "#e8d27a"][i % 8]
      };
    }),
    centerValue: U.fmt(social.totalM + social.totalF),
    centerLabel: T("人次", "", lang)
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("社會關切教育明細", "Civic Education Detail", lang)
  }, React.createElement("table", {
    className: "data data-tight"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, T("活動類別", "Category", lang)), React.createElement("th", null, T("場次", "Sessions", lang)), React.createElement("th", null, T("男", "Male", lang)), React.createElement("th", null, T("女", "Female", lang)), React.createElement("th", null, T("合計", "Total", lang)))), React.createElement("tbody", null, social.items.sort(function (a, b) {
    return b.m + b.f - (a.m + a.f);
  }).map(function (d) {
    return React.createElement("tr", {
      key: d.cat
    }, React.createElement("td", null, lang === "en" ? U.tr(d.cat) : d.cat), React.createElement("td", null, U.fmt(d.sessions)), React.createElement("td", null, U.fmt(d.m)), React.createElement("td", null, U.fmt(d.f)), React.createElement("td", null, React.createElement("b", null, U.fmt(d.m + d.f))));
  }))))))));
}
function FinanceModule(_ref18) {
  var lang = _ref18.lang,
    year = _ref18.year,
    unit = _ref18.unit;
  var ex = DX.expense114;
  var sm = ex.summary;
  var totalEq = sm.設備費.總和,
    totalBiz = sm.業務費.總和,
    totalTr = sm.旅運費.總和,
    totalBk = sm.圖書費.總和;
  var moeTotal = sm.設備費.教育部 + sm.業務費.教育部 + sm.旅運費.教育部 + sm.圖書費.教育部;
  var selfTotal = sm.設備費.學校 + sm.業務費.學校 + sm.旅運費.學校 + sm.圖書費.學校;
  var moePct = ex.grandTotal ? Math.round(moeTotal / ex.grandTotal * 100) : 0;
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#a07a1f",
    pattern: "diag",
    eyebrow: T("學校財務", "School Finance", lang),
    headline: T("經費結構與來源透明化", "Transparent Expense Structure", lang),
    headlineEn: "",
    tagline: T("設備・業務・旅運・圖書 四大類經費", "4 Expense Categories", lang),
    taglineEn: "",
    stats: [{
      value: "$".concat((ex.grandTotal / 1e6).toFixed(2), "M"),
      label: "總支出",
      labelEn: "Total Spend",
      yearLabel: "AY114",
      targetId: "sec-fin-overview"
    }, {
      value: moePct,
      unit: "%",
      label: "教育部補助佔比",
      labelEn: "MOE Share",
      yearLabel: "AY114",
      targetId: "sec-fin-overview"
    }, {
      value: "$".concat((totalBiz / 1e6).toFixed(1), "M"),
      label: "業務費",
      labelEn: "Operations",
      yearLabel: "AY114",
      targetId: "sec-fin-cat"
    }, {
      value: "$".concat((totalEq / 1e6).toFixed(1), "M"),
      label: "設備費",
      labelEn: "Equipment",
      yearLabel: "AY114",
      targetId: "sec-fin-cat"
    }],
    sdgs: [16, 17]
  }), React.createElement(Section, {
    id: "sec-fin-overview",
    title: T("經費支出總覽", "Expense Overview", lang),
    subtitle: React.createElement(React.Fragment, null, React.createElement(SourceBadge, {
      table: "\u88689-2-7",
      year: "114_S1",
      lang: lang
    })),
    sdgs: [16]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("經費類別分布", "By Category", lang)
  }, React.createElement(Donut, {
    data: [{
      name: T("業務費", "Operations", lang),
      value: totalBiz,
      color: "#0a5a2e"
    }, {
      name: T("設備費", "Equipment", lang),
      value: totalEq,
      color: "#c8a64b"
    }, {
      name: T("旅運費", "Travel", lang),
      value: totalTr,
      color: "#b08c2f"
    }, {
      name: T("圖書費", "Books", lang),
      value: totalBk || 0.1,
      color: "#8aa57a"
    }],
    centerValue: "$".concat((ex.grandTotal / 1e6).toFixed(1), "M"),
    centerLabel: T("總支出", "Total", lang)
  }))), React.createElement("div", {
    className: "span-6"
  }, React.createElement(Card, {
    title: T("經費來源:自籌 vs 教育部", "Source: Self vs MOE", lang)
  }, React.createElement(Donut, {
    data: [{
      name: T("教育部補助", "MOE Subsidy", lang),
      value: moeTotal,
      color: "#0a5a2e"
    }, {
      name: T("學校自籌", "Self-funded", lang),
      value: selfTotal,
      color: "#c8a64b"
    }],
    centerValue: "".concat(moePct, "%"),
    centerLabel: T("MOE 佔比", "MOE", lang)
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("各類別經費:自籌 vs 教育部", "Self vs MOE by Category", lang)
  }, React.createElement(BarChart, {
    data: [{
      name: T("設備費", "Equipment", lang),
      學校: sm.設備費.學校,
      教育部: sm.設備費.教育部
    }, {
      name: T("業務費", "Operations", lang),
      學校: sm.業務費.學校,
      教育部: sm.業務費.教育部
    }, {
      name: T("旅運費", "Travel", lang),
      學校: sm.旅運費.學校,
      教育部: sm.旅運費.教育部
    }, {
      name: T("圖書費", "Books", lang),
      學校: sm.圖書費.學校,
      教育部: sm.圖書費.教育部
    }],
    keys: ["學校", "教育部"],
    colors: ["#0a5a2e", "#c8a64b"],
    labels: [T("學校自籌", "Self", lang), T("教育部補助", "MOE", lang)],
    formatter: function formatter(v) {
      return "$".concat((v / 1e6).toFixed(1), "M");
    }
  }))))), React.createElement(Section, {
    id: "sec-fin-cat",
    title: T("學院單位經費分布", "By College / Unit", lang),
    sdgs: [16]
  }, React.createElement("div", {
    className: "grid g-12"
  }, React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("學院別經費結構", "College Expense Composition", lang)
  }, React.createElement(BarChart, {
    data: Object.entries(ex.byCollege).map(function (_ref19) {
      var _ref20 = _slicedToArray(_ref19, 2),
        c = _ref20[0],
        v = _ref20[1];
      return {
        name: lang === "en" ? U.tr(c) : c,
        設備: v.eq,
        業務: v.biz,
        旅運: v.travel,
        圖書: v.book
      };
    }),
    keys: ["設備", "業務", "旅運", "圖書"],
    colors: ["#0a5a2e", "#c8a64b", "#b08c2f", "#8aa57a"],
    labels: [T("設備", "Equipment", lang), T("業務", "Operations", lang), T("旅運", "Travel", lang), T("圖書", "Books", lang)],
    formatter: function formatter(v) {
      return "$".concat((v / 1e6).toFixed(2), "M");
    }
  }))), React.createElement("div", {
    className: "span-12"
  }, React.createElement(Card, {
    title: T("學院支出排行", "College Spend Ranking", lang)
  }, React.createElement(HBarList, {
    data: Object.entries(ex.byCollege).map(function (_ref21) {
      var _ref22 = _slicedToArray(_ref21, 2),
        c = _ref22[0],
        v = _ref22[1];
      return {
        name: lang === "en" ? U.tr(c) : c,
        value: v.eq + v.biz + v.travel + v.book,
        color: COLLEGE_COLORS[c] || "#156c3a"
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    }),
    formatter: function formatter(v) {
      return "$".concat((v / 1e6).toFixed(2), "M");
    }
  }))))), React.createElement(Section, {
    title: T("財務面雲端公開資料", "Finance Cloud Open Data", lang),
    subtitle: T("校務公開資料專區「財務面」雲端資料夾", "Open Data Drive folder", lang),
    sdgs: [16]
  }, React.createElement("div", {
    className: "cloud-grid"
  }, React.createElement(CloudCard, {
    icon: "\uD83D\uDCB0",
    title: T("財務面 — 校務公開資料", "Finance — Open Data", lang),
    subtitle: T("年度收支報告、財務報表、預算決算", "Annual financials, budgets", lang),
    url: DX.cloudLinks.finance,
    color: "#a07a1f",
    lang: lang,
    items: [T("學校收入及支出報告", "Income & Expenditure", lang), T("年度財務報表", "Annual Financial Statement", lang), T("預算決算說明", "Budget vs Actual", lang)]
  }))));
}
function IRModule(_ref23) {
  var lang = _ref23.lang,
    year = _ref23.year,
    unit = _ref23.unit;
  var topics = DX.irTopics;
  var ay = ["108", "109", "110", "111", "112", "113", "114"];
  return React.createElement(React.Fragment, null, React.createElement(ModuleHero, {
    lang: lang,
    accent: "#b08c2f",
    pattern: "grid",
    eyebrow: T("校務研究", "Institutional Research", lang),
    headline: T("以資料引領校務決策", "Data-Driven Governance", lang),
    headlineEn: "",
    tagline: T("七學年議題彙編 × 校務問責報告書", "7-yr Topics × Accountability", lang),
    taglineEn: "",
    stats: [{
      value: 7,
      label: "學年議題",
      labelEn: "AY of Topics",
      yearLabel: "108-114",
      targetId: "sec-ir-timeline"
    }, {
      value: ay.reduce(function (s, y) {
        return s + topics[y].length;
      }, 0),
      label: "研究議題",
      labelEn: "Topics",
      yearLabel: "累計",
      targetId: "sec-ir-timeline"
    }, {
      value: T("公開", "Open", lang),
      label: "問責報告",
      labelEn: "Accountability",
      targetId: "sec-ir-cloud"
    }, {
      value: "🔗",
      label: "雲端開放",
      labelEn: "Drive",
      targetId: "sec-ir-cloud"
    }],
    sdgs: [4, 16, 17]
  }), React.createElement(Section, {
    id: "sec-ir-timeline",
    title: T("校務研究議題年表 (108-114)", "IR Topics Timeline (AY108-114)", lang),
    subtitle: T("依學年彙整校務研究核心議題", "Core IR topics by AY", lang),
    sdgs: [4, 16]
  }, React.createElement("div", {
    className: "ir-timeline"
  }, ay.map(function (y) {
    return React.createElement("div", {
      className: "ir-y",
      key: y
    }, React.createElement("div", {
      className: "ir-y-mark"
    }, React.createElement("div", {
      className: "ir-y-num"
    }, "AY", y), React.createElement("div", {
      className: "ir-y-dot"
    })), React.createElement("div", {
      className: "ir-y-body"
    }, React.createElement("div", {
      className: "ir-y-title"
    }, T("".concat(y, " \u5B78\u5E74\u6821\u52D9\u7814\u7A76\u8B70\u984C"), "AY".concat(y, " IR Topics"), lang)), React.createElement("ul", {
      className: "ir-y-list"
    }, topics[y].map(function (t, i) {
      return React.createElement("li", {
        key: i
      }, t);
    }))));
  }))), React.createElement(Section, {
    id: "sec-ir-cloud",
    title: T("校務研究雲端公開資料", "IR Cloud Open Data", lang),
    subtitle: T("含議題彙編、校務問責報告書", "IR topics & accountability reports", lang),
    sdgs: [4, 16, 17]
  }, React.createElement("div", {
    className: "cloud-grid"
  }, React.createElement(CloudCard, {
    icon: "\uD83D\uDCCA",
    title: T("校務研究 — 校務公開資料", "IR — Open Data", lang),
    subtitle: T("108-114 議題彙編 × 校務問責報告書", "AY108-114 Topics × Accountability Reports", lang),
    url: DX.cloudLinks.ir,
    color: "#b08c2f",
    lang: lang,
    items: [T("108-114 學年校務研究議題彙編", "AY108-114 Topics Compilation", lang), T("校務問責報告書 (年度)", "Annual Accountability Reports", lang), T("校務研究專案成果報告", "Project Result Reports", lang), T("校務指標分析報告", "Indicator Analysis", lang)]
  }))));
}
function ESGCloudSection(_ref24) {
  var lang = _ref24.lang;
  return React.createElement(Section, {
    title: T("ESG 雲端公開資料", "ESG Cloud Open Data", lang),
    subtitle: T("含大學社會責任年報、永續報告書", "USR Annual & Sustainability Reports", lang),
    sdgs: [12, 13, 17]
  }, React.createElement("div", {
    className: "cloud-grid"
  }, React.createElement(CloudCard, {
    icon: "\uD83C\uDF31",
    title: T("ESG 永續發展 — 校務公開資料", "ESG Sustainability — Open Data", lang),
    subtitle: T("USR 年報、永續報告書、ISO 14064 碳盤查", "USR · Sustainability · ISO 14064", lang),
    url: DX.cloudLinks.esg,
    color: "#0a5a2e",
    lang: lang,
    items: [T("2023 大學社會責任 (USR) 年報", "2023 USR Annual Report", lang), T("2023 永續報告書 (Sustainability Report)", "2023 Sustainability Report", lang), T("ISO 14064 碳盤查報告", "ISO 14064 Carbon Inventory", lang), T("綠色採購與低碳餐飲", "Green Procurement & Low-carbon Dining", lang)]
  })));
}
Object.assign(window, {
  EmployabilityModule: EmployabilityModule,
  WelfareModule: WelfareModule,
  FinanceModule: FinanceModule,
  IRModule: IRModule,
  ESGCloudSection: ESGCloudSection,
  CloudCard: CloudCard,
  SourceBadge: SourceBadge
});