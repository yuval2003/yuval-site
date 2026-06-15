# Project Brief — Yuval Tserlin guitar teacher site

## Owner
- Name (Hebrew): יובל צרלין
- Name (Latin): Yuval Tserlin
- Age: 23
- Based: מרכז הארץ (Pardesiyya)
- Phone: 052-707-1952

## What the site is for
Personal site for Yuval as a guitar teacher. Primary visitor action = contact him to schedule a lesson. Both immediate contact (phone/WhatsApp) and a passive form for hesitant visitors. Future expansion to a tab store at `/tabs` — reserve that route, don't use it for anything else.

## Tagline (hero)
**שיעורי גיטרה — דרך פשוטה ללמוד דברים מורכבים**

## Short bio (homepage)
אני יובל צרלין, בן 23, מנגן גיטרה כבר 13 שנה.

במשך שש שנים ניגנתי רוק וסולואים קלאסיים, עד שגיליתי את הפינגרסטייל. היום אני מלחין עיבודים משלי — ומלמד אחרים לנגן.

## Long bio (/about)
אני יובל צרלין, בן 23, מנגן גיטרה כבר 13 שנה.

במשך שש שנים ניגנתי בעיקר רוק — סולואים, השירים הגדולים של שנות ה-70, ה-80 וה-90, הכל עם מורים פרטיים. עד שהבנתי שמה שאני באמת רוצה לעשות הוא דבר אחד: פינגרסטייל. מאז אני מקדיש את הזמן שלי לעיבודים של שירים בעברית ובאנגלית, וכותב עיבודים משלי לשירים שאני אוהב.

### הגישה שלי
כל מה שנראה *מסובך* הוא בסך הכל *מורכב*.

ברגע שמפרקים קטע לחלקים קטנים ועובדים על כל חלק בנפרד, הדברים שחשבת שאינם בהישג ידך הופכים לטבעיים. זו הדרך שבה אני לומד בעצמי, וזו הדרך שאני מלמד אחרים.

### שיעורים
אני מלמד מתחילים ואנשים שרוצים להגיע במהירות לרמה שמרשימה חברים ובני משפחה — לא בעוד שנה, בעוד כמה שיעורים. השיעורים מתקיימים פרונטלית בלבד, אצלך בבית, באזור המרכז.

### בהמשך
מאגר טאבים ועיבודים שלי לרכישה.

## Assets
- **Hero image:** edited photo (Magritte painting in background, Yuval playing guitar on couch). Will be added to `/public/images/hero.jpg` later — for now use a clearly-labeled placeholder.
- **Secondary photo:** one more candidate (Yuval playing by window) — placeholder for /about.
- **Video:** none yet. Owner is waiting for recording gear. Reserve a hero video slot but use the photo as fallback.

## Site structure
Required routes:
- `/` — homepage (hero, short bio, primary CTA, secondary CTA stack, contact form, footer)
- `/about` — long bio + secondary photo
- `/contact` — phone, WhatsApp, form
- `/tabs` — RESERVED, leave empty for now. Don't link to it from nav.

Optional / later: `/media` for when video is ready. Don't build it now, just reserve the route.

## Contact strategy (CRITICAL — drives homepage hierarchy)
- **Primary CTA (above the fold):** big phone button (`tel:0527071952`) + WhatsApp button (`https://wa.me/972527071952`) side by side. Number also shown as plain text.
- **Secondary CTA (after the long bio, mid-page):** a form with 4 fields: שם, טלפון, אימייל, הודעה. Submits via Formspree (or Web3Forms — pick whichever has the simplest free tier). The form sends to Yuval's email (TBD — leave as `TODO_EMAIL` placeholder in code).
- **Footer:** phone + WhatsApp repeated.

Important: do NOT put the form above the fold. It competes with the phone CTA and hurts conversion. Form goes after the bio.

## Design direction
- Editorial-warm
- Fonts: Frank Ruhl Libre (headings) + Assistant (body), both via Google Fonts
- Warm off-white background (not pure white)
- Muted earth-tone accent (warm terracotta or deep olive — decide in design-tokens.md, defend the choice)
- High contrast text (WCAG AA minimum)
- Generous whitespace
- No drop shadows, no heavy gradients, no rounded card aesthetic — restrained and editorial

## Hard constraints
- RTL everywhere. `dir="rtl"` on `<html>`, `lang="he"`.
- Mixed Hebrew/English handling: any inline English (song titles, names like "Frank Ruhl Libre") gets `unicode-bidi: isolate`.
- Mobile-first.
- No heavy client-side JS. Astro static output only.
- Page weight under 200KB compressed for the homepage.

## What PLAN.md must contain
1. **Sitemap** — every route, what's on it, in what order
2. **Per-page wireframe in text** — section-by-section breakdown of /, /about, /contact
3. **Components needed** — list of reusable components (Nav, Footer, Hero, BioBlock, ContactForm, CTAButton, etc.)
4. **Asset list** — every image, font, icon needed, where it lives, what's a placeholder
5. **Form integration plan** — which service, what env vars, where the email goes
6. **Deploy plan** — Cloudflare Pages, what the build command will be, what URL it'll live at
7. **Open questions** — anything needed from owner before building. Don't guess; flag it.

## What design-tokens.md must contain
1. **Color palette** — warm off-white background, primary text color, secondary text color, ONE accent color (defend the pick), border/divider color. Each as hex + a sentence about when to use it.
2. **Type scale** — exact pixel/rem values for h1, h2, h3, body, small. Line heights.
3. **Spacing scale** — base unit (probably 4px or 8px), the increments.
4. **Breakpoints** — mobile, tablet, desktop.
5. **One worked example** — show what the hero section's typography and spacing actually look like, in CSS-variable-style notation.

## Process rules for whoever builds this
- Clean prose with clear headings. No emoji. No filler.
- Be specific. "Warm beige" is not a color spec; `#F5EFE6` is.
- Be honest about tradeoffs. If a choice has downsides, name them.
- Flag any assumption being made.
- If something contradicts itself or feels off, raise it BEFORE writing — don't paper over.
