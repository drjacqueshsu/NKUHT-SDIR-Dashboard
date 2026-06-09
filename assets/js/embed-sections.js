// 內嵌外部儀表板（高教深耕經費分析 / UCAN 職涯興趣）。
// 以「同源 iframe」原樣呈現，來源數據完全不更動；iframe 高度依內容自動調整。
// 元件為全域函式，於 app.js 之前載入，供分頁 switch 引用。
(function () {
  var useRef = React.useRef, useEffect = React.useEffect, useState = React.useState;

  function EmbedSection(props) {
    var ref = useRef(null);
    var st = useState(560);
    var h = st[0], setH = st[1];

    useEffect(function () {
      var iframe = ref.current;
      if (!iframe) return;
      function resize() {
        try {
          var d = iframe.contentDocument;
          if (d && d.body) {
            var nh = Math.max(d.body.scrollHeight, d.documentElement.scrollHeight);
            if (nh && Math.abs(nh - iframe.offsetHeight) > 6) setH(nh + 24);
          }
        } catch (e) { /* 跨源時略過；本站同源故可讀取 */ }
      }
      iframe.addEventListener("load", resize);
      // 圖表（Chart.js）會晚一點才繪製完成 → 短期輪詢調整高度
      var n = 0;
      var id = setInterval(function () { resize(); if (++n > 40) clearInterval(id); }, 600);
      return function () { clearInterval(id); iframe.removeEventListener("load", resize); };
    }, []);

    return React.createElement(
      "div", { className: "section" },
      React.createElement(
        "div", { className: "section-head" },
        React.createElement(
          "div", null,
          React.createElement("h2", null, props.title),
          props.sub ? React.createElement("p", { className: "section-sub" }, props.sub) : null
        ),
        React.createElement(
          "a",
          { className: "embed-open", href: props.src, target: "_blank", rel: "noopener" },
          "↗ 開新分頁檢視"
        )
      ),
      React.createElement(
        "div", { className: "embed-frame-wrap" },
        React.createElement("iframe", {
          ref: ref,
          src: props.src,
          title: props.title,
          className: "embed-frame",
          loading: "lazy",
          style: { height: h + "px" }
        })
      )
    );
  }

  function DeepCultivationSection() {
    return React.createElement(EmbedSection, {
      title: "114 年度高教深耕計畫經費分析",
      sub: "資料來源：校務研究辦公室・主計室・高教深耕辦公室（114 年度；數據依原始來源，未更動）",
      src: "assets/embed/deep-cultivation.html"
    });
  }

  function UCANSection() {
    return React.createElement(EmbedSection, {
      title: "UCAN 職涯興趣儀表板",
      sub: "資料來源：UCAN 職涯興趣施測（114 年度・1–2 年級・有效樣本 1,497 筆；數據依原始來源，未更動）",
      src: "assets/embed/ucan-career.html"
    });
  }

  // 暴露為全域，供 app.js 的分頁 switch 使用
  window.DeepCultivationSection = DeepCultivationSection;
  window.UCANSection = UCANSection;
})();
