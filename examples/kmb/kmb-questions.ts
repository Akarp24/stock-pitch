export const kmbQuestionsHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Kimberly-Clark (KMB) + Kenvue (KVUE) merger — 20 management questions for buy-side diligence calls. Deal execution, synergy capture, Tylenol, strategy.">
<title>KMB Questions for Management | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
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
.hero-btn{padding:9px 18px;border-radius:6px;font-size:12px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;cursor:pointer;border:none;font-family:Inter,sans-serif}
.hero-btn.gold{background:var(--gold);color:#fff}.hero-btn.gold:hover{background:#9A7D2E}
.hero-btn.outline{background:none;border:1px solid var(--border);color:var(--text)}.hero-btn.outline:hover{border-color:var(--gold);color:var(--gold)}
.category{margin-top:48px}
.category-header{display:flex;align-items:baseline;gap:14px;padding-bottom:12px;border-bottom:2px solid var(--border);margin-bottom:24px}
.category-bar{width:6px;height:28px;border-radius:3px}
.cat-deal .category-bar{background:var(--forest)}
.cat-synergy .category-bar{background:var(--steel)}
.cat-tylenol .category-bar{background:var(--red)}
.cat-strategy .category-bar{background:var(--gold)}
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
@media print{nav,.hero-actions,.dark-toggle{display:none!important}.question{page-break-inside:avoid;border:1px solid #ccc!important;box-shadow:none!important}.q-detail{display:block!important;padding:0 24px 20px 70px}.question .q-toggle{display:none}body{font-size:11pt}.hero{padding:20px 0}}
@media(max-width:700px){.q-meta{grid-template-columns:1fr}.hero h1{font-size:26px}}
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
    <a href="/lcs/kmb/">Overview</a>
    <a href="/lcs/kmb/memo.html">Memo</a>
    <a href="/lcs/kmb/presentation.html">Deck</a>
    <a href="/lcs/kmb/model.html">Model</a>
    <a href="/lcs/kmb/consensus.html">Consensus</a>
    <a href="/lcs/kmb/questions.html" class="active">Questions</a>
  </div>
  <div class="nav-right">
    <button class="dark-toggle" onclick="toggleDark()" aria-label="Toggle dark mode">&#9790;</button>
    <span class="nav-ticker">NYSE: <strong>KMB</strong> $96.59</span>
  </div>
</div>
</nav>

<main id="main-content">

<section class="hero">
<div class="wrap">
  <div class="eyebrow">Diligence Toolkit &bull; Management Questions</div>
  <h1>20 Questions for Kimberly-Clark Management</h1>
  <p>Hand-crafted probes for buy-side diligence on the KMB / Kenvue merger. Questions focus on deal execution, synergy credibility, Tylenol litigation exposure, and post-close strategy. Each question has a rationale tied to the investment thesis and a red-flag answer marker.</p>
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
  <p>These questions are designed for <strong>management meetings, conference Q&amp;A, and expert network calls</strong>. Priority questions (red-flagged) are the must-asks. Click any question to see the rationale and the answer pattern that would be a red flag.</p>
</div>

<!-- DEAL EXECUTION -->
<section class="category cat-deal">
  <div class="category-header"><div class="category-bar"></div><h2 class="category-title">Deal Execution &amp; Close</h2><span class="category-count">4 questions</span></div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">01</span><div class="q-body"><div class="q-text">The FTC second request has been pending since January. What's the <em>specific</em> regulatory concern &mdash; category overlap is minimal, so what are they actually examining?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>The 2H26 close depends entirely on this. Understanding the specific FTC workstream (is it portfolio theory? raw materials concentration? retail bargaining leverage?) tells us the real probability distribution of close timing.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We can't comment on ongoing regulatory process." Meaningless non-answer. Press for workstream categories. If they won't even directionalize, the risk is higher than priced.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">02</span><div class="q-body"><div class="q-text">What's the day-1 integration structure &mdash; IMO size, executive leadership, decision rights? Are we seeing a Procter-style fast-track or a Kraft-Heinz-style cultural absorption?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Day-1 execution quality predicts 70% of synergy realization. A dedicated IMO with 50+ people and named executive owners means confidence; loose "workstreams" means chaos.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We'll share more details at close." Six months pre-close, they should know. If they don't, the synergy ramp will slip.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">03</span><div class="q-body"><div class="q-text">2H 2026 is a wide window. Specifically which quarter, and what's the contingency plan if FTC clearance slips to Q1 2027?</div><span class="q-tag priority-med">Medium</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Every quarter of delay is ~$200M of synergy value pushed out. Calibrates our FY26 vs FY27 estimates.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We're focused on a 2H 2026 close." Said for the 6th time in a row. If no narrower view, close is late.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">04</span><div class="q-body"><div class="q-text">What are the termination provisions? If FTC blocks or materially remedies, who owes whom? Does the reverse-termination-fee structure adequately protect KMB?</div><span class="q-tag priority-low">Standard</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>In proxy but worth confirming management's view of deal certainty. If RTF is small relative to deal size, acquirer has less skin.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"All terms are disclosed in the proxy." True, but management should be able to speak to their confidence level beyond boilerplate.</p></div>
    </div></div>
  </div>
</section>

<!-- SYNERGY CAPTURE -->
<section class="category cat-synergy">
  <div class="category-header"><div class="category-bar"></div><h2 class="category-title">Synergy Capture</h2><span class="category-count">5 questions</span></div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">05</span><div class="q-body"><div class="q-text">$1.9B cost synergies = 6% of combined opex. Procter/Gillette hit 7%. What's the <em>specific</em> procurement advantage that gets us to the 7% benchmark over time &mdash; or is 6% the real ceiling?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Our 80% capture = $1.52B on the 6% base. Press for specifics on how cost synergies ladder above disclosed. Reveals whether the $1.9B is sandbagged or ambitious.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Conservative estimate." Classic deflection. The honest answer names specific overlap (pulp, surfactants, co-packer contracts) with dollar sizing.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">06</span><div class="q-body"><div class="q-text">Revenue synergies: $500M gross less $300M reinvestment = $200M net. That feels light on a $32B revenue base. Why not more aggressive?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Revenue synergies are typically the most under-delivered line. The Street expects conservatism; $200M is conservative <em>even by that standard</em>. Either something structural limits cross-sell, or there's upside.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Prudent underwriting." Not enough. Need specific channel examples: which regions, which brands, why the uplift is capped at $500M gross.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">07</span><div class="q-body"><div class="q-text">Is the synergy curve <em>front-loaded</em> (25% / 65% / 90% by year) or <em>back-loaded</em> (10% / 33% / 71%)? The answer changes FY27 EPS by $0.75.</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>This is the single most important assumption in the LCS model. Front-loaded phasing drives +11% FY27 accretion; back-loaded phasing drives only +1.5%. Management's answer determines the re-rating timing.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"It varies by workstream." Force specificity. The aggregate curve should have a name: "front-weighted" or "ratable." Vagueness = it's probably back-loaded.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">08</span><div class="q-body"><div class="q-text">Which synergy bucket has the <em>least</em> conviction &mdash; the one that won't happen on schedule?</div><span class="q-tag priority-med">Medium</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Forces intellectual honesty. Good management teams have pre-identified the weakest bucket. Usually it's the marketing / media spend consolidation (cultural resistance) or tech stack integration (always over-runs).</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We're confident across all buckets." False confidence. Major M&amp;A always has a weakest link. If they can't name it, they haven't thought about it.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">09</span><div class="q-body"><div class="q-text">Revenue dis-synergies &mdash; what's your internal planning assumption? Street uses 100-200bps in Year 1. What's your under-the-hood number?</div><span class="q-tag priority-med">Medium</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Dis-synergies aren't publicly disclosed with precision. Management's internal planning number is usually more honest than the proxy.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Minimal." Always minimal in the sell, always more real in execution. If they say &lt;50bps, they're overpromising.</p></div>
    </div></div>
  </div>
</section>

<!-- TYLENOL -->
<section class="category cat-tylenol">
  <div class="category-header"><div class="category-bar"></div><h2 class="category-title">Tylenol Litigation Exposure</h2><span class="category-count">3 questions</span></div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">10</span><div class="q-body"><div class="q-text">Worst-case Tylenol settlement scenario &mdash; what's the dollar outlay you're reserving for, and what's the timing distribution?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Our thesis hinges on Tylenol exposure being ~$3-5/share even at $2B settlement. Management's internal view lets us calibrate whether that's conservative or aggressive.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We don't provide forward guidance on litigation." Force a range. If they refuse to even directionalize, either it's worse than disclosed or management is disciplined-paranoid. Read the context.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">11</span><div class="q-body"><div class="q-text">If the FDA issued a label change or black-box warning on acetaminophen during pregnancy, what's the revenue hit to Tylenol franchise? Months or years of impact?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Worst-case operational scenario on Tylenol. Even at $3.4B franchise revenue, a 30% volume decline = ~$1B hit, or ~$2-3/share one-year impact. Tests whether management has operational plans for each regulatory path.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We don't expect that outcome." Of course not, but plans should exist. A non-answer means no plan.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">12</span><div class="q-body"><div class="q-text">Insurance coverage on the Tylenol litigation &mdash; what's the layer structure, who's the primary carrier, what's the attachment point?</div><span class="q-tag priority-low">Standard</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Insurance coverage meaningfully reduces net economic exposure. If primary coverage is $1-2B, settlement hit to KMB is much smaller than headline numbers.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We have appropriate coverage." Not a number. Push for layer structure in public comments.</p></div>
    </div></div>
  </div>
</section>

<!-- STRATEGY -->
<section class="category cat-strategy">
  <div class="category-header"><div class="category-bar"></div><h2 class="category-title">Strategy &amp; Portfolio</h2><span class="category-count">5 questions</span></div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">13</span><div class="q-body"><div class="q-text">Combined company has 10 billion-dollar brands. Which are category leaders vs fast-followers &mdash; and which are candidates for divestiture within 24 months?</div><span class="q-tag priority-med">Medium</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Post-close divestiture creates cash for debt paydown and focuses management on category leadership. The answer signals portfolio-shaping discipline.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We love our portfolio." Fine. Name specific brands where #3 or #4 share isn't worth the management attention.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">14</span><div class="q-body"><div class="q-text">Kenvue's Skin Health &amp; Beauty segment underperformed in 2025 (-2.7% organic). What's the fix &mdash; Neutrogena repositioning? Aveeno channel mix? Or is it structural?</div><span class="q-tag priority-med">Medium</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Skin Health is ~$4B of Kenvue and structurally higher-margin. Understanding the fix timeline calibrates our revenue growth assumptions.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Premiumization strategy." Jargon. Want specific product roadmap with timelines.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">15</span><div class="q-body"><div class="q-text">The 2024 Transformation Initiative played out largely as designed. What's the <em>next</em> multi-year operating improvement program for the combined company?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Post-deal, synergies are the one-time win. What's the structural, ongoing improvement pipeline? Absence of one = stagnation risk at current margins.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Continuous improvement is embedded." Meaningless. Every good consumer staples platform has a named multi-year program (PG productivity, Unilever reset, Kraft cost-cutting). What's yours?</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">16</span><div class="q-body"><div class="q-text">Dividend commitment: is the $4.88 annual dividend sacrosanct through the deleveraging period, or negotiable if EBITDA softens?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Dividend aristocrats are rewarded for consistency. 2026+ is the first test. Breaking 50+ years of growth sends a signal; holding it through mild headwinds shows discipline.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Board decides annually." Technically true. But management signals matter. If they hedge on commitment, risk is higher.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">17</span><div class="q-body"><div class="q-text">Post-close, what's the realistic path to sub-3x leverage? Base case shows 2.5x by FY28E. What if combined EBITDA underperforms by 10%?</div><span class="q-tag priority-med">Medium</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Rating agency thresholds matter. Any slippage past 3x extends deleveraging and caps buyback optionality. Sensitivity testing.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We're confident in our plan." Everyone is. Press for Plan B.</p></div>
    </div></div>
  </div>
</section>

<!-- VARIANT -->
<section class="category cat-variant">
  <div class="category-header"><div class="category-bar"></div><h2 class="category-title">Variant Perception &mdash; Questions the Street Won't Ask</h2><span class="category-count">3 questions</span></div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">18</span><div class="q-body"><div class="q-text">Why Kenvue <em>specifically</em>? What alternatives did you evaluate and reject? A $48.7B check is big enough that the counterfactual matters.</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Strategic rigor test. If Kenvue was the only option seriously considered, the deal is opportunistic (worse). If it emerged from a structured strategic review with rejected alternatives, the deal is deliberate (better).</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Kenvue was uniquely compelling." Probably true but insufficient. Rejected alternatives reveal the actual decision framework.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">19</span><div class="q-body"><div class="q-text">Mike Hsu is 60. If he stepped down in 2027, who's the successor? Is there bench depth, or is this a single-person transformation story?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>LCS thesis explicitly cites Mike Hsu's Transformation Initiative as the integration playbook. If Hsu exits mid-integration, execution risk spikes. Board planning should address this.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"Mike is committed for the long term." Fine, but succession planning should exist regardless. Absence of bench = key-person risk.</p></div>
    </div></div>
  </div>

  <div class="question"><div class="question-header" onclick="toggleQ(this)"><span class="q-num">20</span><div class="q-body"><div class="q-text">Post-integration (3-4 years out), is the combined company's right structure a single unified KMB, or a <em>split</em> (personal care + health) that creates two clearer-story compounders?</div><span class="q-tag priority-high">High Priority</span></div><span class="q-toggle">+</span></div>
    <div class="q-detail"><div class="q-meta">
      <div class="q-meta-block"><h5>Why We're Asking</h5><p>Eventual breakup optionality matters. If management treats the combination as permanent unity, they may over-invest in platform integration. If they preserve modular operating models, a 2029-2030 split is a latent catalyst.</p></div>
      <div class="q-meta-block redflag"><h5>Red-Flag Answer</h5><p>"We built this to operate as one." Fine for year 1, but dogmatic commitment closes off future optionality. Best answer acknowledges the split as a long-term option.</p></div>
    </div></div>
  </div>
</section>

</div>

</main>

<footer>
  <div class="footer-line"></div>
  <p>Levin Capital Strategies &bull; KMB / KVUE Merger Diligence Toolkit &bull; 20 Management Questions</p>
  <p style="margin-top:8px;font-size:10px;color:var(--text-muted);opacity:0.5">Last updated: April 14, 2026</p>
</footer>

<script>
function toggleQ(el){el.parentElement.classList.toggle('expanded')}
function expandAll(){document.querySelectorAll('.question').forEach(q=>q.classList.add('expanded'))}
function collapseAll(){document.querySelectorAll('.question').forEach(q=>q.classList.remove('expanded'))}
function toggleDark(){document.documentElement.classList.toggle('dark');const isDark=document.documentElement.classList.contains('dark');document.querySelector('.dark-toggle').innerHTML=isDark?'&#9788;':'&#9790;';try{localStorage.setItem('lcs-dark',isDark?'1':'0')}catch(e){}}
try{if(localStorage.getItem('lcs-dark')==='1'){document.documentElement.classList.add('dark');const b=document.querySelector('.dark-toggle');if(b)b.innerHTML='&#9788;'}}catch(e){}
<\/script>
</body>
</html>`;
