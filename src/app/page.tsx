import { resume } from "@/data/resume";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
  const navLinkClass =
    "rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700 antialiased dark:bg-gray-950 dark:text-gray-100">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-4 pt-4">
        <nav
          aria-label="Primary"
          className="sticky top-3 z-40 mb-8 rounded-2xl border border-gray-200/70 bg-white/70 px-3 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800/70 dark:bg-gray-950/60"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <a href="#top" className="text-sm font-semibold tracking-tight hover:opacity-80" id="top">
              {resume.name}
            </a>
            <ul className="flex flex-wrap items-center gap-1 text-sm">
              <li>
                <a className={navLinkClass} href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="#startups">
                  Startups
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className={navLinkClass} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Card className="mb-8 p-6 sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{resume.name}</h1>
              <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
                {resume.role} • {resume.location}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Founder at Paintsy AI & Paisa Cash</p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700 dark:text-gray-200">{resume.summary}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <ButtonLink href={resume.contacts.website} target="_blank">
                Website
              </ButtonLink>
              <ButtonLink href={resume.contacts.linkedin} target="_blank">
                LinkedIn
              </ButtonLink>
              <ButtonLink href={resume.contacts.github} target="_blank">
                GitHub
              </ButtonLink>
              <ButtonLink href={`mailto:${resume.contacts.email}`} variant="primary">
                Email
              </ButtonLink>
            </div>
          </div>
        </Card>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20">
        {/* Experience */}
        <Section id="experience" title="Work Experience">
          <ul className="space-y-6">
            {resume.experience.map((job, i) => (
              <li
                key={i}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.title} • <span className="text-gray-600 dark:text-gray-300">{job.company}</span>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}</p>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{job.period}</div>
                </div>
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-6">
                  {job.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t, idx) => (
                    <Pill key={idx}>{t}</Pill>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Startups */}
        <Section id="startups" title="Startups">
          <div className="grid gap-6 sm:grid-cols-2">
            {resume.startups.map((s, i) => (
              <article
                key={i}
                className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white/80 p-6 text-center shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={64}
                  height={64}
                  className="mb-4 h-16 w-16 object-contain"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-200">{s.blurb}</p>
                <ButtonLink className="mt-4" href={s.link} target="_blank">
                  Visit Site
                </ButtonLink>
              </article>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Selected Projects">
          <div className="grid gap-6 sm:grid-cols-2">
            {resume.projects.map((p, i) => (
              <article
                key={i}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900/60"
              >
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-200">{p.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.stack.map((s, idx) => (
                      <Pill key={idx}>{s}</Pill>
                    ))}
                  </div>
                </div>
                <ButtonLink className="mt-4" href={p.link} target="_blank">
                  View on GitHub
                </ButtonLink>
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
          <ul className="grid gap-6 sm:grid-cols-2">
            {resume.education.map((e, i) => (
              <li
                key={i}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60"
              >
                <h3 className="text-base font-semibold">{e.school}</h3>
                <p className="mt-1 text-sm">{e.degree}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{e.details}</p>
                <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{e.period}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60">
            <div className="grid gap-4 sm:grid-cols-2">
              <ButtonLink className="px-4 py-3" href={`mailto:${resume.contacts.email}`}>
                {resume.contacts.email}
              </ButtonLink>
              <ButtonLink className="px-4 py-3" href={resume.contacts.website} target="_blank">
                {resume.contacts.website}
              </ButtonLink>
              <div className="flex flex-wrap gap-2">
                <ButtonLink className="px-4 py-3" href={resume.contacts.linkedin} target="_blank">
                  LinkedIn
                </ButtonLink>
                <ButtonLink className="px-4 py-3" href={resume.contacts.github} target="_blank">
                  GitHub
                </ButtonLink>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {resume.name}. All rights reserved.
      </footer>

      {/* Back to top button */}
      <a
        href="#top"
        className="fixed bottom-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-xs shadow-md ring-1 ring-inset ring-white/60 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:ring-gray-900/40 dark:hover:bg-gray-800"
        aria-label="Back to top"
      >
        ↑
      </a>
    </div>
  );
}
