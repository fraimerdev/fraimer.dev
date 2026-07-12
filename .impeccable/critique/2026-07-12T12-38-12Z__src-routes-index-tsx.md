---
target: home page (/)
total_score: 29
p0_count: 0
p1_count: 3
timestamp: 2026-07-12T12-38-12Z
slug: src-routes-index-tsx
---
# Critique — Home page (`/` → `src/routes/index.tsx`)

**Register:** brand · **Assessment independence:** degraded (ran sequentially, no sub-agents)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover states exist; static page needs little else |
| 2 | Match System / Real World | 3 | Friendly language; tools row is unlabeled icon-soup |
| 3 | User Control and Freedom | 3 | No nav and no link to /terms anywhere |
| 4 | Consistency and Standards | 3 | h2 "Fraimer" renders before the h1 — inverted heading order |
| 5 | Error Prevention | 3 | One outbound link missing rel="noopener noreferrer" |
| 6 | Recognition Rather Than Recall | 3 | Skill icons carry no text labels |
| 7 | Flexibility and Efficiency | 3 | Simple page; email is a real mailto |
| 8 | Aesthetic and Minimalist Design | 2 | Grid + 3 orbs + 10 dots + 3 lines decorate, none direct the eye |
| 9 | Error Recovery | 3 | notFound() thrown with no custom 404 -> bare error page |
| 10 | Help and Documentation | 3 | Contact channels plentiful and clear |
| **Total** | | **29/40** | **Good (usable) — but the brand fails the slop test** |

## Anti-Patterns Verdict

Yes, unmistakably AI-generated. Textbook generic dark-mode developer portfolio — the #1 anti-reference in PRODUCT.md. Tells: black bg + white gradient-orb blobs (blur 80px) + animated grid-pattern + 10 floating dots + 3 drifting lines + everything in font-mono. Category-reflex failure: the look is guessable from "developer portfolio" alone.

Deterministic scan: detect.mjs returned [] (clean) on index.tsx and src/routes (exit 0). True negative on syntax, not a design pass — the slop here is semantic (ambient effects + mono combo), which no regex catches.

Visual overlays: no browser-automation tool exposed; page is fully static so source review is authoritative. Contrast computed numerically.

## Overall Impression

Strong content (hackathon-winning AI project, live products, clear voice, real contact paths) dressed in the one costume the brief forbids. The page undersells the person. Biggest opportunity: strip the ambient-effect layer, commit to a real typographic identity, make the work + hire-me path the loudest things on screen.

## What's Working

- Content is real and specific — the "Distinctly Fraimer" raw material.
- Responsive scaffolding is sound (flex-col lg:flex-row hero, sm/lg type steps, max-w-7xl).
- Body contrast mostly fine — gray-400 on black ~8.3:1 (AA).

## Priority Issues

[P1] Generic dev-portfolio slop — exactly the rejected anti-reference. Remove grid/orbs/dots/lines; replace mono-everything with a committed type system; pick a real color strategy; make motion guide not decorate. Command: craft / bolder.

[P1] Primary conversion path (commissions) is invisible — /terms exists but nothing links to it; only a raw Ko-fi tip badge (donations != commissions). Add a strong "Work with me" CTA. Command: craft / clarify.

[P1] Heavy infinite motion, zero prefers-reduced-motion fallback — 5 always-running animations, fails WCAG 2.3.3; blur(80px) x3 is a mobile GPU cost; animate-fade-in gates content on opacity:0. Add reduced-motion block. Command: animate / audit.

[P2] text-gray-500 labels fail AA — field labels at 12px mono compute ~4.35:1 on black (< 4.5:1). Bump to gray-400+. Command: colorize / audit.

[P2] Identical square card grid + buried proof — same-size bg-white/5 boxes; hackathon (winner) demoted to grey parenthetical. Differentiate cards, lead with the win as a badge. Command: layout / craft.

## Persona Red Flags

Jordan (First-Timer): gets who this is, but no next step — no nav, no CTA, no path to hire/terms. Unlabeled skillicons image.

Casey (Mobile): skillicons min-w-[300px] horizontal-scroll strip; all animations run full-time; text-xs tap targets; primary links mid-hero not thumb zone.

Riley (Stress Tester): unknown paths throw notFound() but no notFoundComponent -> bare default 404. External images (skillicons, ko-fi) have no onError fallback.

Client/Recruiter (PRODUCT.md): template aesthetic caps confidence; missing hire-me path leaves even convinced visitors nowhere to click. The most important persona fails hardest.

## Minor Observations

- Inverted headings: name is h2, "Hey there you!" is h1.
- Ko-fi link missing rel="noopener noreferrer".
- font-mono on all headings reads as technical costume for a bold/futuristic brand.
- app.css ships unused --background/dark-mode tokens (page hardcodes bg-black).
- Ko-fi badge is a third-party raster CDN image, off-brand chrome.

## Questions to Consider

- What if the first impression were the hackathon win, not a blurred orb?
- If commissions are the goal, why ask for a tip before the job?
- What one typeface says "17 and building the future" better than system-mono?
