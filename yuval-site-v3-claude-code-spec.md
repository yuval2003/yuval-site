# Yuval-Site v3 — Claude Code Execution Spec

Paste this whole file to Claude Code as the task brief. Everything here is **locked** and approved — do not redesign, re-word, or "improve" the Hebrew copy. Build exactly what's written.

---

## 0. Project context & ground rules

- **Repo:** `/Users/ywblzrlyn/projects/yuval-site`
- **Stack:** Astro 5.18 + Tailwind v4, Heebo font (self-hosted via @fontsource), Hebrew RTL throughout.
- **Deploy:** Cloudflare Pages, **auto-deploys from `main`**. Therefore:
  - **Do all work on a new branch** (e.g. `v3-content`). Do **not** commit to `main`.
  - Build/run locally (`npm run dev`) so Yuval can review, and/or push the branch for a Cloudflare **preview** deployment.
  - **Merge to `main` only after Yuval explicitly approves.** Nothing reaches the live site without his sign-off.
- **First step:** explore the repo structure (pages, components, where the existing copy lives) before editing. The instructions below give the WHAT (final copy + behavior); you locate the WHERE.
- **Preserve** existing layout, design tokens (`--wood`, `--brass`, cream, terracotta), `Button.astro` primitive (solid/ghost variants, `tone` prop), RTL, and the Web3Forms integration. Don't restructure pages beyond what's specified.
- **Do not touch** (explicitly out of scope — see §7).

---

## 1. Global / site-wide (Section A)

**A1 — Voice: plural (לשון רבים) site-wide.**
All visitor-facing copy (headings, body, buttons, CTAs, form labels/placeholders, footer) must be in plural form. Grep for singular second-person forms and convert:
- imperative singular → plural ("התקשר" → "התקשרו")
- possessive/pronoun ("שלך" → "שלכם", "בביתך" → "בביתכם", "ידך" → "ידכם")
- **Exception — do NOT change:** the first-person bio on /about ("אני יובל צרלין... מנגן גיטרה...") stays first-person singular. That is deliberate.

**A2 — Nav link:** `צור קשר` → **`צרו קשר`** (plural). (Note: an older brainstorm note said keep nav singular — that is superseded. Nav = plural "צרו קשר".)

**A3 — /about pull-quote tagline:** `זה לא מסובך, זה רק מורכב. בוא נפרק את זה.` → change "בוא" to **"בואו"**:
> זה לא מסובך, זה רק מורכב. בואו נפרק את זה.

**A4 — Footer:** `אצלך בבית` → **`אצלכם בבית`**.

**A5 — Geographic scope, site-wide:** every `אזור המרכז` → **`אזור בקעת אונו והמרכז`**.

---

## 2. Home page (Section C)

### C2 — New section "מה אני מציע" (between hero and the bio line)

- **Section title (rendered):** `מה אני מציע`
- **Placement:** between the hero and the C4 bio line on the home page.
- **Design:** 3 vertical blocks. Behind each block, a large **brass watermark digit** (1 / 2 / 3) at **15–20% opacity**. **No icons.** Each block = watermark digit + subheading + body paragraph.
- **CRITICAL:** the digits are a visual watermark only. Do **NOT** render the words "נקודה 1 / נקודה 2 / נקודה 3" anywhere in the HTML. The subheadings below **are** rendered.

**Block 1** — subheading **`אצלכם בסלון`**
> אני מגיע אליכם לשיעור פרטי של 60 דקות, באזור בקעת אונו והמרכז. בלי לבזבז זמן על פקקים וחיפושי חניה — פשוט מוציאים את הגיטרה ומתחילים.

**Block 2** — subheading **`אחד על אחד, לאורך כל הדרך`**
> אתם לא לבד בתהליך. אני קשוב לכם, מזהה מה עוצר אתכם, ומכוון את העבודה בדיוק לשם — כך שכל שיעור מקדם אתכם באמת.

**Block 3** — subheading **`מפרקים את המורכב`**
> ברגע שמפרקים קטע לחלקים קטנים ועובדים על כל חלק בנפרד, הדברים שחשבתם שאינם בהישג ידכם הופכים לטבעיים. זו הדרך שבה אני לומד בעצמי, וזו הדרך שאני מלמד אחרים.

### C3 — CTA emphasis swap

- **WhatsApp** button → **solid orange (primary)** — use `Button.astro` solid variant.
- **Phone** button → **ghost outline (secondary)**.
- (Swap the current emphasis; WhatsApp becomes the visually dominant CTA.)

### C4 — Home bio → single line

Replace the home-page bio block with exactly:
> אני יובל צרלין, מנגן גיטרה כבר 13 שנה ומתמחה בפינגרסטייל.

(The longer "approach" content lives in C2 Block 3 now — keep the home bio to this one line.)

### C5 — Link button after the bio

A link/button reading **`קראו עוד עליי`** linking to **`/about`**.

---

## 3. Contact page (Section B1)

Full /contact page copy. Preserve existing layout (form on left, aside on right), and the brass-underline treatment on the mini-section subheading.

- **H1:** `מוכנים להתחיל לנגן?`
- **Intro (above form, below H1):**
```
תשאירו פרטים ואני חוזר אליכם עוד היום.
השיעורים מתקיימים אצלכם בבית, באזור בקעת אונו והמרכז.
אף פעם לא החזקתם גיטרה? מתחילים מאפס? הגעתם בדיוק למקום הנכון.
```
- **Mini-section subheading (keep brass underline):** `מה קורה בשיחה הראשונה שלנו?`
- **Bullets (3):**
```
נכיר – מאיפה אתם מגיעים ולאן בא לכם להגיע עם הגיטרה.
נבין – איך השיטה שלי עובדת ומה פחות או יותר נעשה בשיעורים הראשונים.
נתאם – אם תרגישו שזה מתאים, נקבע שיעור.
```

---

## 4. About page (Section D)

**D1 — "הגישה שלי" paragraph** → replace with (plural):
> ברגע שמפרקים קטע לחלקים קטנים ועובדים על כל חלק בנפרד, הדברים שחשבתם שאינם בהישג ידכם הופכים לטבעיים. זו הדרך שבה אני לומד בעצמי, וזו הדרך שאני מלמד אחרים.

> ⚠️ **Known flag (Yuval's call, do NOT block on it):** this D1 paragraph is *identical* to C2 Block 3, and shares the "מפרקים לחלקים קטנים" phrasing with FAQ Q1 and the /about pull-quote. Build as-is for now (deliberate signature repetition). If it reads repetitive on the rendered page, Yuval may later vary one of them. Do not change it unilaterally.

**D3 — "שיעורים" section** → replace with (plural, A4/A5 applied):
> אני מעביר שיעורים פרונטליים אחד-על-אחד, המותאמים למתחילים ולמי שרוצה לדייק את הטכניקה. השיעורים מתקיימים אצלכם בבית, באזור בקעת אונו והמרכז, ובנויים כדי לתת לכם כלים פרקטיים כבר מהרגע הראשון.

**REMOVE — the "בהמשך" block** on /about ("מאגר טאבים ועיבודים שלי לרכישה"). Delete the section entirely. (Reason: Acum-licensing-blocked + it's a "coming soon" placeholder. Will be re-added later if/when it's real and cleared.)

---

## 5. FAQ section (E7) — NEW

- **Placement:** bottom of the **home page**, immediately **before** the "צרו קשר" contact section/CTA. (Confirm exact anchor against repo structure.)
- **UI:** clean, minimalist **accordion** — click a question, its answer expands below. Site's existing typography (Heebo), RTL. No gaudy icons (a simple +/− or thin chevron affordance is fine).
- **Build as a MODULAR component** — 2–3 more Q&As may be added later, so make adding an item trivial (e.g. data array → rendered items).
- **6 questions, final copy (do not edit):**

1. **אין לי רקע מוזיקלי — זה מתאים לי להתחיל מאפס?**
   > כן. רוב התלמידים שלי מתחילים בלי שום רקע. לא צריך "כישרון" — מפרקים כל קושי לחלקים קטנים, וההתקדמות מגיעה מהר וטבעי.

2. **השיעורים מתאימים גם לילדים?**
   > בהחלט. אני מלמד ילדים ומבוגרים כאחד, והשיטה מתאימה את עצמה לגיל ולרמה של כל אחד.

3. **יש חשש לאבד עניין אחרי כמה שיעורים — איך שומרים על המוטיבציה?**
   > זה הסוד הכי פשוט: כשמנגנים את מה שאוהבים, אי אפשר להפסיק. בשיטת הלימוד שלי הגיטרה הופכת מ"משימה" ל"מתי השיעור הבא?".

4. **הליווי מוגבל רק לזמן השיעור?**
   > לא. יש לכם קו פתוח אליי גם בין המפגשים — אפשר לשלוח סרטונים לפידבק, לשאול שאלות, ולהגיד מראש על מה בא לכם לעבוד בשיעור הבא, כדי שלא נבזבז זמן.

5. **צריך לדעת לקרוא תווים?**
   > לא חובה. לומדים בעיקר דרך הנגינה עצמה, ומי שרוצה להעמיק בתיאוריה ובקריאת תווים — נלמד גם את זה.

6. **כמה זה עולה?**
   > המחיר נקבע אישית ומשתנה לפי תדירות השיעורים והמרחק. השאירו פרטים ואחזור אליכם עוד היום עם כל המידע.

---

## 6. Suggested order of work

1. Branch off `main` (`v3-content`).
2. Global voice + string swaps (A1–A5) first — they touch many files.
3. Home page: C2 section, C3 CTA swap, C4 bio, C5 button.
4. Contact page: B1 copy.
5. About page: D1, D3, remove "בהמשך".
6. FAQ accordion component (E7) + place on home page.
7. Local build + visual check (RTL, mobile, all CTAs work, form still posts to Web3Forms).
8. Push branch → Cloudflare preview → Yuval reviews → merge to `main` only on approval.

---

## 7. OUT OF SCOPE — do NOT add or touch

- **No price anywhere** on the site (pricing is handled in conversation only — locked decision).
- **No footer social icons / "follow me" yet** — Yuval's YouTube/Instagram aren't active. Footer social + video sections wait until channels go live.
- **No testimonials, no song/repertoire list, no influences section, no extra /about photos** — all closed or deferred.
- **Do not change** the hero photo, the hero tagline ("שיעורי גיטרה — דרך פשוטה ללמוד דברים מורכבים"), or the /about photo.
- **Do not change** the first-person bio voice on /about (A1 exception).
- No new dependencies, no decorative SVG/scroll animations.
