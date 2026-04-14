export const bxIndexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Blackstone (BX) equity research portal: FRE algorithm, perpetual-capital flywheel, private wealth inflection, realization cycle. Levin Capital Strategies.">
<meta property="og:title" content="BX — The Alternative Asset Compounder | Levin Capital Strategies">
<meta property="og:description" content="LCS research on Blackstone: $1.28T AUM, $5.7B FRE, private wealth inflection, and realization cycle setup through FY2028.">
<meta property="og:type" content="website">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4B0;</text></svg>">
<title>BX &mdash; Blackstone | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
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
.nav-cta{padding:7px 18px;border-radius:6px;font-size:12px;font-weight:600;background:var(--navy);color:#fff;letter-spacing:0.3px}
.nav-cta:hover{background:var(--navy-soft)}

.hero{background:linear-gradient(135deg,#0F1729 0%,#1E3A5F 100%);border-bottom:1px solid var(--border);padding:120px 0 56px;color:#fff}
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

.aum-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:24px}
.aum-card{background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:20px}
.aum-card .alab{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--text-muted);font-weight:700;margin-bottom:6px}
.aum-card .aval{font-size:22px;font-weight:800;color:var(--heading);letter-spacing:-0.02em}
.aum-card .asub{font-size:11px;color:var(--text-muted);margin-top:4px}
.aum-card .aval.gold{color:var(--gold)}.aum-card .aval.green{color:var(--green)}.aum-card .aval.steel{color:var(--steel)}

.fre-box{background:var(--navy);border-radius:12px;padding:32px;color:#fff;margin-top:32px}
.fre-box h3{font-size:18px;font-weight:800;color:#fff;margin-bottom:18px}
.fre-table{width:100%;border-collapse:collapse;font-size:13px}
.fre-table th{text-align:right;padding:10px 8px;font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);font-weight:700;border-bottom:1px solid rgba(255,255,255,0.15)}
.fre-table th:first-child{text-align:left}
.fre-table td{padding:8px;color:rgba(255,255,255,0.88);border-bottom:1px solid rgba(255,255,255,0.06);text-align:right}
.fre-table td:first-child{text-align:left;color:#fff;font-weight:600}
.fre-table tr.total td{font-weight:800;color:var(--gold);border-top:1px solid rgba(255,255,255,0.15);padding-top:12px}
.fre-table tr.green td{color:#4ade80}
.fre-note{font-size:11px;color:rgba(255,255,255,0.5);margin-top:12px;font-style:italic}

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

.earnings-box{background:var(--navy);border-radius:12px;padding:32px;color:#fff;margin-bottom:48px}
.earnings-box-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px}
.earnings-box-header h3{font-size:18px;font-weight:800;color:#fff;letter-spacing:-0.02em}
.earnings-badge{padding:6px 14px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;background:rgba(184,151,62,0.2);color:var(--gold);border:1px solid rgba(184,151,62,0.3)}
.earnings-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
.earnings-stat{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:16px;text-align:center}
.earnings-stat .e-val{font-size:22px;font-weight:800;color:#fff}
.earnings-stat .e-val.gold{color:var(--gold)}
.earnings-stat .e-lbl{font-size:9px;text-transform:uppercase;letter-spacing:1.2px;color:rgba(255,255,255,0.5);margin-top:4px;font-weight:600}
.earnings-stat .e-delta{font-size:11px;font-weight:600;margin-top:4px;color:#4ade80}
.earnings-whisper{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.whisper-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:20px}
.whisper-card h4{font-size:12px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:1px;margin-bottom:12px}
.whisper-card p{font-size:13px;color:rgba(255,255,255,0.75);line-height:1.7}
.whisper-card strong{color:#fff}

.module-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px}
.module-card{display:block;padding:24px;border:1px solid var(--border);border-radius:10px;transition:all 0.2s}
.module-card:hover{border-color:var(--gold);box-shadow:0 2px 12px rgba(0,0,0,0.04)}
.module-card h4{font-size:14px;font-weight:700;color:var(--heading);margin-bottom:4px}
.module-card p{font-size:12px;color:var(--text-muted)}

.quote-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.quote-card{background:var(--surface);border-radius:10px;padding:24px;position:relative}
.quote-card::after{content:'"';position:absolute;right:16px;top:8px;font-size:40px;color:var(--border);font-family:serif}
.quote-firm{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px}
.quote-firm.bmo{color:var(--forest)}.quote-firm.opco{color:var(--steel)}.quote-firm.morgan{color:var(--gold)}
.quote-card em{font-size:13px;color:var(--heading);font-style:italic;line-height:1.6;display:block;margin-bottom:8px}
.quote-meta{font-size:11px;color:var(--text-muted)}

footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light)}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}

@media(max-width:900px){.metrics{grid-template-columns:repeat(4,1fr)}.thesis-grid,.quote-grid,.aum-grid{grid-template-columns:1fr 1fr}.module-grid{grid-template-columns:1fr}.earnings-grid{grid-template-columns:repeat(2,1fr)}.earnings-whisper{grid-template-columns:1fr}}
@media(max-width:600px){.metrics{grid-template-columns:repeat(2,1fr)}.aum-grid{grid-template-columns:1fr}.nav-links,.nav-ticker{display:none}}

.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted);font-family:Inter,sans-serif;transition:all 0.2s;line-height:1}
.dark-toggle:hover{border-color:var(--gold);color:var(--gold)}
html.dark{--bg:#0F1218;--surface:#1A1E27;--surface-2:#242830;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.9);border-bottom-color:var(--border)}
html.dark .metric,html.dark .aum-card{background:var(--bg)}
html.dark .metrics{background:var(--border)}
html.dark .thesis-card,html.dark .module-card,html.dark .quote-card{background:var(--surface);border-color:var(--border)}
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
    <a href="/lcs/bx/" class="active">Overview</a>
    <a href="/lcs/bx/memo.html">Memo</a>
    <a href="/lcs/bx/presentation.html">Deck</a>
    <a href="/lcs/bx/model.html">Model</a>
    <a href="/lcs/bx/consensus.html">Consensus</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode" title="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>BX</strong> $110</span>
    <a href="/lcs/bx/model.html" class="nav-cta">View Model</a>
  </div>
</div>
</nav>

<main id="main-content">

<section class="hero">
  <div class="wrap">
    <div class="hero-eyebrow">NYSE &bull; Alternative Asset Management &bull; Compounder Setup</div>
    <h1>Blackstone: The <span>$1.28 Trillion</span> Perpetual-Capital Compounder</h1>
    <p class="hero-subtitle">The world&rsquo;s largest alts platform, with $240B of 2025 inflows and four distinct growth engines compounding at scale. Private wealth inflection, realization cycle optionality, and FRE margin expansion set up a ~36% total-return opportunity into FY27.</p>
    <div class="hero-badges">
      <span class="hero-badge street" title="Street consensus PT ~$159, 17 analysts [Consensus]">STREET PT $159 (+45%)</span>
      <span class="hero-badge lcs" title="LCS base case: 22x FY27E DE $6.80 [Computed]">LCS PT $150 (+36%) &middot; BUY</span>
    </div>
  </div>
</section>

<div class="metrics-wrap wrap">
  <div class="metrics">
    <div class="metric"><div class="metric-val" title="NYSE close, April 10, 2026 [Market]">$110</div><div class="metric-lbl">Price</div></div>
    <div class="metric"><div class="metric-val gold" title="$110 x ~1.27B diluted shares [Computed]">$140B</div><div class="metric-lbl">Market Cap</div></div>
    <div class="metric"><div class="metric-val steel" title="Total AUM at 12/31/2025 [10-K]">$1.28T</div><div class="metric-lbl">Total AUM</div></div>
    <div class="metric"><div class="metric-val" title="Fee-earning AUM at 12/31/2025 [10-K]">$922B</div><div class="metric-lbl">FEAUM</div></div>
    <div class="metric"><div class="metric-val green" title="FY2025 FRE up 9% YoY [10-K]">$5.7B</div><div class="metric-lbl">FY25 FRE</div></div>
    <div class="metric"><div class="metric-val forest" title="FY2025 DE per share, up 20% YoY [10-K]">$5.57</div><div class="metric-lbl">FY25 DE/Sh</div></div>
    <div class="metric"><div class="metric-val gold" title="LCS FY2027E distributable earnings per share [Estimated]">$6.80</div><div class="metric-lbl">FY27E DE/Sh</div></div>
  </div>
  <p style="text-align:center;font-size:10px;color:var(--text-muted);margin-top:6px;margin-bottom:0;opacity:0.6">Hover any metric for data source</p>
</div>

<section class="bluf">
<div class="wrap">
  <p><strong>Blackstone is the highest-quality compounder in alternative asset management, priced as if it were a pure-play private credit shop.</strong> <span style="font-size:11px;color:var(--text-muted)">[Computed]</span> At $110, BX trades at ~20x FY25 distributable earnings of $5.57 &mdash; broadly in line with Apollo (11.7x forward), KKR (14.0x), and Ares (17.3x) &mdash; despite a materially more diversified fee base, the industry&rsquo;s largest perpetual-capital pool, and the only platform with commercial scale across real estate, credit, private equity, and infrastructure. The ~12% YTD drawdown reflects sector-wide private-credit concerns that materially underweight BX&rsquo;s structural advantages, where credit + insurance represents just 34% of fee-earning AUM.</p>
  <p><strong>The FRE algorithm is accelerating.</strong> <span style="font-size:11px;color:var(--text-muted)">[10-K]</span> Management fees grew 12% to $8B in 2025; FRE hit $5.7B (+9%) with margin at a full-year record; AUM grew 13% to $1.275T. Inflows of $240B in 2025 set a record and came from all three channels &mdash; institutional, private wealth, and insurance. Blackstone Infrastructure is the fastest-growing vehicle in the firm&rsquo;s history; BCRED took in $14B in retail credit inflows; BXPE became the first private-markets product built natively for the wealth channel. Four independent compounding engines run in parallel, each large enough to move the needle.</p>
  <p><strong>The realization cycle is a loaded spring.</strong> <span style="font-size:11px;color:var(--text-muted)">[IR]</span> Net accrued performance compensation sits at $6.7B &mdash; among the largest coiled realization pools BX has carried. LBO exit activity bottomed in mid-2024 and is re-accelerating into 2026 as financing spreads tighten and strategic M&amp;A reopens. Realized performance fees flow directly to distributable earnings and pass through to shareholders at an 85%+ payout ratio. Our FY27E DE of $6.80/share is ~10% above consensus; applying a 22x multiple anchored to the company&rsquo;s historical FRE trading range yields a $150 PT with ~36% price upside plus a 3.2% dividend yield for a ~40% total-return setup.</p>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">AUM &amp; Segment Snapshot</div>
  <h2>The Four Engines at Scale</h2>
  <p class="lead">Each of Blackstone&rsquo;s segments is larger than most standalone asset managers. Diversification is not a narrative &mdash; it is the moat.</p>

  <div class="aum-grid">
    <div class="aum-card">
      <div class="alab">Real Estate</div>
      <div class="aval steel">$315B</div>
      <div class="asub">BREIT, BREP, BPP &middot; Values +1.5% FY25</div>
    </div>
    <div class="aum-card">
      <div class="alab">Private Equity</div>
      <div class="aval gold">$348B</div>
      <div class="asub">BCP, BXG, Tactical Opps, BXPE</div>
    </div>
    <div class="aum-card">
      <div class="alab">Credit &amp; Insurance</div>
      <div class="aval green">$436B</div>
      <div class="asub">BCRED, BXSL, CLOs, Insurance SMA</div>
    </div>
    <div class="aum-card">
      <div class="alab">Multi-Asset + Infra</div>
      <div class="aval">$176B</div>
      <div class="asub">BAAM, Infrastructure (fastest-grow)</div>
    </div>
  </div>

  <div class="fre-box">
    <h3>FRE &amp; DE Trajectory &mdash; Base Case Through FY2028E</h3>
    <table class="fre-table" aria-label="Fee-related earnings and distributable earnings trajectory">
      <thead><tr><th>$ in billions except per share</th><th>FY24A</th><th>FY25A</th><th>FY26E</th><th>FY27E</th><th>FY28E</th></tr></thead>
      <tbody>
        <tr><td>Management fees</td><td>7.1</td><td>8.0</td><td>8.9</td><td>9.9</td><td>11.0</td></tr>
        <tr><td>Fee-related performance revenues</td><td>1.4</td><td>1.6</td><td>1.9</td><td>2.3</td><td>2.6</td></tr>
        <tr><td>Total fee revenues</td><td>8.5</td><td>9.6</td><td>10.8</td><td>12.2</td><td>13.6</td></tr>
        <tr class="total"><td>Fee-related earnings (FRE)</td><td>5.2</td><td>5.7</td><td>6.5</td><td>7.5</td><td>8.5</td></tr>
        <tr><td>FRE margin</td><td>61%</td><td>59%</td><td>60%</td><td>61%</td><td>62%</td></tr>
        <tr><td>Net realizations</td><td>0.7</td><td>1.4</td><td>2.2</td><td>2.8</td><td>3.2</td></tr>
        <tr class="total"><td>Distributable earnings (DE)</td><td>5.9</td><td>7.1</td><td>8.1</td><td>9.5</td><td>10.8</td></tr>
        <tr><td>Diluted shares (M)</td><td>1,266</td><td>1,275</td><td>1,285</td><td>1,295</td><td>1,305</td></tr>
        <tr class="total green"><td>DE per share</td><td>$4.65</td><td>$5.57</td><td>$6.30</td><td>$6.80 (FY27E)</td><td>$8.25</td></tr>
        <tr><td>Dividend per share (85% payout)</td><td>$3.95</td><td>$4.73</td><td>$5.35</td><td>$5.78</td><td>$7.01</td></tr>
      </tbody>
    </table>
    <p class="fre-note">Base case: 11% management fee CAGR through FY28E driven by private wealth, infrastructure, and credit; FRE margin expansion to 62% on platform scale; normalized realization environment from 2H26. Interactive model allows stress-testing.</p>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">Investment Thesis</div>
  <h2>Three Pillars of the BX Setup</h2>
  <p class="lead">FRE compounding, private wealth inflection, and a primed realization cycle combine into an asymmetric risk/reward profile.</p>

  <div class="thesis-grid">
    <div class="thesis-card">
      <div class="thesis-num">01</div>
      <h3>Perpetual-Capital Flywheel</h3>
      <p>Over 40% of BX&rsquo;s AUM now sits in perpetual-capital vehicles (BREIT, BCRED, BXSL, BXPE, infrastructure). Perpetual AUM generates recurring fees without reliance on fund cycles &mdash; transforming FRE from lumpy to subscription-like. As perpetual mix grows, the right multiple is not the traditional alt-mgr discount but a premium toward asset-light compounders.</p>
      <span class="thesis-stat green">&gt;40% Perpetual AUM</span>
    </div>
    <div class="thesis-card">
      <div class="thesis-num">02</div>
      <h3>Private Wealth Inflection</h3>
      <p>$240B of 2025 inflows included record contributions from private wealth. BXPE, BXINFRA, and an expanding credit ladder address a $70T+ wealth TAM only ~3% penetrated by alternatives. Every 100bps of incremental allocation = ~$700B industry flow; BX captures disproportionate share as the brand leader with distribution scale.</p>
      <span class="thesis-stat steel">$70T Wealth TAM</span>
    </div>
    <div class="thesis-card">
      <div class="thesis-num">03</div>
      <h3>Realization Cycle Setup</h3>
      <p>Net accrued performance compensation sits at $6.7B &mdash; among the largest coiled realization pools BX has carried. LBO exit activity bottomed in mid-2024 and is re-accelerating into 2026. Realizations flow directly through to DE at an 85%+ payout ratio. The first quarter with &gt;$1B net realized performance is the clean re-rating catalyst.</p>
      <span class="thesis-stat gold">$6.7B Accrued</span>
    </div>
  </div>
</div>
</section>

<section class="section" style="padding-top:0">
<div class="wrap">
  <div class="earnings-box">
    <div class="earnings-box-header">
      <h3>Q1 2026 Earnings Setup</h3>
      <span class="earnings-badge">Reports April 24</span>
    </div>
    <div class="earnings-grid">
      <div class="earnings-stat">
        <div class="e-val gold">$1.55</div>
        <div class="e-lbl">Q1 DE/Sh Est.</div>
        <div class="e-delta">+18% YoY</div>
      </div>
      <div class="earnings-stat">
        <div class="e-val">$55B</div>
        <div class="e-lbl">Q1 Inflows Est.</div>
        <div class="e-delta">+5% YoY</div>
      </div>
      <div class="earnings-stat">
        <div class="e-val gold">$1.3T</div>
        <div class="e-lbl">Q1 AUM Est.</div>
        <div class="e-delta">+12% YoY</div>
      </div>
      <div class="earnings-stat">
        <div class="e-val">60%</div>
        <div class="e-lbl">FRE Margin Est.</div>
        <div class="e-delta">+100bps YoY</div>
      </div>
    </div>
    <div class="earnings-whisper">
      <div class="whisper-card">
        <h4>What to Watch</h4>
        <p><strong>Private wealth inflows</strong> by channel (BREIT, BCRED, BXPE) are the single most important indicator &mdash; sequential acceleration validates the &ldquo;retail alts&rdquo; thesis. <strong>Realization commentary</strong> &mdash; any signal of $1B+ quarterly net realizations would front-run FY27 consensus. Watch for <strong>insurance AUM</strong> updates and new sub-advisory mandates.</p>
      </div>
      <div class="whisper-card">
        <h4>Key Risks into Print</h4>
        <p><strong>BREIT redemption trends</strong> &mdash; any sequential increase reopens 2023-style overhang. <strong>Private credit quality</strong> &mdash; BCRED PIK ratio and non-accrual detail are in focus. <strong>Real estate marks</strong> &mdash; Q1 typically the toughest quarter for BREIT valuations; a flat-to-down print would pressure the stock near-term but is priced in.</p>
      </div>
    </div>
  </div>
</div>
</section>

<section class="section">
<div class="wrap">
  <div class="section-label">Research Portal</div>
  <h2>Complete Analysis</h2>
  <div class="module-grid">
    <a href="/lcs/bx/memo.html" class="module-card">
      <h4>Investment Memo &rarr;</h4>
      <p>SCQA deep-dive on FRE trajectory, AUM algorithm, private wealth opportunity, realization cycle setup, and valuation framework</p>
    </a>
    <a href="/lcs/bx/presentation.html" class="module-card">
      <h4>Slide Deck &rarr;</h4>
      <p>14-slide institutional deck: segment analysis, peer comp, valuation, and catalyst calendar</p>
    </a>
    <a href="/lcs/bx/model.html" class="module-card">
      <h4>Interactive Model &rarr;</h4>
      <p>FRE / DE / AUM model with inflow, margin, and realization sliders; Bull/Base/Street/Bear presets; DCF cross-check</p>
    </a>
    <a href="/lcs/bx/consensus.html" class="module-card">
      <h4>Consensus View &rarr;</h4>
      <p>Analyst ratings, PTs, peer comp vs APO/KKR/ARES/OWL, beat-miss history, and LCS variant perception</p>
    </a>
  </div>
</div>
</section>

<section class="section" style="background:var(--surface);border-top:1px solid var(--border-light);border-bottom:1px solid var(--border-light)">
<div class="wrap">
  <div class="section-label">Sell-Side Views</div>
  <h2>What the Street Is Saying</h2>
  <div class="quote-grid" style="margin-top:24px">
    <div class="quote-card">
      <div class="quote-firm bmo">BMO Capital Markets &bull; Outperform &bull; PT $132</div>
      <em>&ldquo;We are raising our price target to $132. Blackstone&rsquo;s perpetual-capital mix and private-wealth distribution engine warrant a premium multiple. The realization cycle remains the key variable; we expect 2026 to mark the inflection.&rdquo;</em>
      <div class="quote-meta">Etienne Ricard &middot; Outperform &middot; PT $132</div>
    </div>
    <div class="quote-card">
      <div class="quote-firm opco">Oppenheimer &bull; Outperform &bull; PT $155</div>
      <em>&ldquo;We upgrade BX to Outperform. Fundamentals have not deteriorated despite the sector drawdown. Management fee growth of 12% and record FRE margin point to a platform gaining share, not losing it.&rdquo;</em>
      <div class="quote-meta">Chris Kotowski &middot; Outperform &middot; PT $155</div>
    </div>
    <div class="quote-card">
      <div class="quote-firm morgan">Morgan Stanley &bull; Overweight &bull; PT $165</div>
      <em>&ldquo;Blackstone is our top pick in alternative asset managers. The combination of scale, distribution, and perpetual-capital infrastructure creates an economic moat we view as unreplicable. At 20x DE, the risk/reward is highly asymmetric.&rdquo;</em>
      <div class="quote-meta">Michael Cyprys &middot; Overweight &middot; PT $165</div>
    </div>
  </div>
</div>
</section>

</main>
<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Blackstone (BX) Equity Research Portal</p>
  <p>Sources: BX 10-K FY2025, Q4 2025 Earnings Release &amp; Supplemental Financial Data, Q4 2025 Earnings Call Transcript, FactSet consensus, BMO / Oppenheimer / Morgan Stanley research. For internal use only.</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 14, 2026</p>
</footer>
<script>
window.addEventListener('scroll',function(){document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)});
function toggleDark(){document.documentElement.classList.toggle('dark');var isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');var b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
