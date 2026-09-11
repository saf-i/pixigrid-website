# Design Log

Record of design work in the [PixiGrid Figma file](https://www.figma.com/design/fXyWB9nvWmigbDVrRfyWgX/PixiGrid). Every Figma work session ends with an entry here plus exported snapshots, committed and pushed to GitHub.

---

## 2026-09-11 — Desktop – 1921 frame implemented as the live site

- The auto-layout frame [Desktop – 1921](https://www.figma.com/design/fXyWB9nvWmigbDVrRfyWgX/PixiGrid?node-id=124-1892) (1920 × 6223) on the "new design" page is now the site: `index.html`, `styles.css`, `main.js` were rebuilt from it. This replaces the v0.1 "systems studio" site.
- Section heights in the browser match Figma to within ~2px (hero 1229, logos 416, work 1958, process 566, services 2014).
- Assets exported from Figma into `public/`: hero "Book a call" arrow icon (`icons/`), the 15 "What we shipped" images (`work/`).
- **Temporary assets to re-export:** `public/process/*.png` (3 process cards) and `public/services/*.png` (4 service previews) are crops from the full-page export at ~0.57× resolution, because the Figma Starter plan's monthly MCP read limit (20 calls) ran out mid-implementation. Re-export those seven nodes at 2× and drop them in the same paths when reads are available again (plan upgrade or next month).
- Only the 1920 breakpoint is designed; the CSS has pragmatic fallbacks below 1200px and 720px until the smaller breakpoints exist in Figma.

## 2026-09-11 — "new design" page: full landing page layout

- New page **new design** with a [Desktop – 1920](https://www.figma.com/design/fXyWB9nvWmigbDVrRfyWgX/PixiGrid?node-id=125-4) frame (1920 × 7217), built on a 12-column / 24px-gutter layout grid inside a centered 1440px container (240px side margins).
- Export: [2026-09-11-new-design-desktop-1920.png](2026-09-11-new-design-desktop-1920.png)
- Sections, top to bottom:
  1. Nav — PixiGrid wordmark, WORK / PROCESS / SERVICES menu, "Book a call" button
  2. Hero — "Your design engineer" headline, "Brands, websites and products for AI era startups…" lede, large work-collage image
  3. Logo wall — "Trusted by enterprises across industries", 6 × 3 logo placeholders
  4. What we shipped — 3 × 5 grid of project cards
  5. Design, build and ship — three process cards (Creative direction / Frontend implementation / QA & launch)
  6. Your partner in every stage — 01 Branding, 02 Websites, 03 Product design, 04 Motion & animation, each with a preview card

## 2026-09-11 — Frame 50 snapshot (first design sync)

- Exported [Frame 50](https://www.figma.com/design/fXyWB9nvWmigbDVrRfyWgX/PixiGrid?node-id=124-1438) as [2026-09-11-frame-50.png](2026-09-11-frame-50.png) — full-page layout, 2189×7878 on canvas.
- This is the first run of the Figma → GitHub sync routine: work happens live in Figma, and each session's changed frames get exported here with a log entry so the design history lives in the repo alongside the code.
