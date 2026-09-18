'use strict';

/**
 * Ear Stretching Timeline Planner V2 - Main Application Logic
 * Supports:
 * - Two ears, independent step plans & dated histories
 * - Next earliest date calculation + RFC 5545 .ics calendar export
 * - Reader's pace: Readiness check ("I'm ready" / "Not yet +3 weeks rest")
 * - Size table with real intermediate sizes (9mm, 11mm, 13mm, 15mm, 17mm, 18mm, 20mm)
 * - Warning signs with inline SVG cross-sections
 * - Honest large-size point of no return notice (above 12-13 mm)
 * - Minimal jewellery guidance (plugs vs tapers, weight, materials)
 * - LocalStorage persistence & Clean Print support
 * - Recommendation 1: Downsizing & Blowout Rehabilitation Step-Back Planner
 * - Recommendation 2: Automated Half-Size / Intermediate Gauge Enforcer
 * - Recommendation 6: Naked Sleeping & Conditioning Protocol Scheduler
 * - Recommendation 7: Lobe Thickness & Fistula Health Assessment Log
 */

function escHtml(s) {
  return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const STORAGE_KEY = 'ear_stretching_planner_v2';
const LANG_STORAGE_KEY = 'poli_tools_language';

const FAQ_ITEMS = [
  { id: '1', category: 'stretching', qKey: 'faq.q1', aKey: 'faq.a1', tagKey: 'faq.filterStretching' },
  { id: '2', category: 'stretching', qKey: 'faq.q2', aKey: 'faq.a2', tagKey: 'faq.filterStretching' },
  { id: '3', category: 'stretching', qKey: 'faq.q3', aKey: 'faq.a3', tagKey: 'faq.filterStretching' },
  { id: '4', category: 'care', qKey: 'faq.q4', aKey: 'faq.a4', tagKey: 'faq.filterCare' },
  { id: '5', category: 'care', qKey: 'faq.q5', aKey: 'faq.a5', tagKey: 'faq.filterCare' },
  { id: '6', category: 'care', qKey: 'faq.q6', aKey: 'faq.a6', tagKey: 'faq.filterCare' },
  { id: '7', category: 'troubleshooting', qKey: 'faq.q7', aKey: 'faq.a7', tagKey: 'faq.filterTroubleshooting' },
  { id: '8', category: 'troubleshooting', qKey: 'faq.q8', aKey: 'faq.a8', tagKey: 'faq.filterTroubleshooting' },
  { id: '9', category: 'troubleshooting', qKey: 'faq.q9', aKey: 'faq.a9', tagKey: 'faq.filterTroubleshooting' },
  { id: '10', category: 'care', qKey: 'faq.q10', aKey: 'faq.a10', tagKey: 'faq.filterCare' }
];

const defaultEarState = () => ({
  fromGauge: '',
  toGauge: '',
  startDate: '',
  delayWeeks: 0,
  halfSizeEnabled: true,
  readinessChecks: {
    noPain: false,
    noRedness: false,
    noDischarge: false,
    movesFreely: false
  },
  readinessConfirmed: 'pending', // 'ready' | 'not-yet' | 'pending'
  rehabComplication: '',
  nakedSessions: 0,
  history: [] // { id, date, gaugeId, gaugeDisplay, gaugeMm, notes, rimMarginMm, pliability, sensation }
});

let appState = {
  activeEar: 'left',
  faqFilter: 'all',
  ears: {
    left: defaultEarState(),
    right: defaultEarState()
  }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.ears && parsed.ears.left && parsed.ears.right) {
        appState = parsed;
        if (!appState.faqFilter) {
          appState.faqFilter = 'all';
        }
        ['left', 'right'].forEach(side => {
          const ear = appState.ears[side];
          if (ear) {
            if (ear.halfSizeEnabled === undefined) ear.halfSizeEnabled = true;
            if (!ear.rehabComplication) ear.rehabComplication = '';
            if (ear.nakedSessions === undefined) ear.nakedSessions = 0;
            if (!Array.isArray(ear.history)) ear.history = [];
          }
        });
      }
    }
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
}

function getActiveEarState() {
  return appState.ears[appState.activeEar];
}

// Warning sign SVG helpers - backed by the WarningSvgs module in js/warning-svgs.js
function getBlowoutSvg() {
  if (typeof WarningSvgs !== 'undefined' && typeof WarningSvgs.getBlowoutSvg === 'function') {
    return WarningSvgs.getBlowoutSvg();
  }
  return '';
}

function getTearSvg() {
  if (typeof WarningSvgs !== 'undefined' && typeof WarningSvgs.getTearSvg === 'function') {
    return WarningSvgs.getTearSvg();
  }
  return '';
}

function getThinningSvg() {
  if (typeof WarningSvgs !== 'undefined' && typeof WarningSvgs.getThinningSvg === 'function') {
    return WarningSvgs.getThinningSvg();
  }
  return '';
}

function getPainSvg() {
  if (typeof WarningSvgs !== 'undefined' && typeof WarningSvgs.getPainSvg === 'function') {
    return WarningSvgs.getPainSvg();
  }
  return '';
}

// Recommendation 1: Downsizing & Blowout Rehabilitation
function getEarRehabPlan(earState) {
  if (!earState.fromGauge || !earState.rehabComplication) return null;
  if (typeof calculateDownsizePlan === 'function') {
    return calculateDownsizePlan(earState.fromGauge, earState.rehabComplication);
  }
  return null;
}

// Recommendation 6: Naked Sleeping Conditioning Phase Helper
function getNakedPhaseInfo(sessionCount) {
  const count = sessionCount || 0;
  if (count >= 51) return 5;
  if (count >= 36) return 4;
  if (count >= 21) return 3;
  if (count >= 8) return 2;
  return 1;
}

// Core validation logic: refuse any stretching jump greater than one size increment forward
function validateStretchStep(currentGaugeId, targetGaugeId, enforceHalfSizes = true) {
  if (!currentGaugeId) {
    return { valid: true };
  }
  const currentIdx = GAUGE_TABLE.findIndex(g => g.id === currentGaugeId);
  const selectedIdx = GAUGE_TABLE.findIndex(g => g.id === targetGaugeId);
  if (currentIdx === -1 || selectedIdx === -1) {
    return { valid: false, message: 'Invalid gauge selection' };
  }

  // Downsizing or staying at current gauge is always allowed
  if (selectedIdx <= currentIdx) {
    return { valid: true };
  }

  if (enforceHalfSizes) {
    // If half-sizes are enforced, cannot skip ANY gauge in table
    if (selectedIdx > currentIdx + 1) {
      const nextGauge = GAUGE_TABLE[currentIdx + 1];
      const targetGauge = GAUGE_TABLE[selectedIdx];
      const skipped = GAUGE_TABLE.slice(currentIdx + 1, selectedIdx).map(g => g.display).join(', ');
      
      let message;
      if (nextGauge.isHalfSize) {
        message = t('halfsize.warningSkipHalf', { halfSize: nextGauge.display });
      } else {
        message = t('error.refuseJump', {
          current: GAUGE_TABLE[currentIdx].display,
          target: targetGauge.display,
          next: nextGauge.display,
          skipped: skipped
        });
      }
      return {
        valid: false,
        errorKey: nextGauge.isHalfSize ? 'halfsize.warningSkipHalf' : 'error.refuseJump',
        params: {
          current: GAUGE_TABLE[currentIdx].display,
          target: targetGauge.display,
          next: nextGauge.display,
          skipped: skipped,
          halfSize: nextGauge.display
        },
        message: message
      };
    }
  } else {
    // When half-sizes are not enforced, find the next non-half-size gauge
    let nextNonHalfIdx = currentIdx + 1;
    while (nextNonHalfIdx < GAUGE_TABLE.length && GAUGE_TABLE[nextNonHalfIdx].isHalfSize) {
      nextNonHalfIdx++;
    }
    if (selectedIdx > nextNonHalfIdx) {
      const nextGauge = GAUGE_TABLE[nextNonHalfIdx] || GAUGE_TABLE[currentIdx + 1];
      const targetGauge = GAUGE_TABLE[selectedIdx];
      const skipped = GAUGE_TABLE.slice(currentIdx + 1, selectedIdx).filter(g => !g.isHalfSize).map(g => g.display).join(', ');
      return {
        valid: false,
        errorKey: 'error.refuseJump',
        params: {
          current: GAUGE_TABLE[currentIdx].display,
          target: targetGauge.display,
          next: nextGauge.display,
          skipped: skipped
        },
        message: t('error.refuseJump', {
          current: GAUGE_TABLE[currentIdx].display,
          target: targetGauge.display,
          next: nextGauge.display,
          skipped: skipped
        })
      };
    }
  }
  return { valid: true };
}

// RFC 5545 standard iCalendar (.ics) generator for next earliest stretch date (Zero external dependencies)
function generateICS(earLabel, nextSizeDisplay, nextSizeMm, targetDateStr, reason) {
  const dt = parseLocalDate(targetDateStr);
  if (!dt) return '';
  const y = dt.getFullYear();
  const m = String(dt.getMonth() + 1).padStart(2, '0');
  const d = String(dt.getDate()).padStart(2, '0');
  const dtStart = `${y}${m}${d}`;
  
  const endDt = new Date(dt);
  endDt.setDate(endDt.getDate() + 1);
  const ey = endDt.getFullYear();
  const em = String(endDt.getMonth() + 1).padStart(2, '0');
  const ed = String(endDt.getDate()).padStart(2, '0');
  const dtEnd = `${ey}${em}${ed}`;

  const now = new Date();
  const stamp = now.getUTCFullYear() +
    String(now.getUTCMonth() + 1).padStart(2, '0') +
    String(now.getUTCDate()).padStart(2, '0') + 'T' +
    String(now.getUTCHours()).padStart(2, '0') +
    String(now.getUTCMinutes()).padStart(2, '0') +
    String(now.getUTCSeconds()).padStart(2, '0') + 'Z';

  const uid = `stretch-${earLabel.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${targetDateStr}-${Date.now()}@poliinternational.com`;
  const summary = t('ics.summary', { earLabel, nextSizeDisplay });
  const description = t('ics.description', { earLabel, nextSizeDisplay, nextSizeMm, reason });

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Poli International//Ear Stretching Timeline Planner//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${dtStart}`,
    `DTEND;VALUE=DATE:${dtEnd}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${description}`,
    'STATUS:CONFIRMED',
    'TRANSP:TRANSPARENT',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

// Browser .ics export helper
function exportNextDateIcs(ear, activeEarKey) {
  const info = calculateNextDateInfo(ear);
  if (!info) return false;

  const earLabel = activeEarKey === 'left' ? t('tab.left') : t('tab.right');
  const icsData = generateICS(
    earLabel,
    info.nextGauge.display,
    info.nextGauge.mm,
    info.nextDateStr,
    info.reason
  );
  if (!icsData) return false;

  if (typeof document === 'undefined') return true;

  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ear-stretch-reminder-${activeEarKey}-${info.nextDateStr}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  return true;
}

// Calculate the Next Earliest Safe Date for an ear
function calculateNextDateInfo(earState) {
  if (!earState.fromGauge) return null;

  const currentIdx = GAUGE_TABLE.findIndex(g => g.id === earState.fromGauge);
  if (currentIdx < 0 || currentIdx >= GAUGE_TABLE.length - 1) return null;

  const currentGauge = GAUGE_TABLE[currentIdx];
  const nextGauge = GAUGE_TABLE[currentIdx + 1];
  const [minWeeks] = getWaitWeeks(currentGauge.mm);
  const totalWeeks = minWeeks + (earState.delayWeeks || 0);

  // Use latest history log date if available, otherwise use startDate
  let baseDate = earState.startDate;
  let isFromHistory = false;

  if (earState.history && earState.history.length > 0) {
    const sorted = [...earState.history].sort((a, b) => b.date.localeCompare(a.date));
    baseDate = sorted[0].date;
    isFromHistory = true;
  }

  if (!baseDate) return null;

  const nextDateStr = addWeeksToLocalDate(baseDate, totalWeeks);
  const isPast = nextDateStr <= getLocalDateString();

  let reason = t('nextDate.weeksHealing', {
    weeks: minWeeks,
    size: currentGauge.display,
    mm: currentGauge.mm
  }) + ' ' + t('nextDate.sinceDate', {
    date: formatDisplayDate(baseDate)
  });

  if (earState.delayWeeks > 0) {
    reason += ' ' + t('nextDate.delayNotice', { weeks: earState.delayWeeks });
  }

  return {
    nextDateStr,
    displayDate: formatDisplayDate(nextDateStr),
    isPast,
    currentGauge,
    nextGauge,
    minWeeks,
    totalWeeks,
    baseDate,
    isFromHistory,
    reason
  };
}

// Main Render Function
function renderApp() {
  const container = document.getElementById('app-root');
  if (!container) return;

  // Update dynamic document title and meta description
  document.title = t('page.title');
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', t('page.metaDescription'));
  }

  const currentLang = (typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem(LANG_STORAGE_KEY)) || 'en';
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = currentLang;
  }

  const ear = getActiveEarState();
  const earLabel = appState.activeEar === 'left' ? t('tab.left') : t('tab.right');
  const currentFaqCategory = appState.faqFilter || 'all';

  const leftGaugeDisplay = appState.ears.left.fromGauge
    ? (GAUGE_TABLE.find(g => g.id === appState.ears.left.fromGauge)?.display || '')
    : '-';
  const rightGaugeDisplay = appState.ears.right.fromGauge
    ? (GAUGE_TABLE.find(g => g.id === appState.ears.right.fromGauge)?.display || '')
    : '-';

  // Compute Next Earliest Date
  const nextDateInfo = calculateNextDateInfo(ear);

  // Validate Path with half-size option
  let path = null;
  let steps = [];
  let totalMinWeeks = 0;
  let totalMaxWeeks = 0;
  let validationError = null;

  if (ear.fromGauge && ear.toGauge) {
    path = getStretchPath(ear.fromGauge, ear.toGauge, ear.halfSizeEnabled !== false);
    if (!path) {
      validationError = t('error.targetSmaller');
    } else {
      path.forEach((g, i) => {
        if (i === 0) {
          steps.push({ gauge: g, wait: null });
          return;
        }
        const [wMin, wMax] = getWaitWeeks(path[i - 1].mm);
        totalMinWeeks += wMin;
        totalMaxWeeks += wMax;
        steps.push({ gauge: g, wait: [wMin, wMax] });
      });
    }
  }

  const isLargeTarget = ear.toGauge && GAUGE_TABLE.find(g => g.id === ear.toGauge)?.mm >= 12.0;

  // History sorted for health assessments
  const sortedHistory = [...(ear.history || [])].sort((a, b) => b.date.localeCompare(a.date));
  const latestWithRim = sortedHistory.find(h => typeof h.rimMarginMm === 'number' && !isNaN(h.rimMarginMm));
  const prevWithRim = sortedHistory.filter(h => typeof h.rimMarginMm === 'number' && !isNaN(h.rimMarginMm))[1];

  let thinningAlertHtml = '';
  if (latestWithRim) {
    if (latestWithRim.rimMarginMm < 3.5) {
      thinningAlertHtml += `
        <div class="thinning-alert-box" role="alert">
          <strong>⚠ ${t('log.thinningAlertTitle')}:</strong> ${t('log.thinningAlertDesc', { mm: latestWithRim.rimMarginMm })}
        </div>
      `;
    }
    if (prevWithRim && (prevWithRim.rimMarginMm - latestWithRim.rimMarginMm) >= 1.0) {
      const dropVal = (prevWithRim.rimMarginMm - latestWithRim.rimMarginMm).toFixed(1);
      thinningAlertHtml += `
        <div class="thinning-alert-box" role="alert">
          <strong>⚠ ${t('log.rapidThinningAlert', { drop: dropVal })}</strong>
        </div>
      `;
    }
  }

  // Render HTML
  container.innerHTML = `
    <!-- Top Utility Bar with Theme Toggle and Language Selector -->
    <div class="top-bar">
      <button type="button" id="theme-toggle-btn" class="theme-toggle-btn" aria-label="${document.documentElement.getAttribute('data-theme') === 'light' ? t('theme.toggleDark') : t('theme.toggleLight')}">
        <span class="theme-toggle-icon" aria-hidden="true">${document.documentElement.getAttribute('data-theme') === 'light' ? '🌙' : '☀️'}</span>
        <span>${document.documentElement.getAttribute('data-theme') === 'light' ? t('theme.toggleDark') : t('theme.toggleLight')}</span>
      </button>
      <div class="lang-selector-wrapper">
        <label for="lang-select">${t('lang.label')}:</label>
        <select id="lang-select" class="lang-select" aria-label="${t('lang.label')}">
          <option value="en"${currentLang === 'en' ? ' selected' : ''}>${t('lang.en')}</option>
          <option value="fr"${currentLang === 'fr' ? ' selected' : ''}>${t('lang.fr')}</option>
          <option value="it"${currentLang === 'it' ? ' selected' : ''}>${t('lang.it')}</option>
          <option value="de"${currentLang === 'de' ? ' selected' : ''}>${t('lang.de')}</option>
          <option value="es"${currentLang === 'es' ? ' selected' : ''}>${t('lang.es')}</option>
          <option value="nl"${currentLang === 'nl' ? ' selected' : ''}>${t('lang.nl')}</option>
          <option value="pt"${currentLang === 'pt' ? ' selected' : ''}>${t('lang.pt')}</option>
        </select>
      </div>
    </div>

    <!-- Header -->
    <header class="tool-header">
      <div class="tool-header__badge">${t('app.badge')}</div>
      <h1>${t('app.title')}</h1>
      <p>${t('app.subtitle')}</p>
    </header>

    <!-- Two-Ear Tab Navigation -->
    <div class="ear-tabs-nav" role="tablist">
      <button class="ear-tab-btn ${appState.activeEar === 'left' ? 'active' : ''}" id="tab-left" role="tab" aria-selected="${appState.activeEar === 'left'}">
        <span>${t('tab.left')}</span>
        <span class="ear-tab-badge">${leftGaugeDisplay}</span>
      </button>
      <button class="ear-tab-btn ${appState.activeEar === 'right' ? 'active' : ''}" id="tab-right" role="tab" aria-selected="${appState.activeEar === 'right'}">
        <span>${t('tab.right')}</span>
        <span class="ear-tab-badge">${rightGaugeDisplay}</span>
      </button>
    </div>

    <div class="ear-actions-row">
      <button class="btn-link" id="copy-ear-btn">
        ${appState.activeEar === 'left' ? t('tab.copyToRight') : t('tab.copyToLeft')}
      </button>
      <button class="btn-link" id="reset-ear-btn">
        ${t('config.resetEar')}
      </button>
    </div>

    <!-- Next Earliest Date Highlight Banner -->
    <div class="next-date-banner" id="next-date-banner">
      <div class="next-date-header">
        <span class="next-date-title">📅 ${t('nextDate.title')} (${earLabel})</span>
      </div>
      ${
        nextDateInfo
          ? `
            <div class="next-date-val">${escHtml(nextDateInfo.displayDate)}</div>
            <div class="next-date-reason">
              ${escHtml(nextDateInfo.reason)}
              ${nextDateInfo.isPast ? `<br><strong class="text-safe">${t('nextDate.readyNow')}</strong>` : ''}
            </div>
            <div class="next-date-actions">
              <button class="btn btn-secondary btn-sm" id="export-ics-btn">
                📅 ${t('nextDate.exportIcs')}
              </button>
            </div>
          `
          : `
            <div class="next-date-reason">
              ${t('nextDate.notSet')}
            </div>
          `
      }
    </div>

    <!-- Clean Plan Summary for Printout -->
    <div class="print-only print-plan-summary">
      <div><strong>${earLabel}</strong></div>
      <div><strong>${t('config.from')}:</strong> ${leftGaugeDisplay !== '-' ? (appState.activeEar === 'left' ? leftGaugeDisplay : rightGaugeDisplay) : '-'}</div>
      <div><strong>${t('config.to')}:</strong> ${ear.toGauge ? (GAUGE_TABLE.find(g => g.id === ear.toGauge)?.display || '-') : '-'}</div>
      <div><strong>${t('config.startDate')}:</strong> ${ear.startDate ? formatDisplayDate(ear.startDate) : '-'}</div>
    </div>

    <!-- Plan Configuration Card -->
    <div class="card config-card">
      <h3 class="section-heading">${t('config.heading')} (${earLabel})</h3>

      ${validationError ? `<div class="error-box">${escHtml(validationError)}</div>` : ''}

      <div class="form-grid">
        <div class="form-field">
          <label for="from-gauge">${t('config.from')}</label>
          <select id="from-gauge" class="input-field">
            <option value="">${t('config.selectFrom')}</option>
            ${GAUGE_TABLE.map(g => `
              <option value="${escHtml(g.id)}" ${ear.fromGauge === g.id ? 'selected' : ''}>
                ${escHtml(g.label)}
              </option>
            `).join('')}
          </select>
        </div>

        <div class="form-field">
          <label for="to-gauge">${t('config.to')}</label>
          <select id="to-gauge" class="input-field">
            <option value="">${t('config.selectTo')}</option>
            ${GAUGE_TABLE.map(g => `
              <option value="${escHtml(g.id)}" ${ear.toGauge === g.id ? 'selected' : ''}>
                ${escHtml(g.label)}
              </option>
            `).join('')}
          </select>
        </div>
      </div>

      <div class="form-field mb-sm">
        <label for="start-date">${t('config.startDate')}</label>
        <input type="date" id="start-date" class="input-field" value="${escHtml(ear.startDate)}" max="${getLocalDateString()}">
        <div class="field-help">${t('config.startDateHelp')}</div>
      </div>

      <!-- Recommendation 2: Automated Half-Size Enforcer Toggle -->
      <label class="halfsize-toggle-wrap" for="halfsize-toggle">
        <input type="checkbox" id="halfsize-toggle" ${ear.halfSizeEnabled !== false ? 'checked' : ''}>
        <div class="halfsize-toggle-content">
          <span class="halfsize-toggle-title">${t('halfsize.toggleLabel')}</span>
          <span class="halfsize-toggle-help">${t('halfsize.helpText')}</span>
        </div>
      </label>
    </div>

    <!-- The Reader's Pace: Readiness Assessment Card -->
    <div class="readiness-card" id="readiness-card">
      <h3 class="readiness-title">${t('readiness.heading')}</h3>
      <p class="readiness-intro">${t('readiness.intro')}</p>

      <div class="checklist">
        <label class="check-item">
          <input type="checkbox" id="check-pain" ${ear.readinessChecks.noPain ? 'checked' : ''}>
          <span>${t('readiness.checkPain')}</span>
        </label>
        <label class="check-item">
          <input type="checkbox" id="check-redness" ${ear.readinessChecks.noRedness ? 'checked' : ''}>
          <span>${t('readiness.checkRedness')}</span>
        </label>
        <label class="check-item">
          <input type="checkbox" id="check-discharge" ${ear.readinessChecks.noDischarge ? 'checked' : ''}>
          <span>${t('readiness.checkDischarge')}</span>
        </label>
        <label class="check-item">
          <input type="checkbox" id="check-movement" ${ear.readinessChecks.movesFreely ? 'checked' : ''}>
          <span>${t('readiness.checkMovement')}</span>
        </label>
      </div>

      <div class="readiness-actions">
        <button class="btn btn-safe btn-sm" id="btn-ready">
          ✓ ${t('readiness.btnReady')}
        </button>
        <button class="btn btn-warn btn-sm" id="btn-not-yet">
          ⏳ ${t('readiness.btnNotYet')}
        </button>
      </div>

      ${
        ear.readinessConfirmed === 'ready'
          ? `<div class="readiness-status-msg status-ready">✓ ${t('readiness.statusReady')}</div>`
          : ear.readinessConfirmed === 'not-yet'
          ? `<div class="readiness-status-msg status-notyet">⏳ ${t('readiness.statusNotYet')}</div>`
          : `<div class="readiness-status-msg status-pending">ℹ ${t('readiness.statusPending')}</div>`
      }
    </div>

    <!-- Step Timeline & Progression -->
    ${
      path && steps.length > 0
        ? `
          <div class="summary-row">
            <div class="summary-stat">
              <div class="summary-stat__val">${steps.length - 1}</div>
              <div class="summary-stat__lbl">${t('summary.stretches')}</div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat__val">${totalMinWeeks}–${totalMaxWeeks}</div>
              <div class="summary-stat__lbl">${t('summary.minWeeks')}</div>
            </div>
            <div class="summary-stat">
              <div class="summary-stat__val">${(totalMinWeeks / 4.33).toFixed(1)}–${(totalMaxWeeks / 4.33).toFixed(1)}</div>
              <div class="summary-stat__lbl">${t('summary.minMonths')}</div>
            </div>
          </div>

          <div class="timeline-track">
            <h3 class="section-heading">${t('timeline.heading')}</h3>
            <div class="why-waits-note">${t('summary.whyWaitsGrow')}</div>

            <div class="mt-md">
              ${steps.map((s, idx) => {
                const isCurrent = idx === 0;
                const isNext = idx === 1;
                const isGoal = idx === steps.length - 1;
                const dotClass = isCurrent ? 'timeline-dot--current' : isNext ? 'timeline-dot--next' : isGoal ? 'timeline-dot--goal' : '';
                const isHalf = s.gauge.isHalfSize && !isCurrent && !isGoal;

                return `
                  <div class="timeline-item">
                    <div class="timeline-dot ${dotClass}"></div>
                    <div class="timeline-content">
                      <div class="timeline-gauge">
                        ${escHtml(s.gauge.label)}
                        ${isCurrent ? `<span class="badge badge-current">${t('timeline.currentBadge')}</span>` : ''}
                        ${isNext ? `<span class="badge badge-next">${t('timeline.nextBadge')}</span>` : ''}
                        ${isGoal ? `<span class="badge badge-goal">${t('timeline.targetBadge')}</span>` : ''}
                        ${isHalf ? `<span class="badge badge-halfsize">${t('halfsize.badge')}</span>` : ''}
                      </div>
                      <div class="timeline-mm">${s.gauge.mm} mm</div>
                    </div>
                    ${
                      s.wait
                        ? `<div class="timeline-wait">${t('timeline.waitLabel', { min: s.wait[0], max: s.wait[1] })}</div>`
                        : ''
                    }
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `
        : ''
    }

    <!-- Large Size Honest Advisory (The Point of No Return ~12-13 mm) -->
    <div class="card ${isLargeTarget ? 'large-size-alert' : ''}" id="large-size-card">
      <h3 class="section-heading">${t('largeSize.heading')}</h3>
      <p>${t('largeSize.body')}</p>
      ${
        isLargeTarget
          ? `<div class="mt-sm"><strong class="text-danger">⚠ ${t('largeSize.alertActive')}</strong></div>`
          : ''
      }
    </div>

    <!-- Warning Signs Section with Inline SVGs -->
    <div class="warning-signs-card">
      <h3 class="section-heading">${t('warning.heading')}</h3>
      <p class="text-muted-sm">${t('warning.intro')}</p>

      <div class="warning-grid">
        <div class="warning-item">
          <div class="warning-svg-wrap">
            ${getBlowoutSvg()}
          </div>
          <h4>${t('warning.blowoutTitle')}</h4>
          <p>${t('warning.blowoutDesc')}</p>
        </div>

        <div class="warning-item">
          <div class="warning-svg-wrap">
            ${getTearSvg()}
          </div>
          <h4>${t('warning.tearTitle')}</h4>
          <p>${t('warning.tearDesc')}</p>
        </div>

        <div class="warning-item">
          <div class="warning-svg-wrap">
            ${getThinningSvg()}
          </div>
          <h4>${t('warning.thinningTitle')}</h4>
          <p>${t('warning.thinningDesc')}</p>
        </div>

        <div class="warning-item">
          <div class="warning-svg-wrap">
            ${getPainSvg()}
          </div>
          <h4>${t('warning.painTitle')}</h4>
          <p>${t('warning.painDesc')}</p>
        </div>
      </div>

      <div class="warning-action-banner">
        🚨 ${t('warning.actionBox')}
      </div>
    </div>

    <!-- Recommendation 1: Downsizing & Blowout Rehabilitation Step-Back Planner -->
    <div class="card rehab-card" id="rehab-section">
      <h3 class="section-heading">${t('rehab.cardTitle')} (${earLabel})</h3>
      <p class="text-muted-sm">${t('rehab.intro')}</p>

      <div class="form-field mb-md">
        <label for="rehab-complication-select">${t('rehab.issueLabel')}</label>
        <select id="rehab-complication-select" class="input-field">
          <option value="">${t('rehab.issueSelect')}</option>
          <option value="blowout" ${ear.rehabComplication === 'blowout' ? 'selected' : ''}>${t('rehab.issueBlowout')}</option>
          <option value="tear" ${ear.rehabComplication === 'tear' ? 'selected' : ''}>${t('rehab.issueTear')}</option>
          <option value="pain" ${ear.rehabComplication === 'pain' ? 'selected' : ''}>${t('rehab.issuePain')}</option>
          <option value="thinning" ${ear.rehabComplication === 'thinning' ? 'selected' : ''}>${t('rehab.issueThinning')}</option>
        </select>
      </div>

      ${(() => {
        if (!ear.rehabComplication) return '';
        if (!ear.fromGauge) {
          return `<div class="error-box">${t('rehab.noSizeWarning')}</div>`;
        }
        const plan = getEarRehabPlan(ear);
        if (!plan) return '';

        return `
          <div class="rehab-result-box" id="rehab-result-box">
            <div class="rehab-result-header">
              <div>
                <span class="text-muted-xs">${t('rehab.recommendedSize')}:</span>
                <div class="rehab-size-badge">${escHtml(plan.downsizeGauge.label)}</div>
              </div>
              <div>
                <span class="text-muted-xs">${t('rehab.recommendedRest')}:</span>
                <div><strong>${plan.waitWeeks[0]}–${plan.waitWeeks[1]} ${t('summary.minWeeks')}</strong></div>
              </div>
            </div>
            <div class="text-muted-sm mb-sm">${t('rehab.restDetails')}</div>

            <h4>${t('rehab.protocolHeading')}</h4>
            <ol class="rehab-steps-list">
              <li>${t('rehab.step1')}</li>
              <li>${t('rehab.step2')}</li>
              <li>${t('rehab.step3')}</li>
              <li>${t('rehab.step4')}</li>
            </ol>

            <button type="button" class="btn btn-warn btn-sm" id="apply-rehab-btn">
              🛡️ ${t('rehab.applyBtn')}
            </button>
          </div>
        `;
      })()}
    </div>

    <!-- Recommendation 6: Naked Sleeping & Conditioning Protocol Scheduler -->
    <div class="card naked-card" id="naked-section">
      <h3 class="section-heading">${t('naked.cardTitle')} (${earLabel})</h3>
      <p class="text-muted-sm">${t('naked.intro')}</p>

      ${(() => {
        const currentGaugeObj = ear.fromGauge ? GAUGE_TABLE.find(g => g.id === ear.fromGauge) : null;
        const isEligible = currentGaugeObj && currentGaugeObj.mm >= 6.0;

        if (!isEligible) {
          return `
            <div class="warning-action-banner">
              ℹ ${t('naked.eligibilityNotice')}
            </div>
          `;
        }

        const activePhase = getNakedPhaseInfo(ear.nakedSessions);
        const phases = [
          { num: 1, title: t('naked.phase1Title'), desc: t('naked.phase1Desc') },
          { num: 2, title: t('naked.phase2Title'), desc: t('naked.phase2Desc') },
          { num: 3, title: t('naked.phase3Title'), desc: t('naked.phase3Desc') },
          { num: 4, title: t('naked.phase4Title'), desc: t('naked.phase4Desc') },
          { num: 5, title: t('naked.phase5Title'), desc: t('naked.phase5Desc') }
        ];

        return `
          <div class="naked-phases-list">
            ${phases.map(p => `
              <div class="naked-phase-item ${p.num === activePhase ? 'current-phase' : ''}">
                <div class="naked-phase-header">
                  <span>${escHtml(p.title)}</span>
                  ${p.num === activePhase ? `<span class="badge badge-safe">✓ ${t('naked.currentPhaseLabel')}</span>` : ''}
                </div>
                <p class="naked-phase-desc">${escHtml(p.desc)}</p>
              </div>
            `).join('')}
          </div>

          <div class="naked-actions-row">
            <div class="naked-counter-badge">
              ${t('naked.sessionsCompleted', { count: ear.nakedSessions || 0 })}
            </div>
            <button type="button" class="btn btn-secondary btn-sm" id="log-naked-btn">
              🛏️ ${t('naked.logTodayBtn')}
            </button>
          </div>
        `;
      })()}
    </div>

    <!-- Jewellery & Materials Guidance -->
    <div class="jewellery-guide-card">
      <h3 class="section-heading">${t('jewellery.heading')}</h3>
      <p><strong>${t('jewellery.plugsLabel')}</strong> ${t('jewellery.plugsText')}</p>
      <p><strong>${t('jewellery.tapersLabel')}</strong> ${t('jewellery.tapersText')}</p>
      <p><strong>${t('jewellery.weightLabel')}</strong> ${t('jewellery.weightText')}</p>
      <p><strong>${t('jewellery.materialsLabel')}</strong> ${t('jewellery.materialsText')}</p>

      <div class="tool-links-row">
        <span class="text-muted-xs">${t('jewellery.linksIntro')}</span>
        <a href="${'https' + '://'}poliinternational.com/jewelry-size-visualizer/" target="_top" class="tool-link-item">
          ${t('jewellery.linkVisualizer')} →
        </a>
        <a href="${'https' + '://'}poliinternational.com/gauge-converter/" target="_top" class="tool-link-item">
          ${t('jewellery.linkConverter')} →
        </a>
        <a href="${'https' + '://'}poliinternational.com/healing-tracker/" target="_top" class="tool-link-item">
          ${t('jewellery.linkTracker')} →
        </a>
      </div>
    </div>

    <!-- Expandable FAQ Section -->
    <div class="faq-card" id="faq-section">
      <div class="faq-header">
        <h3 class="section-heading" id="faq-heading">${t('faq.heading')}</h3>
        <p class="text-muted-sm">${t('faq.subtitle')}</p>
      </div>

      <!-- FAQ Category Filters -->
      <div class="faq-filters print-hide" role="tablist" aria-label="${t('faq.heading')}">
        <button type="button" class="faq-filter-btn ${currentFaqCategory === 'all' ? 'active' : ''}" data-category="all" id="faq-filter-all">
          ${t('faq.filterAll')}
        </button>
        <button type="button" class="faq-filter-btn ${currentFaqCategory === 'stretching' ? 'active' : ''}" data-category="stretching" id="faq-filter-stretching">
          ${t('faq.filterStretching')}
        </button>
        <button type="button" class="faq-filter-btn ${currentFaqCategory === 'care' ? 'active' : ''}" data-category="care" id="faq-filter-care">
          ${t('faq.filterCare')}
        </button>
        <button type="button" class="faq-filter-btn ${currentFaqCategory === 'troubleshooting' ? 'active' : ''}" data-category="troubleshooting" id="faq-filter-troubleshooting">
          ${t('faq.filterTroubleshooting')}
        </button>
      </div>

      <!-- Accordion List -->
      <div class="faq-list" id="faq-list" role="region" aria-labelledby="faq-heading">
        ${FAQ_ITEMS.map((item) => {
          const isVisible = currentFaqCategory === 'all' || currentFaqCategory === item.category;
          return `
            <details class="faq-item ${isVisible ? '' : 'hidden'}" data-category="${escHtml(item.category)}" id="faq-item-${escHtml(item.id)}">
              <summary class="faq-summary" id="faq-summary-${escHtml(item.id)}">
                <span class="faq-category-tag">${t(item.tagKey)}</span>
                <span class="faq-question-text">${t(item.qKey)}</span>
                <span class="faq-chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>
              <div class="faq-answer">
                <p>${t(item.aKey)}</p>
              </div>
            </details>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Recommendation 7: Dated Stretch History & Lobe Health Assessment Log -->
    <div class="history-card" id="history-section">
      <h3 class="section-heading">${t('log.heading')} (${earLabel})</h3>
      <p class="text-muted-sm">${t('log.intro')}</p>

      ${thinningAlertHtml}

      <form class="add-log-form" id="add-log-form">
        <div id="log-feedback" class="error-box hidden" role="alert"></div>
        <div class="form-grid">
          <div class="form-field">
            <label for="log-gauge">${t('log.sizeLabel')}</label>
            <select id="log-gauge" class="input-field" required>
              <option value="">${t('config.selectFrom')}</option>
              ${GAUGE_TABLE.map(g => `
                <option value="${escHtml(g.id)}">${escHtml(g.label)}</option>
              `).join('')}
            </select>
          </div>

          <div class="form-field">
            <label for="log-date">${t('log.dateLabel')}</label>
            <input type="date" id="log-date" class="input-field" value="${getLocalDateString()}" max="${getLocalDateString()}" required>
          </div>
        </div>

        <!-- Lobe Margin and Tissue Health Inputs -->
        <div class="form-grid">
          <div class="form-field">
            <label for="log-rim-margin">${t('log.rimMarginLabel')}</label>
            <input type="number" step="0.1" min="1.0" max="25.0" id="log-rim-margin" class="input-field" placeholder="${t('log.rimMarginPlaceholder')}">
          </div>

          <div class="form-field">
            <label for="log-pliability">${t('log.pliabilityLabel')}</label>
            <select id="log-pliability" class="input-field">
              <option value="">${t('log.pliabilitySelect')}</option>
              <option value="soft">${t('log.pliabilitySoft')}</option>
              <option value="moderate">${t('log.pliabilityModerate')}</option>
              <option value="rigid">${t('log.pliabilityRigid')}</option>
            </select>
          </div>

          <div class="form-field">
            <label for="log-sensation">${t('log.sensationLabel')}</label>
            <select id="log-sensation" class="input-field">
              <option value="normal">${t('log.sensationNormal')}</option>
              <option value="tender">${t('log.sensationTender')}</option>
              <option value="irritated">${t('log.sensationIrritated')}</option>
            </select>
          </div>
        </div>

        <div class="form-field mb-md">
          <label for="log-notes">${t('log.notesLabel')}</label>
          <input type="text" id="log-notes" class="input-field" placeholder="${t('log.notesPlaceholder')}">
        </div>

        <button type="submit" class="btn btn-primary btn-sm">
          + ${t('log.addBtn')}
        </button>
      </form>

      <div class="log-table-wrap">
        ${
          ear.history && ear.history.length > 0
            ? `
              <table class="log-table">
                <thead>
                  <tr>
                    <th>${t('log.thDate')}</th>
                    <th>${t('log.thSize')}</th>
                    <th>${t('log.thMm')}</th>
                    <th>${t('log.thRim')}</th>
                    <th>${t('log.thPliability')}</th>
                    <th>${t('log.thNotes')}</th>
                    <th class="print-hide">${t('log.thAction')}</th>
                  </tr>
                </thead>
                <tbody>
                  ${[...ear.history].sort((a, b) => b.date.localeCompare(a.date)).map(entry => {
                    let healthText = '-';
                    if (entry.pliability || entry.sensation) {
                      const pLabel = entry.pliability === 'soft' ? t('log.pliabilitySoft') : entry.pliability === 'moderate' ? t('log.pliabilityModerate') : entry.pliability === 'rigid' ? t('log.pliabilityRigid') : '';
                      const sLabel = entry.sensation === 'normal' ? t('log.sensationNormal') : entry.sensation === 'tender' ? t('log.sensationTender') : entry.sensation === 'irritated' ? t('log.sensationIrritated') : '';
                      healthText = [pLabel, sLabel].filter(Boolean).join(' / ') || '-';
                    }
                    const rimText = typeof entry.rimMarginMm === 'number' && !isNaN(entry.rimMarginMm) ? entry.rimMarginMm + ' mm' : '-';

                    return `
                      <tr>
                        <td data-label="${t('log.thDate')}">${escHtml(formatDisplayDate(entry.date))}</td>
                        <td data-label="${t('log.thSize')}"><strong>${escHtml(entry.gaugeDisplay)}</strong></td>
                        <td data-label="${t('log.thMm')}">${entry.gaugeMm} mm</td>
                        <td data-label="${t('log.thRim')}">${escHtml(rimText)}</td>
                        <td data-label="${t('log.thPliability')}">${escHtml(healthText)}</td>
                        <td data-label="${t('log.thNotes')}">${escHtml(entry.notes || '-')}</td>
                        <td data-label="${t('log.thAction')}" class="print-hide">
                          <button class="btn btn-danger btn-sm delete-log-btn" data-id="${entry.id}">
                            ${t('log.delete')}
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            `
            : `<div class="empty-log-msg">${t('log.empty')}</div>`
        }
      </div>
    </div>

    <!-- Action Footer (Print & Reset) -->
    <div class="action-footer print-hide">
      <button class="btn btn-outline" id="print-plan-btn">
        🖨️ ${t('actions.print')}
      </button>
      <button class="btn btn-secondary btn-sm" id="clear-all-btn">
        🗑️ ${t('actions.clearAll')}
      </button>
    </div>

    <!-- Mandatory Print Disclaimer -->
    <div class="print-only print-disclaimer-box">
      ${t('print.disclaimer')}
    </div>

    <!-- Footer Clinical Disclaimer -->
    <div class="disclaimer">
      <strong>${t('disclaimer.title')}:</strong> ${t('disclaimer.body')}
    </div>
  `;

  attachEventListeners();
}

function getCurrentLanguage() {
  return (typeof localStorage !== 'undefined' && localStorage.getItem(LANG_STORAGE_KEY)) || 'en';
}

function attachEventListeners() {
  // Theme toggle button
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('poli-theme', next);
      renderApp();
    });
  }

  // Language selector
  const langSel = document.getElementById('lang-select');
  if (langSel) {
    langSel.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
      if (typeof document !== 'undefined' && document.documentElement) {
        document.documentElement.lang = selectedLang;
      }
      renderApp();
    });
  }

  // Ear tabs
  const tabLeft = document.getElementById('tab-left');
  const tabRight = document.getElementById('tab-right');
  if (tabLeft) {
    tabLeft.addEventListener('click', () => {
      appState.activeEar = 'left';
      saveState();
      renderApp();
    });
  }
  if (tabRight) {
    tabRight.addEventListener('click', () => {
      appState.activeEar = 'right';
      saveState();
      renderApp();
    });
  }

  // Copy ear settings
  const copyBtn = document.getElementById('copy-ear-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const srcEar = appState.activeEar === 'left' ? 'left' : 'right';
      const dstEar = appState.activeEar === 'left' ? 'right' : 'left';
      appState.ears[dstEar] = JSON.parse(JSON.stringify(appState.ears[srcEar]));
      saveState();
      alert(t('tab.copySuccess'));
      renderApp();
    });
  }

  // Reset current ear
  const resetEarBtn = document.getElementById('reset-ear-btn');
  if (resetEarBtn) {
    resetEarBtn.addEventListener('click', () => {
      if (confirm(t('config.confirmReset'))) {
        appState.ears[appState.activeEar] = defaultEarState();
        saveState();
        renderApp();
      }
    });
  }

  // Form selects
  const fromSel = document.getElementById('from-gauge');
  const toSel = document.getElementById('to-gauge');
  const startDateInput = document.getElementById('start-date');
  const halfsizeToggle = document.getElementById('halfsize-toggle');

  if (fromSel) {
    fromSel.addEventListener('change', (e) => {
      const ear = getActiveEarState();
      ear.fromGauge = e.target.value;
      ear.readinessConfirmed = 'pending';
      saveState();
      renderApp();
    });
  }

  if (toSel) {
    toSel.addEventListener('change', (e) => {
      const ear = getActiveEarState();
      ear.toGauge = e.target.value;
      saveState();
      renderApp();
    });
  }

  if (startDateInput) {
    startDateInput.addEventListener('change', (e) => {
      const ear = getActiveEarState();
      ear.startDate = e.target.value;
      saveState();
      renderApp();
    });
  }

  if (halfsizeToggle) {
    halfsizeToggle.addEventListener('change', (e) => {
      const ear = getActiveEarState();
      ear.halfSizeEnabled = e.target.checked;
      saveState();
      renderApp();
    });
  }

  // Readiness checkboxes
  const chkPain = document.getElementById('check-pain');
  const chkRedness = document.getElementById('check-redness');
  const chkDischarge = document.getElementById('check-discharge');
  const chkMovement = document.getElementById('check-movement');

  [chkPain, chkRedness, chkDischarge, chkMovement].forEach(chk => {
    if (chk) {
      chk.addEventListener('change', () => {
        const ear = getActiveEarState();
        ear.readinessChecks.noPain = chkPain.checked;
        ear.readinessChecks.noRedness = chkRedness.checked;
        ear.readinessChecks.noDischarge = chkDischarge.checked;
        ear.readinessChecks.movesFreely = chkMovement.checked;
        ear.readinessConfirmed = 'pending';
        saveState();
      });
    }
  });

  // Readiness buttons
  const btnReady = document.getElementById('btn-ready');
  const btnNotYet = document.getElementById('btn-not-yet');

  if (btnReady) {
    btnReady.addEventListener('click', () => {
      const ear = getActiveEarState();
      const allChecked = ear.readinessChecks.noPain &&
                         ear.readinessChecks.noRedness &&
                         ear.readinessChecks.noDischarge &&
                         ear.readinessChecks.movesFreely;
      if (!allChecked) {
        alert(t('readiness.alertVerifyCriteria'));
        return;
      }
      ear.readinessConfirmed = 'ready';
      saveState();
      renderApp();
    });
  }

  if (btnNotYet) {
    btnNotYet.addEventListener('click', () => {
      const ear = getActiveEarState();
      ear.delayWeeks = (ear.delayWeeks || 0) + 3;
      ear.readinessConfirmed = 'not-yet';
      saveState();
      renderApp();
    });
  }

  // Export .ics calendar reminder (Zero external dependencies)
  const exportIcsBtn = document.getElementById('export-ics-btn');
  if (exportIcsBtn) {
    exportIcsBtn.addEventListener('click', () => {
      const ear = getActiveEarState();
      exportNextDateIcs(ear, appState.activeEar);
    });
  }

  // Recommendation 1: Complication selector & Apply downsize
  const rehabSelect = document.getElementById('rehab-complication-select');
  if (rehabSelect) {
    rehabSelect.addEventListener('change', (e) => {
      const ear = getActiveEarState();
      ear.rehabComplication = e.target.value;
      saveState();
      renderApp();
    });
  }

  const applyRehabBtn = document.getElementById('apply-rehab-btn');
  if (applyRehabBtn) {
    applyRehabBtn.addEventListener('click', () => {
      const ear = getActiveEarState();
      const plan = getEarRehabPlan(ear);
      if (!plan) return;

      const previousSize = plan.currentGauge.display;
      ear.fromGauge = plan.downsizeGauge.id;
      ear.delayWeeks = 8;
      ear.readinessConfirmed = 'pending';
      ear.readinessChecks = { noPain: false, noRedness: false, noDischarge: false, movesFreely: false };

      if (!ear.history) ear.history = [];
      ear.history.push({
        id: Date.now().toString(),
        date: getLocalDateString(),
        gaugeId: plan.downsizeGauge.id,
        gaugeDisplay: plan.downsizeGauge.display,
        gaugeMm: plan.downsizeGauge.mm,
        notes: `Downsize hold (${ear.rehabComplication}): stepped back from ${previousSize}`
      });

      saveState();
      const earLabel = appState.activeEar === 'left' ? t('tab.left') : t('tab.right');
      alert(t('rehab.appliedSuccess', { size: plan.downsizeGauge.display, earLabel }));
      renderApp();
    });
  }

  // Recommendation 6: Log Naked Training Session
  const logNakedBtn = document.getElementById('log-naked-btn');
  if (logNakedBtn) {
    logNakedBtn.addEventListener('click', () => {
      const ear = getActiveEarState();
      ear.nakedSessions = (ear.nakedSessions || 0) + 1;
      saveState();
      const earLabel = appState.activeEar === 'left' ? t('tab.left') : t('tab.right');
      alert(t('naked.loggedSuccess', { earLabel }));
      renderApp();
    });
  }

  // Add stretch log form (with Recommendation 7: Lobe assessment fields)
  const addLogForm = document.getElementById('add-log-form');
  if (addLogForm) {
    addLogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const logGaugeSel = document.getElementById('log-gauge');
      const logDateInput = document.getElementById('log-date');
      const logNotesInput = document.getElementById('log-notes');
      const logRimInput = document.getElementById('log-rim-margin');
      const logPliabilitySel = document.getElementById('log-pliability');
      const logSensationSel = document.getElementById('log-sensation');

      const gaugeId = logGaugeSel.value;
      const dateVal = logDateInput.value;
      const notesVal = logNotesInput.value.trim();
      const rimVal = logRimInput && logRimInput.value ? parseFloat(logRimInput.value) : null;
      const pliabilityVal = logPliabilitySel ? logPliabilitySel.value : null;
      const sensationVal = logSensationSel ? logSensationSel.value : null;

      if (!gaugeId || !dateVal) {
        alert(t('error.selectBoth'));
        return;
      }

      if (dateVal > getLocalDateString()) {
        alert(t('error.futureDate'));
        return;
      }

      const gaugeObj = GAUGE_TABLE.find(g => g.id === gaugeId);
      if (!gaugeObj) return;

      const ear = getActiveEarState();

      // Refuse jump if invalid
      if (ear.fromGauge) {
        const stepValidation = validateStretchStep(ear.fromGauge, gaugeId, ear.halfSizeEnabled !== false);
        if (!stepValidation.valid) {
          const feedbackEl = document.getElementById('log-feedback');
          if (feedbackEl) {
            feedbackEl.textContent = stepValidation.message;
            feedbackEl.classList.remove('hidden');
            feedbackEl.style.display = 'block';
          }
          alert(stepValidation.message);
          return;
        }
      }

      if (!ear.history) ear.history = [];

      ear.history.push({
        id: Date.now().toString(),
        date: dateVal,
        gaugeId: gaugeObj.id,
        gaugeDisplay: gaugeObj.display,
        gaugeMm: gaugeObj.mm,
        notes: notesVal,
        rimMarginMm: rimVal,
        pliability: pliabilityVal,
        sensation: sensationVal
      });

      // Update current gauge to the newly logged size!
      ear.fromGauge = gaugeObj.id;
      ear.startDate = dateVal;
      ear.delayWeeks = 0;
      ear.readinessConfirmed = 'pending';
      ear.readinessChecks = { noPain: false, noRedness: false, noDischarge: false, movesFreely: false };

      saveState();
      renderApp();
    });
  }

  // Delete stretch log buttons
  const deleteBtns = document.querySelectorAll('.delete-log-btn');
  deleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      if (confirm(t('log.confirmDelete'))) {
        const ear = getActiveEarState();
        ear.history = ear.history.filter(h => h.id !== id);
        saveState();
        renderApp();
      }
    });
  });

  // Print button
  const printBtn = document.getElementById('print-plan-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // FAQ category filters
  const faqFilterBtns = document.querySelectorAll('.faq-filter-btn');
  faqFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category') || 'all';
      appState.faqFilter = category;
      saveState();

      document.querySelectorAll('.faq-filter-btn').forEach(b => {
        b.classList.toggle('active', b === btn);
      });
      document.querySelectorAll('.faq-item').forEach(item => {
        const itemCat = item.getAttribute('data-category');
        const match = category === 'all' || itemCat === category;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  // Clear all button
  const clearAllBtn = document.getElementById('clear-all-btn');
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
      if (confirm(t('actions.confirmClear'))) {
        localStorage.removeItem(STORAGE_KEY);
        appState = {
          activeEar: 'left',
          ears: {
            left: defaultEarState(),
            right: defaultEarState()
          }
        };
        renderApp();
      }
    });
  }
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = (typeof localStorage !== 'undefined' && localStorage.getItem('poli-theme')) || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem(LANG_STORAGE_KEY)) || 'en';
  document.documentElement.lang = savedLang;
  loadState();
  renderApp();
});

// Standalone exports for testing and verification
if (typeof window !== 'undefined') {
  window.validateStretchStep = validateStretchStep;
  window.generateICS = generateICS;
  window.exportNextDateIcs = exportNextDateIcs;
  window.getBlowoutSvg = getBlowoutSvg;
  window.getTearSvg = getTearSvg;
  window.getThinningSvg = getThinningSvg;
  window.getPainSvg = getPainSvg;
  window.FAQ_ITEMS = FAQ_ITEMS;
  window.getEarRehabPlan = getEarRehabPlan;
  window.getNakedPhaseInfo = getNakedPhaseInfo;
}

if (typeof globalThis !== 'undefined') {
  globalThis.validateStretchStep = validateStretchStep;
  globalThis.generateICS = generateICS;
  globalThis.exportNextDateIcs = exportNextDateIcs;
  globalThis.getBlowoutSvg = getBlowoutSvg;
  globalThis.getTearSvg = getTearSvg;
  globalThis.getThinningSvg = getThinningSvg;
  globalThis.getPainSvg = getPainSvg;
  globalThis.FAQ_ITEMS = FAQ_ITEMS;
  globalThis.getEarRehabPlan = getEarRehabPlan;
  globalThis.getNakedPhaseInfo = getNakedPhaseInfo;
}
