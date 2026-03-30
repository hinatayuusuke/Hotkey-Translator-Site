import { externalLinks, type SiteContent } from './siteContentShared'

export const enSiteContent: SiteContent = {
  meta: {
    title: 'Hotkey Translator | Windows OCR and Translation Overlay',
    description:
      'Hotkey Translator is a Windows desktop OCR and translation overlay. Get release downloads, setup notes, and source documentation from a static GitHub Pages site.',
    ogTitle: 'Hotkey Translator',
    ogDescription:
      'Windows desktop OCR and translation overlay with release downloads, setup notes, and repository links.',
  },
  localeToggle: {
    label: 'Language',
    options: {
      en: 'EN',
      ja: '日本語',
    },
  },
  hero: {
    productName: 'Hotkey Translator',
    title: 'Read on-screen text without leaving the app you are using.',
    description:
      'Hotkey Translator lets you capture text with hotkeys, run OCR and translation, and keep the result visible as an overlay. Start with the standard desktop workflow, then add optional helpers only if you need local models, Python OCR services, or advanced fullscreen capture.',
    downloadLabel: 'Download latest release',
    osLabel: 'Windows 10 / 11',
    imageAlt: {
      original: 'Original scene before overlay translation',
      overlay: 'Translated overlay displayed over the original scene',
    },
  },
  workflow: {
    eyebrow: 'How it works',
    title: 'Three quick views of the workflow.',
    description: 'Original, ROI, and overlay.',
    items: [
      {
        id: 'original',
        label: 'Original',
        title: 'See the source content first',
        description: 'Keep the current game or app visible.',
      },
      {
        id: 'roi',
        label: 'ROI',
        title: 'Limit capture to the text area',
        description: 'Select only the text area you want to read.',
      },
      {
        id: 'overlay',
        label: 'Overlay',
        title: 'Read the result on top of the source',
        description: 'Read the translated result without switching windows.',
      },
    ],
  },
  features: {
    eyebrow: 'Core strengths',
    title: 'See what the desktop workflow is good at before you download anything.',
    description:
      'The key points here are user outcomes: quick repeated capture, readable overlay output, flexible engine choices, and extra capture paths only when the standard flow is not enough.',
    itemLabel: 'Feature',
    items: [
      {
        title: 'Read on-screen text without breaking your flow',
        description:
          'Capture text from games, videos, and desktop apps, then read the result directly in the overlay.',
      },
      {
        title: 'Repeat fast with hotkeys, ROI presets, and window lock',
        description:
          'Once the target area is set, you can rerun the same workflow quickly with hotkeys and saved target areas.',
      },
      {
        title: 'Choose the OCR and translation stack that fits your setup',
        description:
          'Start with lightweight paths, then move to other OCR or translation engines when you need different speed, quality, or local inference.',
      },
      {
        title: 'Use advanced capture paths only when standard capture is not enough',
        description:
          'Standard capture covers the basic path, while Graphics Hook and mirror fullscreen stay available for harder cases.',
      },
    ],
  },
  links: {
    eyebrow: 'Repository links',
    title: 'Downloads, docs, and issue reporting stay one click away.',
    description:
      'The landing page stays focused, while the repository links carry users to deeper setup notes, issue tracking, and release context when they need it.',
    itemEyebrow: 'External',
    openLabel: 'Open link',
    items: [
      {
        title: 'Download releases',
        href: externalLinks.releases,
        description: 'Published packages and release notes.',
      },
      {
        title: 'Read the English README',
        href: externalLinks.readmeEn,
        description: 'Feature list and notes in English.',
      },
      {
        title: 'Read the Japanese README',
        href: externalLinks.readmeJa,
        description: 'Repository documentation in Japanese.',
      },
      {
        title: 'Browse the source repository',
        href: externalLinks.sourceRepository,
        description: 'Source code and project context.',
      },
      {
        title: 'Report an issue',
        href: externalLinks.issues,
        description: 'Bug reports and feedback.',
      },
      {
        title: 'Review the MIT license',
        href: externalLinks.license,
        description: 'Repository-level MIT license.',
      },
    ],
  },
  footer: {
    eyebrow: 'Legal and packaging',
    title:
      'MIT for the repository, with separate notices where upstream components require them.',
    description:
      'The repository now includes an MIT license. Third-party components such as the Magpie-derived fullscreen integration, Dear ImGui, MinHook, model files, and OCR or inference runtimes still follow their own license and redistribution terms.',
    links: {
      license: 'MIT license',
      releases: 'Releases',
      issues: 'Issues',
    },
  },
}
