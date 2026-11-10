import { profile, projects, skills } from "@/lib/content";

function LinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium transition hover:border-accent hover:text-accent dark:border-zinc-700"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <header className="mb-20">
        <p className="mb-3 text-sm font-medium text-accent">{profile.location}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I&apos;m {profile.name}.
          <span className="block text-zinc-500">{profile.title}.</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.intro}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <LinkButton href={profile.links.github}>GitHub</LinkButton>
          <LinkButton href={profile.links.linkedin}>LinkedIn</LinkButton>
          <LinkButton href={profile.links.email}>Email me</LinkButton>
        </div>
      </header>

      <section id="projects" className="mb-20">
        <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{p.summary}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {(p.demo || p.repo) && (
                <div className="mt-5 flex gap-4 text-sm font-medium text-accent">
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo →</a>}
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Source →</a>}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-20">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Tools I work with
        </h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <li key={s} className="rounded-lg border border-zinc-200 px-3 py-1.5 text-sm dark:border-zinc-800">
              {s}
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-800">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </main>
  );
}
