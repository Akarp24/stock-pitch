export const kmbMemoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Investment memo: Kimberly-Clark (KMB) + Kenvue (KVUE) $48.7B merger. Accretion/dilution, synergy capture, valuation through FY2029.">
<title>KMB + KVUE Investment Memo | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4C8;</text></svg>">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--navy:#0F1729;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827;--serif:'Merriweather',Georgia,serif}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7}
.wrap{max-width:920px;margin:0 auto;padding:0 32px}
.wrap-narrow{max-width:720px;margin:0 auto;padding:0 24px}
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
header.memo-header{padding:110px 0 40px;border-bottom:1px solid var(--border)}
.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:3px;color:var(--gold);font-weight:700;margin-bottom:10px}
header h1{font-family:var(--serif);font-size:36px;font-weight:900;color:var(--heading);line-height:1.2;margin-bottom:12px;letter-spacing:-0.02em}
.meta{font-size:13px;color:var(--text-muted);display:flex;gap:20px;flex-wrap:wrap}
.meta strong{color:var(--heading)}
.rating-strip{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:24px}
.rs{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:14px;text-align:center}
.rs .lbl{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text-muted);font-weight:700;margin-bottom:4px}
.rs .val{font-size:18px;font-weight:800;color:var(--heading)}
.rs .val.gold{color:var(--gold)}.rs .val.green{color:var(--green)}

.memo-toc{background:var(--surface);padding:20px;border-radius:8px;margin:32px 0;font-size:13px}
.memo-toc strong{font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;display:block;margin-bottom:10px}
.memo-toc a{display:inline-block;color:var(--text-muted);margin-right:16px;margin-bottom:6px;border-bottom:1px dotted var(--border)}
.memo-toc a:hover{color:var(--gold)}

article{padding:40px 0}
article h2{font-family:var(--serif);font-size:24px;font-weight:900;color:var(--heading);margin:40px 0 16px;letter-spacing:-0.01em;border-bottom:1px solid var(--border);padding-bottom:10px}
article h3{font-size:15px;font-weight:700;color:var(--heading);margin:24px 0 8px;text-transform:uppercase;letter-spacing:0.05em;color:var(--steel)}
article p{font-family:var(--serif);font-size:15px;line-height:1.9;margin-bottom:18px;color:#2D3748}
article strong{color:var(--heading);font-weight:700}
article em{color:var(--navy)}
article .tag{display:inline;font-family:Inter,sans-serif;font-size:10px;background:var(--gold-soft);color:var(--gold);padding:1px 6px;border-radius:3px;font-weight:700;margin-left:4px;vertical-align:middle}
aside.sidenote{display:block;float:right;clear:right;width:220px;margin:8px -250px 12px 24px;font-family:Inter,sans-serif;font-size:11px;line-height:1.6;color:var(--text-muted);border-left:2px solid var(--gold);padding-left:10px;font-style:italic}
@media(max-width:1200px){aside.sidenote{float:none;margin:16px 0;width:100%;background:var(--surface);padding:12px;border-left:3px solid var(--gold);font-style:normal}}

table.memo-table{width:100%;border-collapse:collapse;font-size:12px;font-family:Inter,sans-serif;margin:16px 0}
table.memo-table th{background:var(--navy);color:#fff;padding:10px 8px;text-align:right;font-size:10px;text-transform:uppercase;letter-spacing:1px;font-weight:700}
table.memo-table th:first-child{text-align:left}
table.memo-table td{padding:8px;border-bottom:1px solid var(--border-light);text-align:right;color:var(--text)}
table.memo-table td:first-child{text-align:left;color:var(--heading);font-weight:500}
table.memo-table tr.total td{font-weight:800;color:var(--gold);background:var(--gold-soft);border-top:2px solid var(--gold)}
table.memo-table tr.syn td{color:var(--green)}
.caption{font-size:11px;color:var(--text-muted);margin-top:8px;font-style:italic;font-family:Inter,sans-serif}

.sources-box{background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:24px;margin:40px 0}
.sources-box h3{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:12px}
.sources-box .sgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;font-size:12px;font-family:Inter,sans-serif}
.sources-box .sgrid strong{display:block;color:var(--heading);margin-bottom:4px;font-size:11px;text-transform:uppercase;letter-spacing:1px}
.sources-box .sgrid p{font-size:11px;color:var(--text-muted);line-height:1.6;font-family:Inter,sans-serif}

footer{padding:32px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:40px}
footer p{font-size:11px;color:var(--text-muted);font-family:Inter,sans-serif}

@media print{nav,.memo-toc,.dark-toggle{display:none}aside.sidenote{float:none;margin:16px 0;width:100%;background:var(--surface);padding:12px}article{padding:0}body{font-size:11pt}}

html.dark{--bg:#0F1218;--surface:#1A1E27;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.92);border-bottom-color:var(--border)}
html.dark article p{color:var(--text)}
html.dark .rs,html.dark .sources-box,html.dark .memo-toc{background:var(--surface);border-color:var(--border)}
html.dark footer{border-top-color:var(--border)}
</style>
</head>
<body>
<nav aria-label="Main navigation">
<div class="wrap">
  <a href="/lcs/" class="nav-brand">Levin Capital Strategies</a>
  <div class="nav-links">
    <a href="/lcs/kmb/">Overview</a>
    <a href="/lcs/kmb/memo.html" class="active">Memo</a>
    <a href="/lcs/kmb/presentation.html">Deck</a>
    <a href="/lcs/kmb/model.html">Model</a>
    <a href="/lcs/kmb/consensus.html">Consensus</a>
    <a href="/lcs/kmb/questions.html">Questions</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>KMB</strong> $96.59</span>
  </div>
</div>
</nav>

<header class="memo-header">
<div class="wrap">
  <div class="eyebrow">Investment Memo &middot; Consumer Staples &middot; Transformative M&amp;A</div>
  <h1>Kimberly-Clark / Kenvue: Underwriting the $48.7 Billion Consumer Health Pivot</h1>
  <div class="meta"><span><strong>Ticker:</strong> NYSE:KMB</span><span><strong>Price:</strong> $96.59</span><span><strong>Rating:</strong> BUY</span><span><strong>LCS PT:</strong> $128 (+33%)</span><span><strong>Time Horizon:</strong> 24 months</span><span><strong>Analyst:</strong> LCS Equity Research</span></div>
  <div style="margin-top:18px"><button onclick="window.print()" style="padding:8px 18px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;background:var(--navy);color:#fff;border:none;cursor:pointer;font-family:Inter,sans-serif">&#128424; Export PDF</button></div>
  <div class="rating-strip">
    <div class="rs"><div class="lbl">Deal EV</div><div class="val gold">$48.7B</div></div>
    <div class="rs"><div class="lbl">Net Synergies</div><div class="val green">$2.1B</div></div>
    <div class="rs"><div class="lbl">Combined Rev</div><div class="val">$32B</div></div>
    <div class="rs"><div class="lbl">FY27E PF EPS</div><div class="val gold">$8.88</div></div>
    <div class="rs"><div class="lbl">FY29E PF EPS</div><div class="val green">$10.85</div></div>
  </div>
</div>
</header>

<div class="wrap">
<nav class="memo-toc" aria-label="Table of contents">
  <strong>Contents</strong>
  <a href="#situation">Situation</a>
  <a href="#complication">Complication</a>
  <a href="#question">Question</a>
  <a href="#answer">Answer</a>
  <a href="#synergies">Synergy Decomposition</a>
  <a href="#accretion">Accretion Walk</a>
  <a href="#valuation">Valuation</a>
  <a href="#tylenol">Tylenol Overhang</a>
  <a href="#risks">Risk Assessment</a>
  <a href="#catalysts">Catalysts</a>
</nav>
</div>

<article>
<div class="wrap-narrow">

<h2 id="situation">Situation: A Consumer Staples Leader Buys Its Way Into Health</h2>

<aside class="sidenote">KMB announced the Kenvue acquisition on Nov 3, 2025. Shareholder votes cleared Jan 29, 2026 with 96% and 99% approval respectively. [IR]</aside>

<p>On <strong>November 3, 2025</strong>, Kimberly-Clark announced its intent to acquire Kenvue in a cash-and-stock transaction valuing the consumer-health giant at an enterprise value of approximately <strong>$48.7 billion</strong>.<span class="tag">IR</span> The consideration &mdash; <strong>$3.50 in cash plus 0.14625 KMB shares</strong> per Kenvue share &mdash; equated to $21.01 per KVUE share at announcement, a 46% premium to KVUE&rsquo;s prior 30-day VWAP. Upon close, targeted for the second half of 2026 pending FTC review, KMB shareholders will own ~54% of the combined company and legacy Kenvue holders ~46%. Mike Hsu, Kimberly-Clark&rsquo;s CEO since 2019 and the architect of its <em>2024 Transformation Initiative</em>, will lead the combined entity from Kimberly-Clark&rsquo;s Irving, Texas headquarters.</p>

<p>The strategic logic is clear. Kimberly-Clark has been a slow-growth, dividend-focused compounder for over a decade: FY2025 revenue of <strong>$16.4 billion declined 2.1%</strong>,<span class="tag">10-K</span> and the company&rsquo;s personal-care franchises (Huggies, Kleenex, Scott, Cottonelle, Kotex) compete in mature categories with pricing power but limited unit growth. Kenvue, spun out of Johnson &amp; Johnson in 2023, brings <strong>$15.1 billion in revenue</strong><span class="tag">10-K</span> across Self Care (Tylenol, Zyrtec, Motrin, Benadryl), Skin Health &amp; Beauty (Neutrogena, Aveeno, Listerine), and Essential Health (Band-Aid, Johnson&rsquo;s, Listerine). The combined company will control <strong>ten billion-dollar brands</strong> and derive roughly 45% of revenue from higher-growth health and wellness categories.</p>

<h2 id="complication">Complication: The Market Hates the Deal</h2>

<aside class="sidenote">KMB shares have underperformed the S&amp;P Consumer Staples Select Sector ETF by ~1,200 basis points since deal announcement. [Market]</aside>

<p>Yet the market has treated the transaction as value-destructive. <strong>KMB shares are down ~8% since announcement</strong>, while peers (PG, CL, CHD) are up low-to-mid single digits. Three concerns drive the overhang:</p>

<h3>1. The Tylenol Autism Litigation</h3>

<p>In 2025 a second wave of acetaminophen-autism litigation intensified around Kenvue&rsquo;s flagship Tylenol franchise.<span class="tag">IR</span> While KVUE has won every major motion to date &mdash; including a critical <em>Daubert</em> ruling in federal MDL 3043 in December 2024 &mdash; headline risk persists, and some institutional holders view the litigation as existential. Our assessment (detailed below) is that exposure is meaningfully overstated.</p>

<h3>2. Integration Risk and Execution</h3>

<p>Kenvue is Kimberly-Clark&rsquo;s largest acquisition ever at ~3x the size of its current operating footprint. Integrating two global manufacturing networks, consolidating R&amp;D, and harmonizing IT stacks while maintaining brand investment is non-trivial. The Street remembers the Kraft-Heinz playbook (zero-based budgeting that starved innovation) and is reluctant to underwrite $2.1 billion of net synergies before seeing proof.</p>

<h3>3. The Leverage Step-Up</h3>

<p>To fund the $6.7 billion cash consideration, KMB will issue new debt bringing pro-forma net leverage to roughly <strong>3.0x EBITDA at close</strong> &mdash; a significant jump from KMB&rsquo;s historical sub-2x profile. Rating agencies have signaled a one-notch downgrade (Moody&rsquo;s to Baa2, S&amp;P to BBB) with a stable outlook contingent on paydown trajectory.<span class="tag">Consensus</span> The dividend aristocrat crown is safe, but the balance sheet looks less pristine.</p>

<h2 id="question">The Central Question</h2>

<p>Given these concerns, the central underwriting question is not whether the deal is strategically sound &mdash; it manifestly is &mdash; but rather: <strong>how much of the promised $2.1 billion in run-rate synergies will actually materialize, and how much should investors credit before seeing it?</strong> A secondary question: <strong>what is the true economic exposure to Tylenol litigation, and is the market correctly pricing it?</strong></p>

<h2 id="answer">Our Answer: Buy Before Close</h2>

<p>We rate KMB <strong>BUY</strong> with a 12-month price target of <strong>$128</strong>, implying 33% upside. Our thesis rests on three pillars:</p>

<p><strong>First, synergy capture is credible and under-modeled by the Street.</strong> The $1.9 billion cost synergy target represents roughly 6% of combined operating expenses &mdash; in line with large-CPG M&amp;A benchmarks. Procter &amp; Gamble realized 7% in the Gillette deal; Unilever hit 5-6% across its beauty rollup. Half of KMB&rsquo;s targeted cost synergies come from <em>procurement and supply-chain overlap in personal care</em> &mdash; a category where Kimberly-Clark and Kenvue overlap in raw materials (pulp, superabsorbent polymers, surfactants), co-manufacturing networks, and retail distribution. The balance comes from SG&amp;A consolidation and marketing efficiency.<span class="tag">Estimated</span> Our model assumes 80% realization ($1.68B); the Street has internalized ~50-65%.</p>

<aside class="sidenote">Every $100M of realized net synergies translates to roughly $0.12 of pro-forma EPS &mdash; high operating leverage given the 615M pro-forma diluted share count. [Computed]</aside>

<p><strong>Second, the pro-forma EPS trajectory is materially better than appreciated &mdash; and it shows up earlier than the Street models.</strong> Our detailed merger model (see interactive version) front-loads the synergy realization curve, consistent with KMB&rsquo;s telegraphed day-1 execution plan. Under this curve, pro-forma adjusted EPS reaches <strong>$8.88 in FY27E, $10.02 in FY28E, and $10.85 in FY29E</strong> &mdash; representing +11.0%, +20.7%, and +26.2% accretion to standalone KMB, respectively. The Street&rsquo;s consensus FY27E and FY29E EPS for combined-company KMB sit around <strong>$7.85 and $9.50</strong> &mdash; implying we are ~13% above consensus on FY27E and ~14% above on FY29E. The timing gap matters: a material FY27 accretion print would be the single-largest re-rating catalyst in this setup.</p>

<p><strong>Third, the valuation gap is significant.</strong> KMB trades at <strong>13x FY25 adjusted EPS</strong>, a 40%+ discount to Colgate (24x) and Procter &amp; Gamble (23x). Even after haircutting for deal risk, we see a post-close re-rating path toward 17x forward earnings as integration milestones hit. Our $128 PT reflects 17x our FY27E pro-forma adjusted EPS of $8.12 less ~$10 per share of reasonable discount for Tylenol contingency and integration uncertainty. Under a bull case (95% synergy capture, multiple at 20x), fair value approaches $165.</p>

<h2 id="synergies">Synergy Decomposition</h2>

<p>Management&rsquo;s $2.1 billion net synergy target decomposes as follows:</p>

<table class="memo-table">
<thead><tr><th>Bucket</th><th>Run-Rate ($M)</th><th>% of Total</th><th>Realization Conviction</th></tr></thead>
<tbody>
<tr><td>Procurement &amp; supply chain</td><td>850</td><td>40%</td><td>High</td></tr>
<tr><td>SG&amp;A consolidation</td><td>650</td><td>31%</td><td>Medium-High</td></tr>
<tr><td>Marketing &amp; advertising efficiency</td><td>400</td><td>19%</td><td>Medium</td></tr>
<tr><td>Revenue cross-sell &amp; geographic expansion</td><td>500</td><td>24%</td><td>Medium</td></tr>
<tr><td>&minus; Reinvestment in brand &amp; innovation</td><td>(300)</td><td>(14%)</td><td>&mdash;</td></tr>
<tr class="total"><td>Net run-rate synergies</td><td>2,100</td><td>100%</td><td>&mdash;</td></tr>
</tbody>
</table>
<p class="caption">Source: DEFM14A merger proxy, management disclosures. Total gross synergies of $2.4B prior to reinvestment. Realization conviction is LCS assessment based on CPG M&amp;A benchmarks.</p>

<h3>Phasing &mdash; Front-Loaded Capture</h3>

<p>Management has telegraphed aggressive day-1 execution. Unlike the traditional back-loaded CPG synergy curve (where revenue synergies back-end the realization), the KMB / KVUE deal is structured to harvest the bulk of <em>cost</em> synergies &mdash; procurement contracts, duplicative SG&amp;A headcount, shared-service consolidation &mdash; within the first 12-18 months post-close. Our base-case phasing: <strong>25% of run-rate by end of FY26 stub (6 months post-close), 65% by FY27, 90% by FY28, and 100% by FY29</strong>. Under this schedule, incremental year-over-year synergy adds peak in FY27 and taper thereafter as the low-hanging fruit is harvested.</p>

<p>This front-loaded curve is grounded in precedent: Procter &amp; Gamble realized 60% of Gillette synergies within 24 months. Unilever&rsquo;s beauty rollup realized ~55% in Year 2. The structure also reflects disclosed KMB integration planning (six-month pre-close integration management office, Day-1 procurement wave scheduled). The interactive model allows stress-testing alternative phasing curves.</p>

<h2 id="accretion">Accretion / Dilution Walk</h2>

<aside class="sidenote">FY26E dilution reflects partial-year KVUE contribution (6 months post-close) against full-year new interest expense and share issuance. It is mechanical and transient; FY27+ is the steady-state.</aside>

<p>The mechanical accretion walk captures three headwinds (share issuance, D&amp;A step-up, incremental interest) and three tailwinds (KVUE contribution, synergy capture, revenue growth). Detailed numbers live in the <a href="/lcs/kmb/model.html">interactive model</a>. At a summary level:</p>

<table class="memo-table">
<thead><tr><th>$ per share</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
<tbody>
<tr><td>KMB standalone Adj EPS</td><td>$7.75</td><td>$8.00</td><td>$8.30</td><td>$8.60</td></tr>
<tr><td>Pro-forma Adj EPS</td><td>$7.09</td><td>$8.88</td><td>$10.02</td><td>$10.85</td></tr>
<tr class="total"><td>Accretion / (Dilution)</td><td>(8.5%)</td><td>+11.0%</td><td>+20.7%</td><td>+26.2%</td></tr>
</tbody>
</table>
<p class="caption">LCS base case: 80% ultimate synergy capture on a <em>front-loaded</em> curve (25% / 65% / 90% / 100% phase-in), 5.5% new-debt cost, 23% blended tax rate, 1% Yr-1 revenue dis-synergies. Accretive from FY27. See model page for sensitivity to phasing curve.</p>

<h2 id="valuation">Valuation Framework</h2>

<p>We triangulate fair value from three independent methods:</p>

<p><strong>(a) Forward P/E on FY27E pro-forma EPS.</strong> Applying 17.0x to $8.12 yields $138. Sensitivity: every 1x multiple = $8 per share.</p>

<p><strong>(b) DCF.</strong> Using WACC of 7.0%, terminal growth of 2.3%, and explicit FCF projections through FY30, our DCF yields $132. Terminal value represents ~70% of EV, below the &ldquo;elevated&rdquo; threshold.</p>

<p><strong>(c) EV/EBITDA cross-check.</strong> Combined FY27E Adj EBITDA of $8.1B at a 13.5x multiple (staples median) implies EV of $109B. Netting ~$19B of pro-forma net debt yields equity value of $90B &divide; 615M shares = $147. This is the richest of the three.</p>

<p>We average the three, haircut for Tylenol contingency and integration execution, and arrive at <strong>$128</strong>.</p>

<h2 id="tylenol">The Tylenol Overhang: A Closer Look</h2>

<p>Investor anxiety around Tylenol autism litigation is the single most-discussed tail risk in this deal. Our view is that the market is overestimating the economic exposure by an order of magnitude.</p>

<p><strong>Legal state of play.</strong> The federal MDL (MDL 3043 in SDNY) was substantially narrowed by a December 2024 <em>Daubert</em> ruling that excluded Kenvue&rsquo;s plaintiffs&rsquo; expert testimony on general causation. State-court cases continue but have had mixed success. Kenvue&rsquo;s accounting accruals for the matter are disclosed as de minimis.<span class="tag">10-K</span></p>

<p><strong>Economic exposure.</strong> Even under a scenario in which Kenvue eventually settles all pending and threatened claims for <strong>$2 billion</strong> (10x current accruals, comparable to the Takeda/Actos settlement scale), the impact is manageable: at 615M pro-forma shares, this equals ~$3.25 per share one-time, or roughly <strong>8 months of combined free cash flow</strong>. It does not threaten investment-grade status or the dividend.</p>

<p><strong>Revenue at risk.</strong> Tylenol represents approximately <strong>$3.4 billion of Kenvue&rsquo;s $15.1 billion in revenue</strong> &mdash; roughly 11% of Kenvue, or <strong>~5% of combined company revenue</strong>. Even a hypothetical 30% volume decline (unlikely absent a regulatory removal, which FDA has repeatedly declined) would represent a ~1.5% combined revenue headwind.</p>

<h2 id="risks">Risk Assessment</h2>

<p><strong>Integration execution (high impact, medium probability).</strong> A botched integration &mdash; particularly in IT consolidation or R&amp;D harmonization &mdash; could delay synergy realization by 12-24 months. Mitigant: Mike Hsu&rsquo;s 2024 Transformation Initiative experience; six-month integration planning period pre-close.</p>

<p><strong>Regulatory denial or remedy (high impact, low probability).</strong> FTC second-request review is ongoing. Category overlap is manageable &mdash; KMB is diapers/tissue, KVUE is OTC pharma/skin care. Mitigant: minimal head-on product competition; path to approval is clear per merger counsel.</p>

<p><strong>Leverage pressure (medium impact, medium probability).</strong> If combined company EBITDA stalls due to adverse macro or input-cost inflation, the 3.0x opening leverage could pressure covenants. Mitigant: KMB has historically been a strong FCF generator; dividend is covered 2x by FCF even at depressed margins.</p>

<p><strong>Tylenol settlement beyond expectations (medium impact, low probability).</strong> A $5B+ settlement would push the leverage ratio higher and delay deleveraging. Mitigant: multiple strong legal precedents; MDL has been narrowed.</p>

<p><strong>Generic pressure on Kenvue OTC franchises (low impact, ongoing).</strong> Private-label penetration in OTC pharma is ~20% and rising 100-200bps/year. Zyrtec and Benadryl franchises are most exposed. Mitigant: brand equity, formulation patents, category share stability over 10+ year horizons.</p>

<h2 id="catalysts">Catalysts</h2>

<p><strong>Q2 2026 earnings (July 2026).</strong> Update on deal close timing and regulatory progress. Any clearing of the FTC second-request review is a de-risking event.</p>

<p><strong>Deal close + Day-1 integration framework (2H 2026).</strong> Management will publish integration milestones and updated synergy commitment. First public glimpse of combined-company reporting format.</p>

<p><strong>Q4 2026 / Initial combined-company guidance (Feb 2027).</strong> First FY2027 guidance for combined entity &mdash; highest-conviction moment for Street to re-rate the multiple.</p>

<p><strong>Tylenol MDL resolution milestones.</strong> Any favorable ruling on general causation appeals or state-court consolidation would unlock stuck capital. Timing indeterminate but 12-24 months is the live window.</p>

<div class="sources-box">
<h3>Sources &amp; Methodology</h3>
<div class="sgrid">
<div><strong>Primary Filings</strong><p>KMB 10-K FY2025 (filed Feb 2026); KVUE 10-K FY2025 (filed Feb 2026); DEFM14A Merger Proxy (Dec 2025)</p></div>
<div><strong>IR &amp; Transcripts</strong><p>KMB / KVUE joint deal announcement Nov 3, 2025; KMB Q3 &amp; Q4 2025 earnings calls; Kenvue Q4 2025 earnings release</p></div>
<div><strong>Market Data</strong><p>NYSE close April 10, 2026; consensus estimates from 14 analysts (source: FactSet via LCS terminal); peer comp set: PG, CL, CHD, UL, HSY</p></div>
</div>
</div>

</div>
</article>

<footer>
<p>Levin Capital Strategies &bull; KMB + KVUE Investment Memo &bull; Last updated April 14, 2026 &bull; For internal use only</p>
</footer>

<script>
function toggleDark(){document.documentElement.classList.toggle('dark');const isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
