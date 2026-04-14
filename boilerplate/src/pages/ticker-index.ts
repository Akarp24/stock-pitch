// Template for the ticker index page.
// Copy this file, rename to <ticker>-index.ts, and populate with research data.
// Read skills/stock-pitch/references/design-system.md for the design language.
// Read skills/stock-pitch/references/page-structures.md for the content anatomy.

export const tickerIndexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="{{TICKER}} equity research portal.">
<title>{{TICKER}} — Research Portal</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
/* Copy the full design system from skills/stock-pitch/references/design-system.md */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7}
/* ... remainder of design system ... */
</style>
</head>
<body>

<nav aria-label="Main navigation">
  <!-- Brand, nav links, ticker display, dark toggle -->
</nav>

<main id="main-content">
<section class="hero">
  <!-- Eyebrow, H1 with gold span, subtitle, dual PT badges -->
</section>

<!-- 7-metric bar floating up via negative margin -->

<section class="bluf">
  <!-- 3 BLUF paragraphs with source tags -->
</section>

<!-- Sector-appropriate section: AUM grid, deal snapshot, segment data, etc. -->

<section class="section">
  <!-- 3 thesis cards with colored top borders -->
</section>

<section class="section">
  <!-- Earnings setup box (navy) -->
</section>

<section class="section">
  <!-- Research Portal module grid — 2x2 cards linking to other 4 pages -->
</section>

<section class="section">
  <!-- Sell-side quotes -->
</section>
</main>

<footer>
  <!-- Attribution + sources + last updated -->
</footer>

<script>
/* Dark-mode toggle + nav scroll shadow */
</script>
</body>
</html>`;
