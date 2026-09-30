# Crack The Campus (CTC) — Enterprise Placement Preparation & Credentialing Platform

[![React](https://img.shields.io/badge/React-19.2-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![SCSS](https://img.shields.io/badge/Styling-Modular_SCSS-CC6699?logo=sass)](https://sass-lang.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An enterprise-grade, high-performance campus placement platform engineered for engineering students, universities, and technical hiring partners. **Crack The Campus (CTC)** bridges the gap between campus talent and tier-1 tech recruiting through verified **CTC Score** credentialing, AI-proctored mock drills, structured preparation modules, and an interactive placement ecosystem.

---

## Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Technology Choices](#technology-choices)
3. [Architecture Overview](#architecture-overview)
4. [Dependencies Used and Why](#dependencies-used-and-why)
5. [Performance Optimizations](#performance-optimizations)
6. [Animation Approach](#animation-approach)
7. [Assumptions and Design Decisions](#assumptions-and-design-decisions)
8. [Known Limitations](#known-limitations)
9. [What Would Be Improved With Additional Time](#what-would-be-improved-with-additional-time)
10. [Lighthouse Performance Report](#lighthouse-performance-report)

---

## Setup Instructions

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KavanaMokshaiah/crack-campus-frontend-assessment.git
cd crack-campus-frontend-assessment
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   > The dev server launches with hot module replacement (HMR) at `http://localhost:5173`.

4. **Run test suite**:
   ```bash
   npm test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```
   > Compiles TypeScript with strict type checking (`tsc -b`) and generates an optimized production bundle inside `dist/`.

6. **Preview production build locally**:
   ```bash
   npm run preview
   ```
   > Serves the compiled `dist/` directory at `http://localhost:4173` to test real production behavior.

---

## Technology Choices

| Layer | Technology | Rationale |
|---|---|---|
| **Core Framework** | **React 19** | Latest concurrent rendering features, optimal DOM reconciliation, seamless hooks lifecycle, and broad industry support. |
| **Language** | **TypeScript 5.x** | End-to-end static typing for domain models (`types/index.ts`), component props, service interfaces, preventing runtime regressions. |
| **Build Tooling** | **Vite 6** | Instant Cold Start via native ES modules in development, Rollup-powered code-splitting, tree-shaking, and asset hashing in production. |
| **Client-Side Routing** | **React Router DOM v7** | Declarative route structure supporting dynamic navigation, lazy loading chunks, 404 boundaries, and scroll restoration. |
| **Styling Architecture** | **Modular SCSS (Sass)** | Pure CSS control without bloated utility runtimes. Uses SCSS variables, mixins, responsive breakpoints, and hardware-accelerated animations. |
| **Iconography** | **Lucide React** | Lightweight, tree-shakeable SVG icon set with consistent visual line-weights matching the clean developer aesthetic. |
| **Persistence Layer** | **LocalStorage API** | Resilient client-side caching for simulator parameters, mock test states, lead submissions, and user preferences without requiring cold database spins. |

---

## Architecture Overview

```
src/
├── assets/                  # High-efficiency WebP/PNG brand and promo assets
├── components/
│   ├── common/              # Shared reusable atomic components
│   ├── interactive/         # Rich interactive state machines
│   │   ├── AssessmentSandboxModal.tsx  # Live AI proctored mock testing sandbox
│   │   ├── AuthModal.tsx               # Student Login/Signup modal with validation
│   │   └── CTCScoreCalculator.tsx      # Multi-factor CTC algorithm simulator
│   ├── layout/              # App shell: Header, Footer, PromoBar
│   └── sections/            # Feature landing sections
│       ├── HeroSection.tsx             # Promotional hero with direct CTAs
│       ├── TrustMarquee.tsx            # Hiring partner continuous ticker
│       ├── EcosystemSection.tsx        # Web Hub & Pro-Suite dual-core breakdown
│       ├── CTCScoreSection.tsx         # Algorithm weight breakdown & credentials
│       ├── MonthlySeriesSection.tsx    # Live campus ranking leaderboard
│       ├── InfrastructureSection.tsx   # Anti-cheat & latency metrics
│       ├── FAQSection.tsx              # Interactive categorised accordion
│       └── ContactSection.tsx          # University partnership lead capture
├── data/                    # Typed datasets (companies, courses, FAQs, leaderboard)
├── pages/                   # Lazy-loaded route views
│   ├── HomePage.tsx
│   ├── ExplorePage.tsx
│   ├── PricingPage.tsx
│   ├── DownloadPage.tsx
│   ├── ScoreCalculatorPage.tsx
│   ├── PracticePage.tsx
│   ├── InstitutionPage.tsx
│   └── NotFoundPage.tsx
├── routes/
│   └── AppRoutes.tsx        # Route definitions with React.lazy and Suspense
├── services/
│   └── apiService.ts        # Modular async service layer with simulation delay
├── styles/                  # Design tokens, mixins, keyframe animations
│   ├── _variables.scss      # Colors, typography, spacing tokens
│   ├── _mixins.scss         # Glassmorphism, container helpers, media queries
│   ├── _animations.scss     # 60fps GPU-accelerated keyframes & reduced-motion
│   └── main.scss            # Global baseline, typography, button variants
├── types/                   # Domain TypeScript interfaces
├── App.tsx                  # Root application controller & global modal coordinator
└── main.tsx                 # DOM entry point
```

### Key Architectural Principles
- **Separation of Concerns**: Business calculation logic (`apiService.ts`) is detached from presentation components (`CTCScoreCalculator.tsx`), ensuring testability and modularity.
- **Route-Level Code Splitting**: Non-essential route components (`ExplorePage`, `PricingPage`, etc.) are wrapped in `React.lazy()` and `Suspense`, preventing initial page load inflation.
- **Single Source of Truth**: Global modals (Assessment Sandbox, Student Auth) are coordinated at the app shell level in `App.tsx` and can be triggered seamlessly from headers, hero CTAs, and section banners.

---

## Dependencies Used and Why

| Package | Purpose & Justification |
|---|---|
| `react` & `react-dom` (v19) | Foundation library providing modern functional component models, concurrent UI transitions, and high-speed reconciliation. |
| `react-router-dom` (v7) | Provides zero-reload single-page navigation, URL parameter management, and lazy chunk routing. |
| `lucide-react` | Standardized, accessible SVG vector icon system with zero runtime CSS dependencies and granular per-icon tree-shaking. |
| `sass` | Allows compiling clean, nested, maintainable SCSS stylesheets with mixins, mathematical functions, and color manipulation without CSS-in-JS runtime overhead. |
| `@vitejs/plugin-react` | Fast JSX/TSX compilation and Hot Module Replacement (HMR). |
| `typescript` | Static typing enforcement preventing invalid props, missing handlers, and API signature mismatches. |

---

## Performance Optimizations

1. **Route-Level Code Splitting**:
   - Secondary routes (`/explore`, `/pricing`, `/download`, `/score-calculator`, `/practice`, `/institution`) are dynamically imported via `lazy()`.
   - Result: Initial bundle download is kept under **115 kB gzipped**, minimizing First Contentful Paint (FCP).

2. **Modern Image Formats & Responsive `<picture>` Delivery**:
   - High-resolution hero assets converted to next-generation **WebP** formats with fallbacks.
   - Reduces asset payload size compared to the original PNG/JPEG assets.

3. **Critical Resource Preconnecting**:
   - `index.html` leverages `<link rel="preconnect">` for Google Fonts (`fonts.googleapis.com` and `fonts.gstatic.com`), saving two round-trip network hops during font discovery.

4. **Low Layout Shift**:

   - Explicit sizing and stable layout containers help reduce unexpected movement during asset rendering.
   - Latest deployed Lighthouse results measured CLS at **0.036 on desktop** and **0.102 on mobile**.

5. **Pure SCSS Architecture (Zero Runtime CSS Overhead)**:
   - Unlike runtime CSS-in-JS libraries (e.g. styled-components) that parse styles on the main thread during execution, SCSS compiles down to a single compact stylesheet (`4.46 kB` gzip).

6. **Client-Side Data Caching**:
   - Persistent cache in `localStorage` for score calculations and inquiries eliminates redundant network calls and enhances responsiveness.

---

## Animation Approach

- **GPU Hardware Acceleration**:
  - All continuous micro-animations (`marqueeScroll`, `floatBadge`, `pulseGlow`) strictly manipulate `transform: translate3d(...)` and `opacity`.
  - This avoids CPU paint/layout cycles and locks animations at a consistent **60 frames per second (FPS)**.
- **Infinite Logo Marquee**:
  - CSS-only seamless loop using `translate3d(-50%, 0, 0)` with duplicated slide elements, ensuring zero JavaScript timer overhead or jank.
- **Accessibility & Reduced Motion**:
  - Includes a dedicated `@media (prefers-reduced-motion: reduce)` rule inside `_animations.scss` that disables or shortens animations to `0.01ms` for users with vestibular or motion sensitivity.

---

## Assumptions and Design Decisions

1. **Dark Mode-First Engineering Aesthetics**:
   - Built with an intentional `#0b0b0e` dark palette and `#7c3aed` violet accents, tailored for software developers and computer science students accustomed to dark IDEs.
2. **Client-First Proctored Sandbox**:
   - Rather than redirecting students to external software, an integrated proctored sandbox modal simulates full-screen verification, webcam proctoring checks, tab-switch interception, and live question timing within the browser.
3. **Calibrated CTC Scoring Algorithm**:
   - The CTC Score algorithm operates on a calibrated weighted model (DSA 35%, Aptitude 20%, Core CS 20%, Projects 15%, Soft Skills 10%) producing actionable placement tiers (`Elite`, `Tier-1 Ready`, `Growing`, `Foundational`) with target company mapping.
4. **Resilient Local Mock Backend**:
   - Contact leads and subscriber lists validate against strict regex rules and persist to `localStorage` with generated tracking IDs (`CTC-XXXXXX`).

---

## Known Limitations

- **Simulated Proctoring Environment**:
  - While the web sandbox detects tab-switching (`visibilitychange`) and window blur, true OS-level application locking (e.g., blocking terminal/secondary monitors) requires the native desktop Pro-Suite build.
- **Client-Side Code Execution**:
  - Practice coding exercises currently run in an evaluation sandbox; a production containerized code execution engine (e.g. Judge0 or custom Docker sandboxes) is needed for multi-language execution at scale.
- **Mock Leaderboard Data**:
  - Rankings and user profiles are currently populated via simulated test data rather than live WebSockets or Redis leaderboards.

---

## What Would Be Improved With Additional Time

1. **Native Pro-Suite Application**:
   - Package the desktop proctoring suite using **Tauri / Rust** or **Electron** for true native OS lockdown, screen freezing, and multi-monitor detection.
2. **WebAssembly / Pyodide In-Browser Compiler**:
   - Embed Pyodide or WebAssembly-based compilers to allow instant C++, Java, and Python execution directly in the browser sandbox without server latency.
3. **Live WebSockets Leaderboard**:
   - Implement real-time score streaming using WebSocket / Server-Sent Events (SSE) during monthly campus contest series.
4. **Service Worker PWA Offline Support**:
   - Add Workbox offline caching for practice question sets and cheat sheets.
5. **AI Resume & Audio Mock Interview Engine**:
   - Integrate speech-to-text and LLM-driven audio mock interview rounds for automated soft-skill scoring.

---

## Lighthouse Performance Report

Audited against the deployed Vercel application:

**Live URL:** https://crack-campus-frontend-assessment.vercel.app/

| Metric | Mobile | Desktop |
|---|---:|---:|
| Performance | 93 | 99 |
| Accessibility | 90 | 90 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 2.2 s | 0.6 s |
| Largest Contentful Paint | 2.4 s | 0.9 s |
| Total Blocking Time | 50 ms | 0 ms |
| Cumulative Layout Shift | 0.102 | 0.036 |
| Speed Index | 2.2 s | 0.6 s |

### Performance Optimizations

- Optimized hero imagery using responsive WebP assets.
- Added separate desktop and mobile hero image variants.
- Reduced image file sizes while maintaining visual quality.
- Optimized the hero badge image.
- Used responsive image delivery with `<picture>` and WebP sources.
- Used `fetchPriority="high"` for the primary hero image.
- Verified performance using Lighthouse against the deployed Vercel application.

---

### Detailed Desktop Metrics

| Metric | Measured Value | Google Recommended Threshold |
|---|---:|---:|
| **First Contentful Paint (FCP)** | `0.6 s` | `< 1.8 s` |
| **Largest Contentful Paint (LCP)** | `0.9 s` | `< 2.5 s` |
| **Total Blocking Time (TBT)** | `0 ms` | `< 200 ms` |
| **Cumulative Layout Shift (CLS)** | `0.036` | `< 0.1` |
| **Speed Index (SI)** | `0.6 s` | `< 3.4 s` |

---

### Detailed Mobile Metrics

| Metric | Measured Value | Google Recommended Threshold |
|---|---:|---:|
| **First Contentful Paint (FCP)** | `2.2 s` | `< 1.8 s` |
| **Largest Contentful Paint (LCP)** | `2.4 s` | `< 2.5 s` |
| **Total Blocking Time (TBT)** | `50 ms` | `< 200 ms` |
| **Cumulative Layout Shift (CLS)** | `0.102` | `< 0.1` |
| **Speed Index (SI)** | `2.2 s` | `< 3.4 s` |

---

### Key Audit Highlights
- **Accessibility (90/100):** Latest deployed Lighthouse audit scored 90/100 on both desktop and mobile.

- **Best Practices (100/100):** Modern HTTPS-ready asset linking, no deprecated APIs, responsive viewport configurations, and secure target `rel="noopener noreferrer"` links.

- **SEO (100/100):** Structured metadata with descriptive titles, OpenGraph description tags, crawler-friendly semantic HTML5 structure, and mobile-friendly touch targets.
