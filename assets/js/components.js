"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useMemo = _React.useMemo,
  useRef = _React.useRef;
var T = function T(zh, en, lang) {
  return lang === "en" ? en : zh;
};
function MiniLine(_ref) {
  var data = _ref.data,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "var(--gold)" : _ref$color,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 36 : _ref$height;
  if (!data || data.length === 0) return null;
  var w = 100,
    h = 30;
  var max = Math.max.apply(Math, _toConsumableArray(data)),
    min = Math.min.apply(Math, _toConsumableArray(data));
  var range = max - min || 1;
  var pts = data.map(function (v, i) {
    var x = i / (data.length - 1) * w;
    var y = h - (v - min) / range * h;
    return "".concat(x, ",").concat(y);
  }).join(" ");
  return React.createElement("svg", {
    viewBox: "0 0 ".concat(w, " ").concat(h),
    width: "100%",
    height: height,
    preserveAspectRatio: "none"
  }, React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke"
  }), data.map(function (v, i) {
    var x = i / (data.length - 1) * w;
    var y = h - (v - min) / range * h;
    return React.createElement("circle", {
      key: i,
      cx: x,
      cy: y,
      r: "1.5",
      fill: color
    });
  }));
}
function KPICard(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    unit = _ref2.unit,
    sub = _ref2.sub,
    trend = _ref2.trend,
    sdgs = _ref2.sdgs,
    accent = _ref2.accent;
  return React.createElement("div", {
    className: "kpi-card"
  }, React.createElement("div", {
    className: "kpi-head"
  }, React.createElement("span", {
    className: "kpi-label"
  }, label), sdgs && React.createElement(SDGBadges, {
    ids: sdgs,
    mini: true
  })), React.createElement("div", {
    className: "kpi-value",
    style: {
      color: accent || "var(--green)"
    }
  }, value, React.createElement("span", {
    className: "kpi-unit"
  }, unit)), sub && React.createElement("div", {
    className: "kpi-sub"
  }, sub), trend && React.createElement("div", {
    className: "kpi-trend"
  }, React.createElement(MiniLine, {
    data: trend,
    color: accent || "var(--gold)"
  })));
}
function SDGBadges(_ref3) {
  var ids = _ref3.ids,
    mini = _ref3.mini;
  var U = window.NKUHT_UTIL;
  return React.createElement("div", {
    className: "sdg-badges ".concat(mini ? "mini" : "")
  }, ids.map(function (id) {
    return React.createElement("span", {
      key: id,
      className: "sdg-badge",
      style: {
        background: U.SDG_COLORS[id]
      },
      title: "SDG ".concat(id, ": ").concat(U.SDG_NAME_ZH[id])
    }, id);
  }));
}
function BarChart(_ref4) {
  var data = _ref4.data,
    keys = _ref4.keys,
    colors = _ref4.colors,
    labels = _ref4.labels,
    _ref4$height = _ref4.height,
    height = _ref4$height === void 0 ? 260 : _ref4$height,
    _ref4$formatter = _ref4.formatter,
    formatter = _ref4$formatter === void 0 ? function (v) {
      return v;
    } : _ref4$formatter,
    _ref4$showLegend = _ref4.showLegend,
    showLegend = _ref4$showLegend === void 0 ? true : _ref4$showLegend,
    highlight = _ref4.highlight;
  var max = Math.max.apply(Math, _toConsumableArray(data.flatMap(function (d) {
    return keys.map(function (k) {
      return d[k] || 0;
    });
  }))) * 1.15 || 1;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  return React.createElement("div", {
    className: "chart-wrap"
  }, React.createElement("div", {
    className: "chart-area",
    style: {
      height: height
    }
  }, React.createElement("div", {
    className: "chart-grid"
  }, [0, 0.25, 0.5, 0.75, 1].map(function (p) {
    return React.createElement("div", {
      key: p,
      className: "grid-line",
      style: {
        bottom: "".concat(p * 100, "%")
      }
    }, React.createElement("span", {
      className: "grid-label"
    }, formatter(Math.round(max * p))));
  })), React.createElement("div", {
    className: "bars"
  }, data.map(function (d, i) {
    var isLast = i >= data.length - 2;
    var isFirst = i <= 1;
    var groupMax = Math.max.apply(Math, _toConsumableArray(keys.map(function (k) {
      return d[k] || 0;
    })));
    var tall = groupMax / max > 0.6;
    return React.createElement("div", {
      className: "bar-group".concat(highlight && d.name === highlight ? " bar-hl" : "").concat(highlight && d.name !== highlight ? " bar-dim" : ""),
      key: i,
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, React.createElement("div", {
      className: "bar-stack"
    }, keys.map(function (k, ki) {
      return React.createElement("div", {
        key: k,
        className: "bar",
        style: {
          height: "".concat((d[k] || 0) / max * 100, "%"),
          background: colors[ki]
        },
        title: "".concat((labels === null || labels === void 0 ? void 0 : labels[ki]) || k, ": ").concat(formatter(d[k]))
      });
    })), React.createElement("div", {
      className: "bar-label"
    }, d.name), hover === i && React.createElement("div", {
      className: "tooltip ".concat(isLast ? "tt-flip-left" : "", " ").concat(isFirst ? "tt-flip-right" : "", " ").concat(tall ? "tt-flip-side" : "")
    }, React.createElement("div", {
      className: "tt-title"
    }, d.name), keys.map(function (k, ki) {
      return React.createElement("div", {
        key: k,
        className: "tt-row"
      }, React.createElement("span", {
        className: "tt-dot",
        style: {
          background: colors[ki]
        }
      }), React.createElement("span", {
        className: "tt-label"
      }, (labels === null || labels === void 0 ? void 0 : labels[ki]) || k), React.createElement("span", {
        className: "tt-val"
      }, formatter(d[k])));
    })));
  }))), showLegend && labels && React.createElement("div", {
    className: "legend"
  }, labels.map(function (l, i) {
    return React.createElement("span", {
      key: l,
      className: "legend-item"
    }, React.createElement("span", {
      className: "legend-dot",
      style: {
        background: colors[i]
      }
    }), l);
  })));
}
function LineChart(_ref5) {
  var series = _ref5.series,
    xLabels = _ref5.xLabels,
    _ref5$height = _ref5.height,
    height = _ref5$height === void 0 ? 280 : _ref5$height,
    _ref5$formatter = _ref5.formatter,
    formatter = _ref5$formatter === void 0 ? function (v) {
      return v;
    } : _ref5$formatter,
    yMax = _ref5.yMax;
  var allVals = series.flatMap(function (s) {
    return s.data;
  });
  var max = yMax || Math.max.apply(Math, _toConsumableArray(allVals)) * 1.1;
  var min = Math.min(0, Math.min.apply(Math, _toConsumableArray(allVals)));
  var W = 100,
    H = 100;
  var PAD_X = 4;
  var xAt = function xAt(i) {
    return xLabels.length === 1 ? W / 2 : PAD_X + i / (xLabels.length - 1) * (W - 2 * PAD_X);
  };
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    hover = _useState4[0],
    setHover = _useState4[1];
  return React.createElement("div", {
    className: "chart-wrap line-chart"
  }, React.createElement("div", {
    className: "chart-area",
    style: {
      height: height,
      position: "relative"
    }
  }, React.createElement("div", {
    className: "chart-grid"
  }, [0, 0.25, 0.5, 0.75, 1].map(function (p) {
    return React.createElement("div", {
      key: p,
      className: "grid-line",
      style: {
        bottom: "".concat(p * 100, "%")
      }
    }, React.createElement("span", {
      className: "grid-label"
    }, formatter(Math.round((max - min) * p + min))));
  })), React.createElement("div", {
    className: "plot-area"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    preserveAspectRatio: "none",
    className: "line-svg"
  }, series.map(function (s, si) {
    var pts = s.data.map(function (v, i) {
      var x = xAt(i);
      var y = H - (v - min) / (max - min) * H;
      return "".concat(x, ",").concat(y);
    }).join(" ");
    return React.createElement("g", {
      key: si
    }, React.createElement("polyline", {
      points: pts,
      fill: "none",
      stroke: s.color,
      strokeWidth: "0.6",
      vectorEffect: "non-scaling-stroke"
    }));
  })), React.createElement("div", {
    className: "point-overlay"
  }, series.map(function (s, si) {
    return s.data.map(function (v, i) {
      var x = xAt(i);
      var y = (v - min) / (max - min) * 100;
      return React.createElement("span", {
        key: "".concat(si, "-").concat(i),
        className: "data-point",
        style: {
          left: "".concat(x, "%"),
          bottom: "".concat(y, "%"),
          background: s.color
        }
      });
    });
  })), React.createElement("div", {
    className: "hover-zones"
  }, xLabels.map(function (x, i) {
    var xpos = xAt(i);
    var flipLeft = xpos > 70;
    var flipRight = xpos < 18;
    return React.createElement("div", {
      key: i,
      className: "hover-zone ".concat(hover === i ? "active" : ""),
      style: {
        left: "".concat(xpos, "%")
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, hover === i && React.createElement("div", {
      className: "tooltip line-tt ".concat(flipLeft ? "tt-flip-left" : "", " ").concat(flipRight ? "tt-flip-right" : "")
    }, React.createElement("div", {
      className: "tt-title"
    }, x), series.map(function (s, si) {
      return React.createElement("div", {
        key: si,
        className: "tt-row"
      }, React.createElement("span", {
        className: "tt-dot",
        style: {
          background: s.color
        }
      }), React.createElement("span", {
        className: "tt-label"
      }, s.name), React.createElement("span", {
        className: "tt-val"
      }, formatter(s.data[i])));
    })));
  })))), React.createElement("div", {
    className: "x-labels",
    style: {
      paddingLeft: "calc(60px + ".concat(PAD_X, "%)"),
      paddingRight: "calc(16px + ".concat(PAD_X, "%)")
    }
  }, xLabels.map(function (x) {
    return React.createElement("span", {
      key: x
    }, x);
  })), React.createElement("div", {
    className: "legend"
  }, series.map(function (s) {
    return React.createElement("span", {
      key: s.name,
      className: "legend-item"
    }, React.createElement("span", {
      className: "legend-dot",
      style: {
        background: s.color
      }
    }), s.name);
  })));
}
function HBarList(_ref6) {
  var data = _ref6.data,
    _ref6$color = _ref6.color,
    color = _ref6$color === void 0 ? "var(--green)" : _ref6$color,
    _ref6$maxItems = _ref6.maxItems,
    maxItems = _ref6$maxItems === void 0 ? 12 : _ref6$maxItems,
    _ref6$formatter = _ref6.formatter,
    formatter = _ref6$formatter === void 0 ? function (v) {
      return v;
    } : _ref6$formatter,
    valueLabel = _ref6.valueLabel,
    _ref6$compact = _ref6.compact,
    compact = _ref6$compact === void 0 ? false : _ref6$compact,
    highlight = _ref6.highlight;
  var max = Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
    return d.value;
  }))) || 1;
  var items = data.slice(0, maxItems);
  return React.createElement("div", {
    className: "hbar-list".concat(compact ? " compact" : "")
  }, items.map(function (d, i) {
    var isHl = highlight && d.name === highlight;
    var isDim = highlight && d.name !== highlight;
    return React.createElement("div", {
      key: i,
      className: "hbar-row".concat(isHl ? " hbar-hl" : "").concat(isDim ? " hbar-dim" : "")
    }, React.createElement("div", {
      className: "hbar-name",
      title: d.name
    }, d.name), React.createElement("div", {
      className: "hbar-track"
    }, React.createElement("div", {
      className: "hbar-fill",
      style: {
        width: "".concat(d.value / max * 100, "%"),
        background: d.color || color
      }
    })), !compact && React.createElement("div", {
      className: "hbar-val"
    }, formatter(d.value), valueLabel || ""));
  }));
}
function Donut(_ref7) {
  var data = _ref7.data,
    _ref7$size = _ref7.size,
    size = _ref7$size === void 0 ? 180 : _ref7$size,
    _ref7$thickness = _ref7.thickness,
    thickness = _ref7$thickness === void 0 ? 32 : _ref7$thickness,
    centerLabel = _ref7.centerLabel,
    centerValue = _ref7.centerValue,
    highlight = _ref7.highlight;
  var total = data.reduce(function (s, d) {
    return s + d.value;
  }, 0);
  var r = size / 2 - thickness / 2;
  var c = 2 * Math.PI * r;
  var off = 0;
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    hover = _useState6[0],
    setHover = _useState6[1];
  return React.createElement("div", {
    className: "donut-wrap"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(size, " ").concat(size),
    width: size,
    height: size
  }, data.map(function (d, i) {
    var len = d.value / total * c;
    var isHl = highlight && d.name === highlight;
    var isDim = highlight && d.name !== highlight;
    var seg = React.createElement("circle", {
      key: i,
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: d.color,
      strokeWidth: hover === i || isHl ? thickness + 4 : thickness,
      strokeDasharray: "".concat(len, " ").concat(c - len),
      strokeDashoffset: -off,
      transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")"),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      },
      opacity: isDim ? 0.25 : 1,
      style: {
        cursor: "pointer",
        transition: "stroke-width .15s, opacity .15s"
      }
    });
    off += len;
    return seg;
  }), centerValue && React.createElement("text", {
    x: size / 2,
    y: size / 2 - 4,
    textAnchor: "middle",
    fontSize: "22",
    fontWeight: "700",
    fill: "var(--text)"
  }, centerValue), centerLabel && React.createElement("text", {
    x: size / 2,
    y: size / 2 + 18,
    textAnchor: "middle",
    fontSize: "11",
    fill: "var(--text-muted)"
  }, centerLabel)), React.createElement("div", {
    className: "donut-legend"
  }, data.map(function (d, i) {
    return React.createElement("div", {
      key: i,
      className: "dl-row ".concat(hover === i ? "active" : "", " ").concat(highlight && d.name === highlight ? "hl" : "", " ").concat(highlight && d.name !== highlight ? "dim" : ""),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, React.createElement("span", {
      className: "dl-dot",
      style: {
        background: d.color
      }
    }), React.createElement("span", {
      className: "dl-name"
    }, d.name), React.createElement("span", {
      className: "dl-val"
    }, d.value), React.createElement("span", {
      className: "dl-pct"
    }, (d.value / total * 100).toFixed(1), "%"));
  })));
}
function StackedBar(_ref8) {
  var segments = _ref8.segments,
    _ref8$height = _ref8.height,
    height = _ref8$height === void 0 ? 14 : _ref8$height;
  var total = segments.reduce(function (s, d) {
    return s + d.value;
  }, 0) || 1;
  return React.createElement("div", {
    className: "stacked-bar",
    style: {
      height: height
    }
  }, segments.map(function (s, i) {
    return React.createElement("div", {
      key: i,
      className: "stacked-seg",
      style: {
        width: "".concat(s.value / total * 100, "%"),
        background: s.color
      },
      title: "".concat(s.name, ": ").concat(s.value, " (").concat((s.value / total * 100).toFixed(1), "%)")
    });
  }));
}
function Heatmap(_ref9) {
  var rows = _ref9.rows,
    cols = _ref9.cols,
    values = _ref9.values,
    _ref9$formatter = _ref9.formatter,
    formatter = _ref9$formatter === void 0 ? function (v) {
      return v;
    } : _ref9$formatter,
    _ref9$color = _ref9.color,
    color = _ref9$color === void 0 ? [10, 90, 46] : _ref9$color;
  var flat = values.flat().filter(function (v) {
    return v != null && !isNaN(v);
  });
  var max = Math.max.apply(Math, _toConsumableArray(flat).concat([1]));
  return React.createElement("div", {
    className: "heatmap"
  }, React.createElement("div", {
    className: "hm-row hm-head"
  }, React.createElement("div", {
    className: "hm-cell hm-corner"
  }), cols.map(function (c) {
    return React.createElement("div", {
      key: c,
      className: "hm-cell hm-col-head"
    }, c);
  })), rows.map(function (r, ri) {
    return React.createElement("div", {
      key: r,
      className: "hm-row"
    }, React.createElement("div", {
      className: "hm-cell hm-row-head"
    }, r), cols.map(function (c, ci) {
      var v = values[ri][ci];
      var intensity = v == null ? 0 : v / max;
      return React.createElement("div", {
        key: c,
        className: "hm-cell",
        style: {
          background: v == null ? "transparent" : "rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ", ").concat(0.08 + intensity * 0.85, ")"),
          color: intensity > 0.55 ? "#fff" : "var(--text)"
        },
        title: "".concat(r, " / ").concat(c, ": ").concat(formatter(v))
      }, v == null ? "" : formatter(v));
    }));
  }));
}
function Section(_ref0) {
  var title = _ref0.title,
    subtitle = _ref0.subtitle,
    sdgs = _ref0.sdgs,
    children = _ref0.children,
    actions = _ref0.actions,
    id = _ref0.id;
  return React.createElement("section", {
    className: "section",
    id: id
  }, React.createElement("header", {
    className: "section-head"
  }, React.createElement("div", null, React.createElement("h2", null, title), subtitle && React.createElement("p", {
    className: "section-sub"
  }, subtitle)), React.createElement("div", {
    className: "section-actions"
  }, sdgs && React.createElement(SDGBadges, {
    ids: sdgs
  }), actions)), React.createElement("div", {
    className: "section-body"
  }, children));
}
function Card(_ref1) {
  var title = _ref1.title,
    subtitle = _ref1.subtitle,
    sdgs = _ref1.sdgs,
    children = _ref1.children,
    _ref1$className = _ref1.className,
    className = _ref1$className === void 0 ? "" : _ref1$className,
    action = _ref1.action,
    foot = _ref1.foot,
    id = _ref1.id;
  return React.createElement("div", {
    className: "card ".concat(className),
    id: id
  }, React.createElement("div", {
    className: "card-head"
  }, React.createElement("div", null, React.createElement("h3", null, title), subtitle && React.createElement("span", {
    className: "card-sub"
  }, subtitle)), React.createElement("div", {
    className: "card-actions"
  }, sdgs && React.createElement(SDGBadges, {
    ids: sdgs,
    mini: true
  }), action)), React.createElement("div", {
    className: "card-body"
  }, children), foot && React.createElement("div", {
    className: "card-foot"
  }, foot));
}
Object.assign(window, {
  T: T,
  MiniLine: MiniLine,
  KPICard: KPICard,
  SDGBadges: SDGBadges,
  BarChart: BarChart,
  LineChart: LineChart,
  HBarList: HBarList,
  Donut: Donut,
  StackedBar: StackedBar,
  Heatmap: Heatmap,
  Section: Section,
  Card: Card
});