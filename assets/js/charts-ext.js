"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var _React = React,
  useStateExt = _React.useState;
function ModuleHero(_ref) {
  var eyebrow = _ref.eyebrow,
    headline = _ref.headline,
    headlineEn = _ref.headlineEn,
    tagline = _ref.tagline,
    taglineEn = _ref.taglineEn,
    stats = _ref.stats,
    _ref$accent = _ref.accent,
    accent = _ref$accent === void 0 ? "var(--green)" : _ref$accent,
    lang = _ref.lang,
    sdgs = _ref.sdgs,
    _ref$pattern = _ref.pattern,
    pattern = _ref$pattern === void 0 ? "dots" : _ref$pattern;
  return React.createElement("div", {
    className: "module-hero",
    style: {
      "--hero-accent": accent
    }
  }, React.createElement("div", {
    className: "module-hero-bg pattern-".concat(pattern)
  }), React.createElement("div", {
    className: "module-hero-inner"
  }, React.createElement("div", {
    className: "module-hero-eyebrow"
  }, React.createElement("span", {
    className: "module-hero-pulse"
  }), eyebrow), React.createElement("h1", {
    className: "module-hero-headline"
  }, lang === "en" ? headlineEn : headline), tagline && React.createElement("p", {
    className: "module-hero-tag"
  }, lang === "en" ? taglineEn : tagline), stats && React.createElement("div", {
    className: "module-hero-stats"
  }, stats.map(function (s, i) {
    var _s$unitEn, _s$unit;
    var StatTag = s.targetId ? "a" : "div";
    var statProps = s.targetId ? {
      href: "#".concat(s.targetId),
      onClick: function onClick(e) {
        e.preventDefault();
        var el = document.getElementById(s.targetId);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
          el.classList.add("flash-highlight");
          setTimeout(function () {
            return el.classList.remove("flash-highlight");
          }, 1800);
        }
      }
    } : {};
    return React.createElement(StatTag, _extends({
      key: i,
      className: "mh-stat".concat(s.targetId ? " mh-stat-link" : "")
    }, statProps), React.createElement("b", null, s.value, React.createElement("span", {
      className: "mh-unit"
    }, lang === "en" ? (_s$unitEn = s.unitEn) !== null && _s$unitEn !== void 0 ? _s$unitEn : "" : (_s$unit = s.unit) !== null && _s$unit !== void 0 ? _s$unit : "")), React.createElement("span", null, lang === "en" ? s.labelEn : s.label));
  })), sdgs && React.createElement("div", {
    className: "module-hero-sdgs"
  }, React.createElement("span", {
    className: "mh-sdg-label"
  }, lang === "en" ? "Mapped SDGs" : "對應永續目標"), React.createElement(SDGBadges, {
    ids: sdgs
  }))));
}
function ScatterChart(_ref2) {
  var data = _ref2.data,
    xLabel = _ref2.xLabel,
    yLabel = _ref2.yLabel,
    _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? 360 : _ref2$height,
    xMax = _ref2.xMax,
    yMax = _ref2.yMax,
    colorBy = _ref2.colorBy,
    _ref2$formatter = _ref2.formatter,
    formatter = _ref2$formatter === void 0 ? function (v) {
      return v;
    } : _ref2$formatter,
    quadrants = _ref2.quadrants;
  var xM = xMax || Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
    return d.x;
  }))) * 1.15 || 1;
  var yM = yMax || Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
    return d.y;
  }))) * 1.15 || 1;
  var _useStateExt = useStateExt(null),
    _useStateExt2 = _slicedToArray(_useStateExt, 2),
    hover = _useStateExt2[0],
    setHover = _useStateExt2[1];
  var xAt = function xAt(v) {
    return 8 + v / xM * 88;
  };
  var yAt = function yAt(v) {
    return 92 - v / yM * 88;
  };
  return React.createElement("div", {
    className: "scatter-wrap"
  }, React.createElement("div", {
    className: "scatter-area",
    style: {
      height: height
    }
  }, quadrants && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "quad-line v",
    style: {
      left: "".concat(xAt(quadrants.x), "%")
    }
  }), React.createElement("div", {
    className: "quad-line h",
    style: {
      top: "".concat(yAt(quadrants.y), "%")
    }
  }), React.createElement("div", {
    className: "quad-label q-tl"
  }, quadrants.tl), React.createElement("div", {
    className: "quad-label q-tr"
  }, quadrants.tr), React.createElement("div", {
    className: "quad-label q-bl"
  }, quadrants.bl), React.createElement("div", {
    className: "quad-label q-br"
  }, quadrants.br)), [0, 0.25, 0.5, 0.75, 1].map(function (p) {
    return React.createElement("div", {
      key: p,
      className: "sc-grid-y",
      style: {
        top: "".concat(92 - p * 88, "%")
      }
    }, React.createElement("span", {
      className: "sc-grid-label"
    }, formatter(Math.round(yM * p * 10) / 10)));
  }), [0, 0.25, 0.5, 0.75, 1].map(function (p) {
    return React.createElement("div", {
      key: p,
      className: "sc-grid-x",
      style: {
        left: "".concat(8 + p * 88, "%")
      }
    }, React.createElement("span", {
      className: "sc-grid-x-label"
    }, formatter(Math.round(xM * p * 10) / 10)));
  }), data.map(function (d, i) {
    var danger = d.y > ((quadrants === null || quadrants === void 0 ? void 0 : quadrants.y) || 0) && d.x > ((quadrants === null || quadrants === void 0 ? void 0 : quadrants.x) || 0);
    return React.createElement("div", {
      key: i,
      className: "sc-point ".concat(danger ? "danger" : "", " ").concat(hover === i ? "active" : ""),
      style: {
        left: "".concat(xAt(d.x), "%"),
        top: "".concat(yAt(d.y), "%"),
        background: d.color || (danger ? "var(--red, #b8392f)" : "var(--green)"),
        width: d.size || 12,
        height: d.size || 12
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, hover === i && React.createElement("div", {
      className: "sc-tooltip ".concat(xAt(d.x) > 65 ? "tt-flip-left" : "", " ").concat(yAt(d.y) < 25 ? "tt-flip-down" : "")
    }, React.createElement("div", {
      className: "tt-title"
    }, d.name), React.createElement("div", {
      className: "tt-row"
    }, React.createElement("span", {
      className: "tt-label"
    }, xLabel), React.createElement("span", {
      className: "tt-val"
    }, formatter(d.x))), React.createElement("div", {
      className: "tt-row"
    }, React.createElement("span", {
      className: "tt-label"
    }, yLabel), React.createElement("span", {
      className: "tt-val"
    }, formatter(d.y))), d.note && React.createElement("div", {
      className: "tt-note"
    }, d.note)));
  }), React.createElement("div", {
    className: "sc-axis-x"
  }, xLabel), React.createElement("div", {
    className: "sc-axis-y"
  }, yLabel)));
}
function RadarChart(_ref3) {
  var axes = _ref3.axes,
    series = _ref3.series,
    _ref3$size = _ref3.size,
    size = _ref3$size === void 0 ? 320 : _ref3$size,
    max = _ref3.max;
  var cx = size / 2,
    cy = size / 2,
    r = size / 2 - 50;
  var n = axes.length;
  var M = max || Math.max.apply(Math, _toConsumableArray(series.flatMap(function (s) {
    return s.values;
  }))) * 1.05 || 1;
  var angle = function angle(i) {
    return -Math.PI / 2 + i / n * Math.PI * 2;
  };
  var point = function point(i, v) {
    var rad = v / M * r;
    return [cx + rad * Math.cos(angle(i)), cy + rad * Math.sin(angle(i))];
  };
  return React.createElement("div", {
    className: "radar-wrap"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(size, " ").concat(size),
    width: size,
    height: size
  }, [0.25, 0.5, 0.75, 1].map(function (p) {
    return React.createElement("polygon", {
      key: p,
      points: axes.map(function (_, i) {
        var _point = point(i, M * p),
          _point2 = _slicedToArray(_point, 2),
          x = _point2[0],
          y = _point2[1];
        return "".concat(x, ",").concat(y);
      }).join(" "),
      fill: "none",
      stroke: "rgba(120,130,110,.18)",
      strokeWidth: "1",
      strokeDasharray: p < 1 ? "2 3" : ""
    });
  }), axes.map(function (_, i) {
    var _point3 = point(i, M),
      _point4 = _slicedToArray(_point3, 2),
      x = _point4[0],
      y = _point4[1];
    return React.createElement("line", {
      key: i,
      x1: cx,
      y1: cy,
      x2: x,
      y2: y,
      stroke: "rgba(120,130,110,.18)",
      strokeWidth: "1"
    });
  }), series.map(function (s, si) {
    var pts = s.values.map(function (v, i) {
      return point(i, v).join(",");
    }).join(" ");
    return React.createElement("g", {
      key: si
    }, React.createElement("polygon", {
      points: pts,
      fill: s.color,
      fillOpacity: "0.15",
      stroke: s.color,
      strokeWidth: "2"
    }), s.values.map(function (v, i) {
      var _point5 = point(i, v),
        _point6 = _slicedToArray(_point5, 2),
        x = _point6[0],
        y = _point6[1];
      return React.createElement("circle", {
        key: i,
        cx: x,
        cy: y,
        r: "3.5",
        fill: s.color,
        stroke: "#fff",
        strokeWidth: "1.5"
      });
    }));
  }), axes.map(function (a, i) {
    var _point7 = point(i, M * 1.18),
      _point8 = _slicedToArray(_point7, 2),
      x = _point8[0],
      y = _point8[1];
    return React.createElement("text", {
      key: i,
      x: x,
      y: y,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fontSize: "11",
      fill: "var(--text)",
      fontWeight: "600"
    }, a);
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
function StackedArea(_ref4) {
  var series = _ref4.series,
    xLabels = _ref4.xLabels,
    _ref4$height = _ref4.height,
    height = _ref4$height === void 0 ? 280 : _ref4$height,
    _ref4$formatter = _ref4.formatter,
    formatter = _ref4$formatter === void 0 ? function (v) {
      return v;
    } : _ref4$formatter,
    colors = _ref4.colors;
  var n = xLabels.length;
  var totals = Array.from({
    length: n
  }, function (_, i) {
    return series.reduce(function (s, sr) {
      return s + (sr.data[i] || 0);
    }, 0);
  });
  var max = Math.max.apply(Math, totals) * 1.1 || 1;
  var W = 100,
    H = 100;
  var xAt = function xAt(i) {
    return n === 1 ? W / 2 : i / (n - 1) * W;
  };
  var cumulative = [];
  series.forEach(function (s, si) {
    cumulative.push(s.data.map(function (v, i) {
      var _cumulative;
      return (((_cumulative = cumulative[si - 1]) === null || _cumulative === void 0 ? void 0 : _cumulative[i]) || 0) + v;
    }));
  });
  var _useStateExt3 = useStateExt(null),
    _useStateExt4 = _slicedToArray(_useStateExt3, 2),
    hover = _useStateExt4[0],
    setHover = _useStateExt4[1];
  return React.createElement("div", {
    className: "chart-wrap stacked-area"
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
    className: "plot-area"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    preserveAspectRatio: "none",
    className: "line-svg"
  }, series.map(function (s, si) {
    var upper = cumulative[si];
    var lower = si === 0 ? Array(n).fill(0) : cumulative[si - 1];
    var top = upper.map(function (v, i) {
      return "".concat(xAt(i), ",").concat(H - v / max * H);
    }).join(" ");
    var bot = lower.map(function (v, i) {
      return "".concat(xAt(i), ",").concat(H - v / max * H);
    }).reverse().join(" ");
    return React.createElement("polygon", {
      key: si,
      points: "".concat(top, " ").concat(bot),
      fill: colors[si],
      fillOpacity: "0.78",
      stroke: "#fff",
      strokeWidth: "0.3",
      vectorEffect: "non-scaling-stroke"
    });
  })), React.createElement("div", {
    className: "hover-zones"
  }, xLabels.map(function (x, i) {
    var flipLeft = i / (n - 1) > 0.7;
    var flipRight = i / (n - 1) < 0.18;
    return React.createElement("div", {
      key: i,
      className: "hover-zone ".concat(hover === i ? "active" : ""),
      style: {
        left: "".concat(xAt(i), "%")
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
          background: colors[si]
        }
      }), React.createElement("span", {
        className: "tt-label"
      }, s.name), React.createElement("span", {
        className: "tt-val"
      }, formatter(s.data[i])));
    }), React.createElement("div", {
      className: "tt-row",
      style: {
        borderTop: "1px solid var(--border)",
        marginTop: 4,
        paddingTop: 4
      }
    }, React.createElement("span", {
      className: "tt-label",
      style: {
        fontWeight: 600
      }
    }, "\u5408\u8A08"), React.createElement("span", {
      className: "tt-val"
    }, formatter(totals[i])))));
  })))), React.createElement("div", {
    className: "x-labels",
    style: {
      paddingLeft: 60,
      paddingRight: 16
    }
  }, xLabels.map(function (x) {
    return React.createElement("span", {
      key: x
    }, x);
  })), React.createElement("div", {
    className: "legend"
  }, series.map(function (s, si) {
    return React.createElement("span", {
      key: s.name,
      className: "legend-item"
    }, React.createElement("span", {
      className: "legend-dot",
      style: {
        background: colors[si]
      }
    }), s.name);
  })));
}
function FacultyPyramid(_ref5) {
  var data = _ref5.data,
    colors = _ref5.colors;
  var max = Math.max.apply(Math, _toConsumableArray(data.map(function (d) {
    return d.count;
  })));
  var total = data.reduce(function (s, d) {
    return s + d.count;
  }, 0);
  return React.createElement("div", {
    className: "pyramid-wrap"
  }, data.map(function (d, i) {
    var w = d.count / max * 100;
    return React.createElement("div", {
      key: d.rank,
      className: "pyr-row"
    }, React.createElement("div", {
      className: "pyr-rank"
    }, d.rank), React.createElement("div", {
      className: "pyr-bar-wrap"
    }, React.createElement("div", {
      className: "pyr-bar",
      style: {
        width: "".concat(w, "%"),
        background: colors[i] || "var(--green)"
      }
    }, React.createElement("span", {
      className: "pyr-count"
    }, d.count))), React.createElement("div", {
      className: "pyr-pct"
    }, (d.count / total * 100).toFixed(1), "%"));
  }), React.createElement("div", {
    className: "pyr-total"
  }, "\u7E3D\u8A08 ", total, " \u4F4D"));
}
function GrowthIndex(_ref6) {
  var series = _ref6.series,
    xLabels = _ref6.xLabels,
    _ref6$baseIdx = _ref6.baseIdx,
    baseIdx = _ref6$baseIdx === void 0 ? 0 : _ref6$baseIdx,
    _ref6$height = _ref6.height,
    height = _ref6$height === void 0 ? 280 : _ref6$height;
  var indexed = series.map(function (s) {
    return _objectSpread(_objectSpread({}, s), {}, {
      data: s.data.map(function (v) {
        return Math.round(v / s.data[baseIdx] * 100);
      })
    });
  });
  return React.createElement(LineChart, {
    series: indexed,
    xLabels: xLabels,
    height: height,
    formatter: function formatter(v) {
      return v;
    }
  });
}
function GenderRing(_ref7) {
  var male = _ref7.male,
    female = _ref7.female,
    _ref7$size = _ref7.size,
    size = _ref7$size === void 0 ? 140 : _ref7$size;
  var total = male + female;
  var mPct = male / total;
  return React.createElement("div", {
    className: "gender-ring"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(size, " ").concat(size),
    width: size,
    height: size
  }, React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: size / 2 - 12,
    fill: "none",
    stroke: "#dde8d4",
    strokeWidth: "20"
  }), React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: size / 2 - 12,
    fill: "none",
    stroke: "#3d6e8a",
    strokeWidth: "20",
    strokeDasharray: "".concat(mPct * 2 * Math.PI * (size / 2 - 12), " ").concat(2 * Math.PI * (size / 2 - 12)),
    transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")")
  }), React.createElement("text", {
    x: size / 2,
    y: size / 2 - 2,
    textAnchor: "middle",
    fontSize: "22",
    fontWeight: "700",
    fill: "var(--text)"
  }, (mPct * 100).toFixed(0), ":", ((1 - mPct) * 100).toFixed(0)), React.createElement("text", {
    x: size / 2,
    y: size / 2 + 18,
    textAnchor: "middle",
    fontSize: "10",
    fill: "var(--text-muted)"
  }, "\u7537 : \u5973")), React.createElement("div", {
    className: "gr-legend"
  }, React.createElement("div", null, React.createElement("span", {
    className: "gr-dot",
    style: {
      background: "#3d6e8a"
    }
  }), "\u7537 ", male), React.createElement("div", null, React.createElement("span", {
    className: "gr-dot",
    style: {
      background: "#dde8d4"
    }
  }), "\u5973 ", female)));
}
var REGION_COORDS = {
  "東南亞": {
    x: 70,
    y: 60,
    label: "SE Asia"
  },
  "東北亞": {
    x: 78,
    y: 35,
    label: "NE Asia"
  },
  "美洲": {
    x: 22,
    y: 45,
    label: "Americas"
  },
  "歐洲": {
    x: 50,
    y: 30,
    label: "Europe"
  },
  "其他": {
    x: 50,
    y: 75,
    label: "Others"
  }
};
function WorldRegionMap(_ref8) {
  var regions = _ref8.regions,
    year = _ref8.year,
    total = _ref8.total;
  var max = Math.max.apply(Math, _toConsumableArray(regions.map(function (r) {
    return r.value;
  })));
  var _useStateExt5 = useStateExt(null),
    _useStateExt6 = _slicedToArray(_useStateExt5, 2),
    hover = _useStateExt6[0],
    setHover = _useStateExt6[1];
  return React.createElement("div", {
    className: "world-map"
  }, React.createElement("svg", {
    viewBox: "0 0 100 100",
    className: "world-bg",
    preserveAspectRatio: "none"
  }, React.createElement("path", {
    d: "M5,30 Q15,20 25,28 L35,30 Q42,38 38,50 L30,55 Q18,52 10,45 Z",
    fill: "#e8efde"
  }), React.createElement("path", {
    d: "M25,55 Q32,60 38,72 L34,82 Q28,85 22,78 L20,68 Z",
    fill: "#e8efde"
  }), React.createElement("path", {
    d: "M42,22 Q55,15 68,22 L72,32 Q70,42 60,42 L48,38 Q42,30 42,22 Z",
    fill: "#e8efde"
  }), React.createElement("path", {
    d: "M48,42 Q58,46 62,55 L58,62 Q52,60 48,52 Z",
    fill: "#e8efde"
  }), React.createElement("path", {
    d: "M58,28 Q72,24 88,30 L92,42 Q88,50 78,52 L66,48 Q60,38 58,28 Z",
    fill: "#e8efde"
  }), React.createElement("path", {
    d: "M68,52 Q78,56 80,68 L72,72 Q66,68 64,58 Z",
    fill: "#e8efde"
  }), React.createElement("path", {
    d: "M82,68 Q90,72 90,82 L82,86 L78,80 Z",
    fill: "#e8efde"
  })), regions.map(function (r, i) {
    var c = REGION_COORDS[r.name] || {
      x: 50,
      y: 50
    };
    var radius = 8 + r.value / max * 22;
    return React.createElement("div", {
      key: r.name,
      className: "region-bubble",
      style: {
        left: "".concat(c.x, "%"),
        top: "".concat(c.y, "%"),
        width: radius * 2,
        height: radius * 2,
        background: r.color,
        marginLeft: -radius,
        marginTop: -radius
      },
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, React.createElement("span", {
      className: "rb-value"
    }, r.value), React.createElement("div", {
      className: "rb-name"
    }, r.name), hover === i && r.countries && React.createElement("div", {
      className: "rb-tooltip ".concat(c.x > 60 ? "tt-flip-left" : "")
    }, React.createElement("div", {
      className: "tt-title"
    }, r.name, " \xB7 ", r.value, " \u4EBA"), r.countries.slice(0, 8).map(function (co) {
      return React.createElement("div", {
        key: co.name,
        className: "tt-row"
      }, React.createElement("span", {
        className: "tt-label"
      }, co.name), React.createElement("span", {
        className: "tt-val"
      }, co.value));
    })));
  }), React.createElement("div", {
    className: "world-foot"
  }, React.createElement("span", null, year, " \u5B78\u5E74\u5EA6\u30FB\u5171 ", total, " \u4F4D\u5883\u5916\u751F")));
}
function DualAxisChart(_ref9) {
  var years = _ref9.years,
    leftSeries = _ref9.leftSeries,
    rightSeries = _ref9.rightSeries,
    leftLabel = _ref9.leftLabel,
    rightLabel = _ref9.rightLabel,
    _ref9$height = _ref9.height,
    height = _ref9$height === void 0 ? 300 : _ref9$height,
    _ref9$leftFormatter = _ref9.leftFormatter,
    leftFormatter = _ref9$leftFormatter === void 0 ? function (v) {
      return v;
    } : _ref9$leftFormatter,
    _ref9$rightFormatter = _ref9.rightFormatter,
    rightFormatter = _ref9$rightFormatter === void 0 ? function (v) {
      return v;
    } : _ref9$rightFormatter;
  var lMax = Math.max.apply(Math, _toConsumableArray(leftSeries.data)) * 1.1;
  var lMin = Math.min.apply(Math, _toConsumableArray(leftSeries.data)) * 0.9;
  var rMax = Math.max.apply(Math, _toConsumableArray(rightSeries.data)) * 1.1;
  var rMin = Math.min.apply(Math, _toConsumableArray(rightSeries.data)) * 0.9;
  var W = 100,
    H = 100;
  var PAD = 4;
  var xAt = function xAt(i) {
    return years.length === 1 ? W / 2 : PAD + i / (years.length - 1) * (W - 2 * PAD);
  };
  var lY = function lY(v) {
    return H - (v - lMin) / (lMax - lMin) * H;
  };
  var rY = function rY(v) {
    return H - (v - rMin) / (rMax - rMin) * H;
  };
  var _useStateExt7 = useStateExt(null),
    _useStateExt8 = _slicedToArray(_useStateExt7, 2),
    hover = _useStateExt8[0],
    setHover = _useStateExt8[1];
  return React.createElement("div", {
    className: "chart-wrap dual-axis-chart"
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
      className: "grid-label",
      style: {
        color: leftSeries.color
      }
    }, leftFormatter(Math.round((lMax - lMin) * p + lMin))));
  })), React.createElement("div", {
    className: "chart-grid right-axis"
  }, [0, 0.25, 0.5, 0.75, 1].map(function (p) {
    return React.createElement("div", {
      key: p,
      className: "grid-line-right",
      style: {
        bottom: "".concat(p * 100, "%")
      }
    }, React.createElement("span", {
      className: "grid-label-right",
      style: {
        color: rightSeries.color
      }
    }, rightFormatter(Math.round((rMax - rMin) * p * 10 + lMin * 10) / 10)));
  })), React.createElement("div", {
    className: "plot-area"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(W, " ").concat(H),
    preserveAspectRatio: "none",
    className: "line-svg"
  }, React.createElement("polyline", {
    points: leftSeries.data.map(function (v, i) {
      return "".concat(xAt(i), ",").concat(lY(v));
    }).join(" "),
    fill: "none",
    stroke: leftSeries.color,
    strokeWidth: "0.7",
    vectorEffect: "non-scaling-stroke"
  }), React.createElement("polyline", {
    points: rightSeries.data.map(function (v, i) {
      return "".concat(xAt(i), ",").concat(rY(v));
    }).join(" "),
    fill: "none",
    stroke: rightSeries.color,
    strokeWidth: "0.7",
    strokeDasharray: "2 2",
    vectorEffect: "non-scaling-stroke"
  })), React.createElement("div", {
    className: "point-overlay"
  }, leftSeries.data.map(function (v, i) {
    return React.createElement("span", {
      key: "l-".concat(i),
      className: "data-point",
      style: {
        left: "".concat(xAt(i), "%"),
        bottom: "".concat(100 - lY(v), "%"),
        background: leftSeries.color
      }
    });
  }), rightSeries.data.map(function (v, i) {
    return React.createElement("span", {
      key: "r-".concat(i),
      className: "data-point",
      style: {
        left: "".concat(xAt(i), "%"),
        bottom: "".concat(100 - rY(v), "%"),
        background: rightSeries.color,
        borderColor: "#fff"
      }
    });
  })), React.createElement("div", {
    className: "hover-zones"
  }, years.map(function (y, i) {
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
    }, y, " \u5B78\u5E74\u5EA6"), React.createElement("div", {
      className: "tt-row"
    }, React.createElement("span", {
      className: "tt-dot",
      style: {
        background: leftSeries.color
      }
    }), React.createElement("span", {
      className: "tt-label"
    }, leftLabel), React.createElement("span", {
      className: "tt-val"
    }, leftFormatter(leftSeries.data[i]))), React.createElement("div", {
      className: "tt-row"
    }, React.createElement("span", {
      className: "tt-dot",
      style: {
        background: rightSeries.color
      }
    }), React.createElement("span", {
      className: "tt-label"
    }, rightLabel), React.createElement("span", {
      className: "tt-val"
    }, rightFormatter(rightSeries.data[i])))));
  })))), React.createElement("div", {
    className: "x-labels",
    style: {
      paddingLeft: "calc(60px + ".concat(PAD, "%)"),
      paddingRight: "calc(60px + ".concat(PAD, "%)")
    }
  }, years.map(function (y) {
    return React.createElement("span", {
      key: y
    }, y);
  })), React.createElement("div", {
    className: "legend"
  }, React.createElement("span", {
    className: "legend-item"
  }, React.createElement("span", {
    className: "legend-dot",
    style: {
      background: leftSeries.color
    }
  }), leftLabel), React.createElement("span", {
    className: "legend-item"
  }, React.createElement("span", {
    className: "legend-dot",
    style: {
      background: rightSeries.color,
      border: "1px dashed #fff"
    }
  }), rightLabel)));
}
Object.assign(window, {
  ModuleHero: ModuleHero,
  ScatterChart: ScatterChart,
  RadarChart: RadarChart,
  StackedArea: StackedArea,
  FacultyPyramid: FacultyPyramid,
  GrowthIndex: GrowthIndex,
  GenderRing: GenderRing,
  WorldRegionMap: WorldRegionMap,
  DualAxisChart: DualAxisChart
});