export const bxMemoHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Blackstone (BX) investment memo: FRE algorithm, perpetual-capital flywheel, private wealth inflection, realization cycle setup, valuation through FY2028.">
<title>BX Investment Memo | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4B0;</text></svg>">
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
article h3{font-size:14px;font-weight:700;color:var(--steel);margin:24px 0 8px;text-transform:uppercase;letter-spacing:0.05em}
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
    <a href="/lcs/bx/">Overview</a>
    <a href="/lcs/bx/memo.html" class="active">Memo</a>
    <a href="/lcs/bx/presentation.html">Deck</a>
    <a href="/lcs/bx/model.html">Model</a>
    <a href="/lcs/bx/consensus.html">Consensus</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>BX</strong> $110</span>
  </div>
</div>
</nav>

<header class="memo-header">
<div class="wrap">
  <div class="eyebrow">Investment Memo &middot; Alternative Asset Management &middot; Compounder Setup</div>
  <h1>Blackstone: Underwriting the Perpetual-Capital Compounder at a Cyclical Discount</h1>
  <div class="meta"><span><strong>Ticker:</strong> NYSE:BX</span><span><strong>Price:</strong> $110</span><span><strong>Rating:</strong> BUY</span><span><strong>LCS PT:</strong> $150 (+36%)</span><span><strong>Horizon:</strong> 24 months</span><span><strong>Analyst:</strong> LCS Equity Research</span></div>
  <div class="rating-strip">
    <div class="rs"><div class="lbl">Total AUM</div><div class="val">$1.28T</div></div>
    <div class="rs"><div class="lbl">FY25 FRE</div><div class="val gold">$5.7B</div></div>
    <div class="rs"><div class="lbl">FY25 DE/Sh</div><div class="val">$5.57</div></div>
    <div class="rs"><div class="lbl">FY27E DE/Sh</div><div class="val gold">$6.80</div></div>
    <div class="rs"><div class="lbl">FY28E DE/Sh</div><div class="val green">$8.25</div></div>
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
  <a href="#platform">Platform Economics</a>
  <a href="#wealth">Private Wealth Inflection</a>
  <a href="#realization">Realization Setup</a>
  <a href="#valuation">Valuation</a>
  <a href="#risks">Risks</a>
  <a href="#catalysts">Catalysts</a>
</nav>
</div>

<article>
<div class="wrap-narrow">

<h2 id="situation">Situation: A Category-Defining Compounder at Scale</h2>

<aside class="sidenote">BX became the first public alternative asset manager in 2007. In 2019 it converted from a partnership to a C-corp, unlocking broader index inclusion. Today it is the largest alts platform in the world by every meaningful metric. [10-K]</aside>

<p>Blackstone Inc. is the world&rsquo;s largest alternative asset manager by a wide margin. At year-end 2025, the firm managed <strong>$1.28 trillion in total assets</strong> &mdash; roughly 1.5x Apollo ($840B), 1.7x KKR ($753B), and nearly 2x Ares ($660B).<span class="tag">10-K</span> Management fees grew 12% to <strong>$8.0 billion</strong>, fee-related earnings (FRE) grew 9% to <strong>$5.7 billion</strong> at a record FRE margin, and distributable earnings (DE) hit <strong>$7.1 billion, or $5.57 per share &mdash; up 20% year over year</strong>. The firm generated a record <strong>$240 billion of inflows</strong> across institutional, private wealth, and insurance channels, with four growth engines &mdash; real estate, private equity, credit, and multi-asset + infrastructure &mdash; each at scales that would make most standalone asset managers among the largest public pure-plays in their vertical.</p>

<p>The compounding has been extraordinary: from $434 billion of AUM at the 2018 IPO of C-corp Blackstone to $1.28 trillion today, a ~12% CAGR compounded through two bear markets, a commercial-real-estate reset, and the steepest Fed tightening cycle in 40 years.<span class="tag">10-K</span> FRE per share has nearly quadrupled over the same period. Distributable earnings have grown at a high-teens CAGR. Management fees &mdash; the least volatile, highest-quality line &mdash; have grown every single quarter for six consecutive years.</p>

<h2 id="complication">Complication: The Market Sees Only the Credit Concerns</h2>

<aside class="sidenote">BX shares are down approximately 12% year-to-date in 2026, underperforming the S&amp;P 500 by roughly 18 percentage points. Apollo, Ares, KKR, and Blue Owl are down comparable amounts on shared sector concerns.</aside>

<p>Despite this fundamental profile, BX shares are down <strong>~12% year-to-date in 2026</strong>, tracking a broader selloff in alternative asset managers triggered by emerging private-credit concerns. The sector anxiety is real: rapid growth in non-bank lending, opaque PIK accounting, and rising non-accrual disclosure in retail vehicles have created headline risk. For Apollo &mdash; where 86% of fee-earning AUM is credit &mdash; this pressure is directly on the fundamental engine. For Ares (66% credit) and KKR (48%), the exposure is substantial.</p>

<p>For Blackstone, credit and insurance together represent <strong>just 34% of fee-earning AUM</strong>.<span class="tag">10-K</span> The firm&rsquo;s book is balanced across four major verticals, with real estate ($315B), private equity ($348B), and multi-asset + infrastructure ($176B) providing meaningful diversification. BX is trading as if it carried Apollo&rsquo;s credit concentration &mdash; without actually carrying it. That is the mispricing.</p>

<h2 id="question">The Central Question</h2>

<p>Given this dislocation, the central underwriting question is not whether Blackstone is high-quality &mdash; it manifestly is &mdash; but rather: <strong>at what pace can the four growth engines compound FRE and DE over a realistic 3-year horizon, and what multiple should the market pay for that earnings stream given the increasing share of perpetual-capital AUM in the mix?</strong></p>

<h2 id="answer">Our Answer: Buy the Dislocation</h2>

<p>We rate BX <strong>BUY</strong> with a 12-month price target of <strong>$150</strong>, implying 36% price upside plus a 3.2% dividend yield &mdash; a ~40% total-return setup. Our thesis rests on three pillars:</p>

<p><strong>First, the FRE algorithm is accelerating, not decelerating.</strong> Our base case projects <strong>11% management fee CAGR through FY28E</strong>, with FRE margins expanding from 59% in FY25 to 62% by FY28 as platform scale accrues. This is <em>consistent with</em> &mdash; not above &mdash; management&rsquo;s forward guidance. Private wealth inflows are the largest driver; BX&rsquo;s product suite (BREIT, BCRED, BXSL, BXPE, infrastructure) is deeper and more distribution-ready than any competitor&rsquo;s. Insurance AUM continues to grow as general-account reinsurance mandates accumulate. The institutional pipeline remains healthy.</p>

<aside class="sidenote">Every $100 billion of incremental AUM at BX&rsquo;s blended ~0.69% fee rate equates to ~$690 million of management fees and &mdash; at 61% FRE margin &mdash; ~$420 million of FRE. [Computed]</aside>

<p><strong>Second, the realization cycle is turning and the coiled pool is large.</strong> Net accrued performance compensation &mdash; the unrealized carry embedded in BX&rsquo;s active funds &mdash; sits at <strong>$6.7 billion</strong> as of year-end 2025.<span class="tag">10-K</span> This represents roughly three years of realization activity at the firm&rsquo;s historical mid-cycle pace. LBO exit activity bottomed in mid-2024 and has been accelerating through 2025 as financing markets reopened and strategic M&amp;A re-awakened. FY25 net realizations of $1.4 billion were still below normalized; our base case assumes $2.2B in FY26, $2.8B in FY27, and $3.2B in FY28 &mdash; a recovery path toward, but still short of, the firm&rsquo;s historical mid-cycle realization level of $4B+.</p>

<p><strong>Third, the multiple should re-rate toward compounder territory.</strong> BX historically trades in an 18-28x forward DE multiple range, with the premium anchored to perpetual-capital mix. Perpetual AUM is now <strong>&gt;40% of total AUM</strong> and growing. Applying a 22x multiple to our FY27E DE of $6.80 per share &mdash; roughly the midpoint of the historical range, below the 25x peak trading multiple reached in 2021 &mdash; yields a $150 price target. Bull case (25x on $7.20) implies $180; bear case (18x on $5.80) implies $104 &mdash; notably, even the bear case implies near-current trading levels, anchoring downside.</p>

<h2 id="platform">Platform Economics: The Four-Engine Model</h2>

<table class="memo-table" aria-label="Four-engine AUM and fee economics">
<thead><tr><th>Segment</th><th>AUM ($B)</th><th>% of Total</th><th>Fee Rate</th><th>Growth Driver</th></tr></thead>
<tbody>
<tr><td>Real Estate</td><td>315</td><td>25%</td><td>~85 bps</td><td>BREIT stabilization, core-plus re-opens</td></tr>
<tr><td>Private Equity</td><td>348</td><td>27%</td><td>~80 bps</td><td>BCP X fundraise, BXPE (private wealth)</td></tr>
<tr><td>Credit &amp; Insurance</td><td>436</td><td>34%</td><td>~55 bps</td><td>BCRED scale, insurance SMA mandates</td></tr>
<tr><td>Multi-Asset + Infra</td><td>176</td><td>14%</td><td>~75 bps</td><td>BXINFRA fastest-growing vehicle ever</td></tr>
<tr class="total"><td>Total</td><td>1,275</td><td>100%</td><td>~69 bps</td><td>Blended across platform</td></tr>
</tbody>
</table>
<p class="caption">Source: BX 10-K FY25, Q4 2025 supplemental. Fee rates are LCS estimates based on disclosed management fee ranges.</p>

<p>The single most underappreciated feature of Blackstone is that each of its four segments would independently be among the largest in its vertical. The $315B real estate platform is roughly the size of Brookfield&rsquo;s real estate AUM. The $348B private equity platform dwarfs all pure-play PE managers. The $436B credit + insurance platform is comparable in scale to Apollo&rsquo;s credit book. Multi-asset + infrastructure alone is larger than the entire AUM of most mid-sized alternative managers.</p>

<p>Diversification at this scale is not just a narrative virtue &mdash; it creates durable cross-selling, LP stickiness, and a defensive moat against concentration-driven drawdowns. A private-credit allocation shift at a large sovereign wealth fund can fund a BXINFRA commitment next quarter. A BREIT redemption cycle is partially offset by BXPE inflows. This is the competitive advantage of platform scale.</p>

<h2 id="wealth">Private Wealth: The Next Leg</h2>

<aside class="sidenote">Global private wealth alternatives penetration stands at ~3% today and is projected to reach 8-10% within a decade. That is roughly $7 trillion of incremental industry flow, of which BX is positioned to capture a disproportionate share. [IR]</aside>

<p>The private wealth channel has transitioned from marginal to central for Blackstone. Of 2025&rsquo;s <strong>$240 billion in total inflows</strong>, approximately $60 billion came through private wealth distribution &mdash; individual investors, RIAs, bank distribution, and international wealth platforms.<span class="tag">IR</span> This is roughly 25% of total inflows, up from 8% a decade ago.</p>

<p>The product suite matters. BREIT, which pioneered the non-traded REIT revolution, has reached post-redemption-cycle stability and is now accepting new net inflows. BCRED (private credit) took in <strong>$14 billion in 2025 gross sales</strong>. BXSL (publicly-traded BDC) is the highest-quality direct-lending vehicle for individual investors. <strong>BXPE (Blackstone Private Equity Strategies Fund)</strong>, launched in 2024, is the first ever perpetually-offered private equity product built from the ground up for wealth distribution &mdash; it addresses a capital pool to which PE was structurally unavailable historically.</p>

<p>The TAM for alternatives in private wealth is conservatively $7 trillion of incremental industry flow over the next decade (the gap between current ~3% penetration and expected 8-10%). Blackstone&rsquo;s brand dominance, distribution scale, and product depth position it to capture 25-30% share of those flows &mdash; worth approximately $2 trillion of potential AUM over a 10-year horizon. Every $100 billion captured translates to roughly $420 million of FRE at current margins.</p>

<h2 id="realization">Realization Cycle: The Coiled Spring</h2>

<p>For an alternative asset manager, FRE is the floor and realizations are the upside. Realized performance compensation &mdash; carried interest &mdash; is what drives DE variability, dividends, and stock performance in bull periods.</p>

<p>FY2025 net realizations of $1.4 billion were <strong>up 83%</strong> from the FY2024 trough of $0.8B, but still well below the mid-cycle level of $3.5-4B that BX achieved in 2021-2022. The LBO exit drought of 2022-2024 created an unusual backlog of mature portfolio companies ready to exit. At year-end 2025, <strong>net accrued performance compensation totaled $6.7 billion</strong> &mdash; an amount equivalent to three normal years of realization activity.<span class="tag">10-K</span></p>

<p>The exit window is reopening. Strategic M&amp;A activity has accelerated materially in 2H 2025 and into 2026; LBO financing spreads have compressed 150-200bps from wide-point; and BX has been an active seller in the past three quarters (including high-profile exits in real estate, industrials, and consumer). Our base case assumes net realizations recover along the following trajectory: <strong>$2.2B (FY26), $2.8B (FY27), $3.2B (FY28)</strong>. This is a normalization path, not a cycle-peak assumption.</p>

<h2 id="valuation">Valuation Framework: Four Independent Anchors</h2>

<table class="memo-table" aria-label="Valuation summary">
<thead><tr><th>Method</th><th>Metric</th><th>Multiple / Assumption</th><th>Implied Value</th></tr></thead>
<tbody>
<tr><td>Forward DE multiple</td><td>FY27E DE/Sh $6.80</td><td>22.0x</td><td>$150</td></tr>
<tr><td>Historical trading range</td><td>FY26E DE/Sh $6.30</td><td>21x mid-cycle</td><td>$132</td></tr>
<tr><td>DCF</td><td>5-yr explicit + terminal</td><td>11% WACC, 4% growth</td><td>$145</td></tr>
<tr><td>Dividend discount model</td><td>FY27E div $5.78 &times; yield</td><td>3.5% terminal yield</td><td>$165</td></tr>
<tr class="total"><td>Blended LCS fair value</td><td>&mdash;</td><td>&mdash;</td><td>$150</td></tr>
</tbody>
</table>

<p>The four methods cluster in a $132-165 range with a central tendency at ~$150. We anchor on the forward DE multiple approach given it most directly maps to how the market values alternative asset managers, then cross-check with DCF and DDM. Bull case uses 25x multiple on $7.20 FY27E DE for $180; bear case uses 18x on $5.80 for $104.</p>

<h2 id="risks">Risk Assessment</h2>

<p><strong>Private credit mark-to-market deterioration (medium impact, medium probability).</strong> If direct-lending portfolios experience meaningful non-accrual increases, even a BX with 34% credit exposure would be affected. Mitigant: BX credit concentrates in senior-secured direct lending with historically strong documentation; non-accrual trend-line has been stable through 2025.</p>

<p><strong>BREIT redemption reacceleration (medium impact, low probability).</strong> BREIT stabilization is recent. A return to net outflows would pressure stock near-term, even though economic impact is modest (BREIT fees ~$1.3B of $8B total mgmt fees). Mitigant: BREIT performance is positive, gate mechanisms proven, investor communication disciplined.</p>

<p><strong>Realization cycle disappointment (high impact, low probability).</strong> If LBO exits remain sluggish through 2027, our realization ramp is too aggressive and DE lands $0.50-0.75/share below our estimate. Mitigant: the $6.7B accrued carry pool is the buffer; a multi-year delay just shifts timing.</p>

<p><strong>Regulatory headwinds (low-medium impact, medium probability).</strong> Private credit regulation, carried interest tax changes, and SEC rule-making on private fund transparency remain live political risks. Mitigant: BX has among the highest compliance infrastructure in the industry; regulatory outcomes historically less damaging than feared.</p>

<p><strong>Deep recession + asset re-rating (high impact, low-medium probability).</strong> A severe global recession would compress AUM through negative performance, pressure fee margins via mix-shift, and delay realizations. Mitigant: 40%+ perpetual-capital AUM provides insulation; historically BX has used downturns to deploy and has emerged with larger market share.</p>

<h2 id="catalysts">Catalysts</h2>

<p><strong>Q1 2026 Earnings (April 24, 2026).</strong> Key watch items: private wealth inflows by product, BREIT redemption trend, realization commentary, FRE margin print. Any signal of $1B+ quarterly net realizations would front-run FY27 consensus.</p>

<p><strong>Q2 2026 Earnings (July 2026).</strong> First half of year when private wealth and institutional activity typically accelerate. BCP X fundraise milestones could be material.</p>

<p><strong>Fed rate path.</strong> Continued easing accelerates the LBO exit window and compresses realization friction. Every 100bps of lower rates historically correlates to ~5% higher BX multiple.</p>

<p><strong>BXINFRA flagship fund close.</strong> The fastest-growing vehicle in BX history; a large final close would lift forward FRE growth trajectory.</p>

<p><strong>Public-to-private wave in 2026-2027.</strong> Private equity has historically compressed equity-market multiples below 15x trigger take-privates; BX&rsquo;s $150B+ of PE dry powder is positioned to deploy, setting up strong realization vintages 5-7 years out.</p>

<div class="sources-box">
<h3>Sources &amp; Methodology</h3>
<div class="sgrid">
<div><strong>Primary Filings</strong><p>BX 10-K FY2025 (filed Feb 2026); Q1-Q4 2025 10-Q and 8-K filings; DEF 14A proxy 2026</p></div>
<div><strong>IR &amp; Transcripts</strong><p>BX Q4 2025 earnings call transcript (Jan 29, 2026); FY25 supplemental financial data; 2024 Investor Day presentation</p></div>
<div><strong>Market Data &amp; Peers</strong><p>FactSet consensus (17 analysts); peer set APO, KKR, ARES, OWL, TPG; BMO / Oppenheimer / Morgan Stanley research</p></div>
</div>
</div>

</div>
</article>

<footer>
<p>Levin Capital Strategies &bull; BX Investment Memo &bull; Last updated April 14, 2026 &bull; For internal use only</p>
</footer>

<script>
function toggleDark(){document.documentElement.classList.toggle('dark');const isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
