# Yuval Site v3 — Brainstorm & Decision Doc

**Purpose:** Capture every idea on the table for the next round of site work. Decide what's in, what's out, what's deferred. Once decisions are made, this becomes the basis for a Claude Code project plan.

**Status:** Brainstorming. No execution until Yuval gives an explicit go. Last updated 2026-06-17 — E7 (FAQ) locked, E8 (pricing) decided, E1 (testimonials) parked, E4 (footer) deferred, C2 Block 2 re-angled (dedup vs FAQ Q3).

---

## Frame

### What we built (v1 → v2 redesign, completed)
Clean, deliberate, specific-to-Yuval. Split-screen hero, sidenote grid on /about, pull-quote band with the new tagline, two real photos, working forms and CTAs, Hebrew RTL throughout. The site reads as someone's, not as a template.

### What we're trying to do now
Add **earned interest** — depth through real content (testimonials, lesson specifics, video) — without losing the minimalism and specificity that makes the current site work.

### What we're explicitly NOT trying to do
- Match Hagai Rehavia's footer / homepage scope (he's built a multi-product business; Yuval is a single-service beginner teacher — different scopes need different sites)
- Add decoration without content (music-note SVG flourishes, parallax effects, scroll animations, etc.)
- Pretend the practice is larger than it is (empty footer columns, fake testimonials, "coming soon" placeholders)
- Expand to scopes Yuval doesn't actually have (booking calendar, products store, blog, multi-language)

### Strategic question that should drive every decision
**Who's the visitor that the current site is failing to convert?**

- (a) Already-curious beginner who just needs to confirm Yuval is real → current site already wins this
- (b) Hesitant adult beginner who's intimidated and needs reassurance → needs testimonials, lesson breakdown, FAQ
- (c) Parent looking for kid's teacher → needs trust signals, pricing transparency, maybe age-range info
- (d) Returning intermediate player who quit and wants to restart → needs specificity about what's covered, song list

**DECIDED: (a) first, (c) later in a separate round.**

Practical meaning:
- Current round of additions serves visitor type (a) — adult/teen who already wants lessons, just needs confirmation
- Future round (deferred) will add parent-targeted content: kid-specific section, minimum age, approach for children
- We will NOT try to serve both audiences in the same version of the site

---

## Decision Tracker (Claude + Gemini collaborative table)

**How this works:** Each row is a single decision. Claude marks Claude's column, Gemini marks Gemini's column. Items where both ✅ → goes to execution. Items where both ❌ → off the table. Items where columns disagree → goes to Yuval for decision or further discussion.

**Legend:**
- ✅ = approved
- ❌ = rejected
- 🤔 = needs more info / can't decide yet
- — = not yet reviewed by this side
- 🔒 = locked / executed already (no further discussion)

### Section A — Voice & global rules

| # | Item | Claude | Gemini | Yuval / Status |
|---|------|--------|--------|----------------|
| A1 | Site-wide voice: plural form (לשון רבים) for all visitor-facing copy; bio stays first-person | ✅ | ✅ | 🔒 Locked |
| A2 | Nav link "צור קשר" → "צרו קשר" | ✅ | ✅ | Ready for execution |
| A3 | Pull-quote tagline: "בוא נפרק את זה" → "בואו נפרק את זה" | ✅ | ✅ | Ready for execution |
| A4 | Footer "אצלך בבית" → "אצלכם בבית" (apply plural rule to footer too) | ✅ | ❌ | 🔒 Locked: "אצלכם" (Yuval decision) |
| A5 | Geographic scope: update "אזור המרכז" → "אזור בקעת אונו והמרכז" site-wide | 🤔 → ✅ | ✅ | Ready for execution |

### Section B — Contact page

| # | Item | Claude | Gemini | Yuval / Status |
|---|------|--------|--------|----------------|
| B1 | Full /contact page copy rewrite (heading + intro + bullet list as specified by Yuval) | ✅ | ✅ | 🔒 Locked, ready for execution |

### Section C — Home page additions

| # | Item | Claude | Gemini | Yuval / Status |
|---|------|--------|--------|----------------|
| C1 | New hero sub-headline ("שיעורי גיטרה שיביאו אתכם לרמה שמרשימה...") | ❌ | ❌ (changed from ✅) | Both ❌ → off the table |
| C2 | New "מה אני מציע" section between hero and bio (3 concrete points: practical + practical + approach) | ✅ | ✅ | 🔒 Locked, see content below |
| C3 | Swap CTA emphasis: WhatsApp → solid orange, Phone → ghost outline | ❌ → ✅ | ✅ | 🔒 Locked: WhatsApp primary (Yuval decision; revisit if WhatsApp leads don't convert in 3 months) |
| C4 | Bio section on home page — shortened to "אני יובל צרלין, מנגן גיטרה כבר 13 שנה ומתמחה בפינגרסטייל." (approach moved to C2 nקודה 3) | ✅ | ✅ | 🔒 Locked, ready for execution |
| C5 | Link button wording: "קראו עוד עליי" | ✅ | ✅ | Ready for execution |

### Section D — About page changes

| # | Item | Claude | Gemini | Yuval / Status |
|---|------|--------|--------|----------------|
| D1 | Update "הגישה שלי" paragraph to plural form (Gemini's proposed text) | ✅ | ✅ | Ready for execution |
| D2 | Delete entire "שיעורים" section from /about | ❌ | ❌ (changed from ✅) | Both ❌ → off the table |
| D3 | Rewrite "שיעורים" section copy — Gemini's new proposal (see below) | ✅ | ✅ | Ready for execution |

### Section E — Future scope (bigger additions, not yet detailed)

| # | Item | Claude | Gemini | Yuval / Status |
|---|------|--------|--------|----------------|
| E1 | Testimonials section (10+ real ones) | ✅ (conditional on real content) | — | ⏸ Parked this round (Yuval, 2026-06-17) — not pursuing now |
| E2 | "What's in a lesson" detailed section (related to C2 but more detailed) | ✅ | — | Pending |
| E3 | YouTube video clips section | ⏸ (defer until clips exist) | — | Pending |
| E4 | Footer enrichment (email, social icons, nav links) | ✅ | — | ⏸ Deferred — sequencing decided: build content first, footer last. Minimal version (repeat contact + Instagram if it exists) is content-independent, do anytime |
| E5 | Song list / repertoire section | 🤔 | — | Pending |
| E6 | Hero video replacing photo | ⏸ | — | Pending |
| E7 | FAQ section | ✅ | (3 Qs originated by Gemini, refined with Yuval) | 🔒 Locked — 6 final Q&As (see "E7 — Locked content" below) |
| E8 | Pricing page/module | ✅ (decided) | — | 🔒 Locked: NO price on site — quoted in conversation only (Yuval decision 2026-06-17; may revisit later) |
| E9 | "What I love" / influences section | 🤔 (low priority) | — | Pending |
| E10 | About-page media enrichment | 🤔 (low priority) | — | Pending |

### Section F — Rejected (both sides agree, off the table)

| # | Item | Claude | Gemini | Notes |
|---|------|--------|--------|-------|
| F1 | "ללמוד" → "ללמידת" in hero tagline | ❌ | ❌ | Spoken Hebrew is right register |
| F2 | "עליי" → "אודות" in nav | ❌ | ❌ | Personal register fits single-teacher site |
| F3 | Hagai-style 6-column footer | ❌ | ❌ | Wrong scope for Yuval |
| F4 | Scroll animations, decorative SVGs | ❌ | ❌ | Anti-pattern |
| F5 | Blog | ❌ | ❌ | Won't maintain |
| F6 | Booking calendar | ❌ | ❌ | Premature |
| F7 | English version | ❌ | ❌ | Premature |
| F8 | Products store | ❌ | ❌ | Acum-blocked, no products |
| F9 | Newsletter signup | ❌ | ❌ | No list, no content |
| F10 | New hero sub-headline | ❌ | ❌ | Generic-marketing, uncashable promise, breaks hierarchy. Replaced by C2. |
| F11 | Delete "שיעורים" from /about | ❌ | ❌ | Holds operational info. Replaced by D3 rewrite. |

---

## D3 — Locked content (Gemini's proposed rewrite, accepted by Claude)

**New copy for the "שיעורים" section on /about:**

> "אני מעביר שיעורים פרונטליים אחד-על-אחד, המותאמים למתחילים ולמי שרוצה לדייק את הטכניקה. השיעורים מתקיימים אצלך בבית, באזור בקעת אונו והמרכז, ובנויים כדי לתת לכם כלים פרקטיים כבר מהרגע הראשון."

**Why this works:**
- Mentions both beginners and intermediates (broader fit)
- Preserves all operational info (frontal, 1-on-1, at-home, area)
- No numeric promises ("בעוד כמה שיעורים")
- No generic-marketing language ("רמה שמרשימה")
- Closes with a concrete-feeling promise ("כלים פרקטיים מהרגע הראשון")

**Note on voice consistency:** Gemini's draft contains "אצלך בבית" (singular). Since A4 was locked as plural ("אצלכם"), **this line needs to change to "אצלכם בבית" in execution.** Final approved text:

> "אני מעביר שיעורים פרונטליים אחד-על-אחד, המותאמים למתחילים ולמי שרוצה לדייק את הטכניקה. השיעורים מתקיימים אצלכם בבית, באזור בקעת אונו והמרכז, ובנויים כדי לתת לכם כלים פרקטיים כבר מהרגע הראשון."

---

## C2 — Locked content

**Section title:** מה אני מציע

**Visual design:**
- 3 vertical numbered points (1 / 2 / 3)
- Numbers as large brass watermark at 15–20% opacity behind each point
- No icons
- Section placement: between hero and C4 on home page

**IMPORTANT — for Claude Code execution:**
The labels "Point 1 / Point 2 / Point 3" and the section titles ("אצלכם בסלון", "בקצב שלכם, ברמה שלכם", "מפרקים את המורכב") below are **for organization in this doc only**. On the actual rendered site:
- The visible elements per block are: large brass watermark digit (1/2/3) + block subheading + body paragraph
- There must NOT be the words "נקודה 1", "נקודה 2", "נקודה 3" anywhere in the rendered HTML
- The subheadings ARE rendered ("אצלכם בסלון" etc.) — they are real site copy

---

**Block 1**

Subheading: **אצלכם בסלון**

Body:
> אני מגיע אליכם לשיעור פרטי של 60 דקות, באזור בקעת אונו והמרכז. בלי לבזבז זמן על פקקים וחיפושי חניה — פשוט מוציאים את הגיטרה ומתחילים.

---

**Block 2** — UPDATED 2026-06-17 (re-angled to avoid overlap with FAQ Q3 "play what you love")

Subheading: **אחד על אחד, לאורך כל הדרך**

Body:
> אתם לא לבד בתהליך. אני קשוב לכם, מזהה מה עוצר אתכם, ומכוון את העבודה בדיוק לשם — כך שכל שיעור מקדם אתכם באמת.

(Previous version, now retired: subheading "בקצב שלכם, ברמה שלכם" / body "אין חוברות גנריות. כל שיעור נבנה סביב הרמה שלכם, וביחד בוחרים שירים שאתם רוצים לנגן." — moved away from because the songs/no-generic-workbooks idea now lives in FAQ Q3.)
> **Open flag (not decided):** C2 Block 3 ("מפרקים … לחלקים קטנים") still duplicates the same phrasing in the /about pull-quote and FAQ Q1 — three placements. Vary Block 3's wording if it reads repetitive on the rendered page. Yuval to decide.

---

**Block 3**

Subheading: **מפרקים את המורכב**

Body:
> ברגע שמפרקים קטע לחלקים קטנים ועובדים על כל חלק בנפרד, הדברים שחשבתם שאינם בהישג ידכם הופכים לטבעיים. זו הדרך שבה אני לומד בעצמי, וזו הדרך שאני מלמד אחרים.

---

## C4 — Locked content (revised after C2)

**Section content on home page** (replaces current bio + the longer Gemini-proposed bio+approach):

> אני יובל צרלין, מנגן גיטרה כבר 13 שנה ומתמחה בפינגרסטייל.

Just this one line. The "approach" content that was originally planned for C4 has been moved into C2 (point 3), so C4 stays minimal to avoid duplication.

After this line: the C5 button "קראו עוד עליי" links to /about for the full philosophy and bio.

---

## E7 — Locked content (FAQ)

**Status:** 🔒 Locked 2026-06-17. Origin: 3 questions came from Gemini; refined with Yuval (cut/rewrote duplicates of C2/D1, expanded the universal-method idea, tightened length).

**Placement / UI:**
- Separate accordion section (click question → answer expands below)
- Site bottom, immediately before the "צרו קשר" section
- Clean minimalist accordion, site's existing typography, no decorative icons
- Build as a **modular component** — 2–3 more questions will be added later (see pending below)

**Voice:** plural (לשון רבים), universal — every answer must work for a kid, a parent reading on a child's behalf, and an adult learner. Material-choice is framed as the *method* ("כל אחד מנגן את מה שמתחבר אליו"), not an instruction to a specific "you".

**Final 6 Q&As:**

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

**Pending additions (slot in as #7 / #8 when ready):** "כמה זמן עד שיר אמיתי?" and "כמה צריך לתרגל בין שיעורים?" — both need Yuval's real numbers (and whether the answer differs for a kid vs. an adult). Not invented; left out until provided.

**Optional reorder (not decided):** group the "getting started" questions — 1, 2, 5(notation), 3, 4, 6.

---

## Open items needing Yuval's decision

✅ **All disagreements from round 2 are now resolved.** No open items in this section.

The remaining decisions are content-related (testimonials, lesson breakdown text, pricing strategy) and will be handled per-item as they come up.

---
| — | Hagai-style 6-column footer | inspiration | — | — | ❌ rejected (wrong scope) |
| — | Scroll animations / decorative SVGs | — | — | — | ❌ rejected (anti-pattern) |
| — | Blog | — | — | — | ❌ rejected (won't maintain) |
| — | Booking calendar | — | — | — | ❌ rejected (premature) |
| — | English version | — | — | — | ❌ rejected (premature) |
| — | Products store | — | — | — | ❌ rejected (Acum-blocked, no products) |
| — | Newsletter signup | — | — | — | ❌ rejected (no list, no content) |

---

## Items in detail

### Already-committed shortlist (from friends' feedback)

#### 1. Contact page — full page copy rewrite ✅ LOCKED

**Scope:** Larger than initially scoped — the entire /contact page copy gets rewritten, not just the mini-section.

**Final approved content:**

```
[Main Heading]
מוכנים להתחיל לנגן?

[Intro Text — above the form, below the heading]
תשאירו פרטים ואני חוזר אליכם עוד היום.
השיעורים מתקיימים אצלכם בבית, באזור בקעת אונו והמרכז.
אף פעם לא החזקתם גיטרה? מתחילים מאפס? הגעתם בדיוק למקום הנכון.

[Subheading for the list]
מה קורה בשיחה הראשונה שלנו?

[Bullet List — 3 items]
* נכיר – מאיפה אתם מגיעים ולאן בא לכם להגיע עם הגיטרה.
* נבין – איך השיטה שלי עובדת ומה פחות או יותר נעשה בשיעורים הראשונים.
* נתאם – אם תרגישו שזה מתאים, נקבע שיעור.
```

**What changes from current site:**
- H1 changes from "צור קשר" to "מוכנים להתחיל לנגן?" — call-to-action style heading
- Three reassurance lines slightly rephrased to be warmer, in plural form
- Subheading: "מה מצפה לכם בשיחה הראשונה" → "מה קורה בשיחה הראשונה שלנו"
- Three bullets rewritten — pivot from "let's get to know each other" framing to "I'll show you the method" framing (visitor type a needs to be sold on the method, not just gathered info from)

**Implementation note for Claude Code:**
- Preserve existing layout (form on left, aside on right with reassurance + mini-section + CTAs)
- Preserve brass-underlined treatment on the mini-section subheading
- The site nav link should remain "צור קשר" — only the page H1 changes to "מוכנים להתחיל לנגן?"

**Open question — geographic scope:**
The new intro says "באזור בקעת אונו והמרכז" — more specific than the current "אזור המרכז". Need to decide: update the footer and other "אזור המרכז" mentions site-wide to match, or keep them general elsewhere and only specific on /contact? **Decision needed before execution.**

---

#### 2. "What's in a lesson" — home section
**What:** New section on the home page between hero and bio. 3-5 concrete points about what a lesson actually involves.

Example structure:
- שיעור ראשון: בוחרים שיר שתרצו לנגן, ומתחילים לפרק
- 60 דקות, אצלך בבית, באזור המרכז
- אין צורך לדעת לקרוא תווים — אני מלמד בשיטה אחרת
- אתה צריך גיטרה. זה הכל.
- בקצב שלך — אין שיעורים מצולמים, אין שיעורי בית מחייבים

**Why:** Currently the home is hero + bio + CTA — thin. This adds the most-asked questions a hesitant beginner has, before they have to ask. Reduces "I don't know what I'd be paying for" friction.

**Effort:** Medium. New section, 3-5 content blocks, design treatment to fit existing brass/wood/cream system.

**Open questions:**
- How many points? 3 is punchy, 5 is thorough, 7 is too many.
- Visual treatment: numbered list, icon list, plain prose, or sidenote grid like /about?
- Where exactly: between hero and bio, or below bio?

---

#### 3. Testimonials section
**What:** 10+ real testimonials displayed on the home page. Yuval has these (claimed; needs to actually paste them).

**Why:** Strongest possible trust signal for a 23-year-old teacher with no other formal credentials. More valuable than the bio, the photo, or any tagline.

**Effort:** Medium-Large. Real content sourcing (Yuval), design treatment, layout, mobile behavior. Could be a standalone section or its own page.

**Critical requirements:**
- Must be REAL students, not friends doing favors. Visitors detect the difference.
- Real names (or first name + last initial, consistently). Anonymous = weaker than no testimonials.
- Vary the content — don't pick 10 quotes that all say "סבלני ומקצועי." Some about patience, some about specific songs, some about lesson structure, some about Yuval's adaptability.
- Format question: WhatsApp screenshots? Plain text with names? Photos? Audio? Each format wants different design.

**Open questions:**
- What's the source format? Yuval needs to paste them into this doc before design happens.
- Layout: card grid? Vertical stack? Carousel? Pull-quotes for the strongest 2-3 with smaller cards for the rest?
- All on home page or its own /testimonials route with home showing 4-5 highlights + "more" link?
- Include student level / instrument level / city as additional identity?

---

#### 4. Add philosophy to home
**What:** Surface the teaching philosophy (currently only on /about) on the home page in some form.

**Friends' point:** Home is missing the "why this teacher" hook. The philosophy is the differentiator.

**My pushback:** Don't copy-paste the about-page section verbatim. That makes the home a watered-down /about. Options:

- (a) Use the new pull-quote band tagline ("זה לא מסובך, זה רק מורכב. בוא נפרק את זה.") as a section on the home too. Risk: it's already prominently displayed on /about; double-exposure dilutes it.
- (b) Pick 2-3 sentences from "הגישה שלי" and put them on the home, with a "המשך לקרוא" link to the full /about. Risk: any home-page summary always reads weaker than the original.
- (c) Different framing on the home — instead of "my approach," frame it as "what makes a lesson with me different." More service-focused.

**Open questions:** Which framing, where on the page (before or after lesson breakdown / testimonials), and how to avoid /about-page duplication.

---

#### 5. YouTube clips
**What:** Embed 3-5 video clips of Yuval playing fingerstyle pieces, on the home page or a dedicated section.

**Why:** Highest-trust signal possible for a music teacher — visitors literally hear what they'd be paying to learn. Stronger than testimonials in raw conversion power, weaker in social-proof terms.

**Effort:** Medium technically (embed iframes or custom player), but blocked on actually having clips Yuval is willing to publish.

**Open questions:**
- Do the clips exist yet? If not, this is deferred until they do.
- YouTube embed vs self-hosted? YouTube embed is free and easy but adds Google tracking; self-hosted is private but bandwidth-expensive.
- Where: own section on home page, dedicated /music or /listen route, or embedded in /about as part of "this is what I do"?
- Auto-play (no, never) vs click-to-play (yes) vs thumbnail-only (acceptable).

---

#### 6. Footer enrichment
**What:** Slightly richer footer than the current minimal text-only version. Specifically:
- Email address (yuval.tserlin@gmail.com) alongside phone
- Social icons (Instagram, eventually YouTube)
- Repeated nav links (דף הבית / עליי / צור קשר)

**What NOT to do:**
- Six-column Hagai-style layout
- Newsletter signup (no list, no content)
- Categories for things that don't exist

**Effort:** Small. 30-minute change.

**Open questions:** Does Yuval have an Instagram for guitar content? If not, skip the icon — empty social icons read as "I'm trying to look professional."

---

### Bigger options on the table

#### 7. Song list / repertoire
**What:** A real list of 10-30 songs Yuval has taught or arranged. Varied — Israeli rock, classical pieces, fingerstyle arrangements, pop, anything.

**Why:** Solves the "abstract → concrete" problem for prospective students who wonder "could I learn songs I actually want to play?" Strongest content for an intermediate-restart visitor (visitor type d).

**Effort:** Medium. List sourcing (Yuval), design treatment, potentially linking each song to a YouTube clip if available.

**Open questions:**
- Where: /about, dedicated /songs route, or home-page section?
- Format: simple list, grouped by genre, with optional audio/video links?
- How many?
- Update strategy — will Yuval keep this list current as he teaches new songs?

---

#### 8. Hero video instead of (or alongside) hero photo
**What:** Replace the static hero photo with a 30-60 second silent loop of Yuval playing. Or keep the photo and add a "watch me play" button that overlays a video.

**Why:** Video > photo for "what does this teacher actually sound like / look like playing." Photos prove identity; video proves competence.

**Effort:** Large.
- Technical: video hosting, mobile autoplay rules (only muted videos autoplay), accessibility (controls, captions), file size and loading performance, fallback to photo on slow connections.
- Content: shoot a clip Yuval is happy with.

**Risk:** A bad / amateurish video hurts more than the static photo. The current hero photo is doing real work — only replace it with something genuinely stronger.

**Open questions:**
- Replace photo entirely, or keep photo + add a "play video" overlay?
- Shoot specifically for this, or use existing footage?
- Audio: muted (autoplay-friendly) or user-triggered with sound?

---

#### 9. FAQ section
**What:** 5-8 questions a prospective student/parent actually asks, answered concisely.

Examples:
- מאיזה גיל אפשר להתחיל?
- אני לא יודע לקרוא תווים — אפשר ללמוד אצלך?
- אני בלי קצב לחלוטין — בעיה?
- צריך לקנות גיטרה לפני שיעור ראשון? איזה סוג?
- כמה זמן עד שאני מנגן שיר אמיתי?
- מה אם אני צריך לבטל שיעור?
- מה ההבדל בין לימוד עצמי לבין שיעורים פרטיים?
- אני מבוגר. מאוחר מדי?

**Why:** Removes friction. Hesitant beginners (visitor type b) have these questions and won't always call to ask. Answering preemptively converts them.

**Effort:** Small-Medium. 5-8 Q&A pairs, simple accordion or stacked-prose layout.

**Open questions:**
- Which 5-8 questions? Yuval needs to pick the ones his actual conversations include.
- Where: own section on contact page, on home page, or dedicated /faq?
- Accordion (collapsible) or flat stacked (always visible)?

---

#### 10. Pricing
**What:** State what lessons cost.

**Strategic decision needed first:**

- **Show price:** Removes one barrier, filters self-selected. Visitors who can't afford don't waste your time. Visitors who can afford come pre-qualified. Best for visitor type (a) and (b).
- **Don't show price:** Forces a phone call, opens the conversation, lets Yuval qualify and adjust. Strategy for premium services or where price varies. Best for visitor type (d) restart-intermediate who might want different terms.

**Effort:** Small if showing. Zero if not.

**Open questions:**
- Yuval's actual pricing structure: flat per-lesson? Package deal? Travel surcharge for far areas?
- Comfort with publishing it — some teachers raise prices over time and don't want old rates findable.

---

#### 11. "What I love" / influences
**What:** Short section naming the musicians, records, or performances that shaped Yuval as a player. Specific artists, specific YouTube performances.

**Why:** Shows taste. Distinguishes "I learned guitar and now I teach" from "I have a musical worldview and I teach from it." Strong for the right kind of visitor.

**Risk:** Niche-y. A beginner who doesn't know the names won't connect. Could intimidate.

**Effort:** Small.

**Open questions:**
- Does Yuval have a clear list of who he'd name?
- Where: /about section addition, or its own small section?

---

#### 12. About-page media enrichment
**What:** Additional photos / context — the guitars he uses, where he teaches, books on his shelf, sheet music. "This is a real musical life."

**Effort:** Small-Medium. Content (Yuval shoots photos), design integration.

**Risk:** Easy to overdo — "every object in my musical life" reads precious.

**Open questions:** Worth doing only if Yuval has a specific story to tell about his setup.

---

#### 13. Voice unification — לשון רבים site-wide ✅ LOCKED

**What:** All visitor-facing copy (headings, marketing text, buttons, CTAs) uses plural form (לשון רבים) consistently. The bio paragraph on /about stays in first-person singular (גוף ראשון) because Yuval is speaking about himself.

**Why:** Consistency, gender-neutral, professional register. Standard for modern Hebrew web copy.

**Source:** Decision passed from Yuval's marketing consultant (Gemini). Verified by Claude — passes the consistency and edge-case checks; no conflicts with other site decisions.

**Implementation scope:**
- All page H1s and section headings
- All button text (e.g., "צור קשר" → "צרו קשר", "התקשרו" already plural, "וואטסאפ" stays as label)
- All CTA microcopy (e.g., "צרו קשר ונקבע שיעור" — already plural)
- All form labels and placeholder text — verify they're in plural
- All footer text
- Bio paragraph on /about: NO CHANGE — stays in first-person singular ("אני יובל צרלין... מנגן גיטרה...")

**Implementation note for Claude Code:**
- Grep the codebase for second-person singular forms that need updating
- Common patterns to find and update: imperative verbs ending in singular masculine ("התקשר" → "התקשרו"), pronouns ("שלך" → "שלכם"), possessive suffixes ("בביתך" → "בביתכם")
- The bio on /about (`מנגן גיטרה כבר 13 שנה...`) is the explicit exception — leave first-person
- The pull-quote tagline on /about ("זה לא מסובך, זה רק מורכב. בוא נפרק את זה.") — needs decision: "בוא" is singular masculine. Either update to "בואו נפרק את זה" (plural, consistent) OR leave as the deliberate intimate exception. **Yuval to decide.**

**Open question:** Is the pull-quote tagline an exception (kept singular for intimacy) or part of the rebellion (changed to plural for consistency)?

---

| Item | Why rejected |
|------|--------------|
| ללמוד → ללמידת (friends' point #3) | "ללמוד" is the natural spoken-Hebrew register for a hero tagline. "ללמידת" is academic-formal and makes the teacher sound corporate. |
| עליי → אודות (friends' point #4) | "עליי" is first-person personal — right for a single-teacher site. "אודות" is third-person corporate — right for companies. |
| Hagai-style 6-column footer | Hagai's footer is rich because he has six product categories. Yuval has one (lessons). Empty columns read as failure. |
| Scroll animations, parallax, music-note SVGs | Every generic guitar teacher site has these. Adding them moves Yuval's site toward the template look the v2 redesign escaped. |
| Blog | Won't maintain. Empty blogs hurt more than no blog. |
| Booking calendar | Premature. Volume doesn't justify scheduling automation yet. |
| English version | Premature unless actively marketing to English speakers in Israel. |
| Products store | Acum-blocked; no products to sell yet. |
| Newsletter signup | No list, no content to send. Empty newsletter banner reads as failure. |

---

## Process for moving from brainstorm → execution

**New collaborative workflow (Claude + Gemini + Yuval):**

1. **Claude and Gemini both maintain the Decision Tracker table at the top of this doc.** Each marks their own column with ✅ / ❌ / 🤔 / —.
2. **Rows where both agree (✅✅ or ❌❌)** are settled — they go either to execution or to the rejected list.
3. **Rows where they disagree** are escalated to Yuval in the "Open items needing Yuval's decision" section.
4. **Each new round of feedback** updates this single table. Yuval copies the relevant section to whichever side is being consulted; that side updates and returns.
5. **Once all rows are settled**, we generate the v3 execution plan and hand off to Claude Code.

**Content Yuval still needs to provide for ✅ items:**
- ~~Real testimonials (text + names + identifying info) for E1~~ — ⏸ parked this round
- ~~Pricing decision for E8~~ — ✅ DECIDED: no price on site, quoted in conversation only
- Real answers for the two pending FAQ questions (time-to-first-song, practice-between-lessons) — needed before they slot in as FAQ #7/#8
- Instagram account confirmation for E4 (only if/when the footer is actually built)
- YouTube clip status confirmation for E3

---

## Decisions still pending (from Yuval directly)

- [x] Priority visitor type — DECIDED: (a) first, (c) deferred
- [x] Contact page full rewrite — DECIDED: locked (B1)
- [x] Voice unification: לשון רבים site-wide — DECIDED: locked (A1)
- [x] Disagreement rows A4, C1, C3, D2 — all resolved (round 2)
- [x] Geographic scope (A5) — resolved, both ✅
- [x] Pricing (E8) — DECIDED: no price on site, quoted in conversation only (2026-06-17)
- [x] FAQ (E7) — LOCKED: 6 final Q&As (2026-06-17)
- [ ] Pending Yuval input: time-to-first-song & practice-between-lessons answers → FAQ #7/#8
- [ ] Next content piece after FAQ — not yet chosen (candidates: E5 song list, E2 lesson breakdown)
- [ ] Section E remaining items (E2, E3, E5, E6, E9, E10) — not yet detailed; brought up individually

---
