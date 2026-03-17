import heroImage from './assets/hero.png'
import { SectionHeading } from './components/SectionHeading'
import {
  buildTracks,
  externalLinks,
  featureHighlights,
  heroFacts,
  installSteps,
  optionalRequirements,
  repository,
  resourceLinks,
} from './data/siteContent'

const quickLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Install', href: '#install' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Build', href: '#build' },
]

function App() {
  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.22),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.18),_transparent_32%)]" />

      <section className="section-shell flex min-h-screen flex-col justify-center gap-12 pt-10 lg:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">Windows desktop OCR / translation overlay</p>
          <nav className="flex flex-wrap gap-2">
            {quickLinks.map((link) => (
              <a key={link.href} className="nav-pill" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-center">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-700">
                Release-first onboarding
              </p>
              <h1 className="display-type max-w-4xl text-5xl leading-[0.94] text-stone-950 sm:text-6xl lg:text-7xl">
                Ship the app page your release process actually needs.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                {repository.productName} is a Windows desktop application that captures
                on-screen text with hotkeys, runs OCR and translation, and renders the
                result as an overlay. This site keeps the download path, setup notes,
                and documentation entry points in one static GitHub Pages deployment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a className="button-primary" href={externalLinks.releases} target="_blank" rel="noreferrer">
                Download latest release
              </a>
              <a className="button-secondary" href={externalLinks.repository} target="_blank" rel="noreferrer">
                View repository
              </a>
            </div>

            <ul className="grid gap-3 text-sm text-stone-700 sm:grid-cols-2 sm:text-base">
              {heroFacts.map((fact) => (
                <li key={fact} className="surface-panel flex items-start gap-3 px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-panel relative overflow-hidden px-6 py-6 sm:px-8 sm:py-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-300/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-amber-300/40 blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
                    Static distribution page
                  </p>
                  <h2 className="display-type mt-2 text-3xl text-stone-950">
                    One place for downloads, setup, and source docs.
                  </h2>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-blue-700">
                  GitHub Pages
                </span>
              </div>

              <div className="grid gap-4 rounded-[1.75rem] border border-stone-950/10 bg-stone-950 px-5 py-5 text-stone-100 shadow-[0_24px_70px_rgba(28,25,23,0.24)]">
                <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">
                  <span className="rounded-full bg-white/10 px-3 py-1">OCR</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Translation</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Overlay</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">Windows</span>
                </div>
                <img
                  alt="Hotkey Translator project mark"
                  className="mx-auto w-full max-w-[17rem] drop-shadow-[0_18px_45px_rgba(168,85,247,0.35)]"
                  src={heroImage}
                />
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Base site</p>
                    <p className="mt-2 text-sm leading-6 text-stone-100">
                      Static React build with Pages-safe asset paths.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Setup notes</p>
                    <p className="mt-2 text-sm leading-6 text-stone-100">
                      Optional helper binaries are separated from the basic path.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Release links</p>
                    <p className="mt-2 text-sm leading-6 text-stone-100">
                      GitHub Releases remains the download source of truth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="features">
        <SectionHeading
          eyebrow="Core strengths"
          title="Built to explain the app clearly before the user downloads it."
          description="The landing page focuses on the desktop workflow that matters to first-time visitors and avoids turning the site into a separate web application."
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

      <section className="section-shell" id="install">
        <SectionHeading
          eyebrow="Install path"
          title="Start small, then add optional components when your workflow needs them."
          description="The documented release path should not force every user to install every helper service. The site now makes that separation explicit."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {installSteps.map((step) => (
            <article key={step.number} className="surface-panel px-6 py-6">
              <p className="display-type text-4xl text-amber-600">{step.number}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="requirements">
        <SectionHeading
          eyebrow="Requirements and notes"
          title="Optional dependencies are called out instead of being buried in build notes."
          description="That keeps the release page honest: some advanced engines and fullscreen paths need extra binaries, but the core workflow does not require every extension."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <article className="surface-panel px-6 py-6 sm:px-7">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
                  Optional components
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
                  Add these only for the corresponding feature sets.
                </h3>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                Advanced only
              </span>
            </div>

            <div className="mt-6 grid gap-4">
              {optionalRequirements.map((requirement) => (
                <div
                  key={requirement.name}
                  className="rounded-[1.5rem] border border-stone-950/10 bg-stone-50 px-5 py-5"
                >
                  <h4 className="text-lg font-semibold text-stone-950">{requirement.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-stone-700">{requirement.note}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="surface-panel flex flex-col justify-between gap-8 px-6 py-6 sm:px-7">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
                Platform baseline
              </p>
              <h3 className="text-2xl font-semibold tracking-tight text-stone-950">
                Windows 10 / 11, then feature-specific extras as needed.
              </h3>
              <p className="text-base leading-7 text-stone-700">
                The current desktop application targets <code>net8.0-windows10.0.22621.0</code>.
                For source builds, the repository documentation calls out .NET 8, Visual Studio
                2022 or MSVC Build Tools, and CMake.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-stone-950 px-5 py-5 text-stone-100 shadow-[0_24px_60px_rgba(28,25,23,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-stone-300">
                Distribution note
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-200">
                Mirror fullscreen integrates a Magpie-derived binary, and native or model-based
                features carry their own redistribution constraints. The site links users to the
                repository docs instead of hiding those legal and packaging details.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell" id="build">
        <SectionHeading
          eyebrow="Source build"
          title="Keep build instructions close to the release page without making the site a docs clone."
          description="The page surfaces the two build tracks that matter most and then links back to the repository documentation for deeper setup details."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {buildTracks.map((track) => (
            <article key={track.title} className="surface-panel px-6 py-6 sm:px-7">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-blue-700">
                Build track
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
                {track.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-700">{track.summary}</p>
              <div className="mt-5 rounded-[1.5rem] bg-stone-950 px-5 py-5 text-sm text-stone-100">
                <pre className="overflow-x-auto whitespace-pre-wrap leading-7">
                  {track.commands.join('\n')}
                </pre>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-0" id="links">
        <SectionHeading
          eyebrow="Repository links"
          title="Downloads, docs, and issue reporting stay one click away."
          description="This keeps the landing page focused while still routing users to the deeper repository context that matters for installation and support."
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
              MIT at the repository level, separate notices where upstream components require them.
            </h2>
            <p className="text-base leading-7 text-stone-700">
              The repository now includes an MIT license. Third-party components such as the
              Magpie-derived fullscreen integration, Dear ImGui, MinHook, model files, and OCR or
              inference runtimes remain subject to their own license and redistribution terms.
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
