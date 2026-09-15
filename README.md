# Atomity Cloud Optimization

A single-page frontend simulation of a cloud cost optimization product. It walks
through the story of a company's cloud spend: infrastructure is connected, cost /
performance / usage are analyzed, a wasteful resource is detected, a smarter
configuration is recommended, and the resulting savings are shown.

**This is a frontend engineering challenge submission — not a real infrastructure
management platform.** There is no AWS/Azure/GCP integration, no authentication,
and no backend. All cloud cost, resource, and usage figures are simulated
demonstration data.

## Tech stack

- **Next.js** (App Router) + **TypeScript** (strict mode)
- **Tailwind CSS v4** for styling and design tokens
- **Motion for React** (`motion/react`) for scroll-driven and entrance animations
- **TanStack Query** for data fetching, caching, and retry
- Native `fetch` — no Axios

No component libraries (shadcn/ui, MUI, Chakra, Bootstrap, Ant Design) and no
state management libraries are used. Every component is hand-built.

## Install & run

```bash
pnpm install
pnpm dev      # start the dev server at http://localhost:3000
pnpm build    # production build
pnpm start    # run the production build
pnpm lint     # ESLint
```

## Architecture

```
app/            Root layout, global styles, metadata, the single page
components/
  sections/     One component per page section (hero, providers, connection
                flow, analyzer, resource analysis, recommendation, savings,
                regions)
  ui/           Small reusable primitives (cards, badges, bars, animated
                numbers, icons) shared across sections
lib/
  constants.ts  Simulated infrastructure data (providers, resource, savings)
  api.ts        The public REST API call, reshaped into the app's types
  providers.tsx TanStack Query's QueryClientProvider
hooks/          useInfrastructureData (React Query hook), reduced-motion hook
types/          Shared TypeScript types for the simulated data model
```

Each section is a self-contained component composed in `app/page.tsx`. UI
primitives (`MetricCard`, `SavingsCard`, `UtilizationBar`, etc.) are shared so
the same visual language is used everywhere numbers or resource data are shown.

## Animation approach

Built with `motion/react`, using `whileInView` and `useInView` so sections and
numbers animate in as they scroll into the viewport rather than all at once on
load. The provider → optimization-engine diagram uses `useInView` on its
container to draw its SVG paths (`pathLength`) and pulse small "data" dots
along them only while the diagram is actually visible, so nothing keeps
animating off-screen.

Numbers (metrics, cost figures, savings) animate via a small `AnimatedNumber`
component built on `useMotionValue` + `animate`, triggered once by
`useInView`, rather than re-rendering on every frame.

`prefers-reduced-motion` is respected throughout via a `usePrefersReducedMotion`
hook wrapping `useReducedMotion` from `motion/react`: large transform/position
animations collapse to their end state instead of animating. Conditionally
changing animation *targets* is safe for hydration; the diagram intentionally
always renders the same elements (never conditionally mounts/unmounts them
based on the reduced-motion flag) so server and client markup match.

## API used

[REST Countries](https://restcountries.com) (`GET /v3.1/independent`) is used
as a real, public, third-party API — it has no relationship to cloud
infrastructure. Its country/region data is reshaped into an "Active cloud
regions" list to satisfy the challenge's requirement for a real API
integration, and is clearly presented as live environment metadata, separate
from and never mixed with the simulated cost/usage figures used everywhere
else on the page.

## Caching strategy

`QueryClientProvider` (in `lib/providers.tsx`) is configured with:

- `staleTime: 5 * 60 * 1000` — region data is treated as fresh for 5 minutes,
  so revisiting the section doesn't refetch unnecessarily
- `refetchOnWindowFocus: false` — avoids surprise refetches while
  demoing/reviewing the page
- `retry: 1` — a single automatic retry before surfacing the error state

The regions section also exposes a manual **Refresh** button (success state)
and a **Try again** button (error state), both calling React Query's
`refetch()`.

## Loading / error states

- **Loading:** skeleton cards with pulsing placeholders, not a plain "Loading…"
  string.
- **Error:** a dedicated error card ("Unable to load environment data.") with
  a retry button wired to `refetch()`.
- **Success:** the fetched regions render as a responsive card grid.

## Accessibility

- Semantic sectioning (`<section aria-labelledby>`, one `<h1>` in the hero,
  `<h2>` per section) and a labelled SVG diagram (`role="img"` + `aria-label`)
- Keyboard-operable controls only (native `<a>`/`<button>`), visible
  `:focus-visible` outlines defined globally
- `prefers-reduced-motion` support (see above)
- Utilization bars expose `role="progressbar"` with `aria-valuenow/min/max`

## Responsive design

Verified at ~375px (mobile), ~768px (tablet), and 1280px+ (desktop): provider
cards and the recommendation comparison go from stacked to multi-column, the
connection diagram scales via `viewBox` instead of fixed pixel sizes, and no
section introduces horizontal scrolling at any of these widths.

## Tradeoffs

- The connection-flow diagram is a hand-built SVG with a fixed layout (three
  sources merging into one engine) rather than a generic graph-drawing
  solution — it fits this exact story and keeps the bundle light, but it
  isn't reusable for an arbitrary number of providers.
- REST Countries has no real connection to cloud regions; it was chosen
  because it's a stable, keyless, CORS-enabled public API well suited to a
  demo, and its data is clearly labeled as "live environment metadata" rather
  than implied to be real region availability.
- All infrastructure data is static/mocked in `lib/constants.ts` rather than
  computed, since the assignment explicitly asks for simulated data.

## What I'd improve with more time

- Add a second flagged resource (e.g. an idle database) so "waste detected"
  doesn't rely on a single hardcoded example.
- Let the recommendation section respond to which region/provider is hovered
  in the connection diagram, tying the sections together more interactively.
- Add automated accessibility and visual regression tests (axe + Playwright)
  instead of the manual verification pass used for this submission.
