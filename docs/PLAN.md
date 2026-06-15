# PLAN — Yuval Tserlin guitar teacher site

Status: draft for review. No code until approved.

This plan covers structure, components, assets, the form, and deploy. Design
values (color, type, spacing) live in `design-tokens.md`.

Authoritative source for intent: `brief.md`. Where `brief.md` and the
`project-context` skill differ, the brief wins. **Decided:** this is a guitar
*teacher* lead-gen site (primary action = book a lesson), per the brief. The
skill's "personal PR site for a fingerstyle guitarist" framing is stale and will
be updated post-build; do not build to it.

---

## 1. Sitemap

| Route | Status | Purpose | In nav? |
|-------|--------|---------|---------|
| `/` | Build now | Hero, short bio, primary contact CTA, contact form, footer. The conversion page. | Yes |
| `/about` | Build now | Long bio, teaching approach, lessons info, secondary photo. | Yes |
| `/contact` | Build now | Phone, WhatsApp, plain-text number, and the same contact form. | Yes |
| `/tabs` | Reserved | Future tab/arrangement store. Route reserved, page left empty/unbuilt. NOT linked from nav. | No |
| `/media` | Reserved | Future video page, once recording gear exists. Not built now. | No |

Nav contains exactly: `דף הבית` (/), `עליי` (/about), `צור קשר` (/contact).
RTL order: nav items read right-to-left.

---

## 2. Per-page wireframes (text)

Section order is top-to-bottom as the visitor scrolls. Layout is mobile-first;
"side by side" means stacked on mobile, horizontal from the `md` breakpoint up.

### `/` — Homepage

1. **Nav** — site name `יובל צרלין` (right side in RTL), three links.
2. **Hero**
   - Background: hero image (`/public/images/hero.jpg`). This is the edited
     Magritte-background couch photo (the real asset, not a placeholder; see
     Assets). The hero is a **pure image component** — no video markup. If/when
     video arrives, the Hero component is restructured at that point; nothing is
     reserved in code today.
   - Tagline (h1): `שיעורי גיטרה — דרך פשוטה ללמוד דברים מורכבים`
   - **Primary CTA (above the fold):** big phone button (`tel:0527071952`) and
     WhatsApp button (`https://wa.me/972527071952`) side by side. Plain-text
     number `052-707-1952` shown beneath.
3. **Short bio** — two short paragraphs from the brief (homepage version).
4. **Contact form** (the "secondary CTA") — placed *below* the short bio and
   primary CTA, per the explicit no-form-above-the-fold rule. This form **is** the
   "secondary CTA stack" from the brief (one form, not an extra button row).
   Fields: שם, טלפון, אימייל, הודעה.
5. **Footer** — phone + WhatsApp repeated, plain-text number, location line.
6. **Sticky mobile contact bar** — persistent bottom bar, mobile only (hidden on
   desktop). Phone + WhatsApp icons, dismissible via a small `X`. Rendered
   site-wide from `BaseLayout`, so it appears on every page, not just `/`. See
   `StickyContactBar` in Components.

### `/about` — Long bio

1. **Nav**
2. **Page heading (h1):** `עליי`
3. **Long bio** — the multi-paragraph version from the brief.
4. **`הגישה שלי`** (h2) — the "complicated vs. complex" approach text.
5. **`שיעורים`** (h2) — who he teaches, frontal-only, at student's home, מרכז.
6. **Secondary photo** (`/public/images/about.jpg`, placeholder) — Yuval by window.
7. **`בהמשך`** (h2) — one line teasing the future tab store. Text only, no link to `/tabs`.
8. **Inline CTA** — single line linking to `/contact` (or phone), to recover intent.
9. **Footer**

### `/contact` — Contact

1. **Nav**
2. **Page heading (h1):** `צור קשר`
3. **Direct contact block** — phone button + WhatsApp button + plain-text number,
   same component as the hero CTA.
4. **Contact form** — same `ContactForm` component as the homepage.
5. **Location line** — frontal lessons, student's home, אזור המרכז (Pardesiyya base).
6. **Footer**

---

## 3. Components

Reusable, kept small. Astro components (`.astro`), no framework islands.

| Component | Used on | Notes |
|-----------|---------|-------|
| `BaseLayout` | all | `<html dir="rtl" lang="he">`, `<head>` (fonts, meta, OG), skip-to-main link, semantic landmarks, slot for page body. Renders `StickyContactBar` site-wide. |
| `Nav` | all | Site name + 3 links, wrapped in `<nav>`. RTL. Mobile: keyboard-reachable inline row or minimal toggle with **no JS-only menu** (must work without JS). |
| `Footer` | all | `<footer>` with phone + WhatsApp + plain number + location. |
| `Hero` | `/` | Pure image background (no video markup), tagline, embeds `CTAButtons`. |
| `CTAButtons` | `/`, `/contact` | Phone + WhatsApp buttons side by side + plain-text number. The single source for the contact action. |
| `StickyContactBar` | all (mobile only) | Persistent bottom bar on mobile with phone + WhatsApp icons, dismissible via a small `X`. Hidden on desktop. Dismiss may use minimal inline JS; core links must work without it. |
| `BioBlock` | `/`, `/about` | Prose container with correct Hebrew measure/line-height. Takes a slot. |
| `ContactForm` | `/`, `/contact` | 4 fields, posts to form service. Plain HTML form, no client JS for submit. |
| `SectionHeading` | `/about`, `/contact` | h2 styling wrapper (optional; may just be Tailwind utility classes). |
| `Eng` | anywhere inline English appears | Small bidi-isolation component (see below). |

**Inline English handling.** Inline English (names, future song titles) is a
small dedicated component — a `<bdi>` element (or `<span dir="ltr">`), **not**
just a Tailwind utility class. The CSS `unicode-bidi: isolate` alone is not
enough: the element *type* matters for screen-reader announcement and for
correct copy-paste behavior. The component wraps the text in the proper element
and applies the isolation; styling can still be a utility class on top.

---

## 4. Asset list

| Asset | Path | Status | Notes |
|-------|------|--------|-------|
| Hero image | `/public/images/hero.jpg` | **Real asset** | The edited Magritte-background couch photo. This is the actual hero, not a placeholder. Must be aggressively compressed to fit the page-weight budget (see note). |
| Secondary photo | `/public/images/about.jpg` | **Placeholder** | Yuval by window, for `/about`. Use a clearly-labeled placeholder block until the real photo is delivered. |
| Heading font | Frank Ruhl Libre | Google Fonts | Hebrew + Latin. Self-host the **two weights** used (400, 500) to protect the page-weight budget. |
| Body font | Assistant | Google Fonts | Hebrew + Latin. Self-host the **two weights** used (400, 600). |
| Icons | phone, WhatsApp | Inline SVG | Two small inline SVGs only. No icon library (page weight, no JS). Reused by `StickyContactBar`. |
| Favicon | `/public/favicon.svg` | **Build now** | Text/typographic monogram (e.g. `י`/`יצ` initials). No logo design now; this is the intended permanent direction, not a placeholder for a future logo. |

There is **no hero video asset** and no reserved video markup. Video is a future
restructure of the Hero component, not a slot held open in code today.

Page-weight note: budget is **< 200KB compressed for `/`**. Two font families
across Hebrew + Latin plus the real hero photo is tight, and is **acknowledged**.
Mitigations: subset/self-host only the four weights used (2 per family), serve
the hero image as AVIF/WebP at a constrained size, inline the two SVGs. Hitting
200KB *with* the real Magritte hero photo requires deliberate, aggressive image
compression — this is expected and accepted, not automatic.

---

## 5. Form integration plan

- **Service:** **Web3Forms — decided.** Its free tier needs no account dashboard
  wiring beyond a single public `access_key`, accepts a plain HTML `POST` with no
  client-side JS, no per-form signup, and is the simplest to drop into a static
  Astro page. (Formspree was the alternative but caps submissions per month and
  nudges toward account setup; not chosen.)
- **Mechanism:** native `<form method="POST" action="https://api.web3forms.com/submit">`
  with hidden `access_key` field and the 4 visible fields (שם, טלפון, אימייל, הודעה).
  No JavaScript required for submission; a no-JS fallback redirect page handles the
  success state.
- **Env / config:**
  - `PUBLIC_WEB3FORMS_KEY` — public access key (safe to ship; it is meant to be public).
  - Destination email is configured **on the service side** for Web3Forms (tied to
    the key), not in code. For Formspree the destination is in the form `action` URL.
  - Code placeholder for the destination address: **`TODO_EMAIL`**. Decided to
    leave it as a literal `TODO_EMAIL` token; the owner will provide the real
    destination email before launch.
- **Spam:** include Web3Forms' built-in honeypot field (`botcheck`), no captcha
  (keeps JS at zero).
- **Validation:** HTML5 `required` + `type="tel"` / `type="email"`. No JS validation.

---

## 6. Deploy plan

- **Host:** Cloudflare Pages.
- **Framework:** Astro, **static output** (`output: 'static'`, the default). No
  SSR adapter needed — every route is static, the form posts to a third party.
- **Build command:** `npm run build` (→ `astro build`).
- **Build output directory:** `dist`.
- **Node version:** pin via `.nvmrc` / Pages env (Node 20 LTS).
- **URL:** Cloudflare Pages project URL `*.pages.dev`. **Decided:** stay on
  `*.pages.dev` for now — no custom domain. RTL/Hebrew is static HTML, no
  host-side locale config needed.
- **Caching:** static assets hashed by Astro; fonts and images cached long-lived.
- **Analytics:** **Cloudflare Web Analytics — decided.** Privacy-friendly, no
  cookies. No Google Analytics, no Plausible, no other tracker. (Cloudflare's
  snippet is a single lightweight script; keep it the only third-party script
  besides the form post.)

---

## 7. Accessibility checklist

Minimum bar for the build. Every item below is required, not aspirational.

- **Focus rings:** visible focus indicator on all interactive elements (links,
  buttons, form fields, the sticky-bar dismiss). Use `--accent` as the focus-ring
  color. Never remove outlines without a visible replacement.
- **Skip-to-main link:** a "skip to main content" link as the first focusable
  element, jumping to `<main>`.
- **Semantic landmarks:** real `<main>`, `<nav>`, and `<footer>` elements (not
  generic `<div>`s) on every page.
- **Forms:** every `<input>` has a properly associated `<label>` (via `for`/`id`).
  Error/validation states must be keyboard-reachable and announced (not color-only).
- **Alt text policy:** decorative images get empty `alt=""`; content images
  (the hero, the `/about` photo) get descriptive **Hebrew** alt text.
- **Keyboard-reachable mobile nav:** the mobile navigation must be operable with
  the keyboard and must work with **no JS-only menu** (no menu that only opens via
  JavaScript).
- **Color contrast:** every color combination used is verified against the ratios
  in `design-tokens.md` (AA minimum).

---

## 8. Decisions (resolved — baked in, no longer open)

These were open questions during planning; all are now resolved. Recorded here so
a future session needs no other context.

1. **Site purpose:** teacher / lead-gen site, per the brief — the brief is
   authoritative. The `project-context` skill's "personal PR site" framing is
   stale and will be updated *after* the build.
2. **Homepage form position:** the form goes after the short bio + primary CTA on
   `/` (the long bio lives on `/about`). No form above the fold.
3. **"Secondary CTA stack":** this equals the contact form — one form, not an
   extra button row.
4. **Form service:** Web3Forms (see §5).
5. **Destination email:** stays as the literal `TODO_EMAIL` token; the owner
   supplies the real address before launch.
6. **Imagery:** hero uses the edited Magritte photo (real asset, aggressive
   compression). The `/about` secondary photo stays a labeled placeholder for now.
   The < 200KB homepage budget is acknowledged and accepted.
7. **Brand mark / favicon:** text/typographic monogram. No logo design now, and
   this is the intended direction (not a stopgap).
8. **Custom domain:** none — stay on `*.pages.dev` for now.
9. **Sticky mobile contact button:** yes — a persistent, dismissible bottom bar on
   mobile with phone + WhatsApp icons, hidden on desktop (`StickyContactBar`).
10. **Analytics:** Cloudflare Web Analytics only — no Google Analytics, no
    Plausible, no cookies.
