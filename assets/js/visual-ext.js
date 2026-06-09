"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useSx = _React.useState,
  useEx = _React.useEffect,
  useRx = _React.useRef,
  useMx = _React.useMemo;
function useCountUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1100;
  var _useSx = useSx(target),
    _useSx2 = _slicedToArray(_useSx, 2),
    v = _useSx2[0],
    setV = _useSx2[1];
  var fromRef = useRx(target);
  useEx(function () {
    var from = fromRef.current;
    if (from === target) {
      setV(target);
      return;
    }
    var t0 = Date.now();
    var tick = function tick() {
      var p = Math.min(1, (Date.now() - t0) / duration);
      var e = 1 - Math.pow(1 - p, 3);
      setV(from + (target - from) * e);
      if (p >= 1) {
        clearInterval(id);
        fromRef.current = target;
      }
    };
    var id = setInterval(tick, 16);
    return function () {
      return clearInterval(id);
    };
  }, [target, duration]);
  return v;
}
function HeroKPIWall(_ref) {
  var items = _ref.items,
    lang = _ref.lang;
  return React.createElement("div", {
    className: "kpi-wall"
  }, items.map(function (it, i) {
    return React.createElement(HeroKPITile, _extends({
      key: i,
      delay: i * 90
    }, it));
  }));
}
function HeroKPITile(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    unit = _ref2.unit,
    sub = _ref2.sub,
    _ref2$accent = _ref2.accent,
    accent = _ref2$accent === void 0 ? "#0a5a2e" : _ref2$accent,
    fmt = _ref2.fmt,
    _ref2$delay = _ref2.delay,
    delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
    sparkline = _ref2.sparkline;
  var _useSx3 = useSx(false),
    _useSx4 = _slicedToArray(_useSx3, 2),
    show = _useSx4[0],
    setShow = _useSx4[1];
  useEx(function () {
    var t = setTimeout(function () {
      return setShow(true);
    }, delay);
    return function () {
      return clearTimeout(t);
    };
  }, [delay]);
  var numericValue = typeof value === "number" ? value : parseFloat(String(value).replace(/[^\d.\-]/g, "")) || 0;
  var isNumeric = typeof value === "number" || /^[\d.,\-+ ]+$/.test(String(value));
  var animated = useCountUp(show ? numericValue : 0);
  var display = !isNumeric ? value : fmt ? fmt(animated) : (Math.round(animated * 10) / 10).toLocaleString();
  return React.createElement("div", {
    className: "hero-kpi-tile ".concat(show ? "in" : ""),
    style: {
      "--accent": accent,
      animationDelay: "".concat(delay, "ms")
    }
  }, React.createElement("div", {
    className: "hkt-label"
  }, label), React.createElement("div", {
    className: "hkt-value"
  }, React.createElement("span", {
    className: "hkt-num"
  }, display), unit && React.createElement("span", {
    className: "hkt-unit"
  }, unit)), sub && React.createElement("div", {
    className: "hkt-sub"
  }, sub), sparkline && React.createElement(HeroSpark, {
    data: sparkline,
    accent: accent
  }));
}
function HeroSpark(_ref3) {
  var data = _ref3.data,
    accent = _ref3.accent;
  var max = Math.max.apply(Math, _toConsumableArray(data)),
    min = Math.min.apply(Math, _toConsumableArray(data));
  var range = max - min || 1;
  var W = 100,
    H = 28;
  var pts = data.map(function (v, i) {
    var x = i / (data.length - 1) * W;
    var y = H - (v - min) / range * (H - 4) - 2;
    return "".concat(x.toFixed(1), ",").concat(y.toFixed(1));
  });
  var last = pts[pts.length - 1].split(",").map(Number);
  return React.createElement("svg", {
    className: "hkt-spark",
    viewBox: "0 0 ".concat(W, " ").concat(H),
    preserveAspectRatio: "none"
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "g-".concat(accent.replace(/[^\w]/g, "")),
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: accent,
    stopOpacity: ".35"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: accent,
    stopOpacity: "0"
  }))), React.createElement("polygon", {
    points: "0,".concat(H, " ").concat(pts.join(" "), " ").concat(W, ",").concat(H),
    fill: "url(#g-".concat(accent.replace(/[^\w]/g, ""), ")")
  }), React.createElement("polyline", {
    points: pts.join(" "),
    fill: "none",
    stroke: accent,
    strokeWidth: "1.4",
    vectorEffect: "non-scaling-stroke"
  }), React.createElement("circle", {
    cx: last[0],
    cy: last[1],
    r: "1.8",
    fill: accent,
    className: "hkt-spark-dot"
  }));
}
var COUNTRY_GEO = {
  "印尼": {
    lat: -2.5,
    lon: 118,
    region: "東南亞"
  },
  "馬來西亞": {
    lat: 4.2,
    lon: 101.9,
    region: "東南亞"
  },
  "越南": {
    lat: 14.0,
    lon: 108.3,
    region: "東南亞"
  },
  "泰國": {
    lat: 15.9,
    lon: 100.9,
    region: "東南亞"
  },
  "緬甸": {
    lat: 21.9,
    lon: 95.9,
    region: "東南亞"
  },
  "菲律賓": {
    lat: 12.9,
    lon: 121.7,
    region: "東南亞"
  },
  "香港": {
    lat: 22.3,
    lon: 114.2,
    region: "東北亞"
  },
  "日本": {
    lat: 36.2,
    lon: 138.3,
    region: "東北亞"
  },
  "澳門": {
    lat: 22.2,
    lon: 113.5,
    region: "東北亞"
  },
  "南韓": {
    lat: 35.9,
    lon: 127.8,
    region: "東北亞"
  },
  "蒙古": {
    lat: 46.9,
    lon: 103.8,
    region: "東北亞"
  },
  "聖文森": {
    lat: 13.3,
    lon: -61.2,
    region: "美洲"
  },
  "墨西哥": {
    lat: 23.6,
    lon: -102.6,
    region: "美洲"
  },
  "巴拉圭": {
    lat: -23.4,
    lon: -58.4,
    region: "美洲"
  },
  "法國": {
    lat: 46.2,
    lon: 2.2,
    region: "歐洲"
  }
};
var REGION_COLOR = {
  "東南亞": "#0a5a2e",
  "東北亞": "#156c3a",
  "美洲": "#c8a64b",
  "歐洲": "#8aa57a",
  "其他": "#b08c2f"
};
var LON_W = 360,
  LAT_H = 130,
  LAT_TOP = 80;
var proj = function proj(lon, lat) {
  return {
    x: (lon + 180) / LON_W * 200,
    y: (LAT_TOP - lat) / LAT_H * 100
  };
};
function geoDist(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var toRad = function toRad(d) {
    return d * Math.PI / 180;
  };
  var dLat = toRad(lat2 - lat1),
    dLon = toRad(lon2 - lon1);
  var a = Math.pow(Math.sin(dLat / 2), 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.pow(Math.sin(dLon / 2), 2);
  return 2 * R * Math.asin(Math.sqrt(a));
}
function geoBearing(lat1, lon1, lat2, lon2) {
  var toRad = function toRad(d) {
    return d * Math.PI / 180;
  };
  var dLon = toRad(lon2 - lon1);
  var y = Math.sin(dLon) * Math.cos(toRad(lat2));
  var x = Math.cos(toRad(lat1)) * Math.sin(toRad(lat2)) - Math.sin(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.cos(dLon);
  return (Math.atan2(y, x) * 180 / Math.PI + 360) % 360;
}
function WorldDotMap(_ref4) {
  var countries = _ref4.countries,
    year = _ref4.year,
    total = _ref4.total,
    _ref4$scale = _ref4.scale,
    scale = _ref4$scale === void 0 ? 1 : _ref4$scale,
    _ref4$height = _ref4.height,
    height = _ref4$height === void 0 ? 460 : _ref4$height;
  var _useSx5 = useSx(null),
    _useSx6 = _slicedToArray(_useSx5, 2),
    hover = _useSx6[0],
    setHover = _useSx6[1];
  var HOME = {
    lat: 22.62,
    lon: 120.31,
    name: "高雄餐旅"
  };
  var SIZE = 480;
  var cx = SIZE / 2,
    cy = SIZE / 2;
  var RMAX = 200;
  var placed = countries.map(function (c) {
    var g = COUNTRY_GEO[c.name];
    if (!g) return null;
    var dist = geoDist(HOME.lat, HOME.lon, g.lat, g.lon);
    var bearing = geoBearing(HOME.lat, HOME.lon, g.lat, g.lon);
    return _objectSpread(_objectSpread(_objectSpread({}, c), g), {}, {
      dist: dist,
      bearing: bearing
    });
  }).filter(Boolean);
  var maxDist = Math.max.apply(Math, _toConsumableArray(placed.map(function (c) {
    return c.dist;
  })).concat([1]));
  var distScale = function distScale(d) {
    var NEAR = 3000;
    if (d <= NEAR) {
      return d / NEAR * (RMAX * 0.55);
    }
    var remain = (d - NEAR) / (maxDist - NEAR);
    return RMAX * 0.55 + Math.sqrt(remain) * (RMAX * 0.42);
  };
  var polar = function polar(bearing, dist) {
    var a = (bearing - 90) * Math.PI / 180;
    var r = distScale(dist);
    return {
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
      r: r
    };
  };
  var max = Math.max.apply(Math, _toConsumableArray(placed.map(function (c) {
    return c.value || 0;
  })).concat([1]));
  var positioned = placed.map(function (c) {
    return _objectSpread(_objectSpread(_objectSpread({}, c), polar(c.bearing, c.dist)), {}, {
      _r: 4 + Math.sqrt((c.value || 0) / max) * 16 * scale
    });
  });
  var PAD = 4;
  for (var iter = 0; iter < 60; iter++) {
    var moved = false;
    for (var i = 0; i < positioned.length; i++) {
      for (var j = i + 1; j < positioned.length; j++) {
        var a = positioned[i],
          b = positioned[j];
        var dx = b.x - a.x,
          dy = b.y - a.y;
        var d = Math.hypot(dx, dy) || 0.01;
        var minD = a._r + b._r + PAD;
        if (d < minD) {
          var push = (minD - d) / 2;
          var angA = (a.bearing - 90) * Math.PI / 180;
          var angB = (b.bearing - 90) * Math.PI / 180;
          if (a.dist >= b.dist) {
            a.x += push * Math.cos(angA);
            a.y += push * Math.sin(angA);
            b.x -= push * 0.4 * Math.cos(angB);
            b.y -= push * 0.4 * Math.sin(angB);
          } else {
            b.x += push * Math.cos(angB);
            b.y += push * Math.sin(angB);
            a.x -= push * 0.4 * Math.cos(angA);
            a.y -= push * 0.4 * Math.sin(angA);
          }
          moved = true;
        }
      }
    }
    if (!moved) break;
  }
  var distRings = [1000, 3000, 8000, 18000];
  return React.createElement("div", {
    className: "azimap-wrap",
    style: {
      height: height
    }
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(SIZE, " ").concat(SIZE),
    className: "azimap-svg",
    preserveAspectRatio: "xMidYMid meet"
  }, React.createElement("defs", null, React.createElement("radialGradient", {
    id: "azi-bg",
    cx: "50%",
    cy: "50%",
    r: "50%"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: "#fcfcf3"
  }), React.createElement("stop", {
    offset: "60%",
    stopColor: "#f6f8ec"
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#eef3e0"
  })), React.createElement("filter", {
    id: "azi-glow"
  }, React.createElement("feGaussianBlur", {
    stdDeviation: "1.6"
  }))), React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: RMAX + 16,
    fill: "url(#azi-bg)",
    stroke: "#dde6cf",
    strokeWidth: "1"
  }), distRings.map(function (km) {
    var r = distScale(km);
    if (r > RMAX) return null;
    return React.createElement("g", {
      key: km
    }, React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: r,
      fill: "none",
      stroke: "#d8e2c8",
      strokeWidth: ".8",
      strokeDasharray: "3 3",
      opacity: ".7"
    }), React.createElement("text", {
      x: cx,
      y: cy - r - 3,
      fontSize: "9.5",
      fill: "#7a8a78",
      textAnchor: "middle",
      fontWeight: "600"
    }, km >= 1000 ? "".concat(km / 1000, "k") : km, " km"));
  }), [{
    deg: 0,
    label: "北 N"
  }, {
    deg: 90,
    label: "東 E"
  }, {
    deg: 180,
    label: "南 S"
  }, {
    deg: 270,
    label: "西 W"
  }].map(function (_ref5) {
    var deg = _ref5.deg,
      label = _ref5.label;
    var a = (deg - 90) * Math.PI / 180;
    var x2 = cx + (RMAX + 8) * Math.cos(a);
    var y2 = cy + (RMAX + 8) * Math.sin(a);
    var lx = cx + (RMAX + 22) * Math.cos(a);
    var ly = cy + (RMAX + 22) * Math.sin(a);
    return React.createElement("g", {
      key: deg
    }, React.createElement("line", {
      x1: cx,
      y1: cy,
      x2: x2,
      y2: y2,
      stroke: "#d8e2c8",
      strokeWidth: ".6",
      strokeDasharray: "2 4",
      opacity: ".6"
    }), React.createElement("text", {
      x: lx,
      y: ly,
      fontSize: "11",
      textAnchor: "middle",
      dominantBaseline: "middle",
      fill: "#0a5a2e",
      fontWeight: "700"
    }, label));
  }), React.createElement("g", {
    className: "azi-arcs"
  }, positioned.map(function (c, i) {
    if (!c.value) return null;
    return React.createElement("line", {
      key: c.name,
      x1: cx,
      y1: cy,
      x2: c.x,
      y2: c.y,
      stroke: REGION_COLOR[c.region] || "#0a5a2e",
      strokeWidth: ".8",
      strokeOpacity: ".35",
      strokeDasharray: "3 3",
      className: "azi-arc",
      style: {
        animationDelay: "".concat(i * 80, "ms")
      }
    });
  })), React.createElement("g", {
    className: "azi-home"
  }, React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "14",
    fill: "none",
    stroke: "#c8a64b",
    strokeWidth: "1",
    opacity: ".5"
  }, React.createElement("animate", {
    attributeName: "r",
    from: "6",
    to: "22",
    dur: "2.4s",
    repeatCount: "indefinite"
  }), React.createElement("animate", {
    attributeName: "opacity",
    from: ".7",
    to: "0",
    dur: "2.4s",
    repeatCount: "indefinite"
  })), React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: "7",
    fill: "#c8a64b",
    stroke: "#fff",
    strokeWidth: "2"
  }), React.createElement("text", {
    x: cx,
    y: cy + 1,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontSize: "9",
    fill: "#fff",
    fontWeight: "800"
  }, "\u9AD8\u9910"), React.createElement("text", {
    x: cx,
    y: cy + 22,
    textAnchor: "middle",
    fontSize: "10.5",
    fill: "#7a5d10",
    fontWeight: "700"
  }, HOME.name)), positioned.map(function (c, i) {
    var r = c._r;
    var isHov = hover === i;
    var dx = c.x - cx,
      dy = c.y - cy;
    var norm = Math.hypot(dx, dy) || 1;
    var ux = dx / norm,
      uy = dy / norm;
    var lx = c.x + ux * (r + 8);
    var ly = c.y + uy * (r + 8);
    var anch = ux > 0.15 ? "start" : ux < -0.15 ? "end" : "middle";
    return React.createElement("g", {
      key: c.name,
      className: "azi-dot ".concat(isHov ? "on" : ""),
      onMouseEnter: function onMouseEnter() {
        return setHover(i);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, React.createElement("circle", {
      cx: c.x,
      cy: c.y,
      r: r * 1.6,
      fill: REGION_COLOR[c.region],
      opacity: ".15"
    }), React.createElement("circle", {
      cx: c.x,
      cy: c.y,
      r: r,
      fill: REGION_COLOR[c.region],
      stroke: "#fff",
      strokeWidth: "2"
    }), c.value >= 3 && r >= 9 && React.createElement("text", {
      x: c.x,
      y: c.y + 1,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fontSize: Math.max(9, r * 0.7),
      fill: "#fff",
      fontWeight: "800"
    }, c.value), (c.value >= max * 0.2 || isHov) && React.createElement("text", {
      x: lx,
      y: ly,
      textAnchor: anch,
      dominantBaseline: "middle",
      fontSize: "11",
      fill: "#1a3320",
      fontWeight: "700"
    }, c.name));
  })), hover != null && positioned[hover] && React.createElement("div", {
    className: "wdm-card azi-card"
  }, React.createElement("div", {
    className: "wdm-card-flag",
    style: {
      background: REGION_COLOR[positioned[hover].region]
    }
  }, positioned[hover].region), React.createElement("div", {
    className: "wdm-card-name"
  }, positioned[hover].name), React.createElement("div", {
    className: "wdm-card-num"
  }, positioned[hover].value, " ", React.createElement("span", null, "\u4EBA")), React.createElement("div", {
    className: "azi-card-meta"
  }, "\u8DDD\u96E2 ", React.createElement("b", null, Math.round(positioned[hover].dist).toLocaleString()), " km", React.createElement("span", {
    className: "azi-card-sep"
  }, "\u30FB"), "\u65B9\u4F4D ", React.createElement("b", null, Math.round(positioned[hover].bearing), "\xB0"))), React.createElement("div", {
    className: "wdm-foot"
  }, React.createElement("span", null, React.createElement("b", null, year), " \u5B78\u5E74\u5EA6\u30FB\u5171 ", React.createElement("b", null, total), " \u4F4D\u5883\u5916\u751F\u30FB", positioned.length, " \u570B\u30FB\u4EE5\u9AD8\u96C4\u70BA\u539F\u9EDE\u7684\u65B9\u4F4D\u5730\u5716"), React.createElement("div", {
    className: "wdm-legend"
  }, Object.entries(REGION_COLOR).slice(0, 4).map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      k = _ref7[0],
      v = _ref7[1];
    return React.createElement("span", {
      key: k,
      className: "wdm-leg-item"
    }, React.createElement("i", {
      style: {
        background: v
      }
    }), k);
  }))));
}
function SDGSunburst(_ref8) {
  var pillars = _ref8.pillars,
    sdgMap = _ref8.sdgMap,
    sdgColors = _ref8.sdgColors,
    sdgNameZh = _ref8.sdgNameZh,
    sdgNameEn = _ref8.sdgNameEn,
    _ref8$lang = _ref8.lang,
    lang = _ref8$lang === void 0 ? "zh" : _ref8$lang,
    _ref8$size = _ref8.size,
    size = _ref8$size === void 0 ? 460 : _ref8$size,
    onSelectSDG = _ref8.onSelectSDG;
  var _useSx7 = useSx(null),
    _useSx8 = _slicedToArray(_useSx7, 2),
    hover = _useSx8[0],
    setHover = _useSx8[1];
  var _useSx9 = useSx(null),
    _useSx0 = _slicedToArray(_useSx9, 2),
    active = _useSx0[0],
    setActive = _useSx0[1];
  var _useSx1 = useSx(null),
    _useSx10 = _slicedToArray(_useSx1, 2),
    hoverInd = _useSx10[0],
    setHoverInd = _useSx10[1];
  var vb = size;
  var cx = vb / 2,
    cy = vb / 2;
  var r0 = 60,
    r1 = 122,
    r2 = 188;
  var inv = sdgColors;
  var totalPillarWeight = pillars.reduce(function (s, p) {
    return s + p.sdgs.length;
  }, 0);
  var acc = -Math.PI / 2;
  var pillarSlices = pillars.map(function (p) {
    var ang = p.sdgs.length / totalPillarWeight * Math.PI * 2;
    var slice = {
      p: p,
      a0: acc,
      a1: acc + ang
    };
    acc += ang;
    return slice;
  });
  var sdgSlices = [];
  pillarSlices.forEach(function (_ref9) {
    var p = _ref9.p,
      a0 = _ref9.a0,
      a1 = _ref9.a1;
    var each = (a1 - a0) / p.sdgs.length;
    p.sdgs.forEach(function (id, i) {
      sdgSlices.push({
        id: id,
        color: inv[id],
        a0: a0 + i * each,
        a1: a0 + (i + 1) * each,
        pillar: p
      });
    });
  });
  var indicators = Object.entries(sdgMap);
  var arc = function arc(rIn, rOut, a0, a1) {
    var x0i = cx + rIn * Math.cos(a0),
      y0i = cy + rIn * Math.sin(a0);
    var x1i = cx + rIn * Math.cos(a1),
      y1i = cy + rIn * Math.sin(a1);
    var x0o = cx + rOut * Math.cos(a0),
      y0o = cy + rOut * Math.sin(a0);
    var x1o = cx + rOut * Math.cos(a1),
      y1o = cy + rOut * Math.sin(a1);
    var large = a1 - a0 > Math.PI ? 1 : 0;
    return "M".concat(x0i, ",").concat(y0i, " L").concat(x0o, ",").concat(y0o, " A").concat(rOut, ",").concat(rOut, " 0 ").concat(large, " 1 ").concat(x1o, ",").concat(y1o, " L").concat(x1i, ",").concat(y1i, " A").concat(rIn, ",").concat(rIn, " 0 ").concat(large, " 0 ").concat(x0i, ",").concat(y0i, " Z");
  };
  var labelPos = function labelPos(rIn, rOut, a0, a1) {
    var a = (a0 + a1) / 2;
    var r = (rIn + rOut) / 2;
    return {
      x: cx + r * Math.cos(a),
      y: cy + r * Math.sin(a),
      angDeg: a * 180 / Math.PI
    };
  };
  var dimSDG = function dimSDG(id) {
    if (active && active !== id) return true;
    if (hoverInd && !hoverInd.ids.includes(id)) return true;
    return false;
  };
  return React.createElement("div", {
    className: "sdg-sunburst-wrap"
  }, React.createElement("svg", {
    viewBox: "0 0 ".concat(vb, " ").concat(vb),
    className: "sdg-sunburst",
    width: "100%",
    style: {
      maxWidth: vb,
      display: "block",
      margin: "0 auto"
    }
  }, sdgSlices.map(function (s, i) {
    var dim = dimSDG(s.id);
    var lp = labelPos(r1, r2, s.a0, s.a1);
    return React.createElement("g", {
      key: "s-".concat(i),
      className: "sb-slice sdg ".concat(dim ? "dim" : "", " ").concat(active === s.id ? "act" : ""),
      onMouseEnter: function onMouseEnter() {
        return setHover({
          type: "sdg",
          v: s
        });
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      },
      onClick: function onClick() {
        var indCount = indicators.filter(function (_ref0) {
          var _ref1 = _slicedToArray(_ref0, 2),
            _ = _ref1[0],
            a = _ref1[1];
          return a.includes(s.id);
        }).length;
        if (indCount === 0) return;
        var next = active === s.id ? null : s.id;
        setActive(next);
        onSelectSDG === null || onSelectSDG === void 0 || onSelectSDG(next);
      },
      style: {
        cursor: "pointer"
      }
    }, React.createElement("path", {
      d: arc(r1, r2, s.a0, s.a1),
      fill: s.color,
      stroke: "#fff",
      strokeWidth: "1.4"
    }), React.createElement("text", {
      x: lp.x,
      y: lp.y,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fontSize: "14",
      fontWeight: "800",
      fill: "#fff",
      style: {
        pointerEvents: "none"
      }
    }, s.id));
  }), pillarSlices.map(function (_ref10, i) {
    var p = _ref10.p,
      a0 = _ref10.a0,
      a1 = _ref10.a1;
    var lp = labelPos(r0, r1, a0, a1);
    var arcR = (r0 + r1) / 2;
    var arcLen = (a1 - a0) * arcR;
    var showText = arcLen > 28;
    var midA = (a0 + a1) / 2;
    var isBottom = Math.sin(midA) > 0;
    var sa = isBottom ? a1 : a0;
    var ea = isBottom ? a0 : a1;
    var pathId = "pillar-arc-".concat(i);
    var sweep = isBottom ? 0 : 1;
    var sx = cx + arcR * Math.cos(sa),
      sy = cy + arcR * Math.sin(sa);
    var ex = cx + arcR * Math.cos(ea),
      ey = cy + arcR * Math.sin(ea);
    var lblZh = (lang === "en" ? p.en : p.zh) || "";
    var lblShort = lblZh.length > 5 ? lblZh.slice(0, 5) : lblZh;
    return React.createElement("g", {
      key: "p-".concat(i),
      className: "sb-slice pillar"
    }, React.createElement("path", {
      d: arc(r0, r1, a0, a1),
      fill: p.color,
      stroke: "#fff",
      strokeWidth: "1.6"
    }), showText && React.createElement(React.Fragment, null, React.createElement("defs", null, React.createElement("path", {
      id: pathId,
      d: "M".concat(sx, ",").concat(sy, " A").concat(arcR, ",").concat(arcR, " 0 0 ").concat(sweep, " ").concat(ex, ",").concat(ey),
      fill: "none"
    })), React.createElement("text", {
      fontSize: "11",
      fontWeight: "800",
      fill: "#fff",
      style: {
        pointerEvents: "none",
        letterSpacing: ".4px"
      }
    }, React.createElement("textPath", {
      href: "#".concat(pathId),
      startOffset: "50%",
      textAnchor: "middle"
    }, lblShort))));
  }), React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r0 - 2,
    fill: "#fff",
    stroke: "#0a5a2e",
    strokeWidth: "1.4"
  }), React.createElement("text", {
    x: cx,
    y: cy - 6,
    textAnchor: "middle",
    fontSize: "11",
    fontWeight: "800",
    fill: "#0a5a2e"
  }, "NKUHT"), React.createElement("text", {
    x: cx,
    y: cy + 8,
    textAnchor: "middle",
    fontSize: "9",
    fill: "#7a8a78"
  }, "SDGs 2030")), React.createElement("div", {
    className: "sb-ind-chips"
  }, indicators.map(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
      name = _ref12[0],
      ids = _ref12[1];
    var dim = active ? !ids.includes(active) : false;
    var isHover = hoverInd && hoverInd.name === name;
    var mainColor = inv[ids[0]] || "#0a5a2e";
    return React.createElement("button", {
      key: name,
      className: "sb-chip ".concat(dim ? "dim" : "", " ").concat(isHover ? "hl" : ""),
      style: {
        borderColor: mainColor,
        color: mainColor
      },
      onMouseEnter: function onMouseEnter() {
        return setHoverInd({
          name: name,
          ids: ids
        });
      },
      onMouseLeave: function onMouseLeave() {
        return setHoverInd(null);
      },
      onClick: function onClick() {
        var next = active === ids[0] ? null : ids[0];
        setActive(next);
        onSelectSDG === null || onSelectSDG === void 0 || onSelectSDG(next);
      }
    }, React.createElement("span", {
      className: "sb-chip-name"
    }, name), React.createElement("span", {
      className: "sb-chip-ids"
    }, ids.map(function (id) {
      return React.createElement("span", {
        key: id,
        className: "sb-chip-id",
        style: {
          background: inv[id]
        }
      }, id);
    })));
  })), hover && React.createElement("div", {
    className: "sb-tip"
  }, hover.type === "ind" && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "sb-tip-eyebrow",
    style: {
      color: hover.v.color
    }
  }, "\u6821\u52D9\u6307\u6A19"), React.createElement("div", {
    className: "sb-tip-name"
  }, hover.v.name), React.createElement("div", {
    className: "sb-tip-row"
  }, hover.v.ids.map(function (id) {
    return React.createElement("span", {
      key: id,
      className: "sdg-badge",
      style: {
        background: inv[id],
        width: 22,
        height: 22,
        fontSize: 11
      }
    }, id);
  }))), hover.type === "sdg" && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "sb-tip-eyebrow",
    style: {
      color: hover.v.color
    }
  }, "SDG ", hover.v.id), React.createElement("div", {
    className: "sb-tip-name"
  }, lang === "en" ? sdgNameEn[hover.v.id] : sdgNameZh[hover.v.id]), React.createElement("div", {
    className: "sb-tip-sub"
  }, "\u652F\u67F1\uFF1A", lang === "en" ? hover.v.pillar.en : hover.v.pillar.zh))), active && React.createElement("div", {
    className: "sb-active-card",
    style: {
      borderColor: inv[active]
    }
  }, React.createElement("div", {
    className: "sb-act-head"
  }, React.createElement("span", {
    className: "sdg-badge",
    style: {
      background: inv[active],
      width: 32,
      height: 32,
      fontSize: 14
    }
  }, active), React.createElement("div", null, React.createElement("div", {
    className: "sb-act-title"
  }, lang === "en" ? sdgNameEn[active] : sdgNameZh[active]), React.createElement("div", {
    className: "sb-act-sub"
  }, "\u5C0D\u61C9\u6307\u6A19 ", indicators.filter(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
      _ = _ref14[0],
      a = _ref14[1];
    return a.includes(active);
  }).length, " \u9805")), React.createElement("button", {
    className: "sb-act-close",
    onClick: function onClick() {
      setActive(null);
      onSelectSDG === null || onSelectSDG === void 0 || onSelectSDG(null);
    }
  }, "\xD7")), React.createElement("div", {
    className: "sb-act-list"
  }, indicators.filter(function (_ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
      _ = _ref16[0],
      a = _ref16[1];
    return a.includes(active);
  }).map(function (_ref17) {
    var _ref18 = _slicedToArray(_ref17, 1),
      name = _ref18[0];
    return React.createElement("span", {
      key: name,
      className: "sb-act-chip"
    }, name);
  }))));
}
function YearScrubber(_ref19) {
  var years = _ref19.years,
    value = _ref19.value,
    onChange = _ref19.onChange,
    _ref19$events = _ref19.events,
    events = _ref19$events === void 0 ? [] : _ref19$events,
    _ref19$lang = _ref19.lang,
    lang = _ref19$lang === void 0 ? "zh" : _ref19$lang;
  var _useSx11 = useSx(false),
    _useSx12 = _slicedToArray(_useSx11, 2),
    playing = _useSx12[0],
    setPlaying = _useSx12[1];
  useEx(function () {
    if (!playing) return;
    var id = setInterval(function () {
      var i = years.indexOf(value);
      var nxt = years[(i + 1) % years.length];
      onChange(nxt);
    }, 1100);
    return function () {
      return clearInterval(id);
    };
  }, [playing, value, years, onChange]);
  var idx = years.indexOf(value);
  var pct = idx / (years.length - 1) * 100;
  var trackRef = useRx(null);
  var drag = useRx(false);
  var setFromX = function setFromX(clientX) {
    var el = trackRef.current;
    if (!el) return;
    var r = el.getBoundingClientRect();
    var p = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    var i = Math.round(p * (years.length - 1));
    onChange(years[i]);
  };
  return React.createElement("div", {
    className: "year-scrub"
  }, React.createElement("button", {
    className: "ys-play",
    onClick: function onClick() {
      return setPlaying(function (p) {
        return !p;
      });
    },
    title: playing ? "暫停" : "自動播放"
  }, playing ? "❚❚" : "▶"), React.createElement("div", {
    className: "ys-label"
  }, React.createElement("span", {
    className: "ys-label-key"
  }, lang === "en" ? "AY" : "學年度"), React.createElement("span", {
    className: "ys-label-val"
  }, value)), React.createElement("div", {
    ref: trackRef,
    className: "ys-track",
    onMouseDown: function onMouseDown(e) {
      drag.current = true;
      setFromX(e.clientX);
    },
    onMouseMove: function onMouseMove(e) {
      if (drag.current) setFromX(e.clientX);
    },
    onMouseUp: function onMouseUp() {
      drag.current = false;
    },
    onMouseLeave: function onMouseLeave() {
      drag.current = false;
    },
    onClick: function onClick(e) {
      return setFromX(e.clientX);
    }
  }, React.createElement("div", {
    className: "ys-fill",
    style: {
      width: "".concat(pct, "%")
    }
  }), years.map(function (y, i) {
    var p = i / (years.length - 1) * 100;
    var ev = events.find(function (e) {
      return e.year === y;
    });
    return React.createElement("div", {
      key: y,
      className: "ys-tick ".concat(y === value ? "on" : "", " ").concat(ev ? "has-event" : ""),
      style: {
        left: "".concat(p, "%")
      },
      onClick: function onClick(e) {
        e.stopPropagation();
        onChange(y);
      }
    }, React.createElement("span", {
      className: "ys-tick-dot",
      style: ev ? {
        background: ev.color || "#c8a64b"
      } : undefined
    }), React.createElement("span", {
      className: "ys-tick-label"
    }, y), ev && React.createElement("span", {
      className: "ys-tick-flag",
      style: {
        borderColor: ev.color || "#c8a64b"
      }
    }, ev.label));
  }), React.createElement("div", {
    className: "ys-thumb",
    style: {
      left: "".concat(pct, "%")
    }
  }, React.createElement("span", {
    className: "ys-thumb-pin"
  }), React.createElement("span", {
    className: "ys-thumb-num"
  }, value))));
}
Object.assign(window, {
  useCountUp: useCountUp,
  HeroKPIWall: HeroKPIWall,
  HeroKPITile: HeroKPITile,
  WorldDotMap: WorldDotMap,
  SDGSunburst: SDGSunburst,
  YearScrubber: YearScrubber,
  COUNTRY_GEO: COUNTRY_GEO
});