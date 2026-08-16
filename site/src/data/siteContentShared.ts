export type Locale = 'en' | 'ja'

export type WorkflowStepId = 'original' | 'roi' | 'overlay'

export type ResourceLink = {
  title: string
  href: string
  description: string
}

export type WorkflowItem = {
  id: WorkflowStepId
  label: string
  title: string
  description: string
}

export type FeatureHighlight = {
  title: string
  description: string
}

export type SiteContent = {
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
  }
  localeToggle: {
    label: string
    options: Record<Locale, string>
  }
  hero: {
    productName: string
    title: string
    description: string
    downloadLabel: string
    stableDownloadLabel: string
    osLabel: string
    imageAlt: Record<'original' | 'overlay', string>
  }
  workflow: {
    eyebrow: string
    title: string
    description: string
    items: WorkflowItem[]
  }
  features: {
    eyebrow: string
    title: string
    description: string
    itemLabel: string
    items: FeatureHighlight[]
  }
  links: {
    eyebrow: string
    title: string
    description: string
    itemEyebrow: string
    openLabel: string
    items: ResourceLink[]
  }
  footer: {
    eyebrow: string
    title: string
    description: string
    links: {
      license: string
      releases: string
      issues: string
    }
  }
}

export const supportedLocales = ['en', 'ja'] as const

const repository = {
  owner: 'hinatayuusuke',
  name: 'Hotkey-Translator-Site',
}

const repositoryRoot = `https://github.com/${repository.owner}/${repository.name}`

const releaseAssetName = 'Hotkey-Translator-online.zip'

export const productReleases = {
  latest: {
    version: 'v1.0.10',
    tag: 'v1.0.10',
  },
  stable: {
    version: 'v1.0.1',
    tag: 'v1.0.1',
  },
} as const

function getReleaseDownloadUrl(tag: string) {
  return `${repositoryRoot}/releases/download/${tag}/${releaseAssetName}`
}

// NOTE: Keep these URLs aligned with the current GitHub remote so the Pages
// site can send users to the correct releases and documentation without extra
// runtime configuration.
export const externalLinks = {
  // WHY: The visible version and download URL share one release definition so
  // a release update cannot leave the call-to-action label pointing elsewhere.
  download: getReleaseDownloadUrl(productReleases.latest.tag),
  // NOTE: V1.0.1 remains exposed separately because V1.0.2 changes the
  // translation feature set and the release notes direct some users back here.
  stableDownload: getReleaseDownloadUrl(productReleases.stable.tag),
  releases: `${repositoryRoot}/releases`,
  repository: repositoryRoot,
  sourceRepository: 'https://github.com/hinatayuusuke/Hotkey-Translator',
  issues: `${repositoryRoot}/issues`,
  readmeEn: `${repositoryRoot}/blob/main/Doc/README.en.md`,
  readmeJa: `${repositoryRoot}/blob/main/Doc/README.md`,
  license: `${repositoryRoot}/blob/main/LICENSE`,
}
