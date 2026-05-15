# Marketing Site UI Kit

Recreation of the MVA public website (mva.school) based on the supplied homepage screenshot and brand guidelines.

## Components (`components.jsx`)
- `PromoBar`, full-bleed orange announcement strip
- `Header`, coloured-bg nav with logo lockup, links, WhatsApp icon, "Get in touch" + "Get Started" CTAs
- `Btn`, pill button, variants: `mint`, `outline-w`, `outline-n`, `fill-w`, `orange`. Optional trailing arrow-in-circle icon
- `HeroCard`, white "Introducing: MVA Start" feature card with avatar
- `Footer`, navy footer with logo, columns, copyright

## Screens (`screens.jsx`)
- `HomeScreen`, hero, feature grid, pink wellbeing band, navy principal quote, yellow stats band
- `AboutScreen`, teal "About MVA" hero band + editorial copy
- `ContactScreen`, blue "Book a Discovery Call" band with form (text input, email, select, submit)

## Routing
`app.jsx` is a state-machine router. Click any nav item or any CTA to navigate. Form submission switches to a "Thanks, we'll be in touch" success state.

## Visual notes
- The hero photo, principal portrait and HeroCard avatar are drawn as gradient placeholders. Drop in real cut-out portraits when available.
- The giant `a` watermark on coloured bands is `assets/logos/mva-a-mark-{navy,white}.png`, positioned bleeding off bottom-right at ~12% opacity.
- All buttons are full pills. All cards are 16px radius with a navy-tinted shadow.
