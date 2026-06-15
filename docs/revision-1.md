Four changes to design-tokens.md before we proceed:

1. Button label contrast: change CTA button label from `--bg` to pure `#FFFFFF`. 
   This bumps button label contrast from ~5.3:1 to ~6.4:1 — comfortably above 
   AA and approaching AAA. Update the worked example accordingly.

2. Border radius: change from 2px to 0px throughout. Editorial-warm reads more 
   consistently with fully square corners. Document the choice.

3. Heading scale: bump h2 from 28/32px to 30/36px. Tightens the hierarchy gap 
   between h1 and h2 for the structured /about page.

4. Specify exact font weights and constrain to two weights per family to protect 
   the page-weight budget:
   - Frank Ruhl Libre: Regular (400) + Medium (500). Used for h1, h2, h3.
   - Assistant: Regular (400) + Semibold (600). Used for body, small, button labels.
   - h1: Frank Ruhl Libre 500
   - h2, h3: Frank Ruhl Libre 500  
   - body, small: Assistant 400
   - button label, emphasis spans: Assistant 600
   Document these as a "Font weights" section before the worked example.

Three changes to PLAN.md before we proceed:

A. Add an "Accessibility checklist" section listing the minimum bar:
   - Visible focus rings on all interactive elements (use --accent for focus ring color)
   - Skip-to-main link
   - Semantic landmarks (<main>, <nav>, <footer>)
   - Form: <label> properly associated with each <input>, error states keyboard-readable
   - Alt text policy: decorative images empty alt, content images descriptive Hebrew alt
   - Keyboard-reachable nav on mobile (no JS-only menu)
   - All color combinations verified against design-tokens.md ratios

B. Clarify the inline English handling: it's a small <bdi> component (or <span dir="ltr">), 
   not just a Tailwind utility class. The CSS `unicode-bidi: isolate` alone isn't enough — 
   the element type matters for screen readers and copy-paste behavior.

C. Remove the "hero video slot reserved" language. The hero is a pure image component now. 
   When video arrives, we restructure the hero component at that point. No reserved markup 
   in code today. Update Section 2.2 and Section 4 accordingly.

Then, here are answers to all 10 Open Questions — bake these into PLAN.md so the next 
session reading it doesn't need to cross-reference this conversation:

1. Confirmed — teacher site, brief is authoritative. Skill is stale, will update post-build.
2. Confirmed — homepage form after short bio + primary CTA.
3. Confirmed — secondary CTA stack = the contact form.
4. Web3Forms confirmed.
5. Destination email: leave as TODO_EMAIL; owner will provide before launch.
6. Hero: use the edited Magritte photo. Secondary /about photo: labeled placeholder for now. 
   200KB budget acknowledged — do the aggressive compression.
7. Brand mark / favicon: text/typographic monogram, no logo design now.
8. Custom domain: stay on *.pages.dev for now.
9. Sticky mobile contact button: YES — add it. Persistent bottom bar on mobile with phone 
   + WhatsApp icons, dismissible (small X). Hidden on desktop.
10. Analytics: Cloudflare Web Analytics. No GA, no Plausible, no cookies.

Update both PLAN.md and design-tokens.md with these changes and the answers baked in. 
Don't write code. Stop after both files are updated and wait for review.
