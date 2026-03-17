type FeatureHighlight = {
  title: string
  description: string
}

type InstallStep = {
  number: string
  title: string
  description: string
}

type OptionalRequirement = {
  name: string
  note: string
}

type BuildTrack = {
  title: string
  summary: string
  commands: string[]
}

type ResourceLink = {
  title: string
  href: string
  description: string
}

export const repository = {
  owner: 'hinatayuusuke',
  name: 'Hotkey-Translator-Site',
  productName: 'Hotkey Translator',
}

const repositoryRoot = `https://github.com/${repository.owner}/${repository.name}`

// NOTE: Keep these URLs aligned with the current GitHub remote so the Pages
// site can send users to the correct releases and documentation without extra
// runtime configuration.
export const externalLinks = {
  releases: `${repositoryRoot}/releases`,
  repository: repositoryRoot,
  issues: `${repositoryRoot}/issues`,
  readmeEn: `${repositoryRoot}/blob/main/Doc/README.en.md`,
  readmeJa: `${repositoryRoot}/blob/main/Doc/README.md`,
  license: `${repositoryRoot}/blob/main/LICENSE`,
}

export const heroFacts = [
  'Windows 10 / 11 desktop app',
  'Hotkey OCR + translation overlay',
  'Optional advanced engines and fullscreen flows',
  'GitHub Releases as the download source of truth',
]

export const featureHighlights: FeatureHighlight[] = [
  {
    title: 'Hotkey-driven capture to overlay',
    description:
      'Run OCR and translation without leaving the active window, then read the result directly in the overlay.',
  },
  {
    title: 'Multiple capture pipelines',
    description:
      'Switch between standard capture based on GDI, WGC, or DXGI, and move into experimental Graphics Hook flows when needed.',
  },
  {
    title: 'Engine flexibility',
    description:
      'Mix WinRT, PaddleOCR, PaddleOCR-VL, NDLOCR-Lite, VisionLLM, DeepL, Gemini, Google Web, or Llama.cpp depending on your workflow.',
  },
  {
    title: 'Desktop workflow controls',
    description:
      'ROI selection, ROI preset switching, capture-window locking, scene-change detection, auto-translate, and mirror fullscreen are built for repeated desktop use.',
  },
]

export const installSteps: InstallStep[] = [
  {
    number: '01',
    title: 'Download from Releases',
    description:
      'Use GitHub Releases for packaged builds and release notes so the published download matches the documented setup state.',
  },
  {
    number: '02',
    title: 'Start with the base workflow',
    description:
      'Configure capture mode, OCR engine, and translation engine, then trigger the overlay with hotkeys. Not every optional dependency is required on day one.',
  },
  {
    number: '03',
    title: 'Add advanced components only when needed',
    description:
      'Helper services and native components expand the feature set for local inference, Python OCR services, Graphics Hook capture, and mirror fullscreen.',
  },
]

export const optionalRequirements: OptionalRequirement[] = [
  {
    name: 'uv',
    note: 'Required when enabling Python-based OCR services, gRPC helpers, or Llama-side helper services.',
  },
  {
    name: 'llama-server.exe',
    note: 'Needed for local translation and VisionLLM OCR flows.',
  },
  {
    name: 'Tools/Magpie/Magpie.Core.exe',
    note: 'Only required for the mirror fullscreen path.',
  },
  {
    name: 'Native hook agents',
    note: 'Build and ship these when you want DX9, DX11, or Vulkan Graphics Hook capture.',
  },
]

export const buildTracks: BuildTrack[] = [
  {
    title: 'Main application build',
    summary: 'Use this when building the WPF desktop application from source.',
    commands: ['dotnet build .\\Hotkey-Translator.sln -c Release'],
  },
  {
    title: 'Native hook components',
    summary: 'Required for the Graphics Hook pipeline and optional x86 targets.',
    commands: [
      'cmake -S Native -B Native/build -A x64',
      'cmake --build Native/build --config Release',
      'cmake -S Native -B Native/build_x86 -A Win32',
      'cmake --build Native/build_x86 --config Release --target HookHost',
      'cmake --build Native/build_x86 --config Release --target HookAgentDx9',
      'cmake --build Native/build_x86 --config Release --target HookAgentDx11',
      'cmake --build Native/build_x86 --config Release --target HookAgentVulkan',
    ],
  },
]

export const resourceLinks: ResourceLink[] = [
  {
    title: 'Download releases',
    href: externalLinks.releases,
    description: 'Packaged builds and release notes.',
  },
  {
    title: 'Read the English README',
    href: externalLinks.readmeEn,
    description: 'Feature list, requirements, and build notes.',
  },
  {
    title: 'Read the Japanese README',
    href: externalLinks.readmeJa,
    description: 'Japanese documentation in the repository.',
  },
  {
    title: 'Browse the source repository',
    href: externalLinks.repository,
    description: 'Source code, issues, and project history.',
  },
  {
    title: 'Report an issue',
    href: externalLinks.issues,
    description: 'Open bugs, feedback, and follow-up questions.',
  },
  {
    title: 'Review the MIT license',
    href: externalLinks.license,
    description: 'Repository-level license for this project.',
  },
]
