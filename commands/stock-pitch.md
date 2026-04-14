---
description: Build a complete 5-page equity research portal for any publicly-traded ticker
argument-hint: TICKER [optional: sell-side PDF paths, specific URL to incorporate]
---

# Stock Pitch — Equity Research Portal Builder

You are about to build a full institutional-quality equity research portal for a publicly-traded company. Invoke the `stock-pitch` skill to execute the complete workflow.

## Arguments

The user has provided: **$ARGUMENTS**

Parse this for:
- **Ticker symbol** (required) — e.g., `BX`, `KMB`, `AMZN`
- **Sell-side PDFs** (optional) — paths to research reports for enrichment
- **Specific focus** (optional) — e.g., `merger model for KMB/KVUE`, `FRE framework for BX`

## Execution

Read `skills/stock-pitch/SKILL.md` and follow the 5-phase workflow:

1. **Data Collection** — SEC filings, IR materials, market data, transcripts
2. **AI Analysis** — 3-statement model, DCF, peer comps, competitive landscape
3. **Build 5 Pages** — index, memo, presentation, interactive model, consensus
4. **Deploy** — Cloudflare Worker via Hono; routes at `/lcs/<ticker>/`
5. **Verify** — All 5 pages return 200; interactive model functional

## Quality Standards

- Every financial number tagged with source: `[10-K]`, `[10-Q]`, `[Transcript]`, `[IR]`, `[Market]`, `[Consensus]`, `[Estimated]`, `[Computed]`
- Model logic matches sector (EPS-growth for generalist, FRE/DE/AUM for alt mgrs, OR for trucking, NAV for REITs, merger model for M&A situations, etc.)
- Interactive model must have Bull/Base/Street/Bear presets, sensitivity tables, and keyboard shortcuts
- Memo is ~3,000 words SCQA format with ≥8 sidenotes
- Deck is 14 slides following UMG/AMZN pattern

When complete, report the deployed URL and a summary of the thesis, PT, and key assumptions.
