export const bxQuestionsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Blackstone (BX) — 20 management questions for buy-side diligence calls. Strategy, capital allocation, competitive, and risk probes.">
<title>BX Questions for Management | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Merriweather:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x2753;</text></svg>">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#FFFFFF;--surface:#F8F9FB;--surface-2:#F1F3F6;--navy:#0F1729;--navy-soft:#1E3A5F;--border:#E2E5EB;--border-light:#ECEEF2;--gold:#B8973E;--gold-soft:rgba(184,151,62,0.08);--steel:#2C5F7C;--green:#1A7A3A;--red:#C0392B;--forest:#1A5632;--text:#2D3748;--text-muted:#6B7280;--heading:#111827}
body{font-family:'Inter',system-ui,sans-serif;background:var(--bg);color:var(--text);line-height:1.7}
.wrap{max-width:980px;margin:0 auto;padding:0 32px}
nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 0;background:rgba(255,255,255,0.92);backdrop-filter:blur(16px);border-bottom:1px solid var(--border-light)}
nav .wrap{display:flex;justify-content:space-between;align-items:center;max-width:1080px}
.nav-brand{font-size:11px;letter-spacing:3px;color:var(--gold);text-transform:uppercase;font-weight:700}
.nav-links{display:flex;gap:16px}
.nav-links a{font-size:12px;color:var(--text-muted);font-weight:500}
.nav-links a.active,.nav-links a:hover{color:var(--heading)}
.nav-right{display:flex;align-items:center;gap:20px}
.nav-ticker{font-size:13px;color:var(--text-muted)}
.nav-ticker strong{color:var(--heading)}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 8px;font-size:12px;cursor:pointer;color:var(--text-muted)}
.hero{padding:110px 0 40px;border-bottom:1px solid var(--border-light)}
.eyebrow{font-size:11px;text-transform:uppercase;letter-spacing:3px;color:var(--gold);font-weight:700;margin-bottom:10px}
.hero h1{font-size:32px;font-weight:800;color:var(--heading);letter-spacing:-0.02em;margin-bottom:14px}
.hero p{color:var(--text-muted);max-width:720px;font-size:15px}
.hero-actions{display:flex;gap:10px;margin-top:20px}
.hero-btn{padding:9px 18px;border-radius:6px;font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;background:var(--navy);color:#fff;cursor:pointer;border:none;font-family:Inter,sans-serif}
.hero-btn:hover{background:var(--navy-soft)}
.hero-btn.gold{background:var(--gold)}
.hero-btn.gold:hover{background:#9A7D2E}
.hero-btn.outline{background:none;border:1px solid var(--border);color:var(--text)}
.hero-btn.outline:hover{border-color:var(--gold);color:var(--gold)}

.category{margin-top:48px}
.category-header{display:flex;align-items:baseline;gap:14px;padding-bottom:12px;border-bottom:2px solid var(--border);margin-bottom:24px}
.category-bar{width:6px;height:28px;border-radius:3px}
.cat-strategy .category-bar{background:var(--forest)}
.cat-capital .category-bar{background:var(--steel)}
.cat-competitive .category-bar{background:var(--gold)}
.cat-risk .category-bar{background:var(--red)}
.cat-variant .category-bar{background:var(--navy)}
.category-title{font-size:22px;font-weight:800;color:var(--heading);letter-spacing:-0.01em;flex:1}
.category-count{font-size:11px;color:var(--text-muted);font-weight:600;letter-spacing:0.5px}

.question{background:var(--bg);border:1px solid var(--border);border-radius:10px;margin-bottom:16px;overflow:hidden;transition:all 0.15s}
.question:hover{border-color:var(--gold);box-shadow:0 2px 12px rgba(0,0,0,0.04)}
.question-header{padding:20px 24px;cursor:pointer;display:flex;align-items:flex-start;gap:14px}
.q-num{font-size:13px;font-weight:800;color:var(--gold);font-family:'JetBrains Mono',monospace;min-width:32px;padding-top:2px}
.q-body{flex:1}
.q-text{font-size:15px;font-weight:600;color:var(--heading);line-height:1.55}
.q-toggle{font-size:18px;color:var(--text-muted);transition:transform 0.2s;padding-top:2px}
.question.expanded .q-toggle{transform:rotate(45deg)}
.q-detail{display:none;padding:0 24px 24px 70px;border-top:1px solid var(--border-light);margin-top:8px;padding-top:16px}
.question.expanded .q-detail{display:block}
.q-meta{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:8px}
.q-meta-block{background:var(--surface);border-radius:8px;padding:14px 16px}
.q-meta-block h5{font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--gold);font-weight:700;margin-bottom:6px}
.q-meta-block.redflag h5{color:var(--red)}
.q-meta-block p{font-size:13px;color:var(--text);line-height:1.6}
.q-tag{display:inline-block;font-size:9px;font-weight:700;padding:3px 8px;border-radius:3px;margin-top:8px;text-transform:uppercase;letter-spacing:1px}
.q-tag.priority-high{background:rgba(192,57,43,0.1);color:var(--red)}
.q-tag.priority-med{background:rgba(184,151,62,0.1);color:var(--gold)}
.q-tag.priority-low{background:rgba(44,95,124,0.1);color:var(--steel)}

.intro-box{background:var(--surface);border-left:4px solid var(--gold);padding:20px 24px;border-radius:0 10px 10px 0;margin-bottom:32px;margin-top:40px}
.intro-box h3{font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:var(--gold);font-weight:700;margin-bottom:10px}
.intro-box p{font-size:14px;color:var(--text);line-height:1.7}

footer{padding:40px 0;text-align:center;border-top:1px solid var(--border-light);margin-top:60px}
.footer-line{width:40px;height:2px;background:var(--gold);margin:0 auto 16px}
footer p{font-size:11px;color:var(--text-muted);line-height:1.8}

@media print{
  nav,.hero-actions,.dark-toggle{display:none!important}
  .question{page-break-inside:avoid;border:1px solid #ccc!important;box-shadow:none!important}
  .q-detail{display:block!important;padding:0 24px 20px 70px}
  .question .q-toggle{display:none}
  body{font-size:11pt}
  .hero{padding:20px 0}
}

@media(max-width:700px){
  .q-meta{grid-template-columns:1fr}
  .hero h1{font-size:26px}
}

html.dark{--bg:#0F1218;--surface:#1A1E27;--surface-2:#242830;--border:#2D3340;--border-light:#252A35;--text:#D1D5DB;--text-muted:#9CA3AF;--heading:#F3F4F6}
html.dark body{background:var(--bg)}
html.dark nav{background:rgba(15,18,24,0.92);border-bottom-color:var(--border)}
html.dark .question,html.dark .q-meta-block,html.dark .intro-box{background:var(--surface);border-color:var(--border)}
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
    <a href="/lcs/bx/consensus.html">Consensus</a>
    <a href="/lcs/bx/questions.html" class="active">Questions</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>BX</strong> $110</span>
  </div>
</div>
</nav>

<main id="main-content">

<section class="hero">
<div class="wrap">
  <div class="eyebrow">Diligence Toolkit &bull; Management Questions</div>
  <h1>20 Questions for Blackstone Management</h1>
  <p>Hand-crafted probes designed for buy-side diligence, conference calls, and 1:1 meetings with BX leadership. Each question has a rationale tied to our thesis and a "red-flag answer" marker indicating what a non-answer sounds like. Click any question to expand.</p>
  <div class="hero-actions">
    <button class="hero-btn gold" onclick="expandAll()">Expand All</button>
    <button class="hero-btn outline" onclick="collapseAll()">Collapse All</button>
    <button class="hero-btn outline" onclick="window.print()">Export PDF</button>
  </div>
</div>
</section>

<div class="wrap">

<div class="intro-box">
  <h3>How to Use This Page</h3>
  <p>These are <strong>not softball questions</strong>. They are designed to surface the gap between management narrative and reality. Bring 3-5 of the highest-priority questions to your meeting. Listen for hedging, deflection, or over-rehearsed answers &mdash; the red-flag markers indicate what to watch for. Click the <code>+</code> icon on any question to see the rationale and red-flag answer.</p>
</div>

<!-- STRATEGY -->
<section class="category cat-strategy">
  <div class="category-header">
    <div class="category-bar"></div>
    <h2 class="category-title">Strategy &amp; Platform</h2>
    <span class="category-count">4 questions</span>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">01</span>
      <div class="q-body">
        <div class="q-text">Given that ~40% of AUM is now perpetual, how do you think about the right long-term mix between episodic fund raising and perpetual products? What's the endpoint &mdash; 60%? 75%?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Perpetual-capital mix is the single biggest structural driver of your multiple re-rating thesis. Every 5% shift toward perpetual is worth roughly 1x on the forward P/DE multiple. Management's endpoint view determines whether the stock is a 20x compounder or a 25x compounder over 5 years.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"It depends on market conditions" or "We don't target a specific mix." Translation: no conviction on the flywheel, which undermines the bull case. You want management to articulate an explicit endpoint (e.g., 60%) and the timeline to get there.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">02</span>
      <div class="q-body">
        <div class="q-text">Private wealth went from 8% of inflows to 25% in a decade. What's the realistic ceiling for this channel &mdash; and when do we hit it?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>$70T wealth TAM at ~3% penetration is the bull case's foundation. But there's a ceiling &mdash; regulatory, liquidity structure, or investor sophistication. Management's own view of the ceiling (and when it's reached) sets the growth duration for the thesis.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"The opportunity is unlimited." It's not. Every channel has saturation. Good management will acknowledge a 35-40% ceiling with a 7-10 year ramp. If they dodge, they're selling hopium.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">03</span>
      <div class="q-body">
        <div class="q-text">How much of 2025 inflow growth came from <em>net-new products</em> (BXPE, BXINFRA) vs scaling existing vehicles? Which is the more durable driver going forward?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>New product launches fuel one-time flow spikes; scaling existing vehicles is the durable moat. The FY25 $240B inflow figure likely had disproportionate new-product contribution. We want to disaggregate to understand the run-rate.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"It's balanced across the portfolio." Non-answer. Push for specific dollar amounts or percentages. If they won't disaggregate, the new-product tailwind is masking weaker base trends.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">04</span>
      <div class="q-body">
        <div class="q-text">At what perpetual-capital mix does the FRE volatility profile justify a true compounder multiple of 25x+ DE? Is it 50%? 60%? Never?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Forces management to commit to the valuation argument they've been implying. If they believe in their own flywheel, they should have a specific multiple target at a specific mix. Reveals conviction.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We don't manage for the multiple." Yes, but they should have a view of what fair value looks like in 2028 or they can't allocate capital intelligently. Dodge = signals low conviction.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CAPITAL ALLOCATION -->
<section class="category cat-capital">
  <div class="category-header">
    <div class="category-bar"></div>
    <h2 class="category-title">Capital Allocation</h2>
    <span class="category-count">4 questions</span>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">05</span>
      <div class="q-body">
        <div class="q-text">You've paid out 85% of DE for 3 consecutive years. Why not 95%+ given your asset-light capex profile? What drives the retained 15%?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Retained capital at an asset manager is a strategic statement. It's either for seeding new funds (productive), opportunistic M&amp;A (interesting), or balance-sheet protection (defensive). The answer reveals priorities.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We maintain flexibility." Vague. Push for specific uses: seed investments by dollar size, M&amp;A target size, working capital needs. If they can't specify, the 15% is just accumulating.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">06</span>
      <div class="q-body">
        <div class="q-text">Does buying back your own stock at 15x DE create more value than paying cash dividends? What's your hurdle rate for deciding between the two?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>BX has historically emphasized dividends. At cycle-trough valuations, buybacks dominate mathematically. Testing whether management has the discipline to flex the mix or is dividend-dogmatic.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"Our capital return policy hasn't changed." Should change when multiple compresses 30%. Inflexibility here is a mild bear signal.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">07</span>
      <div class="q-body">
        <div class="q-text">How do you think about building insurance and credit capabilities <em>organically</em> vs acquiring a life-insurer platform (like APO / Athene) vs continuing with sub-advisory partnerships?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Apollo's Athene acquisition is the closest competitive parallel. BX has resisted going the insurance-carrier route. Is this by conviction (capital efficiency) or by default (no opportunity)? The difference matters for the 5-year growth runway.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We'd consider the right opportunity." Meaningless. Push for their view on whether carrier ownership is strategically necessary. If unclear, they may be behind.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">08</span>
      <div class="q-body">
        <div class="q-text">Blackstone seeds $3B+ of its own capital into new funds annually. Does this scale up as the platform grows, or plateau?</div>
        <span class="q-tag priority-low">Standard</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Seed capital is a balance-sheet-intensive commitment. If it scales linearly with new products, that's a modest drag on DE. If it plateaus, BX remains asset-light as promised.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"Depends on opportunities." Fair. But they should have a framework on size relative to total AUM. Lack of framework = under-managed.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMPETITIVE -->
<section class="category cat-competitive">
  <div class="category-header">
    <div class="category-bar"></div>
    <h2 class="category-title">Competitive Dynamics</h2>
    <span class="category-count">4 questions</span>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">09</span>
      <div class="q-body">
        <div class="q-text">Apollo is growing credit AUM 25%+ YoY with 86% of FEAUM in credit. Do you cede the pure-play credit position or compete head-on &mdash; and how?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>BX credit is "only" 34% of FEAUM. Strategic question: is that by design (diversification moat) or by lagging execution (Apollo beat you to it)? Management's framing reveals whether credit is a growth priority or an accepted underweight.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We compete differently." Vague deflection. Press for: credit AUM growth targets, market-share aspirations, specific origination advantages. Non-answer suggests they've ceded.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">10</span>
      <div class="q-body">
        <div class="q-text">Every major wealth platform (Morgan Stanley, UBS, Goldman PWM) is increasing alts allocations. Does this <em>commoditize</em> distribution, or does your brand moat hold?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Distribution scale is one of the four LCS thesis pillars. If wealth platforms increasingly allocate to a multi-manager model, BX brand equity is less valuable. Management needs to articulate why advisors pick BX specifically, not just "alts."</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We have the best brand in alts." True but insufficient. Push for specific metrics: advisor retention, share of wallet on platforms, mindshare vs competitors. Generic answers = brand may be eroding.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">11</span>
      <div class="q-body">
        <div class="q-text">BREIT's redemption gates were stress-tested in 2023. What's the <em>honest</em> retrospective &mdash; and what structural changes are now in place?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Biggest near-term bear-case trigger. Management's willingness to acknowledge what went wrong in 2023 signals institutional maturity. Defensive answers signal the risk isn't priced in.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"The gates worked as designed." Partially true but dismissive. Push for what they learned about investor behavior, communication failures, and specific changes (liquidity buffers, pacing mechanisms, new disclosures).</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">12</span>
      <div class="q-body">
        <div class="q-text">Infrastructure is your fastest-growing vehicle. Brookfield has 20 years of infra DNA. How do you compete on <em>deal flow</em>, not just fundraising?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Fundraising scales easily at BX. Deal sourcing doesn't. Brookfield's relationships with governments, utilities, and operators are decades deep. Management needs to articulate how BX catches up on origination &mdash; not just capital formation.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We bring capital scale." Capital is necessary but not sufficient. If they can't name 2-3 specific sourcing advantages (hires, partnerships, proprietary deals), infrastructure returns will lag.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- RISK -->
<section class="category cat-risk">
  <div class="category-header">
    <div class="category-bar"></div>
    <h2 class="category-title">Risk &amp; Downside Scenarios</h2>
    <span class="category-count">5 questions</span>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">13</span>
      <div class="q-body">
        <div class="q-text">If we're sitting here in 2028 and DE is flat-to-down for 3 years, <em>what went wrong</em>? Force us to pre-articulate your bear case.</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Management teams that can pre-articulate their own bear case are materially more trustworthy than those who can't. This is the highest-information-content question in the set.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We feel great about the business." Automatic disqualification. Every honest management team has 2-3 scenarios that keep them up at night. Refusal to name them = they haven't thought about it, or they have and won't share. Either is bad.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">14</span>
      <div class="q-body">
        <div class="q-text">Which single private-credit exposure or segment keeps the CRO up at night, and how is it hedged?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Moves past platitudes about "disciplined underwriting" into specifics. Whether they can name a vulnerable exposure (and what they're doing about it) reveals risk culture.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"Our portfolio is diversified." Generic. Good answer names a specific sector, geography, or vintage that's being watched. Generic answer = they'll find out when the market does.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">15</span>
      <div class="q-body">
        <div class="q-text">How much of FY25 performance revenue came from real-estate <em>marks</em> vs actual realizations? If marks normalize, what's the hit to forward DE?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Mark-based performance comp is lower quality than realized. If 2025 was disproportionately mark-driven, the realization-cycle thesis is weaker than it looks. This pressure-tests the coiled-spring narrative.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We don't disclose that breakdown." Partial truth. Push for directional color. If they won't even directionalize, the mix is probably less realization-heavy than bulls assume.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">16</span>
      <div class="q-body">
        <div class="q-text">At what leverage level across BX's combined credit book would you <em>pull back</em> on new originations even with deal supply?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Discipline test. Credit platforms that mechanically deploy in all conditions produce weak vintages. Management's articulated line-in-the-sand reveals underwriting standards.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We always maintain underwriting discipline." Fine. Now name the number. If they can't, there isn't one.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">17</span>
      <div class="q-body">
        <div class="q-text">Tail risk: a 2008-style dislocation hits in 2027. What happens to perpetual-capital inflows, realizations, and management fees &mdash; in that order?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Forces management through the downside waterfall quantitatively. Perpetual-capital stickiness is a core thesis claim &mdash; this tests whether they believe it under duress.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"Our 2008-2009 experience was...." Historical deflection. Push for specific numerical response about today's business: what's the management-fee floor? When do redemptions overwhelm gates?</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VARIANT PERCEPTION -->
<section class="category cat-variant">
  <div class="category-header">
    <div class="category-bar"></div>
    <h2 class="category-title">Variant Perception &mdash; Questions the Street Won't Ask</h2>
    <span class="category-count">3 questions</span>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">18</span>
      <div class="q-body">
        <div class="q-text">If you were Apollo's CEO for a day, what's the single most important competitive move <em>Blackstone</em> could make against them over the next 24 months?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Role reversal forces management to reveal competitive vulnerabilities they'd otherwise deflect. Best-possible answer names something concrete they're worried about. Elicits honest strategic thinking.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"We focus on our own business." Weak. Strong management can role-play the adversary. Refusal = unwillingness to engage honestly about competitive pressure.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">19</span>
      <div class="q-body">
        <div class="q-text">You've said insurance is a "multi-decade opportunity." What does insurance AUM look like in 2030 &mdash; in dollars &mdash; and how much is in-house vs sub-advisory?</div>
        <span class="q-tag priority-med">Medium</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Specificity test. If insurance is genuinely the multi-decade opportunity claimed, they should have a 2030 number in mind. The in-house vs sub-advisory split also signals whether they'll acquire a carrier.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"It's hard to project that far out." For a "multi-decade opportunity"? Inconsistent. Either they have a view or the opportunity claim is marketing.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="question">
    <div class="question-header" onclick="toggleQ(this)">
      <span class="q-num">20</span>
      <div class="q-body">
        <div class="q-text">Steve is 78. The market wants a succession answer that says "Jon Gray, Day 1." What's the <em>actual</em> 2027-2030 succession plan in detail?</div>
        <span class="q-tag priority-high">High Priority</span>
      </div>
      <span class="q-toggle">+</span>
    </div>
    <div class="q-detail">
      <div class="q-meta">
        <div class="q-meta-block">
          <h5>Why We're Asking</h5>
          <p>Key-person risk is one of the acknowledged risks in the LCS memo. Management's transparency on this signals governance quality. Vague answers are a red flag; specific transition milestones build confidence.</p>
        </div>
        <div class="q-meta-block redflag">
          <h5>Red-Flag Answer</h5>
          <p>"Steve and Jon work closely and have for decades." Yes, not the question. The question is timing, structure, and board involvement. Deflection here = succession risk still unresolved.</p>
        </div>
      </div>
    </div>
  </div>
</section>

</div>

</main>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; Blackstone Diligence Toolkit &bull; 20 Management Questions</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 14, 2026</p>
</footer>

<script>
function toggleQ(el){
  el.parentElement.classList.toggle('expanded');
}
function expandAll(){document.querySelectorAll('.question').forEach(q=>q.classList.add('expanded'))}
function collapseAll(){document.querySelectorAll('.question').forEach(q=>q.classList.remove('expanded'))}
function toggleDark(){document.documentElement.classList.toggle('dark');const isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
