import { useEffect, useState } from 'react'
import originalSceneImage from './assets/original-scene.png'
import overlayResultImage from './assets/overlay-result.png'
import roiSelectionImage from './assets/roi-selection.png'
import { SectionHeading } from './components/SectionHeading'
import {
  externalLinks,
  featureHighlights,
  resourceLinks,
} from './data/siteContent'

type WorkflowImageId = 'original' | 'roi' | 'overlay'
const workflowGallery: Array<{
  id: WorkflowImageId
  label: string
  title: string
  description: string
  image: string
}> = [
  {
    id: 'original',
    label: 'Original',
    title: 'See the source content first',
    description: 'Keep the current game or app visible and capture only when text appears.',
    image: originalSceneImage,
  },
  {
    id: 'roi',
    label: 'ROI',
    title: 'Limit capture to the text area',
    description: 'ROI selection helps repeat the same workflow without resetting the target area every time.',
    image: roiSelectionImage,
  },
  {
    id: 'overlay',
    label: 'Overlay',
    title: 'Read the result on top of the source',
    description: 'The translated overlay stays on screen so you do not need to switch windows to read it.',
    image: overlayResultImage,
  },
]

function App() {
  const [heroFrame, setHeroFrame] = useState<'original' | 'overlay'>('original')

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

  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),_transparent_32%)]" />

      <section className="section-shell flex min-h-screen flex-col justify-center gap-12 pt-10 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-center">
          <div className="space-y-6">
            <h1 className="display-type max-w-4xl text-5xl leading-[0.94] text-stone-950 sm:text-6xl lg:text-7xl">
              Read on-screen text without leaving the app you are using.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
              Hotkey Translator lets you capture text with hotkeys, run OCR and translation,
              and keep the result visible as an overlay. Start with the standard desktop
              workflow, then add optional helpers only if you need local models, Python OCR
              services, or advanced fullscreen capture.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="button-primary" href={externalLinks.releases} target="_blank" rel="noreferrer">
                Download latest release
              </a>
            </div>
          </div>

          <div className="surface-panel relative overflow-hidden px-6 py-6 sm:px-8 sm:py-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-amber-300/40 blur-3xl" />
            <div className="relative">
              <div className="demo-frame mx-auto max-w-[22rem] lg:max-w-[24rem]">
                <img
                  key={heroFrame}
                  alt={
                    heroFrame === 'original'
                      ? 'Original scene before overlay translation'
                      : 'Translated overlay displayed over the original scene'
                  }
                  className="demo-image-single"
                  src={heroFrame === 'original' ? originalSceneImage : overlayResultImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="workflow">
        <SectionHeading
          eyebrow="How it works"
          title="Three quick views of the workflow."
          description="Original screen, ROI selection, and overlay result."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {workflowGallery.map((item) => (
            <article key={item.id} className="surface-panel px-5 py-5 sm:px-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-700">
                {item.label}
              </p>
              <div className="demo-frame mt-4 shadow-[0_20px_55px_rgba(15,23,42,0.18)]">
                <img
                  alt={item.title}
                  className="demo-image-static"
                  loading="lazy"
                  src={item.image}
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="features">
        <SectionHeading
          eyebrow="Core strengths"
          title="See what the desktop workflow is good at before you download anything."
          description="The key points here are user outcomes: quick repeated capture, readable overlay output, flexible engine choices, and extra capture paths only when the standard flow is not enough."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {featureHighlights.map((feature) => (
            <article key={feature.title} className="surface-panel px-6 py-6 sm:px-7">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
                Feature
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-0" id="links">
        <SectionHeading
          eyebrow="Repository links"
          title="Downloads, docs, and issue reporting stay one click away."
          description="The landing page stays focused, while the repository links carry users to deeper setup notes, issue tracking, and release context when they need it."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resourceLinks.map((link) => (
            <a
              key={link.title}
              className="surface-panel group block px-6 py-6 transition-transform duration-200 hover:-translate-y-1"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                External
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
                {link.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{link.description}</p>
              <p className="mt-6 text-sm font-semibold text-blue-700 transition-colors duration-200 group-hover:text-blue-500">
                Open link
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer className="section-shell pt-12">
        <div className="surface-panel flex flex-col gap-6 px-6 py-6 sm:px-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
              Legal and packaging
            </p>
            <h2 className="display-type text-3xl text-stone-950">
              MIT for the repository, with separate notices where upstream components require them.
            </h2>
            <p className="text-base leading-7 text-stone-700">
              The repository now includes an MIT license. Third-party components such as the
              Magpie-derived fullscreen integration, Dear ImGui, MinHook, model files, and OCR or
              inference runtimes still follow their own license and redistribution terms.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <a className="text-blue-700 transition-colors hover:text-blue-500" href={externalLinks.license} target="_blank" rel="noreferrer">
              MIT license
            </a>
            <a className="text-blue-700 transition-colors hover:text-blue-500" href={externalLinks.releases} target="_blank" rel="noreferrer">
              Releases
            </a>
            <a className="text-blue-700 transition-colors hover:text-blue-500" href={externalLinks.issues} target="_blank" rel="noreferrer">
              Issues
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
