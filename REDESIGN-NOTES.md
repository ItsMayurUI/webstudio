# Mayur Nirkhe Dev Studio — Dark Purple Neon Redesign

This update keeps the existing Angular 12 application, routes, page components, project assets, service package content, enquiry form behavior, SEO landing pages, and project links.

## Visual update
- Black / deep-plum foundation with violet and purple neon accents.
- New responsive homepage hero using the existing portrait asset at `src/assets/illustrations/homepage0.webp`.
- Floating technology chips, orbit rings, glow layers, grid texture, and motion details.
- Redesigned navigation, intro, capabilities, project cards, process, testimonials, services, about, portfolio, contact, and footer styling.
- Responsive layouts and reduced-motion support.

## Build
This is an Angular 12 project. On Windows, use a compatible Node version (Node 16 or 18 is recommended for this legacy Angular toolchain), then run:

```bash
npm install
npm start
```

Production build:

```bash
npm run build
```

The production build was validated in the preparation environment with the OpenSSL legacy provider enabled. `angular.json` now disables build-time remote font inlining so production builds do not depend on fetching Google Fonts during compilation.

Note: one component-style budget warning remains for the homepage stylesheet (11.43 kB vs the existing 10 kB warning threshold). It does not fail the build; the production bundle built successfully.
