export const bxPresentationHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Blackstone (BX) slide deck: FRE algorithm, perpetual capital, private wealth inflection, realization cycle, valuation framework.">
<title>BX Deck | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4B0;</text></svg>">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--gold:#B8973E;--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
body{font-family:'Inter',system-ui,sans-serif;background:#111827;color:var(--text);line-height:1.6;min-height:100vh;overflow:hidden}
.deck{max-width:1100px;margin:0 auto;padding:20px 20px 80px;position:relative}
.nav-bar{position:fixed;top:0;left:0;right:0;padding:14px 32px;background:rgba(17,24,39,0.95);backdrop-filter:blur(16px);display:flex;justify-content:space-between;align-items:center;z-index:100;border-bottom:1px solid rgba(255,255,255,0.08)}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;gap:16px}
.nav-links a{font-size:12px;color:rgba(255,255,255,0.5);font-weight:500}
.nav-links a.active{color:#fff}
.slide-counter{color:rgba(255,255,255,0.6);font-size:12px;font-family:'JetBrains Mono',monospace}
.slide-container{margin-top:70px;position:relative;min-height:600px}
.slide{background:#fff;border-radius:14px;padding:48px 56px;min-height:620px;display:none;box-shadow:0 20px 60px rgba(0,0,0,0.3)}
.slide.active{display:block}
.slide.cover{background:linear-gradient(135deg,#0F1729 0%,#1E3A5F 100%);color:#fff;padding:72px 64px}
.slide .eyebrow{font-size:10px;text-transform:uppercase;letter-spacing:3px;color:var(--gold);font-weight:700;margin-bottom:12px}
.slide h1{font-size:36px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:16px;line-height:1.2}
.slide.cover h1{color:#fff;font-size:42px}
.slide h2{font-size:24px;font-weight:800;color:var(--heading);margin-bottom:20px;letter-spacing:-0.02em}
.slide h3{font-size:14px;font-weight:700;color:var(--steel);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px}
.slide p{font-size:14px;color:var(--text);line-height:1.75;margin-bottom:12px}
.slide.cover p{color:rgba(255,255,255,0.8);font-size:16px}
.slide .src{font-size:10px;color:var(--text-muted);font-style:italic;margin-top:16px;border-top:1px solid var(--border);padding-top:8px}
.cover-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
.cover-stat{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:20px;text-align:center}
.cover-stat .cs-v{font-size:28px;font-weight:800;color:var(--gold);letter-spacing:-0.02em}
.cover-stat .cs-l{font-size:10px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:1.5px;margin-top:6px;font-weight:700}
.badges{display:flex;gap:10px;margin-top:32px;flex-wrap:wrap}
.badge{display:inline-flex;align-items:center;gap:6px;border-radius:6px;padding:8px 16px;font-weight:700;font-size:13px}
.badge.street{background:rgba(184,151,62,0.18);border:1px solid rgba(184,151,62,0.35);color:var(--gold)}
.badge.lcs{background:rgba(74,222,128,0.18);border:1px solid rgba(74,222,128,0.35);color:#4ade80}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.three-col{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.four-col{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.stat-card{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px;text-align:center}
.stat-card .sv{font-size:28px;font-weight:800;color:var(--heading);font-family:'JetBrains Mono',monospace;letter-spacing:-0.02em}
.stat-card .sv.gold{color:var(--gold)}.stat-card .sv.green{color:var(--green)}
.stat-card .sl{font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1.5px;font-weight:700;margin-top:6px}
.stat-card .ss{font-size:11px;color:var(--text-muted);margin-top:4px}
.bullet-list{list-style:none;padding:0}
.bullet-list li{font-size:13px;color:var(--text);line-height:1.7;padding-left:22px;position:relative;margin-bottom:10px}
.bullet-list li::before{content:'';position:absolute;left:6px;top:9px;width:6px;height:6px;background:var(--gold);border-radius:50%}
.bullet-list li strong{color:var(--heading)}
table.slide-tbl{width:100%;border-collapse:collapse;font-size:12px;font-family:'JetBrains Mono',monospace}
table.slide-tbl th{background:var(--navy);color:#fff;padding:10px 8px;text-align:right;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:700;font-family:Inter,sans-serif}
table.slide-tbl th:first-child{text-align:left}
table.slide-tbl td{padding:8px;text-align:right;border-bottom:1px solid var(--border);color:var(--text)}
table.slide-tbl td:first-child{text-align:left;color:var(--heading);font-family:Inter,sans-serif;font-size:12px;font-weight:500}
table.slide-tbl tr.total td{font-weight:800;color:var(--gold);background:rgba(184,151,62,0.08);border-top:2px solid var(--gold)}
.up{color:var(--green)}.down{color:var(--red)}
.nav-arrows{position:fixed;bottom:30px;left:50%;transform:translateX(-50%);display:flex;gap:16px;z-index:50}
.arrow{width:44px;height:44px;border-radius:22px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;transition:all 0.2s}
.arrow:hover{background:var(--gold);border-color:var(--gold)}
.arrow:disabled{opacity:0.3;cursor:not-allowed}
.dots{position:fixed;bottom:30px;right:30px;display:flex;gap:6px;z-index:50}
.dot{width:8px;height:8px;border-radius:4px;background:rgba(255,255,255,0.3);cursor:pointer;transition:all 0.2s}
.dot.active{background:var(--gold);width:24px}
.framework-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px}
.framework-card{background:linear-gradient(135deg,#0F1729 0%,#1E3A5F 100%);color:#fff;border-radius:10px;padding:20px;text-align:center}
.framework-card .fv{font-size:28px;font-weight:800;color:var(--gold);letter-spacing:-0.02em;font-family:'JetBrains Mono',monospace}
.framework-card .fl{font-size:11px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:1.5px;margin-top:6px;font-weight:700}
.framework-card .fs{font-size:11px;color:rgba(255,255,255,0.75);margin-top:6px}
@media(max-width:900px){.slide{padding:32px 24px}.slide h1{font-size:26px}.two-col,.three-col,.four-col,.framework-grid{grid-template-columns:1fr}}
</style>
</head>
<body>

<div class="nav-bar">
  <a href="/lcs/" class="nav-brand">Levin Capital Strategies</a>
  <div class="nav-links">
    <a href="/lcs/bx/">Overview</a>
    <a href="/lcs/bx/memo.html">Memo</a>
    <a href="/lcs/bx/presentation.html" class="active">Deck</a>
    <a href="/lcs/bx/model.html">Model</a>
    <a href="/lcs/bx/consensus.html">Consensus</a>
  </div>
  <span class="slide-counter" id="counter">01 / 14</span>
</div>

<div class="deck">
<div class="slide-container">

<section class="slide cover active">
  <div class="eyebrow">Levin Capital Strategies &middot; Alternative Asset Management</div>
  <h1>Blackstone<br/>The Perpetual-Capital Compounder at a Cyclical Discount</h1>
  <p>$1.28 trillion in AUM, $240B of 2025 inflows, four distinct growth engines. The Street is priced for private-credit contagion; the fundamentals are accelerating.</p>
  <div class="badges">
    <span class="badge street">STREET PT $159 (+45%)</span>
    <span class="badge lcs">LCS PT $150 (+36%) &middot; BUY</span>
  </div>
  <div class="cover-stats">
    <div class="cover-stat"><div class="cs-v">$1.28T</div><div class="cs-l">Total AUM</div></div>
    <div class="cover-stat"><div class="cs-v">$5.7B</div><div class="cs-l">FY25 FRE</div></div>
    <div class="cover-stat"><div class="cs-v">$7.1B</div><div class="cs-l">FY25 DE</div></div>
  </div>
</section>

<section class="slide">
  <div class="eyebrow">Slide 2</div>
  <h2>Company Snapshot</h2>
  <div class="four-col" style="margin-bottom:24px">
    <div class="stat-card"><div class="sv">$1.28T</div><div class="sl">Total AUM</div><div class="ss">+13% YoY</div></div>
    <div class="stat-card"><div class="sv">$922B</div><div class="sl">FEAUM</div><div class="ss">72% of total</div></div>
    <div class="stat-card"><div class="sv gold">$240B</div><div class="sl">FY25 Inflows</div><div class="ss">Record level</div></div>
    <div class="stat-card"><div class="sv green">$6.7B</div><div class="sl">Net Accrued Perf</div><div class="ss">Coiled realization</div></div>
  </div>
  <div class="two-col">
    <div>
      <h3>Platform Profile</h3>
      <ul class="bullet-list">
        <li><strong>World&rsquo;s largest</strong> alternative asset manager by AUM, FRE, and DE</li>
        <li><strong>Four growth engines</strong> — RE, PE, Credit &amp; Insurance, Multi-Asset + Infra</li>
        <li><strong>40%+ perpetual capital</strong> — fee stability unique in alts</li>
        <li><strong>~1,275M diluted shares</strong>; $140B market cap</li>
      </ul>
    </div>
    <div>
      <h3>Leadership</h3>
      <ul class="bullet-list">
        <li><strong>Steve Schwarzman,</strong> Chairman &amp; CEO (co-founder, 40+ years)</li>
        <li><strong>Jon Gray,</strong> President &amp; COO (architect of RE platform)</li>
        <li><strong>Michael Chae,</strong> CFO</li>
        <li><strong>Record FRE margin, record inflows, record AUM &mdash; all in 2025</strong></li>
      </ul>
    </div>
  </div>
  <p class="src">Source: BX 10-K FY25, Q4 2025 earnings release [10-K]</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 3</div>
  <h2>The Four-Engine Model</h2>
  <table class="slide-tbl">
    <thead><tr><th>Segment</th><th>AUM ($B)</th><th>% Total</th><th>Fee Rate</th><th>FY25 Growth</th><th>Key Vehicles</th></tr></thead>
    <tbody>
      <tr><td>Real Estate</td><td>315</td><td>25%</td><td>~85 bps</td><td class="up">+5%</td><td style="text-align:left">BREIT, BREP, BPP</td></tr>
      <tr><td>Private Equity</td><td>348</td><td>27%</td><td>~80 bps</td><td class="up">+9%</td><td style="text-align:left">BCP X, BXG, BXPE</td></tr>
      <tr><td>Credit &amp; Insurance</td><td>436</td><td>34%</td><td>~55 bps</td><td class="up">+18%</td><td style="text-align:left">BCRED, BXSL, CLOs</td></tr>
      <tr><td>Multi-Asset + Infra</td><td>176</td><td>14%</td><td>~75 bps</td><td class="up">+22%</td><td style="text-align:left">BAAM, BXINFRA</td></tr>
      <tr class="total"><td>Total Platform</td><td>1,275</td><td>100%</td><td>~69 bps</td><td class="up">+13%</td><td>&mdash;</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px"><strong>Diversification is the moat.</strong> Each segment alone would rank among the largest in its vertical globally. No single segment &gt;34% of fee-earning AUM. Credit concentration well below Apollo (86%), Ares (66%), Blue Owl (78%).</p>
  <p class="src">Source: BX 10-K FY25, LCS estimates for fee rates [10-K / Computed]</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 4</div>
  <h2>Three Pillars of the BX Setup</h2>
  <div class="three-col">
    <div>
      <h3>01. Perpetual-Capital Flywheel</h3>
      <p><strong>&gt;40% of AUM is perpetual</strong> (BREIT, BCRED, BXSL, BXPE, infrastructure). Perpetual AUM generates recurring fees without fund-cycle timing. Transforms FRE from lumpy to subscription-like; justifies compounder multiple.</p>
    </div>
    <div>
      <h3>02. Private Wealth Inflection</h3>
      <p><strong>$240B 2025 inflows</strong>, ~25% from wealth. BXPE + BXINFRA + credit ladder address $70T+ wealth TAM at only 3% penetration. Every 100bps incremental allocation = ~$700B industry flow; BX captures disproportionate share.</p>
    </div>
    <div>
      <h3>03. Realization Cycle Setup</h3>
      <p><strong>$6.7B net accrued performance</strong> &mdash; largest coiled pool in firm history. LBO exits bottomed in 2024; re-accelerating into 2026. Realizations flow to DE at 85%+ payout. First $1B+ quarter = clean re-rate.</p>
    </div>
  </div>
  <p class="src">Source: BX 10-K FY25, industry data, LCS analysis [10-K / Computed]</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 5</div>
  <h2>FRE &amp; Distributable Earnings Trajectory</h2>
  <table class="slide-tbl">
    <thead><tr><th>$ billions</th><th>FY24A</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
    <tbody>
      <tr><td>Management fees</td><td>7.1</td><td>8.0</td><td>8.9</td><td>9.9</td><td>11.0</td></tr>
      <tr><td>Fee-related performance rev</td><td>1.4</td><td>1.6</td><td>1.9</td><td>2.3</td><td>2.6</td></tr>
      <tr><td>Total fee revenues</td><td>8.5</td><td>9.6</td><td>10.8</td><td>12.2</td><td>13.6</td></tr>
      <tr class="total"><td>Fee-related earnings (FRE)</td><td>5.2</td><td>5.7</td><td>6.5</td><td>7.5</td><td>8.5</td></tr>
      <tr><td>FRE margin</td><td>61%</td><td>59%</td><td>60%</td><td>61%</td><td>62%</td></tr>
      <tr><td>Net realizations</td><td>0.7</td><td>1.4</td><td>2.2</td><td>2.8</td><td>3.2</td></tr>
      <tr class="total"><td>Distributable earnings (DE)</td><td>5.9</td><td>7.1</td><td>8.1</td><td>9.5</td><td>10.8</td></tr>
      <tr class="total"><td>DE per share</td><td>$4.65</td><td>$5.57</td><td>$6.30</td><td>$6.80</td><td>$8.25</td></tr>
      <tr><td>DE/Sh YoY</td><td>&mdash;</td><td class="up">+20%</td><td class="up">+13%</td><td class="up">+8%</td><td class="up">+21%</td></tr>
    </tbody>
  </table>
  <p class="src">Source: BX 10-K FY25, LCS base case assumptions. Interactive model available for sensitivity analysis.</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 6</div>
  <h2>Private Wealth: The Next Leg</h2>
  <div class="two-col">
    <div>
      <h3>Market Opportunity</h3>
      <ul class="bullet-list">
        <li><strong>$70T+</strong> global private wealth TAM</li>
        <li><strong>~3% penetration</strong> today; <strong>8-10% trajectory</strong> over a decade</li>
        <li><strong>$7T incremental flow</strong> opportunity</li>
        <li>BX positioned for <strong>25-30% share</strong> of flows</li>
      </ul>
    </div>
    <div>
      <h3>BX Product Suite</h3>
      <ul class="bullet-list">
        <li><strong>BREIT</strong> &mdash; Post-redemption, accepting inflows again</li>
        <li><strong>BCRED</strong> &mdash; $14B FY25 gross sales; private credit leader</li>
        <li><strong>BXSL</strong> &mdash; Highest-quality public BDC</li>
        <li><strong>BXPE</strong> &mdash; First perpetual PE for wealth (launched 2024)</li>
        <li><strong>BXINFRA</strong> &mdash; Fastest-growing BX vehicle ever</li>
      </ul>
    </div>
  </div>
  <p style="margin-top:24px;font-size:13px">Every $100B captured = ~$420M of incremental FRE at current margins. Our base case assumes ~$200B of cumulative private wealth inflows through FY28.</p>
  <p class="src">Source: Industry consulting estimates, BX IR materials [IR / Computed]</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 7</div>
  <h2>Realization Cycle Setup</h2>
  <table class="slide-tbl">
    <thead><tr><th>$ billions</th><th>FY22</th><th>FY23</th><th>FY24</th><th>FY25</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
    <tbody>
      <tr><td>Net realizations</td><td>4.7</td><td>1.6</td><td>0.8</td><td>1.4</td><td>2.2</td><td>2.8</td><td>3.2</td></tr>
      <tr><td>YoY growth</td><td>&mdash;</td><td class="down">-66%</td><td class="down">-50%</td><td class="up">+83%</td><td class="up">+57%</td><td class="up">+27%</td><td class="up">+14%</td></tr>
      <tr class="total"><td>Net accrued performance ($B EOP)</td><td>5.8</td><td>6.2</td><td>6.9</td><td>6.7</td><td>7.0</td><td>7.5</td><td>8.2</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px"><strong>The coiled spring.</strong> Realizations bottomed in FY24 at $0.8B &mdash; well below mid-cycle pace. $6.7B accrued pool represents ~3 years of normalized realization activity. LBO exit window reopening in 2026 as financing spreads tighten and strategic M&amp;A reactivates. Our ramp is a <em>normalization</em> path, not a cycle-peak assumption &mdash; pre-pandemic mid-cycle was $3.5-4B.</p>
  <p class="src">Source: BX 10-K FY25, quarterly supplementals; LCS forward estimates [10-K / Estimated]</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 8</div>
  <h2>Peer Comparison: Why BX Commands a Premium</h2>
  <table class="slide-tbl">
    <thead><tr><th>Ticker</th><th>AUM ($B)</th><th>Fwd P/DE</th><th>Credit %FEAUM</th><th>FRE Margin</th><th>Perpetual AUM</th><th>Div Yield</th></tr></thead>
    <tbody>
      <tr class="total"><td>BX</td><td>1,275</td><td>20.0x</td><td>34%</td><td>59%</td><td>&gt;40%</td><td>3.2%</td></tr>
      <tr><td>APO</td><td>840</td><td>11.7x</td><td>86%</td><td>58%</td><td>&lt;20%</td><td>2.0%</td></tr>
      <tr><td>KKR</td><td>753</td><td>14.0x</td><td>48%</td><td>54%</td><td>~25%</td><td>0.8%</td></tr>
      <tr><td>ARES</td><td>660</td><td>17.3x</td><td>66%</td><td>42%</td><td>~35%</td><td>2.8%</td></tr>
      <tr><td>OWL</td><td>290</td><td>15.1x</td><td>78%</td><td>55%</td><td>~80%</td><td>5.0%</td></tr>
      <tr><td>TPG</td><td>240</td><td>18.5x</td><td>30%</td><td>45%</td><td>~10%</td><td>3.5%</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px">BX premium to peer median (15.6x) is justified by lowest credit concentration, highest FRE margin, highest perpetual mix, and best-in-class distribution scale. The premium is deserved &mdash; and sustainable.</p>
  <p class="src">Source: FactSet, company filings FY25</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 9</div>
  <h2>LCS Valuation Framework: $150 PT</h2>
  <div class="framework-grid">
    <div class="framework-card">
      <div class="fv">$150</div>
      <div class="fl">Forward P/DE</div>
      <div class="fs">22x on FY27E DE/Sh $6.80</div>
    </div>
    <div class="framework-card">
      <div class="fv">$145</div>
      <div class="fl">DCF</div>
      <div class="fs">11% WACC, 4% terminal growth</div>
    </div>
    <div class="framework-card">
      <div class="fv">$165</div>
      <div class="fl">Dividend Discount</div>
      <div class="fs">FY27E div $5.78, 3.5% term yield</div>
    </div>
  </div>
  <p style="margin-top:28px;font-size:14px"><strong>Blended LCS fair value: ~$150.</strong> Anchors on forward DE multiple (primary), with DCF and DDM as cross-checks. Historical trading range 18-28x DE; 22x is roughly midpoint. The premium vs peers is deserved and durable.</p>
  <p style="font-size:12px;color:var(--text-muted);margin-top:16px"><strong>Bull case:</strong> $180 (25x on $7.20). <strong>Bear case:</strong> $104 (18x on $5.80). Even bear case is near current trading &mdash; downside largely bounded.</p>
  <p class="src">Source: LCS interactive model; peer set APO/KKR/ARES/OWL/TPG</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 10</div>
  <h2>LCS Variant Perception vs Street</h2>
  <table class="slide-tbl">
    <thead><tr><th>Assumption</th><th>Street</th><th>LCS Base Case</th><th>Delta</th></tr></thead>
    <tbody>
      <tr><td>FY27E FRE margin</td><td>60%</td><td>61%</td><td class="up">+100bps</td></tr>
      <tr><td>FY28E FRE margin</td><td>~60%</td><td>62%</td><td class="up">+200bps</td></tr>
      <tr><td>FY28E Net Realizations</td><td>$2.7B</td><td>$3.2B</td><td class="up">+$0.5B</td></tr>
      <tr><td>Private wealth inflow pace</td><td>Moderate</td><td>Accelerating</td><td class="up">Upside bias</td></tr>
      <tr><td>Forward P/DE multiple</td><td>20x</td><td>22x</td><td class="up">+2x</td></tr>
      <tr><td>FY27E DE/Sh</td><td>$6.45</td><td>$6.80</td><td class="up">+5.4%</td></tr>
      <tr><td>FY28E DE/Sh</td><td>$7.50</td><td>$8.25</td><td class="up">+10.0%</td></tr>
      <tr class="total"><td>Price Target</td><td>$159</td><td>$150</td><td class="down">-5.7%</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px">LCS PT is <em>below</em> Street mean despite <em>above</em>-consensus earnings &mdash; because we apply a more disciplined multiple. This reflects appropriate caution given private credit sector overhang and implies higher-conviction downside protection than consensus PT with bear-case multiple.</p>
  <p class="src">Source: FactSet consensus blend (17 analysts); LCS base case</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 11</div>
  <h2>Risk Assessment</h2>
  <table class="slide-tbl">
    <thead><tr><th>Risk</th><th>Impact</th><th>Probability</th><th>Mitigant</th></tr></thead>
    <tbody>
      <tr><td>Private credit deterioration</td><td>Medium</td><td>Medium</td><td style="text-align:left">BX credit 34% vs peers 65%+; senior-secured focus</td></tr>
      <tr><td>BREIT redemption reaccel</td><td>Medium</td><td>Low</td><td style="text-align:left">Post-stabilization; gates proven; positive performance</td></tr>
      <tr><td>Realization delay</td><td>High</td><td>Low</td><td style="text-align:left">$6.7B accrued buffers timing; structural exit normalization</td></tr>
      <tr><td>Regulatory headwinds</td><td>Low-Med</td><td>Medium</td><td style="text-align:left">Industry-wide; BX compliance infrastructure strongest in class</td></tr>
      <tr><td>Deep recession</td><td>High</td><td>Low</td><td style="text-align:left">40%+ perpetual AUM provides insulation; historical share-gain in downturns</td></tr>
      <tr><td>Key-person succession</td><td>Medium</td><td>Low</td><td style="text-align:left">Schwarzman 78; Gray (55) succession clearly groomed</td></tr>
    </tbody>
  </table>
  <p class="src">Source: LCS risk framework from memo Section 9</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 12</div>
  <h2>Catalyst Calendar</h2>
  <table class="slide-tbl">
    <thead><tr><th>Date</th><th>Event</th><th>Type</th><th>Expected Impact</th></tr></thead>
    <tbody>
      <tr><td>Apr 24, 2026</td><td>Q1 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Private wealth flows; BREIT trend; realization commentary</td></tr>
      <tr><td>Q2 2026</td><td>Blackstone Investor Day</td><td>Company</td><td style="text-align:left">FRE margin outlook; perpetual capital update</td></tr>
      <tr><td>Jul 2026</td><td>Q2 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Mid-year flows; BCP X fundraise</td></tr>
      <tr><td>2H 2026</td><td>BXINFRA flagship close</td><td>Company</td><td style="text-align:left">Size = forward FRE trajectory lift</td></tr>
      <tr><td>Ongoing</td><td>Fed rate path</td><td>Macro</td><td style="text-align:left">100bps lower = ~5% multiple expansion</td></tr>
      <tr><td>2026-2027</td><td>Major realizations</td><td>Performance</td><td style="text-align:left">First $1B+ quarter = clean re-rate</td></tr>
    </tbody>
  </table>
</section>

<section class="slide">
  <div class="eyebrow">Slide 13</div>
  <h2>Total Return Bridge to $150 PT</h2>
  <div class="three-col" style="margin-bottom:24px">
    <div class="stat-card"><div class="sv gold">+36%</div><div class="sl">Price Upside</div><div class="ss">$110 → $150</div></div>
    <div class="stat-card"><div class="sv green">+3.2%</div><div class="sl">Dividend Yield</div><div class="ss">Annual cash return</div></div>
    <div class="stat-card"><div class="sv green">~40%</div><div class="sl">Total Return</div><div class="ss">12-month target</div></div>
  </div>
  <div class="two-col">
    <div>
      <h3>Components of Upside</h3>
      <ul class="bullet-list">
        <li><strong>DE growth:</strong> $5.57 → $6.80 = +$14 of PT at 22x</li>
        <li><strong>Multiple expansion:</strong> 20x → 22x = +$14 on FY27 DE</li>
        <li><strong>Dividend flow:</strong> $3.50/yr growing through FY27</li>
      </ul>
    </div>
    <div>
      <h3>Downside Scenarios</h3>
      <ul class="bullet-list">
        <li><strong>Bear case $104:</strong> LCS DE -15%, 18x multiple &mdash; near flat to current</li>
        <li><strong>Bull case $180:</strong> LCS DE +6% beat, 25x &mdash; 65%+ upside</li>
        <li><strong>Expected value:</strong> Asymmetric 3:1 upside skew</li>
      </ul>
    </div>
  </div>
  <p class="src">Source: LCS base / bull / bear cases from interactive model</p>
</section>

<section class="slide">
  <div class="eyebrow">Slide 14</div>
  <h2>Recommendation: BUY, $150 PT</h2>
  <div class="framework-grid" style="margin-bottom:24px">
    <div class="framework-card"><div class="fv">BUY</div><div class="fl">LCS Rating</div><div class="fs">Variant view on DE trajectory</div></div>
    <div class="framework-card"><div class="fv">$150</div><div class="fl">LCS Price Target</div><div class="fs">+36% upside (~$110 close)</div></div>
    <div class="framework-card"><div class="fv">~40%</div><div class="fl">Total Return</div><div class="fs">Price + dividend, 12-mo</div></div>
  </div>
  <div class="two-col">
    <div>
      <h3>Why Buy Now</h3>
      <ul class="bullet-list">
        <li><strong>Sector-wide selloff</strong> creates 12% YTD dislocation at highest-quality name</li>
        <li><strong>Private credit concerns</strong> underweight BX&rsquo;s 34% exposure vs peers</li>
        <li><strong>Perpetual capital</strong> premium increasingly structural</li>
        <li><strong>FY28 DE 10% above consensus</strong> at achievable assumptions</li>
        <li><strong>Multiple downside limits</strong> &mdash; even bear case is near-current</li>
      </ul>
    </div>
    <div>
      <h3>What We&rsquo;re Watching</h3>
      <ul class="bullet-list">
        <li><strong>Q1 2026 print:</strong> BREIT flows, FRE margin, realization color</li>
        <li><strong>Investor Day:</strong> FY28+ trajectory; perpetual AUM update</li>
        <li><strong>Major realization quarters:</strong> First $1B+ quarter catalytic</li>
        <li><strong>Fed path:</strong> Rate cuts accelerate exit window</li>
        <li><strong>Private credit comps:</strong> Peer non-accrual trends</li>
      </ul>
    </div>
  </div>
  <p class="src">Source: LCS interactive model; 2-year annualized IRR ~21% base case</p>
</section>

</div>
</div>

<div class="nav-arrows">
  <button class="arrow" id="prev" aria-label="Previous slide" onclick="nav(-1)">&#9664;</button>
  <button class="arrow" id="next" aria-label="Next slide" onclick="nav(1)">&#9654;</button>
</div>
<div class="dots" id="dots" role="tablist" aria-label="Slide navigation"></div>

<script>
const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('counter');
const dotsBox = document.getElementById('dots');
let cur = 0;
slides.forEach((_,i)=>{
  const d = document.createElement('button');
  d.className = 'dot' + (i===0?' active':'');
  d.setAttribute('role','tab');
  d.setAttribute('aria-label','Slide '+(i+1));
  d.setAttribute('aria-selected', i===0?'true':'false');
  d.onclick = ()=>goto(i);
  dotsBox.appendChild(d);
});
function goto(i){
  if(i<0||i>=slides.length) return;
  slides[cur].classList.remove('active');
  document.querySelectorAll('.dot')[cur].classList.remove('active');
  document.querySelectorAll('.dot')[cur].setAttribute('aria-selected','false');
  cur = i;
  slides[cur].classList.add('active');
  document.querySelectorAll('.dot')[cur].classList.add('active');
  document.querySelectorAll('.dot')[cur].setAttribute('aria-selected','true');
  counter.textContent = String(cur+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');
  document.getElementById('prev').disabled = cur===0;
  document.getElementById('next').disabled = cur===slides.length-1;
}
function nav(d){ goto(cur+d); }
document.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowRight') nav(1);
  else if(e.key==='ArrowLeft') nav(-1);
});
goto(0);
<\/script>
</body>
</html>`;
