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

// NOTE: Keep these URLs aligned with the current GitHub remote so the Pages
// site can send users to the correct releases and documentation without extra
// runtime configuration.
export const externalLinks = {
  download:
    'https://github.com/hinatayuusuke/Hotkey-Translator-Site/releases/download/V1.0.1/Hotkey-Translator-online.zip',
  releases: `${repositoryRoot}/releases`,
  repository: repositoryRoot,
  sourceRepository: 'https://github.com/hinatayuusuke/Hotkey-Translator',
  issues: `${repositoryRoot}/issues`,
  readmeEn: `${repositoryRoot}/blob/main/Doc/README.en.md`,
  readmeJa: `${repositoryRoot}/blob/main/Doc/README.md`,
  license: `${repositoryRoot}/blob/main/LICENSE`,
}
