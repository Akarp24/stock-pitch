export const kmbConsensusHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="KMB + KVUE consensus view: sell-side ratings, price targets, peer comp vs PG/CL/CHD, beat-miss history, LCS variant perception.">
<title>KMB Consensus | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4C8;</text></svg>">
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
.s .v{font-size:22px;font-weight:800;color:var(--heading);font-family:'JetBrains Mono',monospace;cursor:help}
.s .v.gold{color:var(--gold)}.s .v.green{color:var(--green)}

.dist-bar{margin-top:40px}
.dist-bar h3{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:10px}
.dist{display:flex;height:36px;border-radius:6px;overflow:hidden;border:1px solid var(--border)}
.d-seg{display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff}
.d-buy{background:#1A7A3A}.d-olwt{background:#2E8C4A}.d-hold{background:#9CA3AF}.d-und{background:#C47A2B}.d-sell{background:#C0392B}

.section{padding:40px 0}
.section h2{font-size:22px;font-weight:800;color:var(--heading);margin-bottom:16px;letter-spacing:-0.01em}
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
    <a href="/lcs/kmb/">Overview</a>
    <a href="/lcs/kmb/memo.html">Memo</a>
    <a href="/lcs/kmb/presentation.html">Deck</a>
    <a href="/lcs/kmb/model.html">Model</a>
    <a href="/lcs/kmb/consensus.html" class="active">Consensus</a>
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
  <h1>Consensus View &amp; LCS Variant Perception</h1>
  <p>Sell-side ratings, price targets, peer comparison, and where LCS diverges from the Street on the KMB/KVUE setup.</p>
  <div class="strip">
    <div class="s"><div class="l">Rating</div><div class="v" title="14 analysts, Hold consensus as of Apr 9, 2026 [Consensus]">HOLD</div></div>
    <div class="s"><div class="l">Mean PT</div><div class="v gold" title="Average 12-month target from 13 covering analysts [Consensus]">$113.69</div></div>
    <div class="s"><div class="l">High / Low</div><div class="v" title="Highest vs lowest price target [Consensus]">$142 / $90</div></div>
    <div class="s"><div class="l">Analysts</div><div class="v" title="Active covering analysts [Consensus]">14</div></div>
    <div class="s"><div class="l">LCS PT</div><div class="v green" title="LCS base case, blended DCF/multiple [Computed]">$128</div></div>
  </div>

  <div class="dist-bar">
    <h3>Rating Distribution</h3>
    <div class="dist">
      <div class="d-seg d-buy" style="flex:7">Strong Buy 7%</div>
      <div class="d-seg d-olwt" style="flex:14">Buy 14%</div>
      <div class="d-seg d-hold" style="flex:71">Hold 71%</div>
      <div class="d-seg d-sell" style="flex:7">Sell 7%</div>
    </div>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <h2>Analyst Coverage Detail</h2>
  <p class="lead">Selected covering analysts, ratings, PTs, and key thesis points on the Kenvue merger.</p>
  <table class="data" aria-label="Analyst coverage detail">
    <thead><tr><th>Firm</th><th>Analyst</th><th>Rating</th><th>PT</th><th>Upside</th><th>Key View on Deal</th></tr></thead>
    <tbody>
      <tr><td>Barclays</td><td>Lauren Lieberman</td><td>Overweight</td><td>$142</td><td class="green">+47%</td><td style="text-align:left">Bull case on synergy realization; sees ~$10 FY28E EPS</td></tr>
      <tr><td>JPMorgan</td><td>Andrea Teixeira</td><td>Neutral</td><td>$108</td><td class="green">+12%</td><td style="text-align:left">Wait for close; Tylenol overhang caps multiple</td></tr>
      <tr><td>Morgan Stanley</td><td>Dara Mohsenian</td><td>Overweight</td><td>$125</td><td class="green">+29%</td><td style="text-align:left">Synergies credible; views dis-synergy risk as overstated</td></tr>
      <tr><td>Goldman Sachs</td><td>Bonnie Herzog</td><td>Neutral</td><td>$115</td><td class="green">+19%</td><td style="text-align:left">Fair risk/reward; needs proof of integration traction</td></tr>
      <tr><td>Jefferies</td><td>Kaumil Gajrawala</td><td>Buy</td><td>$130</td><td class="green">+35%</td><td style="text-align:left">Above-consensus on FY28E; undervalued vs staples</td></tr>
      <tr><td>Evercore ISI</td><td>Robert Ottenstein</td><td>In-Line</td><td>$110</td><td class="green">+14%</td><td style="text-align:left">Integration risk biggest concern; prefers other staples</td></tr>
      <tr><td>Wells Fargo</td><td>Chris Carey</td><td>Equal Weight</td><td>$105</td><td class="green">+9%</td><td style="text-align:left">Fair value; lacks near-term catalyst</td></tr>
      <tr><td>Citi</td><td>Filippo Falorni</td><td>Neutral</td><td>$112</td><td class="green">+16%</td><td style="text-align:left">Synergies back-end loaded; valuation fair</td></tr>
      <tr><td>RBC</td><td>Nik Modi</td><td>Sector Perform</td><td>$108</td><td class="green">+12%</td><td style="text-align:left">Execution-dependent; prefers KVUE standalone historically</td></tr>
      <tr><td>Bernstein</td><td>Callum Elliott</td><td>Underperform</td><td>$90</td><td class="red">-7%</td><td style="text-align:left">Bear view: dis-synergies material, leverage too high</td></tr>
    </tbody>
  </table>
  <p class="caption">Source: Street research aggregated via FactSet, April 2026. LCS selected 10 of 14 active covering analysts across the rating distribution.</p>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <h2>Consumer Staples Peer Comparison</h2>
  <p class="lead">Valuation discount to peers is the core setup. Post-close, LCS expects ~50% of the gap to close as combined-entity earnings power becomes visible.</p>
  <table class="data" aria-label="Peer comparison valuation">
    <thead><tr><th>Ticker</th><th>Company</th><th>Price</th><th>Mkt Cap ($B)</th><th>FY25A Rev ($B)</th><th>Fwd P/E</th><th>EV/EBITDA</th><th>Div Yield</th><th>Organic Growth</th></tr></thead>
    <tbody>
      <tr class="highlight"><td>KMB</td><td>Kimberly-Clark</td><td>$96.59</td><td>32.3</td><td>16.4</td><td>13.0x</td><td>10.5x</td><td>5.1%</td><td class="red">(2.1%)</td></tr>
      <tr><td>KMB PF</td><td>Combined (LCS Est)</td><td>&mdash;</td><td>59.3</td><td>32.0</td><td>11.9x</td><td>9.8x</td><td>3.8%</td><td class="green">+2.5%</td></tr>
      <tr><td>PG</td><td>Procter &amp; Gamble</td><td>$158.20</td><td>370</td><td>86.1</td><td>23.1x</td><td>17.2x</td><td>2.6%</td><td class="green">+3.5%</td></tr>
      <tr><td>CL</td><td>Colgate-Palmolive</td><td>$91.80</td><td>75</td><td>20.3</td><td>23.7x</td><td>17.9x</td><td>2.3%</td><td class="green">+5.2%</td></tr>
      <tr><td>CHD</td><td>Church &amp; Dwight</td><td>$101.40</td><td>24.8</td><td>6.1</td><td>27.8x</td><td>19.4x</td><td>1.2%</td><td class="green">+4.1%</td></tr>
      <tr><td>UL</td><td>Unilever plc</td><td>$61.30</td><td>152</td><td>62.4</td><td>18.8x</td><td>13.5x</td><td>3.1%</td><td class="green">+4.0%</td></tr>
      <tr><td>KVUE</td><td>Kenvue (target)</td><td>$18.72</td><td>35.8</td><td>15.1</td><td>18.1x</td><td>13.2x</td><td>4.4%</td><td class="green">+1.8%</td></tr>
      <tr><td colspan="5" style="text-align:right;font-weight:700;color:var(--text-muted)">Peer median (ex-KMB)</td><td>20.9x</td><td>15.7x</td><td>2.6%</td><td class="green">+3.9%</td></tr>
    </tbody>
  </table>
  <p class="caption">Source: FactSet, company filings. KMB Pro Forma LCS estimate uses $10.85 FY29E EPS and $9.78B FY29E EBITDA. Growth = FY25 organic sales growth. Dividend yield as of April 10, 2026.</p>
</div>
</section>

<section class="section">
<div class="wrap">
  <h2>Pro-Forma Earnings Estimates</h2>
  <table class="data" aria-label="Pro-forma earnings estimate detail">
    <thead><tr><th>Metric</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
    <tbody>
      <tr><td>Combined revenue ($B)</td><td>16.4</td><td>24.1</td><td>32.2</td><td>32.9</td><td>33.6</td></tr>
      <tr><td>Organic growth %</td><td class="red">(2.1%)</td><td>+2.0%</td><td>+2.0%</td><td>+2.3%</td><td>+2.3%</td></tr>
      <tr><td>Adj EBITDA ($B)</td><td>3.8</td><td>5.7</td><td>8.6</td><td>9.3</td><td>9.8</td></tr>
      <tr><td>EBITDA margin %</td><td>23.1%</td><td>23.8%</td><td>26.9%</td><td>28.4%</td><td>29.1%</td></tr>
      <tr><td>Adj EPS (Consensus FY25-29)</td><td>$7.53</td><td>$7.05</td><td>$7.85</td><td>$8.95</td><td>$9.50</td></tr>
      <tr class="highlight"><td>LCS Adj EPS Estimate</td><td>$7.53</td><td>$7.09</td><td>$8.88</td><td>$10.02</td><td>$10.85</td></tr>
      <tr><td>LCS vs Street %</td><td>&mdash;</td><td class="green">+0.6%</td><td class="green">+13.1%</td><td class="green">+12.0%</td><td class="green">+14.2%</td></tr>
      <tr><td>Implied FCF ($B)</td><td>2.8</td><td>2.9</td><td>4.6</td><td>5.7</td><td>6.4</td></tr>
      <tr><td>FCF yield %</td><td>8.7%</td><td>4.9%</td><td>7.7%</td><td>9.6%</td><td>10.8%</td></tr>
    </tbody>
  </table>
  <p class="caption">LCS estimates reflect base-case model: 80% synergy capture, 5.5% new-debt cost, 23% tax rate, 2% standalone growth both sides. Street consensus from FactSet blend (14 analysts).</p>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <h2>Where the Street Is Right, Where It&rsquo;s Wrong</h2>
  <div class="kt-grid">
    <div class="kt">
      <span class="tag bull">Street Gets This Right</span>
      <h4>Strategic logic is sound</h4>
      <p>Nearly all analysts concede the <strong>strategic rationale</strong> &mdash; Kimberly-Clark needed to pivot toward faster-growing health categories, and Kenvue&rsquo;s brand portfolio is scarce and high-quality. Deal premium at 46% to 30-day VWAP is in-line with large-cap CPG norms.</p>
    </div>
    <div class="kt">
      <span class="tag bull">Street Gets This Right</span>
      <h4>Integration risk is real</h4>
      <p>Two global manufacturing networks, different ERP stacks, distinct sales force cultures. Near-term execution risk warrants valuation discount. We agree &mdash; our haircut to fair value reflects this.</p>
    </div>
    <div class="kt">
      <span class="tag bear">LCS Variant Perception</span>
      <h4>Synergy conviction is too low</h4>
      <p>Median analyst models <strong>~60% synergy capture</strong> implicitly. We underwrite 80% based on direct CPG precedent (P&amp;G/Gillette, Unilever beauty rollup). Every 10pts of incremental capture = ~$0.20 FY28E EPS, or ~$3 of fair value at 17x.</p>
    </div>
    <div class="kt">
      <span class="tag bear">LCS Variant Perception</span>
      <h4>Tylenol overhang is priced ~10x reality</h4>
      <p>Sell-side models treat Tylenol exposure as an existential tail. Our analysis suggests <strong>~$3.25/share downside even in a $2B settlement scenario</strong> &mdash; well under the ~$15/share discount currently implied by the multiple gap.</p>
    </div>
  </div>

  <div class="wrong-box">
    <h3>The LCS View &mdash; Where We Diverge</h3>
    <p><strong>Consensus FY29E Adj EPS of $9.50 embeds ~65% synergy realization, ~100bps of annual dis-synergies, and ~6% cost of new debt.</strong> Our base case (80% capture, 100bps dis-synergies in Year 1 only, 5.5% debt cost) produces $10.85 &mdash; roughly <strong>14% above consensus</strong>. Combined with a multiple re-rating from 13x toward 17x (vs peer median 21x), the setup warrants a <strong>$128 PT and BUY rating</strong>.</p>
    <p>The asymmetry matters: even if we are wrong on synergies (50% capture instead of 80%), pro-forma FY27E EPS is still $7.60 &mdash; roughly neutral vs the standalone path. Downside is largely bounded by KMB&rsquo;s consumer-staples floor multiple (~12x).</p>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <h2>Management Quotes</h2>

  <div class="mgmt-quote">
    <em>&ldquo;We expect to achieve approximately $1.9 billion in cost synergies and $500 million in incremental profit from revenue synergies, partially offset by approximately $300 million of reinvestment. We are confident this combination will deliver significant value to shareholders of both companies over the next four years and beyond.&rdquo;</em>
    <span class="attr">&mdash; Mike Hsu, CEO, Kimberly-Clark &middot; Deal announcement call, Nov 3, 2025 [Transcript]</span>
  </div>

  <div class="mgmt-quote">
    <em>&ldquo;Our FY2026 plan reflects a return to organic sales growth in line with our long-term algorithm. Combined with the Kenvue transaction, we expect to deliver meaningful EPS accretion beginning in the first full year of ownership, with synergy benefits compounding materially in years two and three.&rdquo;</em>
    <span class="attr">&mdash; Nelson Urdaneta, CFO, Kimberly-Clark &middot; Q4 2025 earnings call, Jan 28, 2026 [Transcript]</span>
  </div>

  <div class="mgmt-quote">
    <em>&ldquo;Self Care delivered 2.1% growth in the fourth quarter driven by Tylenol and Zyrtec. Essential Health grew 6.1% on broad-based strength across our Band-Aid and Listerine franchises. We continue to believe our portfolio positions us to accelerate growth post-close.&rdquo;</em>
    <span class="attr">&mdash; Paul Ruh, CFO, Kenvue &middot; Q4 2025 earnings release, Feb 6, 2026 [IR]</span>
  </div>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <h2>Catalyst Calendar</h2>
  <table class="data" aria-label="Catalyst calendar">
    <thead><tr><th>Date</th><th>Event</th><th>Category</th><th>Watch</th></tr></thead>
    <tbody>
      <tr><td>Apr 22, 2026</td><td>Q1 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Standalone KMB organic growth recovery; integration prep update</td></tr>
      <tr><td>Q2 2026</td><td>FTC second-request clearance</td><td>Regulatory</td><td style="text-align:left">Final hurdle to close; de-risking event</td></tr>
      <tr><td>Jul 2026</td><td>Q2 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Expected first commentary on updated close timing</td></tr>
      <tr><td>2H 2026</td><td>Deal Close</td><td>Transaction</td><td style="text-align:left">Integration framework, Day-1 organizational design</td></tr>
      <tr><td>Oct 2026</td><td>Q3 2026 (First combined quarter)</td><td>Earnings</td><td style="text-align:left">First combined-entity P&amp;L; synergy realization update</td></tr>
      <tr><td>Feb 2027</td><td>FY2027 Guidance</td><td>Guidance</td><td style="text-align:left">Highest-conviction re-rating moment if synergies on track</td></tr>
      <tr><td>2027-2028</td><td>Tylenol MDL rulings / settlements</td><td>Litigation</td><td style="text-align:left">Favorable outcome unlocks stuck capital</td></tr>
    </tbody>
  </table>
</div>
</section>

<footer>
<p>Levin Capital Strategies &bull; KMB + KVUE Consensus View &bull; Last updated April 14, 2026</p>
<p style="margin-top:6px;font-size:10px;opacity:0.6">Sources: FactSet consensus estimates, Street research (Barclays, JPM, MS, GS, Jefferies, Evercore ISI, Wells, Citi, RBC, Bernstein), KMB/KVUE IR. For internal use only.</p>
</footer>

<script>
function toggleDark(){document.documentElement.classList.toggle('dark');const isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
