# Redesign v2 — plan

Goal: move off the cream/serif/terracotta AI-default and ground the design in the instrument's world (tonewood, steel string, sheet-music/tab notation). Accessibility and engineering floor stay as-is.

> **🔒 Blocked on assets (you):**
> - **Hero photo** — real photo of Yuval playing (shared in conversation; needs export to `public/images/hero.jpg`, ~2000px wide, landscape).
> - **About photo** — "Yuval by window" → `public/images/about.jpg`.
> Everything except the final hero/about image drop-in can ship without these.

---

## 1. Typography — LOCKED (Heebo, single family)

Replace Frank Ruhl Libre + Assistant with **Heebo** (Oded Ezer) for headings and body. Self-host via `@fontsource/heebo`, Hebrew + Latin subsets only. Hierarchy comes from **weight**, not family.

**Load 4 weights:** 400, 600, 700, 800 (Hebrew + Latin). Drop all 8 current `@fontsource` imports.

| Role | Weight | Desktop | Mobile | line-height | tracking |
|------|--------|---------|--------|-------------|----------|
| h1 | 800 | 52px | 36px | 1.1 | -0.01em |
| h2 | 700 | 32px | 26px | 1.2 | -0.005em |
| h3 | 600 | 20px | 19px | 1.3 | 0 |
| body | 400 | 18px | 18px | 1.7 | 0 |
| pull-quote | 700 | 40px | 30px | 1.25 | -0.005em |
| button / label | 600 | 16px | 16px | 1 | 0.01em |
| small / meta | 400 | 14px | 14px | 1.5 | 0 |

`--font-heading` and `--font-body` both → `"Heebo", system-ui, sans-serif`. The 800↔400 jump is the whole hierarchy.

---

## 2. Color tokens — tonewood direction

The dark **tonewood** tone is the change that breaks the flat-cream look: it creates zones (hero scrim, pull-quote band) and depth the current 7 warm-neutrals can't.

| Token | Hex | Role / rationale |
|-------|-----|------------------|
| `--paper` (bg) | `#f4eee2` | Warm aged-sheet-music paper; nudged off the `#F4F1EA` cliché. |
| `--surface` | `#fcf8f1` | Cards — sits *lighter* than paper. |
| `--ink` | `#221d18` | Espresso body text. |
| `--ink-muted` | `#6a6055` | Meta, captions. |
| `--wood` | `#38271b` | **NEW.** Roasted rosewood/walnut. Dark bands, hero scrim, pull-quote bg. |
| `--wood-deep` | `#271a11` | Deepest wood, gradients. |
| `--accent` | `#a8472a` | Terracotta refined warmer (spruce-stain). The *single* solid CTA color. |
| `--accent-hover` | `#883820` | |
| `--brass` | `#c1934a` | **NEW second tone.** Steel-string/brass: hairline rules, fret-marker dots, emphasis in the pull-quote. |
| `--border` | `#cdbda3` | Darkened from `#dfd7c9` so edges read. |
| `--field-border` | `#b09a7c` | Inputs only — see §7. |

Radius stays `0` (intentional, not the cliché's fault).

---

## 3. Hero direction — split-screen (✅ shipped with real photo)

Real photo of Yuval playing. **No AI imagery.** The photo is a **portrait** (2316×3088, 3:4) with critical content top (the Magritte "Lovers" print), middle (Yuval), and bottom (the guitar) — so it is shown whole in its own column, **not** cropped to landscape behind a scrim. Tagline in `--paper`, Heebo 800, `clamp(2.25rem, 5vw, 3.25rem)`, `text-wrap: balance`, capped ~20ch. Signature: a thin **brass** rule (`4rem × 2px`) under the tagline. CTAs beneath: solid `התקשרו` + ghost `וואטסאפ` (`tone="light"`, see §6).

**Shipped (step 6 v2 — supersedes the full-bleed-with-scrim markup):** a two-column split, full-bleed (the `<section>` has no max-width).

```
Desktop (md+), RTL:
┌────────────────────────┬────────────────────────┐
│ (inline-end / LEFT)    │ (inline-start / RIGHT)  │
│   [ photo column ]     │   שיעורי גיטרה — דרך      │  ← --wood column
│   object-fit: cover    │   פשוטה ללמוד דברים…     │    paper tagline,
│   object-position      │   ───  (brass rule)     │    vertically
│   50% 42% (face/torso) │   [ התקשרו ] [ וואטסאפ ] │    centered
└────────────────────────┴────────────────────────┘
  height: clamp(560px, 82vh, 780px); columns share it; no scrim, clean edge.

Mobile (<md): photo on top (block-size 68vh, cover, same focus) so you see who
you'd learn from before the pitch; --wood text column stacked below.
```
Order: DOM is photo-then-text; desktop swaps with `order-1/2` so text takes the inline-start (right) column and the photo the inline-end (left). Text bg = `--wood` (`#38271b`) — tested against `--wood-deep`; `--wood` reads warmer next to the photo. Photo is a real `<img>` (`width/height` set, `fetchpriority="high"`) at `public/images/hero.jpg` (1500×2000, q70, 223 KB — sharp-processed from the 2316×3088 original, full frame preserved, no crop in the file itself).

---

## 4. Page layouts — use an editorial grid (don't just center)

**Premise (corrected — see Lessons learned below):** centering a narrow `60ch` column does *not* fill the void; it only removes the left/right asymmetry, and under RTL the eye still anchors at the column's right edge so it reads as right-leaning and sparse. The real fix is an **editorial grid: a narrow content column plus an intentionally-occupied margin** (sidenote headings, a `--brass` rule, or a signature/photo), and **asymmetric two-column bands** balanced by column ratio + alignment rather than naive 50/50.

**Home `/`** — hero-led.
```
[ hero — §3, full-bleed ]      ← drives the first-viewport impression
[ bio: centered max-w-3xl ]    ← acceptable once the hero anchors the page;
[ single solid CTA "צרו קשר" ]   do NOT re-work the bio before the photo lands
```
**Issue 1 (home bio "sparse") — status: RESOLVED (judged against the real photo).** With the split-screen hero carrying the real portrait, the first viewport is a strong, full-bleed photo + wood pitch — the step-4 "empty left half" is gone. The centered bio below now reads as a deliberate, calm coda against that anchor, not a void. **Optional, not required:** a small bio-padding tighten (`py-16 lg:py-24` → `py-12 lg:py-16`) would make the closing whitespace read as breathing room rather than slack — a judgment call, deferred to a future polish pass; not blocking.

**About `/about`** — asymmetric band + sidenote text + a wood band:
```
h1 עליי
┌───────────────────┬───────────────┐
│ long bio (1.4fr)  │ photo (1fr)    │  ← grid-cols-[1.4fr_1fr] md:items-start;
└───────────────────┴───────────────┘    photo capped (max-w-[16rem] → fills
[ ===== pull-quote, full-bleed wood band ===== ]   narrow col), top-aligned (§5)
┌────────────────────────────┬──────┐
│ prose                       │ h2   │  ← sidenote grid: grid-cols-[1fr_3fr].
│ (הגישה שלי / שיעורים / בהמשך) │(right)│    In RTL the 1fr track is inline-START
└────────────────────────────┴──────┘    (right), so the heading sits in the
                                          right 1fr column, text-aligned to
                                          inline-start, hugging the OUTER page
                                          margin (not the gutter). 3fr = prose.
                                          ⚠ implemented in STEP 5, not step 4.
inline CTA (text link)
```

**Contact `/contact`** — two columns, equal height:
```
h1 צור קשר
┌──────────────────────────┬──────────────────────┐
│ reassurance (3 lines)    │                       │  grid md:items-stretch;
│  • באותו יום              │                       │  aside = flex flex-col
│  • אזור המרכז             │                       │  justify-start (flows from
│  • מתחילים מאפס           │   [ contact form ]    │  the top), gap-8 between
│  ── מה מצפה בשיחה (label) │                       │  THREE content blocks:
│  • נכיר…                  │                       │  reassurance lines, the
│  • נראה מאיזה שיר…        │                       │  "first call" mini-section
│  • אם מתאים…              │                       │  (brass-underlined label +
│  [התקשרו] [וואטסאפ◌]      │                       │  3 lines), then CTAs.
└──────────────────────────┴──────────────────────┘
```
On mobile both stack (reassurance above the form); the inline CTA pair is `hidden md:block` (the sticky bar covers phone/WhatsApp on mobile). The "first call" label is a `text-small` brass-underlined panel label — deliberately subordinate to the page h2s, not a heading. Each block earns its place with real content, so the column reads full under `justify-start` rather than padded; any residual whitespace lands at the column's bottom (natural trailing space), not its middle. Three reassurance lines and three first-call lines — no filler.

**Lessons learned (step-4 review):** *centering ≠ filling.* The first cut of §4 assumed `mx-auto max-w-3xl` would resolve the void; it didn't. A lone centered column on a wide desktop leaves large symmetric margins that still read as empty, and because Hebrew is RTL the content's right edge anchors the eye, so "centered" is misread as "right-hugging." Two further failures came from naive 50/50 grids: a portrait photo dwarfs a short bio (mass mismatch), and a short reassurance column top-pinned beside a tall form leaves a void beneath it. The corrected approach: **occupy the margin on purpose** (sidenote headings / brass rule / signature) and **balance two-column bands** with asymmetric ratios + `items-stretch`/`justify-start`, never bare centering.

**Lessons learned #2 (step-4.5 contact):** *redistributing thin content ≠ filling either.* The first contact polish used `justify-between` to push the 3 reassurance lines to the top and the CTAs to the bottom of a stretched column — which simply **recreated the void in the column's middle** (~340px of dead space). Spreading the same sparse content across the height is the same mistake as centering, just on the vertical axis. The fix is **more content blocks that each carry their own purpose** (here, a "what to expect on the first call" mini-section), flowed naturally with `justify-start` — not padding inserted for layout's sake. If a column is short, give it a reason to be taller, don't stretch the gaps.

**Lessons learned #3 (step-6 hero):** *the hero pattern must be chosen against the actual photo, not in advance.* §3 was speced as full-bleed-with-scrim and the markup was even built that way — but that pattern needs a landscape (or croppable) shot, and the real photo turned out to be a **posed portrait** with essential content top, middle, and bottom that no landscape crop survives. We pivoted to **split-screen** (photo whole in one column, text on `--wood` in the other). Rule of thumb: **full-bleed-with-scrim suits atmospheric / landscape images** where text can float over a quiet region; **posed-portrait subjects belong in split-screen** where the photo keeps its own frame. Don't commit a hero pattern until the photo exists.

---

## 5. Pull-quote — "מסובך / מורכב" (/about)

Full-bleed `--wood` band, generous `py` (96px desktop / 56px mobile), centered, `max-w-4xl`. Text in `--paper`, Heebo 700, 40px/30px. The two words **מסובך** and **מורכב** rendered in `--brass` to carry the contrast. Optional oversized brass fret-marker/quotation glyph behind. This becomes the page's memorable moment, not another `h2 + p`.

---

## 6. Button hierarchy — one solid + one ghost, once per page

- **Primary (solid):** `bg-accent` white label — the *phone* action `התקשרו`.
- **Secondary (ghost):** transparent, `1.5px` `--ink` border, `--ink` label; hover fills `--wood`/white → WhatsApp.

**Component API — `Button.astro` (and `CTAButtons.astro`):** both accept a **`tone`** prop that adapts the *ghost* variant (and, on `CTAButtons`, the phone-number text) to its background:

| `tone` | Use on | Ghost outline + label |
|--------|--------|-----------------------|
| `"dark"` *(default)* | cream/`--bg` surfaces (`/contact`, body) | `--ink` border + label; hover fills `--wood`/white |
| `"light"` | wood/dark surfaces (the hero scrim) | `--bg` (paper) border + label; hover fills paper, `--wood` label |

The solid variant is unaffected by `tone` (terracotta + white reads on both). Default is `"dark"`, so existing call sites are unchanged; only the hero passes `tone="light"`.

| Surface | Buttons |
|---------|---------|
| Hero | solid `התקשרו` + ghost `וואטסאפ` |
| Home body | single solid `צרו קשר` → /contact |
| /contact (top, once) | solid `התקשרו` + ghost `וואטסאפ` |
| /about | inline text link only |
| **Footer (site-wide)** | **text only** — phone number as link + location line. **No big button pair.** |

This removes the duplicate phone+WhatsApp block that currently repeats in body *and* footer on every page.

---

## 7. Form field contrast

- Card: `bg-surface` (`#fcf8f1`).
- Field bg: `--paper` (`#f4eee2`) — now *darker* than the card → visible separation.
- Field border: `--field-border` (`#b09a7c`), `1.5px`.
- Focus: border → `--accent` plus the existing `:focus-visible` ring (keep).
- Labels: Heebo 600.

---

## 8. Execution order (ship incrementally)

1. **Tokens + Heebo** (§1–2) — swap fonts and color vars. Foundational, low-risk, instantly visible. No layout changes yet. ✅ shipped
2. **Button hierarchy + footer slim-down** (§6) — small, removes the worst repetition. ✅ shipped
3. **Form contrast** (§7) — tiny, high polish. ✅ shipped
4. **Layout structure** (§4) — demote homepage form, two-column `/about` band, two-column `/contact`. Biggest structural win; no assets needed. ✅ shipped
   - **4.5 Polish pass** — corrections from the step-4 review: about band → asymmetric `grid-cols-[1.4fr_1fr]` + `items-start` + capped photo (✅ shipped); contact → see 4.5 v2 below. Home bio deferred to step 6; about mid-section sidenote grid folded into step 5.
   - **4.5 v2 Contact aside** — `justify-between` recreated the void mid-column, so reverted to `justify-start` (grid keeps `items-stretch`) and added a real second content block: a "מה מצפה לכם בשיחה הראשונה" mini-section (brass-underlined `text-small` label + 3 lines) between the reassurance lines and the CTAs. Inline CTA pair set `hidden md:block` (sticky bar covers mobile). ✅ shipped
5. **Pull-quote band + about sidenote grid** (§5) — the `--wood` pull-quote *and* the `grid-cols-[1fr_3fr]` sidenote treatment for הגישה שלי / שיעורים / בהמשך (heading in the inline-**start** / right 1fr column, text-aligned to inline-start so it hugs the outer page margin). Grouped here because both need `--wood`/`--brass`. ✅ shipped
6. **Hero — split-screen with real photo** (§3). ~~Step-6 v1 (full-bleed-with-scrim markup) — **superseded.**~~ **Step-6 v2 ✅ shipped:** split-screen (photo column + `--wood` text column), real photo at `public/images/hero.jpg`, `tone="light"` CTAs (prop documented in §6), brass hairline. See *Lessons learned #3*. Issue-1 re-judgment now done against the real photo (below).
7. **About photo** into the two-column band — **🔒 on `about.jpg`**.

Steps 1–6 shipped (hero now has its real photo). Remaining work is **asset-gated**: the `/about` band photo (`about.jpg`).
