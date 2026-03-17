**2026-03-17 12:08 (Asia/Taipei) — GitHub Pages distribution site launch setup**

### Summary
- Added an MIT license, implemented the GitHub Pages landing site, and wired automatic Pages deployment.

### Context / Goal
- The repository needed a public-facing distribution page for the Hotkey Translator Windows desktop application.
- The goal was to publish a static GitHub Pages site that explains the app, routes users to releases, and keeps setup notes visible.

### Changes
- Added a repository-level MIT `LICENSE`.
- Replaced the placeholder Vite screen with a one-page React landing page focused on downloads, installation flow, requirements, build notes, and repository links.
- Added shared content data and a reusable section heading component to keep site copy maintainable.
- Updated `vite.config.ts` so production builds use the GitHub Pages project-site base path.
- Added metadata, custom typography, and a brighter visual system tailored for a product landing page.
- Added a GitHub Actions workflow that builds `site/` and deploys `site/dist` to GitHub Pages on `main`.

### Files Touched
- `LICENSE` — added the MIT license text for the repository.
- `.github/workflows/deploy-pages.yml` — added the Pages build and deploy workflow.
- `site/src/App.tsx` — implemented the one-page distribution site layout and content.
- `site/src/components/SectionHeading.tsx` — added a reusable section heading component.
- `site/src/data/siteContent.ts` — centralized repository links, product copy, install steps, and build notes.
- `site/src/index.css` — added the landing-page visual system, typography, and reusable surface/button classes.
- `site/index.html` — added metadata, fonts, and page title/description updates.
- `site/vite.config.ts` — configured the production `base` path for GitHub Pages project-site hosting.

### Behavioral Impact
- The repo now has a production-ready static site build for GitHub Pages instead of a scaffold screen.
- Production builds now emit asset URLs under `/Hotkey-Translator-Site/`, which matches project-site hosting on GitHub Pages.
- Pushes to `main` can deploy the site automatically once GitHub Pages is enabled for the repository.

### Risk & Mitigation
- Risk: The hard-coded Pages base path must match the repository name.
- Mitigation: The configured base matches the current `origin` remote repository name and is isolated in `site/vite.config.ts` for easy updates.
- Risk: Release links or documentation links can drift if the repository location changes.
- Mitigation: All external URLs are centralized in `site/src/data/siteContent.ts`.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed a successful production build.
- Verified `site/dist/index.html` emits `/Hotkey-Translator-Site/` asset paths for GitHub Pages project-site hosting.
