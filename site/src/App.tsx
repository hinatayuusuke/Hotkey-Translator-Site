import { useEffect, useState } from 'react'
import appIcon from './assets/Icon.png'
import originalSceneImage from './assets/original-scene.png'
import overlayResultImage from './assets/overlay-result.png'
import roiSelectionImage from './assets/roi-selection.png'
import { SectionHeading } from './components/SectionHeading'
import {
  externalLinks,
  isLocale,
  siteContentByLocale,
  supportedLocales,
  type Locale,
  type WorkflowStepId,
} from './data/siteContent'

const localeStorageKey = 'site-locale'

const workflowImages: Record<WorkflowStepId, string> = {
  original: originalSceneImage,
  roi: roiSelectionImage,
  overlay: overlayResultImage,
}

function getLocaleFromSearch(search: string): Locale | null {
  const locale = new URLSearchParams(search).get('lang')
  return isLocale(locale) ? locale : null
}

function getBrowserLocale(language: string | undefined): Locale {
  return language?.toLowerCase().startsWith('ja') ? 'ja' : 'en'
}

function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const searchLocale = getLocaleFromSearch(window.location.search)
  if (searchLocale) {
    return searchLocale
  }

  try {
    const storedLocale = window.localStorage.getItem(localeStorageKey)
    if (isLocale(storedLocale)) {
      return storedLocale
    }
  } catch {
    // NOTE: Locale persistence is optional. Fall back to the browser language
    // if storage is blocked rather than blocking the page render.
  }

  return getBrowserLocale(window.navigator.language)
}

function syncMetaTag(selector: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(selector)
  if (tag) {
    tag.setAttribute('content', content)
  }
}

function App() {
  const [locale, setLocale] = useState<Locale>(resolveInitialLocale)
  const [heroFrame, setHeroFrame] = useState<'original' | 'overlay'>('original')
  const content = siteContentByLocale[locale]
  const [productNameLead, ...productNameRest] = content.hero.productName.split(' ')
  const productNameTail = productNameRest.join(' ')

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroFrame((currentFrame) =>
        currentFrame === 'original' ? 'overlay' : 'original',
      )
    }, 1350)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = content.meta.title
    syncMetaTag('meta[name="description"]', content.meta.description)
    syncMetaTag('meta[property="og:title"]', content.meta.ogTitle)
    syncMetaTag('meta[property="og:description"]', content.meta.ogDescription)

    try {
      window.localStorage.setItem(localeStorageKey, locale)
    } catch {
      // NOTE: Locale persistence is a convenience feature, so storage failures
      // should not stop the static site from rendering and switching languages.
    }

    // WHY: Mirror the locale in the URL so users can share a direct `?lang=ja`
    // or `?lang=en` link without introducing route-specific Pages hosting.
    const url = new URL(window.location.href)
    if (url.searchParams.get('lang') !== locale) {
      url.searchParams.set('lang', locale)
      window.history.replaceState({}, '', url)
    }
  }, [content, locale])

  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),_transparent_32%)]" />

      <section className="section-shell flex min-h-screen flex-col justify-center gap-12 pt-10 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">
                {content.localeToggle.label}
              </p>
              <div className="inline-flex rounded-full border border-stone-950/10 bg-white/80 p-1 shadow-sm backdrop-blur">
                {supportedLocales.map((option) => (
                  <button
                    aria-pressed={option === locale}
                    key={option}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                      option === locale
                        ? 'bg-blue-700 text-white'
                        : 'text-stone-600 hover:text-stone-950'
                    }`}
                    onClick={() => setLocale(option)}
                    type="button"
                  >
                    {content.localeToggle.options[option]}
                  </button>
                ))}
              </div>
            </div>
            <h1 className="display-type max-w-4xl text-stone-950">
              <span className="brand-wordmark block bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 bg-clip-text text-6xl leading-[0.9] text-transparent drop-shadow-[0_10px_22px_rgba(37,99,235,0.18)] sm:text-7xl lg:text-8xl">
                <span className="inline-flex items-center gap-[0.18em]">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="h-[0.92em] w-[0.92em] rounded-[0.2em] object-contain shadow-[0_8px_20px_rgba(15,23,42,0.18)]"
                    src={appIcon}
                  />
                  <span>{productNameLead}</span>
                </span>{' '}
                <span>{productNameTail}</span>
              </span>
              <span className="mt-4 block text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              {content.hero.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a className="button-primary" href={externalLinks.download} target="_blank" rel="noreferrer">
                {content.hero.downloadLabel}
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2.5 3.75 11 2.5v8H2.5zm9.5-1.34 9.5-1.4v10.74H12zm0 10.83h9.5V24l-9.5-1.33zm-1 9.12L2.5 20.98V13.24H11z" />
                </svg>
                {content.hero.osLabel}
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-8 top-0 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="absolute bottom-0 left-8 h-32 w-32 rounded-full bg-amber-300/40 blur-3xl" />
            <div className="hero-demo-frame mx-auto max-w-[22rem] lg:max-w-[24rem]">
              <img
                key={heroFrame}
                alt={content.hero.imageAlt[heroFrame]}
                className="demo-image-single"
                src={heroFrame === 'original' ? originalSceneImage : overlayResultImage}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="workflow">
        <SectionHeading
          eyebrow={content.workflow.eyebrow}
          title={content.workflow.title}
          description={content.workflow.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.workflow.items.map((item) => (
            <article key={item.id} className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                {item.label}
              </p>
              <div className="overflow-hidden rounded-[1.5rem] bg-stone-950">
                <img
                  alt={item.title}
                  className="block aspect-[846/1237] w-full object-contain"
                  loading="lazy"
                  src={workflowImages[item.id]}
                />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-stone-950">
                {item.title}
              </h3>
              <p className="text-base leading-7 text-stone-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="features">
        <SectionHeading
          eyebrow={content.features.eyebrow}
          title={content.features.title}
          description={content.features.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {content.features.items.map((feature) => (
            <article key={feature.title} className="border-t border-stone-950/10 pt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700/90">
                {content.features.itemLabel}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-0 pt-8 sm:pt-10" id="links">
        <SectionHeading
          eyebrow={content.links.eyebrow}
          title={content.links.title}
          description={content.links.description}
        />

        <div className="mt-10 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          {content.links.items.map((link) => (
            <a
              key={link.title}
              className="group block border-b border-stone-950/10 py-4 transition-colors duration-200"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                {content.links.itemEyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950 transition-colors duration-200 group-hover:text-blue-700">
                {link.title}
              </h3>
              <p className="mt-2 text-base leading-7 text-stone-700">{link.description}</p>
              <p className="mt-3 text-sm font-semibold text-blue-700 transition-colors duration-200 group-hover:text-blue-500">
                {content.links.openLabel}
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer className="section-shell pt-12">
        <div className="surface-panel flex flex-col gap-6 px-6 py-6 sm:px-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
              {content.footer.eyebrow}
            </p>
            <h2 className="display-type text-3xl text-stone-950">
              {content.footer.title}
            </h2>
            <p className="text-base leading-7 text-stone-700">
              {content.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <a className="text-blue-700 transition-colors hover:text-blue-500" href={externalLinks.license} target="_blank" rel="noreferrer">
              {content.footer.links.license}
            </a>
            <a className="text-blue-700 transition-colors hover:text-blue-500" href={externalLinks.releases} target="_blank" rel="noreferrer">
              {content.footer.links.releases}
            </a>
            <a className="text-blue-700 transition-colors hover:text-blue-500" href={externalLinks.issues} target="_blank" rel="noreferrer">
              {content.footer.links.issues}
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
