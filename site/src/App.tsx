function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 px-6 py-16">
        <span className="w-fit rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
          Vite + React + Tailwind CSS
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Hotkey Translator site scaffold
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            The project foundation is ready. You can now replace this screen with the
            landing page sections defined in the policy document.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          <span className="rounded-full bg-slate-800 px-3 py-1">React 19</span>
          <span className="rounded-full bg-slate-800 px-3 py-1">TypeScript</span>
          <span className="rounded-full bg-slate-800 px-3 py-1">Tailwind v4</span>
        </div>
      </section>
    </main>
  )
}

export default App
