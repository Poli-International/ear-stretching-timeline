/**
 * Poli International - Ear Stretching Timeline Planner
 * Warning Signs SVG Cross-Section & Anatomical Visual Library
 * 
 * Generates inline vector SVG cross-sections illustrating:
 * - Blowout: Displaced fistula lining herniated behind or outside the jewelry (front and sagittal cross-section)
 * - Micro-Tear / Fissure: Acute tear in the internal canal cellular wall under tension
 * - Lobe Thinning: Sagittal cross-section and frontal view showing critical <2mm bottom bridge margin
 * - Persistent Pain / Pressure: Acute tissue inflammation, constriction, and ischemia waves
 * 
 * Strictly zero external resources. Colors use CSS custom properties for dual-theme support.
 */

function escSvg(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getBlowoutSvg() {
  const aria = typeof t === 'function' ? escSvg(t('svg.blowoutAria')) : 'Diagram of earlobe blowout showing front view and cross-section';
  const frontLbl = typeof t === 'function' ? escSvg(t('svg.blowoutFront')) : 'Front: Lip of Tissue';
  const crossLbl = typeof t === 'function' ? escSvg(t('svg.blowoutCross')) : 'Cross-Section';

  return `
    <svg viewBox="0 0 220 95" width="200" height="90" aria-label="${aria}" role="img" class="warning-svg">
      <!-- Front View (Left) -->
      <g transform="translate(5, 5)">
        <path d="M 20,10 C 20,0 55,0 65,10 C 75,20 95,30 95,55 C 95,78 70,85 50,85 C 25,85 15,75 15,50 Z" fill="var(--bg-input)" stroke="var(--border)" stroke-width="1.8"/>
        <circle cx="55" cy="50" r="16" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.8"/>
        <!-- Displaced Lip on outer rim -->
        <path d="M 40,42 C 34,48 35,60 44,65 C 40,61 40,48 44,43 Z" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="2"/>
        <text x="8" y="14" fill="var(--text-muted)" font-size="8" font-weight="600">${frontLbl}</text>
      </g>

      <!-- Divider -->
      <line x1="110" y1="12" x2="110" y2="82" stroke="var(--border)" stroke-width="1" stroke-dasharray="2 2"/>

      <!-- Cross-Section (Right) -->
      <g transform="translate(118, 5)">
        <path d="M 12,12 L 75,12 L 75,36 L 45,36 L 45,60 L 75,60 L 75,82 L 12,82 Z" fill="var(--bg-input)" stroke="var(--border)" stroke-width="1.8"/>
        <rect x="35" y="36" width="46" height="24" rx="2" fill="var(--bg-card)" stroke="var(--text-muted)" stroke-width="1.5"/>
        <!-- Displaced fistula lining pushed back (Blowout) -->
        <path d="M 35,33 C 27,33 25,39 35,42 Z" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="2"/>
        <path d="M 35,54 C 26,56 27,63 35,63 Z" fill="var(--danger-bg)" stroke="var(--danger)" stroke-width="2"/>
        <text x="8" y="14" fill="var(--text-muted)" font-size="8" font-weight="600">${crossLbl}</text>
      </g>
    </svg>
  `;
}

function getTearSvg() {
  const aria = typeof t === 'function' ? escSvg(t('svg.tearAria')) : 'Diagram of fistula tear and fissure';
  const microLbl = typeof t === 'function' ? escSvg(t('svg.tearMicro')) : 'Micro-Tear';

  return `
    <svg viewBox="0 0 160 100" width="140" height="90" aria-label="${aria}" role="img" class="warning-svg">
      <!-- Lobe Profile -->
      <path d="M 30,15 C 30,5 60,5 75,15 C 90,25 130,25 135,50 C 140,75 110,90 75,90 C 45,90 30,75 30,50 Z" fill="var(--bg-input)" stroke="var(--border)" stroke-width="2"/>
      <!-- Fistula Hole -->
      <circle cx="85" cy="55" r="16" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
      <!-- Tear / Fissure on inner wall -->
      <path d="M 85,39 L 83,32 L 87,27" stroke="var(--danger)" stroke-width="2.5" fill="none"/>
      <circle cx="85" cy="38" r="2.5" fill="var(--danger)"/>
      <text x="35" y="28" fill="var(--danger)" font-size="9" font-weight="700">${microLbl}</text>
      <line x1="62" y1="28" x2="80" y2="33" stroke="var(--danger)" stroke-width="1.2" stroke-dasharray="2 2"/>
    </svg>
  `;
}

function getThinningSvg() {
  const aria = typeof t === 'function' ? escSvg(t('svg.thinningAria')) : 'Diagram of thinning lower lobe margin';
  const marginLbl = typeof t === 'function' ? escSvg(t('svg.thinningMargin')) : 'Critical Thin Margin (<2mm)';

  return `
    <svg viewBox="0 0 160 100" width="140" height="90" aria-label="${aria}" role="img" class="warning-svg">
      <!-- Lobe Profile with critical thin bottom bridge -->
      <path d="M 30,15 C 30,5 60,5 75,15 C 90,25 130,25 135,50 C 138,70 115,84 85,84 C 65,84 30,75 30,50 Z" fill="var(--bg-input)" stroke="var(--border)" stroke-width="2"/>
      <!-- Large Hole placed low -->
      <circle cx="85" cy="62" r="19" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
      <!-- Thin margin bracket -->
      <line x1="85" y1="81" x2="85" y2="84" stroke="var(--warn)" stroke-width="2"/>
      <circle cx="85" cy="83" r="2" fill="var(--warn)"/>
      <text x="95" y="93" fill="var(--warn)" font-size="9" font-weight="700">${marginLbl}</text>
    </svg>
  `;
}

function getPainSvg() {
  const aria = typeof t === 'function' ? escSvg(t('svg.painAria')) : 'Diagram of inflamed tissue under pressure';
  const painLbl = typeof t === 'function' ? escSvg(t('svg.painThrobbing')) : 'Throbbing / Pressure';

  return `
    <svg viewBox="0 0 160 100" width="140" height="90" aria-label="${aria}" role="img" class="warning-svg">
      <!-- Lobe Profile -->
      <path d="M 30,15 C 30,5 60,5 75,15 C 90,25 130,25 135,50 C 140,75 110,90 75,90 C 45,90 30,75 30,50 Z" fill="var(--bg-input)" stroke="var(--border)" stroke-width="2"/>
      <!-- Fistula Hole -->
      <circle cx="85" cy="55" r="16" fill="var(--bg-card)" stroke="var(--danger)" stroke-width="3"/>
      <!-- Radiating tension waves -->
      <circle cx="85" cy="55" r="22" fill="none" stroke="var(--danger)" stroke-width="1.5" stroke-dasharray="3 3"/>
      <circle cx="85" cy="55" r="28" fill="none" stroke="var(--danger)" stroke-width="1" stroke-dasharray="2 4"/>
      <text x="25" y="80" fill="var(--danger)" font-size="9" font-weight="700">${painLbl}</text>
    </svg>
  `;
}

const WarningSvgs = {
  getBlowoutSvg,
  getTearSvg,
  getThinningSvg,
  getPainSvg
};

if (typeof window !== 'undefined') {
  window.getBlowoutSvg = getBlowoutSvg;
  window.getTearSvg = getTearSvg;
  window.getThinningSvg = getThinningSvg;
  window.getPainSvg = getPainSvg;
  window.WarningSvgs = WarningSvgs;
}

if (typeof globalThis !== 'undefined') {
  globalThis.getBlowoutSvg = getBlowoutSvg;
  globalThis.getTearSvg = getTearSvg;
  globalThis.getThinningSvg = getThinningSvg;
  globalThis.getPainSvg = getPainSvg;
  globalThis.WarningSvgs = WarningSvgs;
}
