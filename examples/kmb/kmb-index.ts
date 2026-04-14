export const kmbIndexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Kimberly-Clark (KMB) equity research portal: Kenvue (KVUE) acquisition accretion/dilution, synergy capture, combined P&L through FY2029. Levin Capital Strategies.">
<meta property="og:title" content="KMB + KVUE — The $48.7B Consumer Health Merger | Levin Capital Strategies">
<meta property="og:description" content="Full accretion/dilution model, synergy phasing, combined P&L through 2029, DCF + EV/EBITDA valuation on the Kimberly-Clark / Kenvue merger.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4C8;</text></svg>">
<title>KMB + KVUE — $48.7B Consumer Health Merger | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--gold-hover:#9A7D2E;--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.wrap{max-width:1080px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light);transition:box-shadow 0.3s}
nav.scrolled{box-shadow:0 1px 12px rgba(0,0,0,0.06)}
nav .wrap{display:flex;justify-content:space-between;align-items:center}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;gap:16px}
.nav-links a{font-size:12px;color:var(--text-muted);font-weight:500;transition:color 0.2s}
.nav-links a:hover,.nav-links a.active{color:var(--heading)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading);font-weight:700}
.nav-cta{padding:7px 18px;border-radius:6px;font-size:12px;font-weight:600;background:var(--navy);color:#fff;letter-spacing:0.3px;transition:background 0.2s}
.nav-cta:hover{background:var(--navy-soft)}
.hero{background:linear-gradient(135deg,#0F1729 0%,#1E3A5F 100%);border-bottom:1px solid var(--border);padding:120px 0 56px;color:#fff}
.hero .wrap{max-width:1080px;margin:0 auto;padding:0 24px}
.hero-eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:3px;color:var(--gold);font-weight:600;margin-bottom:10px}
.hero h1{font-size:40px;font-weight:800;color:#fff;line-height:1.12;margin-bottom:14px;letter-spacing:-0.02em}
.hero h1 span{color:var(--gold)}
.hero-subtitle{font-size:16px;color:rgba(255,255,255,0.78);line-height:1.6;max-width:760px;margin-bottom:22px}
.hero-badges{display:flex;gap:10px;flex-wrap:wrap}
.hero-badge{display:inline-flex;align-items:center;gap:6px;border-radius:6px;padding:8px 18px;font-weight:700;font-size:13px}
.hero-badge.street{background:rgba(184,151,62,0.18);border:1px solid rgba(184,151,62,0.35);color:var(--gold)}
.hero-badge.lcs{background:rgba(74,222,128,0.15);border:1px solid rgba(74,222,128,0.35);color:#4ade80}
.metrics-wrap{margin:-28px auto 48px;position:relative;z-index:2}
.metrics{display:grid;grid-template-columns:repeat(7,1fr);gap:1px;background:var(--border);border-radius:10px;overflow:hidden;box-shadow:0 1px 8px rgba(0,0,0,0.04)}
.metric{background:var(--bg);padding:18px 12px;text-align:center}
.metric-val{font-size:20px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.metric-val.gold{color:var(--gold)}.metric-val.green{color:var(--green)}.metric-val.steel{color:var(--steel)}
.metric-val.forest{color:var(--forest)}.metric-val.neg{color:var(--red)}
.metric-lbl{font-size:8px;color:var(--text-muted);margin-top:3px;text-transform:uppercase;letter-spacing:1.2px;font-weight:600}
.bluf{background:var(--surface);padding:48px 0;border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)}
.bluf p{font-size:15px;line-height:1.85;margin-bottom:16px;max-width:860px}
.bluf strong{color:var(--heading)}
.section{padding:48px 0}
.section-label{font-size:10px;letter-spacing:2.5px;color:var(--gold);text-transform:uppercase;font-weight:700;margin-bottom:8px}
.section h2{font-size:24px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:8px}
.section .lead{font-size:14px;color:var(--text-muted);max-width:700px;margin-bottom:32px}
.thesis-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.thesis-card{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:28px;position:relative;overflow:hidden;transition:all 0.2s}
.thesis-card:hover{box-shadow:0 4px 20px rgba(0,0,0,0.06)}
.thesis-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.thesis-card:nth-child(1)::before{background:var(--forest)}
.thesis-card:nth-child(2)::before{background:var(--steel)}
.thesis-card:nth-child(3)::before{background:var(--gold)}
.thesis-num{font-size:10px;font-weight:800;color:var(--gold);letter-spacing:1px;margin-bottom:8px}
.thesis-card h3{font-size:16px;font-weight:700;color:var(--heading);margin-bottom:8px}
.thesis-card p{font-size:13px;color:var(--text-muted);line-height:1.7}
.thesis-stat{display:inline-block;margin-top:12px;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:700}
.thesis-stat.green{background:rgba(26,122,58,0.08);color:var(--green)}
.thesis-stat.steel{background:rgba(44,95,124,0.08);color:var(--steel)}
.thesis-stat.gold{background:var(--gold-soft);color:var(--gold)}
.module-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}
.module-card{display:block;padding:24px;border:1px solid var(--border);border-radius:10px;transition:all 0.2s;text-decoration:none}
.module-card:hover{border-color:var(--gold);box-shadow:0 2px 12px rgba(0,0,0,0.04)}
.module-card h4{font-size:14px;font-weight:700;color:var(--heading);margin-bottom:4px}
.module-card p{font-size:12px;color:var(--text-muted)}
.deal-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:24px}
.deal-card{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:20px}
.deal-card .dlbl{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text-muted);font-weight:700;margin-bottom:6px}
.deal-card .dval{font-size:22px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.deal-card .dsub{font-size:11px;color:var(--text-muted);margin-top:4px}
.deal-card .dval.gold{color:var(--gold)}.deal-card .dval.green{color:var(--green)}
.pnl-box{background:var(--navy);border-radius:12px;padding:32px;color:#fff;margin-top:32px}
.pnl-box h3{font-size:18px;font-weight:800;color:#fff;margin-bottom:18px}
.pnl-table{width:100%;border-collapse:collapse;font-size:13px}
.pnl-table th{text-align:right;padding:10px 8px;font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);font-weight:700;border-bottom:1px solid rgba(255,255,255,0.15)}
.pnl-table th:first-child{text-align:left}
.pnl-table td{padding:8px;color:rgba(255,255,255,0.88);border-bottom:1px solid rgba(255,255,255,0.06);text-align:right}
.pnl-table td:first-child{text-align:left;color:#fff;font-weight:600}
.pnl-table tr.total td{font-weight:800;color:var(--gold);border-top:1px solid rgba(255,255,255,0.15);padding-top:12px}
.pnl-table tr.syn td{color:#4ade80}
.pnl-note{font-size:11px;color:rgba(255,255,255,0.5);margin-top:12px;font-style:italic}
footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light)}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}
@media(max-width:900px){.metrics{grid-template-columns:repeat(4,1fr)}.thesis-grid,.module-grid,.deal-grid{grid-template-columns:1fr 1fr}.pnl-table{font-size:11px}}
@media(max-width:600px){.metrics{grid-template-columns:repeat(2,1fr)}.deal-grid{grid-template-columns:1fr}.nav-links,.nav-ticker{display:none}}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif;transition:all 0.2s;line-height:1}
.dark-toggle:hover{border-color:var(--gold);color:var(--gold)}
html.dark{--bg:#0F1218;--surface:#1A1E27;--surface-2:#242830;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.9);border-bottom-color:var(--border)}
html.dark .metric,html.dark .deal-card{background:var(--bg)}
html.dark .metrics{background:var(--border)}
html.dark .thesis-card,html.dark .module-card{background:var(--surface);border-color:var(--border)}
html.dark .bluf{background:var(--surface);border-color:var(--border)}
html.dark footer{border-top-color:var(--border)}
</style>
</head>
<body>
<a href="#main-content" style="position:absolute;left:-9999px;top:0;padding:8px 16px;background:var(--navy);color:#fff;z-index:999" onfocus="this.style.left='0'" onblur="this.style.left='-9999px'">Skip to content</a>
<nav id="nav" aria-label="Main navigation">
<div class="wrap">
  <a href="/lcs/" class="nav-brand">Levin Capital Strategies</a>
  <div class="nav-links">
    <a href="/lcs/kmb/" class="active">Overview</a>
    <a href="/lcs/kmb/memo.html">Memo</a>
    <a href="/lcs/kmb/presentation.html">Deck</a>
    <a href="/lcs/kmb/model.html">Model</a>
    <a href="/lcs/kmb/consensus.html">Consensus</a>
    <a href="/lcs/kmb/questions.html">Questions</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode" title="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>KMB</strong> $96.59</span>
    <a href="/lcs/kmb/model.html" class="nav-cta">View Model</a>
  </div>
</div>
</nav>

<main id="main-content">

<section class="hero">
  <div class="wrap">
    <div class="hero-eyebrow">NYSE &bull; Consumer Staples &bull; Transformative M&amp;A</div>
    <h1>Kimberly-Clark + Kenvue: The <span>$48.7B Bet</span> on Global Consumer Health</h1>
    <p class="hero-subtitle">A cash-and-stock merger creating a $32B health-and-wellness leader with 10 billion-dollar brands, $2.1B in run-rate synergies, and mid-single-digit EPS accretion by Year 2. The market&rsquo;s skepticism is the setup.</p>
    <div class="hero-badges">
      <span class="hero-badge street" title="Street consensus PT $113.69, 14 analysts [Consensus]">STREET PT $113.69 (+18%)</span>
      <span class="hero-badge lcs" title="LCS blended DCF + accretion-adjusted multiple [Computed]">LCS PT $128 (+33%) &middot; BUY</span>
    </div>
  </div>
</section>

<div class="metrics-wrap wrap">
  <div class="metrics">
    <div class="metric"><div class="metric-val" title="NYSE close, April 10, 2026 [Market]">$96.59</div><div class="metric-lbl">Price</div></div>
    <div class="metric"><div class="metric-val gold" title="$96.59 x 334M shares outstanding [Computed]">$32.3B</div><div class="metric-lbl">Market Cap</div></div>
    <div class="metric"><div class="metric-val steel" title="KMB FY2025 net sales [10-K]">$16.4B</div><div class="metric-lbl">KMB FY25 Rev</div></div>
    <div class="metric"><div class="metric-val steel" title="KVUE FY2025 net sales [10-K]">$15.1B</div><div class="metric-lbl">KVUE FY25 Rev</div></div>
    <div class="metric"><div class="metric-val green" title="$1.9B cost + $0.5B revenue - $0.3B reinvest = $2.1B net [IR]">$2.1B</div><div class="metric-lbl">Net Synergies</div></div>
    <div class="metric"><div class="metric-val forest" title="KMB FY2025 adjusted diluted EPS [10-K]">$7.53</div><div class="metric-lbl">FY25 Adj EPS</div></div>
    <div class="metric"><div class="metric-val gold" title="LCS model pro-forma FY2027E adjusted EPS — first full year, front-loaded synergies [Estimated]">$8.88</div><div class="metric-lbl">FY27E PF EPS</div></div>
  </div>
  <p style="text-align:center;font-size:10px;color:var(--text-muted);margin-top:6px;margin-bottom:0;opacity:0.6">Hover any metric for data source</p>
</div>

<section class="bluf">
<div class="wrap">
  <p><strong>The market is pricing KMB as if the Kenvue deal destroys value.</strong> <span style="font-size:11px;color:var(--text-muted)">[Computed]</span> Since announcement on Nov 3, 2025, KMB has traded sideways-to-down while Kenvue&rsquo;s Tylenol autism litigation noise, a $6.7B cash outlay, and an FTC second-request review have kept investors on the sidelines. At $96.59 &mdash; roughly 13x FY25 adjusted EPS of $7.53 &mdash; KMB trades at a ~30% discount to consumer staples peers (PG 23x, CL 24x, CHD 28x) despite a clear path to $10.85 pro-forma adjusted EPS by FY2029.</p>
  <p><strong>The deal math works &mdash; and the synergies arrive earlier than the Street models.</strong> <span style="font-size:11px;color:var(--text-muted)">[IR]</span> KMB has telegraphed aggressive day-1 execution: procurement and SG&amp;A overlap in personal care can be harvested within months of close, not years. Our base case front-loads the capture curve &mdash; <strong>25% of run-rate by end of FY26 stub year, 65% by FY27, 90% by FY28, 100% by FY29</strong> &mdash; with 80% ultimate realization ($1.68B). Under these assumptions, pro-forma EPS is <strong>+11% accretive in FY27</strong> (vs +1.5% on a traditional back-loaded curve) and +26% by FY29. Even under bear-case assumptions (50% capture, 200bps dis-synergies), the deal is accretive from FY27.</p>
  <p><strong>The combined asset is a different animal.</strong> <span style="font-size:11px;color:var(--text-muted)">[IR]</span> Ten $1B+ brands. Global scale in health, personal care, and wellness. $32B in combined revenue growing mid-single-digits with 22%+ adjusted EBITDA margins once synergies hit. Mike Hsu &mdash; who has already executed KMB&rsquo;s 2024 Transformation Initiative &mdash; remains CEO. The Tylenol overhang is real but overstated: Kenvue has won every major motion to date, and the revenue contribution from the contested product is &lt;5% of combined sales. For investors willing to look through 12 months of integration noise, this is a 30%+ return setup into FY2027.</p>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">Deal Snapshot</div>
  <h2>KMB / KVUE Transaction at a Glance</h2>
  <p class="lead">Announced November 3, 2025 &middot; Shareholder approvals January 29, 2026 &middot; FTC 2nd request pending &middot; Close targeted 2H 2026</p>

  <div class="deal-grid">
    <div class="deal-card">
      <div class="dlbl">Enterprise Value</div>
      <div class="dval gold">$48.7B</div>
      <div class="dsub">14.3x LTM adj EBITDA &middot; 8.8x with synergies</div>
    </div>
    <div class="deal-card">
      <div class="dlbl">Per-Share Consideration</div>
      <div class="dval">$21.01</div>
      <div class="dsub">$3.50 cash + 0.14625 KMB shares</div>
    </div>
    <div class="deal-card">
      <div class="dlbl">Pro Forma Ownership</div>
      <div class="dval">54% / 46%</div>
      <div class="dsub">KMB holders / KVUE holders</div>
    </div>
    <div class="deal-card">
      <div class="dlbl">Run-Rate Synergies</div>
      <div class="dval green">$2.1B</div>
      <div class="dsub">$1.9B cost + $0.5B revenue &minus; $0.3B reinvest</div>
    </div>
  </div>

  <div class="pnl-box">
    <h3>Pro-Forma Combined P&amp;L — Base Case Through FY2029E</h3>
    <table class="pnl-table" aria-label="Pro-forma combined P&amp;L FY2026E-FY2029E base case">
      <thead><tr><th>$ in millions</th><th>FY2026E</th><th>FY2027E</th><th>FY2028E</th><th>FY2029E</th></tr></thead>
      <tbody>
        <tr><td>KMB standalone revenue</td><td>16,580</td><td>16,910</td><td>17,250</td><td>17,595</td></tr>
        <tr><td>KVUE contribution (6-mo stub in &rsquo;26)</td><td>7,625</td><td>15,405</td><td>15,715</td><td>16,030</td></tr>
        <tr><td>Revenue dis-synergies</td><td>(75)</td><td>(155)</td><td>(80)</td><td>&mdash;</td></tr>
        <tr class="total"><td>Combined revenue</td><td>24,130</td><td>32,160</td><td>32,885</td><td>33,625</td></tr>
        <tr><td>Combined Adj EBITDA pre-syn</td><td>5,320</td><td>7,550</td><td>7,820</td><td>8,095</td></tr>
        <tr class="syn"><td>+ Realized synergies (front-loaded, 80% cap)</td><td>420</td><td>1,092</td><td>1,512</td><td>1,680</td></tr>
        <tr class="total"><td>Combined Adj EBITDA</td><td>5,740</td><td>8,642</td><td>9,332</td><td>9,775</td></tr>
        <tr><td>D&amp;A (incl PPA step-up)</td><td>(810)</td><td>(1,220)</td><td>(1,200)</td><td>(1,180)</td></tr>
        <tr><td>Interest expense (net)</td><td>(565)</td><td>(1,175)</td><td>(1,075)</td><td>(960)</td></tr>
        <tr><td>Pre-tax income</td><td>4,365</td><td>6,247</td><td>7,057</td><td>7,635</td></tr>
        <tr><td>Taxes @ 23%</td><td>(1,004)</td><td>(1,437)</td><td>(1,623)</td><td>(1,755)</td></tr>
        <tr class="total"><td>Adjusted net income</td><td>3,361</td><td>4,810</td><td>5,434</td><td>5,880</td></tr>
        <tr><td>Diluted shares (M)</td><td>474</td><td>542</td><td>542</td><td>542</td></tr>
        <tr class="total"><td>Pro-forma Adj EPS</td><td>$7.09</td><td>$8.88</td><td>$10.02</td><td>$10.85</td></tr>
        <tr><td>vs KMB standalone Adj EPS</td><td>$7.75</td><td>$8.00</td><td>$8.30</td><td>$8.60</td></tr>
        <tr class="syn"><td>Accretion / (Dilution)</td><td>(8.5%)</td><td>+11.0%</td><td>+20.7%</td><td>+26.2%</td></tr>
      </tbody>
    </table>
    <p class="pnl-note">Front-loaded synergy capture: 25% by end of FY26 stub (day-1 procurement + SG&amp;A), 65% by FY27, 90% by FY28, 100% by FY29. Accretive from FY27. Base case: 80% ultimate capture, 5.5% new-debt cost, 23% tax.</p>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">Investment Thesis</div>
  <h2>Three Pillars of the KMB / KVUE Setup</h2>
  <p class="lead">Asymmetric risk/reward: EPS power by FY2029 is ~$10.85 in base case vs Street ~$9.50. Getting paid to wait through integration noise.</p>
  <div class="thesis-grid">
    <div class="thesis-card">
      <div class="thesis-num">01</div>
      <h3>Synergy Capture Is Credible</h3>
      <p>$1.9B cost synergy target is ~6% of combined opex &mdash; in line with large CPG M&amp;A benchmarks (Procter/Gillette hit 7%). Half comes from procurement &amp; supply chain overlap in personal care, the rest from SG&amp;A and marketing consolidation. Mike Hsu&rsquo;s 2024 Transformation Initiative playbook translates directly.</p>
      <span class="thesis-stat green">$1.68B LCS base case</span>
    </div>
    <div class="thesis-card">
      <div class="thesis-num">02</div>
      <h3>Valuation Re-Rating Catalyst</h3>
      <p>KMB trades at 13x FY25 adj EPS vs PG 23x / CL 24x / CHD 28x. Post-close, with 40%+ of revenue from higher-growth consumer health (Tylenol, Zyrtec, Neutrogena, Aveeno), KMB should close ~50% of the peer-multiple gap. Every 1x of multiple expansion on FY27E EPS of $8.12 = ~$8 of upside.</p>
      <span class="thesis-stat steel">13x &rarr; 18x re-rate</span>
    </div>
    <div class="thesis-card">
      <div class="thesis-num">03</div>
      <h3>Tylenol Overhang &gt; Reality</h3>
      <p>KVUE has won every major Tylenol-autism MDL motion to date. Contested SKU is &lt;5% of combined revenue. Market is discounting Kenvue as if litigation is existential. Resolution (favorable ruling, settlement, or time decay) is a clean catalyst; even a $2B settlement would be absorbed in ~8 months of combined FCF.</p>
      <span class="thesis-stat gold">&lt;5% revenue exposure</span>
    </div>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">Research Portal</div>
  <h2>Complete Analysis</h2>
  <div class="module-grid">
    <a href="/lcs/kmb/memo.html" class="module-card">
      <h4>Investment Memo &rarr;</h4>
      <p>Deep-dive SCQA memo: deal rationale, synergy decomposition, integration risk, valuation framework, and Tylenol scenario analysis</p>
    </a>
    <a href="/lcs/kmb/presentation.html" class="module-card">
      <h4>Slide Deck &rarr;</h4>
      <p>14-slide institutional deck covering standalone financials, deal math, combined P&amp;L, and catalyst calendar</p>
    </a>
    <a href="/lcs/kmb/model.html" class="module-card">
      <h4>Interactive Merger Model &rarr;</h4>
      <p>Full accretion/dilution model with synergy-capture slider, cost-of-debt slider, combined P&amp;L through FY2029, sensitivity tables</p>
    </a>
    <a href="/lcs/kmb/consensus.html" class="module-card">
      <h4>Consensus View &rarr;</h4>
      <p>Sell-side ratings, price targets, peer comp vs PG/CL/CHD/UL, beat/miss history, and LCS variant perception</p>
    </a>
  </div>
</div>
</section>

</main>
<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Kimberly-Clark + Kenvue Merger Research Portal</p>
  <p>Sources: KMB 10-K FY2025, KVUE 10-K FY2025, Kimberly-Clark / Kenvue Merger Proxy (DEFM14A), Q3/Q4 2025 Earnings Releases, Street consensus. For internal use only.</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 14, 2026</p>
</footer>
<script>
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)});
function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
