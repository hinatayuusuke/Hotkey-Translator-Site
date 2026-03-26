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

**2026-03-19 16:30 (Asia/Taipei) — Site copy refinement**

### Summary
- Replaced placeholder-oriented landing page text with more user-facing copy while keeping the current structure and visuals.

### Context / Goal
- `Doc/Site_Content_Placeholders.md` identified that the site still used developer-oriented or generic placeholder wording.
- The goal was to revise text only, without changing screenshots or layout structure, so the page communicates user value more clearly.

### Changes
- Updated hero copy to emphasize the end-user workflow instead of the release process.
- Revised feature, install, and requirement descriptions to distinguish the base workflow from optional advanced helpers.
- Tightened build and repository-link descriptions so Releases stays the primary path and source build remains secondary.

### Files Touched
- `site/src/data/siteContent.ts` — replaced placeholder/generic copy with more user-facing text across hero facts, features, install steps, requirements, build notes, and resource links.
- `site/src/App.tsx` — updated embedded section headings and supporting copy to match the new content direction.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- No functional behavior changed.
- The landing page now explains the app more clearly from the visitor's perspective and makes the optional-vs-basic setup split easier to understand.

### Risk & Mitigation
- Risk: Some install wording is still intentionally generic until the final release package format is fixed.
- Mitigation: The copy avoids inventing package details and keeps GitHub Releases as the documented source of truth.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after the text update.

**2026-03-23 13:37 (Asia/Taipei) — Workflow screenshot demo**

### Summary
- Replaced the abstract hero image with real app screenshots and added a workflow demo that shows original, ROI selection, and overlay result states.

### Context / Goal
- The site had real screenshots available in `site/src/assets`, but the page still relied on an abstract placeholder image.
- The goal was to make the app behavior easier to understand by showing the source scene, ROI selection, and translated overlay directly in the landing page.

### Changes
- Renamed the newly added screenshot assets to ASCII filenames for easier use in code.
- Updated the hero demo to alternate automatically between the original scene and the overlay result.
- Added a new `How it works` section with manual step switching for Original, ROI Selection, and Overlay Result states.
- Added workflow copy and styles for the new interactive screenshot presentation.

### Files Touched
- `site/src/assets/original-scene.png` — renamed and added the source-scene screenshot used in the hero and workflow demo.
- `site/src/assets/overlay-result.png` — renamed and added the translated overlay screenshot used in the hero and workflow demo.
- `site/src/assets/roi-selection.png` — renamed and added the ROI-selection screenshot used in the workflow demo.
- `site/src/App.tsx` — implemented the hero auto-toggle and the new workflow step section.
- `site/src/data/siteContent.ts` — added workflow step content for the manual screenshot switcher.
- `site/src/index.css` — added styles for the demo frame, crossfade images, workflow step buttons, and reduced-motion behavior.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The landing page now shows the app result directly instead of an abstract placeholder image.
- Visitors can see the difference between the original scene and the translated overlay automatically in the hero area.
- Visitors can manually inspect the three-step workflow in a dedicated section.

### Risk & Mitigation
- Risk: The screenshot PNG files are relatively large and increase page weight.
- Mitigation: The current implementation uses only three focused screenshots; future optimization can convert them to lighter formats such as WebP without changing the page structure.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site builds successfully with the new screenshot demo.

**2026-03-23 14:01 (Asia/Taipei) — Simplify how-it-works gallery**

### Summary
- Replaced the interactive `How it works` switcher with a simpler three-image gallery and shorter explanatory text.

### Context / Goal
- The previous `How it works` section used click-based state switching and longer explanations.
- The goal was to make this section easier to scan by showing Original, ROI, and Overlay as three fixed screenshots with minimal copy.

### Changes
- Removed the workflow step switching UI and related content data.
- Rebuilt the `How it works` section as three static cards ordered Original, ROI, Overlay.
- Shortened the section title, description, and per-image explanations.

### Files Touched
- `site/src/App.tsx` — simplified the workflow section into a fixed three-image layout.
- `site/src/data/siteContent.ts` — removed workflow step data that is no longer used.
- `site/src/index.css` — removed unused workflow switcher styles.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The `How it works` section no longer depends on click interaction.
- Visitors now see the three workflow states at once instead of switching between them.

### Risk & Mitigation
- Risk: Showing all three images at once uses more vertical space on smaller screens.
- Mitigation: The layout stays responsive and keeps the copy short so scanning remains simple.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after simplifying the workflow section.

**2026-03-23 14:05 (Asia/Taipei) — Hero image auto-switch fix**

### Summary
- Reworked the Hero preview so it switches directly between `original-scene.png` and `overlay-result.png` with a simpler image-swap implementation.

### Context / Goal
- The Hero preview was intended to alternate between the original scene and the overlay result, but the previous stacked-image approach did not present the change reliably.
- The goal was to make the Hero auto-switch explicit and dependable.

### Changes
- Removed the reduced-motion gate from the Hero switching logic so the preview always alternates.
- Replaced the dual layered image setup with a single image element whose `src` switches on an interval.
- Simplified the related CSS and kept a short fade animation on each frame swap.

### Files Touched
- `site/src/App.tsx` — simplified the Hero auto-switch logic to swap the image source directly.
- `site/src/index.css` — replaced the layered-image styles with a single-image animation style.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The Hero preview now alternates directly between the original screenshot and the overlay screenshot on a timer.
- The auto-switch no longer stops because of reduced-motion preference handling in this section.

### Risk & Mitigation
- Risk: Always running the Hero animation may be less friendly for users who prefer reduced motion.
- Mitigation: The motion is limited to a simple image swap with a short fade, and other hover transforms still remain motion-reduced.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after the Hero auto-switch change.

**2026-03-23 14:09 (Asia/Taipei) — Minimal hero cleanup**

### Summary
- Reduced the first view so the left side only keeps the requested heading, body text, and download link, while the right side keeps only the Hero image.

### Context / Goal
- The Hero area still contained extra labels, navigation, helper cards, and a repository button.
- The goal was to make the first view much simpler and keep attention on the core description plus the animated Hero image.

### Changes
- Removed the Hero eyebrow label and top quick-link navigation.
- Removed the repository button and all extra Hero-side fact cards.
- Removed all explanatory text and labels from the right Hero panel, leaving only the switching image.
- Kept the requested heading/body copy and the download link on the left.

### Files Touched
- `site/src/App.tsx` — simplified the Hero section to the requested minimal layout.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The first view now shows only the core message, a download CTA, and the auto-switching Hero image.
- Secondary explanation and helper UI no longer compete with the main first impression.

### Risk & Mitigation
- Risk: Removing top navigation from the Hero makes section jumps less immediate from the first screen.
- Mitigation: The rest of the page structure remains unchanged and can still be reached by normal scrolling.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after simplifying the Hero section.

**2026-03-23 14:11 (Asia/Taipei) — Remove middle detail sections**

### Summary
- Removed the `Install path`, `Requirements and notes`, and `Source build` sections from the page.

### Context / Goal
- The page still contained detailed onboarding and build sections that were no longer wanted in the current site scope.
- The goal was to simplify the page by removing those middle sections entirely.

### Changes
- Deleted the `Install path` section and its cards.
- Deleted the `Requirements and notes` section and its optional-component details.
- Deleted the `Source build` section and its command blocks.
- Cleaned up now-unused imports in `App.tsx`.

### Files Touched
- `site/src/App.tsx` — removed the `Install path`, `Requirements and notes`, and `Source build` sections and cleaned up unused imports.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The page is shorter and no longer includes installation, requirements, or source-build details.
- Visitors now move from the Hero and workflow overview directly into features and repository links.

### Risk & Mitigation
- Risk: Users looking for setup details now need to rely more on repository links.
- Mitigation: The repository links section remains available as the path to deeper documentation and releases.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after removing the sections.

**2026-03-23 14:14 (Asia/Taipei) — Fix screenshot cropping**

### Summary
- Adjusted the screenshot frames so the full images are visible without left/right cropping.

### Context / Goal
- The current Hero and workflow screenshots were clipping on the left and right edges.
- The goal was to keep the screenshots fully visible instead of preserving a narrower decorative crop.

### Changes
- Changed the shared screenshot frame to use the actual screenshot aspect ratio instead of a narrower fixed ratio.
- Switched screenshot rendering from `object-fit: cover` to `object-fit: contain`.
- Slightly widened the Hero screenshot area so the main preview can breathe without clipping.

### Files Touched
- `site/src/App.tsx` — widened the Hero image area and reused the shared screenshot frame for workflow images.
- `site/src/index.css` — updated the screenshot frame ratio and image fit behavior to avoid cropping.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- All screenshots now show their full width instead of cropping both sides.
- The page emphasizes accurate app visuals over decorative image fill.

### Risk & Mitigation
- Risk: Showing the full images can leave a little more background space inside the frame.
- Mitigation: The frame keeps a dark background and matching aspect ratio so the result still looks intentional.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after the screenshot display change.

**2026-03-23 14:18 (Asia/Taipei) — Remove section card frames**

### Summary
- Removed framed card styling from `How it works`, `Core strengths`, and `Repository links` and made those sections more concise.

### Context / Goal
- Those three sections still looked heavy because each item was wrapped in a bordered panel.
- The goal was to present the same information more lightly and with shorter descriptions.

### Changes
- Reworked `How it works` into a plain three-column layout with image-only blocks and short captions.
- Reworked `Core strengths` into a lighter two-column list separated by simple top borders.
- Reworked `Repository links` into a simpler link list with bottom dividers instead of framed cards.
- Shortened feature and repository-link descriptions to match the lighter layout.

### Files Touched
- `site/src/App.tsx` — removed framed card layouts from the three sections and simplified their presentation.
- `site/src/data/siteContent.ts` — shortened feature and repository-link descriptions.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The middle and lower sections now read more like lightweight content blocks than card grids.
- The page looks less dense and the remaining text is quicker to scan.

### Risk & Mitigation
- Risk: Removing panels reduces separation between items.
- Mitigation: The layout keeps spacing, labels, and divider lines so each item still scans as a distinct block.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after simplifying the section presentation.

**2026-03-23 14:19 (Asia/Taipei) — Remove hero image frame**

### Summary
- Removed the outer frame around the Hero image so the screenshot sits on the page more directly.

### Context / Goal
- The Hero screenshot still appeared inside a visible framed container.
- The goal was to remove that outer frame while keeping the image sizing and auto-switch behavior.

### Changes
- Removed the `surface-panel` wrapper from the Hero image area.
- Added a lighter dedicated Hero image container without panel border or panel shadow styling.
- Kept the background glow accents behind the Hero image.

### Files Touched
- `site/src/App.tsx` — removed the framed Hero wrapper and kept only the image container.
- `site/src/index.css` — added a minimal Hero image container style without the panel frame.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The Hero screenshot now appears without the previous outer panel frame.
- The first view looks cleaner and puts more emphasis on the image itself.

### Risk & Mitigation
- Risk: Removing the frame reduces visual separation from the page background.
- Mitigation: The rounded image shape and background glow still keep the Hero area visually distinct.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after removing the Hero frame.

**2026-03-23 14:25 (Asia/Taipei) — Soften section eyebrow labels**

### Summary
- Removed the pill-style framing from section eyebrow labels such as `How it works` and switched them to a simpler text treatment.

### Context / Goal
- The small section labels above titles still used rounded framed styling that felt visually heavy.
- The goal was to make those labels look lighter and more natural.

### Changes
- Removed the eyebrow background, border, padding, and pill shape.
- Kept the uppercase blue label style, but reduced it to a plain text treatment.

### Files Touched
- `site/src/index.css` — simplified the `.eyebrow` styling used by section headings.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- Section labels now appear as simple small headings instead of framed pills.
- `How it works`, `Core strengths`, and `Repository links` should look cleaner and less decorative.

### Risk & Mitigation
- Risk: The labels may feel less visually separated from the main title.
- Mitigation: The uppercase styling, spacing, and color remain, so the hierarchy is still readable without the frame.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after adjusting the eyebrow labels.

**2026-03-23 14:30 (Asia/Taipei) — Emphasize app name in hero title**

### Summary
- Made `Hotkey Translator` stand out prominently in the first-view title.

### Context / Goal
- The first view needed the app name to be visually prominent.
- The goal was to highlight the app name in the Hero title without changing the rest of the page structure.

### Changes
- Split the Hero heading into a prominent app-name line and a secondary descriptive line.
- Styled `Hotkey Translator` more prominently than the supporting headline text.

### Files Touched
- `site/src/App.tsx` — updated the Hero heading structure and emphasis.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The app name is now the most visually prominent text in the first view.

### Risk & Mitigation
- Risk: A larger app-name line could make the Hero feel taller on smaller screens.
- Mitigation: The supporting line remains shorter and the responsive text sizing keeps the layout controlled.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after emphasizing the app name.

**2026-03-23 14:31 (Asia/Taipei) — Add hero title styling**

### Summary
- Added more visual styling to the `Hotkey Translator` app-name line in the Hero title.

### Context / Goal
- The app name was already more prominent, but still looked too plain.
- The goal was to make the title line feel more intentional without changing the surrounding layout.

### Changes
- Applied a blue-to-cyan gradient text treatment to the `Hotkey Translator` line.
- Added a subtle drop shadow so the app name stands out more from the background.

### Files Touched
- `site/src/App.tsx` — enhanced the visual styling of the Hero app-name line.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The app name is now more visually distinctive in the first view.

### Risk & Mitigation
- Risk: Decorative styling can reduce readability if pushed too far.
- Mitigation: The styling remains limited to a simple gradient and soft shadow on the app-name line only.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after styling the Hero title.

**2026-03-23 14:46 (Asia/Taipei) — Add supported OS label**

### Summary
- Added a supported-OS label next to the download link in the Hero area.

### Context / Goal
- The Hero CTA area needed a quick compatibility cue next to the download link.
- The goal was to show the supported Windows versions without adding another large section.

### Changes
- Added a compact `Windows 10 / 11` label beside the Hero download button.

### Files Touched
- `site/src/App.tsx` — added the supported-OS label next to the Hero download CTA.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- Visitors now see the supported OS immediately next to the download action.

### Risk & Mitigation
- Risk: The CTA row could feel busier on narrow screens.
- Mitigation: The layout already wraps and the OS label uses a compact text treatment.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after adding the OS label.

**2026-03-23 14:47 (Asia/Taipei) — Add Windows icon to OS label**

### Summary
- Added a Windows icon next to the `Windows 10 / 11` label in the Hero CTA area.

### Context / Goal
- The supported-OS label was already present, and the next step was to make it easier to scan visually.
- The goal was to add a lightweight Windows icon without introducing extra assets or files.

### Changes
- Added an inline SVG Windows logo before the `Windows 10 / 11` text in the Hero area.

### Files Touched
- `site/src/App.tsx` — added the inline Windows icon to the Hero OS label.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- The Hero compatibility label is now easier to recognize at a glance.

### Risk & Mitigation
- Risk: An inline icon can feel visually noisy if oversized.
- Mitigation: The icon is kept small and aligned to the existing text treatment.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after adding the Windows icon.

**2026-03-26 18:55 (Asia/Taipei) — Point Hero download CTA to release ZIP**

### Summary
- Updated the main download CTA so it opens the provided release ZIP directly.

### Context / Goal
- The Hero area already exposed the primary download action, but it still pointed to the generic releases page.
- The goal was to use the exact release asset URL provided for the download link without changing the rest of the repository links.

### Changes
- Added a dedicated `externalLinks.download` URL for the direct ZIP asset.
- Switched the Hero download button to use the direct download URL instead of the releases index.

### Files Touched
- `site/src/data/siteContent.ts` — added the direct download asset URL alongside the existing repository links.
- `site/src/App.tsx` — updated the Hero download CTA to use the new direct download link.
- `.agent/changes.md` — appended this task entry.

### Behavioral Impact
- Clicking the main download button now starts from the specific `V1.0.0` ZIP asset instead of opening the releases list page.

### Risk & Mitigation
- Risk: The direct asset URL can become stale when a newer release replaces `V1.0.0`.
- Mitigation: The direct URL is isolated in `externalLinks.download`, so future release updates only require a single constant change.

### Tests / Verification
- Ran `npm run build` in `site/` and confirmed the site still builds successfully after the link update.
