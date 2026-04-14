export const bxConsensusHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Blackstone (BX) consensus view: sell-side ratings, price targets, peer comp vs APO/KKR/ARES/OWL, beat-miss history, LCS variant perception.">
<title>BX Consensus | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4B0;</text></svg>">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--navy:#0F1729;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7}
.wrap{max-width:1120px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light)}
nav .wrap{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;gap:16px}
.nav-links a{font-size:12px;color:var(--text-muted);font-weight:500}
.nav-links a.active,.nav-links a:hover{color:var(--heading)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading)}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted)}
.hero{padding:110px 0 30px;border-bottom:1px solid var(--border-light)}
.hero h1{font-size:32px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:8px}
.hero p{color:var(--text-muted)}
.strip{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:24px}
.s{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:16px;text-align:center}
.s .l{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text-muted);font-weight:700;margin-bottom:4px}
.s .v{font-size:22px;font-weight:800;color:var(--heading);font-family:'JetBrains Mono',monospace}
.s .v.gold{color:var(--gold)}.s .v.green{color:var(--green)}
.dist-bar{margin-top:40px}
.dist-bar h3{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:10px}
.dist{display:flex;height:36px;border-radius:6px;overflow:hidden;border:1px solid var(--border)}
.d-seg{display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff}
.d-buy{background:#1A7A3A}.d-olwt{background:#2E8C4A}.d-hold{background:#9CA3AF}.d-und{background:#C47A2B}.d-sell{background:#C0392B}
.section{padding:40px 0}
.section h2{font-size:22px;font-weight:800;color:var(--heading);margin-bottom:16px}
.section p.lead{color:var(--text-muted);margin-bottom:20px}
table.data{width:100%;border-collapse:collapse;font-size:12px;font-family:'JetBrains Mono',monospace}
table.data th{background:var(--navy);color:#fff;padding:10px 8px;text-align:right;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:700;font-family:Inter,sans-serif}
table.data th:first-child{text-align:left}
table.data td{padding:8px;border-bottom:1px solid var(--border-light);text-align:right}
table.data td:first-child{text-align:left;color:var(--heading);font-family:Inter,sans-serif;font-size:12px;font-weight:500}
table.data tr.highlight td{background:var(--gold-soft);font-weight:700}
table.data tr.highlight td:first-child{color:var(--gold)}
.green{color:var(--green)}.red{color:var(--red)}
.caption{font-size:11px;color:var(--text-muted);margin-top:8px;font-style:italic}
.kt-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px}
.kt{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:20px}
.kt h4{font-size:13px;font-weight:700;color:var(--heading);margin-bottom:8px}
.kt p{font-size:13px;color:var(--text);line-height:1.7}
.kt .tag{display:inline-block;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;padding:2px 8px;border-radius:3px;margin-bottom:8px}
.kt .tag.bull{background:rgba(26,122,58,0.1);color:var(--green)}
.kt .tag.bear{background:rgba(192,57,43,0.1);color:var(--red)}
.wrong-box{background:var(--navy);color:#fff;border-radius:12px;padding:32px;margin-top:24px}
.wrong-box h3{font-size:16px;font-weight:800;color:var(--gold);margin-bottom:12px;text-transform:uppercase;letter-spacing:1.5px}
.wrong-box p{color:rgba(255,255,255,0.85);font-size:14px;line-height:1.8;margin-bottom:12px}
.wrong-box strong{color:#fff}
.mgmt-quote{background:var(--surface);border-left:4px solid var(--gold);padding:20px 24px;border-radius:0 8px 8px 0;margin:16px 0}
.mgmt-quote em{display:block;font-size:14px;color:var(--heading);font-style:italic;line-height:1.7;margin-bottom:8px}
.mgmt-quote .attr{font-size:11px;color:var(--text-muted);font-weight:600}
footer{padding:32px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:40px}
footer p{font-size:11px;color:var(--text-muted)}
@media(max-width:800px){.strip{grid-template-columns:repeat(2,1fr)}.kt-grid{grid-template-columns:1fr}table.data{font-size:10px}}
html.dark{--bg:#0F1218;--surface:#1A1E27;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.92);border-bottom-color:var(--border)}
html.dark .s,html.dark .kt,html.dark .mgmt-quote{background:var(--surface);border-color:var(--border)}
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
    <a href="/lcs/bx/model.html">Model</a>
    <a href="/lcs/bx/consensus.html" class="active">Consensus</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>BX</strong> $110</span>
  </div>
</div>
</nav>

<section class="hero">
<div class="wrap">
  <h1>Consensus View &amp; LCS Variant Perception</h1>
  <p>Sell-side ratings, peer comparison, and where LCS diverges from the Street on Blackstone&rsquo;s forward earnings trajectory.</p>
  <div class="strip">
    <div class="s"><div class="l">Rating</div><div class="v" title="17 analysts, Buy consensus [Consensus]">BUY</div></div>
    <div class="s"><div class="l">Mean PT</div><div class="v gold" title="Average 12-month target 17 analysts [Consensus]">$159</div></div>
    <div class="s"><div class="l">High / Low</div><div class="v" title="Highest / lowest PT [Consensus]">$215 / $122</div></div>
    <div class="s"><div class="l">Analysts</div><div class="v">17</div></div>
    <div class="s"><div class="l">LCS PT</div><div class="v green" title="LCS base case blended fair value [Computed]">$150</div></div>
  </div>
  <div class="dist-bar">
    <h3>Rating Distribution</h3>
    <div class="dist">
      <div class="d-seg d-buy" style="flex:18">Strong Buy 18%</div>
      <div class="d-seg d-olwt" style="flex:35">Buy 35%</div>
      <div class="d-seg d-hold" style="flex:47">Hold 47%</div>
    </div>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <h2>Analyst Coverage Detail</h2>
  <p class="lead">Selected covering analysts with current ratings, PTs, and key views on the BX setup.</p>
  <table class="data" aria-label="Analyst coverage detail">
    <thead><tr><th>Firm</th><th>Analyst</th><th>Rating</th><th>PT</th><th>Upside</th><th>Key View</th></tr></thead>
    <tbody>
      <tr><td>Morgan Stanley</td><td>Michael Cyprys</td><td>Overweight</td><td>$165</td><td class="green">+50%</td><td style="text-align:left">Top pick; platform moat unreplicable</td></tr>
      <tr><td>Oppenheimer</td><td>Chris Kotowski</td><td>Outperform</td><td>$155</td><td class="green">+41%</td><td style="text-align:left">Fundamentals not deteriorating; upgrade call</td></tr>
      <tr><td>TD Cowen</td><td>Bill Katz</td><td>Buy</td><td>$172</td><td class="green">+56%</td><td style="text-align:left">Private wealth inflection underappreciated</td></tr>
      <tr><td>BofA</td><td>Craig Siegenthaler</td><td>Buy</td><td>$158</td><td class="green">+44%</td><td style="text-align:left">FRE algorithm accelerating through FY27</td></tr>
      <tr><td>Goldman Sachs</td><td>Alex Blostein</td><td>Buy</td><td>$170</td><td class="green">+55%</td><td style="text-align:left">Realization cycle setup compelling</td></tr>
      <tr><td>JPMorgan</td><td>Kenneth Worthington</td><td>Neutral</td><td>$135</td><td class="green">+23%</td><td style="text-align:left">Prefers pure-play credit; wait for BREIT clarity</td></tr>
      <tr><td>BMO</td><td>Etienne Ricard</td><td>Outperform</td><td>$132</td><td class="green">+20%</td><td style="text-align:left">Perpetual mix warrants premium multiple</td></tr>
      <tr><td>Wells Fargo</td><td>Michael Brown</td><td>Equal Weight</td><td>$128</td><td class="green">+16%</td><td style="text-align:left">Fair value; near-term private credit overhang</td></tr>
      <tr><td>Citi</td><td>Christopher Allen</td><td>Neutral</td><td>$145</td><td class="green">+32%</td><td style="text-align:left">Execution-dependent; prefers Apollo on multiple</td></tr>
      <tr><td>UBS</td><td>Brennan Hawken</td><td>Buy</td><td>$168</td><td class="green">+53%</td><td style="text-align:left">Distribution moat = multi-year tailwind</td></tr>
    </tbody>
  </table>
  <p class="caption">Source: Street research aggregated via FactSet, April 2026. LCS selected 10 of 17 active covering analysts across the rating distribution.</p>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <h2>Alternative Asset Manager Peer Comparison</h2>
  <p class="lead">BX trades at premium to APO/KKR/ARES on a forward DE basis, reflecting diversified fee base, perpetual-capital mix, and distribution scale.</p>
  <table class="data" aria-label="Alternative asset manager peer comp">
    <thead><tr><th>Ticker</th><th>Company</th><th>Price</th><th>Mkt Cap ($B)</th><th>AUM ($B)</th><th>Fwd P/DE</th><th>Credit %FEAUM</th><th>FRE Margin</th><th>Div Yield</th></tr></thead>
    <tbody>
      <tr class="highlight"><td>BX</td><td>Blackstone</td><td>$110</td><td>140</td><td>1,275</td><td>20.0x</td><td>34%</td><td>59%</td><td>3.2%</td></tr>
      <tr><td>APO</td><td>Apollo Global</td><td>$138</td><td>79</td><td>840</td><td>11.7x</td><td>86%</td><td>58%</td><td>2.0%</td></tr>
      <tr><td>KKR</td><td>KKR &amp; Co</td><td>$102</td><td>91</td><td>753</td><td>14.0x</td><td>48%</td><td>54%</td><td>0.8%</td></tr>
      <tr><td>ARES</td><td>Ares Management</td><td>$138</td><td>30</td><td>660</td><td>17.3x</td><td>66%</td><td>42%</td><td>2.8%</td></tr>
      <tr><td>OWL</td><td>Blue Owl Capital</td><td>$17</td><td>25</td><td>290</td><td>15.1x</td><td>78%</td><td>55%</td><td>5.0%</td></tr>
      <tr><td>TPG</td><td>TPG Inc.</td><td>$48</td><td>17</td><td>240</td><td>18.5x</td><td>30%</td><td>45%</td><td>3.5%</td></tr>
      <tr><td colspan="5" style="text-align:right;font-weight:700;color:var(--text-muted)">Peer median (ex-BX)</td><td>15.6x</td><td>57%</td><td>50%</td><td>2.8%</td></tr>
    </tbody>
  </table>
  <p class="caption">Source: FactSet, company filings (FY25). BX trades at 4.4x multiple premium to peer median. Premium is justified by lowest credit concentration, highest FRE margin, and highest perpetual AUM mix. Data as of April 10, 2026.</p>
</div>
</section>

<section class="section">
<div class="wrap">
  <h2>Forward Estimates Detail</h2>
  <table class="data" aria-label="Forward estimates">
    <thead><tr><th>Metric</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
    <tbody>
      <tr><td>Total AUM ($B)</td><td>1,275</td><td>1,445</td><td>1,630</td><td>1,830</td></tr>
      <tr><td>FEAUM ($B)</td><td>922</td><td>1,040</td><td>1,175</td><td>1,320</td></tr>
      <tr><td>Management fees ($B)</td><td>8.0</td><td>8.9</td><td>9.9</td><td>11.0</td></tr>
      <tr><td>FRE ($B)</td><td>5.7</td><td>6.5</td><td>7.5</td><td>8.5</td></tr>
      <tr><td>Net realizations ($B)</td><td>1.4</td><td>2.2</td><td>2.8</td><td>3.2</td></tr>
      <tr><td>DE ($B)</td><td>7.1</td><td>8.1</td><td>9.5</td><td>10.8</td></tr>
      <tr><td>DE/Sh Consensus</td><td>$5.57</td><td>$6.05</td><td>$6.45</td><td>$7.50</td></tr>
      <tr class="highlight"><td>LCS DE/Sh Estimate</td><td>$5.57</td><td>$6.30</td><td>$6.80</td><td>$8.25</td></tr>
      <tr><td>LCS vs Street %</td><td>&mdash;</td><td class="green">+4.1%</td><td class="green">+5.4%</td><td class="green">+10.0%</td></tr>
      <tr><td>Dividend per share</td><td>$3.60</td><td>$5.35</td><td>$5.78</td><td>$7.01</td></tr>
    </tbody>
  </table>
  <p class="caption">LCS estimates reflect base-case model with 11% mgmt fee CAGR, 62% terminal FRE margin by FY28, realization normalization path. Street consensus from FactSet blend (17 analysts).</p>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <h2>Where the Street Is Right, Where It&rsquo;s Wrong</h2>
  <div class="kt-grid">
    <div class="kt">
      <span class="tag bull">Street Gets This Right</span>
      <h4>BX quality deserves premium to peers</h4>
      <p>All major analysts acknowledge BX&rsquo;s diversification advantage, perpetual-capital mix, and distribution scale. The premium multiple is not controversial &mdash; it&rsquo;s the <em>size</em> of the premium that is debated.</p>
    </div>
    <div class="kt">
      <span class="tag bull">Street Gets This Right</span>
      <h4>Private wealth is the key growth engine</h4>
      <p>Near-universal consensus that private wealth is the next leg of compounding. BX has the best product suite and distribution, and the Street has incorporated this into forward estimates. Agreement here is orthodoxy.</p>
    </div>
    <div class="kt">
      <span class="tag bear">LCS Variant Perception</span>
      <h4>FY28 DE trajectory under-modeled</h4>
      <p>Consensus FY28E DE/Sh of $7.50 embeds below-plan FRE margin expansion and conservative realization normalization. We model $8.25 &mdash; 10% above, driven by higher FRE margin (62% vs Street 60%) and faster realization recovery ($3.2B vs ~$2.7B).</p>
    </div>
    <div class="kt">
      <span class="tag bear">LCS Variant Perception</span>
      <h4>Multiple compression risk overstated</h4>
      <p>The Street is reluctant to underwrite above 20x forward DE given private credit uncertainty. We view 22x as defensible given BX&rsquo;s credit underweight and perpetual-capital premium. Every 1x multiple expansion = ~$7/share.</p>
    </div>
  </div>
  <div class="wrong-box">
    <h3>The LCS View &mdash; Where We Diverge</h3>
    <p><strong>Consensus FY28E DE/Sh of $7.50 embeds a conservative ramp on both FRE margin and realizations.</strong> Our base case produces $8.25 &mdash; roughly 10% above consensus &mdash; driven by two specific assumptions: (1) FRE margin reaches 62% by FY28 vs Street ~60%, and (2) net realizations normalize to $3.2B by FY28 vs Street ~$2.7B. Applied against a defensible 22x multiple, this yields $150 &mdash; in between the Street mean ($159) and Street median ($155), but with materially higher conviction in the underlying algorithm.</p>
    <p>Put differently: if we are right on trajectory but wrong on multiple (18x instead of 22x), fair value is still $124. If we are wrong on both and land at consensus DE with 18x, fair value is $135 &mdash; close to current trading levels. This sets up an asymmetric risk/reward where even the downside cases are near-neutral.</p>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <h2>Management Quotes</h2>
  <div class="mgmt-quote">
    <em>&ldquo;We delivered the highest fee-related earnings margin in our history, record management fees, and record inflows of $240 billion. Our perpetual capital platform now represents over 40% of AUM and continues to be a key differentiator.&rdquo;</em>
    <span class="attr">&mdash; Steve Schwarzman, Chairman &amp; CEO &middot; Q4 2025 earnings call, Jan 29, 2026 [Transcript]</span>
  </div>
  <div class="mgmt-quote">
    <em>&ldquo;Private wealth continues to accelerate. Our product suite is broader and deeper than any competitor&rsquo;s, with BREIT stabilized, BCRED at $14B of annual gross sales, and BXPE pioneering perpetual PE for individual investors. The wealth channel is a multi-year tailwind.&rdquo;</em>
    <span class="attr">&mdash; Jon Gray, President &amp; COO &middot; Q4 2025 earnings call, Jan 29, 2026 [Transcript]</span>
  </div>
  <div class="mgmt-quote">
    <em>&ldquo;Our $6.7 billion net accrued performance compensation balance is the largest in our history. Combined with strengthening exit markets, we see significant potential for realization activity over the coming years.&rdquo;</em>
    <span class="attr">&mdash; Michael Chae, CFO &middot; Q4 2025 earnings call, Jan 29, 2026 [Transcript]</span>
  </div>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <h2>Catalyst Calendar</h2>
  <table class="data" aria-label="Catalyst calendar">
    <thead><tr><th>Date</th><th>Event</th><th>Type</th><th>Watch</th></tr></thead>
    <tbody>
      <tr><td>Apr 24, 2026</td><td>Q1 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Private wealth inflows, BREIT trends, realization commentary</td></tr>
      <tr><td>Q2 2026</td><td>Blackstone Investor Day</td><td>Company</td><td style="text-align:left">FRE margin outlook, perpetual capital update</td></tr>
      <tr><td>Jul 2026</td><td>Q2 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Mid-year flows; BCP X fundraise milestones</td></tr>
      <tr><td>2H 2026</td><td>BXINFRA flagship close</td><td>Company</td><td style="text-align:left">Size of close = forward FRE trajectory lift</td></tr>
      <tr><td>Ongoing</td><td>Fed rate path</td><td>Macro</td><td style="text-align:left">Easing accelerates LBO exits; 100bps = ~5% multiple</td></tr>
      <tr><td>2026-2027</td><td>Major realizations</td><td>Performance</td><td style="text-align:left">First $1B+ quarter = clean re-rate</td></tr>
      <tr><td>Ongoing</td><td>Private credit regulation</td><td>Regulatory</td><td style="text-align:left">Any BX-specific disclosure could move peer narrative</td></tr>
    </tbody>
  </table>
</div>
</section>

<footer>
<p>Levin Capital Strategies &bull; BX Consensus View &bull; Last updated April 14, 2026</p>
<p style="margin-top:6px;font-size:10px;opacity:0.6">Sources: FactSet consensus estimates, Street research (MS, Opco, TD Cowen, BofA, GS, JPM, BMO, Wells, Citi, UBS), BX 10-K &amp; supplemental. For internal use only.</p>
</footer>

<script>
function toggleDark(){document.documentElement.classList.toggle('dark');const isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
