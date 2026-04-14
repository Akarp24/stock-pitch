# Changelog

All notable changes to the `stock-pitch` plugin will be documented in this file.

## [1.1.0] — 2026-04-14

### Added

- **Page 6: Questions for Management** — 20-question diligence toolkit with expand/collapse interaction, category-based organization, priority tagging (High / Medium / Standard), and rationale + red-flag-answer pairs for every question. Print-optimized CSS auto-expands all questions for physical meeting prep.
- **Probability-weighted expected value panel** — interactive model now includes 4 probability sliders (Bull / Base / Street / Bear) with a live-computed expected-value PT table. Helps triangulate between point-estimate scenarios.
- **URL-encoded scenario sharing** — "Share This Scenario" button on model pages encodes all slider state + probability weights to a base64 URL hash. Recipients open the model at the exact scenario.
- **PDF export buttons** — one-click `window.print()` triggers on memo, model, and questions pages. All three have optimized print CSS.
- Updated reference implementations (BX and KMB) with all v1.1 features
- Updated SKILL.md, page-structures.md, and model-templates.md with v1.1 documentation

## [1.0.0] — 2026-04-14

### Initial Release

- Core `stock-pitch` skill for Claude Code
- `/stock-pitch:stock-pitch` slash command
- Five-page portal architecture: index, memo, presentation, interactive model, consensus
- 13 sector patterns: M&A, alt asset manager, trucking, REIT, SaaS, financials, pharma, mega-cap tech, consumer, industrial, energy, music/media, default
- Anti-hallucination source attribution protocol (9 source tags)
- Interactive model with Bull/Base/Street/Bear presets, sensitivity heatmaps, keyboard shortcuts
- Full dark-mode support with localStorage persistence
- Accessibility: skip links, ARIA labels, semantic landmarks, keyboard nav
- Reference implementations: Blackstone (BX), Kimberly-Clark + Kenvue (KMB)
- Cloudflare Workers + Hono boilerplate scaffold
- Comprehensive references: design-system, page-structures, model-templates, sector-patterns, deployment
