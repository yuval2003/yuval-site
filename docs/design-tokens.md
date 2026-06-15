# Design tokens — Yuval Tserlin guitar teacher site

Direction: editorial-warm. Warm off-white ground, one earth-tone accent, high
contrast text, generous whitespace. No drop shadows, no heavy gradients, no
rounded-card aesthetic. Mobile-first, RTL.

All contrast ratios below are computed against the page background `#F5EFE6`
and meet **WCAG AA** (4.5:1 for normal text, 3:1 for large text).

---

## 1. Color palette

| Token | Hex | Contrast on bg | Use |
|-------|-----|----------------|-----|
| `--bg` | `#F5EFE6` | — | Page background. Warm off-white, not pure white. The default ground for every page. |
| `--text` | `#2A2622` | **13.0:1** | Primary text. Warm near-black for body copy and headings. |
| `--text-muted` | `#5C5349` | **6.3:1** | Secondary text: captions, the plain-text phone number, footer meta, form hints. Still passes AA. |
| `--accent` | `#9C4A2F` | **5.3:1** | The one accent. Links, the primary phone button fill, focus rings, h2 underlines/rules. Passes AA as text *and* as a button background with a pure-white (`#FFFFFF`) label (~6.4:1, see Font weights and worked example). |
| `--accent-hover` | `#7E3A23` | higher | Hover/active state of accent elements. Darker, so contrast only improves. |
| `--border` | `#DfD7C9` | — | Hairline dividers and form-field borders. ~1px rules only — no boxes, no shadows. Decorative, never used for text. |
| `--surface` | `#FBF7F0` | — | Optional very-light raised tone for the form area, to separate it from the page without a card/shadow. Use sparingly. |

### Why the accent is muted terracotta (`#9C4A2F`), not olive

Both terracotta and deep olive are legitimate "muted earth-tone" picks. I chose
terracotta because:

- **Warmth + approachability.** This is a lead-gen page for a teacher; the
  emotional read should be inviting, not austere. Terracotta sits in the same warm
  family as the off-white ground, so the palette reads cohesive rather than
  contrasty.
- **It works as a button fill *and* as link text.** At `#9C4A2F` it clears AA
  (5.3:1) on the background for normal-size text, so the same token serves links,
  rules, and the primary CTA without a second accent. With a pure-white
  (`#FFFFFF`) button label it reaches ~6.4:1 — comfortably above AA and
  approaching AAA — so the CTA label uses white, not `--bg`.

**Tradeoff / downside (named honestly):** terracotta is a common choice for
"warm editorial" sites and risks looking generic; deep olive would feel more
distinctive and slightly more restrained. If the owner wants a less expected
look, swap `--accent` to a deep olive such as `#5A5A2A` — note it must be
re-checked for AA before use (a mid olive can fall short as link text). The token
structure does not change, only the two accent hex values.

---

## 2. Type scale

Headings: Frank Ruhl Libre. Body/UI: Assistant. Base = 16px = 1rem.
Two columns where mobile and desktop differ; single value otherwise. Hebrew body
copy uses a generous line-height (1.7) for readability.

| Token | Mobile | Desktop (`md`+) | Line-height | Use |
|-------|--------|------------------|-------------|-----|
| `h1` | 40px / 2.5rem | 56px / 3.5rem | 1.1 | Hero tagline, page titles. Frank Ruhl Libre. |
| `h2` | 30px / 1.875rem | 36px / 2.25rem | 1.2 | Section headings (`הגישה שלי`, `שיעורים`). Bumped from 28/32px to tighten the hierarchy gap below h1 on the structured `/about` page. |
| `h3` | 20px / 1.25rem | 22px / 1.375rem | 1.3 | Sub-sections. |
| `body` | 18px / 1.125rem | 18px / 1.125rem | 1.7 | Default prose. Assistant. 18px chosen over 16 for Hebrew legibility. |
| `small` | 14px / 0.875rem | 14px / 0.875rem | 1.5 | Captions, footer meta, form hints, plain-text phone number. |

Measure (line length): cap prose at ~`60ch` for comfortable Hebrew reading.

---

## 3. Spacing scale

Base unit **4px**. Use these increments only; do not invent in-between values.

| Token | px | rem |
|-------|----|----|
| `space-1` | 4 | 0.25rem |
| `space-2` | 8 | 0.5rem |
| `space-3` | 12 | 0.75rem |
| `space-4` | 16 | 1rem |
| `space-6` | 24 | 1.5rem |
| `space-8` | 32 | 2rem |
| `space-12` | 48 | 3rem |
| `space-16` | 64 | 4rem |
| `space-24` | 96 | 6rem |

Convention: section vertical rhythm uses `space-16` (mobile) → `space-24`
(desktop). Intra-section gaps use `space-4`/`space-6`. This maps cleanly onto
Tailwind's default 4px spacing scale, so no Tailwind config override is needed.

---

## 4. Breakpoints

Aligned with Tailwind defaults so no config override is required.

| Name | Min width | Token |
|------|-----------|-------|
| Mobile | 0 (base) | — (default styles) |
| Tablet | 768px | `md` |
| Desktop | 1024px | `lg` |

`sm` (640) and `xl` (1280) remain available but the design targets these three.
Mobile-first: write base styles for mobile, layer `md`/`lg` upward.

---

## 5. Font weights

Each family is constrained to **two weights** to protect the page-weight budget
(only these four font files ship; see PLAN.md asset list). Do not load or use any
other weight.

| Family | Weights | Used for |
|--------|---------|----------|
| Frank Ruhl Libre | Regular (400), Medium (500) | h1, h2, h3 |
| Assistant | Regular (400), Semibold (600) | body, small, button labels |

Per-token weight:

| Token / element | Family | Weight |
|-----------------|--------|--------|
| h1 | Frank Ruhl Libre | 500 (Medium) |
| h2, h3 | Frank Ruhl Libre | 500 (Medium) |
| body, small | Assistant | 400 (Regular) |
| button label, emphasis spans | Assistant | 600 (Semibold) |

---

## 6. Border radius

**0px throughout** — fully square corners on every element (buttons, form
fields, the optional `--surface` form area). No exceptions. Editorial-warm reads
more consistently with square corners than with a small radius; the earlier 2px
radius is dropped. There is no radius token — `border-radius` is simply not set
(equivalently `0`).

---

## 7. Worked example — Hero section

Concrete values for the homepage hero, CSS-variable-style. Shows how the tokens
above combine. RTL assumed.

```css
.hero {
  background-color: var(--bg);          /* #F5EFE6 */
  /* pure image hero — no video markup today (see PLAN.md §2.2, §4) */
  background-image: url("/images/hero.jpg");
  background-size: cover;
  background-position: center;

  padding-block: var(--space-16);       /* 64px mobile */
  padding-inline: var(--space-6);       /* 24px, logical prop for RTL */
}
@media (min-width: 1024px) {            /* lg */
  .hero { padding-block: var(--space-24); }  /* 96px desktop */
}

.hero__tagline {                        /* h1 */
  font-family: "Frank Ruhl Libre", serif;
  font-weight: 500;                     /* Medium */
  font-size: 2.5rem;                    /* 40px mobile  */
  line-height: 1.1;
  color: var(--text);                   /* #2A2622, 13:1 contrast */
  max-inline-size: 18ch;                /* keep the line tight */
  margin-block-end: var(--space-8);     /* 32px down to the CTA */
}
@media (min-width: 768px) {             /* md */
  .hero__tagline { font-size: 3.5rem; } /* 56px desktop */
}

.hero__cta {                            /* phone + WhatsApp side by side */
  display: flex;
  flex-direction: column;               /* stacked on mobile */
  gap: var(--space-4);                  /* 16px */
}
@media (min-width: 768px) {
  .hero__cta { flex-direction: row; }   /* horizontal from tablet up */
}

.btn--phone {                           /* primary CTA */
  background-color: var(--accent);      /* #9C4A2F */
  color: #FFFFFF;                       /* pure-white label, ~6.4:1 */
  font-family: "Assistant", sans-serif;
  font-weight: 600;                     /* Semibold */
  font-size: 1.125rem;                  /* 18px body */
  padding-block: var(--space-4);        /* 16px */
  padding-inline: var(--space-8);       /* 32px */
  /* no shadow, square corners — radius is 0 throughout (see §6) */
}
.btn--phone:hover { background-color: var(--accent-hover); } /* #7E3A23 */

.hero__phone-text {                     /* plain-text number under buttons */
  font-size: 0.875rem;                  /* small / 14px */
  color: var(--text-muted);             /* #5C5349 */
  margin-block-start: var(--space-3);   /* 12px */
  unicode-bidi: isolate;                /* digits/Latin inside RTL flow */
}
```

Reading of the example: 64–96px of breathing room around the hero, a 40→56px
Frank Ruhl Libre Medium tagline at ~13:1 contrast, the phone/WhatsApp buttons
stacked on mobile and side-by-side from tablet, a terracotta primary button with
a pure-white Assistant Semibold label at ~6.4:1, and the plain number in muted
text — all from the tokens above, no shadows, fully square corners.
