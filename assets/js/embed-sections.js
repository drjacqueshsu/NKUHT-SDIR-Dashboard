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

    var paras = (props.note || []).map(function (t, i) {
      return React.createElement("p", { key: i, className: "embed-note-p" }, t);
    });

    return React.createElement(
      "div", { className: "section" },
      React.createElement(
        "div", { className: "section-head" },
        React.createElement(
          "div", null,
          React.createElement(
            "h2", null,
            props.title,
            props.badge ? React.createElement("span", { className: "embed-badge" }, props.badge) : null
          ),
          props.sub ? React.createElement("p", { className: "section-sub" }, props.sub) : null
        ),
        React.createElement(
          "a",
          { className: "embed-open", href: props.src, target: "_blank", rel: "noopener" },
          T("↗ 開新分頁檢視", "↗ Open in new tab", props.lang || "zh")
        )
      ),
      // 說明提示框：讓不熟悉的使用者也看得懂這是什麼、怎麼看
      (props.note || props.howto) ? React.createElement(
        "div", { className: "embed-note" },
        React.createElement("div", { className: "embed-note-ic", "aria-hidden": "true" }, "ⓘ"),
        React.createElement(
          "div", { className: "embed-note-body" },
          props.noteTitle ? React.createElement("div", { className: "embed-note-title" }, props.noteTitle) : null,
          paras,
          props.howto ? React.createElement(
            "div", { className: "embed-note-howto" },
            React.createElement("b", null, T("操作提示：", "How to use: ", props.lang || "zh")), props.howto
          ) : null
        )
      ) : null,
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

  // 嵌入內容為中文報告；英文模式時附註提醒
  function frameLangNote(lang) {
    return lang === "en" ? "(The detailed interactive report below is presented in Chinese.)" : null;
  }

  function DeepCultivationSection(props) {
    var lang = props && props.lang ? props.lang : "zh";
    var note = [
      T("「高等教育深耕計畫」是教育部補助各大學「提升教學品質、發展學校特色」的最主要競爭型經費。",
        "The Higher Education Sprout Project is the Ministry of Education's flagship competitive grant for improving teaching quality and developing each university's distinctive strengths.", lang),
      T("下方呈現本校 114 年度（113-2～114-1 學期）這筆經費的來源結構（主冊／USR 附冊／附錄，共四冊）、四大面向業務費分配、各執行單位的資本門（設備）投入、移地訓練與業師協同教學等執行成效。",
        "The section below shows NKUHT's AY114 (semesters 113-2 to 114-1) funding: its four-volume source structure (Main / USR / appendices), spending across the four strategic dimensions, capital (equipment) investment by unit, off-site training, and industry co-teaching outcomes.", lang)
    ];
    var fn = frameLangNote(lang);
    if (fn) note.push(fn);
    return React.createElement(EmbedSection, {
      lang: lang,
      title: T("高教深耕計畫經費分析", "Higher Education Sprout Project — Budget Analysis", lang),
      badge: T("教育部競爭型計畫", "MOE Competitive Grant", lang),
      sub: T("資料來源：校務研究辦公室・主計室・高教深耕辦公室（114 年度；數據依原始來源，未更動）",
        "Source: Office of IR · Accounting Office · Sprout Project Office (AY114; data unmodified from source)", lang),
      noteTitle: T("這是什麼？──「高教深耕計畫」", "What is this? — Higher Education Sprout Project", lang),
      note: note,
      howto: T("滑鼠停留在圖表上即可查看各項詳細數字。", "Hover over any chart to see the detailed figures.", lang),
      src: "assets/embed/deep-cultivation.html"
    });
  }

  function UCANSection(props) {
    var lang = props && props.lang ? props.lang : "zh";
    var note = [
      T("UCAN（大專校院就業職能平台，University Career and Competency Assessment Network）是教育部建置的職涯與就業力線上測評系統。",
        "UCAN (University Career and Competency Assessment Network) is the Ministry of Education's online career and employability assessment platform.", lang),
      T("下方雷達圖呈現學生在 16 種「職涯類型」（如餐旅、行銷與銷售、資訊科技、醫療保健…）的興趣分數──分數越高，代表對該領域的興趣越強。",
        "The radar chart below shows students' interest scores across 16 career types (e.g. Hospitality, Marketing & Sales, IT, Healthcare…) — a higher score means stronger interest in that field.", lang),
      T("分數說明：數值是對各職涯類型的「興趣相對強度」（非百分比）；本校 16 類型多落在 36–44 分之間，最適合用來比較不同學院／系所／年級之間的相對傾向。",
        "About the scores: values are the relative strength of interest per career type (not percentages); NKUHT's 16 types mostly fall between 36–44, and are best read as relative comparisons across colleges / departments / year levels.", lang)
    ];
    var fn = frameLangNote(lang);
    if (fn) note.push(fn);
    return React.createElement(EmbedSection, {
      lang: lang,
      title: T("UCAN 職涯興趣探索", "UCAN Career Interest Explorer", lang),
      badge: T("教育部 UCAN 職涯測評", "MOE UCAN Assessment", lang),
      sub: T("資料來源：UCAN 職涯興趣施測（114 年度・1–2 年級・有效樣本 1,497 筆；數據依原始來源，未更動）",
        "Source: UCAN Career Interest Survey (AY114 · Years 1–2 · 1,497 valid responses; data unmodified from source)", lang),
      noteTitle: T("這是什麼？──「UCAN 職涯興趣」", "What is this? — UCAN Career Interest", lang),
      note: note,
      howto: T("用上方的「學院／系所／年級」下拉選單切換對象；或點頁籤切換『學院・系所比較』與原始『資料表』。",
        "Use the College / Department / Year dropdowns at the top to switch the cohort; or use the tabs to view 'College & Department Comparison' and the raw 'Data Table'.", lang),
      src: "assets/embed/ucan-career.html"
    });
  }

  // 暴露為全域，供 app.js 的分頁 switch 使用
  window.DeepCultivationSection = DeepCultivationSection;
  window.UCANSection = UCANSection;
})();
