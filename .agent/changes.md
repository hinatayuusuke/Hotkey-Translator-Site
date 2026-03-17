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

**2026-03-17 13:35 (Asia/Taipei) — Site placeholder content guide**

### Summary
- Added a Doc guide that lists remaining placeholder content in the site and what real content should replace it, with Japanese explanations.

### Context / Goal
- The current GitHub Pages site structure is implemented, but some sections still need real screenshots and final user-facing copy.
- The goal was to organize those placeholder areas in a single document under `Doc/` so future edits are straightforward.

### Changes
- Added a new documentation file that maps current site sections to the files and data that should be replaced.
- Documented what content should be prepared next, including screenshots, install copy, requirements, and link/FAQ follow-ups.
- Included Japanese guidance for each section so the replacement intent is clear from a product/content perspective.

### Files Touched
- `Doc/Site_Content_Placeholders.md` — added a placeholder/content replacement guide for the GitHub Pages site.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- No runtime behavior changed.
- The repository now includes a content planning document for completing the public site with real assets and copy.

### Risk & Mitigation
- Risk: The guide can drift if the site structure changes later.
- Mitigation: The document references the current implementation files directly so it can be updated with the same workflow as the site content.

### Tests / Verification
- 未実施。ドキュメント追加のみで、アプリやサイトの挙動変更はありません。
