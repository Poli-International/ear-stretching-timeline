'use strict';

function escHtml(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

const fromSel = document.getElementById('from-gauge');
const toSel   = document.getElementById('to-gauge');
const planBtn = document.getElementById('plan-btn');
const results = document.getElementById('results');

GAUGE_TABLE.forEach(g => {
  fromSel.insertAdjacentHTML('beforeend', `<option value="${escHtml(g.id)}">${escHtml(g.label)}</option>`);
  toSel.insertAdjacentHTML('beforeend',   `<option value="${escHtml(g.id)}">${escHtml(g.label)}</option>`);
});
fromSel.value = '14g';
toSel.value   = '0g';

planBtn.addEventListener('click', run);

function run() {
  const fromId = fromSel.value;
  const toId   = toSel.value;
  const path   = getStretchPath(fromId, toId);

  if (!path) {
    results.innerHTML = `<div class="err-card">Target must be larger than current gauge.</div>`;
    return;
  }

  let minWeeks = 0, maxWeeks = 0;
  const steps = [];

  path.forEach((g, i) => {
    if (i === 0) {
      steps.push({ gauge: g, wait: null, cumMin: 0, cumMax: 0 });
      return;
    }
    const [wMin, wMax] = getWaitWeeks(path[i - 1].mm);
    minWeeks += wMin;
    maxWeeks += wMax;
    steps.push({ gauge: g, wait: [wMin, wMax], cumMin: minWeeks, cumMax: maxWeeks });
  });

  results.innerHTML = buildOutput(path, steps, minWeeks, maxWeeks);
}

function buildOutput(path, steps, minWeeks, maxWeeks) {
  const stretches  = path.length - 1;
  const minMonths  = (minWeeks / 4.33).toFixed(1);
  const maxMonths  = (maxWeeks / 4.33).toFixed(1);
  const deltaLabel = `${escHtml(path[0].display)} → ${escHtml(path[path.length - 1].display)}`;

  const timelineHtml = steps.map((s, i) => {
    const isCurrent = i === 0;
    const isGoal    = i === steps.length - 1;
    const dotClass  = isCurrent ? 'timeline-dot--current' : isGoal ? 'timeline-dot--goal' : '';
    const itemClass = isCurrent ? 'timeline-item--current' : isGoal ? 'timeline-item--goal' : '';

    const waitHtml = s.wait
      ? `<div class="timeline-wait">Wait <strong>${s.wait[0]}–${s.wait[1]} weeks</strong> of healed tissue before next stretch</div>`
      : '';

    return `
      <div class="timeline-item ${escHtml(itemClass)}">
        <div class="timeline-dot ${escHtml(dotClass)}"></div>
        <div class="timeline-content">
          <div class="timeline-gauge">${escHtml(s.gauge.display)}</div>
          <div class="timeline-mm">${s.gauge.mm} mm${isCurrent ? ' — starting point' : isGoal ? ' — goal' : ''}</div>
        </div>
        ${waitHtml}
      </div>`;
  }).join('');

  return `
    <div class="summary-row">
      <div class="summary-stat">
        <div class="summary-stat__val">${stretches}</div>
        <div class="summary-stat__lbl">stretch${stretches !== 1 ? 'es' : ''}</div>
      </div>
      <div class="summary-stat">
        <div class="summary-stat__val">${minWeeks}–${maxWeeks}</div>
        <div class="summary-stat__lbl">weeks minimum</div>
      </div>
      <div class="summary-stat">
        <div class="summary-stat__val">${minMonths}–${maxMonths}</div>
        <div class="summary-stat__lbl">months total</div>
      </div>
    </div>

    <div class="timeline-track">${timelineHtml}</div>

    <div class="advice-box">
      <strong>Safe stretching rules (APP guidelines):</strong>
      <ul>
        <li>Never skip a gauge — each step builds collagen elasticity incrementally.</li>
        <li>Only stretch fully healed tissue — no redness, discharge, or tenderness.</li>
        <li>Use implant-grade materials only: <a href="https://poliinternational.com/bioflex/" target="_blank" rel="noopener noreferrer">BioFlex® polymer</a>, ASTM F136 titanium, or implant-grade 316LVM steel.</li>
        <li>If you feel significant resistance during insertion, stop immediately — you are not ready.</li>
        <li>Never force a taper — use the weight of the jewellery only.</li>
      </ul>
    </div>

    <div class="note-box">
      Wait times shown are APP-recommended <em>minimums</em> for healthy tissue with no complications.
      Scar-prone individuals, previous blowouts, or difficult healing history will need longer between each size.
      Above 10 mm, most experienced piercers advise waiting until a plug sits with zero tension
      before attempting the next stretch.
    </div>`;
}
