// 單位篩選資料層：依 unit (全校/院/系所) 回傳對應的子集數據
// 對於原資料缺乏完整的歷年系所拆分，採用「該單位最新可得真實值 + 學院占比 × 歷年總值」估算趨勢，
// 並在 charts 上加上「估算」note。
window.NKUHT_UNIT = (() => {
  const D = window.NKUHT_DATA;

  function unitKind(unit) {
    if (!unit || unit === "全校") return "全校";
    if (D.colleges[unit]) return "院";
    return "系";
  }

  function collegeOf(unit) {
    if (!unit || unit === "全校") return null;
    if (D.colleges[unit]) return unit;
    for (const [c, ds] of Object.entries(D.colleges)) {
      if (ds.includes(unit)) return c;
    }
    return null;
  }

  // 系/所對應的學年最新人數 — 取自 leaveRate113 / withdrawRate113 (n)
  function deptHeadcount(dept) {
    const r = D.leaveRate113.find(x => x.dept === dept) ||
              D.withdrawRate113.find(x => x.dept === dept);
    return r ? r.n : null;
  }

  // 取得 unit 在指定學年度的學生數
  function studentsAt(unit, year) {
    const yIdx = D.meta.years.indexOf(year);
    const kind = unitKind(unit);
    if (kind === "全校") {
      return D.studentsByYear[yIdx]?.total ?? null;
    }
    if (kind === "院") {
      return D.collegeStudents[unit]?.[yIdx] ?? null;
    }
    // 系/所：以 113 學年度真實值為基準，按學院縮放推算
    const head = deptHeadcount(unit);
    if (head == null) return null;
    const col = collegeOf(unit);
    if (!col) return head;
    const colArr = D.collegeStudents[col];
    const idx113 = D.meta.years.indexOf(113);
    const ratio = colArr[yIdx] / (colArr[idx113] || 1);
    return Math.round(head * ratio);
  }

  // 學院人數陣列在指定年的占比
  function collegeShare(college, year) {
    const yIdx = D.meta.years.indexOf(year);
    const total = Object.values(D.collegeStudents).reduce((s, a) => s + a[yIdx], 0);
    return total ? D.collegeStudents[college][yIdx] / total : 0;
  }

  // 單位在某指標的縮放比例 (對全校總數)
  function shareOf(unit, year) {
    if (unitKind(unit) === "全校") return 1;
    const total = D.studentsByYear[D.meta.years.indexOf(year)]?.total || 1;
    const s = studentsAt(unit, year);
    return s ? s / total : 0;
  }

  // 給定全校歷年陣列，回傳依 unit 縮放後的陣列
  function scaleSeries(allSeries, unit, years = D.meta.years) {
    if (unitKind(unit) === "全校") return allSeries;
    return allSeries.map((v, i) => {
      const sh = shareOf(unit, years[i] ?? years[years.length - 1]);
      return Math.round(v * sh * 100) / 100;
    });
  }

  // 取得單位在 113 學年度的休學/退學/papers/cert 數值
  function deptLeaveRate(unit) {
    const r = D.leaveRate113.find(x => x.dept === unit);
    return r?.rate ?? null;
  }
  function deptWithdrawRate(unit) {
    const r = D.withdrawRate113.find(x => x.dept === unit);
    return r?.rate ?? null;
  }
  function deptPapers(unit) {
    const r = D.papersByDept.find(x => x.dept === unit);
    return r ? r.v[2] : null; // 113
  }
  function collegeCerts(college, yIdx) {
    return D.cert.college[college]?.[yIdx] ?? null;
  }
  function collegeIntern(college) {
    return D.internCollege113[college] ?? null;
  }

  // 性別 (估算): 院別性別比例近似全校；系所同學院縮放
  function genderAt(unit, year) {
    const yIdx = D.meta.years.indexOf(year);
    const total = D.genderByYear[yIdx];
    if (unitKind(unit) === "全校") return total;
    const sh = shareOf(unit, year);
    return { m: Math.round(total.m * sh), f: Math.round(total.f * sh), est: true };
  }

  // 教師結構 (估算): 院按學生占比，系再除以該院系所數
  function facultyAt(unit, year) {
    const yIdx = D.meta.years.indexOf(year);
    const fac = D.faculty[yIdx] || D.faculty[D.faculty.length - 1];
    if (unitKind(unit) === "全校") return fac;
    const sh = shareOf(unit, year);
    const scale = (n) => Math.max(1, Math.round(n * sh));
    return {
      year: fac.year,
      prof: scale(fac.prof), asso: scale(fac.asso),
      asst: scale(fac.asst), lect: scale(fac.lect),
      total: scale(fac.total),
      doc: scale(fac.doc), profTech: scale(fac.profTech),
      est: true,
    };
  }

  // 產學經費 (估算)
  function industryFundAt(unit, year) {
    const yIdx = D.meta.years.indexOf(year);
    const f = D.industryFund[yIdx] || D.industryFund[D.industryFund.length - 1];
    if (unitKind(unit) === "全校") return f;
    const sh = shareOf(unit, year);
    return {
      year: f.year,
      gov: Math.round(f.gov * sh),
      biz: Math.round(f.biz * sh),
      total: Math.round(f.total * sh),
      est: true,
    };
  }

  // 註冊率：學院/系所沿用全校趨勢 (沒有更細資料)
  function registrationAt(unit) {
    return D.registration.school; // 全校註冊率作為對照
  }

  // 畢業流向：院別有真實資料；系所沿用所屬院
  function gradFlowAt(unit) {
    if (unitKind(unit) === "全校") return null;
    const col = collegeOf(unit);
    return col ? D.gradFlow[col] : null;
  }

  // 畢業人數
  function gradCountAt(unit) {
    if (unitKind(unit) === "全校") {
      return [0,1,2,3,4].map(i =>
        Object.values(D.gradCount).reduce((s,a)=>s+a[i],0)
      );
    }
    if (unitKind(unit) === "院") return D.gradCount[unit];
    const col = collegeOf(unit);
    if (!col) return null;
    const sh = shareOf(unit, 113);
    return D.gradCount[col].map(v => Math.round(v * sh));
  }

  // 證照 (歷年) — 院有真實資料；系所縮放
  function certSeries(unit) {
    if (unitKind(unit) === "全校") return D.cert.total;
    if (unitKind(unit) === "院") return D.cert.college[unit];
    const col = collegeOf(unit);
    if (!col) return null;
    const sh113 = shareOf(unit, 113);
    return D.cert.college[col].map(v => Math.round(v * sh113));
  }

  // 實習人數 113
  function internsAt(unit) {
    if (unitKind(unit) === "全校") {
      return Object.values(D.internCollege113).reduce((a,b)=>a+b,0);
    }
    if (unitKind(unit) === "院") return D.internCollege113[unit];
    const col = collegeOf(unit);
    if (!col) return null;
    const sh = shareOf(unit, 113);
    return Math.round(D.internCollege113[col] * sh);
  }

  return {
    unitKind, collegeOf,
    studentsAt, genderAt, facultyAt, industryFundAt,
    registrationAt, gradFlowAt, gradCountAt,
    certSeries, internsAt,
    deptLeaveRate, deptWithdrawRate, deptPapers,
    collegeCerts, collegeIntern,
    shareOf, scaleSeries, collegeShare,
  };
})();
