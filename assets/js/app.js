"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo;
function NKUHTLogo() {
  return React.createElement("div", {
    className: "brand-logo-wrap"
  }, React.createElement("img", {
    className: "brand-logo-img",
    src: window.__resources && window.__resources.brandLogo || "https://www.nkuht.edu.tw/var/file/0/1000/img/22/logo.gif",
    alt: "NKUHT \u570B\u7ACB\u9AD8\u96C4\u9910\u65C5\u5927\u5B78 \u6821\u5FBD",
    width: "56",
    height: "56",
    onError: function onError(e) {
      e.currentTarget.style.display = 'none';
      e.currentTarget.nextElementSibling.style.display = 'flex';
    }
  }), React.createElement("div", {
    className: "brand-logo-fallback",
    style: {
      display: 'none'
    }
  }, "NKUHT"));
}
var TABS = [{
  id: "overview",
  zh: "總覽戰情",
  en: "Overview"
}, {
  id: "students",
  zh: "學生組成",
  en: "Students"
}, {
  id: "employability",
  zh: "學生就業力",
  en: "Employability"
}, {
  id: "welfare",
  zh: "學務助學",
  en: "Welfare & Aid"
}, {
  id: "faculty",
  zh: "師資與職員",
  en: "Faculty"
}, {
  id: "research",
  zh: "研究產學",
  en: "Research"
}, {
  id: "finance",
  zh: "財務",
  en: "Finance"
}, {
  id: "governance",
  zh: "治理與滿意",
  en: "Governance"
}, {
  id: "sdgs",
  zh: "永續對應",
  en: "SDGs"
}, {
  id: "ir",
  zh: "校務研究",
  en: "IR"
}, {
  id: "explore",
  zh: "境外生探索",
  en: "Intl. Explore"
}, {
  id: "reports",
  zh: "報告書下載",
  en: "Reports"
}];
var TWEAK_DEFAULTS = {
  "theme": "light",
  "accent": "green-gold",
  "density": "comfortable"
};
// 從 localStorage 還原偏好；無紀錄時主題跟隨系統 prefers-color-scheme
function loadTweaks() {
  var base = Object.assign({}, TWEAK_DEFAULTS);
  if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    base.theme = "dark";
  }
  try {
    var saved = JSON.parse(localStorage.getItem("nkuht-tweaks") || "null");
    if (saved) return Object.assign(base, saved);
  } catch (e) {}
  return base;
}
function App() {
  var _useState = useState("overview"),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  var _useState3 = useState(114),
    _useState4 = _slicedToArray(_useState3, 2),
    year = _useState4[0],
    setYear = _useState4[1];
  var _useState5 = useState("全校"),
    _useState6 = _slicedToArray(_useState5, 2),
    unit = _useState6[0],
    setUnit = _useState6[1];
  var _useState7 = useState("zh"),
    _useState8 = _slicedToArray(_useState7, 2),
    lang = _useState8[0],
    setLang = _useState8[1];
  var _useState9 = useState(loadTweaks),
    _useState0 = _slicedToArray(_useState9, 2),
    tweaks = _useState0[0],
    setTweaks = _useState0[1];
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    tweaksOpen = _useState10[0],
    setTweaksOpen = _useState10[1];
  useEffect(function () {
    document.documentElement.dataset.theme = tweaks.theme;
    document.documentElement.style.setProperty("--fs", tweaks.density === "compact" ? "13px" : "14px");
    try {
      localStorage.setItem("nkuht-tweaks", JSON.stringify(tweaks));
    } catch (e) {}
  }, [tweaks]);
  useEffect(function () {
    var handler = function handler(e) {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setTweaksOpen(true);
      if (e.data.type === "__deactivate_edit_mode") setTweaksOpen(false);
    };
    window.addEventListener("message", handler);
    window.parent.postMessage({
      type: "__edit_mode_available"
    }, "*");
    return function () {
      return window.removeEventListener("message", handler);
    };
  }, []);
  var setTweak = function setTweak(key, value) {
    var next = _objectSpread(_objectSpread({}, tweaks), {}, _defineProperty({}, key, value));
    setTweaks(next);
    window.parent.postMessage({
      type: "__edit_mode_set_keys",
      edits: _defineProperty({}, key, value)
    }, "*");
  };
  var u = window.NKUHT_UTIL;
  var D = window.NKUHT_DATA;
  var unitTypeOf = function unitTypeOf(name) {
    var _D$unitTypes;
    return ((_D$unitTypes = D.unitTypes) === null || _D$unitTypes === void 0 ? void 0 : _D$unitTypes[name]) || (name.endsWith("研究所") ? "所" : name.endsWith("學位學程") || name.endsWith("學程") ? "學程" : name.endsWith("科") ? "科" : "系");
  };
  var unitsByCollegeType = useMemo(function () {
    var result = {};
    Object.entries(D.colleges).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        col = _ref2[0],
        depts = _ref2[1];
      var groups = {};
      depts.forEach(function (d) {
        var t = unitTypeOf(d);
        (groups[t] = groups[t] || []).push(d);
      });
      result[col] = groups;
    });
    return result;
  }, []);
  var allUnits = ["全校"].concat(_toConsumableArray(Object.keys(D.colleges)), _toConsumableArray(Object.values(D.colleges).flat()));
  var ModuleEl = useMemo(function () {
    switch (tab) {
      case "overview":
        return React.createElement(OverviewModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "students":
        return React.createElement(StudentsModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "employability":
        return React.createElement(React.Fragment, null,
          React.createElement(EmployabilityModule, {
            lang: lang,
            year: year,
            unit: unit
          }),
          React.createElement(UCANSection, null));
      case "welfare":
        return React.createElement(WelfareModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "faculty":
        return React.createElement(FacultyModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "research":
        return React.createElement(ResearchModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "finance":
        return React.createElement(React.Fragment, null,
          React.createElement(FinanceModule, {
            lang: lang,
            year: year,
            unit: unit
          }),
          React.createElement(DeepCultivationSection, null));
      case "governance":
        return React.createElement(GovernanceModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "sdgs":
        return React.createElement(SDGsModule, {
          lang: lang
        });
      case "ir":
        return React.createElement(IRModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "explore":
        return React.createElement(ExploreModule, {
          lang: lang,
          year: year,
          unit: unit
        });
      case "reports":
        return React.createElement(ReportsModule, {
          lang: lang
        });
      default:
        return null;
    }
  }, [tab, lang, year, unit]);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "brand-strip"
  }, React.createElement("div", {
    className: "brand-mark"
  }, React.createElement(NKUHTLogo, null), React.createElement("div", {
    className: "brand-text"
  }, React.createElement("h1", null, T("國立高雄餐旅大學 校務公開資料儀表板", "NKUHT Institutional Data Dashboard", lang)), React.createElement("p", null, T("永續發展與校務研究中心 校務策略研究組  |  資料來源:校務基本資料庫 + 114 學年度問責報告", "Office of Institutional Research  |  Source: IR Database + AY114 Accountability Report", lang)))), React.createElement("div", {
    className: "brand-meta"
  }, React.createElement("span", null, T("\u8CC7\u6599\u5E74\u5EA6:".concat(year, " \u5B78\u5E74\u5EA6"), "Data AY: ".concat(year), lang), " / ", T("系統更新", "Updated", lang), ": 115/04/30"), React.createElement("a", {
    href: D.meta.url,
    target: "_blank",
    rel: "noreferrer"
  }, "sdir.nkuht.edu.tw"), React.createElement("div", {
    className: "lang-switch"
  }, React.createElement("button", {
    className: lang === "zh" ? "on" : "",
    onClick: function onClick() {
      return setLang("zh");
    }
  }, "\u4E2D"), React.createElement("button", {
    className: lang === "en" ? "on" : "",
    onClick: function onClick() {
      return setLang("en");
    }
  }, "EN")))), React.createElement("div", {
    className: "sub-header"
  }, React.createElement("div", {
    className: "crumb"
  }, React.createElement("span", null, T("校務公開", "Public Data", lang)), " \xA0\u203A\xA0", React.createElement("b", null, TABS.find(function (t) {
    return t.id === tab;
  })[lang]), unit !== "全校" && React.createElement(React.Fragment, null, " \xA0\u203A\xA0 ", React.createElement("b", {
    style: {
      color: "var(--gold-2)"
    }
  }, unit))), React.createElement("div", {
    className: "muted",
    style: {
      fontSize: 11
    }
  }, T("\u5B78\u5E74\u5EA6:".concat(year, " | \u55AE\u4F4D:").concat(unit, " | \u8A9E\u7CFB:\u7E41\u9AD4\u4E2D\u6587"), "AY:".concat(year, " | Unit:").concat(unit === "全校" ? "All Campus" : unit, " | Lang:EN"), lang))), React.createElement("div", {
    className: "tabs"
  }, TABS.map(function (t) {
    return React.createElement("button", {
      key: t.id,
      className: "tab ".concat(tab === t.id ? "on" : ""),
      onClick: function onClick() {
        return setTab(t.id);
      }
    }, t[lang]);
  })), React.createElement("div", {
    className: "filter-bar"
  }, React.createElement("div", {
    className: "filter-group",
    style: {
      flex: "1 1 520px",
      minWidth: 480,
      maxWidth: 720
    }
  }, React.createElement(YearScrubber, {
    years: D.meta.years,
    value: year,
    onChange: setYear,
    lang: lang,
    events: [{
      year: 110,
      label: T("疫後復學", "Post-COVID", lang),
      color: "#c8a64b"
    }, {
      year: 113,
      label: T("全英學程", "EMI", lang),
      color: "#0a5a2e"
    }, {
      year: 114,
      label: T("114 報告", "AY114", lang),
      color: "#b08c2f"
    }]
  })), React.createElement("div", {
    className: "divider"
  }), React.createElement("div", {
    className: "filter-group"
  }, React.createElement("span", {
    className: "filter-label"
  }, T("單位", "Unit", lang)), React.createElement("select", {
    className: "unit-select",
    value: unit,
    onChange: function onChange(e) {
      return setUnit(e.target.value);
    }
  }, React.createElement("option", {
    value: "\u5168\u6821"
  }, "\u2014 ", T("全校", "All Campus", lang), " \u2014"), React.createElement("optgroup", {
    label: "\u25B6 ".concat(T("學院", "Colleges", lang))
  }, Object.keys(D.colleges).map(function (c) {
    return React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), Object.entries(unitsByCollegeType).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      col = _ref4[0],
      groups = _ref4[1];
    return ["系", "所", "學程", "科"].filter(function (t) {
      var _groups$t;
      return (_groups$t = groups[t]) === null || _groups$t === void 0 ? void 0 : _groups$t.length;
    }).map(function (t) {
      return React.createElement("optgroup", {
        key: col + "_" + t,
        label: "".concat(col, "  \uFF0F  ").concat(t)
      }, groups[t].map(function (d) {
        return React.createElement("option", {
          key: d,
          value: d
        }, d);
      }));
    });
  })), unit !== "全校" && React.createElement("span", {
    className: "unit-type-tag"
  }, unitTypeOf(unit) === unit ? "院" : D.colleges[unit] ? "院" : unitTypeOf(unit)), unit !== "全校" && React.createElement("button", {
    className: "chip",
    style: {
      marginLeft: 6
    },
    onClick: function onClick() {
      return setUnit("全校");
    }
  }, "\u2715 ", T("清除", "Reset", lang))), React.createElement("div", {
    className: "divider"
  }), React.createElement("div", {
    className: "filter-group",
    style: {
      marginLeft: "auto"
    }
  }, React.createElement("span", {
    className: "filter-label"
  }, "SDGs"), React.createElement("span", {
    className: "tag gold"
  }, T("17 目標對應檢視", "17-Goal Mapping", lang)))), React.createElement("main", {
    className: "main"
  }, ModuleEl), React.createElement("section", {
    className: "official-links"
  }, React.createElement("div", {
    className: "ol-head"
  }, React.createElement("div", null, React.createElement("h3", null, T("補充報告書下載專區", "Supplementary Reports", lang)), React.createElement("p", null, T("本儀表板提供主要校務數據視覺化分析。以下三類為「文字報告書」型資料,點擊後另開頁面前往官方下載。", "Visual analytics here. Below are full text-based reports — click to open in a new tab.", lang))), React.createElement("a", {
    className: "ol-hub",
    href: D.meta.openDataHub,
    target: "_blank",
    rel: "noreferrer"
  }, T("校務研究公開資料總入口 ↗", "Open Data Portal ↗", lang))), React.createElement("div", {
    className: "ol-grid"
  }, Object.entries(D.officialLinks).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      k = _ref6[0],
      v = _ref6[1];
    return React.createElement("a", {
      key: k,
      href: v.url,
      target: "_blank",
      rel: "noreferrer",
      className: "ol-card"
    }, React.createElement("div", {
      className: "ol-icon"
    }, v.icon), React.createElement("div", {
      className: "ol-tag"
    }, v.tag), React.createElement("div", {
      className: "ol-title"
    }, lang === "zh" ? v.zh : v.en), React.createElement("div", {
      className: "ol-desc"
    }, lang === "zh" ? v.desc.zh : v.desc.en), React.createElement("div", {
      className: "ol-arrow"
    }, T("前往官方頁面", "Open", lang), " \u2197"));
  }))), React.createElement("footer", {
    className: "foot"
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 4,
      color: "var(--gold-3)"
    }
  }, T("國立高雄餐旅大學 永續發展與校務研究中心", "NKUHT Office of Institutional Research", lang)), React.createElement("div", null, T("地址:高雄市小港區松和路 1 號  電話:(07)806-0505", "1 Songhe Rd., Xiaogang Dist., Kaohsiung", lang))), React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, React.createElement("div", null, T("資料來源: 校務基本資料庫 / 114 學年度問責報告 / 教育部統計處", "Sources: IR Database / AY114 Accountability Report / MOE Statistics", lang)), React.createElement("div", {
    style: {
      opacity: .7,
      marginTop: 4
    }
  }, T("© 中華民國 115 年 NKUHT — 依政府資訊公開法揭露", "© 2026 NKUHT — Government Information Disclosure Act", lang))))), tweaksOpen && React.createElement(TweaksPanelInline, {
    tweaks: tweaks,
    setTweak: setTweak,
    onClose: function onClose() {
      setTweaksOpen(false);
      window.parent.postMessage({
        type: "__edit_mode_dismissed"
      }, "*");
    }
  }));
}
function TweaksPanelInline(_ref7) {
  var tweaks = _ref7.tweaks,
    setTweak = _ref7.setTweak,
    onClose = _ref7.onClose;
  return React.createElement("div", {
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      width: 280,
      background: "var(--panel)",
      border: "1px solid var(--border)",
      borderRadius: 10,
      boxShadow: "var(--shadow)",
      zIndex: 100,
      padding: 16
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, React.createElement("b", {
    style: {
      color: "var(--green)"
    }
  }, "Tweaks"), React.createElement("button", {
    onClick: onClose,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      fontSize: 18,
      color: "var(--text-muted)"
    }
  }, "\xD7")), React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: .8
    }
  }, "\u4E3B\u984C"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["light", "dark"].map(function (t) {
    return React.createElement("button", {
      key: t,
      className: "chip ".concat(tweaks.theme === t ? "on" : ""),
      onClick: function onClick() {
        return setTweak("theme", t);
      }
    }, t === "light" ? "明亮" : "深色");
  }))), React.createElement("div", null, React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)",
      marginBottom: 4,
      textTransform: "uppercase",
      letterSpacing: .8
    }
  }, "\u5BC6\u5EA6"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [["comfortable", "舒適"], ["compact", "緊湊"]].map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
      v = _ref9[0],
      l = _ref9[1];
    return React.createElement("button", {
      key: v,
      className: "chip ".concat(tweaks.density === v ? "on" : ""),
      onClick: function onClick() {
        return setTweak("density", v);
      }
    }, l);
  })))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));