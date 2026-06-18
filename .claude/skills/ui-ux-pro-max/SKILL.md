---
name: ui-ux-pro-max
description: "UI/UX design intelligence for Next.js and React. 67 styles, 161 color palettes, 57 font pairings, 25 charts, 99 UX guidelines. Triggers on: plan, build, create, design, implement, review, fix, improve, optimize, enhance, refactor, check UI/UX code. Projects: landing page, SaaS dashboard, portfolio, marketing site, admin panel, e-commerce. Stacks: nextjs, react, shadcn, tailwind. Elements: button, modal, navbar, sidebar, card, table, form, chart. Styles: glassmorphism, minimalism, brutalism, bento grid, dark mode, responsive. Topics: color palette, accessibility, animation, layout, typography, font pairing, spacing."
---

# UI/UX Pro Max — Design Intelligence for Next.js & React

Comprehensive design guide for web projects: landing pages, SaaS dashboards, and portfolios. Contains 67 styles, 161 color palettes, 57 font pairings, 99 UX guidelines, and 25 chart types — optimised for Next.js, React, Tailwind CSS, and shadcn/ui.

---

## When to Apply This Skill

Use this skill any time the task touches **how something looks, works, moves, or is interacted with**.

### Must Use
- Designing a new page (landing page, dashboard, portfolio, admin, SaaS)
- Creating or refactoring UI components (button, modal, form, table, chart, navbar, sidebar, card)
- Choosing color schemes, font systems, spacing rules, or layout strategy
- Reviewing UI code for UX quality, accessibility, or visual consistency
- Implementing navigation, animations, or responsive behaviour
- Making product-level design decisions (style, information hierarchy, brand expression)
- Improving perceived quality, clarity, or usability of any interface

### Recommended
- UI looks "not quite professional" but you can't pinpoint why
- You've received usability or experience feedback
- Pre-launch UI quality pass
- Building a design system or reusable component library

### Skip
- Pure backend / API / database work
- Infrastructure or DevOps
- Non-visual scripts or automation

**Decision rule:** If a task changes how something *looks, feels, moves, or responds to a user*, use this skill.

---

## Trigger Scenarios

| Scenario | Trigger Examples | Start From |
|----------|-----------------|------------|
| **New page or project** | "Build a landing page", "Create a SaaS dashboard" | Step 1 → Step 2 (design system) |
| **New component** | "Create a pricing card", "Add a modal" | Step 3 (domain search: style, ux) |
| **Choose style / color / font** | "What style fits a fintech SaaS?", "Recommend a color palette" | Step 2 (design system) |
| **Review existing UI** | "Review this page for UX issues", "Check accessibility" | Quick Reference checklist |
| **Fix a UI bug** | "Button hover is broken", "Layout shifts on load" | Quick Reference → relevant section |
| **Improve / optimize** | "Make this faster", "Improve mobile experience" | Step 3 (domain: ux, react) |
| **Dark mode** | "Add dark mode support" | Step 3 (domain: style "dark mode") |
| **Charts / data viz** | "Add an analytics chart" | Step 3 (domain: chart) |
| **Next.js / React best practices** | "Next.js performance tips", "React rendering optimization" | Step 4 (stack search) |
| **Portfolio** | "Build a portfolio site with dark mode" | Step 1 → Step 2 (design system) |

---

## Prerequisites

Check if Python is installed:

```bash
python3 --version || python --version
```

If Python is not installed:

**macOS:**
```bash
brew install python3
```

**Ubuntu/Debian:**
```bash
sudo apt update && sudo apt install python3
```

**Windows:**
```powershell
winget install Python.Python.3.12
```

---

## Workflow

### Step 1: Analyse Requirements

Extract from the user's request:
- **Product type:** SaaS, portfolio, landing page, e-commerce, marketing site
- **Target audience:** developers, consumers, business buyers, creative clients
- **Style keywords:** minimal, dark, bold, editorial, glassmorphic, vibrant, clean
- **Stack:** Next.js (default) or React + Tailwind + shadcn/ui

### Step 2: Generate Design System (Always Start Here)

Run `--design-system` first to get a complete, reasoned recommendation:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<product_type> <keywords>" --design-system [-p "Project Name"]
```

This command:
1. Searches product, style, color, landing, and typography databases in parallel
2. Applies 161 reasoning rules to select best matches for your project type
3. Returns a complete design system: style, colors, typography, effects, anti-patterns
4. Flags patterns that typically harm conversion or accessibility

**Examples for your project types:**

```bash
# Landing page
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS landing page modern conversion" --design-system -p "My SaaS"

# Dashboard
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS analytics dashboard data-dense" --design-system -p "Dashboard"

# Portfolio
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "developer portfolio dark minimal editorial" --design-system -p "Portfolio"
```

### Step 2b: Persist Design System (Recommended for Multi-Page Projects)

Save the design system to your project so it stays consistent across sessions:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name"
```

This creates:
- `design-system/MASTER.md` — Global source of truth: colors, fonts, spacing, style rules
- `design-system/pages/` — Folder for page-specific overrides

**Add a page-specific override:**
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system --persist -p "Project Name" --page "dashboard"
```

Creates `design-system/pages/dashboard.md` with rules that override MASTER for that page only.

**How to use it when building:**
```
I am building the [Page Name] page.
Read design-system/MASTER.md first.
Check if design-system/pages/[page-name].md exists — if it does, its rules take priority.
Now generate the code following those rules.
```

### Step 3: Deep-Dive Domain Searches (As Needed)

After generating the design system, use domain searches to dig into specific decisions:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<keyword>" --domain <domain> [-n <max_results>]
```

| Need | Domain | Example |
|------|--------|---------|
| Product type patterns | `product` | `--domain product "SaaS dashboard"` |
| Style options | `style` | `--domain style "glassmorphism dark"` |
| Color palettes | `color` | `--domain color "SaaS fintech"` |
| Font pairings | `typography` | `--domain typography "professional modern"` |
| Chart recommendations | `chart` | `--domain chart "real-time dashboard analytics"` |
| UX best practices | `ux` | `--domain ux "animation accessibility loading"` |
| Landing page structure | `landing` | `--domain landing "hero social-proof CTA"` |
| React/Next.js performance | `react` | `--domain react "rerender memo bundle cache"` |
| AI prompt / CSS keywords | `prompt` | `--domain prompt "minimalism"` |

### Step 4: Stack-Specific Guidelines

Get Next.js or React implementation best practices:

```bash
# Next.js (App Router, RSC, Server Actions, Image optimisation)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<topic>" --stack nextjs

# React (hooks, state, rendering, performance)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<topic>" --stack react

# shadcn/ui component system
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<topic>" --stack shadcn

# Tailwind CSS utilities
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<topic>" --stack html-tailwind
```

---

## Example Full Workflow

**Request:** "Build a SaaS dashboard landing page with dark mode."

```bash
# Step 2: Design system
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard landing dark modern" --design-system -p "SaaS Landing"

# Step 2b: Persist it
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard landing dark modern" --design-system --persist -p "SaaS Landing"

# Step 3: Supplement
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "dark mode glassmorphism minimal" --domain style
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "hero CTA social-proof" --domain landing
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "animation loading accessibility" --domain ux

# Step 4: Stack
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "App Router image optimisation performance" --stack nextjs
```

Then: synthesise all results and build the component with correct colors, fonts, spacing, and structure.

---

## Output Formats

```bash
# ASCII box (default, best for terminal)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS landing" --design-system

# Markdown (best for saving to docs)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS landing" --design-system -f markdown
```

---

## Rule Categories by Priority

| Priority | Category | Impact | Domain | Key Checks | Anti-Patterns |
|----------|----------|--------|--------|------------|---------------|
| 1 | Accessibility | CRITICAL | `ux` | Contrast 4.5:1, alt text, keyboard nav, aria-labels | Removing focus rings, icon-only buttons without labels |
| 2 | Touch & Interaction | CRITICAL | `ux` | Min size 44×44px, 8px+ spacing, loading feedback | Hover-only interactions, 0ms state changes |
| 3 | Performance | HIGH | `ux` | WebP/AVIF, lazy loading, CLS < 0.1 | Layout thrashing, cumulative layout shift |
| 4 | Style Selection | HIGH | `style`, `product` | Match product type, consistency, SVG icons only | Mixing flat + skeuomorphic, emoji as icons |
| 5 | Layout & Responsive | HIGH | `ux` | Mobile-first breakpoints, viewport meta, no horizontal scroll | Fixed px widths, disable zoom, horizontal scroll |
| 6 | Typography & Color | MEDIUM | `typography`, `color` | Base 16px, line-height 1.5, semantic color tokens | Text < 12px, gray-on-gray, raw hex in components |
| 7 | Animation | MEDIUM | `ux` | 150–300ms, transform/opacity only, reduce-motion | Animating width/height, decorative-only animation |
| 8 | Forms & Feedback | MEDIUM | `ux` | Visible labels, error near field, submit state | Placeholder-only label, errors only at top |
| 9 | Navigation Patterns | HIGH | `ux` | Predictable back, max 5 nav items, deep linking | Overloaded nav, broken back behaviour |
| 10 | Charts & Data | LOW | `chart` | Legends, tooltips, accessible colors | Color-only meaning, missing empty states |

---

## Quick Reference

### 1. Accessibility (CRITICAL)

- `color-contrast` — Minimum 4.5:1 for normal text (3:1 for large text / UI components)
- `focus-states` — Visible focus ring on all interactive elements (2–4px outline)
- `alt-text` — Descriptive alt on all meaningful images; `alt=""` for decorative
- `aria-labels` — aria-label on icon-only buttons; never leave them unlabelled
- `keyboard-nav` — Tab order matches visual order; full keyboard support
- `form-labels` — Every input has a visible `<label>` with correct `for` attribute
- `skip-links` — "Skip to main content" link for keyboard users
- `heading-hierarchy` — Sequential h1→h6, never skip a level
- `color-not-only` — Never use color alone to convey information; add icon or text
- `reduced-motion` — Respect `prefers-reduced-motion`; disable or reduce animations
- `voiceover-sr` — Logical reading order and meaningful labels for screen readers
- `escape-routes` — Cancel/back affordance in all modals and multi-step flows

### 2. Interaction (CRITICAL)

- `touch-target-size` — Min 44×44px clickable area; extend hit area with padding when needed
- `touch-spacing` — Min 8px gap between adjacent interactive elements
- `hover-vs-click` — Primary interactions use click/tap, never hover-only
- `loading-buttons` — Disable + show spinner during async operations
- `error-feedback` — Clear error messages placed near the problem
- `cursor-pointer` — Add `cursor-pointer` to all clickable non-button elements
- `tap-delay` — Use `touch-action: manipulation` to eliminate 300ms delay
- `press-feedback` — Visual feedback on press within 100ms (opacity, scale, ripple)
- `no-precision-required` — Never require pixel-perfect clicks on small elements

### 3. Performance (HIGH)

- `image-optimization` — Use `next/image` for automatic WebP, lazy loading, sizing
- `image-dimension` — Declare width/height or aspect-ratio to prevent layout shift (CLS)
- `font-loading` — Use `font-display: swap`; preload only critical fonts
- `lazy-loading` — Dynamic import non-critical components with `next/dynamic`
- `bundle-splitting` — Split by route (Next.js App Router does this automatically)
- `content-jumping` — Reserve space for async content to avoid CLS
- `debounce-throttle` — Debounce search inputs, throttle scroll/resize handlers
- `reduce-reflows` — Batch DOM reads then writes; avoid reading layout in loops
- `virtualize-lists` — Virtualise lists with 50+ items (react-window / tanstack-virtual)
- `main-thread-budget` — Keep per-frame work under ~16ms; offload heavy tasks

### 4. Style Selection (HIGH)

- `style-match` — Match style to product (use `--design-system` for recommendations)
- `consistency` — Same style, tokens, and component language across all pages
- `no-emoji-icons` — Use SVG icon libraries only: Lucide, Heroicons, Phosphor, Radix Icons
- `color-palette-from-product` — Derive palette from product type (search `--domain color`)
- `effects-match-style` — Shadows, blur, radius aligned with chosen aesthetic
- `dark-mode-pairing` — Design light and dark variants together, never assume one works for both
- `icon-style-consistent` — One icon set, one stroke width, one visual language throughout
- `primary-action` — One primary CTA per page/section; secondary actions visually subordinate
- `state-clarity` — Hover, active, disabled states are visually distinct on every interactive element
- `elevation-consistent` — Consistent shadow/elevation scale for cards, modals, dropdowns

### 5. Layout & Responsive (HIGH)

- `viewport-meta` — `width=device-width, initial-scale=1` — never disable zoom
- `mobile-first` — Design mobile first, scale up via breakpoints
- `breakpoint-consistency` — Systematic breakpoints: 375 / 768 / 1024 / 1440
- `readable-font-size` — Min 16px body on mobile (avoids iOS auto-zoom)
- `line-length-control` — Mobile 35–60 chars per line; desktop 60–75
- `horizontal-scroll` — Zero horizontal scroll on any viewport
- `spacing-scale` — 4px/8px incremental spacing system throughout
- `container-width` — Consistent max-width: `max-w-6xl` or `max-w-7xl` + `mx-auto`
- `z-index-management` — Define a z-index scale: 0 / 10 / 20 / 40 / 100 / 1000
- `fixed-element-offset` — Fixed navbar must reserve equivalent padding-top on content
- `scroll-behavior` — Avoid nested scroll regions that conflict with page scroll
- `viewport-units` — Use `min-h-dvh` instead of `100vh` on mobile
- `visual-hierarchy` — Establish hierarchy via size, spacing, contrast — not color alone

### 6. Typography & Color (MEDIUM)

- `line-height` — 1.5–1.75 for body text
- `line-length` — 65–75 characters per line max
- `font-pairing` — Match heading/body personalities; search `--domain typography`
- `font-scale` — Consistent type scale: 12 / 14 / 16 / 18 / 24 / 32 / 48
- `contrast-readability` — Dark text on light backgrounds; never gray-on-gray
- `weight-hierarchy` — Headings 600–700, body 400, labels/captions 500
- `color-semantic` — Define semantic tokens (primary, secondary, error, surface, muted) in CSS vars or Tailwind config — never raw hex in components
- `color-dark-mode` — Dark mode uses tonal/desaturated variants, not inverted colors
- `color-accessible-pairs` — Verify foreground/background pairs: 4.5:1 (AA) or 7:1 (AAA)
- `color-not-decorative` — Error red and success green must include icon or text, not color alone
- `truncation-strategy` — Prefer wrapping; when truncating use ellipsis + tooltip for full text
- `whitespace-balance` — Whitespace groups related items and separates sections; never clutter

### 7. Animation (MEDIUM)

- `duration-timing` — 150–300ms micro-interactions; complex transitions ≤400ms
- `transform-performance` — Animate `transform` and `opacity` only; never `width`, `height`, `top`, `left`
- `loading-states` — Skeleton/shimmer when load > 300ms; avoid blank content jumps
- `easing` — `ease-out` entering, `ease-in` exiting; never `linear` for UI
- `exit-faster-than-enter` — Exit animations ~60–70% of enter duration
- `motion-meaning` — Every animation must express cause-effect, not just be decorative
- `stagger-sequence` — Stagger list/grid entrance by 30–50ms per item
- `interruptible` — Animations must be cancellable by user action immediately
- `no-blocking-animation` — Never block user input during animation
- `excessive-motion` — Animate 1–2 key elements per view maximum; avoid scattered effects
- `spring-physics` — Prefer spring/physics curves for natural feel (Framer Motion spring)

### 8. Forms & Feedback (MEDIUM)

- `input-labels` — Visible label per input — never placeholder-only
- `error-placement` — Error message below the field that caused it
- `submit-feedback` — Loading → success/error state on every form submit
- `required-indicators` — Mark required fields with asterisk + legend
- `empty-states` — Helpful message and action when no data/content exists
- `toast-dismiss` — Auto-dismiss toasts in 3–5 seconds; always dismissable manually
- `confirmation-dialogs` — Confirm before all destructive actions
- `inline-validation` — Validate on blur (not on keystroke); show error after user finishes input
- `input-type-keyboard` — Use semantic input types: `email`, `tel`, `number`, `url`
- `password-toggle` — Show/hide toggle on all password fields
- `autofill-support` — Use `autocomplete` attributes so browsers can autofill
- `undo-support` — Allow undo for destructive or bulk actions (toast with undo)
- `error-clarity` — Error messages state cause + how to fix; never just "Invalid input"
- `multi-step-progress` — Show step indicator on multi-step forms; allow back navigation
- `focus-management` — After submit error, auto-focus the first invalid field
- `destructive-emphasis` — Destructive actions use red and are visually separated from primary

### 9. Navigation Patterns (HIGH)

- `nav-limit` — Desktop nav: max 5–7 top-level items; consolidate into dropdown beyond that
- `back-behavior` — Back navigation is predictable and preserves scroll/state
- `deep-linking` — All key pages reachable via direct URL
- `nav-state-active` — Current page/section highlighted in nav (color, weight, or indicator)
- `nav-hierarchy` — Primary nav (top/sidebar) clearly separate from secondary (footer/settings)
- `modal-escape` — Every modal and drawer has a clear close affordance; `Escape` key works
- `breadcrumb-web` — Use breadcrumbs for 3+ level deep hierarchies
- `state-preservation` — Back navigation restores scroll position, filter state, and inputs
- `search-accessible` — Search always reachable; provide recent/suggested queries
- `overflow-menu` — When actions exceed space, use overflow/more menu not crammed icons
- `adaptive-navigation` — Large screens (≥1024px) can use sidebar; small screens top/hamburger
- `back-stack-integrity` — Never silently reset navigation stack or jump to home unexpectedly
- `avoid-mixed-patterns` — Don't mix Top Nav + Sidebar + Bottom Nav at the same hierarchy level
- `focus-on-route-change` — After page transition, move focus to main content for screen readers
- `destructive-nav-separation` — Dangerous actions (delete, logout) separated from normal nav items

### 10. Charts & Data (LOW)

- `chart-type` — Match chart to data: trend → line, comparison → bar, proportion → donut
- `color-guidance` — Use accessible palettes; avoid red/green-only pairs for colorblind users
- `data-table` — Provide table fallback for screen readers; charts alone aren't accessible
- `legend-visible` — Always show legend near chart, not below a scroll fold
- `tooltip-on-interact` — Show exact values on hover (web) or click
- `axis-labels` — Label axes with units; avoid rotated labels on mobile
- `responsive-chart` — Charts reflow on small screens (horizontal bar, fewer ticks)
- `empty-data-state` — Meaningful empty state when no data; never a blank/broken chart frame
- `loading-chart` — Skeleton placeholder while chart data loads
- `animation-optional` — Chart animations respect `prefers-reduced-motion`
- `touch-target-chart` — Interactive chart elements (points, segments) have ≥44px tap area
- `no-pie-overuse` — Avoid pie/donut for >5 categories; use bar chart instead
- `contrast-data` — Data lines/bars vs background ≥3:1; data labels ≥4.5:1
- `gridline-subtle` — Grid lines low-contrast (e.g. `gray-200`) so they don't compete with data

---

## Common Sticking Points

| Problem | What to Do |
|---------|------------|
| Can't decide on style/color | Re-run `--design-system` with different keywords |
| Dark mode contrast issues | `--domain color "dark mode"` + check `color-dark-mode` rule |
| Animations feel unnatural | Use `ease-out` enter, `ease-in` exit; try spring physics |
| Form UX is poor | `inline-validation` + `error-clarity` + `focus-management` |
| Navigation feels confusing | Check `nav-hierarchy` + `back-behavior` + `state-preservation` |
| Layout breaks on mobile | `mobile-first` + `breakpoint-consistency` + `viewport-units` |
| Performance / layout shift | `next/image` + `image-dimension` + `content-jumping` |
| Bundle too large | `lazy-loading` + `bundle-splitting` (Next.js dynamic import) |
| Page looks generic | Re-run `--design-system`; try a more specific product keyword |

---

## Pre-Delivery Checklist

Run before shipping any UI:

### Visual Quality
- [ ] No emojis used as icons — SVG library only (Lucide, Heroicons, Phosphor)
- [ ] Icons consistent in style, stroke width, and size
- [ ] Semantic color tokens used throughout — no hardcoded hex in components
- [ ] Hover, focus, active, disabled states defined on all interactive elements
- [ ] Light and dark mode both tested independently

### Interaction
- [ ] All clickable elements have visible press feedback
- [ ] Click/touch targets ≥44×44px
- [ ] Micro-interaction timing in 150–300ms range
- [ ] Disabled states are visible and non-interactive
- [ ] Keyboard navigation works in logical order
- [ ] Forms validate on blur, not on keystroke

### Responsive
- [ ] No horizontal scroll at any viewport width
- [ ] Tested at 375px, 768px, 1024px, 1440px
- [ ] Mobile font size ≥16px body
- [ ] Fixed navbar reserves equivalent padding-top on content
- [ ] `min-h-dvh` used instead of `100vh`

### Performance (Next.js specific)
- [ ] Images use `next/image` with explicit width/height
- [ ] Non-critical components use `next/dynamic`
- [ ] Fonts loaded via `next/font` with `display: swap`
- [ ] No layout shift from async content (CLS < 0.1)
- [ ] Lists with 50+ items are virtualised

### Accessibility
- [ ] All images have meaningful alt text
- [ ] All form inputs have visible labels
- [ ] Color is never the only indicator of meaning
- [ ] `prefers-reduced-motion` respected
- [ ] Focus rings visible on all interactive elements
- [ ] aria-labels on all icon-only buttons

---

## Search Reference

### Available Domains

| Domain | Use For | Example Keywords |
|--------|---------|-----------------|
| `product` | Product type recommendations | SaaS, portfolio, e-commerce, marketing, healthcare |
| `style` | UI styles and effects | glassmorphism, minimalism, dark mode, brutalism, bento |
| `typography` | Font pairings | elegant, playful, professional, modern, editorial |
| `color` | Color palettes by product type | saas, fintech, portfolio, ecommerce |
| `landing` | Page structure, CTA strategies | hero, testimonials, pricing, social-proof |
| `chart` | Chart types and libraries | trend, comparison, real-time, funnel, timeline |
| `ux` | Best practices, anti-patterns | animation, accessibility, loading, forms, navigation |
| `react` | React/Next.js performance | bundle, memo, rerender, suspense, cache, waterfall |
| `prompt` | AI prompts and CSS keywords | (style name e.g. "minimalism") |

### Available Stacks

| Stack | Use For |
|-------|---------|
| `nextjs` | App Router, RSC, Image, Font, Server Actions |
| `react` | Hooks, state, rendering, component patterns |
| `shadcn` | shadcn/ui component setup and usage |
| `html-tailwind` | Tailwind utility patterns, responsive classes |
| `svelte` | Svelte-specific patterns |
| `vue` | Vue 3 Composition API patterns |
| `astro` | Static site / content-focused patterns |
