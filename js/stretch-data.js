'use strict';

const GAUGE_TABLE = [
  { id: '18g',  mm: 1.0,  label: '18g — 1.0 mm',    display: '18g'  },
  { id: '16g',  mm: 1.2,  label: '16g — 1.2 mm',    display: '16g'  },
  { id: '14g',  mm: 1.6,  label: '14g — 1.6 mm',    display: '14g'  },
  { id: '12g',  mm: 2.0,  label: '12g — 2.0 mm',    display: '12g'  },
  { id: '10g',  mm: 2.4,  label: '10g — 2.4 mm',    display: '10g'  },
  { id: '8g',   mm: 3.2,  label: '8g — 3.2 mm',     display: '8g'   },
  { id: '6g',   mm: 4.0,  label: '6g — 4.0 mm',     display: '6g'   },
  { id: '4g',   mm: 5.0,  label: '4g — 5.0 mm',     display: '4g'   },
  { id: '2g',   mm: 6.0,  label: '2g — 6.0 mm',     display: '2g'   },
  { id: '0g',   mm: 8.0,  label: '0g — 8.0 mm',     display: '0g'   },
  { id: '00g',  mm: 10.0, label: '00g — 10.0 mm',   display: '00g'  },
  { id: '12mm', mm: 12.0, label: '12 mm',             display: '12mm' },
  { id: '14mm', mm: 14.0, label: '14 mm',             display: '14mm' },
  { id: '16mm', mm: 16.0, label: '16 mm',             display: '16mm' },
  { id: '19mm', mm: 19.0, label: '19 mm',             display: '19mm' },
  { id: '22mm', mm: 22.0, label: '22 mm',             display: '22mm' },
  { id: '25mm', mm: 25.4, label: '25 mm (1 inch)',   display: '1"'   },
  { id: '28mm', mm: 28.0, label: '28 mm',             display: '28mm' },
  { id: '32mm', mm: 32.0, label: '32 mm',             display: '32mm' },
  { id: '38mm', mm: 38.0, label: '38 mm',             display: '38mm' },
  { id: '50mm', mm: 50.8, label: '50 mm (2 inch)',   display: '2"'   },
];

// Minimum and maximum recommended wait weeks before stretching to the NEXT size
// Based on APP (Association of Professional Piercers) guidelines
function getWaitWeeks(currentMm) {
  if (currentMm < 3.2)  return [4,  8];
  if (currentMm < 6.0)  return [6,  8];
  if (currentMm < 10.0) return [8,  12];
  if (currentMm < 22.0) return [12, 24];
  return [24, 52];
}

function getStretchPath(fromId, toId) {
  const fromIdx = GAUGE_TABLE.findIndex(g => g.id === fromId);
  const toIdx   = GAUGE_TABLE.findIndex(g => g.id === toId);
  if (fromIdx < 0 || toIdx < 0 || fromIdx >= toIdx) return null;
  return GAUGE_TABLE.slice(fromIdx, toIdx + 1);
}
