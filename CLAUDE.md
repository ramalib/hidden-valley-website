# CLAUDE.md — Hidden Valley Siding & Rain Gutter

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Framework
- **Next.js 16** with TypeScript, Tailwind CSS v4, and Framer Motion
- Project root: `C:/Users/Asus/Downloads/vibe-coding-project/hidden-valley/`
- Dev server runs on **port 3002** to avoid conflict with other projects

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the Next.js dev server (run from this project's folder):
  `cd C:/Users/Asus/Downloads/vibe-coding-project/hidden-valley && npm run dev`
- Dev server runs at `http://localhost:3002`
- If port 3002 is already in use, the server is running — do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed in `C:/Users/Asus/Downloads/vibe-coding-project/node_modules/`. Chrome cache is at `C:/Users/Asus/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node C:/Users/Asus/Downloads/vibe-coding-project/screenshot.mjs http://localhost:3002`
- Screenshots are saved automatically to `C:/Users/Asus/Downloads/vibe-coding-project/temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node C:/Users/Asus/Downloads/vibe-coding-project/screenshot.mjs http://localhost:3002 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in `C:/Users/Asus/Downloads/vibe-coding-project/` (parent directory).
- After screenshotting, read the PNG from `C:/Users/Asus/Downloads/vibe-coding-project/temporary screenshots/` with the Read tool.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Next.js App Router — pages in `app/`, components in `components/`
- Tailwind CSS v4 with custom tokens defined in `app/globals.css` under `@theme {}`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Business Info (do not make up facts beyond these)
- **Name:** Hidden Valley Siding and Seamless Rain Gutter
- **Phone:** (801) 833-4492
- **Address:** 7688 S 2450 W, West Jordan, UT 84084
- **Owners:** Collin & Lonnette Christison
- **In business since:** 2011 (20+ years industry experience)
- **Rating:** 4.4 stars · 44 reviews · 2026 Best of SLC Award
- **Services:** HardiPlank/vinyl/aluminum siding, soffit & fascia, seamless gutters, roofing (general/flat/tile), tear-offs/repairs, windows, mobile home skirting
- **Attributes:** Free estimates, licensed & insured, no pushy sales, family-owned

## Anti-Generic Guardrails
- **Colors:** Brand palette is slate (#1C2B35) + copper (#B07338) + stone (#F2EDE6). Never use default Tailwind blue/indigo.
- **Shadows:** Use layered, color-tinted shadows with low opacity — never flat `shadow-md`.
- **Typography:** Playfair Display (display) + Manrope (body). Tight tracking on large headings, generous line-height on body.
- **Gradients:** Layer radial gradients. Use siding-texture CSS pattern for hero depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating).

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Do not make up business facts — only use info from the Business Info section above
