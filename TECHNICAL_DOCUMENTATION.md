# Ear Stretching Timeline Planner - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support / Contact](#support--contact)

---

## Architecture Overview

### Technology Stack

The tool is a standalone, dependency-free static web application built with:

- **HTML5**, Semantic markup with ARIA-friendly structure
- **CSS3**, Single stylesheet (`style.css`) for layout and theming
- **Vanilla JavaScript (ES6)**, No frameworks, libraries, or build tools
- **No server-side dependencies**, All logic executes client-side

### File Structure

```
ear-stretching-timeline/
├── index.html          # Main entry point, UI structure, iframe theming
├── css/
│   └── style.css       # All visual styling
└── js/
    ├── stretch-data.js # Gauge table data and helper functions
    └── app.js          # UI logic, event handling, output rendering
```

### Component / Logic Breakdown

| Component | File | Responsibility |
|-----------|------|----------------|
| **Data Layer** | `stretch-data.js` | Defines `GAUGE_TABLE` array, `getWaitWeeks()`, `getStretchPath()` |
| **UI Layer** | `index.html` | Two `<select>` elements, a `<button>`, and a `<div id="results">` container |
| **Controller** | `app.js` | Populates selects, handles click events, calls data functions, renders output |
| **Theming** | `index.html` (inline script) | Listens for `poli-theme` postMessage events when embedded in iframe |

### Data Flow

1. User selects current gauge and target gauge from `<select>` elements
2. Clicking "Plan My Timeline" triggers `run()` in `app.js`
3. `run()` calls `getStretchPath(fromId, toId)` to get the ordered gauge sequence
4. For each step, `getWaitWeeks()` returns min/max healing intervals
5. Results are rendered as HTML into `#results` div

---

## Data Schemas

### `GAUGE_TABLE` (Array of Objects)

Defined in `stretch-data.js`. Contains 21 gauge/size entries from 18g to 2 inches.

```javascript
{
  id:      string,   // Unique identifier, e.g. "14g", "0g", "25mm"
  mm:      number,   // Diameter in millimeters, e.g. 1.6, 8.0, 25.4
  label:   string,   // Display label for <option> elements, e.g. "14g, 1.6 mm"
  display: string    // Short display name for timeline output, e.g. "14g", "1\""
}
```

**Example entry:**
```javascript
{ id: "0g", mm: 8.0, label: "0g, 8.0 mm", display: "0g" }
```

**Complete size range:**
| id | mm | display |
|----|-----|---------|
| 18g | 1.0 | 18g |
| 16g | 1.2 | 16g |
| 14g | 1.6 | 14g |
| 12g | 2.0 | 12g |
| 10g | 2.4 | 10g |
| 8g | 3.2 | 8g |
| 6g | 4.0 | 6g |
| 4g | 5.0 | 4g |
| 2g | 6.0 | 2g |
| 0g | 8.0 | 0g |
| 00g | 10.0 | 00g |
| 12mm | 12.0 | 12mm |
| 14mm | 14.0 | 14mm |
| 16mm | 16.0 | 16mm |
| 19mm | 19.0 | 19mm |
| 22mm | 22.0 | 22mm |
| 25mm | 25.4 | 1" |
| 28mm | 28.0 | 28mm |
| 32mm | 32.0 | 32mm |
| 38mm | 38.0 | 38mm |
| 50mm | 50.8 | 2" |

### Step Object (Internal)

Generated during timeline calculation in `run()`:

```javascript
{
  gauge:  object,  // Reference to GAUGE_TABLE entry
  wait:   array|null,  // [minWeeks, maxWeeks] or null for starting point
  cumMin: number,  // Cumulative minimum weeks up to this step
  cumMax: number   // Cumulative maximum weeks up to this step
}
```

---

## Calculation / Logic Algorithms

### `getWaitWeeks(currentMm)`

Determines recommended healing interval based on current gauge diameter in millimeters.

**Logic:**
```javascript
function getWaitWeeks(currentMm) {
  if (currentMm < 3.2)  return [4,  8];   // Up to 8g: 4-8 weeks
  if (currentMm < 6.0)  return [6,  8];   // 6g to 4g: 6-8 weeks
  if (currentMm < 10.0) return [8,  12];  // 2g to 00g: 8-12 weeks
  if (currentMm < 22.0) return [12, 24];  // 12mm to 22mm: 12-24 weeks
  return [24, 52];                         // 25mm+: 24-52 weeks
}
```

**Wait time tiers (APP guidelines):**

| Current Size Range | Min Weeks | Max Weeks |
|-------------------|-----------|-----------|
| < 3.2 mm (up to 8g) | 4 | 8 |
| 3.2 mm, 5.9 mm (6g–4g) | 6 | 8 |
| 6.0 mm, 9.9 mm (2g–00g) | 8 | 12 |
| 10.0 mm, 21.9 mm (12mm–22mm) | 12 | 24 |
| 22.0 mm+ (25mm/1" and above) | 24 | 52 |

### `getStretchPath(fromId, toId)`

Returns an ordered array of gauge objects from current to target (inclusive).

**Logic:**
1. Find index of `fromId` in `GAUGE_TABLE`
2. Find index of `toId` in `GAUGE_TABLE`
3. If either index is -1 or `fromIdx >= toIdx`, return `null`
4. Return `GAUGE_TABLE.slice(fromIdx, toIdx + 1)`

### `run()`, Main Calculation Engine

1. Read `fromId` and `toId` from select elements
2. Call `getStretchPath()` to get ordered gauge sequence
3. If path is `null`, display error message
4. Iterate through path:
   - First step: set wait to `null`, cumulative weeks to 0
   - Subsequent steps: call `getWaitWeeks()` using previous gauge's mm value, accumulate totals
5. Call `buildOutput()` to generate HTML

### `buildOutput(path, steps, minWeeks, maxWeeks)`

Generates complete results HTML including:

- **Summary row**: Number of stretches, total weeks range, total months range (weeks / 4.33)
- **Timeline track**: Visual step-by-step with gauge name, mm size, wait times
- **Advice box**: APP safety guidelines (static content)
- **Note box**: Additional healing considerations (static content)

### Month Calculation

```javascript
const minMonths = (minWeeks / 4.33).toFixed(1);
const maxMonths = (maxWeeks / 4.33).toFixed(1);
```

Uses 4.33 weeks per month (average across 52 weeks / 12 months).

---

## API Reference

### Public Functions

#### `getWaitWeeks(currentMm)`
- **Parameters**: `currentMm` (number), Current gauge diameter in millimeters
- **Returns**: `[number, number]`, Array with minimum and maximum recommended wait weeks
- **Example**: `getWaitWeeks(1.6)` returns `[4, 8]`

#### `getStretchPath(fromId, toId)`
- **Parameters**:
  - `fromId` (string), Gauge ID from `GAUGE_TABLE`, e.g. `"14g"`
  - `toId` (string), Target gauge ID, e.g. `"0g"`
- **Returns**: `array|null`, Ordered array of gauge objects, or `null` if invalid
- **Example**: `getStretchPath("14g", "0g")` returns 5 gauge objects (14g, 12g, 10g, 8g, 0g)

#### `run()`
- **Parameters**: None (reads from DOM)
- **Returns**: `void` (renders HTML into `#results` div)
- **Behavior**: Main event handler for "Plan My Timeline" button

#### `buildOutput(path, steps, minWeeks, maxWeeks)`
- **Parameters**:
  - `path` (array), Full gauge sequence from `getStretchPath()`
  - `steps` (array), Step objects with wait times and cumulative weeks
  - `minWeeks` (number), Total minimum weeks
  - `maxWeeks` (number), Total maximum weeks
- **Returns**: `string`, Complete HTML for results section

#### `escHtml(s)`
- **Parameters**: `s` (string), Raw text to escape
- **Returns**: `string`, HTML-escaped text
- **Purpose**: XSS prevention for user-facing output

### Event Handlers

- **`planBtn.addEventListener('click', run)`**, Triggers timeline calculation on button click

### Constants

- **`GAUGE_TABLE`**, Array of 21 gauge objects (see Data Schemas section)

---

## Integration Guide

### Standalone Embedding

The tool is hosted at:
```
https://poliinternational.com/tools/ear-stretching-timeline/
```

### Iframe Embedding

For embedding in third-party sites:

```html
<iframe
  src="https://poliinternational.com/tools/ear-stretching-timeline/"
  width="100%"
  height="800"
  frameborder="0"
  allowtransparency="true"
  title="Ear Stretching Timeline Planner"
></iframe>
```

### Theming Support

When embedded in an iframe, the tool supports theme synchronization via `postMessage`:

```javascript
// From parent window
iframe.contentWindow.postMessage({
  type: 'poli-theme',
  light: true   // Set to false for dark theme
}, '*');
```

The tool automatically detects iframe embedding (`window.self !== window.top`) and defaults to dark theme.

### Dependencies

**None.** The tool is completely self-contained with zero external dependencies. No CDN links, no jQuery, no React, no CSS frameworks.

---

## Customization

### Modifying Gauge Data

Edit `stretch-data.js` to:
- Add new gauge sizes to `GAUGE_TABLE`
- Adjust wait time tiers in `getWaitWeeks()`
- Change display labels

### Styling

All visual styling is in `css/style.css`. Key customization points:

- `.input-card`, Form container styling
- `.timeline-track`, Timeline visualization
- `.summary-stat`, Statistics display
- `.advice-box`, `.note-box`, Information sections
- `.disclaimer`, Legal notice

### Content

Static text (safety rules, notes) is in the `buildOutput()` function in `app.js`. Edit the template literals to customize messaging.

---

## Performance

- **Bundle size**: Approximately 5KB total (HTML + CSS + JS)
- **Execution**: All calculations complete in under 1ms
- **DOM operations**: Minimal, single render pass on button click
- **Memory**: No persistent state, no localStorage, no sessionStorage
- **Network**: Zero external requests after initial page load

---

## Browser Compatibility

The tool uses standard ES6 features and modern DOM APIs:

| Feature | Minimum Browser Support |
|---------|------------------------|
| `const` / `let` | IE 11+, all modern browsers |
| Arrow functions | Chrome 45+, Firefox 22+, Safari 10+, Edge 12+ |
| Template literals | Chrome 41+, Firefox 34+, Safari 9+, Edge 12+ |
| `Array.findIndex()` | Chrome 45+, Firefox 25+, Safari 8+, Edge 12+ |
| `Array.slice()` | IE 9+, all modern browsers |
| `postMessage` | IE 8+, all modern browsers |
| `insertAdjacentHTML` | IE 4+, all modern browsers |

**Note**: IE 11 support is partial due to template literal usage. For full IE 11 support, transpile with Babel.

---

## Security

### XSS Prevention

All user-facing text is sanitized through the `escHtml()` function:

```javascript
function escHtml(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
```

This function is applied to all dynamic content rendered into the DOM, including gauge labels, display names, and any user-selected values.

### Input Validation

- Gauge selection is restricted to predefined `<option>` values from `GAUGE_TABLE`
- `getStretchPath()` validates that `fromId` and `toId` exist in the table
- Invalid paths (target smaller than current) return `null` and display an error message

### Iframe Security

- The tool includes `"noindex, nofollow"` meta tag to prevent search engine indexing of the embedded version
- Theme communication via `postMessage` is accepted from any origin (no origin validation)

### No User Data Collection

- No cookies, localStorage, or sessionStorage
- No analytics tracking
- No form submissions
- All calculations are performed client-side

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Initial release | Core functionality with APP-approved healing intervals, gauge table from 18g to 2 inches, timeline visualization |

---

## Support / Contact

For technical issues, feature requests, or customization inquiries:

- **Email**: support@poliinternational.com
- **Website**: https://poliinternational.com
- **Tool URL**: https://poliinternational.com/tools/ear-stretching-timeline/

---

*Documentation generated from source code version 1.0.0. Last updated: [Current Date]*
