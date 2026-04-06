import { externalLinks, type SiteContent } from './siteContentShared'

export const enSiteContent: SiteContent = {
  meta: {
    title: 'Hotkey Translator | Windows OCR and Translation Overlay',
    description:
      'Hotkey Translator is a Windows OCR and translation overlay. This site introduces the release download, setup information, and related documentation.',
    ogTitle: 'Hotkey Translator',
    ogDescription:
      'Windows OCR and translation overlay. This site introduces the release package, setup information, and related links.',
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
    title: 'Play untranslated games seamlessly.',
    description:
      'Hotkey Translator captures text with a hotkey, translates it instantly, and displays it as a seamless overlay. Need more power? You can easily add local models or advanced OCR engines to fit your setup.',
    downloadLabel: 'Download latest release',
    osLabel: 'Windows 10 / 11',
    imageAlt: {
      original: 'Original scene before overlay translation',
      overlay: 'Translated overlay displayed over the original scene',
    },
  },
  workflow: {
    eyebrow: 'How it works',
    title: 'A quick introduction to how to use it.',
    description: 'Original, ROI, and overlay.',
    items: [
      {
        id: 'original',
        label: 'Original',
        title: 'Keep the original screen visible',
        description: 'Use it while keeping the game or app display unchanged.',
      },
      {
        id: 'roi',
        label: 'Select the text area',
        title: 'Mark only the area that contains text',
        description: 'Select only the text area you want to read.',
      },
      {
        id: 'overlay',
        label: 'Overlay',
        title: 'An overlay appears on the screen',
        description: 'Read the translated result without switching windows.',
      },
    ],
  },
  features: {
    eyebrow: 'Core strengths',
    title: 'An introduction to the main features of the app.',
    description:
      'It supports one-key execution, readable overlay output, and flexible OCR and translation engine choices. If the standard features are not enough, you can additionally download more advanced OCR and translation engines.',
    itemLabel: 'Feature',
    items: [
      {
        title: 'Check translated results on screen without breaking your flow',
        description:
          'Capture text from games, videos, and desktop apps, then read the result directly in the overlay.',
      },
      {
        title: 'Run it easily with hotkeys, ROI presets, and window lock',
        description:
          'After setting the target area, you can run the same flow easily with hotkeys and saved area settings.',
      },
      {
        title: 'Choose the OCR and translation engine that fits your setup',
        description:
          'Start with a lightweight setup, then download other OCR or translation engines when you need different speed, quality, or local inference.',
      },
      {
        title: 'Use more advanced capture paths when standard capture is not enough',
        description:
          'If screen capture is difficult with standard capture, you can also choose Graphics Hook or mirror fullscreen.',
      },
    ],
  },
  links: {
    eyebrow: 'Repository links',
    title: 'Download, documentation, and issue-report links.',
    description:
      'Refer to the repository when you need detailed setup steps, issue tracking, or release information.',
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
        description: 'Review the source code and the overall project.',
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
