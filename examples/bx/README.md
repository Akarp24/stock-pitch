# Example: Blackstone (BX) — Alternative Asset Manager Pattern

This is a complete 5-page portal implementation demonstrating the `stock-pitch` skill's **Alternative Asset Manager** sector pattern.

**Live demo:** [cafecito-ai.com/lcs/bx/](https://cafecito-ai.com/lcs/bx/)

## What to Study

### `bx-index.ts`
- Hero with gradient navy background + dual PT badges
- 7-metric bar with custom alt-mgr metrics (AUM, FEAUM, FRE, DE/Sh, forward DE/Sh)
- AUM breakdown by 4 segments (Real Estate, PE, Credit, Multi-Asset)
- Navy FRE/DE trajectory table — FY25A through FY28E
- Three thesis pillars: perpetual-capital flywheel, private wealth inflection, realization cycle
- Earnings setup box for next quarter
- Sell-side quotes from BMO, Oppenheimer, Morgan Stanley

### `bx-memo.ts`
- SCQA memo on Blackstone as "compounder priced like private credit shop"
- 10 sections with anchor TOC
- 8+ sidenotes with sourced facts
- Four-method valuation table (P/DE, historical range, DCF, DDM)
- Risk matrix and catalyst calendar

### `bx-model.ts`
- **AUM growth sliders by segment** (Real Estate, PE, Credit, Multi-Asset)
- Fee economics: blended mgmt fee rate, FRE margin, fee-related perf revenue growth
- Realization cycle: net realizations base + YoY growth
- Valuation: target P/DE, payout ratio, WACC, terminal growth
- Bull / Base / Street / Bear presets
- Sensitivity: AUM growth × FRE margin → DE/Share
- Sensitivity: DE/Share × forward P/DE → fair value
- DCF cross-check

### `bx-consensus.ts`
- Consensus strip: BUY rating, $159 mean PT, 17 analysts
- Rating distribution bar
- 10-analyst coverage table
- Alt-manager peer comp: BX vs APO/KKR/ARES/OWL/TPG
- Forward estimate detail (LCS vs Street variance)
- "Where the Street Is Right / Wrong" card grid
- Management quotes from Schwarzman, Gray, Chae

### `bx-presentation.ts`
- 14 slides with keyboard navigation
- Cover with BX-specific stats ($1.28T AUM, $5.7B FRE, $7.1B DE)
- Four-engine segment table
- Synergy phasing replaced with realization cycle slide
- Private wealth TAM analysis slide
- Peer comp + valuation framework slides

## Key Model Inputs (Base Case)

```js
{
  // AUM growth by segment
  reGrow: 6%,      // Real estate
  peGrow: 12%,     // Private equity
  creditGrow: 15%, // Credit & insurance
  maGrow: 18%,     // Multi-asset + infra

  // Fee economics
  feeRate: 0.69%,  // Blended mgmt fee rate
  freMargin: 61%,  // Base case FRE margin
  frePerfGrow: 20%,

  // Realizations
  real: $2.2B,     // Base year realizations
  realGrow: 25%,   // YoY growth

  // Valuation
  pe: 22x,         // Forward P/DE
  payout: 85%,
  wacc: 11.0%,
  tg: 4.0%,
}
```

## Outputs

- **FY27E DE/Share:** $6.80 (+22% vs FY25)
- **FY28E DE/Share:** $8.25 (+48% vs FY25)
- **LCS PT:** $150 (+36% upside)
- **2-Year Total Return IRR:** +21% (base case)

## Adapting to Other Alt Managers

To build a similar portal for APO, KKR, ARES, OWL, or TPG:

1. Swap the `BASE` constants at the top of the model JS (AUM, FRE, DE values from 10-K)
2. Adjust segment splits to match target company's disclosure
3. Update peer comp table (still compare to same peer set)
4. Adjust the thesis pillars to the target company's specific narrative
5. For APO especially: emphasize higher credit concentration (86%) as a different risk/reward vs BX

## Integration

In your Worker's `src/index.ts`:

```ts
import { bxIndexHTML } from './pages/bx-index';
import { bxMemoHTML } from './pages/bx-memo';
import { bxPresentationHTML } from './pages/bx-presentation';
import { bxModelHTML } from './pages/bx-model';
import { bxConsensusHTML } from './pages/bx-consensus';

// In request handler:
if (path === '/lcs/bx' || path === '/lcs/bx/') return c.html(bxIndexHTML);
if (path === '/lcs/bx/memo.html') return c.html(bxMemoHTML);
if (path === '/lcs/bx/presentation.html') return c.html(bxPresentationHTML);
if (path === '/lcs/bx/model.html') return c.html(bxModelHTML);
if (path === '/lcs/bx/consensus.html') return c.html(bxConsensusHTML);
```
