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
  'Works with a reduced feature set without every optional helper',
  'Download published builds from GitHub Releases',
]

export const featureHighlights: FeatureHighlight[] = [
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
]

export const installSteps: InstallStep[] = [
  {
    number: '01',
    title: 'Open the latest published release',
    description:
      'Start from GitHub Releases so the package, release notes, and repository documentation all describe the same published state.',
  },
  {
    number: '02',
    title: 'Launch the app and set the basic workflow first',
    description:
      'Pick a capture mode, choose an OCR engine and a translation engine, then trigger the overlay with hotkeys. You do not need every helper binary to start using the standard path.',
  },
  {
    number: '03',
    title: 'Add optional helpers only for the features you want',
    description:
      'Bring in Python OCR services, local model helpers, Graphics Hook agents, or mirror fullscreen support only when you need those advanced workflows.',
  },
]

export const optionalRequirements: OptionalRequirement[] = [
  {
    name: 'uv',
    note: 'Add this when you want Python-based OCR services, gRPC helpers, or Llama-side helper workflows.',
  },
  {
    name: 'llama-server.exe',
    note: 'Only needed for local translation and VisionLLM OCR workflows.',
  },
  {
    name: 'Tools/Magpie/Magpie.Core.exe',
    note: 'This is specific to the mirror fullscreen path and is not part of the basic setup.',
  },
  {
    name: 'Native hook agents',
    note: 'Use these for DX9, DX11, or Vulkan Graphics Hook capture when standard capture paths are not enough.',
  },
]

export const buildTracks: BuildTrack[] = [
  {
    title: 'Main application build',
    summary: 'This is the shortest path for developers who want to build the WPF desktop application from source.',
    commands: ['dotnet build .\\Hotkey-Translator.sln -c Release'],
  },
  {
    title: 'Native hook components',
    summary: 'Use these commands only when you need the Graphics Hook pipeline or optional x86 hook targets.',
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
    href: externalLinks.repository,
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
]
