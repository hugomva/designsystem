# Minerva Virtual Academy · Design System

> A working design system for **Minerva Virtual Academy (MVA)**, an award-winning, DfE-accredited online school for 11–18 year olds. Bold colour, beautiful serif headlines, and human imagery are the heart of the brand.

## What is MVA?

Minerva Virtual Academy is a fully online, British-curriculum independent school covering ages 11–18 (KS3, GCSE, A-Level). The school combines:

- **Live group lessons** taught by teachers from the UK's top schools
- **Self-paced online modules** for asynchronous learning
- **A personal mentor** for every student
- **A wellbeing programme** (45-min weekly sessions on Google Meet)
- **Clubs, assemblies and a cohort community** so students still get the social side of school

The brand promise is "Education, evolved for modern life." It's positioned warmly: a fresh start, a beacon of hope, family-feeling, student-centred, but also rigorous, accredited and results-focused.

## Sources used to build this system

All sources are stored in `uploads/` for reference. Versions referenced:

- **MVA Focused Brand Guidelines V4** (May 2025), `uploads/MVA_Focused_Guidelines_V4.pdf`
- **MVA Email examples** (Suzanne Q&A, GCSE Chemistry taster, Sept early bird), `uploads/MVA Email.pdf`
- **Logo files**, Mark only: `assets/logos/mva-mark-{navy,white}.png` and `mva-mark-{navy,white}.svg`. Full lockup with strapline: `assets/logos/mva-lockup-{navy-mint,navy,white-mint,white}.png` (and matching `.svg`)
- **Font files**, `fonts/Viney-Bold.ttf` (display), `fonts/DarkmodeMonoOff-{Md,Rg}.ttf` (body)
- **Reference screenshots**, `assets/reference/brand-blocks-acutout.png` (the four coloured panels with the giant "a" watermark), `assets/reference/website-hero.png` (live homepage hero)

### ⚠️ Sources mentioned but NOT received

The user mentioned these but they did not arrive in `uploads/`. Flagged for re-upload:

- `MVA6 Brochure v03.pdf`
- `Hugh GESS Presentation.pdf`
- `Email Header & Footers.pdf`

The user explicitly said _"focus on the example brochures and presentations more than the official brand guidelines, as you will see more boldness, simplicity, and beauty there."_ Without those files, the system leans on the official guidelines + the website hero + the email crops + the brand-blocks reference, which together do convey the bold/colourful side of the brand, but **richer slide and editorial layouts will land better once those files are added.**

## Index of this folder

| Path | What's in it |
|---|---|
| `README.md` | This file |
| `SKILL.md` | Agent-Skills compatible entry point |
| `colors_and_type.css` | All colour tokens, type scale, fonts, spacing, radii, shadows |
| `fonts/` | Viney Bold (display) + Darkmode Mono Off Reg/Md (body) |
| `assets/logos/` | Full logo, brand-ID with strap-line, white variants, isolated "a" mark |
| `assets/reference/` | Reference screenshots, keep for context, don't ship |
| `preview/` | Cards rendered in the Design System tab (one file per card) |
| `slides/` | Sample slide templates inspired by MVA layouts |
| `ui_kits/marketing-site/` | Recreation of the public mva.school marketing site |

## Brand essentials at a glance

- **Logo:** `mva`, three lowercase letterforms in a bespoke serif. The dot on the `i` of "Minerva" lives over the **`a`** (it's actually a "v-child", a tiny stylised figure forming the right side of the **a**). Treat the **`a` mark** as a standalone symbol when space is tight.
- **Display type:** Viney Bold (alt: DM Serif Display)
- **Body type:** Darkmode Mono Off (alt: DM Sans)
- **Primary palette:** Navy `#0d2f69`, OG `#3c96aa`, Teal `#40b4a6`, Mint `#82ecb9`, Blue `#277ba6`
- **Accent palette:** Yellow `#ffd632`, Orange `#ff7828`, Pink `#fea0f6`
- **Body grey:** `#333333` (text only, never as a background)

---

## Content fundamentals

The voice is **warm, plain-spoken, optimistic, and a touch ceremonial.** It addresses parents and prospective students directly using "your child", "we", "our school". Never corporate jargon, never schooly-stuffy, never overly chirpy.

### Tone & posture

- **Warm and welcoming, not slick.** "We look forward to your family joining ours so that we can help your child thrive."
- **Confident, accredited, grown-up.** The brand never undercuts its own seriousness, it's a real school with real exam outcomes.
- **Human first.** Sentences use "we", "you", "your child", "our students". The principal and mentors are always named (Suzanne, Sol, Jack).
- **Short, declarative headlines.** "Traditional schooling isn't the perfect fit for every child." "Education, evolved for modern life." "Meet Suzanne." "Fuels of the Future."
- **Action-time-place hierarchy in promo copy.** "This Wednesday @ 4:30pm, GCSE Chemistry Taster w/ Jack". "Join us Monday, 6pm GMT."

### Casing and punctuation

- **Sentence case** for headlines and buttons. (`Discover MVA`, `Book a Discovery Call`, `Get Started`, `Get in touch`).
- **Title Case** is used sparingly, only for proper-noun product names (`MVA Start`, `MVA Wellbeing Programme`, `Discovery Call`).
- Curly quotes, `'` `'` `"` `"`. En-dashes for ranges: `11–18 year olds`.
- Programme is always spelled the British way (`programme`, `enrolments`, `colour`).

### "We say / We don't say"

| ✅ Say | ❌ Don't say |
|---|---|
| "Education, evolved for modern life" | "EdTech reimagined" |
| "World-class, award-winning, virtual schooling for ages 11–18" | "Cutting-edge online learning solutions" |
| "Their own pace, with a personal mentor" | "Personalised learning journeys" |
| "Join us Monday, 6pm GMT" | "Register for our upcoming webinar event" |
| "£540 off, Enrol by 31st March" | "Limited-time offer!!! Don't miss out!!!" |
| "Meet Suzanne" | "About our Principal" |

### Emoji and symbols

Emoji are **not** part of the brand voice in formal materials. Email and social may use a sparing exclamation point (`Last few places available!`) but no emoji.

The signature symbols of the brand are typographic: the lowercase **`a`** (from the logo), the **mint highlight pill**, and the down-arrow inside CTA buttons.

### Examples in the wild

- Promo bar: _"Join us on 1st June. Last few places available! →"_
- Hero headline: _"Education, evolved for [modern life]"_, `modern life` sits inside a mint highlight pill.
- Sub-hero: _"Welcome to MVA, the award-winning, DfE-accredited online school for 11–18 year olds, putting young people first, wherever they are."_
- Email subject style: _"Meet Suzanne, MVA's Principal"_
- CTA pairs: a **filled mint pill** + an **outlined white pill** ("Discover MVA" + "Book a Discovery Call").

---

## Visual foundations

### Colour
Two colour families: a **cool brand family** (Navy → Blue → OG → Teal → Mint) used for primary surfaces, and a **bold accent family** (Yellow / Orange / Pink) used to inject life into promo cards, slide variety, and editorial moments. Big colour blocks are a hallmark, full panels of saturated single-colour fill, often paired with the giant `a` watermark.

- **Default coloured background:** MVA OG `#3c96aa` or Navy `#0d2f69`.
- **Accent on dark/branded backgrounds:** Mint `#82ecb9` (highlight pills, primary buttons).
- **Top promo bar:** Orange `#ff7828`.
- **Body text on light:** Grey `#333333` or Navy.

### Type
Two-font system. **Viney Bold** for everything display; **Darkmode Mono Off** for everything body. There is no third font. When Viney/Darkmode aren't available (Google Slides, Docs, Canvas), substitute **DM Serif Display** for headers and **DM Sans** for body, no other substitutions allowed.

The display look is generous, ceremonial, with a tight `-0.01–-0.015em` letter-spacing. Body sits at 17px, 1.55 leading, with a quiet `--mva-ink-2` for secondary text.

### Backgrounds
Three primary background treatments:
1. **Solid colour blocks** (full-bleed), the most common. Often with a faint giant `a` watermark in 5–8% lighter or darker than the bg.
2. **Brand gradient**, Navy → OG → Teal, with a Mint highlight bottom-left and a Blue highlight top-right. Used for hero/cover situations only.
3. **Off-white paper** `#fafbfb` for editorial / long-read content.

No noise textures, no hand-drawn illustrations, no repeating patterns beyond the `a` watermark.

### Imagery
- **Cut-outs of real people** are the strongest single visual idiom. High-quality portraits of MVA students, mentors and the principal, masked into a **circle** or used as transparent PNG cut-outs popped on top of a coloured block.
- Photography skews **warm, contemporary, daylight, candid**, never staged stock.
- **Circles** are the device for holding a portrait inside copy-heavy or coloured layouts.

### Slide safe area (footer keep-out zone)
Every slide carries the **`mva` corner logo at bottom-left** and the **slide counter at bottom-right** at fixed positions. Content must NEVER enter this zone, or the logo gets overlapped, half-covered, or obscured.

The keep-out:
- **Bottom 140px** of any 1920×1080 slide is reserved for the corner logo (left) and slide counter (right). No content lands here — no body copy, no badges, no buttons, no cards.
- **Top 140px** also reserved for any top-corner metadata (date, eyebrow chips).
- Treat the slide as a **1920×800 working canvas** centred vertically inside the 1080 frame. Lay out content inside that.

Implementation:
- The `slide-inner` container uses `padding: 110px 110px 160px` — that bottom 160px is the safe area. Don't shrink it.
- If a slide's content runs long, **reduce text or split into two slides**, never extend into the safe area.
- For badges/pills like "Outbound Engagement Team — new" that previously sat low, anchor them to the **top of the slide** (next to the eyebrow) or **inside the content area**, never at the bottom.

### Sub-headline / lead-paragraph position
On title slides, the lead paragraph that explains the title belongs **directly under the title**, not anchored to the bottom of the slide. Big-headline + supporting-paragraph reads as one block:

```
[badge]            ← top
[Big serif title]
[Lead paragraph]   ← right under the title, not in the footer
[empty space]      ← bottom
```

Avoid pushing the lead paragraph down with `margin-top: auto` or `justify-content: space-between`. Use a tight vertical group at the top-left, with empty space falling below it.

### Headline punctuation
**Slide-scale display headlines (100px+) should not end with terminal punctuation.** At that size a trailing full stop, exclamation, or question mark drifts off the baseline and reads as a stray dot, especially when it sits outside a highlight pill. Drop it and let the line break carry the closure.

This applies to **every slide heading and section title in a 1920×1080 deck**, regardless of what it says. "Roles, sharpened" not "Roles, sharpened." "What success looks like" not "What success looks like." "Nurture & reach" not "Nurture & reach." A heading with internal commas still doesn't take a terminal full stop.

**Web-scale headlines (roughly 40–80px) and card titles are fine with full stops** when they help a sentence feel deliberate and finished, e.g. "A school that works for ages 11 to 18." Use them when the rhythm calls for it; skip them when the headline is a fragment.

The rule of thumb: if the mark sits visually anchored to its line, keep it. If it detaches and floats, cut it. Mid-headline commas are always fine. No em-dashes anywhere, at any size.

### The `va` overlay (full-bleed watermark)
A full-bleed white overlay (`assets/logos/va-overlay.png`, 1920×1080, ~9% opacity) carries the giant `va` motif as a soft tonal layer across the entire canvas. It is the **primary watermark device**, replacing the older offset bottom-right `a` mark for slides, marketing bands, and any branded coloured surface.

Usage:
- **Dark / saturated surfaces** (Navy, OG, Teal, Blue, Orange), render at full opacity, no filter.
- **Light surfaces** (Pink, Yellow, Mint, paper), apply `filter: invert(1); opacity: .35; mix-blend-mode: multiply` so the overlay reads as a darker tint of the same colour.
- Always full-bleed: `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;` and place behind content (`z-index: 3` or above on copy).

The legacy offset `a` mark (`assets/logos/mva-a-mark-{navy,white}.png`) is retained for editorial moments where a single, deliberately cropped letterform reads better than a full-bleed pattern, but **the overlay is the default**.

### Buttons & pills
- **Primary CTA:** mint-filled pill, navy text, optional down-arrow icon at the right. (`Discover MVA ↓`)
- **Secondary CTA:** white-outline pill on coloured backgrounds; navy-outline pill on light backgrounds.
- **Small links:** orange or navy text, no underline, with a `→` arrow on hover.
- All buttons are full pills (`border-radius: 999px`). No square buttons.

### Cards
Cards are usually **white on a coloured background**, full-radius `var(--r-md)` (16px), with a soft `--shadow-md`. Inside, a small circular avatar at the left, a title in body bold, then 1–2 lines of body copy. No coloured left borders. Sharp internal padding (~`var(--sp-5)`).

### Corner radii
- Buttons / chips / highlight pills: full pill `999px`
- Cards: `--r-md` 16px
- Image circles: `50%`
- Coloured background blocks: typically full-bleed (no radius), but when contained inside a layout they take `--r-lg` 24px

### Borders
Hairlines are `1px solid var(--mva-line)` (`#e6ecef`). Cards on light backgrounds usually rely on shadow rather than borders. On coloured backgrounds, borders are white at 20–30% opacity.

### Shadows
Three steps: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, all tinted with the navy shadow colour `rgba(13,47,105, x)` so shadows feel cohesive with the brand (never neutral grey shadows).

### Animation
- **Fade + 8px translate Y** for entries.
- **140–220ms** for hovers, **420ms** for surface changes.
- **Easing:** `cubic-bezier(0.22, 0.61, 0.36, 1)` (out) for entrances, `cubic-bezier(0.65, 0, 0.35, 1)` (in-out) for state changes.
- No bouncy / springy easing. No parallax. No infinite-loop background animations.

### Hover & press
- **Buttons hover:** mint background slightly deeper (`#6ee0a9`); 2px lift via shadow only (no transform).
- **Buttons press:** scale `0.98`, no colour change.
- **Cards hover:** shadow steps up `--shadow-md → --shadow-lg`, no colour change.
- **Links hover:** arrow `→` slides 2px right; underline appears as a 1px line.

### Layout rules
- **Generous left margin** on hero copy (~80px on desktop).
- **The MVA logo** sits **bottom-left or top-left** of any branded asset (per guidelines, p.4). Never centred except in tight square avatars.
- **Image circles** are usually right-anchored, often **bleeding off the right edge** of the page.
- **Promo bar** is full-bleed orange across the top with white text + a right-arrow.
- The 12-col grid is standard; max content width is `1280px`.

### Transparency / blur
Used very sparingly. Allowed:
- Promo bar: solid (no transparency).
- Highlight pills: solid.
- The `a` watermark: 8–12% opacity, no blur.
- Coloured-card-on-coloured-bg: white at 12% opacity is OK as a divider.

No frosted glass / backdrop-filter blur in this brand.

### Photography mood
Warm, daylight, real. No b&w, no heavy grading, no grain. Slight warmth in skin tones is fine. Never cool/blue-graded. Subjects are in motion or candid, not staring at the camera.

---

## Iconography

MVA does not use any single icon library, and the brand does not yet ship a custom icon set. The visual vocabulary is **typographic + photographic** rather than iconographic, the logo's `a`, mint highlight pills, circles, and human portraits do the heavy lifting.

When icons are needed (CTAs, list bullets, footer socials), the brand currently uses simple outline glyphs. We standardise on **[Lucide](https://lucide.dev)**, clean monoline 24px icons with a 2px stroke, as the closest match to what appears on the live site (down-arrow inside CTA buttons, video-play triangle, WhatsApp glyph).

Lucide is available via CDN in any HTML:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="arrow-down"></i>
<script>lucide.createIcons();</script>
```

**Substitution flag:** Lucide is a substitute, not the official MVA icon set. If MVA ships its own icon system in future, swap it in here.

### Usage rules

- Icons are always **navy on light** or **white on coloured/dark**.
- Icon-in-button: place to the **right** of the label with a small gap. The signature MVA pattern is `Discover MVA ↓`, label then a down-arrow inside a small circle.
- Icon size in body: **20px**. Icon size in buttons: **18px** with a 28px circular halo if it sits inside a button.
- Never recolour Lucide icons in brand colours other than navy/white. No emoji as icons. No coloured/duotone icons.

### Other graphic devices (not icons but used like them)

- **The `a` mark watermark**, `assets/logos/mva-a-mark-navy.png` / `mva-a-mark-white.png`. A pre-cropped, deliberately offset variant of the "a" glyph. Used as a decorative watermark on coloured blocks.
- **The full lockup** (mark + "Minerva Virtual Academy" strapline), four variants in `assets/logos/`:
  - `mva-lockup-navy-mint.png`, navy mark, mint strapline (the standard "Brand")
  - `mva-lockup-navy.png`, all navy (use on light backgrounds when single-tone is needed)
  - `mva-lockup-white-mint.png`, white mark, mint strapline (the "Reversed" variant for dark backgrounds)
  - `mva-lockup-white.png`, all white (single-tone reverse)
- **The mark only**, `assets/logos/mva-mark-{navy,white}.png` and matching `.svg`. Use as a corner signature on slides and in tight UI spaces.
- **Circular portrait masks**, see CSS `.portrait-circle` in the marketing-site UI kit.
