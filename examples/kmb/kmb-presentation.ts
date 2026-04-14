export const kmbPresentationHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="KMB + KVUE merger presentation deck: 14-slide institutional pitch with deal terms, synergy capture, combined P&L, and catalyst calendar.">
<title>KMB + KVUE Deck | Levin Capital Strategies</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>&#x1F4C8;</text></svg>">
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
.slide.cover h1{color:#fff;font-size:44px}
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
.stat-card .sv.gold{color:var(--gold)}.stat-card .sv.green{color:var(--green)}.stat-card .sv.red{color:var(--red)}
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
table.slide-tbl tr.syn td{color:var(--green)}
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
    <a href="/lcs/kmb/">Overview</a>
    <a href="/lcs/kmb/memo.html">Memo</a>
    <a href="/lcs/kmb/presentation.html" class="active">Deck</a>
    <a href="/lcs/kmb/model.html">Model</a>
    <a href="/lcs/kmb/consensus.html">Consensus</a>
    <a href="/lcs/kmb/questions.html">Questions</a>
  </div>
  <span class="slide-counter" id="counter">01 / 14</span>
</div>

<div class="deck">
<div class="slide-container">

<!-- Slide 1: Cover -->
<section class="slide cover active">
  <div class="eyebrow">Levin Capital Strategies &middot; Consumer Staples Research</div>
  <h1>Kimberly-Clark + Kenvue<br/>The $48.7 Billion Bet on Global Consumer Health</h1>
  <p>A transformative cash-and-stock merger combining two CPG leaders into a $32B health-and-wellness platform. Accretive by Year 2; +26% accretive by Year 4.</p>
  <div class="badges">
    <span class="badge street">STREET PT $113.69 (+18%)</span>
    <span class="badge lcs">LCS PT $128 (+33%) &middot; BUY</span>
  </div>
  <div class="cover-stats">
    <div class="cover-stat"><div class="cs-v">$48.7B</div><div class="cs-l">Enterprise Value</div></div>
    <div class="cover-stat"><div class="cs-v">$2.1B</div><div class="cs-l">Net Synergies</div></div>
    <div class="cover-stat"><div class="cs-v">$32B</div><div class="cs-l">Combined Revenue</div></div>
  </div>
</section>

<!-- Slide 2: Deal Summary -->
<section class="slide">
  <div class="eyebrow">Slide 2</div>
  <h2>Transaction Summary</h2>
  <div class="four-col" style="margin-bottom:24px">
    <div class="stat-card"><div class="sv gold">$48.7B</div><div class="sl">Enterprise Value</div><div class="ss">14.3x LTM Adj EBITDA</div></div>
    <div class="stat-card"><div class="sv">$21.01</div><div class="sl">Per-Share Consideration</div><div class="ss">$3.50 cash + 0.14625 shares</div></div>
    <div class="stat-card"><div class="sv">54% / 46%</div><div class="sl">Pro-Forma Ownership</div><div class="ss">KMB / KVUE holders</div></div>
    <div class="stat-card"><div class="sv green">$2.1B</div><div class="sl">Run-Rate Synergies</div><div class="ss">Net of $300M reinvest</div></div>
  </div>
  <div class="two-col">
    <div>
      <h3>Key Milestones</h3>
      <ul class="bullet-list">
        <li><strong>Nov 3, 2025:</strong> Deal announced</li>
        <li><strong>Jan 29, 2026:</strong> Shareholder approval (96% KMB, 99% KVUE)</li>
        <li><strong>Q1-Q2 2026:</strong> FTC second-request review (ongoing)</li>
        <li><strong>2H 2026:</strong> Expected close</li>
        <li><strong>FY2030:</strong> Full $2.1B run-rate synergies</li>
      </ul>
    </div>
    <div>
      <h3>Leadership &amp; Governance</h3>
      <ul class="bullet-list">
        <li><strong>Mike Hsu,</strong> CEO (KMB) &mdash; architect of 2024 Transformation Initiative</li>
        <li><strong>Nelson Urdaneta,</strong> CFO (KMB) &mdash; continues in role</li>
        <li><strong>Three Kenvue Directors</strong> join combined Board</li>
        <li><strong>Irving, TX</strong> headquarters; Kenvue NJ presence maintained</li>
      </ul>
    </div>
  </div>
  <p class="src">Source: KMB / KVUE joint press release Nov 3, 2025; DEFM14A Merger Proxy Dec 2025 [IR]</p>
</section>

<!-- Slide 3: Standalone Snapshots -->
<section class="slide">
  <div class="eyebrow">Slide 3</div>
  <h2>Standalone Company Snapshots (FY2025A)</h2>
  <div class="two-col">
    <div>
      <h3>Kimberly-Clark (KMB)</h3>
      <table class="slide-tbl">
        <tbody>
          <tr><td>Revenue</td><td>$16.4B</td></tr>
          <tr><td>YoY organic growth</td><td class="down">(2.1%)</td></tr>
          <tr><td>Adj EBITDA</td><td>$3.8B</td></tr>
          <tr><td>Adj EBITDA margin</td><td>23.1%</td></tr>
          <tr><td>Adj EPS</td><td>$7.53</td></tr>
          <tr><td>Market cap</td><td>$32.3B</td></tr>
          <tr><td>Net debt</td><td>$7.2B</td></tr>
          <tr><td>Primary segments</td><td>North America, Intl Personal Care</td></tr>
          <tr><td>$1B+ brands</td><td>Huggies, Kleenex, Scott, Cottonelle, Kotex</td></tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>Kenvue (KVUE)</h3>
      <table class="slide-tbl">
        <tbody>
          <tr><td>Revenue</td><td>$15.1B</td></tr>
          <tr><td>YoY organic growth</td><td class="up">+0.5%</td></tr>
          <tr><td>Adj EBITDA</td><td>$3.4B</td></tr>
          <tr><td>Adj EBITDA margin</td><td>22.5%</td></tr>
          <tr><td>Adj EPS</td><td>$1.03</td></tr>
          <tr><td>Market cap</td><td>$35.8B</td></tr>
          <tr><td>Net debt</td><td>$8.0B</td></tr>
          <tr><td>Primary segments</td><td>Self Care, Skin Health &amp; Beauty, Essential Health</td></tr>
          <tr><td>$1B+ brands</td><td>Tylenol, Zyrtec, Neutrogena, Aveeno, Listerine</td></tr>
        </tbody>
      </table>
    </div>
  </div>
  <p class="src">Source: KMB 10-K FY25, KVUE 10-K FY25 [10-K]</p>
</section>

<!-- Slide 4: Deal Rationale -->
<section class="slide">
  <div class="eyebrow">Slide 4</div>
  <h2>Why This Deal, Why Now</h2>
  <div class="three-col">
    <div>
      <h3>Portfolio Pivot</h3>
      <p>KMB&rsquo;s personal-care franchises have matured into low-growth dividend assets. Combining with Kenvue tilts combined-company revenue mix <strong>~45% to higher-growth consumer health</strong>, fundamentally re-rating the earnings-growth algorithm.</p>
    </div>
    <div>
      <h3>Scale Economics</h3>
      <p>Procurement overlap in pulp, polymers, and private-label sourcing creates <strong>$850M cost-synergy opportunity</strong>. Combined global distribution network offers immediate leverage for smaller Kenvue brands in KMB&rsquo;s strong international regions (LatAm, EMEA).</p>
    </div>
    <div>
      <h3>Defensive Consolidation</h3>
      <p>Private-label pressure is rising across both companies&rsquo; categories. Consolidation creates pricing power, category-captain status, and shelf-space leverage against Walmart, Costco, and Amazon &mdash; essential for navigating the next five years.</p>
    </div>
  </div>
  <p class="src">Source: Deal rationale from announcement call [Transcript]; LCS analysis</p>
</section>

<!-- Slide 5: Synergy Decomposition -->
<section class="slide">
  <div class="eyebrow">Slide 5</div>
  <h2>Synergy Decomposition: $2.1B Net Run-Rate</h2>
  <table class="slide-tbl" style="margin-top:20px">
    <thead><tr><th>Bucket</th><th>Run-Rate ($M)</th><th>% of Total</th><th>LCS Conviction</th><th>Precedent Benchmark</th></tr></thead>
    <tbody>
      <tr><td>Procurement &amp; supply chain</td><td>850</td><td>40%</td><td>High</td><td>PG/Gillette: 45% of total synergies</td></tr>
      <tr><td>SG&amp;A consolidation</td><td>650</td><td>31%</td><td>Medium-High</td><td>KHC/Heinz: 30% of total synergies</td></tr>
      <tr><td>Marketing &amp; advertising</td><td>400</td><td>19%</td><td>Medium</td><td>UL beauty rollup: 15% of total</td></tr>
      <tr><td>Revenue cross-sell</td><td>500</td><td>24%</td><td>Medium</td><td>Hardest to verify; backend-weighted</td></tr>
      <tr><td>&minus; Reinvestment in brand</td><td>(300)</td><td>(14%)</td><td>&mdash;</td><td>Prudent; ensures mid-cycle growth</td></tr>
      <tr class="total"><td>Net run-rate synergies</td><td>2,100</td><td>100%</td><td>&mdash;</td><td>&mdash;</td></tr>
    </tbody>
  </table>
  <p style="margin-top:20px;font-size:13px">As a percentage of combined opex (~$26B), the $1.9B gross cost synergy target = <strong>~6% of opex</strong> &mdash; in line with large CPG M&amp;A precedents. We model <strong>80% realization</strong> against the published target.</p>
  <p class="src">Source: DEFM14A Merger Proxy, Deal announcement [IR]; LCS CPG M&amp;A precedent analysis [Computed]</p>
</section>

<!-- Slide 6: Synergy Phasing -->
<section class="slide">
  <div class="eyebrow">Slide 6</div>
  <h2>Synergy Phasing &mdash; Front-Loaded (LCS Base Case)</h2>
  <table class="slide-tbl">
    <thead><tr><th>$ millions</th><th>Run-Rate</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
    <tbody>
      <tr><td>Cost synergies (80% capture)</td><td>1,520</td><td>380</td><td>988</td><td>1,368</td><td>1,520</td></tr>
      <tr><td>Revenue synergies (80% capture)</td><td>400</td><td>100</td><td>260</td><td>360</td><td>400</td></tr>
      <tr><td>Reinvestment (80% of plan)</td><td>(240)</td><td>(60)</td><td>(156)</td><td>(216)</td><td>(240)</td></tr>
      <tr class="total syn"><td>Net realized synergies</td><td>1,680</td><td>420</td><td>1,092</td><td>1,512</td><td>1,680</td></tr>
      <tr><td>% phase-in</td><td>100%</td><td>25%</td><td>65%</td><td>90%</td><td>100%</td></tr>
      <tr class="syn"><td>Incremental YoY synergy add</td><td>&mdash;</td><td>+$420</td><td>+$672</td><td>+$420</td><td>+$168</td></tr>
    </tbody>
  </table>
  <p style="margin-top:24px;font-size:13px"><strong>Day-1 execution model:</strong> Six-month pre-close integration management office preps procurement contracts, SG&amp;A headcount actions, and shared-service consolidation for Day-1 harvest. Incremental synergy adds peak in FY27 and roll off as the low-hanging fruit is captured &mdash; consistent with P&amp;G/Gillette (60% in 24 months) and Unilever beauty rollup precedents.</p>
  <p class="src">Source: LCS base case; phasing informed by management Day-1 integration plan [IR]</p>
</section>

<!-- Slide 7: Combined P&L -->
<section class="slide">
  <div class="eyebrow">Slide 7</div>
  <h2>Pro-Forma Combined P&amp;L: FY26E&ndash;FY29E</h2>
  <table class="slide-tbl">
    <thead><tr><th>$ millions</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
    <tbody>
      <tr><td>KMB standalone revenue</td><td>16,580</td><td>16,910</td><td>17,250</td><td>17,595</td></tr>
      <tr><td>KVUE contribution</td><td>7,625</td><td>15,405</td><td>15,715</td><td>16,030</td></tr>
      <tr><td>Revenue dis-synergies</td><td>(75)</td><td>(155)</td><td>(80)</td><td>&mdash;</td></tr>
      <tr class="total"><td>Combined revenue</td><td>24,130</td><td>32,160</td><td>32,885</td><td>33,625</td></tr>
      <tr><td>Adj EBITDA pre-synergy</td><td>5,320</td><td>7,550</td><td>7,820</td><td>8,095</td></tr>
      <tr class="syn"><td>+ Realized synergies (front-loaded)</td><td>420</td><td>1,092</td><td>1,512</td><td>1,680</td></tr>
      <tr class="total"><td>Combined Adj EBITDA</td><td>5,740</td><td>8,642</td><td>9,332</td><td>9,775</td></tr>
      <tr><td>EBITDA margin</td><td>23.8%</td><td>26.9%</td><td>28.4%</td><td>29.1%</td></tr>
      <tr><td>D&amp;A (incl PPA step-up)</td><td>(810)</td><td>(1,220)</td><td>(1,200)</td><td>(1,180)</td></tr>
      <tr><td>Interest expense (net)</td><td>(565)</td><td>(1,175)</td><td>(1,075)</td><td>(960)</td></tr>
      <tr><td>Taxes @ 23%</td><td>(1,004)</td><td>(1,437)</td><td>(1,623)</td><td>(1,755)</td></tr>
      <tr class="total"><td>Adj net income</td><td>3,361</td><td>4,810</td><td>5,434</td><td>5,880</td></tr>
      <tr class="total"><td>Pro-forma Adj EPS</td><td>$7.09</td><td>$8.88</td><td>$10.02</td><td>$10.85</td></tr>
    </tbody>
  </table>
  <p class="src">Source: LCS base case merger model. Assumes mid-2026 close, 80% ultimate synergy capture on front-loaded curve (25% / 65% / 90% / 100% by year). See interactive model for sensitivity.</p>
</section>

<!-- Slide 8: Accretion Walk -->
<section class="slide">
  <div class="eyebrow">Slide 8</div>
  <h2>Accretion / (Dilution) Walk vs KMB Standalone</h2>
  <table class="slide-tbl">
    <thead><tr><th>$ per share</th><th>FY26E</th><th>FY27E</th><th>FY28E</th><th>FY29E</th></tr></thead>
    <tbody>
      <tr><td>KMB standalone Adj EPS</td><td>$7.75</td><td>$8.00</td><td>$8.30</td><td>$8.60</td></tr>
      <tr><td>Pro-forma Adj EPS</td><td>$7.09</td><td>$8.88</td><td>$10.02</td><td>$10.85</td></tr>
      <tr class="total"><td>Accretion / (Dilution) $</td><td class="down">($0.66)</td><td class="up">+$0.88</td><td class="up">+$1.72</td><td class="up">+$2.25</td></tr>
      <tr class="total"><td>Accretion / (Dilution) %</td><td class="down">(8.5%)</td><td class="up">+11.0%</td><td class="up">+20.7%</td><td class="up">+26.2%</td></tr>
    </tbody>
  </table>
  <p style="margin-top:24px;font-size:13px"><strong>Key takeaway:</strong> Front-loaded synergy capture drives <strong>meaningful FY27 accretion (+11%)</strong> &mdash; a year earlier than the Street models. FY26E stub-year dilution is minor (&minus;8.5%) and largely mechanical from partial KVUE contribution vs full-year new-share count. By FY29E, pro-forma EPS is <strong>+26% above standalone</strong>.</p>
  <p class="src">Source: LCS merger model. Standalone path assumes 3-4% adj EPS growth consistent with Transformation Initiative plan.</p>
</section>

<!-- Slide 9: Leverage Bridge -->
<section class="slide">
  <div class="eyebrow">Slide 9</div>
  <h2>Balance Sheet &amp; Leverage Deleveraging</h2>
  <table class="slide-tbl">
    <thead><tr><th>$ billions</th><th>Close</th><th>FY26E End</th><th>FY27E End</th><th>FY28E End</th><th>FY29E End</th></tr></thead>
    <tbody>
      <tr><td>KMB existing net debt</td><td>7.2</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr>
      <tr><td>KVUE existing net debt (assumed)</td><td>8.0</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr>
      <tr><td>New debt for cash consideration</td><td>6.7</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td><td>&mdash;</td></tr>
      <tr><td>Pro-forma opening net debt</td><td>21.9</td><td>21.4</td><td>20.4</td><td>19.4</td><td>18.4</td></tr>
      <tr><td>Combined Adj EBITDA</td><td>&mdash;</td><td>5.4 (ann.)</td><td>8.1</td><td>9.0</td><td>9.8</td></tr>
      <tr class="total"><td>Net Debt / EBITDA</td><td>~3.0x</td><td>2.9x</td><td>2.5x</td><td>2.2x</td><td>1.9x</td></tr>
    </tbody>
  </table>
  <p style="margin-top:24px;font-size:13px">Management targets sub-3x within 12 months of close. LCS model shows <strong>2.5x by FY27E</strong>, comfortably below target and preserving investment-grade status. Rating agency outlook: Moody&rsquo;s Baa2 / S&amp;P BBB with stable outlook contingent on deleveraging pace.</p>
  <p class="src">Source: KMB / KVUE 10-Ks [10-K]; LCS base-case paydown of $1B/yr</p>
</section>

<!-- Slide 10: Valuation Framework -->
<section class="slide">
  <div class="eyebrow">Slide 10</div>
  <h2>LCS Valuation Framework: $128 Price Target</h2>
  <div class="framework-grid">
    <div class="framework-card">
      <div class="fv">$138</div>
      <div class="fl">Forward P/E</div>
      <div class="fs">17.0x on FY27E Adj EPS $8.12</div>
    </div>
    <div class="framework-card">
      <div class="fv">$132</div>
      <div class="fl">DCF</div>
      <div class="fs">7.0% WACC, 2.3% terminal growth</div>
    </div>
    <div class="framework-card">
      <div class="fv">$147</div>
      <div class="fl">EV / EBITDA</div>
      <div class="fs">13.5x on FY27E EBITDA $8.1B</div>
    </div>
  </div>
  <p style="margin-top:28px;font-size:14px"><strong>Blended fair value:</strong> ~$139. <strong>LCS PT of $128</strong> reflects a reasonable ~$10/share discount for Tylenol contingency and integration execution risk, preserving meaningful upside (+33%) while acknowledging tail risks.</p>
  <p style="font-size:12px;color:var(--text-muted);margin-top:16px"><strong>Bull case:</strong> $165 (95% synergy capture, 20x P/E, minimal dis-synergy). <strong>Bear case:</strong> $92 (50% synergy capture, 14x P/E, $2B Tylenol settlement). <strong>Asymmetric setup: ~3:1 upside/downside skew.</strong></p>
  <p class="src">Source: LCS merger model. Peer P/E set: PG 23x, CL 24x, CHD 28x, UL 19x. EV/EBITDA staples median 15.7x.</p>
</section>

<!-- Slide 11: Variant Perception -->
<section class="slide">
  <div class="eyebrow">Slide 11</div>
  <h2>LCS Variant Perception vs Street</h2>
  <table class="slide-tbl">
    <thead><tr><th>Assumption</th><th>Street Consensus</th><th>LCS Base Case</th><th>Delta</th></tr></thead>
    <tbody>
      <tr><td>Synergy capture rate</td><td>~60%</td><td>80%</td><td class="up">+20pts</td></tr>
      <tr><td>Yr 1 revenue dis-synergies</td><td>~2.0%</td><td>1.0%</td><td class="up">-100bps</td></tr>
      <tr><td>New debt blended cost</td><td>5.75%</td><td>5.50%</td><td class="up">-25bps</td></tr>
      <tr><td>Tylenol economic exposure</td><td>$15-20 per share</td><td>$3-5 per share</td><td class="up">~$12/sh</td></tr>
      <tr><td>Synergy phasing curve</td><td>Back-loaded (10/33/71)</td><td>Front-loaded (25/65/90)</td><td class="up">FY27 inflection</td></tr>
      <tr><td>FY27E Adj EPS</td><td>$7.85</td><td>$8.88</td><td class="up">+13.1%</td></tr>
      <tr><td>FY29E Adj EPS</td><td>$9.50</td><td>$10.85</td><td class="up">+14.2%</td></tr>
      <tr class="total"><td>Price Target</td><td>$113.69</td><td>$128</td><td class="up">+12.6%</td></tr>
    </tbody>
  </table>
  <p style="margin-top:24px;font-size:13px">The core differentiator is <strong>synergy-capture conviction</strong>. Street is reluctant to underwrite above 60% prior to proof; we see CPG precedent (P&amp;G/Gillette hit 95%) as a strong anchor and view 80% as the appropriately calibrated base case.</p>
  <p class="src">Source: FactSet consensus blend (14 analysts); LCS base case from interactive model</p>
</section>

<!-- Slide 12: Risk Assessment -->
<section class="slide">
  <div class="eyebrow">Slide 12</div>
  <h2>Risk Assessment &amp; Scenario Bands</h2>
  <table class="slide-tbl">
    <thead><tr><th>Risk Factor</th><th>Impact</th><th>Probability</th><th>Mitigant</th></tr></thead>
    <tbody>
      <tr><td>Integration execution failure</td><td>High</td><td>Medium</td><td style="text-align:left">Hsu track record on Transformation Initiative; 6mo pre-close planning</td></tr>
      <tr><td>Regulatory denial / remedy</td><td>High</td><td>Low</td><td style="text-align:left">Minimal product overlap (diapers/tissue vs OTC/skincare)</td></tr>
      <tr><td>Leverage pressure in downturn</td><td>Medium</td><td>Medium</td><td style="text-align:left">KMB FCF historically strong; div covered 2x at depressed margins</td></tr>
      <tr><td>Tylenol settlement beyond expectations</td><td>Medium</td><td>Low</td><td style="text-align:left">Strong legal precedent; ~$3.25/sh hit even at $2B settlement</td></tr>
      <tr><td>Private-label acceleration</td><td>Low</td><td>Ongoing</td><td style="text-align:left">Brand equity, formulation patents, shelf-space leverage</td></tr>
      <tr><td>Dis-synergies &gt; 200bps in Yr 1</td><td>Medium</td><td>Low-Medium</td><td style="text-align:left">Limited channel overlap; complementary rather than competing SKUs</td></tr>
    </tbody>
  </table>
  <p class="src">Source: LCS risk framework analysis from memo Section 8</p>
</section>

<!-- Slide 13: Catalyst Calendar -->
<section class="slide">
  <div class="eyebrow">Slide 13</div>
  <h2>Catalyst Calendar</h2>
  <table class="slide-tbl">
    <thead><tr><th>Date</th><th>Event</th><th>Type</th><th>Expected Impact</th></tr></thead>
    <tbody>
      <tr><td>Apr 22, 2026</td><td>KMB Q1 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Organic growth recovery; integration prep</td></tr>
      <tr><td>Q2 2026</td><td>FTC Second-Request Clearance</td><td>Regulatory</td><td style="text-align:left">Final hurdle; de-risking event</td></tr>
      <tr><td>Jul 2026</td><td>KMB Q2 2026 Earnings</td><td>Earnings</td><td style="text-align:left">Updated close timing</td></tr>
      <tr><td>2H 2026</td><td>Deal Close + Day-1 Integration</td><td>Transaction</td><td style="text-align:left">Integration framework, governance</td></tr>
      <tr><td>Oct 2026</td><td>First Combined-Entity Earnings</td><td>Earnings</td><td style="text-align:left">Synergy-realization update</td></tr>
      <tr><td>Feb 2027</td><td>FY2027 Guidance Release</td><td>Guidance</td><td style="text-align:left">Highest-conviction re-rating moment</td></tr>
      <tr><td>2027-2028</td><td>Tylenol MDL Milestones</td><td>Litigation</td><td style="text-align:left">Favorable outcome unlocks capital</td></tr>
      <tr><td>FY2030</td><td>Full Run-Rate Synergy Achievement</td><td>Execution</td><td style="text-align:left">Confirmation of $2.1B run-rate realization</td></tr>
    </tbody>
  </table>
</section>

<!-- Slide 14: Recommendation -->
<section class="slide">
  <div class="eyebrow">Slide 14</div>
  <h2>Recommendation: BUY, $128 PT</h2>
  <div class="framework-grid" style="margin-bottom:24px">
    <div class="framework-card"><div class="fv">BUY</div><div class="fl">LCS Rating</div><div class="fs">Above-consensus view</div></div>
    <div class="framework-card"><div class="fv">$128</div><div class="fl">LCS Price Target</div><div class="fs">+33% upside (~$96.59 close)</div></div>
    <div class="framework-card"><div class="fv">24 mo</div><div class="fl">Time Horizon</div><div class="fs">Through FY27 guidance release</div></div>
  </div>
  <div class="two-col">
    <div>
      <h3>Why Buy Now</h3>
      <ul class="bullet-list">
        <li><strong>Underappreciated synergies:</strong> 80% capture = $1.68B, 20pts above Street</li>
        <li><strong>Tylenol overhang priced ~10x reality:</strong> ~$3-5/share economic exposure</li>
        <li><strong>Multiple re-rating:</strong> 13x &rarr; 17x as integration proves out = $20+/share</li>
        <li><strong>Asymmetric setup:</strong> ~3:1 upside / downside skew</li>
        <li><strong>Staples floor:</strong> Even bear case ($92) has limited downside from current levels</li>
      </ul>
    </div>
    <div>
      <h3>What We&rsquo;re Watching</h3>
      <ul class="bullet-list">
        <li><strong>FTC clearance:</strong> Single-largest near-term catalyst</li>
        <li><strong>Day-1 integration framework:</strong> Detailed synergy commitment post-close</li>
        <li><strong>FY27 guidance:</strong> First opportunity for material re-rate</li>
        <li><strong>Standalone KMB Q1 print:</strong> Organic-growth inflection confirmation</li>
        <li><strong>Tylenol MDL rulings:</strong> Any de-risking is pure upside</li>
      </ul>
    </div>
  </div>
  <p class="src">Source: LCS base case model (interactive). 2-year annualized total return (price + dividend) ~21%.</p>
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
