export const bxModelHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Blackstone (BX) interactive model: FRE/DE/AUM algorithm, private wealth inflow assumptions, realization cycle, valuation sensitivity.">
<title>BX Model | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4B0;</text></svg>">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
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
.panel-header h2{font-size:14px;font-weight:700;color:var(--heading)}
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
table.grid tr.green td{color:var(--green)}

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

footer{padding:32px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:24px}
footer p{font-size:11px;color:var(--text-muted)}

@media(max-width:1100px){.main-grid{grid-template-columns:1fr}.controls{position:static;max-height:none}.valcards{grid-template-columns:repeat(2,1fr)}}

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
    <a href="/lcs/bx/">Overview</a>
    <a href="/lcs/bx/memo.html">Memo</a>
    <a href="/lcs/bx/presentation.html">Deck</a>
    <a href="/lcs/bx/model.html" class="active">Model</a>
    <a href="/lcs/bx/consensus.html">Consensus</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>BX</strong> $110</span>
  </div>
</div>
</nav>

<section class="hero">
  <div class="wrap">
    <h1>Blackstone Interactive Model</h1>
    <p>AUM / FRE / DE algorithm &middot; inflow &amp; margin sliders &middot; realization cycle &middot; FY2026E&ndash;FY2028E</p>
    <p class="kbd-hint">Presets: <kbd>1</kbd> Bull <kbd>2</kbd> Base <kbd>3</kbd> Street <kbd>4</kbd> Bear <kbd>R</kbd> Reset &middot; Hover slider labels for rationale</p>
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
    <h3>AUM Growth by Segment</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Real estate AUM growth. FY25 +5% despite muted commercial RE; normalization in 2026+ as BREIT redemption pressure fades.">Real Estate</span><span class="val" id="reGrowVal">6%</span></div>
      <input type="range" id="reGrow" min="-200" max="1500" value="600" step="25">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Private equity AUM growth. Flagship BCP IX targeted $25B. BXPE (private wealth PE) adds incremental pace.">Private Equity</span><span class="val" id="peGrowVal">12%</span></div>
      <input type="range" id="peGrow" min="0" max="2500" value="1200" step="25">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Credit + insurance AUM growth. Largest segment, fastest grower historically; sector concerns weigh near-term but structural trend intact.">Credit &amp; Insurance</span><span class="val" id="creditGrowVal">15%</span></div>
      <input type="range" id="creditGrow" min="0" max="3000" value="1500" step="25">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Multi-asset + infrastructure AUM growth. Infrastructure is the fastest-growing vehicle in BX history; BAAM contributes stable base.">Multi-Asset + Infra</span><span class="val" id="maGrowVal">18%</span></div>
      <input type="range" id="maGrow" min="0" max="3500" value="1800" step="25">
    </div>
  </div>

  <div class="control-box">
    <h3>Fee Economics</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Effective management fee rate on total AUM. FY25 ~0.69% blended. Mix shift to credit compresses slightly; performance of higher-fee vehicles offsets.">Blended Mgmt Fee Rate</span><span class="val" id="feeRateVal">0.69%</span></div>
      <input type="range" id="feeRate" min="55" max="85" value="69" step="1">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="FRE margin. FY25 ~59% at record; FY26+ guidance assumes 60-62% as platform scales. Operating leverage clearer above 60%.">FRE Margin</span><span class="val" id="freMarginVal">61%</span></div>
      <input type="range" id="freMargin" min="50" max="68" value="61" step="1">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Fee-related performance revenue growth. Supplemental FRE driver from BREIT, BCRED performance components.">FRE Perf Rev Growth</span><span class="val" id="frePerfGrowVal">20%</span></div>
      <input type="range" id="frePerfGrow" min="0" max="4000" value="2000" step="50">
    </div>
  </div>

  <div class="control-box">
    <h3>Realization Cycle</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Net realizations (net performance revenue less performance comp). FY25 $1.4B; cycle trough FY23-24; normalized level $3-4B. Base case assumes normalization path.">Net Realizations ($B)</span><span class="val" id="realVal">$2.2B</span></div>
      <input type="range" id="real" min="500" max="5000" value="2200" step="100">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="YoY growth in net realizations. Base case 25% reflects realization recovery into FY27-28.">Realization Growth</span><span class="val" id="realGrowVal">25%</span></div>
      <input type="range" id="realGrow" min="-2000" max="6000" value="2500" step="100">
    </div>
  </div>

  <div class="control-box">
    <h3>Valuation</h3>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Target forward P/DE multiple on FY27E. BX historical range 18-28x; peer set APO 12x, KKR 14x, ARES 17x; BX trades at premium due to diversified book.">Target Fwd P/DE</span><span class="val" id="peVal">22x</span></div>
      <input type="range" id="pe" min="140" max="300" value="220" step="5">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="DE payout ratio (dividend + buyback). BX targets 85% of DE paid to shareholders.">Payout Ratio</span><span class="val" id="payoutVal">85%</span></div>
      <input type="range" id="payout" min="60" max="95" value="85" step="1">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="DCF WACC. BX beta ~1.4, risk-free 4.4%, ERP 5.5%, minimal net debt so WACC ~ cost of equity ~11%.">WACC</span><span class="val" id="waccVal">11.0%</span></div>
      <input type="range" id="wacc" min="900" max="1300" value="1100" step="25">
    </div>
    <div class="slider-group">
      <div class="slider-label"><span class="lbl" title="Terminal growth. Asset managers with perpetual-capital bias can support 4-5%; base case 4.0%.">Terminal Growth</span><span class="val" id="tgVal">4.0%</span></div>
      <input type="range" id="tg" min="200" max="550" value="400" step="25">
    </div>
  </div>
</aside>

<div class="content">

  <div class="valcards">
    <div class="valcard"><div class="vl">FY27E DE/Sh</div><div class="vv gold" id="de27">$6.80</div><div class="vs" id="de27Growth">+22% vs FY25</div></div>
    <div class="valcard"><div class="vl">FY28E DE/Sh</div><div class="vv gold" id="de28">$8.25</div><div class="vs" id="de28Growth">+48% vs FY25</div></div>
    <div class="valcard"><div class="vl">LCS Fair Value</div><div class="vv green" id="pt">$150</div><div class="vs" id="ptUpside">+36% upside</div></div>
    <div class="valcard"><div class="vl">2-Yr Total Return IRR</div><div class="vv green" id="irr">+21%</div><div class="vs">Including dividend</div></div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>AUM Build &mdash; FY2025A to FY2028E</h2><span class="sub">$ in billions</span></div>
    <div class="panel-body">
      <table class="grid" id="aumTable" aria-label="AUM build by segment">
        <thead><tr><th>Segment</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
        <tbody id="aumBody"></tbody>
      </table>
      <p class="caption">FEAUM typically ~72% of total AUM; stable ratio. Perpetual capital &gt;40% of total AUM as of FY25 and growing. Source: BX 10-K FY25, quarterly supplementals.</p>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>FRE &amp; Distributable Earnings</h2><span class="sub">Base case: 11% mgmt fee CAGR, 62% terminal FRE margin, realization normalization</span></div>
    <div class="panel-body">
      <table class="grid" id="freTable" aria-label="FRE and distributable earnings">
        <thead><tr><th>$ billions</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
        <tbody id="freBody"></tbody>
      </table>
      <p class="caption">Fee revenues = blended fee rate &times; average FEAUM + fee-related performance. FRE = fee rev &times; margin. DE = FRE + net realizations + net interest &minus; taxes (blended 20%). DE/sh = DE / diluted shares (slight dilution ~0.8%/yr).</p>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Sensitivity: AUM Growth &times; FRE Margin</h2><span class="sub">FY27E Distributable Earnings Per Share</span></div>
    <div class="panel-body">
      <table class="sens-table" id="sensTable1" aria-label="Sensitivity AUM growth vs FRE margin">
        <thead><tr><th class="corner">AUM &darr; &nbsp;/ &nbsp;FRE% &rarr;</th><th>56%</th><th>59%</th><th>62%</th><th>65%</th><th>68%</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>Sensitivity: DE/Share &times; Forward Multiple</h2><span class="sub">LCS Fair Value &middot; FY2027E DE/Share base</span></div>
    <div class="panel-body">
      <table class="sens-table" id="sensTable2" aria-label="Sensitivity DE vs forward multiple">
        <thead><tr><th class="corner">DE/Sh &darr; &nbsp;/ &nbsp;P/DE &rarr;</th><th>18x</th><th>20x</th><th>22x</th><th>24x</th><th>26x</th></tr></thead>
        <tbody></tbody>
      </table>
    </div>
  </div>

  <div class="panel">
    <div class="panel-header"><h2>DCF Cross-Check</h2><span class="sub">5-year explicit + Gordon Growth terminal</span></div>
    <div class="panel-body">
      <table class="grid" id="dcfTable" aria-label="DCF summary">
        <thead><tr><th>$ billions</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th><th>FY30E</th></tr></thead>
        <tbody id="dcfBody"></tbody>
      </table>
      <p class="caption">Free cash flow = DE (asset managers pass through with de minimis capex). Discount at WACC; terminal at perpetuity growth applied to FY30E DE.</p>
    </div>
  </div>

</div>
</div>
</div>

<footer>
<p>Levin Capital Strategies &bull; BX Interactive Model &bull; Last updated April 14, 2026</p>
<p style="margin-top:6px;font-size:10px;opacity:0.6">Sources: BX 10-K FY25, Q4 2025 supplemental data, LCS analysis. For internal use only.</p>
</footer>

<script>
const PRESETS = {
  bull:   {reGrow:1000, peGrow:1800, creditGrow:2200, maGrow:2800, feeRate:73, freMargin:64, frePerfGrow:3000, real:3500, realGrow:4500, pe:260, payout:85, wacc:1000, tg:450},
  base:   {reGrow:600,  peGrow:1200, creditGrow:1500, maGrow:1800, feeRate:69, freMargin:61, frePerfGrow:2000, real:2200, realGrow:2500, pe:220, payout:85, wacc:1100, tg:400},
  street: {reGrow:400,  peGrow:1000, creditGrow:1200, maGrow:1500, feeRate:68, freMargin:60, frePerfGrow:1500, real:2000, realGrow:2000, pe:200, payout:85, wacc:1125, tg:375},
  bear:   {reGrow:100,  peGrow:500,  creditGrow:800,  maGrow:1200, feeRate:65, freMargin:56, frePerfGrow:500,  real:1500, realGrow:0,    pe:160, payout:80, wacc:1250, tg:300},
};

function getState(){
  return {
    reGrow:+document.getElementById('reGrow').value,
    peGrow:+document.getElementById('peGrow').value,
    creditGrow:+document.getElementById('creditGrow').value,
    maGrow:+document.getElementById('maGrow').value,
    feeRate:+document.getElementById('feeRate').value,
    freMargin:+document.getElementById('freMargin').value,
    frePerfGrow:+document.getElementById('frePerfGrow').value,
    real:+document.getElementById('real').value,
    realGrow:+document.getElementById('realGrow').value,
    pe:+document.getElementById('pe').value,
    payout:+document.getElementById('payout').value,
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
const BASE = {
  re:315, pe:348, credit:436, ma:176,    // FY25 AUM by segment ($B)
  mgmtFees:8.0, frePerfRev:1.6,          // FY25 total
  fre:5.7, de:7.1, deSh:5.57,
  netReal:1.4,
  shares25:1275                           // M diluted
};
const PRICE = 110;
const DIV_YIELD = 0.032;

function computeModel(s){
  const reG = s.reGrow/10000;
  const peG = s.peGrow/10000;
  const crG = s.creditGrow/10000;
  const maG = s.maGrow/10000;
  const feeR = s.feeRate/10000;
  const freM = s.freMargin/100;
  const perfG = s.frePerfGrow/10000;
  const realG = s.realGrow/10000;
  const payout = s.payout/100;

  // AUM build (segment growth compounded)
  const aumSeg = {26:{},27:{},28:{}};
  ['re','pe','credit','ma'].forEach(seg=>{
    const g = {re:reG,pe:peG,credit:crG,ma:maG}[seg];
    aumSeg[26][seg] = BASE[seg]*(1+g);
    aumSeg[27][seg] = BASE[seg]*Math.pow(1+g,2);
    aumSeg[28][seg] = BASE[seg]*Math.pow(1+g,3);
  });
  const totalAum = {25: BASE.re+BASE.pe+BASE.credit+BASE.ma};
  [26,27,28].forEach(yr=>{
    totalAum[yr] = aumSeg[yr].re + aumSeg[yr].pe + aumSeg[yr].credit + aumSeg[yr].ma;
  });

  // FEAUM (72% of total)
  const feaum = {25: totalAum[25]*0.72};
  [26,27,28].forEach(yr=>{feaum[yr] = totalAum[yr]*0.72});

  // Fee revenues — use avg FEAUM and blended fee rate
  const avgFeAum = {};
  avgFeAum[26] = (feaum[25]+feaum[26])/2;
  avgFeAum[27] = (feaum[26]+feaum[27])/2;
  avgFeAum[28] = (feaum[27]+feaum[28])/2;

  const model = {25:{},26:{},27:{},28:{}};
  const realBase = s.real/1000;

  model[25].totalAum = totalAum[25];
  model[25].feaum = feaum[25];
  model[25].mgmtFees = BASE.mgmtFees;
  model[25].frePerf = BASE.frePerfRev;
  model[25].feeRev = BASE.mgmtFees + BASE.frePerfRev;
  model[25].fre = BASE.fre;
  model[25].freMargin = BASE.fre/(BASE.mgmtFees+BASE.frePerfRev);
  model[25].netReal = BASE.netReal;
  model[25].de = BASE.de;
  model[25].shares = BASE.shares25;
  model[25].deSh = BASE.deSh;
  model[25].div = model[25].deSh * payout;

  [26,27,28].forEach((yr,i)=>{
    const mgmtFees = avgFeAum[yr] * feeR;
    const frePerf = BASE.frePerfRev * Math.pow(1+perfG, i+1);
    const feeRev = mgmtFees + frePerf;
    const fre = feeRev * freM;
    const netReal = realBase * Math.pow(1+realG, i);
    // DE = FRE + net realizations - small other adjustments (~5% drag for taxes/other)
    const de = (fre + netReal) * 0.95;
    const shares = BASE.shares25 + (i+1)*10;
    const deSh = de * 1000 / shares; // convert $B to $M / shares
    model[yr] = {
      totalAum:totalAum[yr], feaum:feaum[yr], avgFeAum:avgFeAum[yr],
      mgmtFees, frePerf, feeRev, fre, freMargin:fre/feeRev,
      netReal, de, shares, deSh,
      div: deSh*payout
    };
  });

  return {aumSeg, model};
}

function fmt$B(n){ return '$'+n.toFixed(1)+'B'; }
function fmt$M(n){ return '$'+Math.round(n).toLocaleString(); }
function fmtPct(n){ return (n*100).toFixed(0)+'%'; }
function fmtEPS(n){ return '$'+n.toFixed(2); }

function update(){
  const s = getState();
  // slider displays
  document.getElementById('reGrowVal').textContent = (s.reGrow/100).toFixed(0)+'%';
  document.getElementById('peGrowVal').textContent = (s.peGrow/100).toFixed(0)+'%';
  document.getElementById('creditGrowVal').textContent = (s.creditGrow/100).toFixed(0)+'%';
  document.getElementById('maGrowVal').textContent = (s.maGrow/100).toFixed(0)+'%';
  document.getElementById('feeRateVal').textContent = (s.feeRate/100).toFixed(2)+'%';
  document.getElementById('freMarginVal').textContent = s.freMargin+'%';
  document.getElementById('frePerfGrowVal').textContent = (s.frePerfGrow/100).toFixed(0)+'%';
  document.getElementById('realVal').textContent = '$'+(s.real/1000).toFixed(1)+'B';
  document.getElementById('realGrowVal').textContent = (s.realGrow/100).toFixed(0)+'%';
  document.getElementById('peVal').textContent = (s.pe/10).toFixed(0)+'x';
  document.getElementById('payoutVal').textContent = s.payout+'%';
  document.getElementById('waccVal').textContent = (s.wacc/100).toFixed(1)+'%';
  document.getElementById('tgVal').textContent = (s.tg/100).toFixed(1)+'%';

  const {aumSeg, model} = computeModel(s);

  // Val cards
  document.getElementById('de27').textContent = fmtEPS(model[27].deSh);
  document.getElementById('de28').textContent = fmtEPS(model[28].deSh);
  const de27Delta = (model[27].deSh - BASE.deSh)/BASE.deSh;
  const de28Delta = (model[28].deSh - BASE.deSh)/BASE.deSh;
  document.getElementById('de27Growth').textContent = '+'+(de27Delta*100).toFixed(0)+'% vs FY25';
  document.getElementById('de28Growth').textContent = '+'+(de28Delta*100).toFixed(0)+'% vs FY25';

  const targetPe = s.pe/10;
  const pt = model[27].deSh * targetPe;
  const upside = (pt - PRICE)/PRICE;
  const ptEl = document.getElementById('pt');
  ptEl.textContent = '$'+Math.round(pt);
  ptEl.className = 'vv '+(upside>=0.15?'green':(upside<=-0.05?'red':'gold'));
  document.getElementById('ptUpside').textContent = (upside>=0?'+':'')+(upside*100).toFixed(0)+'% upside';

  const div2yr = BASE.deSh*(s.payout/100) + model[26].div;
  const totalRet = (pt + div2yr - PRICE)/PRICE;
  const irr = Math.pow(1+totalRet, 0.5) - 1;
  const irrEl = document.getElementById('irr');
  irrEl.textContent = (irr>=0?'+':'')+(irr*100).toFixed(0)+'%';
  irrEl.className = 'vv '+(irr>=0.20?'green':(irr>=0?'gold':'red'));

  // AUM table
  let aumHTML = '';
  const segs = [
    {lbl:'Real Estate', base:315, k:'re'},
    {lbl:'Private Equity', base:348, k:'pe'},
    {lbl:'Credit &amp; Insurance', base:436, k:'credit'},
    {lbl:'Multi-Asset + Infrastructure', base:176, k:'ma'},
  ];
  segs.forEach(seg=>{
    aumHTML += '<tr><td>'+seg.lbl+'</td><td>'+seg.base+'</td>';
    [26,27,28].forEach(yr=>{aumHTML += '<td>'+Math.round(aumSeg[yr][seg.k])+'</td>'});
    aumHTML += '</tr>';
  });
  aumHTML += '<tr class="total"><td>Total AUM</td><td>1,275</td>';
  [26,27,28].forEach(yr=>{aumHTML += '<td>'+Math.round(model[yr].totalAum).toLocaleString()+'</td>'});
  aumHTML += '</tr>';
  aumHTML += '<tr><td>Fee-earning AUM (~72%)</td><td>922</td>';
  [26,27,28].forEach(yr=>{aumHTML += '<td>'+Math.round(model[yr].feaum).toLocaleString()+'</td>'});
  aumHTML += '</tr>';
  aumHTML += '<tr><td>AUM YoY growth</td><td>+13%</td>';
  [26,27,28].forEach((yr,i)=>{
    const prev = i===0 ? 1275 : model[[26,27][i-1]].totalAum;
    aumHTML += '<td>+'+((model[yr].totalAum-prev)/prev*100).toFixed(0)+'%</td>';
  });
  aumHTML += '</tr>';
  document.getElementById('aumBody').innerHTML = aumHTML;

  // FRE table
  let freHTML = '';
  const rows = [
    {lbl:'Management fees', k:'mgmtFees', fmt:'B'},
    {lbl:'Fee-related performance rev', k:'frePerf', fmt:'B'},
    {lbl:'<strong>Total fee revenues</strong>', k:'feeRev', fmt:'B', sub:true},
    {lbl:'FRE margin', k:'freMargin', fmt:'pct'},
    {lbl:'<strong>Fee-related earnings (FRE)</strong>', k:'fre', fmt:'B', total:true},
    {lbl:'Net realizations', k:'netReal', fmt:'B'},
    {lbl:'<strong>Distributable earnings (DE)</strong>', k:'de', fmt:'B', total:true},
    {lbl:'Diluted shares (M)', k:'shares', fmt:'n'},
    {lbl:'<strong>DE per share</strong>', k:'deSh', fmt:'eps', total:true},
    {lbl:'Dividend per share (payout x)', k:'div', fmt:'eps', green:true},
  ];
  rows.forEach(r=>{
    let cells='';
    [25,26,27,28].forEach(yr=>{
      const v = model[yr][r.k];
      let disp;
      if (r.fmt==='B') disp = v.toFixed(1);
      else if (r.fmt==='pct') disp = (v*100).toFixed(0)+'%';
      else if (r.fmt==='eps') disp = '$'+v.toFixed(2);
      else if (r.fmt==='n') disp = Math.round(v).toLocaleString();
      else disp = v;
      cells += '<td>'+disp+'</td>';
    });
    let cls = '';
    if (r.total) cls='total';
    else if (r.sub) cls='subtotal';
    else if (r.green) cls='green';
    freHTML += '<tr class="'+cls+'"><td>'+r.lbl+'</td>'+cells+'</tr>';
  });
  document.getElementById('freBody').innerHTML = freHTML;

  // Sensitivity 1: AUM growth x FRE margin -> FY27 DE/Sh
  const aumGrows = [8,11,14,17,20];
  const freMargins = [56,59,62,65,68];
  let sens1HTML = '';
  aumGrows.forEach(ag=>{
    let row = '<tr><th>'+ag+'%</th>';
    freMargins.forEach(fm=>{
      const s2 = {...s, reGrow:ag*50, peGrow:ag*80, creditGrow:ag*100, maGrow:ag*120, freMargin:fm};
      const m2 = computeModel(s2);
      const deSh = m2.model[27].deSh;
      let heat = 'heat-3';
      if (deSh<5.5) heat='heat-1';
      else if (deSh<6.3) heat='heat-2';
      else if (deSh<7.2) heat='heat-3';
      else if (deSh<8.0) heat='heat-4';
      else heat='heat-5';
      row += '<td class="'+heat+'">'+fmtEPS(deSh)+'</td>';
    });
    row += '</tr>';
    sens1HTML += row;
  });
  document.querySelector('#sensTable1 tbody').innerHTML = sens1HTML;

  // Sensitivity 2: DE/Sh x P/DE -> Fair Value
  const deShVals = [5.5, 6.2, 6.8, 7.5, 8.2];
  const peMults = [18,20,22,24,26];
  let sens2HTML = '';
  deShVals.forEach(de=>{
    let row = '<tr><th>$'+de.toFixed(2)+'</th>';
    peMults.forEach(pe=>{
      const fv = de*pe;
      const up = (fv-PRICE)/PRICE;
      let heat = 'heat-3';
      if (up<-0.1) heat='heat-1';
      else if (up<0.05) heat='heat-2';
      else if (up<0.20) heat='heat-3';
      else if (up<0.40) heat='heat-4';
      else heat='heat-5';
      const highlight = (Math.abs(de-model[27].deSh)<0.15 && pe===Math.round(s.pe/10)) ? 'highlight' : heat;
      row += '<td class="'+highlight+'">$'+Math.round(fv)+'</td>';
    });
    row += '</tr>';
    sens2HTML += row;
  });
  document.querySelector('#sensTable2 tbody').innerHTML = sens2HTML;

  // DCF table
  let dcfHTML = '';
  const waccR = s.wacc/10000;
  const tgR = s.tg/10000;
  // Extend DE through FY30 with tapering growth
  const de = [model[26].de, model[27].de, model[28].de];
  de.push(de[2]*(1+0.12)); // FY29
  de.push(de[3]*(1+0.10)); // FY30
  const pvs = de.map((v,i)=> v/Math.pow(1+waccR, i+1));
  const tv = de[4]*(1+tgR)/(waccR-tgR);
  const pvTv = tv/Math.pow(1+waccR, 5);
  const ev = pvs.reduce((a,b)=>a+b,0) + pvTv;
  const equity = ev; // minimal net debt for asset managers
  const perSh = equity*1000 / model[27].shares;

  dcfHTML += '<tr><td>DE ($B)</td>';
  de.forEach(v=>{dcfHTML += '<td>'+v.toFixed(1)+'</td>'});
  dcfHTML += '</tr>';
  dcfHTML += '<tr><td>PV @ '+(waccR*100).toFixed(1)+'% WACC</td>';
  pvs.forEach(v=>{dcfHTML += '<td>'+v.toFixed(1)+'</td>'});
  dcfHTML += '</tr>';
  dcfHTML += '<tr class="subtotal"><td>Sum PV (explicit)</td><td colspan="4">&nbsp;</td><td>'+pvs.reduce((a,b)=>a+b,0).toFixed(1)+'</td></tr>';
  dcfHTML += '<tr><td>Terminal value (FY30 &times; '+(tgR*100).toFixed(1)+'% / WACC-g)</td><td colspan="4">&nbsp;</td><td>'+tv.toFixed(0)+'</td></tr>';
  dcfHTML += '<tr class="subtotal"><td>PV of terminal</td><td colspan="4">&nbsp;</td><td>'+pvTv.toFixed(0)+'</td></tr>';
  dcfHTML += '<tr class="total"><td>Enterprise value / Equity</td><td colspan="4">&nbsp;</td><td>'+Math.round(ev).toLocaleString()+'</td></tr>';
  dcfHTML += '<tr class="total"><td>DCF Fair Value per share</td><td colspan="4">&nbsp;</td><td>$'+Math.round(perSh)+'</td></tr>';
  document.getElementById('dcfBody').innerHTML = dcfHTML;
}

// Wire sliders
['reGrow','peGrow','creditGrow','maGrow','feeRate','freMargin','frePerfGrow','real','realGrow','pe','payout','wacc','tg'].forEach(id=>{
  document.getElementById(id).addEventListener('input',()=>{
    document.querySelectorAll('.preset').forEach(b=>b.classList.remove('active'));
    update();
  });
});

document.addEventListener('keydown',(e)=>{
  if(e.target.tagName==='INPUT') return;
  if(e.key==='1') applyPreset('bull');
  else if(e.key==='2') applyPreset('base');
  else if(e.key==='3') applyPreset('street');
  else if(e.key==='4') applyPreset('bear');
  else if(e.key.toLowerCase()==='r') applyPreset('base');
});

function toggleDark(){
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelector('.dark-toggle').innerHTML = isDark?'&#9788;':'&#9790;';
  try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}
}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}

update();
<\/script>
</body>
</html>`;
