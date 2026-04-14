# Example: Kimberly-Clark + Kenvue — M&A / Accretion-Dilution Pattern

This is a complete 5-page portal implementation demonstrating the `stock-pitch` skill's **M&A / Merger** sector pattern.

**Live demo:** [cafecito-ai.com/lcs/kmb/](https://cafecito-ai.com/lcs/kmb/)

## Context

Kimberly-Clark (KMB) announced a $48.7B acquisition of Kenvue (KVUE) on November 3, 2025, in a cash-and-stock deal:
- $3.50 cash + 0.14625 KMB shares per KVUE share = $21.01 per share
- 54% / 46% pro-forma ownership split
- $2.1B net synergies run-rate over 4 years
- Shareholders approved Jan 29, 2026
- Target close: 2H 2026 (FTC second request pending)

## What to Study

### `kmb-index.ts`
- Hero with dual PT badges (Street $113.69, LCS $128)
- 7-metric bar with deal-specific metrics (Combined Rev, Net Synergies, Deal EV)
- **Deal snapshot card grid** — 4 cards with per-share consideration, EV, ownership, synergies
- **Pro-forma combined P&L table** — FY26E stub year through FY29E full-year
- Three thesis pillars: synergy credibility, valuation re-rating, Tylenol overhang overstated
- Sell-side quotes

### `kmb-memo.ts`
- SCQA on the merger as "underappreciated by Street"
- Deep dive on synergy decomposition (procurement / SG&A / marketing / revenue / reinvestment)
- Detailed Tylenol litigation exposure analysis
- Four-method valuation triangulation
- Full risk matrix

### `kmb-model.ts` — The Interactive Merger Model

**This is the centerpiece.** The model includes:

- **Synergy capture rate slider** (0-100% of $2.1B run-rate)
- **Phase-in sliders** — Yr 1 / Yr 2 / Yr 3 (front-loaded defaults: 25% / 65% / 90% / 100%)
- **Revenue dis-synergies slider** (Yr 1 % of combined revenue)
- **Financing:** new debt cost, paydown schedule, blended tax rate
- **Growth:** KMB standalone, KVUE standalone
- **Valuation:** target P/E on FY27E PF EPS, WACC, terminal growth
- **Bull / Base / Street / Bear presets**

**Key outputs:**
- Combined P&L FY26E–FY29E with full line items
- Accretion/dilution walk (4 rows: PF EPS, standalone EPS, Δ$, Δ%)
- Synergy schedule (cost + revenue − reinvestment = net)
- Sensitivity: synergy capture × debt cost → FY27 EPS
- Sensitivity: synergy capture × P/E → fair value
- Leverage bridge (net debt / EBITDA)

### `kmb-consensus.ts`
- Street ratings and PTs from 10 covering analysts
- Consumer staples peer comp (KMB vs PG/CL/CHD/UL/KVUE)
- **Post-close pro-forma peer comp row** showing the combined entity
- Forward estimate detail with LCS vs Street deltas
- "Where the Street Is Right / Wrong" with emphasis on synergy capture conviction
- Management quotes from Mike Hsu, Nelson Urdaneta, Paul Ruh

### `kmb-presentation.ts`
- 14 slides covering deal terms, standalone snapshots, rationale
- Synergy decomposition slide with precedent benchmarks (PG/Gillette, Kraft-Heinz)
- Synergy phasing slide with front-loaded emphasis
- Combined P&L slide
- Accretion walk slide
- Leverage deleveraging slide
- Street vs LCS variant perception

## Key Model Inputs (Base Case — Front-Loaded)

```js
{
  // Synergy capture
  synCap: 80%,        // LCS underwrite 80% of $2.1B run-rate
  phase1: 25%,        // Yr 1 (FY26 stub, 6 months post-close)
  phase2: 65%,        // Yr 2 (FY27 full year)
  phase3: 90%,        // Yr 3 (FY28)

  // Dis-synergies
  dissyn: 100bps,     // Yr 1 revenue loss from channel disruption

  // Financing
  debtCost: 5.50%,    // New debt blended rate
  paydown: $1.0B,     // Annual debt paydown
  tax: 23%,

  // Growth
  kmbGrow: 2.0%,      // KMB standalone organic
  kvueGrow: 2.0%,     // KVUE standalone organic

  // Valuation
  pe: 17.0x,          // Target fwd P/E on FY27E PF EPS
  wacc: 7.0%,
  tg: 2.3%,
}
```

## Outputs

- **FY26E Stub Year:** Pro-forma EPS $7.09 vs standalone $7.75 = **(-8.5%) dilution** (mechanical, half-year KVUE)
- **FY27E First Full Year:** Pro-forma EPS **$8.88 vs standalone $8.00 = +11.0% accretive**
- **FY28E:** Pro-forma EPS $10.02 vs standalone $8.30 = **+20.7% accretive**
- **FY29E:** Pro-forma EPS $10.85 vs standalone $8.60 = **+26.2% accretive**
- **LCS PT:** $128 (+33% upside vs $96.59 close)

## Critical Design Decision: Front-Loaded vs Back-Loaded Synergies

This example demonstrates the **front-loaded phasing curve** — the more realistic pattern for modern CPG deals where management has telegraphed aggressive day-1 execution.

Traditional CPG synergy models use back-loaded curves (10% / 33% / 71% / 100%), which under-state accretion in Years 2-3 when the stock should re-rate. KMB's pre-close integration planning (six-month IMO, Day-1 procurement wave) justifies the front-loaded curve.

Both curves reach the same 100% run-rate, but the trajectory to get there changes EPS by $0.55-0.76 in FY27E — materially.

## Adapting to Other M&A Situations

To build an M&A portal for another deal:

1. Swap the acquirer and target `BASE` constants (revenue, EBITDA, shares, margins)
2. Update deal terms (consideration mix, EV, synergy target, close timeline)
3. Adjust pro-forma ownership split
4. Calibrate synergy phasing to management's disclosed timeline
5. Run the accretion walk with new inputs
6. Update peer comp to include the target's peer set AND the acquirer's

## Integration

```ts
import { kmbIndexHTML } from './pages/kmb-index';
import { kmbMemoHTML } from './pages/kmb-memo';
import { kmbPresentationHTML } from './pages/kmb-presentation';
import { kmbModelHTML } from './pages/kmb-model';
import { kmbConsensusHTML } from './pages/kmb-consensus';

if (path === '/lcs/kmb' || path === '/lcs/kmb/') return c.html(kmbIndexHTML);
if (path === '/lcs/kmb/memo.html') return c.html(kmbMemoHTML);
if (path === '/lcs/kmb/presentation.html') return c.html(kmbPresentationHTML);
if (path === '/lcs/kmb/model.html') return c.html(kmbModelHTML);
if (path === '/lcs/kmb/consensus.html') return c.html(kmbConsensusHTML);
```
