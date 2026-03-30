import { enSiteContent } from './siteContent.en'
import { jaSiteContent } from './siteContent.ja'
import type { Locale, SiteContent } from './siteContentShared'

export { externalLinks, supportedLocales } from './siteContentShared'
export type { Locale, SiteContent, WorkflowStepId } from './siteContentShared'

export const siteContentByLocale: Record<Locale, SiteContent> = {
  en: enSiteContent,
  ja: jaSiteContent,
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'ja'
}
