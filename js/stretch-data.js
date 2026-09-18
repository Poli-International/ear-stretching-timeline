'use strict';

/**
 * Ear Stretching Timeline Planner V2 - Core Data & Localization
 * Maintained for Poli International
 */

// Complete Localization Dictionary - English Reference
const I18N = {
  en: {
    // Document Metadata
    'page.title': 'Ear Stretching Timeline Planner | Poli International',
    'page.metaDescription': 'Plan gradual earlobe stretching one size at a time at the pace tissue tolerates. Two ears, intermediate steps, readiness checks, and dated logs.',

    // Header & Navigation
    'app.badge': 'Safe Piercing Practice',
    'app.title': 'Ear Stretching Timeline Planner',
    'app.subtitle': 'Plan gradual earlobe stretching one size at a time at the pace your tissue tolerates. Two ears, step-by-step intermediate increments, readiness assessments, and a dated stretch log.',
    'lang.label': 'Language',
    'lang.en': 'English',
    'lang.fr': 'French',
    'lang.it': 'Italian',
    'lang.de': 'German',
    'lang.es': 'Spanish',
    'lang.nl': 'Dutch',
    'lang.pt': 'Portuguese',
    'theme.toggleDark': 'Switch to Dark Theme',
    'theme.toggleLight': 'Switch to Light Theme',
    
    // Ear Tabs
    'tab.left': 'Left Ear',
    'tab.right': 'Right Ear',
    'tab.copy': 'Copy Left Settings to Right',
    'tab.copyToRight': 'Copy Left Settings to Right',
    'tab.copyToLeft': 'Copy Right Settings to Left',
    'tab.copySuccess': 'Copied Left Ear settings to Right Ear',
    
    // Plan Configuration
    'config.heading': 'Plan Configuration',
    'config.from': 'Current Gauge / Size',
    'config.to': 'Target Gauge / Size',
    'config.selectFrom': 'Select current size...',
    'config.selectTo': 'Select target size...',
    'config.startDate': 'Date current size was inserted',
    'config.startDateHelp': 'Used to calculate your next earliest stretch date based on healing time.',
    'config.planBtn': 'Generate Step-by-Step Plan',
    'config.resetEar': 'Reset This Ear',
    'config.confirmReset': 'Reset settings and stretch history for this ear?',
    
    // Validation Errors
    'error.selectBoth': 'Please select both your current size and target size.',
    'error.targetSmaller': 'Target size must be larger than current size.',
    'error.skipNotice': 'Plan generates every intermediate step. Do not skip sizes when purchasing or stretching.',
    'error.refuseJump': 'Refusing jump: You cannot advance from {current} directly to {target}. Skipping intermediate sizes ({skipped}) risks severe blowout and tissue tearing. Stretching must proceed strictly one step at a time. The next permitted step is {next}.',
    'error.futureDate': 'Date cannot be in the future. Please select today or a past date.',
    'error.enterCurrentFirst': 'Please select your current size in the plan configuration before logging a stretch.',
    
    // Next Earliest Date Banner
    'nextDate.title': 'Next Earliest Safe Stretch Date',
    'nextDate.notSet': 'Set your current size and insertion date above to compute your next earliest date.',
    'nextDate.readyNow': 'Minimum healing interval has passed! Complete the readiness assessment below before proceeding.',
    'nextDate.reasonPrefix': 'Based on',
    'nextDate.weeksHealing': '{weeks} weeks minimum healing for {size} ({mm} mm)',
    'nextDate.sinceDate': 'since your insertion on {date}.',
    'nextDate.delayNotice': 'Includes {weeks} weeks extra rest because tissue was marked "not ready" during check.',
    'nextDate.exportIcs': 'Add to Calendar (.ics)',
    
    // Readiness Assessment
    'readiness.heading': "The Reader's Pace: Readiness Assessment",
    'readiness.intro': 'A calendar date is only an earliest threshold. Tissue stretches safely only when it is completely relaxed and healed. Check every condition honestly before touching the next size:',
    'readiness.checkPain': 'Zero pain, tenderness, or stinging when touching or moving the earlobe.',
    'readiness.checkRedness': 'Zero redness, swelling, or localized heat around the fistula.',
    'readiness.checkDischarge': 'Zero discharge, crusting, bleeding, or raw weeping skin.',
    'readiness.checkMovement': 'Current jewellery spins, slides forward and backward effortlessly with zero friction.',
    'readiness.btnReady': "I'm Ready to Advance",
    'readiness.btnNotYet': 'Not Ready Yet (+3 Weeks Rest)',
    'readiness.statusReady': 'Tissue is confirmed ready. Log your next stretch below when you insert the new size.',
    'readiness.statusNotYet': 'Added 3 weeks recovery pause. Tissue must rest until all signs of irritation subside.',
    'readiness.statusPending': 'Readiness check pending. Confirm all 4 points before stretching.',
    'readiness.alertVerifyCriteria': 'Please honestly verify all 4 criteria before confirming readiness. Tissue must be free of all discomfort and friction.',
    
    // Timeline Summary Stats
    'summary.stretches': 'steps total',
    'summary.minWeeks': 'weeks minimum',
    'summary.minMonths': 'months minimum',
    'summary.whyWaitsGrow': 'Waits grow with size because larger diameters expand a greater tissue circumference per millimetre (ΔC = π × Δd), requiring progressively more collagen remodeling.',
    
    // Step Timeline
    'timeline.heading': 'Step-by-Step Size Sequence',
    'timeline.currentBadge': 'Current Size',
    'timeline.nextBadge': 'Next Step',
    'timeline.targetBadge': 'Goal',
    'timeline.waitLabel': 'Wait {min}–{max} weeks of healed tissue before advancing',
    
    // Point of No Return Notice
    'largeSize.heading': 'Honest Note on Large Sizes: The Point of No Return (~12–13 mm / 1/2")',
    'largeSize.body': 'Above roughly half an inch (~12 mm to 13 mm / 00g to 1/2"), stretched earlobes commonly do not close back down on their own. Tissue elasticity has biological limits; once stretched beyond this point of no return, surgical lobe reconstruction (earlobe repair) is commonly what people turn to if they wish to close them. Plan your goal with this permanent alteration in mind. No stretch should be assumed reversible.',
    'largeSize.alertActive': 'Target size reaches or exceeds 12.0 mm (1/2"): Remember that tissue beyond this diameter commonly requires surgical reconstruction to close if you ever decide to reverse it.',
    
    // Warning Signs Section
    'warning.heading': 'Warning Signs: Early Recognition & Action',
    'warning.intro': 'If you encounter any of the following complications, STOP stretching immediately. Sizing down and resting is the only way to protect your tissue.',
    'warning.blowoutTitle': 'Blowout: Displaced Fistula Lip (Front & Cross-Section)',
    'warning.blowoutDesc': 'What it is: Excessive pressure forces the delicate internal fistula lining backwards or forwards out of the hole, turning it inside-out. What it looks like from the front: A red, raised, raw crescent lip of tissue protruding around the outer edge of the plug. In cross-section: The internal canal wall has herniated behind the jewelry. It does NOT resolve by carrying on. Downsize 1–2 sizes immediately, rest completely, and consult a professional piercer.',
    'warning.tearTitle': 'Micro-Tear / Fissure',
    'warning.tearDesc': 'Sharp stinging, bleeding, or weeping fluid inside the tunnel during or after insertion. Indicates damaged cellular walls. Downsize or remove jewellery, treat as an open wound with sterile saline, and never force insertion.',
    'warning.thinningTitle': 'Lobe Thinning',
    'warning.thinningDesc': 'The lower rim of the lobe becomes thin, pale, or translucent beneath the plug, caused by rapid sizing, heavy weights, or uneven blood supply. Downsize immediately to restore blood circulation and allow tissue to regain density.',
    'warning.painTitle': 'Persistent Pain / Pressure',
    'warning.painDesc': 'Throbbing, tight burning, or sharp pinching lasting more than a few minutes. Safe stretching should feel virtually frictionless with zero pain. If resistance occurs, you are not ready.',
    'warning.actionBox': 'Action required on any warning sign: Size down immediately, insert smooth single-flare jewellery, rest the tissue completely, and consult a professional piercer.',
    
    // Inline SVG Diagrams
    'svg.blowoutAria': 'Diagram of earlobe blowout showing front view and cross-section',
    'svg.blowoutFront': 'Front: Lip of Tissue',
    'svg.blowoutCross': 'Cross-Section',
    'svg.tearAria': 'Diagram of fistula tear and fissure',
    'svg.tearMicro': 'Micro-Tear',
    'svg.thinningAria': 'Diagram of thinning lower lobe margin',
    'svg.thinningMargin': 'Critical Thin Margin (<2mm)',
    'svg.painAria': 'Diagram of inflamed tissue under pressure',
    'svg.painThrobbing': 'Throbbing / Pressure',

    // Jewellery & Materials Section
    'jewellery.heading': 'Jewellery for Stretching: Plugs, Tapers, & Weight',
    'jewellery.plugsLabel': 'Plugs vs. Tapers:',
    'jewellery.plugsText': 'Smooth single-flare or no-flare plugs with rounded backs are the standard for stretching. They distribute pressure evenly across the entire fistula without threads that can tear delicate tissue.',
    'jewellery.tapersLabel': 'Guidance Only:',
    'jewellery.tapersText': 'Tapers are guidance tools for a piercer during insertion only; they must NEVER be used to force a stretch or worn as jewellery. Their uneven weight acts as a lever, pulling the hole off-center and causing severe lower-lobe thinning.',
    'jewellery.weightLabel': 'Weight & Thinning:',
    'jewellery.weightText': 'Heavy plugs (solid steel, brass, stone) cause localized downward drag that thins the bottom tissue bridge at larger sizes. Use lightweight biocompatible materials to preserve lobe thickness.',
    'jewellery.materialsLabel': 'Materials:',
    'jewellery.materialsText': 'Always use biocompatible, mirror-polished materials: medical-grade BioFlex® body jewelry (PP-R random copolymer), ASTM F-136 titanium, or implant-grade 316LVM steel.',
    'jewellery.linksIntro': 'For exact measurements, gauge conversions, and aftercare tracking:',
    'jewellery.linkVisualizer': 'Jewelry Size Visualizer',
    'jewellery.linkConverter': 'Gauge Converter',
    'jewellery.linkTracker': 'Healing Tracker',
    
    // Stretch History Log
    'log.heading': 'Stretch History Log',
    'log.intro': 'Record when each size actually went in and what you observed. Your plan and next earliest date will update to reflect your actual pace, creating a physical record you can show your piercer.',
    'log.sizeLabel': 'Size Reached',
    'log.dateLabel': 'Date Stretched',
    'log.notesLabel': 'Observation / Tissue Response',
    'log.notesPlaceholder': 'e.g., Slipped in with zero resistance after warm shower; no redness or pinch.',
    'log.addBtn': 'Log This Stretch',
    'log.empty': 'No stretches recorded yet for this ear. Log your first stretch above to start your personal history.',
    'log.thDate': 'Date',
    'log.thSize': 'Size',
    'log.thMm': 'Millimetres',
    'log.thNotes': 'Observation',
    'log.thAction': 'Action',
    'log.delete': 'Delete',
    'log.confirmDelete': 'Delete this log entry?',
    
    // Print & Persistence
    'actions.print': 'Print Plan / Save PDF',
    'actions.clearAll': 'Clear All Stored Data',
    'actions.confirmClear': 'Are you sure you want to erase all saved ear plans and stretch history logs from this browser?',
    'print.disclaimer': "Record of user's self-reported stretching log and timeline estimates. This document reflects user entry only.",
    
    // Footer Disclaimer
    'disclaimer.title': 'Important Note on Individual Variation',
    'disclaimer.body': 'These timelines represent minimum recommended intervals based on healthy tissue and established professional piercing practice. Individual collagen synthesis and tissue elasticity vary significantly. Scar tissue, previous trauma, or cold weather require extended intervals. Never stretch irritated tissue. Always consult a professional piercer when in doubt.',

    // Calendar Export
    'ics.summary': 'Ear Stretch Readiness Check ({earLabel}: {nextSizeDisplay})',
    'ics.description': 'Readiness evaluation for {earLabel} to {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nChecklist before attempting stretch:\\n- No pain or stinging\\n- No redness or heat\\n- No discharge or crusting\\n- Jewelry moves and spins freely with zero resistance\\n\\nReason: {reason}\\n\\nIf any check fails, do not force insertion. Downsize or rest.',

    // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Frequently Asked Questions & Expert Guidance',
    'faq.subtitle': 'Clear answers on stretching technique, daily hygiene, and complication prevention',
    'faq.filterAll': 'All Questions',
    'faq.filterStretching': 'Stretching Technique',
    'faq.filterCare': 'Daily Care & Cleaning',
    'faq.filterTroubleshooting': 'Troubleshooting & Health',
    'faq.q1': 'How do I know when my earlobes are truly ready for the next stretch?',
    'faq.a1': 'Tissue is only ready when it is completely healed, relaxed, and pliable. Your current jewellery should slide forward and backward effortlessly and rotate with zero pinching, resistance, or crusting. Waiting the minimum weeks is only a biological baseline; if you feel any tightness, stinging, or heat when attempting the next size, stop immediately and allow 2 to 4 additional weeks of rest.',
    'faq.q2': 'Why are tapers discouraged and what should I use instead?',
    'faq.a2': 'Tapers act as geometric wedges that easily force tissue past its natural stretch threshold, causing micro-tears and blowouts. Furthermore, wearing tapers as jewelry creates uneven lever weight that thins the lower lobe rim. Instead, practice dead-stretching using smooth, rounded single-flare plugs made from borosilicate glass, BioFlex® body jewelry (PP-R random copolymer), or ASTM F-136 implant-grade titanium.',
    'faq.q3': 'What are half-sizes (e.g., 7g, 1g, 9mm, 11mm) and why are they recommended?',
    'faq.a3': 'Traditional gauge charts contain sudden, dangerous leaps: for instance, jumping from 2g (6.0mm) to 0g (8.0mm) is a massive 2.0mm increase (a 33% tissue expansion in one day). Using in-between half sizes (such as 1g / 7.0mm, or 9mm between 0g and 00g) limits every increment to 0.5mm-1.0mm, protecting delicate vascular supply and preventing irreversible lobe blowout.',
    'faq.q4': 'How should I clean my stretched lobes and jewelry daily?',
    'faq.a4': 'Once fully healed, remove plugs during your daily warm shower to rinse lobes with clean running water and a gentle, fragrance-free cleanser. Wash your plugs separately and dry both your ears and jewellery completely before reinserting. Never use rubbing alcohol, hydrogen peroxide, or harsh antiseptic washes, which dry out, crack, and inflame healthy tissue.',
    'faq.q5': 'What oils are recommended for lobe massages, and when can I start?',
    'faq.a5': 'Daily 3 to 5-minute massages using pure cold-pressed jojoba oil, emu oil, or vitamin E oil stimulate microcirculation, break down fibrous scar tissue, and improve collagen pliability. Only perform oil massages on completely healed, intact skin. Never apply oils, balms, or ointments to fresh stretches, open micro-tears, or irritated lobes.',
    'faq.q6': 'What causes earlobe odor and how do I eliminate it?',
    'faq.a6': 'Lobe odor is a natural accumulation of shed dead skin cells (keratin) mixed with natural sebum trapped in the warm tunnel between the plug and the skin. Prevent it by removing healed plugs during your daily shower, washing the fistula thoroughly, allowing lobes to dry completely, and opting for non-porous materials like glass, titanium, or BioFlex® body jewelry.',
    'faq.q7': 'What should I do immediately if a stretch hurts, bleeds, or tears?',
    'faq.a7': 'Pain is never normal during ear stretching. If you experience stinging, throbbing, or bleeding, remove the larger jewelry immediately and downsize 1 to 2 sizes to relieve tension on the torn tissue. Flush twice daily with sterile saline solution (0.9% sodium chloride), treat it as an open wound, and do not attempt to restretch for at least 2 to 3 months.',
    'faq.q8': 'How do I recognize and manage an earlobe blowout?',
    'faq.a8': 'A blowout occurs when excessive pressure forces the delicate internal fistula canal out of the hole, forming a raised, raw lip of tissue around the back or front rim. If this happens, immediately downsize 1 to 2 sizes. Insert the downsized plug from the side where the lip protrudes to gently guide it back inside, avoid oils until healed, and consult an established professional piercer.',
    'faq.q9': 'What is the "point of no return" where stretched lobes will not close back down?',
    'faq.a9': 'For most anatomies, the point of no return occurs around 12mm to 13mm (~00g to 1/2"). Beyond this threshold, the elastic fibers in the dermis are typically permanently stretched, meaning the lobes will not shrink back to standard earring gauges (18g-16g) if jewelry is removed. Anyone stretching beyond 10-12mm should plan with the knowledge that surgical lobe reconstruction may be required to close them.',
    'faq.q10': 'Can I sleep without plugs in to maintain healthy earlobes?',
    'faq.a10': 'Trained naked sleeping (leaving jewelry out overnight) is beneficial for improving tissue circulation and maintaining thick lobe margins at larger sizes (typically 2g / 6.0mm and above). However, only begin naked training once a size has been solidly settled for at least 2 to 3 months. Train gradually: start with 30 minutes out per day, then a few hours, before attempting a full night, confirming the plug slides back in with zero resistance.',

        // Extended Protocols & Features
    'rehab.cardTitle': 'Downsize & Rehabilitation Planner',
    'rehab.intro': 'If you experience pain, tearing, bleeding, or a blowout, reducing tissue tension immediately is essential to protect blood supply and prevent permanent scarring.',
    'rehab.issueLabel': 'Observed Complication',
    'rehab.issueSelect': 'Select complication...',
    'rehab.issueBlowout': 'Blowout (raised lip of tissue protruding behind jewelry)',
    'rehab.issueTear': 'Micro-tear or bleeding after insertion',
    'rehab.issuePain': 'Persistent throbbing pain, heat, or redness',
    'rehab.issueThinning': 'Lower rim thinning or pressure point necrosis',
    'rehab.actionBtn': 'Calculate Step-Back Plan',
    'rehab.recommendedSize': 'Recommended Downsize Size',
    'rehab.recommendedRest': 'Rehabilitation Hold Duration',
    'rehab.restDetails': '8 to 12 weeks with zero stretching tension and sterile 0.9% sodium chloride saline soaks.',
    'rehab.protocolHeading': 'Emergency Rehabilitation Protocol',
    'rehab.step1': 'Remove tense jewelry and insert a clean single-flare glass or ASTM F-136 titanium plug 1 to 2 sizes smaller without force.',
    'rehab.step2': 'Perform warm sterile 0.9% sodium chloride saline soaks twice daily for 5 to 10 minutes.',
    'rehab.step3': 'Do not apply oils or balms to open tears until skin is closed. Once fully closed, massage gently with jojoba oil daily.',
    'rehab.step4': 'Hold this downsized size for a minimum of 8 to 12 weeks before re-evaluating readiness with an established professional piercer.',
    'rehab.applyBtn': 'Apply Downsize to This Ear',
    'rehab.appliedSuccess': 'Applied downsize to {size} with a rehabilitation hold to {earLabel}.',
    'rehab.noSizeWarning': 'Please select your current size first in the plan configuration above.',
    'halfsize.toggleLabel': 'Enforce Half-Sizes (0.5 mm – 1.0 mm Steps)',
    'halfsize.helpText': 'Mandates intermediate steps (such as 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) to prevent traumatic 2.0 mm jumps.',
    'halfsize.badge': 'Half-Size Milestone',
    'halfsize.warningSkipHalf': 'Half-size enforcement is active. Skipping intermediate half-size {halfSize} is not permitted. Please stretch to {halfSize} first.',
    'naked.cardTitle': 'Naked Sleeping & Conditioning Protocol',
    'naked.intro': 'For gauges 2g (6.0 mm) and larger, training your lobes to sleep without jewelry relieves pressure, restores dermal micro-circulation, and preserves lower rim thickness.',
    'naked.eligibilityNotice': 'Naked sleeping training is recommended for fully healed fistulae at 2g (6.0 mm) or above that have rested at least 8 to 12 weeks.',
    'naked.currentPhaseLabel': 'Conditioning Phase',
    'naked.phase1Title': 'Phase 1: Daytime Breaks (Weeks 1–2)',
    'naked.phase1Desc': 'Remove jewelry for 30 to 45 minutes during evening relaxation. Massage with jojoba oil and reinsert.',
    'naked.phase2Title': 'Phase 2: Evening Conditioning (Weeks 3–4)',
    'naked.phase2Desc': 'Leave lobes bare for 1 to 2 hours in the evening before bed. Reinsert lubricated plug for sleep.',
    'naked.phase3Title': 'Phase 3: Extended Bare Hours (Weeks 5–6)',
    'naked.phase3Desc': 'Leave lobes bare for 3 to 4 hours. Plugs should slide back in smoothly with zero resistance.',
    'naked.phase4Title': 'Phase 4: First Overnight Sleep (Weeks 7–8)',
    'naked.phase4Desc': 'Sleep bare for 6 to 8 hours. In the morning, massage with oil and gently insert single-flare glass plugs.',
    'naked.phase5Title': 'Phase 5: Nightly Habit (Maintenance)',
    'naked.phase5Desc': 'Sleep bare every night to prevent pillow snags, maintain tissue elasticity, and rebuild dermal collagen.',
    'naked.logTodayBtn': 'Log Today’s Naked Training Session',
    'naked.loggedSuccess': 'Logged naked training session for {earLabel}!',
    'naked.sessionsCompleted': 'Total Naked Sessions Completed: {count}',
    'log.rimMarginLabel': 'Lower Rim Margin (mm, optional)',
    'log.rimMarginPlaceholder': 'e.g. 5.0',
    'log.pliabilityLabel': 'Fistula Pliability',
    'log.pliabilitySelect': 'Select tissue feel...',
    'log.pliabilitySoft': 'Soft & supple (elastic)',
    'log.pliabilityModerate': 'Mild firmness / minor ridge',
    'log.pliabilityRigid': 'Dense / rigid scar tissue',
    'log.sensationLabel': 'Tissue Sensation',
    'log.sensationNormal': 'Comfortable / no tenderness',
    'log.sensationTender': 'Tender to light touch',
    'log.sensationIrritated': 'Dry, itchy, or stinging',
    'log.thRim': 'Rim Margin',
    'log.thPliability': 'Tissue Health',
    'log.thinningAlertTitle': 'Lobe Margin Thinning Alert',
    'log.thinningAlertDesc': 'Lower rim measurement of {mm} mm indicates thinning tissue. Halt all stretching, sleep bare or downsize, and consult an established professional piercer.',
    'log.rapidThinningAlert': 'Warning: Lower rim thickness decreased by {drop} mm since previous log. Rapid thinning indicates excessive tension.',

    'gauge.18g': '18g — 1.0 mm',
    'gauge.16g': '16g — 1.2 mm',
    'gauge.14g': '14g — 1.6 mm',
    'gauge.12g': '12g — 2.0 mm',
    'gauge.10g': '10g — 2.4 mm',
    'gauge.8g': '8g — 3.2 mm',
    'gauge.7g': '7g — 3.5 mm (half-size)',
    'gauge.6g': '6g — 4.0 mm',
    'gauge.5g': '5g — 4.5 mm (half-size)',
    'gauge.4g': '4g — 5.0 mm',
    'gauge.3g': '3g — 5.5 mm (half-size)',
    'gauge.2g': '2g — 6.0 mm',
    'gauge.1g': '1g — 7.0 mm (half-size)',
    'gauge.0g': '0g — 8.0 mm',
    'gauge.9mm': '9 mm (intermediate)',
    'gauge.00g': '00g — 10.0 mm',
    'gauge.11mm': '11 mm (intermediate)',
    'gauge.12mm': '12 mm',
    'gauge.13mm': '13 mm (intermediate)',
    'gauge.14mm': '14 mm',
    'gauge.15mm': '15 mm (intermediate)',
    'gauge.16mm': '16 mm (5/8 inch)',
    'gauge.17mm': '17 mm (intermediate)',
    'gauge.18mm': '18 mm (intermediate)',
    'gauge.19mm': '19 mm (3/4 inch)',
    'gauge.20mm': '20 mm (intermediate)',
    'gauge.22mm': '22 mm (7/8 inch)',
    'gauge.24mm': '24 mm (intermediate)',
    'gauge.25mm': '25.4 mm (1 inch)',
    'gauge.28mm': '28 mm',
    'gauge.32mm': '32 mm',
    'gauge.38mm': '38 mm',
    'gauge.50mm': '50.8 mm (2 inch)'  },
  fr: {
  // Document Metadata
  'page.title': 'Planificateur de calendrier d\'étirement des lobes | Poli International',
  'page.metaDescription': 'Planifiez l\'étirement progressif des lobes d\'oreille une taille à la fois, au rythme toléré par les tissus. Deux oreilles, étapes intermédiaires, bilans de préparation et journal daté.',

  // Header & Navigation
  'app.badge': 'Pratique du piercing en toute sécurité',
  'app.title': 'Planificateur d\'étirement des lobes d\'oreille',
  'app.subtitle': 'Planifiez l\'étirement progressif de vos lobes d\'oreille, une taille à la fois, au rythme toléré par vos tissus. Deux oreilles, paliers intermédiaires pas à pas, bilans de préparation et journal de suivi daté.',
  'lang.label': 'Langue',
  'lang.en': 'Anglais',
  'lang.fr': 'Français',
  'lang.it': 'Italien',
  'lang.de': 'Allemand',
  'lang.es': 'Espagnol',
  'lang.nl': 'Néerlandais',
  'lang.pt': 'Portugais',
  'theme.toggleDark': 'Activer le thème sombre',
  'theme.toggleLight': 'Activer le thème clair',
  
  // Ear Tabs
  'tab.left': 'Oreille gauche',
  'tab.right': 'Oreille droite',
  'tab.copy': 'Copier les paramètres de gauche à droite',
  'tab.copyToRight': 'Copier les paramètres de gauche à droite',
  'tab.copyToLeft': 'Copier les paramètres de droite à gauche',
  'tab.copySuccess': 'Paramètres de l\'oreille gauche copiés sur l\'oreille droite',
  
  // Plan Configuration
  'config.heading': 'Configuration du plan',
  'config.from': 'Jauge / Taille actuelle',
  'config.to': 'Jauge / Taille cible',
  'config.selectFrom': 'Sélectionnez la taille actuelle...',
  'config.selectTo': 'Sélectionnez la taille cible...',
  'config.startDate': 'Date d\'insertion de la taille actuelle',
  'config.startDateHelp': 'Utilisée pour calculer votre prochaine date d\'étirement au plus tôt en fonction du temps de cicatrisation.',
  'config.planBtn': 'Générer le plan étape par étape',
  'config.resetEar': 'Réinitialiser cette oreille',
  'config.confirmReset': 'Réinitialiser les paramètres et l\'historique d\'étirement de cette oreille ?',
  
  // Validation Errors
  'error.selectBoth': 'Veuillez sélectionner à la fois votre taille actuelle et votre taille cible.',
  'error.targetSmaller': 'La taille cible doit être supérieure à la taille actuelle.',
  'error.skipNotice': 'Le plan génère chaque étape intermédiaire. Ne sautez aucune taille lors de l\'achat ou de l\'étirement.',
  'error.refuseJump': 'Saut refusé : Vous ne pouvez pas passer directement de {current} à {target}. Sauter des tailles intermédiaires ({skipped}) risque de provoquer un blowout sévère et une déchirure tissulaire. L\'étirement doit obligatoirement progresser étape par étape. La prochaine étape autorisée est {next}.',
  'error.futureDate': 'La date ne peut pas être dans le futur. Veuillez sélectionner aujourd\'hui ou une date passée.',
  'error.enterCurrentFirst': 'Veuillez sélectionner votre taille actuelle dans la configuration du plan avant d\'enregistrer un étirement.',
  
  // Next Earliest Date Banner
  'nextDate.title': 'Date d\'étirement sécurisée au plus tôt',
  'nextDate.notSet': 'Définissez votre taille actuelle et la date d\'insertion ci-dessus pour calculer votre prochaine date au plus tôt.',
  'nextDate.readyNow': 'Le délai minimum de cicatrisation est écoulé ! Complétez le bilan de préparation ci-dessous avant de continuer.',
  'nextDate.reasonPrefix': 'Basé sur',
  'nextDate.weeksHealing': '{weeks} semaines de cicatrisation minimale pour {size} ({mm} mm)',
  'nextDate.sinceDate': 'depuis votre insertion du {date}.',
  'nextDate.delayNotice': 'Inclut {weeks} semaines de repos supplémentaires car le tissu a été marqué "non prêt" lors du bilan.',
  'nextDate.exportIcs': 'Ajouter au calendrier (.ics)',
  
  // Readiness Assessment
  'readiness.heading': 'Au rythme du tissu : Bilan de préparation',
  'readiness.intro': 'Une date calendaire n\'est qu\'un seuil au plus tôt. Les tissus ne s\'étirent en toute sécurité que lorsqu\'ils sont complètement détendus et cicatrisés. Vérifiez chaque condition honnêtement avant de toucher à la taille suivante :',
  'readiness.checkPain': 'Zéro douleur, sensibilité ou picotement en touchant ou en bougeant le lobe d\'oreille.',
  'readiness.checkRedness': 'Zéro rougeur, gonflement ou sensation de chaleur localisée autour de la fistule.',
  'readiness.checkDischarge': 'Zéro écoulement, croûte, saignement ou peau à vif suintante.',
  'readiness.checkMovement': 'Le bijou actuel tourne et coulisse d\'avant en arrière sans effort et sans aucun frottement.',
  'readiness.btnReady': 'Je suis prêt(e) à passer à l\'étape suivante',
  'readiness.btnNotYet': 'Pas encore prêt(e) (+3 semaines de repos)',
  'readiness.statusReady': 'Le tissu est confirmé prêt. Enregistrez votre prochain étirement ci-dessous lorsque vous insérez la nouvelle taille.',
  'readiness.statusNotYet': 'Pause de récupération de 3 semaines ajoutée. Le tissu doit se reposer jusqu\'à disparition complète de tout signe d\'irritation.',
  'readiness.statusPending': 'Bilan de préparation en attente. Confirmez les 4 critères avant d\'étirer.',
  'readiness.alertVerifyCriteria': 'Veuillez vérifier honnêtement les 4 critères avant de confirmer la préparation. Le tissu doit être exempt de tout inconfort et de tout frottement.',
  
  // Timeline Summary Stats
  'summary.stretches': 'étapes au total',
  'summary.minWeeks': 'semaines au minimum',
  'summary.minMonths': 'mois au minimum',
  'summary.whyWaitsGrow': 'Les temps d\'attente augmentent avec la taille car les plus grands diamètres étirent une circonférence tissulaire supérieure par millimètre (ΔC = π × Δd), nécessitant un remodelage progressif du collagène plus important.',
  
  // Step Timeline
  'timeline.heading': 'Séquence des tailles étape par étape',
  'timeline.currentBadge': 'Taille actuelle',
  'timeline.nextBadge': 'Prochaine étape',
  'timeline.targetBadge': 'Objectif',
  'timeline.waitLabel': 'Attendre {min}–{max} semaines de cicatrisation tissulaire avant d\'avancer',
  
  // Point of No Return Notice
  'largeSize.heading': 'Remarque importante sur les grandes tailles : Le point de non-retour (~12–13 mm / 1/2")',
  'largeSize.body': 'Au-delà d\'environ un demi-pouce (~12 mm à 13 mm / 00g à 1/2"), les lobes étirés ne se referment généralement plus d\'eux-mêmes. L\'élasticité tissulaire a des limites biologiques ; une fois ce point de non-retour dépassé, la reconstruction chirurgicale du lobe (reconstruction de lobe fendu ou étiré) est ce vers quoi les personnes se tournent généralement si elles souhaitent les refermer. Prévoyez votre objectif en gardant à l\'esprit cette modification permanente. Aucun étirement ne doit être considéré comme réversible.',
  'largeSize.alertActive': 'La taille cible atteint ou dépasse 12,0 mm (1/2") : Gardez en tête que le tissu étiré au-delà de ce diamètre nécessite généralement une reconstruction chirurgicale pour se refermer si vous décidez un jour de revenir en arrière.',
  
  // Warning Signs Section
  'warning.heading': 'Signes d\'alerte : Détection précoce et réaction immédiate',
  'warning.intro': 'Si vous rencontrez l\'une des complications suivantes, ARRÊTEZ immédiatement d\'étirer. Réduire la taille et laisser reposer est le seul moyen de protéger vos tissus.',
  'warning.blowoutTitle': 'Blowout : Éversion du bourrelet de la fistule (vue de face et coupe transversale)',
  'warning.blowoutDesc': 'Ce que c\'est : Une pression excessive force la délicate paroi interne de la fistule vers l\'arrière ou vers l\'avant hors du canal, la retournant comme une chaussette. Ce que l\'on voit de face : Un bourrelet rouge, surélevé et à vif dépassant autour du bord extérieur du plug. En coupe transversale : La paroi interne du canal a hernie derrière le bijou. Cela ne se résout JAMAIS en continuant d\'étirer. Réduisez immédiatement d\'une ou deux tailles, laissez reposer complètement et consultez un perceur professionnel.',
  'warning.tearTitle': 'Micro-déchirure / Fissure',
  'warning.tearDesc': 'Sensation vive de brûlure, saignement ou liquide suintant à l\'intérieur du tunnel pendant ou après l\'insertion. Indique des parois cellulaires lésées. Réduisez la taille ou retirez le bijou, traitez comme une plaie ouverte avec du sérum physiologique stérile et ne forcez jamais l\'insertion.',
  'warning.thinningTitle': 'Amincissement du lobe',
  'warning.thinningDesc': 'Le bord inférieur du lobe devient mince, pâle ou translucide sous le plug, causé par des augmentations de taille trop rapides, des poids trop lourds ou un apport sanguin irrégulier. Réduisez immédiatement la taille pour rétablir la circulation sanguine et permettre au tissu de retrouver sa densité.',
  'warning.painTitle': 'Douleur persistante / Pression continue',
  'warning.painDesc': 'Pulsations, brûlure serrée ou pincement aigu durant plus de quelques minutes. Un étirement sain doit s\'effectuer quasiment sans friction et sans aucune douleur. En cas de résistance, vous n\'êtes pas prêt.',
  'warning.actionBox': 'Action requise face à tout signe d\'alerte : Réduisez immédiatement de taille, insérez un bijou lisse à collerette unique, laissez reposer complètement le tissu et consultez un perceur professionnel.',
  
  // Inline SVG Diagrams
  'svg.blowoutAria': 'Schéma d\'un blowout de lobe d\'oreille montrant la vue de face et la coupe transversale',
  'svg.blowoutFront': 'Face : Bourrelet de tissu',
  'svg.blowoutCross': 'Coupe transversale',
  'svg.tearAria': 'Schéma d\'une déchirure et fissure de la fistule',
  'svg.tearMicro': 'Micro-déchirure',
  'svg.thinningAria': 'Schéma d\'amincissement du bord inférieur du lobe',
  'svg.thinningMargin': 'Marge critique fine (<2mm)',
  'svg.painAria': 'Schéma de tissu enflammé sous pression',
  'svg.painThrobbing': 'Pulsations / Pression',

  // Jewellery & Materials Section
  'jewellery.heading': 'Bijoux pour l\'étirement : Plugs, cônes et poids',
  'jewellery.plugsLabel': 'Plugs ou cônes :',
  'jewellery.plugsText': 'Les plugs lisses à collerette simple ou sans collerette avec des arêtes arrondies sont la référence pour l\'étirement. Ils répartissent la pression uniformément sur toute la fistule, sans pas de vis risquant de déchirer les tissus délicats.',
  'jewellery.tapersLabel': 'Outils de guidage uniquement :',
  'jewellery.tapersText': 'Les cônes d\'insertion (tapers) sont des outils de guidage réservés au perceur pendant l\'insertion ; ils ne doivent JAMAIS être utilisés pour forcer un étirement ni portés comme bijoux. Leur poids inégal agit comme un levier, désaxant le trou et provoquant un amincissement sévère du bas du lobe.',
  'jewellery.weightLabel': 'Poids et amincissement :',
  'jewellery.weightText': 'Les plugs lourds (acier plein, laiton, pierre) exercent une traction vers le bas qui amincit le pont tissulaire inférieur sur les grandes tailles. Utilisez des matériaux biocompatibles et légers pour préserver l\'épaisseur du lobe.',
  'jewellery.materialsLabel': 'Matériaux :',
  'jewellery.materialsText': 'Utilisez toujours des matériaux biocompatibles au poli miroir : BioFlex® body jewelry de qualité médicale (copolymère aléatoire PP-R), titane ASTM F-136 ou acier 316LVM pour implants.',
  'jewellery.linksIntro': 'Pour les mesures exactes, les conversions de calibres et le suivi de cicatrisation :',
  'jewellery.linkVisualizer': 'Visualiseur de taille de bijou',
  'jewellery.linkConverter': 'Convertisseur de calibres',
  'jewellery.linkTracker': 'Suivi de cicatrisation',
  
  // Stretch History Log
  'log.heading': 'Journal de suivi des étirements',
  'log.intro': 'Consignez la date réelle à laquelle chaque taille a été insérée et vos observations. Votre plan et votre prochaine date au plus tôt se recalculeront selon votre rythme effectif, constituant un historique concret à montrer à votre perceur.',
  'log.sizeLabel': 'Taille atteinte',
  'log.dateLabel': 'Date d\'étirement',
  'log.notesLabel': 'Observation / Réaction du tissu',
  'log.notesPlaceholder': 'ex. Inséré sans aucune résistance après une douche chaude ; aucune rougeur ni pincement.',
  'log.addBtn': 'Enregistrer cet étirement',
  'log.empty': 'Aucun étirement enregistré pour cette oreille. Consignez votre premier étirement ci-dessus pour démarrer votre historique personnel.',
  'log.thDate': 'Date d\'étirement',
  'log.thSize': 'Taille',
  'log.thMm': 'Millimètres',
  'log.thNotes': 'Observations',
  'log.thAction': 'Actions',
  'log.delete': 'Supprimer',
  'log.confirmDelete': 'Supprimer cette entrée du journal ?',
  
  // Print & Persistence
  'actions.print': 'Imprimer le plan / Enregistrer en PDF',
  'actions.clearAll': 'Effacer toutes les données stockées',
  'actions.confirmClear': 'Êtes-vous sûr(e) de vouloir effacer tous les plans d\'oreille et journaux d\'étirement enregistrés dans ce navigateur ?',
  'print.disclaimer': 'Relevé du journal d\'étirement et estimations chronologiques déclarés par l\'utilisateur. Ce document reflète uniquement les saisies de l\'utilisateur.',
  
  // Footer Disclaimer
  'disclaimer.title': 'Note importante sur les variations individuelles',
  'disclaimer.body': 'Ces délais représentent des intervalles minimaux recommandés, basés sur des tissus sains et la pratique professionnelle établie du piercing. La synthèse du collagène et l\'élasticité tissulaire varient considérablement d\'une personne à l\'autre. Le tissu cicatriciel, les traumatismes antérieurs ou le froid exigent des délais prolongés. N\'étirez jamais un tissu irrité. Consultez toujours un perceur professionnel en cas de doute.',

  // Calendar Export
  'ics.summary': 'Bilan de préparation d\'étirement ({earLabel} : {nextSizeDisplay})',
  'ics.description': 'Évaluation de préparation pour {earLabel} vers {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nPoints à vérifier avant toute tentative :\\n- Zéro douleur ou picotement\\n- Zéro rougeur ou chaleur\\n- Zéro écoulement ou croûte\\n- Le bijou tourne et bouge librement sans résistance\\n\\nMotif : {reason}\\n\\nSi un seul contrôle échoue, ne forcez pas l\'insertion. Réduisez de taille ou laissez reposer.',

  // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Foire Aux Questions & Conseils d\'Experts',
    'faq.subtitle': 'Réponses claires sur la technique d\'étirement, l\'hygiène quotidienne et la prévention des complications',
    'faq.filterAll': 'Toutes les questions',
    'faq.filterStretching': 'Technique d\'étirement',
    'faq.filterCare': 'Soins quotidiens & Nettoyage',
    'faq.filterTroubleshooting': 'Dépannage & Santé',
    'faq.q1': 'Comment savoir si mes lobes sont réellement prêts pour la taille suivante ?',
    'faq.a1': 'Le tissu n\'est prêt que lorsqu\'il est parfaitement cicatrisé, détendu et souple. Votre bijou actuel doit glisser d\'avant en arrière sans effort et tourner sans pincement, résistance ni croûte. Le temps d\'attente minimal n\'est qu\'une référence biologique de base ; si vous ressentez une tension, une brûlure ou un échauffement en essayant la taille suivante, arrêtez immédiatement et accordez 2 à 4 semaines de repos supplémentaires.',
    'faq.q2': 'Pourquoi les cônes (tapers) sont-ils déconseillés et que faut-il utiliser ?',
    'faq.a2': 'Les cônes agissent comme des cales mécaniques qui forcent facilement le tissu au-delà de sa limite naturelle, provoquant micro-déchirures et blowouts. De plus, les porter comme bijoux crée un effet de levier inégal qui affine dangereusement le bord inférieur du lobe. Privilégiez l\'étirement naturel (dead-stretching) avec des plugs lisses à simple collerette en verre borosilicate, en BioFlex® body jewelry (copolymère aléatoire PP-R) ou en titane de grade implantable ASTM F-136.',
    'faq.q3': 'Que sont les demi-tailles (7g, 1g, 9 mm, 11 mm) et pourquoi sont-elles recommandées ?',
    'faq.a3': 'Les échelles de jauge classiques contiennent des écarts brusques et dangereux : par exemple, passer du 2g (6,0 mm) au 0g (8,0 mm) représente un bond de 2,0 mm (+33 % d\'expansion en un jour). Utiliser des demi-tailles intermédiaires (comme le 1g / 7,0 mm ou le 9 mm entre 0g et 00g) limite chaque étape à 0,5 mm ou 1,0 mm, préservant la vascularisation et évitant un blowout irréversible.',
    'faq.q4': 'Comment nettoyer mes lobes étirés et mes bijoux au quotidien ?',
    'faq.a4': 'Une fois le lobe bien cicatrisé, retirez vos plugs sous la douche chaude quotidienne pour rincer la fistule à l\'eau tiède propre avec un nettoyant doux au pH neutre sans parfum. Lavez vos bijoux séparément et séchez soigneusement oreilles et bijoux avant la réinsertion. N\'utilisez jamais d\'alcool à 70°, d\'eau oxygénée ni d\'antiseptiques agressifs qui assèchent, fissurent et enflamment les tissus sains.',
    'faq.q5': 'Quelles huiles utiliser pour les massages et quand peut-on commencer ?',
    'faq.a5': 'Des massages quotidiens de 3 à 5 minutes avec de l\'huile pure de jojoba pressée à froid, d\'émeu ou de vitamine E stimulent la microcirculation, assouplissent les fibres cicatricielles et renforcent l\'élasticité du collagène. Réalisez les massages uniquement sur un tissu parfaitement cicatrisé et intact. N\'appliquez jamais d\'huile ni de baume sur un étirement frais, une micro-déchirure ou une peau irritée.',
    'faq.q6': 'Qu\'est-ce qui provoque les odeurs de lobe et comment les éliminer ?',
    'faq.a6': 'L\'odeur du lobe provient de l\'accumulation naturelle de cellules mortes desquamées (kératine) et de sébum piégés dans le tunnel tiède entre le bijou et la peau. Prévenez-la en retirant vos plugs cicatrisés lors de votre douche quotidienne, en lavant soigneusement la fistule, en séchant parfaitement et en choisissant des matériaux non poreux comme le verre, le titane ou le BioFlex® body jewelry.',
    'faq.q7': 'Que faire immédiatement en cas de douleur, de saignement ou de déchirure ?',
    'faq.a7': 'La douleur n\'est jamais normale lors de l\'étirement. En cas de pincement aigu, de pulsation ou de saignement, retirez immédiatement le bijou et descendez d\'une ou deux tailles pour soulager la tension sur le tissu lésé. Rincez deux fois par jour au sérum physiologique stérile (chlorure de sodium à 0,9 %), traitez la zone comme une plaie ouverte et attendez au moins 2 à 3 mois avant toute nouvelle tentative.',
    'faq.q8': 'Comment reconnaître et traiter un blowout du lobe ?',
    'faq.a8': 'Un blowout se produit lorsqu\'une pression excessive expulse la muqueuse interne de la fistule vers l\'extérieur, formant un bourrelet de chair rouge et boursouflé à l\'arrière ou à l\'avant du trou. Si cela arrive, réduisez immédiatement la taille de 1 à 2 crans, insérez le plug réduit depuis le côté où le tissu a débordé pour l\'aider à regagner l\'intérieur, évitez les huiles et consultez un perceur professionnel reconnu.',
    'faq.q9': 'Quel est le « point de non-retour » où le lobe ne se referme plus ?',
    'faq.a9': 'Pour la plupart des anatomies, le point de non-retour se situe autour de 12 mm à 13 mm (environ 00g à 1/2 pouce). Au-delà de ce seuil, les fibres élastiques du derme subissent une altération permanente et les lobes ne rétréciront généralement plus jusqu\'aux tailles de boucles d\'oreilles standard (18g-16g). Quiconque dépasse 10-12 mm doit savoir qu\'une reconstruction chirurgicale du lobe peut être requise pour les refermer.',
    'faq.q10': 'Puis-je dormir sans mes plugs pour préserver la santé de mes lobes ?',
    'faq.a10': 'Dormir sans bijou (« naked sleeping ») est bénéfique pour stimuler la circulation sanguine et préserver l\'épaisseur de la bordure du lobe aux grandes tailles (généralement à partir de 2g / 6,0 mm). Toutefois, commencez uniquement lorsqu\'une taille est stable depuis au moins 2 à 3 mois. Entraînez vos oreilles progressivement : commencez par 30 minutes par jour, puis quelques heures, avant de tenter une nuit complète, en vérifiant que le plug se réinsère sans aucune résistance.',

      // Extended Protocols & Features
    'rehab.cardTitle': 'Planificateur de Réduction & Réhabilitation',
    'rehab.intro': 'En cas de douleur, déchirure, saignement ou blowout, réduire immédiatement la tension tissulaire est essentiel pour préserver la vascularisation et prévenir les cicatrices irréversibles.',
    'rehab.issueLabel': 'Complication Observée',
    'rehab.issueSelect': 'Sélectionner la complication...',
    'rehab.issueBlowout': 'Blowout (bourrelet de tissu faisant saillie à l\'arrière du bijou)',
    'rehab.issueTear': 'Micro-déchirure ou saignement après insertion',
    'rehab.issuePain': 'Douleur lancinante persistante, chaleur ou rougeur',
    'rehab.issueThinning': 'Amincissement du bord inférieur ou nécrose par pression',
    'rehab.actionBtn': 'Calculer le Plan de Rétrogradation',
    'rehab.recommendedSize': 'Taille de Réduction Recommandée',
    'rehab.recommendedRest': 'Durée de Pause de Réhabilitation',
    'rehab.restDetails': '8 à 12 semaines sans aucune tension d\'étirement avec bains de sérum physiologique à 0,9 % de chlorure de sodium.',
    'rehab.protocolHeading': 'Protocole de Réhabilitation d\'Urgence',
    'rehab.step1': 'Retirez le bijou sous tension et insérez sans forcer un plug en verre simple collerette ou en titane ASTM F-136 de 1 à 2 tailles inférieures.',
    'rehab.step2': 'Effectuez des bains tièdes de sérum physiologique stérile à 0,9 % de chlorure de sodium deux fois par jour pendant 5 à 10 minutes.',
    'rehab.step3': 'N\'appliquez aucune huile sur les plaies ouvertes avant cicatrisation complète. Une fois refermé, massez doucement à l\'huile de jojoba chaque jour.',
    'rehab.step4': 'Conservez cette taille réduite pendant au moins 8 à 12 semaines avant de réévaluer la maturité tissulaire auprès d\'un pierceur professionnel établi.',
    'rehab.applyBtn': 'Appliquer la Réduction à cette Oreille',
    'rehab.appliedSuccess': 'Réduction à {size} et pause de réhabilitation appliquées à {earLabel}.',
    'rehab.noSizeWarning': 'Veuillez d\'abord sélectionner votre taille actuelle dans la configuration du plan ci-dessus.',
    'halfsize.toggleLabel': 'Imposer les Demi-Tailles (Paliers de 0,5 mm à 1,0 mm)',
    'halfsize.helpText': 'Impose les paliers intermédiaires (comme 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) pour éviter les sauts traumatisants de 2,0 mm.',
    'halfsize.badge': 'Étape Demi-Taille',
    'halfsize.warningSkipHalf': 'L\'application des demi-tailles est active. Sauter la demi-taille intermédiaire {halfSize} n\'est pas autorisé. Veuillez d\'abord étirer à {halfSize}.',
    'naked.cardTitle': 'Protocole de Sommeil sans Bijou & Conditionnement',
    'naked.intro': 'Pour les tailles de 2g (6,0 mm) et plus, habituer vos lobes à dormir sans bijou soulage la pression, rétablit la microcirculation et préserve l\'épaisseur du bord inférieur.',
    'naked.eligibilityNotice': 'L\'entraînement au sommeil sans bijou est recommandé pour les fistules complètement cicatrisées de 2g (6,0 mm) ou plus ayant reposé au moins 8 à 12 semaines.',
    'naked.currentPhaseLabel': 'Phase de Conditionnement',
    'naked.phase1Title': 'Phase 1 : Pauses Diurnes (Semaines 1–2)',
    'naked.phase1Desc': 'Retirez les bijoux 30 à 45 minutes lors de la détente en soirée. Massez à l\'huile de jojoba et réinsérez.',
    'naked.phase2Title': 'Phase 2 : Conditionnement du Soir (Semaines 3–4)',
    'naked.phase2Desc': 'Laissez les lobes nus 1 à 2 heures en soirée avant le coucher. Réinsérez le plug lubrifié pour dormir.',
    'naked.phase3Title': 'Phase 3 : Heures Nues Prolongées (Semaines 5–6)',
    'naked.phase3Desc': 'Laissez les lobes nus pendant 3 à 4 heures. Les plugs doivent se réinsérer en douceur sans aucune résistance.',
    'naked.phase4Title': 'Phase 4 : Première Nuit Complète (Semaines 7–8)',
    'naked.phase4Desc': 'Dormez sans bijou pendant 6 à 8 heures. Au matin, massez à l\'huile et insérez délicatement des plugs en verre simple collerette.',
    'naked.phase5Title': 'Phase 5 : Habitude Nocturne (Entretien)',
    'naked.phase5Desc': 'Dormez nu chaque nuit pour éviter les accrochages, préserver l\'élasticité et reconstituer le collagène dermique.',
    'naked.logTodayBtn': 'Enregistrer la Séance Nue du Jour',
    'naked.loggedSuccess': 'Séance de sommeil sans bijou enregistrée pour {earLabel} !',
    'naked.sessionsCompleted': 'Total des Séances Nues Réalisées : {count}',
    'log.rimMarginLabel': 'Marge du Bord Inférieur (mm, facultatif)',
    'log.rimMarginPlaceholder': 'ex. 5.0',
    'log.pliabilityLabel': 'Souplesse de la Fistule',
    'log.pliabilitySelect': 'Sélectionner la texture tissulaire...',
    'log.pliabilitySoft': 'Souple & élastique',
    'log.pliabilityModerate': 'Légère fermeté / petit bourrelet',
    'log.pliabilityRigid': 'Tissu cicatriciel dense / rigide',
    'log.sensationLabel': 'Sensation Tissulaire',
    'log.sensationNormal': 'Confortable / aucune sensibilité',
    'log.sensationTender': 'Sensible au toucher léger',
    'log.sensationIrritated': 'Sec, démangeaisons ou picotements',
    'log.thRim': 'Marge Inférieure',
    'log.thPliability': 'Santé Tissulaire',
    'log.thinningAlertTitle': 'Alerte Amincissement du Lobe',
    'log.thinningAlertDesc': 'Une marge inférieure de {mm} mm indique un tissu aminci. Arrêtez tout étirement, dormez sans bijou ou réduisez la taille, et consultez un pierceur professionnel établi.',
    'log.rapidThinningAlert': 'Attention : L\'épaisseur du bord inférieur a diminué de {drop} mm depuis l\'enregistrement précédent. Un amincissement rapide indique une tension excessive.',

    'gauge.18g': '18g - 1,0 mm',
  'gauge.16g': '16g - 1,2 mm',
  'gauge.14g': '14g - 1,6 mm',
  'gauge.12g': '12g - 2,0 mm',
  'gauge.10g': '10g - 2,4 mm',
  'gauge.8g': '8g - 3,2 mm',
  'gauge.7g': '7g - 3,5 mm (demi-taille)',
  'gauge.6g': '6g - 4,0 mm',
  'gauge.5g': '5g - 4,5 mm (demi-taille)',
  'gauge.4g': '4g - 5,0 mm',
  'gauge.3g': '3g - 5,5 mm (demi-taille)',
  'gauge.2g': '2g - 6,0 mm',
  'gauge.1g': '1g - 7,0 mm (demi-taille)',
  'gauge.0g': '0g - 8,0 mm',
  'gauge.9mm': '9 mm (intermédiaire)',
  'gauge.00g': '00g - 10,0 mm',
  'gauge.11mm': '11 mm (intermédiaire)',
  'gauge.12mm': '12 mm',
  'gauge.13mm': '13 mm (intermédiaire)',
  'gauge.14mm': '14 mm',
  'gauge.15mm': '15 mm (intermédiaire)',
  'gauge.16mm': '16 mm (5/8 de pouce)',
  'gauge.17mm': '17 mm (intermédiaire)',
  'gauge.18mm': '18 mm (intermédiaire)',
  'gauge.19mm': '19 mm (3/4 de pouce)',
  'gauge.20mm': '20 mm (intermédiaire)',
  'gauge.22mm': '22 mm (7/8 de pouce)',
  'gauge.24mm': '24 mm (intermédiaire)',
  'gauge.25mm': '25,4 mm (1 pouce)',
  'gauge.28mm': '28 mm',
  'gauge.32mm': '32 mm',
  'gauge.38mm': '38 mm',
  'gauge.50mm': '50,8 mm (2 pouces)'
  },
  it: {
  // Document Metadata
  'page.title': 'Pianificatore della dilatazione dei lobi | Poli International',
  'page.metaDescription': 'Pianifica la dilatazione graduale dei lobi un passo alla volta, al ritmo tollerato dal tessuto. Due orecchi, misure intermedie, controlli di idoneità e diario datato.',

  // Header & Navigation
  'app.badge': 'Pratica professionale di piercing sicuro',
  'app.title': 'Pianificatore della dilatazione dei lobi',
  'app.subtitle': 'Pianifica la dilatazione graduale dei lobi, una misura alla volta, al ritmo naturale tollerato dal tuo tessuto. Gestione per entrambi i lobi, passaggi intermedi progressivi, verifiche di idoneità e diario delle dilatazioni.',
  'lang.label': 'Lingua',
  'lang.en': 'Inglese',
  'lang.fr': 'Francese',
  'lang.it': 'Italiano',
  'lang.de': 'Tedesco',
  'lang.es': 'Spagnolo',
  'lang.nl': 'Olandese',
  'lang.pt': 'Portoghese',
  'theme.toggleDark': 'Passa al tema scuro',
  'theme.toggleLight': 'Passa al tema chiaro',
  
  // Ear Tabs
  'tab.left': 'Orecchio sinistro',
  'tab.right': 'Orecchio destro',
  'tab.copy': 'Copia impostazioni da sinistra a destra',
  'tab.copyToRight': 'Copia impostazioni da sinistra a destra',
  'tab.copyToLeft': 'Copia impostazioni da destra a sinistra',
  'tab.copySuccess': 'Impostazioni dell\'orecchio sinistro copiate sull\'orecchio destro',
  
  // Plan Configuration
  'config.heading': 'Configurazione del piano',
  'config.from': 'Misura attuale (Gauge / mm)',
  'config.to': 'Misura desiderata (Gauge / mm)',
  'config.selectFrom': 'Seleziona la misura attuale...',
  'config.selectTo': 'Seleziona la misura desiderata...',
  'config.startDate': 'Data di inserimento della misura attuale',
  'config.startDateHelp': 'Utilizzata per calcolare la prima data utile per la prossima dilatazione in base ai tempi di guarigione.',
  'config.planBtn': 'Genera piano passo dopo passo',
  'config.resetEar': 'Reimposta questo orecchio',
  'config.confirmReset': 'Reimpostare la configurazione e la cronologia di dilatazione per questo orecchio?',
  
  // Validation Errors
  'error.selectBoth': 'Seleziona sia la misura attuale che la misura desiderata.',
  'error.targetSmaller': 'La misura desiderata deve essere maggiore di quella attuale.',
  'error.skipNotice': 'Il piano genera ogni singolo passaggio intermedio. Non saltare le misure quando acquisti o dilati.',
  'error.refuseJump': 'Salto non consentito: non puoi passare direttamente da {current} a {target}. Saltare le misure intermedie ({skipped}) comporta gravi rischi di blowout e lacerazione del tessuto. La dilatazione deve procedere rigorosamente un passaggio alla volta. Il prossimo passaggio consentito è {next}.',
  'error.futureDate': 'La data non può essere futura. Seleziona la data odierna o una data passata.',
  'error.enterCurrentFirst': 'Seleziona prima la tua misura attuale nella configurazione del piano per registrare una dilatazione.',
  
  // Next Earliest Date Banner
  'nextDate.title': 'Prima data utile per dilatare in sicurezza',
  'nextDate.notSet': 'Imposta la misura attuale e la data di inserimento sopra per calcolare la data minima consigliata.',
  'nextDate.readyNow': 'Il periodo minimo di guarigione è trascorso! Completa la verifica di idoneità qui sotto prima di procedere.',
  'nextDate.reasonPrefix': 'In base a',
  'nextDate.weeksHealing': '{weeks} settimane minime di guarigione per {size} ({mm} mm)',
  'nextDate.sinceDate': 'dal tuo inserimento del {date}.',
  'nextDate.delayNotice': 'Include {weeks} settimane di riposo supplementare poiché il tessuto è stato contrassegnato come "non pronto".',
  'nextDate.exportIcs': 'Aggiungi al calendario (.ics)',
  
  // Readiness Assessment
  'readiness.heading': 'Il ritmo del tessuto: Verifica di idoneità',
  'readiness.intro': 'La data sul calendario è solo una soglia minima temporale. Il tessuto si dilata in modo sicuro solo quando è completamente rilassato e rigenerato. Verifica onestamente ciascun punto prima di provare la misura successiva:',
  'readiness.checkPain': 'Assenza totale di dolore, indolenzimento o bruciore toccando o muovendo il lobo.',
  'readiness.checkRedness': 'Assenza totale di rossore, gonfiore o calore localizzato attorno alla fistola.',
  'readiness.checkDischarge': 'Assenza totale di secrezioni, crosticine, sanguinamento o cute umida e lesa.',
  'readiness.checkMovement': 'Il gioiello attuale ruota e scorre avanti e indietro agevolmente con zero attrito.',
  'readiness.btnReady': 'Tessuto pronto per avanzare',
  'readiness.btnNotYet': 'Non ancora pronto (+3 settimane di riposo)',
  'readiness.statusReady': 'Tessuto verificato pronto. Registra la prossima dilatazione qui sotto quando inserisci la nuova misura.',
  'readiness.statusNotYet': 'Aggiunta pausa di recupero di 3 settimane. Il tessuto deve riposare fino alla totale scomparsa delle irritazioni.',
  'readiness.statusPending': 'Verifica di idoneità in sospeso. Conferma tutti e 4 i punti prima di dilatare.',
  'readiness.alertVerifyCriteria': 'Verifica con sincerità tutti e 4 i criteri prima di confermare. Il tessuto deve essere privo di qualsiasi fastidio o attrito.',
  
  // Timeline Summary Stats
  'summary.stretches': 'passaggi totali',
  'summary.minWeeks': 'settimane minime',
  'summary.minMonths': 'mesi minimi',
  'summary.whyWaitsGrow': 'I tempi di attesa aumentano con le dimensioni poiché diametri maggiori allungano una circonferenza tissutale superiore per ogni millimetro (ΔC = π × Δd), richiedendo un rimodellamento del collagene progressivamente più lungo.',
  
  // Step Timeline
  'timeline.heading': 'Sequenza delle misure passo dopo passo',
  'timeline.currentBadge': 'Misura attuale',
  'timeline.nextBadge': 'Prossimo passaggio',
  'timeline.targetBadge': 'Obiettivo',
  'timeline.waitLabel': 'Attendi {min}–{max} settimane di tessuto guarito prima di avanzare',
  
  // Point of No Return Notice
  'largeSize.heading': 'Nota trasparente sulle grandi misure: Il punto di non ritorno (~12–13 mm / 1/2")',
  'largeSize.body': 'Al di sopra di circa mezzo pollice (~12 mm a 13 mm / 00g a 1/2"), i lobi dilatati generalmente non tornano più alle dimensioni originarie da soli. L\'elasticità del tessuto ha limiti biologici precisi; una volta superato questo punto di non ritorno, la ricostruzione chirurgica del lobo (lobioplastica) è la soluzione a cui ci si affida se si desidera richiuderli. Pianifica il tuo obiettivo tenendo conto di questa alterazione permanente. Nessuna dilatazione deve essere data per reversibile.',
  'largeSize.alertActive': 'La misura obiettivo raggiunge o supera i 12,0 mm (1/2"): Ricorda che il tessuto oltre questo diametro richiede comunemente un intervento chirurgico per richiudersi se deciderai di tornare indietro.',
  
  // Warning Signs Section
  'warning.heading': 'Segnali di allarme: Riconoscimento precoce e azioni immediate',
  'warning.intro': 'Se riscontri una qualsiasi delle seguenti complicazioni, FERMATI immediatamente. Ridurre la misura e lasciare riposare il tessuto è l\'unico modo per preservare la salute del lobo.',
  'warning.blowoutTitle': 'Blowout: Eversione della fistola (vista frontale e sezione trasversale)',
  'warning.blowoutDesc': 'Che cos\'è: Una pressione eccessiva spinge la delicata parete interna della fistola all\'indietro o in avanti fuori dal foro, rovesciandola come un calzino. Come appare frontalmente: Un labbro di tessuto rosso, gonfio e vivo che sporge lungo il bordo esterno del plug. In sezione trasversale: La parete del canale interno è erniata dietro al gioiello. NON si risolve continuando a dilatare. Riduci immediatamente di 1–2 misure, concedi riposo totale e consulta un piercer professionista.',
  'warning.tearTitle': 'Micro-lacerazione / Ragade',
  'warning.tearDesc': 'Bruciore acuto, sanguinamento o fuoriuscita di siero all\'interno del canale durante o dopo l\'inserimento. Indica danni alla parete cellulare. Riduci la misura o togli il gioiello, tratta come una ferita aperta con soluzione fisiologica sterile e non forzare mai.',
  'warning.thinningTitle': 'Assottigliamento del lobo',
  'warning.thinningDesc': 'Il bordo inferiore del lobo diventa sottile, pallido o traslucido sotto il plug, a causa di passaggi troppo rapidi, pesi eccessivi o circolazione sanguigna compromessa. Riduci subito la misura per ripristinare il flusso sanguigno e consentire al tessuto di recuperare spessore.',
  'warning.painTitle': 'Dolore persistente / Pressione continua',
  'warning.painDesc': 'Pulsazione, forte bruciore o fitte che durano più di qualche minuto. Una dilatazione corretta deve avvenire quasi senza attrito e con zero dolore. Se avverti resistenza, il tessuto non è pronto.',
  'warning.actionBox': 'Azione necessaria per qualsiasi segnale di allarme: Riduci immediatamente la misura, inserisci gioielli lisci a svasatura singola, lascia riposare completamente il tessuto e consulta un piercer professionista.',
  
  // Inline SVG Diagrams
  'svg.blowoutAria': 'Diagramma di blowout del lobo con vista frontale e sezione trasversale',
  'svg.blowoutFront': 'Vista frontale: Labbro di tessuto',
  'svg.blowoutCross': 'Sezione trasversale',
  'svg.tearAria': 'Diagramma di lacerazione e ragade della fistola',
  'svg.tearMicro': 'Micro-lacerazione',
  'svg.thinningAria': 'Diagramma di assottigliamento del margine inferiore del lobo',
  'svg.thinningMargin': 'Margine critico sottile (<2mm)',
  'svg.painAria': 'Diagramma di tessuto infiammato sotto pressione',
  'svg.painThrobbing': 'Pulsazione / Pressione',

  // Jewellery & Materials Section
  'jewellery.heading': 'Gioielli per la dilatazione: Plug, taper e pesi',
  'jewellery.plugsLabel': 'Plug vs. Taper:',
  'jewellery.plugsText': 'I plug lisci a svasatura singola o senza svasatura con bordi arrotondati sono lo standard per la dilatazione. Distribuiscono la pressione in modo uniforme lungo l\'intera fistola senza filettature che possono tagliare i tessuti.',
  'jewellery.tapersLabel': 'Solo strumenti guida:',
  'jewellery.tapersText': 'I taper sono strumenti di inserimento per il piercer e non devono MAI essere usati per forzare una dilatazione né indossati come gioielli. Il loro peso asimmetrico fa leva sul foro, spostandolo e causando un grave assottigliamento della base del lobo.',
  'jewellery.weightLabel': 'Pesi e assottigliamento:',
  'jewellery.weightText': 'I plug pesanti (acciaio massiccio, ottone, pietra) creano una trazione costante verso il basso che assottiglia il ponte di tessuto inferiore alle misure più grandi. Usa materiali biocompatibili e leggeri per mantenere lo spessore del lobo.',
  'jewellery.materialsLabel': 'Materiali:',
  'jewellery.materialsText': 'Utilizza sempre materiali biocompatibili con finitura a specchio: BioFlex® body jewelry di grado medicale (copolimero casuale PP-R), titanio ASTM F-136 o acciaio implantare 316LVM.',
  'jewellery.linksIntro': 'Per le misurazioni esatte, le tabelle di conversione e il monitoraggio:',
  'jewellery.linkVisualizer': 'Visualizzatore misure gioielli',
  'jewellery.linkConverter': 'Convertitore di calibri',
  'jewellery.linkTracker': 'Diario di guarigione',
  
  // Stretch History Log
  'log.heading': 'Registro delle dilatazioni',
  'log.intro': 'Registra quando hai inserito ciascuna misura e le reazioni osservate. Il piano e la prima data utile si aggiorneranno in base al tuo ritmo effettivo, creando un diario affidabile da mostrare al tuo piercer.',
  'log.sizeLabel': 'Misura raggiunta',
  'log.dateLabel': 'Data dilatazione',
  'log.notesLabel': 'Osservazione / Risposta del tessuto',
  'log.notesPlaceholder': 'es. Inserito senza alcuna resistenza dopo una doccia calda; nessun rossore né fastidio.',
  'log.addBtn': 'Registra questa dilatazione',
  'log.empty': 'Nessuna dilatazione registrata per questo orecchio. Registra il tuo primo passaggio sopra per avviare il tuo diario personale.',
  'log.thDate': 'Data dilatazione',
  'log.thSize': 'Misura',
  'log.thMm': 'Millimetri',
  'log.thNotes': 'Osservazioni',
  'log.thAction': 'Azioni',
  'log.delete': 'Elimina',
  'log.confirmDelete': 'Eliminare questa voce dal registro?',
  
  // Print & Persistence
  'actions.print': 'Stampa piano / Salva in PDF',
  'actions.clearAll': 'Cancella tutti i dati memorizzati',
  'actions.confirmClear': 'Sei sicuro di voler cancellare tutti i piani dei lobi e i registri salvati in questo browser?',
  'print.disclaimer': 'Riepilogo del registro di dilatazione e stime temporali inserite dall\'utente. Questo documento riflette unicamente i dati forniti dall\'utente.',
  
  // Footer Disclaimer
  'disclaimer.title': 'Nota fondamentale sulle differenze individuali',
  'disclaimer.body': 'Queste tempistiche rappresentano intervalli minimi consigliati basati su tessuti sani e sulla prassi professionale consolidata del piercing. La sintesi del collagene e l\'elasticità tissutale variano sensibilmente da individuo a individuo. Tessuto cicatriziale, traumi pregressi o climi freddi richiedono tempi maggiori. Non dilatare mai tessuti irritati. In caso di dubbi, consulta sempre un piercer professionista.',

  // Calendar Export
  'ics.summary': 'Verifica idoneità dilatazione ({earLabel}: {nextSizeDisplay})',
  'ics.description': 'Valutazione di idoneità per {earLabel} verso {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nCriteri da verificare prima del tentativo:\\n- Nessun dolore o bruciore\\n- Nessun rossore o calore\\n- Nessuna secrezione o crosticina\\n- Il gioiello ruota e scorre liberamente senza attrito\\n\\nMotivo: {reason}\\n\\nSe anche un solo controllo fallisce, non forzare l\'inserimento. Riduci la misura o lascia riposare.',

  // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Domande Frequenti & Guida degli Esperti',
    'faq.subtitle': 'Risposte chiare su tecniche di dilatazione, igiene quotidiana e prevenzione delle complicazioni',
    'faq.filterAll': 'Tutte le domande',
    'faq.filterStretching': 'Tecnica di dilatazione',
    'faq.filterCare': 'Cura quotidiana & Pulizia',
    'faq.filterTroubleshooting': 'Risoluzione problemi & Salute',
    'faq.q1': 'Come posso sapere se i miei lobi sono davvero pronti per la misura successiva?',
    'faq.a1': 'Il tessuto è pronto solo quando è completamente guarito, rilassato e flessibile. Il gioiello attuale deve scorrere avanti e indietro senza sforzo e ruotare senza pizzicori, resistenze o crosticine. Le settimane minime sono solo un riferimento biologico di partenza; se avvertite tensione, bruciore o calore durante l\'inserimento della misura successiva, fermatevi subito e attendete da 2 a 4 settimane aggiuntive.',
    'faq.q2': 'Perché i taper (coni) sono sconsigliati e cosa si dovrebbe usare al loro posto?',
    'faq.a2': 'I coni agiscono come cunei che forzano il tessuto oltre la sua naturale elasticità, causando micro-lacerazioni e blowout. Inoltre, indossarli come gioielli crea una leva sbilanciata che assottiglia il bordo inferiore del lobo. Utilizzate invece il dead-stretching con plug lisci a svasatura singola in vetro borosilicato, BioFlex® body jewelry (copolimero casuale PP-R) o titanio da impianto ASTM F-136.',
    'faq.q3': 'Cosa sono le mezze misure (7g, 1g, 9 mm, 11 mm) e perché sono raccomandate?',
    'faq.a3': 'Le tabelle tradizionali presentano salti bruschi e rischiosi: ad esempio, passare da 2g (6,0 mm) a 0g (8,0 mm) comporta un salto di ben 2,0 mm (+33% di espansione in un solo colpo). Le mezze misure intermedie (come 1g / 7,0 mm o 9 mm tra 0g e 00g) limitano ogni passaggio a 0,5 mm-1,0 mm, proteggendo la vascolarizzazione del tessuto ed evitando blowout irreversibili.',
    'faq.q4': 'Come pulire quotidianamente i lobi dilatati e i gioielli?',
    'faq.a4': 'A guarigione completata, rimuovete i plug durante la doccia calda quotidiana per sciacquare il canale con acqua tiepida e un detergente delicato a pH neutro senza profumo. Lavate i gioielli a parte e asciugate con cura sia i lobi che i plug prima di reinserirli. Non utilizzate mai alcol denaturato, acqua ossigenata o disinfettanti aggressivi che disidratano, fessurano e infiammano la pelle sana.',
    'faq.q5': 'Quali oli sono consigliati per i massaggi ai lobi e quando si può iniziare?',
    'faq.a5': 'Massaggi quotidiani di 3-5 minuti con olio puro di jojoba spremuto a freddo, olio di emù o vitamina E stimolano la microcircolazione, ammorbidiscono il tessuto cicatriziale e favoriscono l\'elasticità del collagene. Eseguite i massaggi solo su pelle perfettamente guarita e integra. Non applicate mai oli o balsami su dilatazioni recenti, micro-lacerazioni o tessuti irritati.',
    'faq.q6': 'Cosa causa il cattivo odore del lobo e come prevenirlo?',
    'faq.a6': 'L\'odore del lobo è dovuto al naturale accumulo di cellule morte desquamate (cheratina) e sebo cutaneo intrappolati nel canale caldo tra gioiello e pelle. Si previene rimuovendo i plug guariti durante la doccia quotidiana, lavando accuratamente la fistola, asciugando completamente e preferendo materiali non porosi come vetro, titanio o BioFlex® body jewelry.',
    'faq.q7': 'Cosa fare immediatamente se la dilatazione fa male, sanguina o si lacera?',
    'faq.a7': 'Il dolore non è mai normale durante la dilatazione. Se avvertite fitte acute, pulsazioni o sanguinamento, rimuovete subito il gioiello e scendete di 1-2 misure per alleggerire la tensione sul tessuto danneggiato. Detergete due volte al giorno con soluzione salina sterile (cloruro di sodio allo 0,9%), trattate la zona come una ferita aperta e non tentate una nuova dilatazione per almeno 2-3 mesi.',
    'faq.q8': 'Come riconoscere e gestire un blowout del lobo?',
    'faq.a8': 'Un blowout si verifica quando una pressione eccessiva spinge la mucosa interna della fistola all\'esterno, formando un labbro circolare di tessuto rosso e infiammato dietro o davanti al foro. Se si verifica, riducete immediatamente la misura di 1-2 gradini, inserite il plug dal lato in cui il tessuto è fuoriuscito per guidarlo delicatamente all\'interno, evitate oli e consultate un piercer professionista qualificato.',
    'faq.q9': 'Cos\'è il "punto di non ritorno" in cui i lobi non possono più richiudersi?',
    'faq.a9': 'Nella maggior parte delle anatomie, il punto di non ritorno si colloca tra 12 mm e 13 mm (circa 00g - 1/2 pollice). Oltre questa soglia, le fibre elastiche del derma subiscono una deformazione permanente e i lobi non torneranno alle dimensioni standard degli orecchini tradizionali (18g-16g). Chiunque superi i 10-12 mm deve pianificare sapendo che potrebbe essere necessaria una ricostruzione chirurgica per richiuderli.',
    'faq.q10': 'Posso dormire senza plug per mantenere i lobi sani e spessi?',
    'faq.a10': 'Dormire senza gioielli ("naked sleeping") è ottimo per migliorare la circolazione sanguigna e mantenere spesso il bordo inferiore alle misure maggiori (in genere da 2g / 6,0 mm in su). Tuttavia, iniziate solo quando una misura è stabile da almeno 2-3 mesi. Allenate i lobi gradualmente: iniziate con 30 minuti al giorno, poi qualche ora, prima di provare una notte intera, verificando che il plug scivoli dentro con zero attrito.',

      // Extended Protocols & Features
    'rehab.cardTitle': 'Pianificatore di Riduzione & Riabilitazione',
    'rehab.intro': 'In caso di dolore, lacerazione, sanguinamento o blowout, ridurre immediatamente la tensione tissutale è essenziale per preservare l\'apporto sanguigno e prevenire cicatrici permanenti.',
    'rehab.issueLabel': 'Complicazione Riscontrata',
    'rehab.issueSelect': 'Seleziona la complicazione...',
    'rehab.issueBlowout': 'Blowout (lembo di tessuto sporgente dietro al gioiello)',
    'rehab.issueTear': 'Micro-lacerazione o sanguinamento dopo l\'inserimento',
    'rehab.issuePain': 'Dolore pulsante persistente, calore o rossore',
    'rehab.issueThinning': 'Assottigliamento del bordo inferiore o necrosi da pressione',
    'rehab.actionBtn': 'Calcola Piano di Riduzione',
    'rehab.recommendedSize': 'Misura Ridotta Raccomandata',
    'rehab.recommendedRest': 'Periodo di Riposo Riabilitativo',
    'rehab.restDetails': 'Da 8 a 12 settimane senza alcuna tensione di allungamento con impacchi di soluzione fisiologica sterile di cloruro di sodio allo 0,9%.',
    'rehab.protocolHeading': 'Protocollo di Riabilitazione d\'Emergenza',
    'rehab.step1': 'Rimuovere il gioiello in tensione e inserire senza forzare un plug a svasatura singola in vetro o titanio ASTM F-136 di 1 o 2 misure inferiori.',
    'rehab.step2': 'Eseguire impacchi tiepidi con soluzione salina sterile di cloruro di sodio allo 0,9% due volte al giorno per 5-10 minuti.',
    'rehab.step3': 'Non applicare oli o balsami su ferite aperte prima della completa chiusura della pelle. Una volta guarita, massaggiare delicatamente con olio di jojoba ogni giorno.',
    'rehab.step4': 'Mantenere questa misura ridotta per almeno 8-12 settimane prima di rivalutare la maturità dei tessuti con un piercer professionista qualificato.',
    'rehab.applyBtn': 'Applica Riduzione a Questo Orecchio',
    'rehab.appliedSuccess': 'Applicata riduzione a {size} con riposo riabilitativo per {earLabel}.',
    'rehab.noSizeWarning': 'Seleziona prima la tua misura attuale nella configurazione del piano in alto.',
    'halfsize.toggleLabel': 'Imponi Mezze Misure (Passi da 0,5 mm a 1,0 mm)',
    'halfsize.helpText': 'Richiede passaggi intermedi (come 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) per evitare salti traumatici di 2,0 mm.',
    'halfsize.badge': 'Tappa Mezza Misura',
    'halfsize.warningSkipHalf': 'L\'imposizione delle mezze misure è attiva. Saltare la mezza misura intermedia {halfSize} non è consentito. Allargare prima a {halfSize}.',
    'naked.cardTitle': 'Protocollo di Sonno Senza Gioielli & Condizionamento',
    'naked.intro': 'Per calibri di 2g (6,0 mm) e oltre, abituare i lobi a dormire senza gioielli allevia la pressione, ripristina la microcircolazione e preserva lo spessore del bordo inferiore.',
    'naked.eligibilityNotice': 'L\'addestramento al sonno senza gioielli è raccomandato per fistole completamente guarite a partire da 2g (6,0 mm) con almeno 8-12 settimane di riposo.',
    'naked.currentPhaseLabel': 'Fase di Condizionamento',
    'naked.phase1Title': 'Fase 1: Pause Diurne (Settimane 1–2)',
    'naked.phase1Desc': 'Rimuovere i gioielli per 30-45 minuti durante il relax serale. Massaggiare con olio di jojoba e reinserire.',
    'naked.phase2Title': 'Fase 2: Condizionamento Serale (Settimane 3–4)',
    'naked.phase2Desc': 'Lasciare i lobi nudi per 1-2 ore la sera prima di coricarsi. Reinserire il plug lubrificato per la notte.',
    'naked.phase3Title': 'Fase 3: Ore Nude Prolungate (Settimane 5–6)',
    'naked.phase3Desc': 'Lasciare i lobi nudi per 3-4 ore. I gioielli devono scivolare dentro facilmente senza alcuna resistenza.',
    'naked.phase4Title': 'Fase 4: Prima Notte Completa (Settimane 7–8)',
    'naked.phase4Desc': 'Dormire senza gioielli per 6-8 ore. Al mattino, massaggiare con olio e inserire delicatamente plug in vetro a svasatura singola.',
    'naked.phase5Title': 'Fase 5: Abitudine Notturna (Mantenimento)',
    'naked.phase5Desc': 'Dormire nudi ogni notte per evitare strappi sul cuscino, preservare l\'elasticità e rigenerare il collagene dermico.',
    'naked.logTodayBtn': 'Registra Sessione Senza Gioielli di Oggi',
    'naked.loggedSuccess': 'Sessione di condizionamento senza gioielli registrata per {earLabel}!',
    'naked.sessionsCompleted': 'Totale Sessioni Senza Gioielli Completate: {count}',
    'log.rimMarginLabel': 'Margine del Bordo Inferiore (mm, opzionale)',
    'log.rimMarginPlaceholder': 'es. 5.0',
    'log.pliabilityLabel': 'Flessibilità della Fistola',
    'log.pliabilitySelect': 'Seleziona consistenza del tessuto...',
    'log.pliabilitySoft': 'Morbido ed elastico',
    'log.pliabilityModerate': 'Moderata compattezza / piccolo rilievo',
    'log.pliabilityRigid': 'Tessuto cicatriziale denso / rigido',
    'log.sensationLabel': 'Sensazione Tissutale',
    'log.sensationNormal': 'Confortevole / nessuna sensibilità',
    'log.sensationTender': 'Sensibile al tocco leggero',
    'log.sensationIrritated': 'Secco, pruriginoso o bruciore',
    'log.thRim': 'Margine Bordo',
    'log.thPliability': 'Salute Tessuto',
    'log.thinningAlertTitle': 'Allerta Assottigliamento del Lobo',
    'log.thinningAlertDesc': 'Una misura del bordo inferiore di {mm} mm indica un tessuto assottigliato. Interrompere l\'allungamento, dormire senza gioielli o ridurre la misura e consultare un piercer professionista qualificato.',
    'log.rapidThinningAlert': 'Attenzione: Lo spessore del bordo inferiore è diminuito di {drop} mm rispetto alla registrazione precedente. Un rapido assottigliamento indica una tensione eccessiva.',

    'gauge.18g': '18g - 1,0 mm',
  'gauge.16g': '16g - 1,2 mm',
  'gauge.14g': '14g - 1,6 mm',
  'gauge.12g': '12g - 2,0 mm',
  'gauge.10g': '10g - 2,4 mm',
  'gauge.8g': '8g - 3,2 mm',
  'gauge.7g': '7g - 3,5 mm (mezza misura)',
  'gauge.6g': '6g - 4,0 mm',
  'gauge.5g': '5g - 4,5 mm (mezza misura)',
  'gauge.4g': '4g - 5,0 mm',
  'gauge.3g': '3g - 5,5 mm (mezza misura)',
  'gauge.2g': '2g - 6,0 mm',
  'gauge.1g': '1g - 7,0 mm (mezza misura)',
  'gauge.0g': '0g - 8,0 mm',
  'gauge.9mm': '9 mm (intermedia)',
  'gauge.00g': '00g - 10,0 mm',
  'gauge.11mm': '11 mm (intermedia)',
  'gauge.12mm': '12 mm',
  'gauge.13mm': '13 mm (intermedia)',
  'gauge.14mm': '14 mm',
  'gauge.15mm': '15 mm (intermedia)',
  'gauge.16mm': '16 mm (5/8 di pollice)',
  'gauge.17mm': '17 mm (intermedia)',
  'gauge.18mm': '18 mm (intermedia)',
  'gauge.19mm': '19 mm (3/4 di pollice)',
  'gauge.20mm': '20 mm (intermedia)',
  'gauge.22mm': '22 mm (7/8 di pollice)',
  'gauge.24mm': '24 mm (intermedia)',
  'gauge.25mm': '25,4 mm (1 pollice)',
  'gauge.28mm': '28 mm',
  'gauge.32mm': '32 mm',
  'gauge.38mm': '38 mm',
  'gauge.50mm': '50,8 mm (2 pollici)'
  },
  de: {
  // Document Metadata
  'page.title': 'Ohrloch-Dehnungsplaner | Poli International',
  'page.metaDescription': 'Planen Sie das schrittweise Dehnen der Ohrläppchen Größe für Größe im tempo Ihres Gewebes. Zwei Ohren, Zwischenschritte, Reifeprüfungen und datiertes Protokoll.',

  // Header & Navigation
  'app.badge': 'Sichere Piercing-Praxis',
  'app.title': 'Ohrloch-Dehnungsplaner',
  'app.subtitle': 'Planen Sie das sanfte Dehnen Ihrer Ohrläppchen, Schritt für Schritt im individuellen Tempo Ihres Gewebes. Für beide Ohren, mit präzisen Zwischenschritten, Reifeprüfungen und datiertem Dehnungsverlauf.',
  'lang.label': 'Sprache',
  'lang.en': 'Englisch',
  'lang.fr': 'Französisch',
  'lang.it': 'Italienisch',
  'lang.de': 'Deutsch',
  'lang.es': 'Spanisch',
  'lang.nl': 'Niederländisch',
  'lang.pt': 'Portugiesisch',
  'theme.toggleDark': 'Zum dunklen Design wechseln',
  'theme.toggleLight': 'Zum hellen Design wechseln',
  
  // Ear Tabs
  'tab.left': 'Linkes Ohr',
  'tab.right': 'Rechtes Ohr',
  'tab.copy': 'Einstellungen von links nach rechts kopieren',
  'tab.copyToRight': 'Einstellungen von links nach rechts kopieren',
  'tab.copyToLeft': 'Einstellungen von rechts nach links kopieren',
  'tab.copySuccess': 'Einstellungen des linken Ohrs auf das rechte Ohr kopiert',
  
  // Plan Configuration
  'config.heading': 'Plan-Konfiguration',
  'config.from': 'Aktuelle Größe / Gauge',
  'config.to': 'Zielgröße / Gauge',
  'config.selectFrom': 'Aktuelle Größe auswählen...',
  'config.selectTo': 'Zielgröße auswählen...',
  'config.startDate': 'Einsetzdatum der aktuellen Größe',
  'config.startDateHelp': 'Wird verwendet, um das frühestmögliche nächste Dehndatum anhand der Abheilzeit zu berechnen.',
  'config.planBtn': 'Schritt-für-Schritt-Plan erstellen',
  'config.resetEar': 'Dieses Ohr zurücksetzen',
  'config.confirmReset': 'Einstellungen und Dehnungsverlauf für dieses Ohr zurücksetzen?',
  
  // Validation Errors
  'error.selectBoth': 'Bitte wählen Sie sowohl Ihre aktuelle Größe als auch Ihre Zielgröße aus.',
  'error.targetSmaller': 'Die Zielgröße muss größer als die aktuelle Größe sein.',
  'error.skipNotice': 'Der Plan erstellt jeden Zwischenschritt. Überspringen Sie beim Kauf und Dehnen keinesfalls Größen.',
  'error.refuseJump': 'Größensprung abgelehnt: Sie können nicht direkt von {current} auf {target} wechseln. Das Überspringen von Zwischengrößen ({skipped}) birgt akute Risiken für schwere Blowouts und Geweberisse. Dehnen darf ausschließlich schrittweise erfolgen. Der nächste zulässige Schritt ist {next}.',
  'error.futureDate': 'Das Datum darf nicht in der Zukunft liegen. Bitte wählen Sie heute oder ein vergangenes Datum.',
  'error.enterCurrentFirst': 'Bitte wählen Sie vor dem Protokollieren zuerst Ihre aktuelle Größe in der Plan-Konfiguration aus.',
  
  // Next Earliest Date Banner
  'nextDate.title': 'Frühestmögliches sicheres Dehndatum',
  'nextDate.notSet': 'Wählen Sie oben aktuelle Größe und Einsetzdatum, um das früheste Datum zu berechnen.',
  'nextDate.readyNow': 'Das Mindestabheilintervall ist erreicht! Führen Sie vor dem nächsten Schritt die Reifeprüfung unten durch.',
  'nextDate.reasonPrefix': 'Basierend auf',
  'nextDate.weeksHealing': '{weeks} Wochen Mindestabheilzeit für {size} ({mm} mm)',
  'nextDate.sinceDate': 'seit dem Einsetzen am {date}.',
  'nextDate.delayNotice': 'Enthält {weeks} Wochen zusätzliche Ruhezeit, da das Gewebe bei der Prüfung als "nicht bereit" eingestuft wurde.',
  'nextDate.exportIcs': 'Zum Kalender hinzufügen (.ics)',
  
  // Readiness Assessment
  'readiness.heading': 'Das Tempo des Gewebes: Reifeprüfung',
  'readiness.intro': 'Ein Kalenderdatum ist lediglich eine frühestmögliche Schwelle. Gewebe lässt sich nur dann schadensfrei dehnen, wenn es vollkommen entspannt und verheilt ist. Prüfen Sie jeden Punkt gewissenhaft vor dem nächsten Schritt:',
  'readiness.checkPain': 'Keinerlei Schmerz, Druckempfindlichkeit oder Stechen beim Berühren oder Bewegen des Ohrläppchens.',
  'readiness.checkRedness': 'Keinerlei Rötung, Schwellung oder Überwärmung rund um den Stichkanal.',
  'readiness.checkDischarge': 'Keinerlei Wundsekret, Krustenbildung, Blutung oder nässende Hautreizung.',
  'readiness.checkMovement': 'Der eingesetzte Schmuck lässt sich vollkommen mühelos und ohne jeden Widerstand vor und zurück drehen und gleiten.',
  'readiness.btnReady': 'Ich bin bereit für die nächste Größe',
  'readiness.btnNotYet': 'Noch nicht bereit (+3 Wochen Schonung)',
  'readiness.statusReady': 'Gewebe ist nachweislich bereit. Protokollieren Sie den nächsten Schritt unten nach dem Einsetzen der neuen Größe.',
  'readiness.statusNotYet': '3 Wochen Erholungspause hinzugefügt. Das Gewebe muss ruhen, bis alle Irritationen restlos abgeklungen sind.',
  'readiness.statusPending': 'Reifeprüfung ausstehend. Bestätigen Sie alle 4 Kriterien vor dem Dehnen.',
  'readiness.alertVerifyCriteria': 'Bitte überprüfen Sie alle 4 Kriterien gewissenhaft vor der Bestätigung. Das Gewebe muss vollkommen beschwerde- und reibungsfrei sein.',
  
  // Timeline Summary Stats
  'summary.stretches': 'Schritte insgesamt',
  'summary.minWeeks': 'Wochen mindestens',
  'summary.minMonths': 'Monate mindestens',
  'summary.whyWaitsGrow': 'Die Wartezeiten steigen mit der Größe, da größere Durchmesser pro Millimeter mehr Gewebeumfang dehnen (ΔC = π × Δd), was einen schrittweise längeren Kollagenumbau erfordert.',
  
  // Step Timeline
  'timeline.heading': 'Schrittweise Größenabfolge',
  'timeline.currentBadge': 'Aktuelle Größe',
  'timeline.nextBadge': 'Nächster Schritt',
  'timeline.targetBadge': 'Ziel',
  'timeline.waitLabel': 'Vor dem nächsten Schritt {min}–{max} Wochen verheiltes Gewebe abwarten',
  
  // Point of No Return Notice
  'largeSize.heading': 'Wichtiger Hinweis zu großen Durchmessern: Der Point of No Return (~12–13 mm / 1/2")',
  'largeSize.body': 'Ab etwa einem halben Zoll (~12 mm bis 13 mm / 00g bis 1/2") ziehen sich gedehnte Ohrläppchen meist nicht mehr von selbst zusammen. Die Gewebeelastizität hat biologische Grenzen; ist dieser Punkt ohne Wiederkehr überschritten, ist eine chirurgische Ohrläppchenrekonstruktion (Lobe-Repair) der übliche Weg, falls ein Verschluss gewünscht wird. Planen Sie Ihr Ziel mit dieser dauerhaften Veränderung im Bewusstsein. Kein Dehnvorgang sollte als garantiert rückgängig machbar betrachtet werden.',
  'largeSize.alertActive': 'Zielgröße erreicht oder überschreitet 12,0 mm (1/2"): Beachten Sie, dass Gewebe jenseits dieses Durchmessers in der Regel chirurgisch rekonstruiert werden muss, falls Sie die Dehnung je rückgängig machen möchten.',
  
  // Warning Signs Section
  'warning.heading': 'Warnsignale: Früherkennung & Sofortmaßnahmen',
  'warning.intro': 'Sollten Sie eines der folgenden Symptome bemerken, STOPPEN Sie den Dehnvorgang sofort. Ein schnelles Downsizing und vollständige Schonung sind der einzige Weg, das Gewebe zu retten.',
  'warning.blowoutTitle': 'Blowout: Ausstülpung des Stichkanals (Frontalansicht & Querschnitt)',
  'warning.blowoutDesc': 'Was es ist: Übermäßiger Druck drückt die empfindliche innere Auskleidung des Stichkanals nach hinten oder vorne aus dem Loch heraus und stülpt sie um. Erscheinungsbild von vorne: Ein geröteter, erhabener, wunder Gewebewulst am Außenrand des Plugs. Im Querschnitt: Die innere Kanalwand ist hinter den Schmuck prolabiert. Dies heilt NIEMALS durch Weiterdehnen ab. Setzen Sie sofort 1–2 Größen kleiner ein, gönnen Sie dem Gewebe Ruhe und suchen Sie einen professionellen Piercer auf.',
  'warning.tearTitle': 'Mikroriss / Geweberiss',
  'warning.tearDesc': 'Stechender Schmerz, Blutung oder Austritt von Wundflüssigkeit im Stichkanal während oder nach dem Einsetzen. Weist auf zerrissenes Zellgewebe hin. Schmuck verkleinern oder entfernen, wie eine offene Wunde mit steriler Kochsalzlösung pflegen und niemals Gewalt anwenden.',
  'warning.thinningTitle': 'Ausdünnung des Ohrläppchens',
  'warning.thinningDesc': 'Der untere Steg des Ohrläppchens wird unter dem Plug dünn, blass oder glasig. Ursache sind zu schnelle Größensprünge, schwere Gewichte oder mangelnde Durchblutung. Sofort verkleinern, um die Durchblutung wiederherzustellen und dem Gewebe Zeit zum Nachdicken zu geben.',
  'warning.painTitle': 'Anhaltender Schmerz / Starkes Druckgefühl',
  'warning.painDesc': 'Pochen, brennendes Spannungsgefühl oder stechendes Kneifen über mehr als wenige Minuten. Sicheres Dehnen verläuft nahezu reibungslos und absolut schmerzfrei. Bei spürbarem Widerstand ist das Ohr nicht bereit.',
  'warning.actionBox': 'Erforderliche Maßnahme bei jedem Warnsignal: Sofort verkleinern (Downsizing), glatten Single-Flare-Schmuck einsetzen, Gewebe vollständig ruhen lassen und einen professionellen Piercer konsultieren.',
  
  // Inline SVG Diagrams
  'svg.blowoutAria': 'Diagramm eines Ohrläppchen-Blowouts mit Frontansicht und Querschnitt',
  'svg.blowoutFront': 'Front: Ausgestülpter Wulst',
  'svg.blowoutCross': 'Querschnitt',
  'svg.tearAria': 'Diagramm von Riss und Fissur im Stichkanal',
  'svg.tearMicro': 'Mikroriss',
  'svg.thinningAria': 'Diagramm zur Ausdünnung des unteren Läppchenstegs',
  'svg.thinningMargin': 'Kritischer Dünnsteg (<2mm)',
  'svg.painAria': 'Diagramm von gereiztem Gewebe unter Spannung',
  'svg.painThrobbing': 'Pochen / Spannung',

  // Jewellery & Materials Section
  'jewellery.heading': 'Schmuck zum Dehnen: Plugs, Dehnstäbe & Gewichte',
  'jewellery.plugsLabel': 'Plugs vs. Dehnstäbe:',
  'jewellery.plugsText': 'Glatte Single-Flare- oder No-Flare-Plugs mit abgerundeten Kanten sind der Goldstandard beim Dehnen. Sie verteilen den Druck gleichmäßig über den gesamten Stichkanal ohne Gewinde, die empfindliches Gewebe einreißen können.',
  'jewellery.tapersLabel': 'Reine Einführhilfen:',
  'jewellery.tapersText': 'Dehnstäbe (Taper) sind reine Werkzeuge für den Piercer zum Führen beim Schmuckwechsel. Sie dürfen NIEMALS zum gewaltsamen Aufdehnen genutzt oder als Schmuck getragen werden. Durch ihre ungleiche Gewichtsverteilung hebeln sie das Loch schief und dünnen den unteren Läppchensteg drastisch aus.',
  'jewellery.weightLabel': 'Gewicht & Ausdünnung:',
  'jewellery.weightText': 'Schwere Plugs (Vollstahl, Messing, Stein) erzeugen einen permanenten Zug nach unten, der bei größeren Durchmessern die untere Gewebebrücke ausdünnt. Verwenden Sie leichte, biokompatible Materialien, um die Dicke des Läppchens zu bewahren.',
  'jewellery.materialsLabel': 'Materialien:',
  'jewellery.materialsText': 'Verwenden Sie ausschließlich biokompatible, hochglanzpolierte Materialien: medizinisches BioFlex® body jewelry (PP-R-Random-Copolymer), ASTM F-136 Titan oder 316LVM Implantatstahl.',
  'jewellery.linksIntro': 'Für exakte Maße, Größentabellen und Nachsorge-Dokumentation:',
  'jewellery.linkVisualizer': 'Schmuckgrößen-Visualisierer',
  'jewellery.linkConverter': 'Größen- & Gauge-Umrechner',
  'jewellery.linkTracker': 'Abheil-Tracker',
  
  // Stretch History Log
  'log.heading': 'Dehnungs-Protokoll',
  'log.intro': 'Dokumentieren Sie, wann welche Größe tatsächlich eingesetzt wurde und wie das Gewebe reagiert hat. Ihr Plan und das früheste nächste Datum passen sich Ihrem realen Tempo an – so entsteht ein verlässlicher Verlauf für Ihren Piercer.',
  'log.sizeLabel': 'Erreichte Größe',
  'log.dateLabel': 'Dehndatum',
  'log.notesLabel': 'Beobachtung / Reaktion des Gewebes',
  'log.notesPlaceholder': 'z. B. Nach warmer Dusche ohne jeden Widerstand hineingeglitten; keinerlei Rötung oder Kneifen.',
  'log.addBtn': 'Diesen Schritt eintragen',
  'log.empty': 'Bisher keine Dehnschritte für dieses Ohr erfasst. Tragen Sie oben Ihren ersten Schritt ein, um Ihren persönlichen Verlauf zu starten.',
  'log.thDate': 'Dehndatum',
  'log.thSize': 'Größe',
  'log.thMm': 'Millimeter',
  'log.thNotes': 'Beobachtungen',
  'log.thAction': 'Aktionen',
  'log.delete': 'Löschen',
  'log.confirmDelete': 'Diesen Eintrag aus dem Protokoll löschen?',
  
  // Print & Persistence
  'actions.print': 'Plan drucken / Als PDF speichern',
  'actions.clearAll': 'Alle gespeicherten Daten löschen',
  'actions.confirmClear': 'Möchten Sie wirklich alle gespeicherten Pläne und Dehnungsverläufe aus diesem Browser unwiderruflich löschen?',
  'print.disclaimer': 'Dokumentation des vom Nutzer selbst erfassten Dehnungsverlaufs und zeitlicher Schätzwerte. Dieses Dokument gibt ausschließlich Nutzereingaben wieder.',
  
  // Footer Disclaimer
  'disclaimer.title': 'Wichtiger Hinweis zu individuellen Abweichungen',
  'disclaimer.body': 'Diese Zeitangaben stellen empfohlene Mindestabstände dar, basierend auf gesundem Gewebe und etablierter professioneller Piercing-Praxis. Die individuelle Kollagenbildung und Gewebeelastizität variieren von Mensch zu Mensch erheblich. Narbengewebe, frühere Verletzungen oder Kälte erfordern längere Ruhephasen. Niemals gereiztes Gewebe dehnen. Ziehen Sie im Zweifel stets einen professionellen Piercer zu Rate.',

  // Calendar Export
  'ics.summary': 'Reifeprüfung Ohrloch-Dehnung ({earLabel}: {nextSizeDisplay})',
  'ics.description': 'Reifebeurteilung für {earLabel} auf {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nPrüfpunkte vor dem Dehnversuch:\\n- Keinerlei Schmerz oder Stechen\\n- Keinerlei Rötung oder Überwärmung\\n- Keinerlei Wundsekret oder Krusten\\n- Schmuck bewegt sich und dreht sich völlig frei ohne Widerstand\\n\\nBegründung: {reason}\\n\\nFalls auch nur ein Prüfpunkt nicht erfüllt ist: Keinesfalls forcieren. Downsizing oder pausieren.',

  // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Häufig gestellte Fragen & Expertenrat',
    'faq.subtitle': 'Klare Antworten zu Dehntechniken, täglicher Hygiene und Vermeidung von Komplikationen',
    'faq.filterAll': 'Alle Fragen',
    'faq.filterStretching': 'Dehntechnik',
    'faq.filterCare': 'Tägliche Pflege & Reinigung',
    'faq.filterTroubleshooting': 'Fehlerbehebung & Gesundheit',
    'faq.q1': 'Woran erkenne ich, dass meine Ohrläppchen wirklich für die nächste Größe bereit sind?',
    'faq.a1': 'Das Gewebe ist erst bereit, wenn es vollständig verheilt, entspannt und elastisch ist. Der aktuelle Schmuck muss mühelos vor- und zurückgleiten und sich ohne Klemmen, Widerstand oder Krustenbildung drehen lassen. Die Mindestwochen sind nur ein biologischer Richtwert; spüren Sie beim Einsetzen der nächsten Größe Spannung, Brennen oder Hitze, stoppen Sie sofort und gewähren Sie 2 bis 4 zusätzliche Wochen Ruhe.',
    'faq.q2': 'Warum wird von Dehnstäben (Tapern) abgeraten und was sollte man stattdessen verwenden?',
    'faq.a2': 'Dehnstäbe wirken wie Hebelkeile, die das Gewebe unbemerkt über seine natürliche Dehngrenze zwingen und Mikrorisse sowie Blowouts verursachen. Zudem erzeugt das Tragen als Schmuck ein ungleichmäßiges Hebelgewicht, das den unteren Läppchenrand ausdünnt. Nutzen Sie stattdessen Dead-Stretching mit glatten, abgerundeten Single-Flare-Plugs aus Borosilikatglas, BioFlex® body jewelry (PP-R Random-Copolymer) oder ASTM F-136 Implantat-Titan.',
    'faq.q3': 'Was sind Zwischengrößen (z. B. 7g, 1g, 9 mm, 11 mm) und warum werden sie empfohlen?',
    'faq.a3': 'Klassische Gauge-Tabellen enthalten gefährlich große Sprünge: Der Wechsel von 2g (6,0 mm) auf 0g (8,0 mm) bedeutet beispielsweise einen gewaltigen Sprung von 2,0 mm (+33 % Gewebedehnung auf einen Schlag). Halbe Zwischengrößen (wie 1g / 7,0 mm oder 9 mm zwischen 0g und 00g) begrenzen jeden Schritt auf 0,5 mm bis 1,0 mm, schonen die Gefäßversorgung und verhindern irreversible Blowouts.',
    'faq.q4': 'Wie sollte ich meine gedehnten Läppchen und den Schmuck täglich reinigen?',
    'faq.a4': 'Nehmen Sie verheilte Plugs während der täglichen warmen Dusche heraus, um den Stichkanal mit lauwarmem Wasser und einer milden, parfümfreien, pH-neutralen Waschlotion abzuspülen. Reinigen Sie den Schmuck separat und trocknen Sie Ohren und Plugs vor dem Wiedereinsetzen gründlich ab. Verwenden Sie niemals Reinigungsalkohol, Wasserstoffperoxid oder scharfe Wunddesinfektionsmittel, die gesundes Gewebe austrocknen und reizen.',
    'faq.q5': 'Welche Öle eignen sich für Läppchenmassagen und wann darf man damit beginnen?',
    'faq.a5': 'Tägliche 3- bis 5-minütige Massagen mit reinem, kaltgepresstem Jojobaöl, Emuöl oder Vitamin-E-Öl fördern die Mikrozirkulation, lockern Narbengewebe und unterstützen die Kollagenelastizität. Führen Sie Ölmassagen nur an vollständig verheiltem, intaktem Gewebe durch. Tragen Sie niemals Öle oder Balsame auf frische Dehnungen, offene Risse oder gereizte Haut auf.',
    'faq.q6': 'Was verursacht Läppchengeruch und wie lässt er sich verhindern?',
    'faq.a6': 'Läppchengeruch entsteht durch die natürliche Ansammlung abgestorbener Hautschüppchen (Keratin) und Talg im feuchtwarmen Kanal zwischen Schmuck und Haut. Verhindern Sie ihn, indem Sie verheilten Schmuck täglich beim Duschen herausnehmen, den Stichkanal gründlich reinigen, vollständig trocknen lassen und porenfreie Materialien wie Glas, Titan oder BioFlex® body jewelry wählen.',
    'faq.q7': 'Was sollte ich sofort tun, wenn eine Dehnung schmerzt, blutet oder einreißt?',
    'faq.a7': 'Schmerzen sind beim Dehnen niemals normal. Wenn Sie Stechen, Pochen oder Blutungen bemerken, entfernen Sie den größeren Schmuck sofort und gehen Sie 1 bis 2 Größen zurück, um den Zug vom verletzten Gewebe zu nehmen. Spülen Sie zweimal täglich mit steriler Kochsalzlösung (0,9 % NaCl), behandeln Sie die Stelle wie eine offene Wunde und pausieren Sie mindestens 2 bis 3 Monate vor einem neuen Versuch.',
    'faq.q8': 'Wie erkenne und behandle ich einen Earlobe-Blowout?',
    'faq.a8': 'Ein Blowout entsteht, wenn zu hoher Druck die innere Auskleidung des Stichkanals nach außen stülpt und ein wulstiger, roher Geweberand hinten oder vorne am Loch entsteht. Reduzieren Sie in diesem Fall sofort um 1 bis 2 Größen, setzen Sie den kleineren Plug von der Seite ein, an der das Gewebe herausquillt, meiden Sie Öle und ziehen Sie einen erfahrenen professionellen Piercer zu Rate.',
    'faq.q9': 'Was ist der „Point of no Return“, ab dem sich Ohrläppchen nicht mehr zusammenziehen?',
    'faq.a9': 'Bei den meisten Anatomien liegt der Point of no Return bei etwa 12 mm bis 13 mm (ca. 00g bis 1/2 Zoll). Ab dieser Schwelle verlieren die elastischen Fasern der Dermis ihre Rückstellkraft, sodass sich die Löcher nach Ablegen des Schmucks meist nicht mehr auf Standard-Ohrringgrößen (18g-16g) zurückbilden. Wer über 10-12 mm dehnt, sollte wissen, dass zum Schließen oft ein chirurgischer Eingriff (Lobe-Rekonstruktion) erforderlich ist.',
    'faq.q10': 'Kann ich ohne Plugs schlafen, um die Läppchen gesund und dick zu halten?',
    'faq.a10': 'Gewöhntes Schlafen ohne Schmuck („Naked Sleeping“) verbessert die Durchblutung und stabilisiert die Gewebedicke bei größeren Durchmessern (in der Regel ab 2g / 6,0 mm). Beginnen Sie damit jedoch erst, wenn eine Größe seit mindestens 2 bis 3 Monaten völlig stabil ist. Gewöhnen Sie Ihre Ohren langsam daran: zunächst 30 Minuten täglich, dann einige Stunden, bevor Sie eine ganze Nacht wagen, und prüfen Sie stets, ob der Schmuck widerstandsfrei hineingleitet.',

      // Extended Protocols & Features
    'rehab.cardTitle': 'Downsizing- & Blowout-Rehabilitationsplaner',
    'rehab.intro': 'Bei Schmerzen, Rissen, Blutungen oder einem Blowout ist eine sofortige Spannungsreduktion unerlässlich, um die Gewebedurchblutung zu sichern und bleibende Narben zu vermeiden.',
    'rehab.issueLabel': 'Beobachtete Komplikation',
    'rehab.issueSelect': 'Komplikation auswählen...',
    'rehab.issueBlowout': 'Blowout (hervortretender Geweberand hinter dem Schmuck)',
    'rehab.issueTear': 'Mikroriss oder Blutung nach dem Einsetzen',
    'rehab.issuePain': 'Anhaltender pochender Schmerz, Hitzegefühl oder Rötung',
    'rehab.issueThinning': 'Ausdünnung des unteren Ohrläppchenrands oder Drucknekrose',
    'rehab.actionBtn': 'Rückschritts-Rehabilitationsplan berechnen',
    'rehab.recommendedSize': 'Empfohlene verkleinerte Größe',
    'rehab.recommendedRest': 'Empfohlene Erholungsdauer',
    'rehab.restDetails': '8 bis 12 Wochen ohne jede Dehnspannung mit Spülungen aus steriler 0,9%iger Natriumchlorid-Kochsalzlösung.',
    'rehab.protocolHeading': 'Notfall-Rehabilitationsprotokoll',
    'rehab.step1': 'Spannenden Schmuck entfernen und ohne Gewalt einen sauberen Single-Flare-Glas- oder ASTM-F-136-Titan-Plug 1 bis 2 Größen kleiner einsetzen.',
    'rehab.step2': 'Zweimal täglich 5 bis 10 Minuten warme Bäder in steriler 0,9%iger Natriumchlorid-Kochsalzlösung durchführen.',
    'rehab.step3': 'Keine Öle oder Balsame auf offene Wunden auftragen. Nach vollständiger Heilung täglich sanft mit Jojobaöl massieren.',
    'rehab.step4': 'Diese verkleinerte Größe mindestens 8 bis 12 Wochen halten, bevor die Gewebebereitschaft bei einem etablierten professionellen Piercer neu beurteilt wird.',
    'rehab.applyBtn': 'Downsizing auf dieses Ohr anwenden',
    'rehab.appliedSuccess': 'Verkleinerung auf {size} mit Rehabilitationspause für {earLabel} übernommen.',
    'rehab.noSizeWarning': 'Bitte wählen Sie zuerst Ihre aktuelle Größe in der Plankonfiguration oben aus.',
    'halfsize.toggleLabel': 'Halbgrößen erzwingen (0,5 mm – 1,0 mm Schritte)',
    'halfsize.helpText': 'Schreibt Zwischenschritte (wie 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) vor, um traumatische 2,0-mm-Sprünge zu verhindern.',
    'halfsize.badge': 'Halbgrößen-Schritt',
    'halfsize.warningSkipHalf': 'Halbgrößen-Erzwingung ist aktiv. Das Überspringen der Zwischengröße {halfSize} ist nicht zulässig. Bitte dehnen Sie zuerst auf {halfSize}.',
    'naked.cardTitle': 'Schmuckloses Schlafen & Konditionierungsprotokoll',
    'naked.intro': 'Ab 2g (6,0 mm) entlastet schmuckloses Schlafen das Gewebe, stellt die dermale Mikrozirkulation wieder her und schützt die Dicke des unteren Ohrläppchenrands.',
    'naked.eligibilityNotice': 'Das Training zum schmucklosen Schlafen wird für vollständig abgeheilte Fisteln ab 2g (6,0 mm) nach mindestens 8 bis 12 Wochen Ruhezeit empfohlen.',
    'naked.currentPhaseLabel': 'Konditionierungsphase',
    'naked.phase1Title': 'Phase 1: Tagpausen (Wochen 1–2)',
    'naked.phase1Desc': 'Schmuck für 30 bis 45 Minuten während der Abendentspannung ablegen. Mit Jojobaöl massieren und wieder einsetzen.',
    'naked.phase2Title': 'Phase 2: Abendkonditionierung (Wochen 3–4)',
    'naked.phase2Desc': 'Ohrläppchen abends 1 bis 2 Stunden vor dem Schlafen schmucklos lassen. Für die Nacht befeuchteten Plug einsetzen.',
    'naked.phase3Title': 'Phase 3: Verlängerte schmucklose Stunden (Wochen 5–6)',
    'naked.phase3Desc': 'Ohrläppchen 3 bis 4 Stunden frei lassen. Der Schmuck muss ohne jeden Widerstand sanft hineingleiten.',
    'naked.phase4Title': 'Phase 4: Erste vollständige Nacht (Wochen 7–8)',
    'naked.phase4Desc': '6 bis 8 Stunden nachts ohne Schmuck schlafen. Morgens mit Öl massieren und vorsichtig Single-Flare-Glasplugs einsetzen.',
    'naked.phase5Title': 'Phase 5: Nächtliche Routine (Erhaltung)',
    'naked.phase5Desc': 'Jede Nacht schmucklos schlafen, um Verfangen am Kissen zu vermeiden, Elastizität zu erhalten und Dermis-Kollagen aufzubauen.',
    'naked.logTodayBtn': 'Heutige schmucklose Sitzung protokollieren',
    'naked.loggedSuccess': 'Schmucklose Konditionierungssitzung für {earLabel} protokolliert!',
    'naked.sessionsCompleted': 'Absolvierte schmucklose Sitzungen gesamt: {count}',
    'log.rimMarginLabel': 'Unterer Randabstand (mm, optional)',
    'log.rimMarginPlaceholder': 'z. B. 5.0',
    'log.pliabilityLabel': 'Fisteldehnbarkeit',
    'log.pliabilitySelect': 'Gewebestruktur auswählen...',
    'log.pliabilitySoft': 'Weich & elastisch',
    'log.pliabilityModerate': 'Leichte Festigkeit / kleine Kante',
    'log.pliabilityRigid': 'Dichtes / starres Narbengewebe',
    'log.sensationLabel': 'Gewebeempfindung',
    'log.sensationNormal': 'Angenehm / schmerzfrei',
    'log.sensationTender': 'Druckempfindlich bei leichter Berührung',
    'log.sensationIrritated': 'Trocken, juckend oder brennend',
    'log.thRim': 'Randabstand',
    'log.thPliability': 'Gewebegesundheit',
    'log.thinningAlertTitle': 'Warnung vor Ohrläppchen-Ausdünnung',
    'log.thinningAlertDesc': 'Ein Randabstand von {mm} mm weist auf kritisches Ausdünnen hin. Dehnen sofort stoppen, schmucklos schlafen oder verkleinern und einen etablierten professionellen Piercer konsultieren.',
    'log.rapidThinningAlert': 'Achtung: Der untere Randabstand hat sich seit dem letzten Eintrag um {drop} mm verringert. Schnelle Ausdünnung deutet auf übermäßige Spannung hin.',

    'gauge.18g': '18g - 1,0 mm',
  'gauge.16g': '16g - 1,2 mm',
  'gauge.14g': '14g - 1,6 mm',
  'gauge.12g': '12g - 2,0 mm',
  'gauge.10g': '10g - 2,4 mm',
  'gauge.8g': '8g - 3,2 mm',
  'gauge.7g': '7g - 3,5 mm (Zwischengröße)',
  'gauge.6g': '6g - 4,0 mm',
  'gauge.5g': '5g - 4,5 mm (Zwischengröße)',
  'gauge.4g': '4g - 5,0 mm',
  'gauge.3g': '3g - 5,5 mm (Zwischengröße)',
  'gauge.2g': '2g - 6,0 mm',
  'gauge.1g': '1g - 7,0 mm (Zwischengröße)',
  'gauge.0g': '0g - 8,0 mm',
  'gauge.9mm': '9 mm (Zwischenschritt)',
  'gauge.00g': '00g - 10,0 mm',
  'gauge.11mm': '11 mm (Zwischenschritt)',
  'gauge.12mm': '12 mm',
  'gauge.13mm': '13 mm (Zwischenschritt)',
  'gauge.14mm': '14 mm',
  'gauge.15mm': '15 mm (Zwischenschritt)',
  'gauge.16mm': '16 mm (5/8 Zoll)',
  'gauge.17mm': '17 mm (Zwischenschritt)',
  'gauge.18mm': '18 mm (Zwischenschritt)',
  'gauge.19mm': '19 mm (3/4 Zoll)',
  'gauge.20mm': '20 mm (Zwischenschritt)',
  'gauge.22mm': '22 mm (7/8 Zoll)',
  'gauge.24mm': '24 mm (Zwischenschritt)',
  'gauge.25mm': '25,4 mm (1 Zoll)',
  'gauge.28mm': '28 mm',
  'gauge.32mm': '32 mm',
  'gauge.38mm': '38 mm',
  'gauge.50mm': '50,8 mm (2 Zoll)'  },
  es: {
  // Document Metadata
  'page.title': 'Planificador de tiempos para dilatación de lóbulos | Poli International',
  'page.metaDescription': 'Planifica el estiramiento gradual de los lóbulos de las orejas talla a talla, al ritmo que el tejido tolere. Dos orejas, pasos intermedios, pruebas de preparación y registro fechado.',

  // Header & Navigation
  'app.badge': 'Práctica profesional de piercing seguro',
  'app.title': 'Planificador de dilatación de lóbulos',
  'app.subtitle': 'Planifica la dilatación gradual de tus lóbulos, una medida a la vez, al ritmo natural que soporte tu tejido. Gestión para ambas orejas, incrementos intermedios paso a paso, evaluaciones de preparación y registro fechado.',
  'lang.label': 'Idioma',
  'lang.en': 'Inglés',
  'lang.fr': 'Francés',
  'lang.it': 'Lengua italiana',
  'lang.de': 'Alemán',
  'lang.es': 'Español',
  'lang.nl': 'Neerlandés',
  'lang.pt': 'Portugués',
  'theme.toggleDark': 'Cambiar a tema oscuro',
  'theme.toggleLight': 'Cambiar a tema claro',
  
  // Ear Tabs
  'tab.left': 'Oreja izquierda',
  'tab.right': 'Oreja derecha',
  'tab.copy': 'Copiar ajustes de izquierda a derecha',
  'tab.copyToRight': 'Copiar ajustes de izquierda a derecha',
  'tab.copyToLeft': 'Copiar ajustes de derecha a izquierda',
  'tab.copySuccess': 'Ajustes de la oreja izquierda copiados en la oreja derecha',
  
  // Plan Configuration
  'config.heading': 'Configuración del plan',
  'config.from': 'Tamaño actual / Calibre',
  'config.to': 'Tamaño objetivo / Calibre',
  'config.selectFrom': 'Selecciona el tamaño actual...',
  'config.selectTo': 'Selecciona el tamaño objetivo...',
  'config.startDate': 'Fecha en que se colocó la medida actual',
  'config.startDateHelp': 'Se utiliza para calcular la fecha segura más próxima para el siguiente estiramiento según el tiempo de cicatrización.',
  'config.planBtn': 'Generar plan paso a paso',
  'config.resetEar': 'Restablecer esta oreja',
  'config.confirmReset': '¿Deseas restablecer la configuración y el historial de dilatación de esta oreja?',
  
  // Validation Errors
  'error.selectBoth': 'Por favor, selecciona tanto tu tamaño actual como tu tamaño objetivo.',
  'error.targetSmaller': 'El tamaño objetivo debe ser mayor que el tamaño actual.',
  'error.skipNotice': 'El plan genera cada paso intermedio. No te saltes tamaños al comprar joyas o al dilatar.',
  'error.refuseJump': 'Salto no permitido: No puedes pasar directamente de {current} a {target}. Saltarse medidas intermedias ({skipped}) provoca un alto riesgo de blowout y desgarro tisular. La dilatación debe avanzar estrictamente un paso a la vez. El siguiente paso permitido es {next}.',
  'error.futureDate': 'La fecha no puede ser futura. Por favor, selecciona el día de hoy o una fecha pasada.',
  'error.enterCurrentFirst': 'Por favor, selecciona primero tu tamaño actual en la configuración del plan antes de registrar una dilatación.',
  
  // Next Earliest Date Banner
  'nextDate.title': 'Fecha segura más próxima para dilatar',
  'nextDate.notSet': 'Establece arriba tu tamaño actual y la fecha de colocación para calcular la fecha mínima recomendada.',
  'nextDate.readyNow': '¡El período mínimo de cicatrización ha concluido! Completa la prueba de preparación a continuación antes de continuar.',
  'nextDate.reasonPrefix': 'Basado en',
  'nextDate.weeksHealing': '{weeks} semanas mínimas de cicatrización para {size} ({mm} mm)',
  'nextDate.sinceDate': 'desde la colocación el {date}.',
  'nextDate.delayNotice': 'Incluye {weeks} semanas de reposo adicional porque el tejido fue clasificado como "no listo" durante la revisión.',
  'nextDate.exportIcs': 'Añadir al calendario (.ics)',
  
  // Readiness Assessment
  'readiness.heading': 'Al ritmo del tejido: Evaluación de preparación',
  'readiness.intro': 'Una fecha de calendario es solo un umbral mínimo. El tejido solo se dilata con seguridad cuando está completamente relajado y regenerado. Comprueba con total honestidad cada criterio antes de pasar a la siguiente medida:',
  'readiness.checkPain': 'Cero dolor, sensibilidad o escozor al tocar o mover el lóbulo.',
  'readiness.checkRedness': 'Cero enrojecimiento, inflamación o calor localizado alrededor de la fístula.',
  'readiness.checkDischarge': 'Cero secreciones, costras, sangrado o piel viva y supurante.',
  'readiness.checkMovement': 'La joya actual gira y se desliza hacia adelante y hacia atrás sin esfuerzo y con cero fricción.',
  'readiness.btnReady': 'Tejido listo para avanzar',
  'readiness.btnNotYet': 'Aún no está listo (+3 semanas de reposo)',
  'readiness.statusReady': 'Se ha confirmado que el tejido está listo. Registra tu próxima dilatación abajo cuando coloques el nuevo tamaño.',
  'readiness.statusNotYet': 'Se han añadido 3 semanas de reposo. El tejido debe descansar hasta que desaparezca cualquier rastro de irritación.',
  'readiness.statusPending': 'Evaluación de preparación pendiente. Confirma los 4 puntos antes de dilatar.',
  'readiness.alertVerifyCriteria': 'Por favor, verifica con sinceridad los 4 criterios antes de confirmar. El tejido debe estar libre de toda molestia o tirantez.',
  
  // Timeline Summary Stats
  'summary.stretches': 'pasos en total',
  'summary.minWeeks': 'semanas como mínimo',
  'summary.minMonths': 'meses como mínimo',
  'summary.whyWaitsGrow': 'Los tiempos de espera crecen con el tamaño porque los diámetros mayores expanden una circunferencia de tejido mayor por milímetro (ΔC = π × Δd), requiriendo una remodelación de colágeno progresivamente más larga.',
  
  // Step Timeline
  'timeline.heading': 'Secuencia de tamaños paso a paso',
  'timeline.currentBadge': 'Tamaño actual',
  'timeline.nextBadge': 'Siguiente paso',
  'timeline.targetBadge': 'Meta',
  'timeline.waitLabel': 'Esperar {min}–{max} semanas con el tejido sano antes de avanzar',
  
  // Point of No Return Notice
  'largeSize.heading': 'Nota sincera sobre medidas grandes: El punto de no retorno (~12–13 mm / 1/2")',
  'largeSize.body': 'Por encima de aproximadamente media pulgada (~12 mm a 13 mm / 00g a 1/2"), los lóbulos dilatados normalmente no vuelven a cerrarse por sí solos. La elasticidad del tejido tiene límites biológicos; una vez cruzado este punto de no retorno, la reconstrucción quirúrgica de lóbulos (lobuloplastia) es la solución habitual a la que se recurre si se desea cerrarlos. Planifica tu meta considerando esta modificación permanente. Ningún estiramiento debe asumirse reversible.',
  'largeSize.alertActive': 'El tamaño objetivo alcanza o supera 12,0 mm (1/2"): Recuerda que el tejido dilatado más allá de este diámetro comúnmente requiere cirugía reconstructiva si alguna vez decides cerrarlo.',
  
  // Warning Signs Section
  'warning.heading': 'Señales de advertencia: Detección temprana y actuación',
  'warning.intro': 'Si experimentas cualquiera de las siguientes complicaciones, DETÉN la dilatación de inmediato. Bajar de tamaño y dejar reposar el tejido es la única forma de proteger el lóbulo.',
  'warning.blowoutTitle': 'Blowout: Eversión del reborde de la fístula (vista frontal y corte transversal)',
  'warning.blowoutDesc': 'Qué es: La presión desmedida empuja el delicado revestimiento interno de la fístula hacia atrás o hacia adelante fuera del orificio, dándole la vuelta como un calcetín. Aspecto frontal: Un reborde de tejido enrojecido, levantado y en carne viva que sobresale en el borde exterior del plug. En corte transversal: La pared del canal interno se ha herniado por detrás de la joya. Esto NUNCA se soluciona continuando con el estiramiento. Reduce inmediatamente 1–2 medidas, deja reposar por completo y consulta con un anillador profesional.',
  'warning.tearTitle': 'Microdesgarro / Fisura',
  'warning.tearDesc': 'Escozor agudo, sangrado o supuración dentro del túnel durante o tras la inserción. Indica paredes celulares lesionadas. Reduce el calibre o retira la joya, trátalo como una herida abierta con solución salina estéril y nunca fuerces la entrada.',
  'warning.thinningTitle': 'Adelgazamiento del lóbulo',
  'warning.thinningDesc': 'El puente inferior del lóbulo se vuelve delgado, pálido o translúcido bajo el plug por aumentos apresurados de tamaño, pesos excesivos o riego sanguíneo insuficiente. Reduce el tamaño de inmediato para restablecer el flujo sanguíneo y permitir que el tejido recupere grosor.',
  'warning.painTitle': 'Dolor persistente / Presión continua',
  'warning.painDesc': 'Pulsaciones, ardor punzante o pinchazos intensos que duran más de unos minutos. Un estiramiento adecuado se realiza prácticamente sin fricción y con cero dolor. Si encuentras resistencia, el tejido no está listo.',
  'warning.actionBox': 'Acción requerida ante cualquier señal de alarma: Reduce el tamaño de inmediato (downsizing), coloca joyas lisas de una sola pestaña, deja reposar el tejido totalmente y acude a un anillador profesional.',
  
  // Inline SVG Diagrams
  'svg.blowoutAria': 'Diagrama de blowout en lóbulo de oreja mostrando vista frontal y sección transversal',
  'svg.blowoutFront': 'Frente: Reborde de tejido',
  'svg.blowoutCross': 'Corte transversal',
  'svg.tearAria': 'Diagrama de desgarro y fisura en la fístula',
  'svg.tearMicro': 'Microdesgarro',
  'svg.thinningAria': 'Diagrama de adelgazamiento del borde inferior del lóbulo',
  'svg.thinningMargin': 'Margen crítico delgado (<2mm)',
  'svg.painAria': 'Diagrama de tejido inflamado bajo tensión',
  'svg.painThrobbing': 'Pulsación / Presión',

  // Jewellery & Materials Section
  'jewellery.heading': 'Joyería para dilatar: Plugs, conos y peso',
  'jewellery.plugsLabel': 'Plugs frente a conos:',
  'jewellery.plugsText': 'Los plugs lisos de una sola pestaña o sin pestañas con bordes redondeados son la referencia para dilatar. Reparten la presión de manera homogénea por toda la fístula sin roscas que puedan rasgar el delicado tejido.',
  'jewellery.tapersLabel': 'Herramienta de guía únicamente:',
  'jewellery.tapersText': 'Los conos (tapers) son herramientas de guía para el anillador durante la inserción; NUNCA deben utilizarse para forzar una dilatación ni llevarse puestos como joya. Su peso asimétrico actúa como palanca, descentrando la perforación y provocando un grave adelgazamiento inferior del lóbulo.',
  'jewellery.weightLabel': 'Peso y adelgazamiento:',
  'jewellery.weightText': 'Los plugs pesados (acero macizo, latón, piedra) generan una tracción constante hacia abajo que desgasta y afina el puente inferior en medidas grandes. Usa materiales biocompatibles y ligeros para salvaguardar el grosor del lóbulo.',
  'jewellery.materialsLabel': 'Materiales:',
  'jewellery.materialsText': 'Utiliza siempre materiales biocompatibles con pulido espejo: BioFlex® body jewelry de grado médico (copolímero aleatorio PP-R), titanio ASTM F-136 o acero para implantes 316LVM.',
  'jewellery.linksIntro': 'Para medidas exactas, tablas de conversión y seguimiento de cicatrización:',
  'jewellery.linkVisualizer': 'Visualizador de medidas de joyas',
  'jewellery.linkConverter': 'Conversor de calibres',
  'jewellery.linkTracker': 'Seguimiento de cicatrización',
  
  // Stretch History Log
  'log.heading': 'Registro de dilataciones',
  'log.intro': 'Anota la fecha en que se insertó cada medida y lo que observaste. Tu plan y la fecha segura más próxima se recalcularán según tu ritmo real, creando un historial verídico para mostrar a tu anillador.',
  'log.sizeLabel': 'Tamaño alcanzado',
  'log.dateLabel': 'Fecha de dilatación',
  'log.notesLabel': 'Observación / Reacción del tejido',
  'log.notesPlaceholder': 'ej. Entró con cero resistencia tras una ducha tibia; sin enrojecimiento ni molestia.',
  'log.addBtn': 'Registrar este paso',
  'log.empty': 'Aún no hay dilataciones registradas para esta oreja. Registra tu primer paso arriba para comenzar tu historial personal.',
  'log.thDate': 'Fecha de registro',
  'log.thSize': 'Calibre',
  'log.thMm': 'Milímetros',
  'log.thNotes': 'Anotaciones',
  'log.thAction': 'Opciones',
  'log.delete': 'Eliminar',
  'log.confirmDelete': '¿Deseas eliminar este registro del historial?',
  
  // Print & Persistence
  'actions.print': 'Imprimir plan / Guardar en PDF',
  'actions.clearAll': 'Borrar todos los datos almacenados',
  'actions.confirmClear': '¿Seguro que deseas borrar todos los planes de orejas y los historiales de dilatación guardados en este navegador?',
  'print.disclaimer': 'Historial de dilatación y estimaciones de tiempo declarados por el usuario. Este documento refleja exclusivamente los datos ingresados por el usuario.',
  
  // Footer Disclaimer
  'disclaimer.title': 'Nota primordial sobre variaciones individuales',
  'disclaimer.body': 'Estos cronogramas representan intervalos mínimos recomendados basados en tejido sano y en la práctica profesional establecida del piercing. La síntesis de colágeno y la elasticidad del tejido varían sensiblemente entre personas. El tejido cicatrizal, traumatismos previos o climas fríos requieren períodos de reposo más largos. Nunca dilates tejido irritado. Consulta siempre con un anillador profesional ante cualquier duda.',

  // Calendar Export
  'ics.summary': 'Revisión de preparación para dilatación ({earLabel}: {nextSizeDisplay})',
  'ics.description': 'Evaluación de preparación para {earLabel} hacia {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nCriterios a verificar antes de intentar la colocación:\\n- Cero dolor o escozor\\n- Cero enrojecimiento o calor\\n- Cero secreción o costras\\n- La joya gira y se mueve libremente sin resistencia\\n\\nMotivo: {reason}\\n\\nSi falla algún control, no fuerces la inserción. Reduce de medida o deja descansar.',

  // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Preguntas Frecuentes & Consejos de Expertos',
    'faq.subtitle': 'Respuestas claras sobre técnicas de dilatación, higiene diaria y prevención de complicaciones',
    'faq.filterAll': 'Todas las preguntas',
    'faq.filterStretching': 'Técnica de dilatación',
    'faq.filterCare': 'Cuidado diario & Limpieza',
    'faq.filterTroubleshooting': 'Resolución de problemas & Salud',
    'faq.q1': '¿Cómo sé cuándo mis lóbulos están realmente listos para la siguiente medida?',
    'faq.a1': 'El tejido solo está listo cuando se encuentra completamente cicatrizado, relajado y elástico. La joya actual debe deslizarse hacia adelante y hacia atrás sin esfuerzo y girar sin tirones, resistencia ni costras. El tiempo mínimo de espera es solo un punto de partida biológico; si siente tirantez, ardor o calor al intentar la siguiente medida, deténgase de inmediato y descanse de 2 a 4 semanas adicionales.',
    'faq.q2': '¿Por qué se desaconsejan los conos (tapers) y qué se debe usar en su lugar?',
    'faq.a2': 'Los conos actúan como cuñas mecánicas que fuerzan el tejido más allá de su límite natural, provocando microdesgarros y blowouts. Además, usarlos como joyas genera un peso desigual que adelgaza el borde inferior del lóbulo. En su lugar, practique el estiramiento natural (dead-stretching) con plugs lisos de una sola campana de vidrio borosilicato, BioFlex® body jewelry (copolímero aleatorio PP-R) o titanio grado implante ASTM F-136.',
    'faq.q3': '¿Qué son las medidas intermedias (7g, 1g, 9 mm, 11 mm) y por qué se recomiendan?',
    'faq.a3': 'Las tablas tradicionales contienen saltos bruscos y peligrosos: por ejemplo, pasar de 2g (6,0 mm) a 0g (8,0 mm) representa un salto de 2,0 mm (+33% de expansión en un solo día). Utilizar medias medidas (como 1g / 7,0 mm o 9 mm entre 0g y 00g) limita cada incremento a 0,5 mm o 1,0 mm, protegiendo la irrigación sanguínea y evitando blowouts irreversibles.',
    'faq.q4': '¿Cómo debo limpiar a diario mis lóbulos dilatados y las joyas?',
    'faq.a4': 'Una vez cicatrizados, retire los plugs durante su ducha tibia diaria para enjuagar el canal con agua corriente y un limpiador suave sin fragancia de pH neutro. Lave sus joyas por separado y seque completamente tanto las orejas como los plugs antes de volver a colocarlos. Nunca use alcohol, agua oxigenada ni antisépticos abrasivos, que resecan, agrietan e inflaman la piel sana.',
    'faq.q5': '¿Qué aceites se recomiendan para los masajes y cuándo se puede comenzar?',
    'faq.a5': 'Los masajes diarios de 3 a 5 minutos con aceite puro de jojoba prensado en frío, aceite de emú o vitamina E estimulan la microcirculación, suavizan el tejido cicatrizal y mejoran la elasticidad del colágeno. Realice masajes únicamente sobre tejido sano e intacto. Nunca aplique aceites ni bálsamos en dilataciones recientes, microdesgarros o piel irritada.',
    'faq.q6': '¿Qué ocasiona el mal olor en el lóbulo y cómo se previene?',
    'faq.a6': 'El olor del lóbulo se debe a la acumulación natural de células muertas descamadas (queratina) y sebo atrapados en el canal cálido entre la joya y la piel. Se previene retirando los plugs cicatrizados en la ducha diaria, lavando bien la fístula, secando por completo y eligiendo materiales no porosos como vidrio, titanio o BioFlex® body jewelry.',
    'faq.q7': '¿Qué debo hacer de inmediato si una dilatación duele, sangra o se desgarra?',
    'faq.a7': 'El dolor nunca es normal durante la dilatación. Si siente pinchazos intensos, latidos o sangrado, retire la joya mayor de inmediato y baje 1 o 2 medidas para aliviar la tensión sobre el tejido dañado. Lave dos veces al día con solución salina estéril (cloruro de sodio al 0,9%), trátelo como una herida abierta y no intente volver a dilatar durante al menos 2 o 3 meses.',
    'faq.q8': '¿Cómo reconocer y tratar un blowout en el lóbulo?',
    'faq.a8': 'Un blowout ocurre cuando una presión excesiva hace que el revestimiento interno de la fístula se evagine hacia afuera, formando un reborde de tejido enrojecido detrás o delante del orificio. Si esto sucede, reduzca inmediatamente de 1 a 2 tamaños, inserte el plug reducido desde el lado donde sobresale el tejido para ayudarlo a volver a su lugar, evite los aceites y consulte a un piercer profesional experimentado.',
    'faq.q9': '¿Cuál es el «punto de no retorno» donde los lóbulos ya no pueden cerrarse solos?',
    'faq.a9': 'En la mayoría de las anatomías, el punto de no retorno se sitúa alrededor de los 12 mm a 13 mm (~00g a 1/2 pulgada). Más allá de este umbral, las fibras elásticas de la dermis sufren una alteración permanente y los lóbulos generalmente no volverán al tamaño de pendientes estándar (18g-16g). Quien supere los 10-12 mm debe saber que puede requerirse una reconstrucción quirúrgica de lóbulo para cerrarlos.',
    'faq.q10': '¿Puedo dormir sin los plugs para mantener los lóbulos gruesos y saludables?',
    'faq.a10': 'Dormir sin joyas («naked sleeping») es excelente para mejorar la circulación sanguínea y conservar el grosor del lóbulo en tamaños grandes (por lo general a partir de 2g / 6,0 mm). Sin embargo, comience únicamente cuando una medida lleve al menos 2 o 3 meses completamente asentada. Entrene sus orejas de forma gradual: empiece con 30 minutos al día, luego unas horas, antes de pasar una noche entera, asegurándose de que el plug entre sin resistencia.',

      // Extended Protocols & Features
    'rehab.cardTitle': 'Planificador de Reducción & Rehabilitación',
    'rehab.intro': 'Si experimenta dolor, desgarro, sangrado o un blowout, reducir la tensión tisular de inmediato es esencial para preservar el riego sanguíneo y evitar cicatrices permanentes.',
    'rehab.issueLabel': 'Complicación Observada',
    'rehab.issueSelect': 'Seleccionar complicación...',
    'rehab.issueBlowout': 'Blowout (reborde de tejido que sobresale detrás de la joya)',
    'rehab.issueTear': 'Microdesgarro o sangrado tras la inserción',
    'rehab.issuePain': 'Dolor pulsátil persistente, calor o enrojecimiento',
    'rehab.issueThinning': 'Adelgazamiento del borde inferior o necrosis por presión',
    'rehab.actionBtn': 'Calcular Plan de Reducción',
    'rehab.recommendedSize': 'Tamaño Reducido Recomendado',
    'rehab.recommendedRest': 'Duración del Reposo de Rehabilitación',
    'rehab.restDetails': 'De 8 a 12 semanas sin ninguna tensión de dilatación y baños con solución salina estéril de cloruro de sodio al 0,9%.',
    'rehab.protocolHeading': 'Protocolo de Rehabilitación de Emergencia',
    'rehab.step1': 'Retire la joya tensa e inserte sin forzar un plug de vidrio de ala simple o titanio ASTM F-136 de 1 a 2 tamaños más pequeño.',
    'rehab.step2': 'Realice baños tibios con solución salina estéril de cloruro de sodio al 0,9% dos veces al día durante 5 a 10 minutos.',
    'rehab.step3': 'No aplique aceites en heridas abiertas hasta que la piel cierre por completo. Una vez cicatrizada, masajee suavemente con aceite de jojoba a diario.',
    'rehab.step4': 'Mantenga este tamaño reducido durante al menos 8 a 12 semanas antes de revaluar el tejido con un perforador profesional establecido.',
    'rehab.applyBtn': 'Aplicar Reducción a Esta Oreja',
    'rehab.appliedSuccess': 'Reducción a {size} y reposo de rehabilitación aplicados a {earLabel}.',
    'rehab.noSizeWarning': 'Seleccione primero su tamaño actual en la configuración del plan superior.',
    'halfsize.toggleLabel': 'Imponer Medios Tamaños (Pasos de 0,5 mm a 1,0 mm)',
    'halfsize.helpText': 'Exige pasos intermedios (como 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) para evitar saltos traumáticos de 2,0 mm.',
    'halfsize.badge': 'Hito de Medio Tamaño',
    'halfsize.warningSkipHalf': 'La imposición de medios tamaños está activa. Omitir el tamaño intermedio {halfSize} no está permitido. Dilate primero a {halfSize}.',
    'naked.cardTitle': 'Protocolo de Dormir sin Joyas & Acondicionamiento',
    'naked.intro': 'Para calibres de 2g (6,0 mm) o mayores, acostumbrar los lóbulos a dormir sin joyas alivia la presión, restaura la microcirculación y preserva el grosor del borde inferior.',
    'naked.eligibilityNotice': 'El entrenamiento para dormir sin joyas se recomienda para fístulas completamente curadas a partir de 2g (6,0 mm) con al menos 8 a 12 semanas de reposo.',
    'naked.currentPhaseLabel': 'Fase de Acondicionamiento',
    'naked.phase1Title': 'Fase 1: Descansos Diurnos (Semanas 1–2)',
    'naked.phase1Desc': 'Retire las joyas durante 30 a 45 minutos en el descanso vespertino. Masajee con aceite de jojoba y reinserte.',
    'naked.phase2Title': 'Fase 2: Acondicionamiento Vespertino (Semanas 3–4)',
    'naked.phase2Desc': 'Deje los lóbulos libres durante 1 a 2 horas por la tarde antes de dormir. Reinserte el plug lubricado para la noche.',
    'naked.phase3Title': 'Fase 3: Horas Libres Prolongadas (Semanas 5–6)',
    'naked.phase3Desc': 'Deje los lóbulos libres de 3 a 4 horas. Los plugs deben deslizarse suavemente sin ninguna resistencia.',
    'naked.phase4Title': 'Fase 4: Primera Noche Completa (Semanas 7–8)',
    'naked.phase4Desc': 'Duerma sin joyas durante 6 a 8 horas. Por la mañana, masajee con aceite e inserte con suavidad plugs de vidrio de ala simple.',
    'naked.phase5Title': 'Fase 5: Hábito Nocturno (Mantenimiento)',
    'naked.phase5Desc': 'Duerma sin joyas cada noche para evitar enganches con la almohada, mantener la elasticidad y recuperar el colágeno dérmico.',
    'naked.logTodayBtn': 'Registrar Sesión sin Joyas de Hoy',
    'naked.loggedSuccess': '¡Sesión de acondicionamiento sin joyas registrada para {earLabel}!',
    'naked.sessionsCompleted': 'Total de Sesiones sin Joyas Completadas: {count}',
    'log.rimMarginLabel': 'Margen del Borde Inferior (mm, opcional)',
    'log.rimMarginPlaceholder': 'ej. 5.0',
    'log.pliabilityLabel': 'Flexibilidad de la Fístula',
    'log.pliabilitySelect': 'Seleccionar textura del tejido...',
    'log.pliabilitySoft': 'Suave y elástico',
    'log.pliabilityModerate': 'Firmeza leve / pequeño relieve',
    'log.pliabilityRigid': 'Tejido cicatricial denso / rígido',
    'log.sensationLabel': 'Sensación del Tejido',
    'log.sensationNormal': 'Cómodo / sin dolor',
    'log.sensationTender': 'Sensible al tacto leve',
    'log.sensationIrritated': 'Seco, con picor o escozor',
    'log.thRim': 'Margen Inferior',
    'log.thPliability': 'Salud del Tejido',
    'log.thinningAlertTitle': 'Alerta de Adelgazamiento del Lóbulo',
    'log.thinningAlertDesc': 'Una medida de {mm} mm indica tejido adelgazado. Detenga las dilataciones, duerma sin joyas o reduzca el tamaño y consulte a un perforador profesional establecido.',
    'log.rapidThinningAlert': 'Advertencia: El grosor del borde inferior disminuyó {drop} mm desde el registro anterior. El adelgazamiento rápido indica tensión excesiva.',

    'gauge.18g': '18g - 1,0 mm',
  'gauge.16g': '16g - 1,2 mm',
  'gauge.14g': '14g - 1,6 mm',
  'gauge.12g': '12g - 2,0 mm',
  'gauge.10g': '10g - 2,4 mm',
  'gauge.8g': '8g - 3,2 mm',
  'gauge.7g': '7g - 3,5 mm (media talla)',
  'gauge.6g': '6g - 4,0 mm',
  'gauge.5g': '5g - 4,5 mm (media talla)',
  'gauge.4g': '4g - 5,0 mm',
  'gauge.3g': '3g - 5,5 mm (media talla)',
  'gauge.2g': '2g - 6,0 mm',
  'gauge.1g': '1g - 7,0 mm (media talla)',
  'gauge.0g': '0g - 8,0 mm',
  'gauge.9mm': '9 mm (intermedio)',
  'gauge.00g': '00g - 10,0 mm',
  'gauge.11mm': '11 mm (intermedio)',
  'gauge.12mm': '12 mm',
  'gauge.13mm': '13 mm (intermedio)',
  'gauge.14mm': '14 mm',
  'gauge.15mm': '15 mm (intermedio)',
  'gauge.16mm': '16 mm (5/8 de pulgada)',
  'gauge.17mm': '17 mm (intermedio)',
  'gauge.18mm': '18 mm (intermedio)',
  'gauge.19mm': '19 mm (3/4 de pulgada)',
  'gauge.20mm': '20 mm (intermedio)',
  'gauge.22mm': '22 mm (7/8 de pulgada)',
  'gauge.24mm': '24 mm (intermedio)',
  'gauge.25mm': '25,4 mm (1 pulgada)',
  'gauge.28mm': '28 mm',
  'gauge.32mm': '32 mm',
  'gauge.38mm': '38 mm',
  'gauge.50mm': '50,8 mm (2 pulgadas)'
  },
  nl: {
  // Document Metadata
  'page.title': 'Tijdlijnplanner voor het stretchen van oorlellen | Poli International',
  'page.metaDescription': 'Plan geleidelijke oorlel-stretching maat voor maat in het tempo dat het weefsel toelaat. Twee oren, tussenstappen, controlepunten en gedateerd logboek.',

  // Header & Navigation
  'app.badge': 'Veilige piercingpraktijk',
  'app.title': 'Tijdlijnplanner voor oorlel-stretching',
  'app.subtitle': 'Plan het geleidelijk oprekken van uw oorlellen, stap voor stap op het natuurlijke tempo van uw weefsel. Voor beide oren, met tussenmaten, gereedheidscontroles en een gedateerd stretchlogboek.',
  'lang.label': 'Taal',
  'lang.en': 'Engels',
  'lang.fr': 'Frans',
  'lang.it': 'Italiaans',
  'lang.de': 'Duits',
  'lang.es': 'Spaans',
  'lang.nl': 'Nederlands',
  'lang.pt': 'Portugees',
  'theme.toggleDark': 'Naar donker thema schakelen',
  'theme.toggleLight': 'Naar licht thema schakelen',
  
  // Ear Tabs
  'tab.left': 'Linkeroor',
  'tab.right': 'Rechteroor',
  'tab.copy': 'Instellingen van links naar rechts kopiëren',
  'tab.copyToRight': 'Instellingen van links naar rechts kopiëren',
  'tab.copyToLeft': 'Instellingen van rechts naar links kopiëren',
  'tab.copySuccess': 'Instellingen van linkeroor naar rechteroor gekopieerd',
  
  // Plan Configuration
  'config.heading': 'Plan-configuratie',
  'config.from': 'Huidige maat / Gauge',
  'config.to': 'Doelmaat / Gauge',
  'config.selectFrom': 'Huidige maat selecteren...',
  'config.selectTo': 'Doelmaat selecteren...',
  'config.startDate': 'Datum waarop huidige maat geplaatst is',
  'config.startDateHelp': 'Wordt gebruikt om de vroegst mogelijke volgende stretchdatum te berekenen op basis van de genezingstijd.',
  'config.planBtn': 'Stapsgewijs plan genereren',
  'config.resetEar': 'Dit oor resetten',
  'config.confirmReset': 'Instellingen en stretchgeschiedenis voor dit oor resetten?',
  
  // Validation Errors
  'error.selectBoth': 'Selecteer zowel uw huidige maat als uw gewenste doelmaat.',
  'error.targetSmaller': 'De doelmaat moet groter zijn dan de huidige maat.',
  'error.skipNotice': 'Het plan berekent elke tussenstap. Sla bij aankoop of het stretchen nooit tussenmaten over.',
  'error.refuseJump': 'Sprong geweigerd: U kunt niet direct van {current} naar {target} gaan. Het overslaan van tussenmaten ({skipped}) brengt acute risico\'s met zich mee op een ernstige blowout en weefselscheuren. Stretchen moet strikt stap voor stap verlopen. De eerstvolgende toegestane stap is {next}.',
  'error.futureDate': 'Datum kan niet in de toekomst liggen. Kies vandaag of een eerdere datum.',
  'error.enterCurrentFirst': 'Selecteer eerst uw huidige maat in de configuratie voordat u een stretch toevoegt.',
  
  // Next Earliest Date Banner
  'nextDate.title': 'Vroegst mogelijke veilige stretchdatum',
  'nextDate.notSet': 'Stel hierboven uw huidige maat en plaatsingsdatum in om uw vroegste datum te berekenen.',
  'nextDate.readyNow': 'De minimale geneesperiode is verstreken! Voltooi onderstaande gereedheidscontrole voor u verdergaat.',
  'nextDate.reasonPrefix': 'Gebaseerd op',
  'nextDate.weeksHealing': '{weeks} weken minimale genezingstijd voor {size} ({mm} mm)',
  'nextDate.sinceDate': 'sinds de plaatsing op {date}.',
  'nextDate.delayNotice': 'Bevat {weeks} weken extra rusttijd omdat het weefsel tijdens de controle als "nog niet klaar" werd beoordeeld.',
  'nextDate.exportIcs': 'Aan kalender toevoegen (.ics)',
  
  // Readiness Assessment
  'readiness.heading': 'Het tempo van het weefsel: Gereedheidscontrole',
  'readiness.intro': 'Een kalenderdatum is louter een vroegste richtlijn. Weefsel rekt pas veilig op wanneer het volledig ontspannen en hersteld is. Beoordeel elk punt eerlijk voordat u de volgende maat aanraakt:',
  'readiness.checkPain': 'Geen enkele pijn, gevoeligheid of prikkeling bij aanraking of beweging van de oorlel.',
  'readiness.checkRedness': 'Geen enkele roodheid, zwelling of lokale warmte rond het fistelkanaal.',
  'readiness.checkDischarge': 'Geen wondvocht, korstvorming, bloeding of open, vochtige huid.',
  'readiness.checkMovement': 'Het huidige sieraad draait en glijdt moeiteloos naar voren en achteren zonder enige wrijving.',
  'readiness.btnReady': 'Weefsel is klaar voor de volgende stap',
  'readiness.btnNotYet': 'Nog niet klaar (+3 weken extra rust)',
  'readiness.statusReady': 'Weefsel is aantoonbaar gereed. Noteer hieronder uw volgende stretch wanneer u de nieuwe maat inbrengt.',
  'readiness.statusNotYet': '3 weken herstelrust toegevoegd. Het weefsel moet rusten tot alle tekenen van irritatie verdwenen zijn.',
  'readiness.statusPending': 'Controle in afwachting. Bevestig alle 4 de criteria voor u gaat stretchen.',
  'readiness.alertVerifyCriteria': 'Controleer alle 4 de voorwaarden oprecht voordat u bevestigt. Het weefsel moet vrij zijn van elk ongemak of weerstand.',
  
  // Timeline Summary Stats
  'summary.stretches': 'stappen in totaal',
  'summary.minWeeks': 'weken minimaal',
  'summary.minMonths': 'maanden minimaal',
  'summary.whyWaitsGrow': 'Wachttijden lopen op met de maat omdat grotere diameters per millimeter meer weefselomtrek oprekken (ΔC = π × Δd), wat stapsgewijs meer collageenhermodellering vraagt.',
  
  // Step Timeline
  'timeline.heading': 'Stapsgewijze matenvolgorde',
  'timeline.currentBadge': 'Huidige maat',
  'timeline.nextBadge': 'Volgende stap',
  'timeline.targetBadge': 'Einddoel',
  'timeline.waitLabel': 'Wacht {min}–{max} weken met hersteld weefsel alvorens op te rekken',
  
  // Point of No Return Notice
  'largeSize.heading': 'Eerlijke toelichting bij grote maten: Het point of no return (~12–13 mm / 1/2")',
  'largeSize.body': 'Boven ongeveer een halve inch (~12 mm tot 13 mm / 00g tot 1/2") krimpen opgerekte oorlellen doorgaans niet meer vanzelf terug. Weefselelasticiteit kent biologische grenzen; is dit punt eenmaal gepasseerd, dan is chirurgische oorlelreconstructie (lobe repair) de gebruikelijke weg wanneer men het gat wil sluiten. Bepaal uw doelmaat met deze blijvende verandering voor ogen. Geen enkele stretch mag als vanzelfsprekend omkeerbaar worden beschouwd.',
  'largeSize.alertActive': 'Doelmaat bereikt of overschrijdt 12,0 mm (1/2"): Houd er rekening mee dat weefsel voorbij deze diameter meestal plastische reconstructie vergt om weer dicht te gaan.',
  
  // Warning Signs Section
  'warning.heading': 'Waarschuwingssignalen: Vroegtijdige herkenning & ingrijpen',
  'warning.intro': 'Mocht u een van de volgende complicaties opmerken, STOP dan direct met stretchen. Een maat kleiner dragen en rust gunnen is de enige manier om uw weefsel te redden.',
  'warning.blowoutTitle': 'Blowout: Uitstulping van de fistelwand (vooraanzicht en doorsnede)',
  'warning.blowoutDesc': 'Wat het is: Buitensporige druk duwt de kwetsbare binnenwand van het fistelkanaal naar voren of achteren uit het gat, waardoor het binnenstebuiten keert. Zichtbaar aan de voorkant: Een rode, verdikte, rauwe weefselrand die langs de buitenkant van de plug uitsteekt. In doorsnede: De binnenwand van het kanaal is achter het sieraad gehernieerd. Dit herstelt NOOIT door door te stretchen. Schaal direct 1–2 maten terug, geef volledige rust en raadpleeg een professionele piercer.',
  'warning.tearTitle': 'Microscheurtje / Weefselscheur',
  'warning.tearDesc': 'Scherpe stekende pijn, bloeding of wondvocht in het kanaal tijdens of na het inbrengen. Wijst op beschadigd celweefsel. Schaal terug of verwijder het sieraad, verzorg als een open wond met fysiologisch zout en forceer nooit.',
  'warning.thinningTitle': 'Verdunning van de oorlel',
  'warning.thinningDesc': 'De onderste rand van de oorlel onder de plug wordt dun, bleek of doorzichtig door overhaast stretchen, te zware gewichten of een belemmerde doorbloeding. Ga direct een maat kleiner om de bloedsomloop te herstellen en het weefsel dikte terug te laten krijgen.',
  'warning.painTitle': 'Aanhoudende pijn / Drukkend gevoel',
  'warning.painDesc': 'Kloppend gevoel, branderig trekken of scherpe steken die langer dan een paar minuten aanhouden. Veilig stretchen hoort vrijwel wrijvingsloos en geheel pijnloos te verlopen. Voelt u weerstand, dan is het weefsel niet klaar.',
  'warning.actionBox': 'Vereiste actie bij elk waarschuwingssignaal: Schaal direct terug in maat (downsizing), plaats een glad single-flare sieraad, geef het weefsel totale rust en raadpleeg een deskundige piercer.',
  
  // Inline SVG Diagrams
  'svg.blowoutAria': 'Diagram van een blowout in de oorlel met vooraanzicht en dwarsdoorsnede',
  'svg.blowoutFront': 'Voorkant: Uitstulpende rand',
  'svg.blowoutCross': 'Dwarsdoorsnede',
  'svg.tearAria': 'Diagram van scheur en kloof in het fistelkanaal',
  'svg.tearMicro': 'Microscheurtje',
  'svg.thinningAria': 'Diagram van verdunning van de onderste oorlelrand',
  'svg.thinningMargin': 'Kritieke dunne rand (<2mm)',
  'svg.painAria': 'Diagram van geïrriteerd weefsel onder spanning',
  'svg.painThrobbing': 'Kloppend / Spanning',

  // Jewellery & Materials Section
  'jewellery.heading': 'Sieraden voor stretching: Plugs, tapers en gewichten',
  'jewellery.plugsLabel': 'Plugs versus tapers:',
  'jewellery.plugsText': 'Gladde single-flare of no-flare plugs met afgeronde uiteinden zijn de gouden standaard voor stretching. Ze verdelen de druk gelijkmatig over de gehele fistel zonder schroefdraad die teer weefsel kan beschadigen.',
  'jewellery.tapersLabel': 'Uitsluitend richtgereedschap:',
  'jewellery.tapersText': 'Tapers zijn uitsluitend inbrenghulpmiddelen voor de piercer bij het wisselen; ze mogen NOOIT worden gebruikt om een stretch te forceren of als sieraad worden gedragen. Door hun ongelijke gewicht fungeren ze als hefboom, waardoor het gat scheef trekt en de onderkant ernstig verdunt.',
  'jewellery.weightLabel': 'Gewicht en verdunning:',
  'jewellery.weightText': 'Zware plugs (massief staal, messing, steen) veroorzaken een neerwaartse trekkracht die bij grotere maten de onderste weefselbrug verdunt. Gebruik lichte, biocompatibele materialen om de weefseldikte te behouden.',
  'jewellery.materialsLabel': 'Materialen:',
  'jewellery.materialsText': 'Gebruik te allen tijde biocompatibele, spiegelglad gepolijste materialen: medische BioFlex® body jewelry (PP-R random copolymeer), ASTM F-136 titanium of 316LVM implantaatstaal.',
  'jewellery.linksIntro': 'Voor exacte afmetingen, maattabellen en nazorggidsen:',
  'jewellery.linkVisualizer': 'Sieraadmaat visualisator',
  'jewellery.linkConverter': 'Maat- en gauge-omrekenaar',
  'jewellery.linkTracker': 'Genezingstracker',
  
  // Stretch History Log
  'log.heading': 'Stretchgeschiedenis logboek',
  'log.intro': 'Houd bij wanneer elke maat daadwerkelijk is geplaatst en wat u waarnam. Uw planning en vroegste datum passen zich aan uw reële tempo aan, wat een betrouwbaar overzicht oplevert voor uw piercer.',
  'log.sizeLabel': 'Bereikte maat',
  'log.dateLabel': 'Stretchdatum',
  'log.notesLabel': 'Waarneming / Weefselreactie',
  'log.notesPlaceholder': 'bijv. Gleed zonder weerstand naar binnen na warme douche; geen roodheid of knelling.',
  'log.addBtn': 'Deze stap opslaan',
  'log.empty': 'Nog geen stretches vastgelegd voor dit oor. Sla uw eerste stap hierboven op om uw logboek te starten.',
  'log.thDate': 'Invoerdag',
  'log.thSize': 'Maatwaarde',
  'log.thMm': 'Millimeters',
  'log.thNotes': 'Bevindingen',
  'log.thAction': 'Optiemenu',
  'log.delete': 'Wissen',
  'log.confirmDelete': 'Dit item uit het logboek verwijderen?',
  
  // Print & Persistence
  'actions.print': 'Plan afdrukken / Opslaan als PDF',
  'actions.clearAll': 'Alle opgeslagen gegevens wissen',
  'actions.confirmClear': 'Weet u zeker dat u alle opgeslagen oorplannen en stretchgeschiedenissen uit deze browser wilt wissen?',
  'print.disclaimer': 'Overzicht van door de gebruiker zelf ingevoerde stretchgegevens en tijdschattingen. Dit document weerspiegelt uitsluitend invoer van de gebruiker.',
  
  // Footer Disclaimer
  'disclaimer.title': 'Belangrijke opmerking over individuele variatie',
  'disclaimer.body': 'Deze tijdslijnen zijn minimale adviesintervallen gebaseerd op gezond weefsel en gevestigde professionele piercingpraktijken. Collageensynthese en weefselelasticiteit verschillen aanzienlijk van persoon tot persoon. Littekenweefsel, eerdere beschadigingen of koud weer vereisen langere rustperiodes. Rek nooit geïrriteerd weefsel op. Raadpleeg bij twijfel altijd een professionele piercer.',

  // Calendar Export
  'ics.summary': 'Gereedheidscontrole oorlel-stretching ({earLabel}: {nextSizeDisplay})',
  'ics.description': 'Gereedheidsbeoordeling voor {earLabel} naar {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nControlepunten voorafgaand aan het inbrengen:\\n- Geen pijn of steken\\n- Geen roodheid of warmte\\n- Geen wondvocht of korstjes\\n- Sieraad draait en beweegt soepel zonder weerstand\\n\\nReden: {reason}\\n\\nAls ook maar één punt niet klopt, niet forceren. Een maat terugschalen of rusten.',

  // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Veelgestelde Vragen & Deskundig Advies',
    'faq.subtitle': 'Duidelijke antwoorden over rektechnieken, dagelijkse hygiëne en het voorkomen van complicaties',
    'faq.filterAll': 'Alle vragen',
    'faq.filterStretching': 'Rektechniek',
    'faq.filterCare': 'Dagelijkse verzorging & Reiniging',
    'faq.filterTroubleshooting': 'Probleemoplossing & Gezondheid',
    'faq.q1': 'Hoe weet ik of mijn oorlellen echt klaar zijn voor de volgende maat?',
    'faq.a1': 'Weefsel is pas gereed wanneer het volledig genezen, ontspannen en soepel is. Uw huidige sieraad moet moeiteloos naar voren en achteren glijden en soepel draaien zonder knellen, weerstand of korstjes. De minimale wachttijd is slechts een biologische basisrichtlijn; voelt u spanning, een branderig gevoel of warmte bij het inbrengen van de volgende maat, stop dan onmiddellijk en neem 2 tot 4 weken extra rust.',
    'faq.q2': 'Waarom worden tapers (rekpennen) afgeraden en wat moet ik in plaats daarvan gebruiken?',
    'faq.a2': 'Tapers werken als mechanische wiggen waarmee weefsel gemakkelijk voorbij zijn natuurlijke rekgrens wordt geforceerd, wat leidt tot microscheurtjes en blowouts. Bovendien veroorzaakt het dragen ervan als sieraad een hefboomwerking die de onderrand van de oorlel verdunt. Gebruik in plaats daarvan dead-stretching met gladde, afgeronde single-flare plugs van borosilicaatglas, BioFlex® body jewelry (PP-R willekeurig copolymeer) of ASTM F-136 implantaat-titanium.',
    'faq.q3': 'Wat zijn tussenmaten (bijv. 7g, 1g, 9 mm, 11 mm) en waarom worden ze aanbevolen?',
    'faq.a3': 'Traditionele gauge-tabellen bevatten gevaarlijk grote stappen: de overstap van 2g (6,0 mm) naar 0g (8,0 mm) is bijvoorbeeld een sprong van maar liefst 2,0 mm (+33% weefseluitrekking op één dag). Halve tussenmaten (zoals 1g / 7,0 mm of 9 mm tussen 0g en 00g) beperken elke stap tot 0,5 mm à 1,0 mm, waardoor de bloedtoevoer intact blijft en onherstelbare blowouts worden voorkomen.',
    'faq.q4': 'Hoe moet ik mijn opgerekte oorlellen en sieraden dagelijks reinigen?',
    'faq.a4': 'Verwijder genezen plugs tijdens uw dagelijkse warme douche om het fistelkanaal af te spoelen met schoon lauw water en een milde, geurvrije reiniger met neutrale pH. Was uw sieraden apart en droog zowel de oren als de plugs grondig af voordat u ze opnieuw inbrengt. Gebruik nooit ontsmettingsalcohol, waterstofperoxide of agressieve antibacteriële zepen die gezond weefsel uitdrogen en irriteren.',
    'faq.q5': 'Welke oliën worden aanbevolen voor oorlelmassages en wanneer mag ik beginnen?',
    'faq.a5': 'Dagelijkse massages van 3 tot 5 minuten met pure koudgeperste jojoba-olie, emoe-olie of vitamine E-olie stimuleren de microcirculatie, versoepelen littekenweefsel en bevorderen de collageenelasticiteit. Masseer uitsluitend volledig genezen, intacte huid. Breng nooit oliën of balsems aan op pas opgerekte lellen, open wondjes of geïrriteerde huid.',
    'faq.q6': 'Wat veroorzaakt oorlelgeur en hoe kan ik dit voorkomen?',
    'faq.a6': 'Oorlelgeur ontstaat door een natuurlijke ophoping van afgestoten dode huidcellen (keratine) en talg in het warme kanaal tussen het sieraad en de huid. Voorkom dit door genezen plugs tijdens het douchen uit te nemen, de fistel grondig te wassen, volledig te laten drogen en niet-poreuze materialen te kiezen zoals glas, titanium of BioFlex® body jewelry.',
    'faq.q7': 'Wat moet ik direct doen als het oprekken pijn doet, bloedt of scheurt?',
    'faq.a7': 'Pijn hoort nooit bij het oprekken van oorlellen. Ervaart u een scherpe steek, kloppen of bloed, verwijder het grotere sieraad dan onmiddellijk en stap 1 tot 2 maten terug om de spanning van het beschadigde weefsel te halen. Spoel tweemaal daags met een steriele fysiologische zoutoplossing (0,9% natriumchloride), behandel het als een open wond en wacht minstens 2 tot 3 maanden voor een nieuwe poging.',
    'faq.q8': 'Hoe herken en behandel ik een blowout van de oorlel?',
    'faq.a8': 'Een blowout treedt op wanneer overmatige druk de binnenbekleding van het fistelkanaal naar buiten perst, waardoor een opstaande, rode weefselrand ontstaat aan de voor- of achterkant van het gaatje. Gebeurt dit, verklein dan direct met 1 tot 2 maten, breng de kleinere plug in vanaf de zijde waar het weefsel uitpuilt om het terug te geleiden, vermijd oliën en raadpleeg een erkende professionele piercer.',
    'faq.q9': 'Wat is het «point of no return» waarna oorlellen niet meer vanzelf sluiten?',
    'faq.a9': 'Bij de meeste anatomieën ligt het point of no return rond 12 mm tot 13 mm (ongeveer 00g tot 1/2 inch). Boven deze grens zijn de elastische vezels in de lederhuid blijvend uitgerekt, waardoor de lellen niet meer terugkrimpen naar standaard oorbellenmaten (18g-16g). Wie voorbij 10-12 mm rekt, moet er rekening mee houden dat een chirurgische reconstructie nodig kan zijn om de gaten te sluiten.',
    'faq.q10': 'Kan ik slapen zonder plugs om mijn oorlellen gezond en dik te houden?',
    'faq.a10': 'Gewend slapen zonder sieraden («naked sleeping») bevordert de bloedsomloop en helpt een stevige onderrand van de oorlel te behouden bij grotere maten (meestal vanaf 2g / 6,0 mm). Begin hier pas mee als een maat minstens 2 tot 3 maanden stabiel is. Bouw dit geleidelijk op: start met 30 minuten per dag, breid uit naar enkele uren en probeer daarna pas een hele nacht, waarbij de plug altijd zonder enige weerstand moet terugglijden.',

      // Extended Protocols & Features
    'rehab.cardTitle': 'Afbouw- & Blowout-Revalidatieplanner',
    'rehab.intro': 'Bij pijn, scheurtjes, bloeding of een blowout is onmiddellijke spanningsvermindering noodzakelijk om de bloedtoevoer te beschermen en blijvende littekens te voorkomen.',
    'rehab.issueLabel': 'Waargenomen Complicatie',
    'rehab.issueSelect': 'Selecteer complicatie...',
    'rehab.issueBlowout': 'Blowout (opstaande weefselrand achter het sieraad)',
    'rehab.issueTear': 'Microscheurtje of bloeding na inbrengen',
    'rehab.issuePain': 'Aanhoudende kloppende pijn, warmte of roodheid',
    'rehab.issueThinning': 'Dunner wordende onderrand of drukpuntsnecrose',
    'rehab.actionBtn': 'Stap-terug-plan Berekenen',
    'rehab.recommendedSize': 'Aanbevolen Kleinere Maat',
    'rehab.recommendedRest': 'Herstelrustperiode',
    'rehab.restDetails': '8 tot 12 weken zonder enige rekspanning en met steriele 0,9% natriumchloride-fysiologische zoutoplossing.',
    'rehab.protocolHeading': 'Noodrevalidatieprotocol',
    'rehab.step1': 'Verwijder strakke sieraden en plaats zonder forceren een schone single-flare glazen of ASTM F-136 titanium plug van 1 tot 2 maten kleiner.',
    'rehab.step2': 'Voer tweemaal daags 5 tot 10 minuten warme badjes uit met steriele 0,9% natriumchloride-zoutoplossing.',
    'rehab.step3': 'Breng geen oliën of balsems aan op open wondjes totdat de huid volledig gesloten is. Masseer daarna dagelijks zacht met jojoba-olie.',
    'rehab.step4': 'Behoud deze verkleinde maat minimaal 8 tot 12 weken voordat u de weefselrijping opnieuw laat beoordelen door een gevestigde professionele piercer.',
    'rehab.applyBtn': 'Afbouw Toepassen op dit Oor',
    'rehab.appliedSuccess': 'Afbouw naar {size} met herstelrust toegepast op {earLabel}.',
    'rehab.noSizeWarning': 'Selecteer eerst uw huidige maat in de bovenstaande planconfiguratie.',
    'halfsize.toggleLabel': 'Halve Maten Afdwingen (Stappen van 0,5 mm – 1,0 mm)',
    'halfsize.helpText': 'Verplicht tussenstappen (zoals 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) om traumatische sprongen van 2,0 mm te voorkomen.',
    'halfsize.badge': 'Tussenmaat-Mijlpaal',
    'halfsize.warningSkipHalf': 'Afdwingen van halve maten is actief. Tussenmaat {halfSize} overslaan is niet toegestaan. Rek eerst naar {halfSize}.',
    'naked.cardTitle': 'Sieradenloos Slapen & Conditioneringsprotocol',
    'naked.intro': 'Vanaf 2g (6,0 mm) verlicht slapen zonder sieraden de druk, herstelt het de microcirculatie en beschermt het de dikte van de onderste oorlelrand.',
    'naked.eligibilityNotice': 'Training in sieradenloos slapen wordt aanbevolen voor volledig genezen fistels vanaf 2g (6,0 mm) met minimaal 8 tot 12 weken rusttijd.',
    'naked.currentPhaseLabel': 'Conditioneringsfase',
    'naked.phase1Title': 'Fase 1: Dagpauzes (Weken 1–2)',
    'naked.phase1Desc': 'Verwijder sieraden 30 tot 45 minuten tijdens avondontspanning. Masseer met jojoba-olie en breng opnieuw in.',
    'naked.phase2Title': 'Fase 2: Avondconditionering (Weken 3–4)',
    'naked.phase2Desc': 'Laat de lellen \'s avonds 1 tot 2 uur bloot voor het slapen. Breng voor de nacht een bevochtigde plug in.',
    'naked.phase3Title': 'Fase 3: Verlengde Blootgestelde Uren (Weken 5–6)',
    'naked.phase3Desc': 'Laat de lellen 3 tot 4 uur bloot. De plugs moeten soepel en zonder enige weerstand terugkeren.',
    'naked.phase4Title': 'Fase 4: Eerste Volledige Nacht (Weken 7–8)',
    'naked.phase4Desc': 'Slaap 6 tot 8 uur zonder sieraden. Masseer \'s ochtends met olie en breng voorzichtig single-flare glazen plugs in.',
    'naked.phase5Title': 'Fase 5: Nachtelijke Gewoonte (Onderhoud)',
    'naked.phase5Desc': 'Slaap elke nacht bloot om kussenhaakjes te voorkomen, elasticiteit te behouden en huidcollageen op te bouwen.',
    'naked.logTodayBtn': 'Sieradenloze Sessie van Vandaag Vastleggen',
    'naked.loggedSuccess': 'Sieradenloze conditioneringssessie vastgelegd voor {earLabel}!',
    'naked.sessionsCompleted': 'Totaal Voltooide Sieradenloze Sessies: {count}',
    'log.rimMarginLabel': 'Onderrandmarge (mm, optioneel)',
    'log.rimMarginPlaceholder': 'bijv. 5.0',
    'log.pliabilityLabel': 'Fistelbuigzaamheid',
    'log.pliabilitySelect': 'Selecteer weefselgevoel...',
    'log.pliabilitySoft': 'Zacht & elastisch',
    'log.pliabilityModerate': 'Lichte stevigheid / klein randje',
    'log.pliabilityRigid': 'Dicht / stug littekenweefsel',
    'log.sensationLabel': 'Weefselgevoel',
    'log.sensationNormal': 'Comfortabel / geen gevoeligheid',
    'log.sensationTender': 'Gevoelig bij lichte aanraking',
    'log.sensationIrritated': 'Droog, jeukend of branderig',
    'log.thRim': 'Randmarge',
    'log.thPliability': 'Weefselgezondheid',
    'log.thinningAlertTitle': 'Waarschuwing Oorlelverdunning',
    'log.thinningAlertDesc': 'Een onderrandmarge van {mm} mm wijst op dunner wordend weefsel. Stop direct met oprekken, slaap zonder sieraden of verklein de maat, en raadpleeg een gevestigde professionele piercer.',
    'log.rapidThinningAlert': 'Waarschuwing: De dikte van de onderrand is sinds het vorige logboek met {drop} mm afgenomen. Snelle verdunning duidt op overmatige spanning.',

    'gauge.18g': '18g - 1,0 mm',
  'gauge.16g': '16g - 1,2 mm',
  'gauge.14g': '14g - 1,6 mm',
  'gauge.12g': '12g - 2,0 mm',
  'gauge.10g': '10g - 2,4 mm',
  'gauge.8g': '8g - 3,2 mm',
  'gauge.7g': '7g - 3,5 mm (tussenmaat)',
  'gauge.6g': '6g - 4,0 mm',
  'gauge.5g': '5g - 4,5 mm (tussenmaat)',
  'gauge.4g': '4g - 5,0 mm',
  'gauge.3g': '3g - 5,5 mm (tussenmaat)',
  'gauge.2g': '2g - 6,0 mm',
  'gauge.1g': '1g - 7,0 mm (tussenmaat)',
  'gauge.0g': '0g - 8,0 mm',
  'gauge.9mm': '9 mm (tussenstap)',
  'gauge.00g': '00g - 10,0 mm',
  'gauge.11mm': '11 mm (tussenstap)',
  'gauge.12mm': '12 mm',
  'gauge.13mm': '13 mm (tussenstap)',
  'gauge.14mm': '14 mm',
  'gauge.15mm': '15 mm (tussenstap)',
  'gauge.16mm': '16 mm (5/8 duim)',
  'gauge.17mm': '17 mm (tussenstap)',
  'gauge.18mm': '18 mm (tussenstap)',
  'gauge.19mm': '19 mm (3/4 duim)',
  'gauge.20mm': '20 mm (tussenstap)',
  'gauge.22mm': '22 mm (7/8 duim)',
  'gauge.24mm': '24 mm (tussenstap)',
  'gauge.25mm': '25,4 mm (1 duim)',
  'gauge.28mm': '28 mm',
  'gauge.32mm': '32 mm',
  'gauge.38mm': '38 mm',
  'gauge.50mm': '50,8 mm (2 duim)'
  },
  pt: {
  // Document Metadata
  'page.title': 'Planeador de cronograma de alargamento de lóbulos | Poli International',
  'page.metaDescription': 'Planeie o alargamento gradual dos lóbulos das orelhas tamanho a tamanho, no ritmo tolerado pelo tecido. Duas orelhas, passos intermédios, avaliações e registo datado.',

  // Header & Navigation
  'app.badge': 'Prática profissional de piercing seguro',
  'app.title': 'Planeador de alargamento de lóbulos',
  'app.subtitle': 'Planeie o alargamento gradual dos seus lóbulos, um tamanho de cada vez, no ritmo natural suportado pelo seu tecido. Gestão para ambas as orelhas, aumentos intermédios passo a passo, avaliações de prontidão e registo datado.',
  'lang.label': 'Língua',
  'lang.en': 'Inglês',
  'lang.fr': 'Francês',
  'lang.it': 'Língua italiana',
  'lang.de': 'Alemão',
  'lang.es': 'Espanhol',
  'lang.nl': 'Holandês',
  'lang.pt': 'Português',
  'theme.toggleDark': 'Mudar para tema escuro',
  'theme.toggleLight': 'Mudar para tema claro',
  
  // Ear Tabs
  'tab.left': 'Orelha esquerda',
  'tab.right': 'Orelha direita',
  'tab.copy': 'Copiar definições da esquerda para a direita',
  'tab.copyToRight': 'Copiar definições da esquerda para a direita',
  'tab.copyToLeft': 'Copiar definições da direita para a esquerda',
  'tab.copySuccess': 'Definições da orelha esquerda copiadas para a orelha direita',
  
  // Plan Configuration
  'config.heading': 'Configuração do plano',
  'config.from': 'Tamanho atual / Gauge',
  'config.to': 'Tamanho pretendido / Gauge',
  'config.selectFrom': 'Selecione o tamanho atual...',
  'config.selectTo': 'Selecione o tamanho pretendido...',
  'config.startDate': 'Data de colocação do tamanho atual',
  'config.startDateHelp': 'Utilizada para calcular a data segura mais próxima para o próximo alargamento com base no tempo de cicatrização.',
  'config.planBtn': 'Gerar plano passo a passo',
  'config.resetEar': 'Repor esta orelha',
  'config.confirmReset': 'Pretende repor as definições e o histórico de alargamento desta orelha?',
  
  // Validation Errors
  'error.selectBoth': 'Por favor, selecione tanto o seu tamanho atual como o pretendido.',
  'error.targetSmaller': 'O tamanho pretendido deve ser superior ao tamanho atual.',
  'error.skipNotice': 'O plano calcula cada etapa intermédia. Não salte tamanhos ao comprar joias ou ao alargar.',
  'error.refuseJump': 'Salto recusado: Não pode passar diretamente de {current} para {target}. Saltar tamanhos intermédios ({skipped}) acarreta um risco grave de blowout e laceração tecidual. O alargamento deve progredir estritamente um passo de cada vez. O próximo passo permitido é {next}.',
  'error.futureDate': 'A data não pode estar no futuro. Por favor, escolha a data de hoje ou uma data anterior.',
  'error.enterCurrentFirst': 'Por favor, selecione primeiro o seu tamanho atual na configuração antes de registar um alargamento.',
  
  // Next Earliest Date Banner
  'nextDate.title': 'Data segura mais próxima para alargar',
  'nextDate.notSet': 'Defina acima o tamanho atual e a data de colocação para calcular a primeira data recomendada.',
  'nextDate.readyNow': 'O intervalo mínimo de cicatrização foi atingido! Conclua a avaliação de prontidão abaixo antes de prosseguir.',
  'nextDate.reasonPrefix': 'Com base em',
  'nextDate.weeksHealing': '{weeks} semanas mínimas de cicatrização para {size} ({mm} mm)',
  'nextDate.sinceDate': 'desde a colocação a {date}.',
  'nextDate.delayNotice': 'Inclui {weeks} semanas de repouso adicional porque o tecido foi considerado "ainda não preparado".',
  'nextDate.exportIcs': 'Adicionar ao calendário (.ics)',
  
  // Readiness Assessment
  'readiness.heading': 'Ao ritmo do tecido: Avaliação de prontidão',
  'readiness.intro': 'Uma data de calendário é meramente um limite mínimo temporal. O tecido só se alarga em segurança quando estiver plenamente relaxado e regenerado. Verifique com honestidade cada critério antes de tocar no tamanho seguinte:',
  'readiness.checkPain': 'Ausência total de dor, sensibilidade ou picada ao tocar ou movimentar o lóbulo.',
  'readiness.checkRedness': 'Ausência total de vermelhidão, inchaço ou calor localizado em torno da fístula.',
  'readiness.checkDischarge': 'Ausência total de secreções, crostas, sangramento ou pele ferida e húmida.',
  'readiness.checkMovement': 'A joia atual roda e desliza para a frente e para trás sem esforço e com atrito zero.',
  'readiness.btnReady': 'Tecido preparado para avançar',
  'readiness.btnNotYet': 'Ainda não preparado (+3 semanas de repouso)',
  'readiness.statusReady': 'Tecido confirmado como preparado. Registe o próximo alargamento abaixo quando inserir o novo tamanho.',
  'readiness.statusNotYet': 'Adicionada pausa de recuperação de 3 semanas. O tecido tem de repousar até dissipação total de qualquer irritação.',
  'readiness.statusPending': 'Avaliação de prontidão pendente. Confirme os 4 critérios antes de alargar.',
  'readiness.alertVerifyCriteria': 'Por favor, confirme com rigor todos os 4 critérios antes de prosseguir. O tecido deve estar isento de qualquer desconforto ou atrito.',
  
  // Timeline Summary Stats
  'summary.stretches': 'passos no total',
  'summary.minWeeks': 'semanas no mínimo',
  'summary.minMonths': 'meses no mínimo',
  'summary.whyWaitsGrow': 'Os períodos de espera aumentam com o calibre porque diâmetros maiores distendem uma circunferência tecidual superior por cada milímetro (ΔC = π × Δd), exigindo uma remodelação de colagénio progressivamente mais demorada.',
  
  // Step Timeline
  'timeline.heading': 'Sequência dos calibres passo a passo',
  'timeline.currentBadge': 'Tamanho atual',
  'timeline.nextBadge': 'Próximo passo',
  'timeline.targetBadge': 'Objetivo',
  'timeline.waitLabel': 'Aguardar {min}–{max} semanas de tecido cicatrizado antes de avançar',
  
  // Point of No Return Notice
  'largeSize.heading': 'Nota transparente sobre tamanhos grandes: O ponto de não retorno (~12–13 mm / 1/2")',
  'largeSize.body': 'Acima de cerca de meia polegada (~12 mm a 13 mm / 00g a 1/2"), os lóbulos dilatados habitualmente já não fecham por si próprios. A elasticidade dos tecidos possui barreiras biológicas; ultrapassado este ponto sem retorno, a reconstrução cirúrgica do lóbulo (lobuloplastia) é a intervenção procurada se se desejar fechá-los. Planeie a sua meta com esta alteração definitiva em mente. Nenhum alargamento deve ser assumido como reversível.',
  'largeSize.alertActive': 'O tamanho pretendido atinge ou excede 12,0 mm (1/2"): Tenha presente que o tecido além deste diâmetro geralmente exige cirurgia reconstrutiva caso decida voltar atrás.',
  
  // Warning Signs Section
  'warning.heading': 'Sinais de alerta: Deteção precoce e intervenção',
  'warning.intro': 'Se detetar qualquer uma das seguintes complicações, INTERROMPA o processo de imediato. Reduzir o tamanho e dar repouso é a única forma de preservar a saúde do seu tecido.',
  'warning.blowoutTitle': 'Blowout: Eversão da fístula (vista frontal e corte transversal)',
  'warning.blowoutDesc': 'O que é: A pressão desmedida empurra o delicado revestimento interno da fístula para trás ou para a frente para fora do orifício, virando-o do avesso como uma meia. Aspeto frontal: Um rebordo avermelhado, saliente e em carne viva projetado na margem exterior do plug. Em corte transversal: A parede do canal herniou por detrás da joia. Isto NUNCA se resolve continuando a alargar. Reduza de imediato 1–2 tamanhos, proporcione repouso absoluto e consulte um body piercer profissional.',
  'warning.tearTitle': 'Microrrasgo / Fissura',
  'warning.tearDesc': 'Sensação de ardor agudo, sangramento ou exsudado no canal durante ou após a colocação. Indica paredes celulares rompidas. Reduza o calibre ou retire a joia, trate como ferida aberta com soro fisiológico estéril e nunca force a inserção.',
  'warning.thinningTitle': 'Afinamento do lóbulo',
  'warning.thinningDesc': 'A borda inferior do lóbulo fica fina, pálida ou translúcida por baixo do plug devido a transições apressadas, joias excessivamente pesadas ou irrigação sanguínea comprometida. Reduza o tamanho de imediato para restabelecer o fluxo sanguíneo e permitir que o tecido recupere espessura.',
  'warning.painTitle': 'Dor persistente / Pressão contínua',
  'warning.painDesc': 'Pulsação, queimação forte ou aperto agudo que dura mais do que breves minutos. Um alargamento adequado ocorre praticamente sem atrito e sem dor alguma. Se houver resistência, o lóbulo não está preparado.',
  'warning.actionBox': 'Ação mandatória perante qualquer sinal de alarme: Reduza o tamanho imediatamente (downsizing), coloque joias lisas de aba única, conceda repouso total ao tecido e consulte um body piercer profissional.',
  
  // Inline SVG Diagrams
  'svg.blowoutAria': 'Diagrama de blowout em lóbulo de orelha com vista frontal e corte transversal',
  'svg.blowoutFront': 'Frente: Rebordo saliente',
  'svg.blowoutCross': 'Secção transversal',
  'svg.tearAria': 'Diagrama de laceração e fissura na fístula',
  'svg.tearMicro': 'Microrrasgo',
  'svg.thinningAria': 'Diagrama do afinamento da margem inferior do lóbulo',
  'svg.thinningMargin': 'Margem crítica fina (<2mm)',
  'svg.painAria': 'Diagrama de tecido inflamado sob pressão',
  'svg.painThrobbing': 'Pulsação / Pressão',

  // Jewellery & Materials Section
  'jewellery.heading': 'Joias para alargamento: Plugs, pinos guia e peso',
  'jewellery.plugsLabel': 'Plugs versus pinos guia:',
  'jewellery.plugsText': 'Plugs lisos de aba única ou sem abas com extremidades arredondadas constituem o padrão ouro no alargamento. Distribuem a pressão de forma homogénea por toda a fístula sem roscas suscetíveis de ferir tecidos sensíveis.',
  'jewellery.tapersLabel': 'Exclusivamente ferramentas guia:',
  'jewellery.tapersText': 'Os cones (tapers) são estritamente ferramentas guia utilizadas pelo piercer durante a colocação; NUNCA devem ser usados para forçar um alargamento nem transportados como adorno. O seu peso descompensado funciona como alavanca, desnivelando a perfuração e provocando um afinamento grave da base do lóbulo.',
  'jewellery.weightLabel': 'Peso e afinamento:',
  'jewellery.weightText': 'Plugs pesados (aço maciço, latão, pedra) exercem uma tração vertical constante que adelgaça a ponte inferior em diâmetros elevados. Privilegie materiais biocompatíveis e leves para salvaguardar a espessura do lóbulo.',
  'jewellery.materialsLabel': 'Materiais:',
  'jewellery.materialsText': 'Utilize sempre materiais biocompatíveis com acabamento espelhado: BioFlex® body jewelry de grau médico (copolímero aleatório PP-R), titânio ASTM F-136 ou aço cirúrgico para implantes 316LVM.',
  'jewellery.linksIntro': 'Para calibres exatos, tabelas de conversão e acompanhamento:',
  'jewellery.linkVisualizer': 'Visualizador de tamanho de joias',
  'jewellery.linkConverter': 'Conversor de calibres e gauges',
  'jewellery.linkTracker': 'Registo de cicatrização',
  
  // Stretch History Log
  'log.heading': 'Registo cronológico de alargamentos',
  'log.intro': 'Registe quando cada tamanho foi efetivamente colocado e o que observou. O seu plano e a data segura mais próxima ajustar-se-ão ao seu ritmo real, criando um histórico fiável para apresentar ao seu piercer.',
  'log.sizeLabel': 'Calibre atingido',
  'log.dateLabel': 'Data de alargamento',
  'log.notesLabel': 'Observação / Reação tecidual',
  'log.notesPlaceholder': 'ex. Entrou sem qualquer atrito após duche quente; sem vermelhidão nem aperto.',
  'log.addBtn': 'Registar este passo',
  'log.empty': 'Ainda não existem alargamentos registados nesta orelha. Registe o seu primeiro passo acima para iniciar o seu diário pessoal.',
  'log.thDate': 'Data do passo',
  'log.thSize': 'Calibre medido',
  'log.thMm': 'Milímetros (mm)',
  'log.thNotes': 'Notas de campo',
  'log.thAction': 'Comandos',
  'log.delete': 'Remover',
  'log.confirmDelete': 'Deseja eliminar este registo cronológico?',
  
  // Print & Persistence
  'actions.print': 'Imprimir plano / Guardar em PDF',
  'actions.clearAll': 'Apagar todos os dados guardados',
  'actions.confirmClear': 'Tem a certeza de que pretende apagar todos os planos e históricos de alargamento guardados neste navegador?',
  'print.disclaimer': 'Registo do histórico de alargamento e estimativas cronológicas inseridos pelo utilizador. Este documento reflete unicamente os dados introduzidos pelo utilizador.',
  
  // Footer Disclaimer
  'disclaimer.title': 'Aviso fundamental sobre divergências individuais',
  'disclaimer.body': 'Estes cronogramas refletem intervalos mínimos aconselhados assentes em tecido saudável e na prática profissional comprovada de body piercing. A síntese de colagénio e a flexibilidade dos tecidos oscilam expressivamente de pessoa para pessoa. Tecido cicatricial, traumas anteriores ou temperaturas frias exigem prazos ampliados. Nunca alargue tecido inflamado. Em caso de hesitação, consulte sempre um body piercer profissional.',

  // Calendar Export
  'ics.summary': 'Verificação de prontidão para alargamento ({earLabel}: {nextSizeDisplay})',
  'ics.description': 'Avaliação de prontidão para {earLabel} para {nextSizeDisplay} ({nextSizeMm} mm).\\n\\nCritérios a conferir antes de tentar a inserção:\\n- Nenhuma dor ou picada\\n- Nenhuma vermelhidão ou calor\\n- Nenhuma secreção ou crosta\\n- A joia move-se e gira livremente sem atrito\\n\\nMotivo: {reason}\\n\\nSe falhar algum critério, não force a passagem. Reduza o calibre ou deixe repousar.',

  // Gauge Labels (33 Sizes)

    // Expandable FAQ Section
    'faq.heading': 'Perguntas Frequentes & Orientações de Especialistas',
    'faq.subtitle': 'Respostas claras sobre técnicas de alargamento, higiene diária e prevenção de complicações',
    'faq.filterAll': 'Todas as perguntas',
    'faq.filterStretching': 'Técnica de alargamento',
    'faq.filterCare': 'Cuidados diários & Limpeza',
    'faq.filterTroubleshooting': 'Resolução de problemas & Saúde',
    'faq.q1': 'Como sei quando os meus lóbulos estão verdadeiramente prontos para o tamanho seguinte?',
    'faq.a1': 'O tecido só está pronto quando se encontra totalmente cicatrizado, relaxado e maleável. A joia atual deve deslizar para a frente e para trás sem esforço e rodar sem aperto, resistência nem crostas. O intervalo mínimo em semanas é apenas uma referência biológica básica; se sentir tensão, ardor ou calor ao tentar o tamanho seguinte, pare de imediato e aguarde de 2 a 4 semanas adicionais de repouso.',
    'faq.q2': 'Por que os alargadores cônicos (tapers) são desencorajados e o que devo usar em vez disso?',
    'faq.a2': 'Os cones funcionam como cunhas mecânicas que forçam facilmente o tecido além do seu limite natural, provocando microfissuras e blowouts. Além disso, usá-los como joias cria um peso de alavanca irregular que afina a borda inferior do lóbulo. Em vez disso, pratique o alargamento natural (dead-stretching) com plugs lisos de aba única em vidro borossilicato, BioFlex® body jewelry (copolímero aleatório PP-R) ou titânio de grau de implante ASTM F-136.',
    'faq.q3': 'O que são tamanhos intermediários (como 7g, 1g, 9 mm, 11 mm) e por que são recomendados?',
    'faq.a3': 'As tabelas tradicionais contêm saltos bruscos e perigosos: por exemplo, passar de 2g (6,0 mm) para 0g (8,0 mm) é um salto de 2,0 mm (+33% de expansão do tecido num único dia). O uso de meios tamanhos intermediários (como 1g / 7,0 mm ou 9 mm entre 0g e 00g) limita cada etapa a 0,5 mm-1,0 mm, protegendo o fluxo vascular e prevenindo blowouts irreversíveis.',
    'faq.q4': 'Como devo higienizar os meus lóbulos alargados e as joias diariamente?',
    'faq.a4': 'Após a cicatrização completa, retire os plugs durante o banho morno diário para enxaguar o canal com água morna limpa e um sabonete suave de pH neutro sem perfume. Lave as suas joias separadamente e seque muito bem as orelhas e os plugs antes de os recolocar. Nunca utilize álcool etílico, água oxigenada ou desinfetantes agressivos, que desidratam, gretam e inflamam o tecido saudável.',
    'faq.q5': 'Quais óleos são recomendados para massagens nos lóbulos e quando posso começar?',
    'faq.a5': 'Massagens diárias de 3 a 5 minutos com óleo puro de jojoba prensado a frio, óleo de emu ou vitamina E estimulam a microcirculação, amaciam o tecido cicatricial e reforçam a elasticidade do colagénio. Realize massagens apenas em pele perfeitamente cicatrizada e íntegra. Nunca aplique óleos ou bálsamos em alargamentos recentes, microfissuras ou pele irritada.',
    'faq.q6': 'O que provoca o odor no lóbulo e como posso eliminá-lo?',
    'faq.a6': 'O odor no lóbulo é uma acumulação natural de células mortas descamadas (queratina) misturadas com sebo cutâneo no canal quente entre a joia e a pele. Pode preveni-lo retirando os plugs cicatrizados no banho diário, lavando bem a fístula, secando completamente e optando por materiais não porosos como vidro, titânio ou BioFlex® body jewelry.',
    'faq.q7': 'O que devo fazer de imediato se o alargamento doer, sangrar ou rasgar?',
    'faq.a7': 'A dor nunca é normal durante o alargamento. Se sentir pontadas agudas, latejamento ou sangramento, retire a joia maior imediatamente e desça 1 a 2 tamanhos para aliviar a tensão no tecido lesionado. Lave duas vezes ao dia com soro fisiológico estéril (cloreto de sódio a 0,9%), trate como uma ferida aberta e aguarde pelo menos 2 a 3 meses antes de tentar novamente.',
    'faq.q8': 'Como reconhecer e tratar um blowout no lóbulo?',
    'faq.a8': 'Um blowout acontece quando a pressão excessiva empurra o revestimento interno da fístula para fora, formando uma saliência de tecido avermelhado e inflamado ao redor da borda traseira ou dianteira do orifício. Se isto ocorrer, reduza de imediato 1 a 2 tamanhos, insira o plug reduzido pelo lado onde o tecido sobressai para o guiar de volta para dentro, evite óleos e consulte um piercer profissional qualificado.',
    'faq.q9': 'O que é o «ponto sem retorno» onde os lóbulos já não fecham por si próprios?',
    'faq.a9': 'Na maioria das anatomias, o ponto sem retorno ocorre por volta dos 12 mm aos 13 mm (cerca de 00g a 1/2 polegada). Acima deste limite, as fibras elásticas da derme sofrem deformação permanente e os lóbulos geralmente não voltarão aos tamanhos de brincos convencionais (18g-16g). Quem alargar além de 10-12 mm deve estar ciente de que pode ser necessária uma reconstrução cirúrgica do lóbulo para os fechar.',
    'faq.q10': 'Posso dormir sem os plugs para manter os lóbulos saudáveis e espessos?',
    'faq.a10': 'Dormir sem joias («naked sleeping») é excelente para estimular a circulação e manter uma boa espessura na borda do lóbulo em tamanhos maiores (geralmente a partir de 2g / 6,0 mm). No entanto, só comece quando um tamanho estiver estável há pelo menos 2 a 3 meses. Treine as orelhas gradualmente: comece com 30 minutos por dia, depois algumas horas, antes de experimentar uma noite inteira, confirmando sempre que o plug desliza para dentro sem qualquer resistência.',

      // Extended Protocols & Features
    'rehab.cardTitle': 'Planeador de Redução & Reabilitação',
    'rehab.intro': 'Em caso de dor, laceração, sangramento ou blowout, reduzir imediatamente a tensão tecidual é essencial para preservar o fluxo sanguíneo e prevenir cicatrizes permanentes.',
    'rehab.issueLabel': 'Complicação Observada',
    'rehab.issueSelect': 'Selecionar complicação...',
    'rehab.issueBlowout': 'Blowout (borda saliente de tecido atrás da joia)',
    'rehab.issueTear': 'Microlaceração ou sangramento após inserção',
    'rehab.issuePain': 'Dor latejante persistente, calor ou vermelhidão',
    'rehab.issueThinning': 'Afinamento da borda inferior ou necrose por pressão',
    'rehab.actionBtn': 'Calcular Plano de Redução',
    'rehab.recommendedSize': 'Tamanho Reduzido Recomendado',
    'rehab.recommendedRest': 'Duração do Repouso de Reabilitação',
    'rehab.restDetails': '8 a 12 semanas sem nenhuma tensão de alargamento com compressas de soro fisiológico estéril de cloreto de sódio a 0,9%.',
    'rehab.protocolHeading': 'Protocolo de Reabilitação de Emergência',
    'rehab.step1': 'Remova a joia sob tensão e insira sem forçar um plug de aba simples de vidro ou titânio ASTM F-136 de 1 a 2 tamanhos menor.',
    'rehab.step2': 'Faça compressas mornas com soro fisiológico estéril de cloreto de sódio a 0,9% duas vezes ao dia durante 5 a 10 minutos.',
    'rehab.step3': 'Não aplique óleos ou bálsamos em feridas abertas até que a pele esteja totalmente fechada. Depois de cicatrizada, massaje suavemente com óleo de jojoba diariamente.',
    'rehab.step4': 'Mantenha esse tamanho reduzido por no mínimo 8 a 12 semanas antes de reavaliar a maturidade tecidual com um piercer profissional estabelecido.',
    'rehab.applyBtn': 'Aplicar Redução a Esta Orelha',
    'rehab.appliedSuccess': 'Redução para {size} e repouso de reabilitação aplicados a {earLabel}.',
    'rehab.noSizeWarning': 'Por favor, selecione primeiro o seu tamanho atual na configuração do plano acima.',
    'halfsize.toggleLabel': 'Impor Meios Tamanhos (Passos de 0,5 mm a 1,0 mm)',
    'halfsize.helpText': 'Exige passos intermediários (como 7g, 1g, 9 mm, 11 mm, 13 mm, 15 mm) para evitar saltos traumáticos de 2,0 mm.',
    'halfsize.badge': 'Marco de Meio Tamanho',
    'halfsize.warningSkipHalf': 'A imposição de meios tamanhos está ativa. Pular o meio tamanho intermediário {halfSize} não é permitido. Alargue primeiro para {halfSize}.',
    'naked.cardTitle': 'Protocolo de Dormir sem Joias & Condicionamento',
    'naked.intro': 'Para calibres de 2g (6,0 mm) ou maiores, habituar os lóbulos a dormir sem joias alivia a pressão, restaura a microcirculação dérmica e preserva a espessura da borda inferior.',
    'naked.eligibilityNotice': 'O treino para dormir sem joias é recomendado para fístulas totalmente cicatrizadas a partir de 2g (6,0 mm) com pelo menos 8 a 12 semanas de repouso.',
    'naked.currentPhaseLabel': 'Fase de Condicionamento',
    'naked.phase1Title': 'Fase 1: Pausas Diurnas (Semanas 1–2)',
    'naked.phase1Desc': 'Remova as joias por 30 a 45 minutos durante o descanso noturno. Massaje com óleo de jojoba e reinsira.',
    'naked.phase2Title': 'Fase 2: Condicionamento Noturno (Semanas 3–4)',
    'naked.phase2Desc': 'Deixe os lóbulos nus por 1 a 2 horas à noite antes de dormir. Reinsira o plug lubrificado para o sono.',
    'naked.phase3Title': 'Fase 3: Horas Nus Prolongadas (Semanas 5–6)',
    'naked.phase3Desc': 'Deixe os lóbulos nus por 3 a 4 horas. Os plugs devem deslizar suavemente sem nenhuma resistência.',
    'naked.phase4Title': 'Fase 4: Primeira Noite Completa (Semanas 7–8)',
    'naked.phase4Desc': 'Durma sem joias por 6 a 8 horas. Pela manhã, massaje com óleo e insira delicadamente plugs de vidro de aba simples.',
    'naked.phase5Title': 'Fase 5: Hábito Noturno (Manutenção)',
    'naked.phase5Desc': 'Durma sem joias todas as noites para evitar atritos na almofada, manter a elasticidade e reconstruir o colagénio dérmico.',
    'naked.logTodayBtn': 'Registar Sessão sem Joias de Hoje',
    'naked.loggedSuccess': 'Sessão de treino sem joias registada para {earLabel}!',
    'naked.sessionsCompleted': 'Total de Sessões sem Joias Concluídas: {count}',
    'log.rimMarginLabel': 'Margem da Borda Inferior (mm, opcional)',
    'log.rimMarginPlaceholder': 'ex.: 5.0',
    'log.pliabilityLabel': 'Flexibilidade da Fístula',
    'log.pliabilitySelect': 'Selecionar textura do tecido...',
    'log.pliabilitySoft': 'Macio e elástico',
    'log.pliabilityModerate': 'Leve firmeza / pequeno relevo',
    'log.pliabilityRigid': 'Tecido cicatricial denso / rígido',
    'log.sensationLabel': 'Sensação do Tecido',
    'log.sensationNormal': 'Confortável / sem sensibilidade',
    'log.sensationTender': 'Sensível ao toque leve',
    'log.sensationIrritated': 'Seco, com comichão ou ardência',
    'log.thRim': 'Margem Borda',
    'log.thPliability': 'Saúde do Tecido',
    'log.thinningAlertTitle': 'Alerta de Afinamento do Lóbulo',
    'log.thinningAlertDesc': 'Uma medição de {mm} mm indica afinamento tecidual. Interrompa o alargamento, durma sem joias ou reduza o tamanho e consulte um piercer profissional estabelecido.',
    'log.rapidThinningAlert': 'Aviso: A espessura da borda inferior diminuiu {drop} mm desde o registo anterior. O afinamento rápido indica tensão excessiva.',

    'gauge.18g': '18g - 1,0 mm',
  'gauge.16g': '16g - 1,2 mm',
  'gauge.14g': '14g - 1,6 mm',
  'gauge.12g': '12g - 2,0 mm',
  'gauge.10g': '10g - 2,4 mm',
  'gauge.8g': '8g - 3,2 mm',
  'gauge.7g': '7g - 3,5 mm (meio tamanho)',
  'gauge.6g': '6g - 4,0 mm',
  'gauge.5g': '5g - 4,5 mm (meio tamanho)',
  'gauge.4g': '4g - 5,0 mm',
  'gauge.3g': '3g - 5,5 mm (meio tamanho)',
  'gauge.2g': '2g - 6,0 mm',
  'gauge.1g': '1g - 7,0 mm (meio tamanho)',
  'gauge.0g': '0g - 8,0 mm',
  'gauge.9mm': '9 mm (intermediário)',
  'gauge.00g': '00g - 10,0 mm',
  'gauge.11mm': '11 mm (intermediário)',
  'gauge.12mm': '12 mm',
  'gauge.13mm': '13 mm (intermediário)',
  'gauge.14mm': '14 mm',
  'gauge.15mm': '15 mm (intermediário)',
  'gauge.16mm': '16 mm (5/8 de polegada)',
  'gauge.17mm': '17 mm (intermediário)',
  'gauge.18mm': '18 mm (intermediário)',
  'gauge.19mm': '19 mm (3/4 de polegada)',
  'gauge.20mm': '20 mm (intermediário)',
  'gauge.22mm': '22 mm (7/8 de polegada)',
  'gauge.24mm': '24 mm (intermediário)',
  'gauge.25mm': '25,4 mm (1 polegada)',
  'gauge.28mm': '28 mm',
  'gauge.32mm': '32 mm',
  'gauge.38mm': '38 mm',
  'gauge.50mm': '50,8 mm (2 polegadas)'
  }
};

function getCurrentLanguage() {
  return (typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('poli_tools_language')) || 'en';
}

function setLanguage(lang) {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('poli_tools_language', lang);
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = lang;
    }
  }
}

function t(key, params, langOverride) {
  const lang = langOverride || getCurrentLanguage();
  const dict = I18N[lang] || I18N.en;
  let str = dict[key] || I18N.en[key] || key;
  if (params && typeof params === 'object') {
    Object.keys(params).forEach(k => {
      const reg = new RegExp(`\\{${k}\\}`, 'g');
      str = str.replace(reg, params[k]);
    });
  }
  return str;
}

function getGaugeLabel(gauge) {
  if (!gauge) return '';
  return t('gauge.' + gauge.id);
}

const GAUGE_TABLE = [
  { id: '18g',  mm: 1.0,  get label() { return t('gauge.18g'); },  display: '18g'  },
  { id: '16g',  mm: 1.2,  get label() { return t('gauge.16g'); },  display: '16g'  },
  { id: '14g',  mm: 1.6,  get label() { return t('gauge.14g'); },  display: '14g'  },
  { id: '12g',  mm: 2.0,  get label() { return t('gauge.12g'); },  display: '12g'  },
  { id: '10g',  mm: 2.4,  get label() { return t('gauge.10g'); },  display: '10g'  },
  { id: '8g',   mm: 3.2,  get label() { return t('gauge.8g'); },   display: '8g'   },
  { id: '7g',   mm: 3.5,  get label() { return t('gauge.7g'); },   display: '7g',   isHalfSize: true },
  { id: '6g',   mm: 4.0,  get label() { return t('gauge.6g'); },   display: '6g'   },
  { id: '5g',   mm: 4.5,  get label() { return t('gauge.5g'); },   display: '5g',   isHalfSize: true },
  { id: '4g',   mm: 5.0,  get label() { return t('gauge.4g'); },   display: '4g'   },
  { id: '3g',   mm: 5.5,  get label() { return t('gauge.3g'); },   display: '3g',   isHalfSize: true },
  { id: '2g',   mm: 6.0,  get label() { return t('gauge.2g'); },   display: '2g'   },
  { id: '1g',   mm: 7.0,  get label() { return t('gauge.1g'); },   display: '1g',   isHalfSize: true },
  { id: '0g',   mm: 8.0,  get label() { return t('gauge.0g'); },   display: '0g'   },
  { id: '9mm',  mm: 9.0,  get label() { return t('gauge.9mm'); },  display: '9 mm', isHalfSize: true },
  { id: '00g',  mm: 10.0, get label() { return t('gauge.00g'); }, display: '00g'  },
  { id: '11mm', mm: 11.0, get label() { return t('gauge.11mm'); }, display: '11 mm', isHalfSize: true },
  { id: '12mm', mm: 12.0, get label() { return t('gauge.12mm'); }, display: '12 mm'},
  { id: '13mm', mm: 13.0, get label() { return t('gauge.13mm'); }, display: '13 mm', isHalfSize: true },
  { id: '14mm', mm: 14.0, get label() { return t('gauge.14mm'); }, display: '14 mm'},
  { id: '15mm', mm: 15.0, get label() { return t('gauge.15mm'); }, display: '15 mm', isHalfSize: true },
  { id: '16mm', mm: 16.0, get label() { return t('gauge.16mm'); }, display: '16 mm'},
  { id: '17mm', mm: 17.0, get label() { return t('gauge.17mm'); }, display: '17 mm', isHalfSize: true },
  { id: '18mm', mm: 18.0, get label() { return t('gauge.18mm'); }, display: '18 mm'},
  { id: '19mm', mm: 19.0, get label() { return t('gauge.19mm'); }, display: '19 mm', isHalfSize: true },
  { id: '20mm', mm: 20.0, get label() { return t('gauge.20mm'); }, display: '20 mm'},
  { id: '22mm', mm: 22.0, get label() { return t('gauge.22mm'); }, display: '22 mm'},
  { id: '24mm', mm: 24.0, get label() { return t('gauge.24mm'); }, display: '24 mm'},
  { id: '25mm', mm: 25.4, get label() { return t('gauge.25mm'); }, display: '1"'   },
  { id: '28mm', mm: 28.0, get label() { return t('gauge.28mm'); }, display: '28 mm'},
  { id: '32mm', mm: 32.0, get label() { return t('gauge.32mm'); }, display: '32 mm'},
  { id: '38mm', mm: 38.0, get label() { return t('gauge.38mm'); }, display: '38 mm'},
  { id: '50mm', mm: 50.8, get label() { return t('gauge.50mm'); }, display: '2"'   },
];

// Recommended minimum and typical healing intervals before advancing to next size
// Based on established professional piercing practice
function getWaitWeeks(currentMm) {
  if (currentMm < 3.2)  return [4, 8];   // Up to 8g: 4-8 weeks
  if (currentMm < 6.0)  return [8, 12];  // 6g to 2g: 8-12 weeks
  if (currentMm < 10.0) return [10, 16]; // 2g to 00g: 10-16 weeks
  if (currentMm < 22.0) return [12, 16]; // 10mm to 20mm: 12-16 weeks
  return [16, 24];                       // 22mm and above: 16-24 weeks
}

function getStretchPath(fromId, toId, enforceHalfSizes = true) {
  const fromIdx = GAUGE_TABLE.findIndex(g => g.id === fromId);
  const toIdx   = GAUGE_TABLE.findIndex(g => g.id === toId);
  if (fromIdx < 0 || toIdx < 0 || fromIdx >= toIdx) return null;
  const fullPath = GAUGE_TABLE.slice(fromIdx, toIdx + 1);
  if (enforceHalfSizes) {
    return fullPath;
  }
  return fullPath.filter((g, idx) => {
    if (idx === 0 || idx === fullPath.length - 1) return true;
    return !g.isHalfSize;
  });
}

function calculateDownsizePlan(currentGaugeId, complication) {
  if (!currentGaugeId) return null;
  const idx = GAUGE_TABLE.findIndex(g => g.id === currentGaugeId);
  if (idx <= 0) return null;

  let stepDrop = 1;
  if (complication === 'blowout' || complication === 'thinning') {
    stepDrop = idx >= 2 ? 2 : 1;
  }

  const targetIdx = Math.max(0, idx - stepDrop);
  const downsizeGauge = GAUGE_TABLE[targetIdx];
  const currentGauge = GAUGE_TABLE[idx];

  return {
    currentGauge,
    downsizeGauge,
    stepDrop,
    waitWeeks: [8, 12],
    complication
  };
}

// Local calendar date functions (never UTC slice to avoid timezone misdating)
function getLocalDateString(d) {
  const dateObj = d || new Date();
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseLocalDate(str) {
  if (!str) return null;
  const parts = str.split('-');
  if (parts.length !== 3) return null;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  if (isNaN(y) || isNaN(m) || isNaN(d)) return null;
  return new Date(y, m, d);
}

function addWeeksToLocalDate(dateStr, weeks) {
  const dt = parseLocalDate(dateStr);
  if (!dt) return null;
  dt.setDate(dt.getDate() + Math.round(weeks * 7));
  return getLocalDateString(dt);
}

function formatDisplayDate(dateStr) {
  const dt = parseLocalDate(dateStr);
  if (!dt) return '-';
  const lang = (typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem('poli_tools_language')) || 'en';
  return dt.toLocaleDateString(lang, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// RFC 5545 standard iCalendar (.ics) generator for next earliest stretch date
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
    'PRODID:-//Poli International//Ear Stretching Timeline Planner V2//EN',
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

if (typeof window !== 'undefined') {
  window.GAUGE_TABLE = GAUGE_TABLE;
  window.getWaitWeeks = getWaitWeeks;
  window.getStretchPath = getStretchPath;
  window.calculateDownsizePlan = calculateDownsizePlan;
  window.getLocalDateString = getLocalDateString;
  window.parseLocalDate = parseLocalDate;
  window.addWeeksToLocalDate = addWeeksToLocalDate;
  window.formatDisplayDate = formatDisplayDate;
  window.generateICS = generateICS;
  window.getGaugeLabel = getGaugeLabel;
  window.I18N = I18N;
  window.t = t;
  window.getCurrentLanguage = getCurrentLanguage;
  window.setLanguage = setLanguage;
}

if (typeof globalThis !== 'undefined') {
  globalThis.GAUGE_TABLE = GAUGE_TABLE;
  globalThis.getWaitWeeks = getWaitWeeks;
  globalThis.getStretchPath = getStretchPath;
  globalThis.calculateDownsizePlan = calculateDownsizePlan;
  globalThis.getLocalDateString = getLocalDateString;
  globalThis.parseLocalDate = parseLocalDate;
  globalThis.addWeeksToLocalDate = addWeeksToLocalDate;
  globalThis.formatDisplayDate = formatDisplayDate;
  globalThis.generateICS = generateICS;
  globalThis.getGaugeLabel = getGaugeLabel;
  globalThis.I18N = I18N;
  globalThis.t = t;
  globalThis.getCurrentLanguage = getCurrentLanguage;
  globalThis.setLanguage = setLanguage;
}
