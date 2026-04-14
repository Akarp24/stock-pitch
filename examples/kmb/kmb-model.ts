export const kmbModelHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="KMB + KVUE interactive merger model: accretion/dilution analysis, synergy capture slider, combined P&L through FY2029, DCF valuation. Levin Capital Strategies.">
<title>KMB + KVUE Merger Model | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4C8;</text></svg>">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.6;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1280px;margin:0 auto;padding:0 24px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light)}
nav .wrap{display:flex;justify-content:space-between;align-items:center;max-width:1280px}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;gap:16px}
.nav-links a{font-size:12px;color:var(--text-muted);font-weight:500}
.nav-links a.active,.nav-links a:hover{color:var(--heading)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading)}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif}
.hero{padding:92px 0 20px;border-bottom:1px solid var(--border-light)}
.hero h1{font-size:28px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:4px}
.hero p{font-size:13px;color:var(--text-muted)}
.kbd-hint{font-size:11px;color:var(--text-muted);margin-top:6px}
.kbd-hint kbd{background:var(--surface-2);border:1px solid var(--border);border-radius:3px;padding:1px 6px;font-size:10px;font-family:'JetBrains Mono',monospace;margin:0 2px}

.main-grid{display:grid;grid-template-columns:320px 1fr;gap:24px;padding:24px 0}
.controls{position:sticky;top:72px;align-self:start;max-height:calc(100vh - 96px);overflow-y:auto;padding-right:8px}
.control-box{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:16px;margin-bottom:16px}
.control-box h3{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:12px}
.slider-group{margin-bottom:14px}
.slider-group:last-child{margin-bottom:0}
.slider-label{display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px}
.slider-label .lbl{color:var(--text);font-weight:500;cursor:help;border-bottom:1px dotted var(--border)}
.slider-label .val{color:var(--gold);font-weight:700;font-family:'JetBrains Mono',monospace;font-size:11px}
input[type=range]{width:100%;-webkit-appearance:none;background:var(--surface-2);height:4px;border-radius:2px;outline:none}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:14px;height:14px;background:var(--gold);border-radius:50%;cursor:pointer;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2)}
input[type=range]::-moz-range-thumb{width:14px;height:14px;background:var(--gold);border-radius:50%;cursor:pointer;border:2px solid #fff}
.presets{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
.preset{padding:6px 4px;border:1px solid var(--border);border-radius:5px;font-size:10px;font-weight:700;cursor:pointer;background:var(--bg);color:var(--text);text-transform:uppercase;letter-spacing:0.5px;transition:all 0.15s}
.preset:hover{border-color:var(--gold);color:var(--gold)}
.preset.active{background:var(--gold);color:#fff;border-color:var(--gold)}

.content{min-width:0}
.valcards{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px}
.valcard{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:16px;text-align:center}
.valcard .vl{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text-muted);font-weight:700;margin-bottom:6px}
.valcard .vv{font-size:24px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;font-family:'JetBrains Mono',monospace}
.valcard .vv.green{color:var(--green)}.valcard .vv.red{color:var(--red)}.valcard .vv.gold{color:var(--gold)}
.valcard .vs{font-size:10px;color:var(--text-muted);margin-top:4px}

.panel{background:var(--bg);border:1px solid var(--border);border-radius:10px;margin-bottom:16px;overflow:hidden}
.panel-header{padding:14px 20px;border-bottom:1px solid var(--border-light);display:flex;justify-content:space-between;align-items:center}
.panel-header h2{font-size:14px;font-weight:700;color:var(--heading);letter-spacing:-0.01em}
.panel-header .sub{font-size:11px;color:var(--text-muted)}
.panel-body{padding:16px 20px;overflow-x:auto}

table.grid{width:100%;border-collapse:collapse;font-size:12px;font-family:'JetBrains Mono',monospace}
table.grid th{text-align:right;padding:8px 6px;font-size:10px;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);font-weight:700;border-bottom:1px solid var(--border);font-family:Inter,sans-serif}
table.grid th:first-child{text-align:left}
table.grid td{padding:6px;text-align:right;border-bottom:1px solid var(--border-light);color:var(--text)}
table.grid td:first-child{text-align:left;color:var(--heading);font-family:Inter,sans-serif;font-size:12px;font-weight:500}
table.grid tr.section td{background:var(--surface);color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:1.2px;font-size:10px;padding:8px 6px;font-family:Inter,sans-serif}
table.grid tr.subtotal td{font-weight:700;border-top:1px solid var(--border);background:var(--surface)}
table.grid tr.total td{font-weight:800;color:var(--gold);background:var(--gold-soft);border-top:2px solid var(--gold)}
table.grid tr.syn td{color:var(--green)}
table.grid tr.accretion td{color:var(--steel);font-weight:700;border-top:1px solid var(--border)}
table.grid tr.accretion td.green{color:var(--green)}
table.grid tr.accretion td.red{color:var(--red)}

.sens-table{width:100%;border-collapse:collapse;font-size:11px;font-family:'JetBrains Mono',monospace}
.sens-table th,.sens-table td{padding:8px 6px;text-align:center;border:1px solid var(--border-light)}
.sens-table th{background:var(--surface);color:var(--text-muted);font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-family:Inter,sans-serif}
.sens-table th.corner{background:var(--navy);color:#fff}
.sens-table td{color:var(--heading)}
.sens-table td.highlight{background:var(--gold-soft);font-weight:800;color:var(--gold);border:2px solid var(--gold)}
.sens-table td.heat-1{background:rgba(192,57,43,0.12);color:var(--red)}
.sens-table td.heat-2{background:rgba(192,57,43,0.06)}
.sens-table td.heat-3{background:var(--bg)}
.sens-table td.heat-4{background:rgba(26,122,58,0.06)}
.sens-table td.heat-5{background:rgba(26,122,58,0.14);color:var(--green);font-weight:700}

.caption{font-size:10px;color:var(--text-muted);margin-top:8px;font-style:italic}
.delta-up{color:var(--green)}.delta-down{color:var(--red)}

footer{padding:32px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:24px}
footer p{font-size:11px;color:var(--text-muted)}

@media(max-width:1100px){
  .main-grid{grid-template-columns:1fr}
  .controls{position:static;max-height:none;overflow:visible}
  .valcards{grid-template-columns:repeat(2,1fr)}
}

html.dark{--bg:#0F1218;--surface:#1A1E27;--surface-2:#242830;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.92);border-bottom-color:var(--border)}
html.dark .panel,html.dark .valcard,html.dark .control-box,html.dark .preset{background:var(--surface);border-color:var(--border)}
html.dark table.grid tr.section td,html.dark table.grid tr.subtotal td,html.dark .sens-table th{background:var(--surface-2)}
html.dark input[type=range]{background:var(--surface-2)}
html.dark footer{border-top-color:var(--border)}
</style>
</head>
<body>
<nav aria-label="Main navigation">
<div class="wrap">
  <a href="/lcs/" class="nav-brand">Levin Capital Strategies</a>
  <div class="nav-links">
    <a href="/lcs/kmb/">Overview</a>
    <a href="/lcs/kmb/memo.html">Memo</a>
    <a href="/lcs/kmb/presentation.html">Deck</a>
    <a href="/lcs/kmb/model.html" class="active">Model</a>
    <a href="/lcs/kmb/consensus.html">Consensus</a>
    <a href="/lcs/kmb/questions.html">Questions</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>KMB</strong> $96.59</span>
  </div>
</div>
</nav>

<section class="hero">
  <div class="wrap">
    <h1>KMB + KVUE Interactive Merger Model</h1>
    <p>Accretion / dilution analysis &middot; synergy capture &middot; combined P&amp;L FY2026E&ndash;FY2029E &middot; DCF cross-check</p>
    <p class="kbd-hint">Presets: <kbd>1</kbd> Bull <kbd>2</kbd> Base <kbd>3</kbd> Street <kbd>4</kbd> Bear <kbd>R</kbd> Reset &middot; Hover slider labels for rationale</p>
    <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">
      <button onclick="shareScenario()" style="padding:7px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;background:var(--gold);color:#fff;border:none;cursor:pointer;font-family:Inter,sans-serif">&#128279; Share This Scenario</button>
      <button onclick="window.print()" style="padding:7px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;background:none;border:1px solid var(--border);color:var(--text);cursor:pointer;font-family:Inter,sans-serif">&#128424; Export PDF</button>
      <span id="shareToast" style="display:none;font-size:11px;color:var(--green);align-self:center;font-weight:600">&check; Link copied to clipboard</span>
    </div>
  </div>
</section>

<div class="wrap">
<div class="main-grid">

<aside class="controls">
  <div class="control-box">
    <h3>Presets</h3>
    <div class="presets">
      <button class="preset" data-preset="bull" onclick="applyPreset('bull')">Bull</button>
      <button class="preset active" data-preset="base" onclick="applyPreset('base')">Base</button>
      <button class="preset" data-preset="street" onclick="applyPreset('street')">Street</button>
      <button class="preset" data-preset="bear" onclick="applyPreset('bear')">Bear</button>
    </div>
  </div>

  <div class="control-box">
    <h3>Synergy Capture</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="% of $2.1B targeted run-rate synergies realized by Year 4. Large CPG deals historically achieve 60-90%; PG/Gillette hit ~95%.">Capture Rate</span><span class="val" id="synCapVal">80%</span></div>
      <input type="range" id="synCap" min="0" max="100" value="80" step="5" aria-label="Synergy capture rate">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="% of run-rate synergies captured by end of stub year (FY26H2). Front-loaded base case 25% — aggressive day-1 procurement and SG&amp;A execution.">Yr 1 Phase-In</span><span class="val" id="phase1Val">25%</span></div>
      <input type="range" id="phase1" min="0" max="50" value="25" step="1">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="% of run-rate captured by end of FY27. Front-loaded base case 65% — bulk of procurement, supply-chain, and SG&amp;A savings realized in Year 2.">Yr 2 Phase-In</span><span class="val" id="phase2Val">65%</span></div>
      <input type="range" id="phase2" min="25" max="85" value="65" step="1">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="% of run-rate by end of FY28. Front-loaded base case 90% — incremental synergy adds roll off as big one-time savings are harvested.">Yr 3 Phase-In</span><span class="val" id="phase3Val">90%</span></div>
      <input type="range" id="phase3" min="50" max="100" value="90" step="1">
    </div>
  </div>

  <div class="control-box">
    <h3>Revenue Dis-Synergies</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="% of combined revenue lost in Yr 1 from customer/channel overlap disruption. CPG deals typically see 50-150bps.">Yr 1 Revenue Loss</span><span class="val" id="dissynVal">1.0%</span></div>
      <input type="range" id="dissyn" min="0" max="300" value="100" step="10">
    </div>
  </div>

  <div class="control-box">
    <h3>Financing</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Blended weighted cost of new deal debt ($6.7B cash consideration). KMB current 10-yr YTW ~5.2%, recent CPG M&amp;A issuance in 5.3-5.8% range.">New Debt Cost</span><span class="val" id="debtCostVal">5.50%</span></div>
      <input type="range" id="debtCost" min="400" max="750" value="550" step="10">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Annual debt paydown from combined FCF. Base case $1B/yr, reflecting ~40% of combined FCF net of dividends.">Annual Debt Paydown</span><span class="val" id="paydownVal">$1.0B</span></div>
      <input type="range" id="paydown" min="0" max="2500" value="1000" step="100">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Blended effective tax rate. KMB 23%, KVUE 22%. Base case 23% consistent with merger proxy assumptions.">Tax Rate</span><span class="val" id="taxVal">23%</span></div>
      <input type="range" id="tax" min="18" max="28" value="23" step="1">
    </div>
  </div>

  <div class="control-box">
    <h3>Revenue Growth</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="KMB standalone organic revenue growth. FY25 actual -2.1%, guided LSD+ recovery for FY26+ on normalized pricing.">KMB Organic Growth</span><span class="val" id="kmbGrowVal">2.0%</span></div>
      <input type="range" id="kmbGrow" min="-100" max="500" value="200" step="25">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="KVUE standalone organic revenue growth. FY25 flat, mgmt guiding LSD on Self Care strength, Skin Health recovery, Essential Health MSD.">KVUE Organic Growth</span><span class="val" id="kvueGrowVal">2.0%</span></div>
      <input type="range" id="kvueGrow" min="-100" max="500" value="200" step="25">
    </div>
  </div>

  <div class="control-box">
    <h3>Valuation</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Target forward P/E on FY27E pro-forma EPS. PG 23x / CL 24x / CHD 28x / UL 19x; staples average ~22x. Base case 17x reflects KMB's growth discount.">Target Fwd P/E (FY27E)</span><span class="val" id="peVal">17.0x</span></div>
      <input type="range" id="pe" min="120" max="260" value="170" step="5">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="WACC for DCF. KMB pre-deal beta 0.4, post-deal ~0.6 with leverage. 10-yr UST 4.4%, ERP 5.5%, debt 5.5% x 77%.">WACC</span><span class="val" id="waccVal">7.0%</span></div>
      <input type="range" id="wacc" min="500" max="950" value="700" step="10">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Perpetuity growth. Consumer staples long-run: 2.0-2.5% (GDP-1% to GDP-0.5%).">Terminal Growth</span><span class="val" id="tgVal">2.3%</span></div>
      <input type="range" id="tg" min="150" max="300" value="230" step="5">
    </div>
  </div>
</aside>

<div class="content">

  <div class="valcards">
    <div class="valcard"><div class="vl">FY27E PF Adj EPS</div><div class="vv gold" id="eps27">$8.12</div><div class="vs" id="eps27Delta">+1.5% vs standalone</div></div>
    <div class="valcard"><div class="vl">FY29E PF Adj EPS</div><div class="vv gold" id="eps29">$10.85</div><div class="vs" id="eps29Delta">+26.2% vs standalone</div></div>
    <div class="valcard"><div class="vl">LCS Fair Value</div><div class="vv green" id="pt">$138</div><div class="vs" id="ptUpside">+43% upside</div></div>
    <div class="valcard"><div class="vl">2-Yr Annualized IRR</div><div class="vv green" id="irr">+21%</div><div class="vs">Base case</div></div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Pro-Forma Combined P&amp;L</h2><span class="sub">FY2026E &ndash; FY2029E &middot; $ millions</span></div>
    <div class="panel-body">
      <table class="grid" id="pnlTable" aria-label="Pro-forma combined P&amp;L">
        <thead><tr><th>Line Item</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
        <tbody id="pnlBody"></tbody>
      </table>
      <p class="caption">Source: KMB 10-K FY25, KVUE 10-K FY25, DEFM14A merger proxy. FY26E assumes mid-year close (July 1); FY27E is first full pro-forma year. D&amp;A includes $200M/yr PPA amortization step-up. Interest net of paydown and existing KMB interest.</p>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Accretion / (Dilution) Walk</h2><span class="sub">Pro-forma vs KMB standalone &middot; Adj EPS</span></div>
    <div class="panel-body">
      <table class="grid" id="accTable" aria-label="EPS accretion dilution walk">
        <thead><tr><th>$</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
        <tbody id="accBody"></tbody>
      </table>
      <p class="caption">Standalone EPS assumes KMB continues 2024 Transformation Initiative on plan with 3-4% annual adj EPS growth. Pro-forma reflects full deal impact including step-up D&amp;A, incremental interest, and phased synergy capture.</p>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Synergy Capture Schedule</h2><span class="sub">Cost + Revenue &minus; Reinvestment &middot; $ millions</span></div>
    <div class="panel-body">
      <table class="grid" id="synTable" aria-label="Synergy phasing schedule">
        <thead><tr><th>Synergy Bucket</th><th>Run-Rate</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
        <tbody id="synBody"></tbody>
      </table>
      <p class="caption">Target mix: $1.9B cost synergies (procurement, supply chain, SG&amp;A overlap), $500M revenue synergies (channel cross-sell, geographic expansion), $(300)M reinvestment in brand &amp; innovation. Net $2.1B run-rate by Year 4. Source: [IR] Deal announcement, Nov 3, 2025.</p>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Sensitivity: Synergy Capture &times; New Debt Cost</h2><span class="sub">FY2027E Pro-Forma Adj EPS</span></div>
    <div class="panel-body">
      <table class="sens-table" id="sensTable1" aria-label="Sensitivity synergy capture vs debt cost">
        <thead><tr><th class="corner">Syn &darr; &nbsp;/ &nbsp;Debt &rarr;</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th><th>6.5%</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Sensitivity: Synergy Capture &times; Forward P/E</h2><span class="sub">LCS Fair Value &middot; FY2027E Adj EPS base</span></div>
    <div class="panel-body">
      <table class="sens-table" id="sensTable2" aria-label="Sensitivity synergy capture vs forward P/E">
        <thead><tr><th class="corner">Syn &darr; &nbsp;/ &nbsp;P/E &rarr;</th><th>14x</th><th>16x</th><th>18x</th><th>20x</th><th>22x</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Probability-Weighted Expected Value</h2><span class="sub">Scenario blend across Bull / Base / Street / Bear</span></div>
    <div class="panel-body">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:16px">
        <div style="background:var(--surface);border-radius:8px;padding:12px">
          <label style="font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--green);font-weight:700">Bull Probability</label>
          <div style="display:flex;gap:8px;align-items:center;margin-top:6px">
            <input type="range" id="probBull" min="0" max="60" value="15" step="5" style="flex:1">
            <span id="probBullVal" style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--green);min-width:36px;text-align:right">15%</span>
          </div>
        </div>
        <div style="background:var(--surface);border-radius:8px;padding:12px">
          <label style="font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--gold);font-weight:700">Base Probability</label>
          <div style="display:flex;gap:8px;align-items:center;margin-top:6px">
            <input type="range" id="probBase" min="0" max="80" value="50" step="5" style="flex:1">
            <span id="probBaseVal" style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--gold);min-width:36px;text-align:right">50%</span>
          </div>
        </div>
        <div style="background:var(--surface);border-radius:8px;padding:12px">
          <label style="font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--steel);font-weight:700">Street Probability</label>
          <div style="display:flex;gap:8px;align-items:center;margin-top:6px">
            <input type="range" id="probStreet" min="0" max="60" value="20" step="5" style="flex:1">
            <span id="probStreetVal" style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--steel);min-width:36px;text-align:right">20%</span>
          </div>
        </div>
        <div style="background:var(--surface);border-radius:8px;padding:12px">
          <label style="font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--red);font-weight:700">Bear Probability</label>
          <div style="display:flex;gap:8px;align-items:center;margin-top:6px">
            <input type="range" id="probBear" min="0" max="60" value="15" step="5" style="flex:1">
            <span id="probBearVal" style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--red);min-width:36px;text-align:right">15%</span>
          </div>
        </div>
      </div>
      <p id="probSum" style="font-size:11px;color:var(--text-muted);margin-bottom:12px">Sum: 100%</p>
      <table class="grid" aria-label="Probability-weighted outcomes">
        <thead><tr><th>Scenario</th><th>Prob.</th><th>FY27E PF EPS</th><th>Fair Value</th><th>Return</th><th>Weighted PT Contribution</th></tr></thead>
        <tbody id="probBody"></tbody>
      </table>
      <p class="caption">Expected value = &Sigma; (Probability &times; Fair Value). Each scenario uses its corresponding preset for synergy capture, debt cost, and multiple assumptions. Adjust probabilities to reflect your view.</p>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Balance Sheet &amp; Leverage Bridge</h2><span class="sub">Pro-Forma Net Debt / Adj EBITDA</span></div>
    <div class="panel-body">
      <table class="grid" id="bsTable" aria-label="Balance sheet and leverage">
        <thead><tr><th>$ millions</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
        <tbody id="bsBody"></tbody>
      </table>
      <p class="caption">Starting net debt: $7.2B KMB existing + $8.0B KVUE existing + $6.7B new cash consideration = $21.9B. Combined FY26E EBITDA $5.4B annualized. Management targets sub-3x by Yr 3; our model shows 2.5x by FY28E in base case.</p>
    </div>
  </div>

</div>
</div>
</div>

<footer>
<p>Levin Capital Strategies &bull; KMB + KVUE Merger Model &bull; Last updated April 14, 2026</p>
<p style="margin-top:6px;font-size:10px;opacity:0.6">Sources: KMB 10-K FY25, KVUE 10-K FY25, DEFM14A Merger Proxy, Company IR materials. For internal use only.</p>
</footer>

<script>
// =========== MODEL LOGIC ===========
// Front-loaded synergy phasing — aggressive day-1 procurement + SG&A capture,
// with incremental adds rolling off in later years as big one-time savings are harvested
const PRESETS = {
  bull:   {synCap:100, phase1:35, phase2:80, phase3:95, dissyn:0,   debtCost:480, paydown:1500, tax:22, kmbGrow:300, kvueGrow:350, pe:200, wacc:650, tg:250},
  base:   {synCap:80,  phase1:25, phase2:65, phase3:90, dissyn:100, debtCost:550, paydown:1000, tax:23, kmbGrow:200, kvueGrow:200, pe:170, wacc:700, tg:230},
  street: {synCap:65,  phase1:15, phase2:45, phase3:75, dissyn:125, debtCost:575, paydown:800,  tax:23, kmbGrow:150, kvueGrow:150, pe:160, wacc:720, tg:220},
  bear:   {synCap:50,  phase1:10, phase2:30, phase3:60, dissyn:200, debtCost:650, paydown:500,  tax:24, kmbGrow:0,   kvueGrow:50,  pe:140, wacc:800, tg:200},
};

function getState(){
  return {
    synCap:+document.getElementById('synCap').value,
    phase1:+document.getElementById('phase1').value,
    phase2:+document.getElementById('phase2').value,
    phase3:+document.getElementById('phase3').value,
    dissyn:+document.getElementById('dissyn').value,
    debtCost:+document.getElementById('debtCost').value,
    paydown:+document.getElementById('paydown').value,
    tax:+document.getElementById('tax').value,
    kmbGrow:+document.getElementById('kmbGrow').value,
    kvueGrow:+document.getElementById('kvueGrow').value,
    pe:+document.getElementById('pe').value,
    wacc:+document.getElementById('wacc').value,
    tg:+document.getElementById('tg').value,
  };
}

function applyPreset(name){
  const p = PRESETS[name];
  Object.keys(p).forEach(k=>{document.getElementById(k).value = p[k]});
  document.querySelectorAll('.preset').forEach(b=>b.classList.toggle('active',b.dataset.preset===name));
  update();
}

// Anchors (FY2025 actuals)
const KMB_BASE = { rev:16447, ebitda:3800, ebit:2700, shares:334 }; // FY25 adj
const KVUE_BASE = { rev:15100, ebitda:3400, ebit:2750, shares:1920 };
const DEAL = {
  cashConsideration: 6720,   // $3.50 * 1920M KVUE shares
  exchangeRatio: 0.14625,
  kvueShares: 1920,
  newKmbShares: 1920 * 0.14625, // 280.8M
  synergyRunRate: 2100,         // $M
};
const EXISTING_DEBT = { kmb:7200, kvue:8000 };

function computeModel(s){
  const synCap = s.synCap/100;
  const p1 = s.phase1/100, p2 = s.phase2/100, p3 = s.phase3/100;
  const dissynRate = s.dissyn/10000;
  const debtR = s.debtCost/10000;
  const taxR = s.tax/100;
  const kmbG = s.kmbGrow/10000;
  const kvueG = s.kvueGrow/10000;

  // Standalone trajectories
  const kmbRev = {
    26: KMB_BASE.rev*(1+kmbG),
    27: KMB_BASE.rev*Math.pow(1+kmbG,2),
    28: KMB_BASE.rev*Math.pow(1+kmbG,3),
    29: KMB_BASE.rev*Math.pow(1+kmbG,4),
  };
  const kvueRev = {
    26: KVUE_BASE.rev*(1+kvueG),
    27: KVUE_BASE.rev*Math.pow(1+kvueG,2),
    28: KVUE_BASE.rev*Math.pow(1+kvueG,3),
    29: KVUE_BASE.rev*Math.pow(1+kvueG,4),
  };

  // KMB standalone EBITDA / EPS trajectory (assumes ~30bps/yr margin expansion from Transformation Initiative)
  const kmbEbitdaMargin = 0.231; // FY25 adj EBITDA margin
  const kmbStandalone = {};
  [26,27,28,29].forEach((yr,i)=>{
    const m = kmbEbitdaMargin + 0.003*(i+1);
    const ebitda = kmbRev[yr]*m;
    const da = kmbRev[yr]*0.045;
    const ebit = ebitda - da;
    const intExp = 350 - 25*(i+1); // existing KMB int
    const pretax = ebit - intExp;
    const ni = pretax*(1-taxR);
    const eps = ni / KMB_BASE.shares;
    kmbStandalone[yr] = {rev:kmbRev[yr], ebitda, ebit, ni, eps};
  });

  // KVUE contribution — FY26 is half-year (mid-year close)
  const kvueContribRev = {
    26: kvueRev[26]*0.5,
    27: kvueRev[27],
    28: kvueRev[28],
    29: kvueRev[29],
  };
  const kvueEbitdaMargin = 0.225;
  const kvueContribEbitda = {};
  [26,27,28,29].forEach((yr,i)=>{
    const m = kvueEbitdaMargin + 0.002*(i+1);
    kvueContribEbitda[yr] = kvueContribRev[yr]*m;
  });

  // Dis-synergies (applied to KVUE contribution only)
  const dissynByYr = {26:dissynRate*0.5, 27:dissynRate, 28:dissynRate*0.5, 29:0};
  const dissynRev = {};
  [26,27,28,29].forEach(yr=>{dissynRev[yr] = -(kmbRev[yr]+kvueContribRev[yr])*dissynByYr[yr]});

  // Synergies schedule — bucket: cost 90%, revenue 10% lift
  const phase = {26:p1, 27:p2, 28:p3, 29:1.0};
  const realized = {};
  [26,27,28,29].forEach(yr=>{realized[yr] = DEAL.synergyRunRate * synCap * phase[yr]});

  // Combined P&L
  const combined = {};
  [26,27,28,29].forEach((yr,i)=>{
    const rev = kmbRev[yr] + kvueContribRev[yr] + dissynRev[yr];
    const preSynEbitda = kmbStandalone[yr].ebitda + kvueContribEbitda[yr] + dissynRev[yr]*0.25; // dis-synergy flows through at 25% margin
    const synEbitda = realized[yr];
    const ebitda = preSynEbitda + synEbitda;
    // PPA step-up D&A: ~$200M/yr (amortizing $2B intangibles over 10yr), half in FY26
    const ppa = yr===26 ? 100 : 200;
    const baseDa = rev*0.045;
    const da = baseDa + ppa;
    const ebit = ebitda - da;
    // Debt balance: starts $21.9B, paydown
    const startDebt = 21900 - (i)*s.paydown;
    const avgDebt = Math.max(8000, startDebt - s.paydown*0.5);
    const intExp = avgDebt * debtR;
    const existingInt = yr===26 ? 300 : 0; // pre-deal interest netted
    const totalInt = intExp;
    const pretax = ebit - totalInt;
    const ni = pretax*(1-taxR);
    // Diluted shares: FY26 partial year share count, FY27+ full
    const sharesFull = KMB_BASE.shares + DEAL.newKmbShares; // 614.8M
    const sharesYr = yr===26 ? (KMB_BASE.shares*0.5 + sharesFull*0.5) : sharesFull;
    const eps = ni / sharesYr;
    combined[yr] = {
      rev, kmbRev:kmbRev[yr], kvueRev:kvueContribRev[yr], dissynRev:dissynRev[yr],
      preSynEbitda, synEbitda, ebitda, da, ebit, totalInt, pretax, ni, eps,
      shares:sharesYr, netDebt:startDebt
    };
  });

  // Accretion/dilution
  const accretion = {};
  [26,27,28,29].forEach(yr=>{
    const pf = combined[yr].eps;
    const sa = kmbStandalone[yr].eps;
    accretion[yr] = {pf, sa, deltaDollar:pf-sa, deltaPct:(pf-sa)/sa};
  });

  return {kmbStandalone, kvueContribRev, kvueContribEbitda, dissynRev, realized, combined, accretion};
}

function fmt$(n){ return '$'+Math.round(n).toLocaleString(); }
function fmt$B(n){ return '$'+(n/1000).toFixed(1)+'B'; }
function fmtEPS(n){ return '$'+n.toFixed(2); }
function fmtPct(n){ return (n*100>=0?'+':'')+(n*100).toFixed(1)+'%'; }
function fmtShares(n){ return Math.round(n).toLocaleString(); }

function update(){
  const s = getState();
  // Update slider display values
  document.getElementById('synCapVal').textContent = s.synCap+'%';
  document.getElementById('phase1Val').textContent = s.phase1+'%';
  document.getElementById('phase2Val').textContent = s.phase2+'%';
  document.getElementById('phase3Val').textContent = s.phase3+'%';
  document.getElementById('dissynVal').textContent = (s.dissyn/100).toFixed(1)+'%';
  document.getElementById('debtCostVal').textContent = (s.debtCost/100).toFixed(2)+'%';
  document.getElementById('paydownVal').textContent = '$'+(s.paydown/1000).toFixed(1)+'B';
  document.getElementById('taxVal').textContent = s.tax+'%';
  document.getElementById('kmbGrowVal').textContent = (s.kmbGrow/100).toFixed(1)+'%';
  document.getElementById('kvueGrowVal').textContent = (s.kvueGrow/100).toFixed(1)+'%';
  document.getElementById('peVal').textContent = (s.pe/10).toFixed(1)+'x';
  document.getElementById('waccVal').textContent = (s.wacc/100).toFixed(1)+'%';
  document.getElementById('tgVal').textContent = (s.tg/100).toFixed(1)+'%';

  const m = computeModel(s);

  // Valuation cards
  const eps27 = m.combined[27].eps;
  const eps29 = m.combined[29].eps;
  const acc27 = m.accretion[27].deltaPct;
  const acc29 = m.accretion[29].deltaPct;
  document.getElementById('eps27').textContent = fmtEPS(eps27);
  document.getElementById('eps29').textContent = fmtEPS(eps29);
  const delta27El = document.getElementById('eps27Delta');
  const delta29El = document.getElementById('eps29Delta');
  delta27El.textContent = fmtPct(acc27) + ' vs standalone';
  delta27El.className = 'vs ' + (acc27>=0?'delta-up':'delta-down');
  delta29El.textContent = fmtPct(acc29) + ' vs standalone';
  delta29El.className = 'vs ' + (acc29>=0?'delta-up':'delta-down');

  // Fair value
  const targetPe = s.pe/10;
  const pt = eps27 * targetPe;
  const currentPrice = 96.59;
  const upside = (pt - currentPrice)/currentPrice;
  const ptEl = document.getElementById('pt');
  ptEl.textContent = '$'+Math.round(pt);
  ptEl.className = 'vv '+(upside>=0.1?'green':(upside<=-0.05?'red':'gold'));
  const upEl = document.getElementById('ptUpside');
  upEl.textContent = fmtPct(upside)+' upside';

  // 2-yr IRR (to FY27 target price + dividends)
  const div2yr = 4.90 * 2; // $2.45/yr KMB dividend x 2
  const totalReturn = (pt + div2yr - currentPrice)/currentPrice;
  const irr = Math.pow(1+totalReturn, 0.5) - 1;
  const irrEl = document.getElementById('irr');
  irrEl.textContent = fmtPct(irr);
  irrEl.className = 'vv '+(irr>=0.20?'green':(irr>=0?'gold':'red'));

  // P&L Table
  const pnlRows = [
    {lbl:'KMB standalone revenue',fy25:16447,c:'rev', sub:'kmb'},
    {lbl:'KVUE contribution',fy25:'—',c:'rev', sub:'kvue'},
    {lbl:'Revenue dis-synergies',fy25:'—',c:'rev', sub:'dissyn',syn:true},
    {lbl:'<strong>Combined revenue</strong>',fy25:16447,c:'rev',sub:'total',total:true},
    {lbl:'<em>Adj EBITDA pre-synergy</em>',fy25:3800,c:'preSynEbitda',section:false,sub:'preSyn'},
    {lbl:'+ Realized synergies',fy25:0,c:'synEbitda',syn:true,sub:'synReal'},
    {lbl:'<strong>Combined Adj EBITDA</strong>',fy25:3800,c:'ebitda',total:true},
    {lbl:'D&amp;A (incl PPA step-up)',fy25:-1100,c:'da',neg:true},
    {lbl:'Adj EBIT',fy25:2700,c:'ebit'},
    {lbl:'Interest expense (net)',fy25:-325,c:'totalInt',neg:true},
    {lbl:'Pre-tax income',fy25:2375,c:'pretax'},
    {lbl:'Taxes',fy25:-547,c:'tax',neg:true},
    {lbl:'<strong>Adj net income</strong>',fy25:1828,c:'ni',total:true},
    {lbl:'Diluted shares (M)',fy25:334,c:'shares'},
    {lbl:'<strong>Pro-forma Adj EPS</strong>',fy25:5.47,c:'eps',total:true,eps:true},
    {lbl:'KMB standalone Adj EPS (ref)',fy25:7.53,c:'standalone',eps:true},
  ];
  let pnlHTML = '';
  pnlRows.forEach(r=>{
    let cells = '';
    [26,27,28,29].forEach(yr=>{
      let v;
      if (r.c==='rev' && r.sub==='kmb') v = m.kmbStandalone[yr].rev;
      else if (r.c==='rev' && r.sub==='kvue') v = m.kvueContribRev[yr];
      else if (r.c==='rev' && r.sub==='dissyn') v = m.dissynRev[yr];
      else if (r.c==='rev' && r.sub==='total') v = m.combined[yr].rev;
      else if (r.c==='tax') v = -m.combined[yr].pretax*(s.tax/100);
      else if (r.c==='standalone') v = m.kmbStandalone[yr].eps;
      else if (r.c==='shares') v = m.combined[yr].shares;
      else v = m.combined[yr][r.c];
      // Some numbers need negative sign for display
      if (r.neg && v > 0) v = -v;
      if (r.eps) cells += '<td>'+fmtEPS(v)+'</td>';
      else if (r.c==='shares') cells += '<td>'+Math.round(v)+'</td>';
      else cells += '<td>'+(v<0?'(':'')+Math.round(Math.abs(v)).toLocaleString()+(v<0?')':'')+'</td>';
    });
    const cls = r.total?'total':(r.syn?'syn':'');
    const fy25val = r.eps ? (typeof r.fy25==='number'?fmtEPS(r.fy25):r.fy25) : (typeof r.fy25==='number'?(r.fy25<0?'('+Math.abs(r.fy25).toLocaleString()+')':r.fy25.toLocaleString()):r.fy25);
    pnlHTML += '<tr class="'+cls+'"><td>'+r.lbl+'</td><td>'+fy25val+'</td>'+cells+'</tr>';
  });
  document.getElementById('pnlBody').innerHTML = pnlHTML;

  // Accretion table
  let accHTML = '';
  accHTML += '<tr><td>Pro-forma Adj EPS</td>';
  [26,27,28,29].forEach(yr=>{accHTML += '<td>'+fmtEPS(m.combined[yr].eps)+'</td>'});
  accHTML += '</tr>';
  accHTML += '<tr><td>KMB standalone Adj EPS</td>';
  [26,27,28,29].forEach(yr=>{accHTML += '<td>'+fmtEPS(m.kmbStandalone[yr].eps)+'</td>'});
  accHTML += '</tr>';
  accHTML += '<tr class="accretion"><td>Accretion / (Dilution) $</td>';
  [26,27,28,29].forEach(yr=>{
    const d = m.accretion[yr].deltaDollar;
    accHTML += '<td class="'+(d>=0?'green':'red')+'">'+(d>=0?'+':'')+fmtEPS(d)+'</td>'
  });
  accHTML += '</tr>';
  accHTML += '<tr class="accretion"><td>Accretion / (Dilution) %</td>';
  [26,27,28,29].forEach(yr=>{
    const d = m.accretion[yr].deltaPct;
    accHTML += '<td class="'+(d>=0?'green':'red')+'">'+fmtPct(d)+'</td>'
  });
  accHTML += '</tr>';
  document.getElementById('accBody').innerHTML = accHTML;

  // Synergy table
  let synHTML = '';
  const synCap = s.synCap/100;
  const costRR = 1900 * synCap;
  const revRR = 500 * synCap;
  const reinRR = -300 * synCap;
  const netRR = 2100 * synCap;
  const phases = [s.phase1/100, s.phase2/100, s.phase3/100, 1.0];
  synHTML += '<tr><td>Cost synergies</td><td>'+fmt$(costRR)+'</td>';
  phases.forEach(p=>{synHTML += '<td>'+fmt$(costRR*p)+'</td>'});
  synHTML += '</tr>';
  synHTML += '<tr><td>Revenue synergies</td><td>'+fmt$(revRR)+'</td>';
  phases.forEach(p=>{synHTML += '<td>'+fmt$(revRR*p)+'</td>'});
  synHTML += '</tr>';
  synHTML += '<tr><td>Reinvestment</td><td>('+fmt$(Math.abs(reinRR)).replace('$','$')+')</td>';
  phases.forEach(p=>{synHTML += '<td>('+fmt$(Math.abs(reinRR*p)).replace('$','$')+')</td>'});
  synHTML += '</tr>';
  synHTML += '<tr class="total"><td>Net realized synergies</td><td>'+fmt$(netRR)+'</td>';
  phases.forEach(p=>{synHTML += '<td>'+fmt$(netRR*p)+'</td>'});
  synHTML += '</tr>';
  document.getElementById('synBody').innerHTML = synHTML;

  // Sensitivity 1: synergy x debt cost -> FY27 EPS
  const syCaps = [40,60,80,100,120];
  const debtRates = [450,500,550,600,650];
  let sens1HTML = '';
  syCaps.forEach(sc=>{
    let row = '<tr><th>'+sc+'%</th>';
    debtRates.forEach(dr=>{
      const s2 = {...s, synCap:sc, debtCost:dr};
      const m2 = computeModel(s2);
      const eps = m2.combined[27].eps;
      const sa = m2.kmbStandalone[27].eps;
      const acc = (eps-sa)/sa;
      let heat = 'heat-3';
      if (acc<-0.03) heat='heat-1';
      else if (acc<0) heat='heat-2';
      else if (acc<0.05) heat='heat-3';
      else if (acc<0.10) heat='heat-4';
      else heat='heat-5';
      const highlight = (sc===s.synCap && Math.abs(dr-s.debtCost)<5) ? 'highlight' : heat;
      row += '<td class="'+highlight+'">'+fmtEPS(eps)+'</td>';
    });
    row += '</tr>';
    sens1HTML += row;
  });
  document.querySelector('#sensTable1 tbody').innerHTML = sens1HTML;

  // Sensitivity 2: synergy x P/E -> Fair Value
  const peRates = [14,16,18,20,22];
  let sens2HTML = '';
  syCaps.forEach(sc=>{
    let row = '<tr><th>'+sc+'%</th>';
    peRates.forEach(pe=>{
      const s2 = {...s, synCap:sc};
      const m2 = computeModel(s2);
      const fv = m2.combined[27].eps * pe;
      const up = (fv-96.59)/96.59;
      let heat = 'heat-3';
      if (up<-0.1) heat='heat-1';
      else if (up<0) heat='heat-2';
      else if (up<0.15) heat='heat-3';
      else if (up<0.30) heat='heat-4';
      else heat='heat-5';
      const highlight = (sc===s.synCap && pe===Math.round(s.pe/10)) ? 'highlight' : heat;
      row += '<td class="'+highlight+'">$'+Math.round(fv)+'</td>';
    });
    row += '</tr>';
    sens2HTML += row;
  });
  document.querySelector('#sensTable2 tbody').innerHTML = sens2HTML;

  // Balance sheet
  let bsHTML = '';
  const rows = [
    {lbl:'Starting net debt',c:'start'},
    {lbl:'+ Cash interest paid',c:'int'},
    {lbl:'&minus; Debt paydown',c:'paydown'},
    {lbl:'<strong>Ending net debt</strong>',c:'end',total:true},
    {lbl:'Combined Adj EBITDA',c:'ebitda'},
    {lbl:'<strong>Net Debt / EBITDA</strong>',c:'lev',total:true},
  ];
  rows.forEach(r=>{
    let cells = '';
    [26,27,28,29].forEach((yr,i)=>{
      let v;
      const endDebt = Math.max(8000, 21900 - s.paydown*(i+1)*(yr===26?0.5:1));
      if (r.c==='start') v = i===0? 21900 : Math.max(8000, 21900 - s.paydown*i);
      else if (r.c==='int') v = -m.combined[yr].totalInt;
      else if (r.c==='paydown') v = -s.paydown*(yr===26?0.5:1);
      else if (r.c==='end') v = endDebt;
      else if (r.c==='ebitda') v = m.combined[yr].ebitda * (yr===26?2:1); // annualize FY26
      else if (r.c==='lev') v = endDebt / (m.combined[yr].ebitda * (yr===26?2:1));
      if (r.c==='lev') cells += '<td>'+v.toFixed(2)+'x</td>';
      else cells += '<td>'+(v<0?'(':'')+Math.round(Math.abs(v)).toLocaleString()+(v<0?')':'')+'</td>';
    });
    const cls = r.total?'total':'';
    bsHTML += '<tr class="'+cls+'"><td>'+r.lbl+'</td>'+cells+'</tr>';
  });
  document.getElementById('bsBody').innerHTML = bsHTML;
}

// Wire sliders
const SLIDER_IDS = ['synCap','phase1','phase2','phase3','dissyn','debtCost','paydown','tax','kmbGrow','kvueGrow','pe','wacc','tg'];
SLIDER_IDS.forEach(id=>{
  document.getElementById(id).addEventListener('input',()=>{
    document.querySelectorAll('.preset').forEach(b=>b.classList.remove('active'));
    update();
  });
});
// Wire probability sliders
['probBull','probBase','probStreet','probBear'].forEach(id=>{
  document.getElementById(id).addEventListener('input',updateProbPanel);
});

function computeScenarioPt(presetName){
  const p = PRESETS[presetName];
  const saved = {...getState()};
  Object.keys(p).forEach(k=>{document.getElementById(k).value = p[k]});
  const s = getState();
  const m = computeModel(s);
  const pt = m.combined[27].eps * (s.pe/10);
  const eps = m.combined[27].eps;
  // Restore
  Object.keys(saved).forEach(k=>{
    const el = document.getElementById(k);
    if(el) el.value = saved[k];
  });
  return {pt, eps};
}

function updateProbPanel(){
  const pBull = +document.getElementById('probBull').value;
  const pBase = +document.getElementById('probBase').value;
  const pStreet = +document.getElementById('probStreet').value;
  const pBear = +document.getElementById('probBear').value;
  document.getElementById('probBullVal').textContent = pBull+'%';
  document.getElementById('probBaseVal').textContent = pBase+'%';
  document.getElementById('probStreetVal').textContent = pStreet+'%';
  document.getElementById('probBearVal').textContent = pBear+'%';
  const sum = pBull+pBase+pStreet+pBear;
  document.getElementById('probSum').innerHTML = 'Sum: <strong style="color:'+(sum===100?'var(--green)':'var(--red)')+'">'+sum+'%</strong>'+(sum===100?'':' &mdash; adjust to total 100%');

  const scenarios = [
    {name:'Bull', preset:'bull', prob:pBull, color:'var(--green)'},
    {name:'Base', preset:'base', prob:pBase, color:'var(--gold)'},
    {name:'Street', preset:'street', prob:pStreet, color:'var(--steel)'},
    {name:'Bear', preset:'bear', prob:pBear, color:'var(--red)'},
  ];
  const PRICE_KMB = 96.59;
  let html = '';
  let ev = 0;
  scenarios.forEach(sc=>{
    const {pt, eps} = computeScenarioPt(sc.preset);
    const ret = (pt-PRICE_KMB)/PRICE_KMB;
    const contribution = pt * (sc.prob/100);
    ev += contribution;
    html += '<tr><td style="color:'+sc.color+';font-weight:700">'+sc.name+'</td>';
    html += '<td>'+sc.prob+'%</td>';
    html += '<td>$'+eps.toFixed(2)+'</td>';
    html += '<td>$'+Math.round(pt)+'</td>';
    html += '<td style="color:'+(ret>=0?'var(--green)':'var(--red)')+'">'+(ret>=0?'+':'')+(ret*100).toFixed(0)+'%</td>';
    html += '<td>$'+Math.round(contribution)+'</td></tr>';
  });
  html += '<tr class="total"><td>Expected Value</td><td>'+sum+'%</td><td>&mdash;</td><td>&mdash;</td>';
  const evRet = (ev-PRICE_KMB)/PRICE_KMB;
  html += '<td style="color:'+(evRet>=0?'var(--green)':'var(--red)')+'">'+(evRet>=0?'+':'')+(evRet*100).toFixed(0)+'%</td>';
  html += '<td>$'+Math.round(ev)+'</td></tr>';
  document.getElementById('probBody').innerHTML = html;
}

// URL state sharing
function stateToHash(){
  const s = getState();
  const probs = {pB:+document.getElementById('probBull').value,pBa:+document.getElementById('probBase').value,pS:+document.getElementById('probStreet').value,pBe:+document.getElementById('probBear').value};
  return btoa(JSON.stringify({...s,...probs}));
}
function hashToState(hash){
  try {
    const obj = JSON.parse(atob(hash));
    SLIDER_IDS.forEach(k=>{if(obj[k]!==undefined) document.getElementById(k).value = obj[k]});
    if(obj.pB!==undefined) document.getElementById('probBull').value = obj.pB;
    if(obj.pBa!==undefined) document.getElementById('probBase').value = obj.pBa;
    if(obj.pS!==undefined) document.getElementById('probStreet').value = obj.pS;
    if(obj.pBe!==undefined) document.getElementById('probBear').value = obj.pBe;
  } catch(e){console.warn('Invalid shared state hash')}
}
function shareScenario(){
  const hash = stateToHash();
  const url = location.origin + location.pathname + '#' + hash;
  navigator.clipboard.writeText(url).then(()=>{
    const t = document.getElementById('shareToast');
    t.style.display = 'inline';
    setTimeout(()=>{t.style.display='none'}, 2500);
  }).catch(()=>{prompt('Copy shareable URL:', url)});
}
if(location.hash.length > 1){
  hashToState(location.hash.slice(1));
  document.querySelectorAll('.preset').forEach(b=>b.classList.remove('active'));
}

// Keyboard shortcuts
document.addEventListener('keydown',(e)=>{
  if(e.target.tagName==='INPUT') return;
  if(e.key==='1') applyPreset('bull');
  else if(e.key==='2') applyPreset('base');
  else if(e.key==='3') applyPreset('street');
  else if(e.key==='4') applyPreset('bear');
  else if(e.key.toLowerCase()==='r') applyPreset('base');
});

// Dark mode
function toggleDark(){
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelector('.dark-toggle').innerHTML = isDark?'&#9788;':'&#9790;';
  try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}
}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}

update();
updateProbPanel();
<\/script>
</body>
</html>`;
