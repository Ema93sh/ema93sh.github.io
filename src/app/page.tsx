import { resume } from "@/data/resume";
import { Pill } from "@/components/Pill";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-700 antialiased dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="mx-auto max-w-5xl px-4 pt-10">
        <nav aria-label="Primary" className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <a href="#top" className="text-lg font-semibold hover:opacity-80" id="top">
            {resume.name}
          </a>
          <ul className="flex flex-wrap items-center gap-3 text-sm">
            <li>
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                href="#startups"
              >
                Startups
              </a>
            </li>
            <li>
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                href="#education"
              >
                Education
              </a>
            </li>
            <li>
              <a
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mb-8 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
          <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{resume.name}</h1>
              <p className="mt-1 text-base text-gray-600 dark:text-gray-300">
                {resume.role} • {resume.location}
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Founder at Paintsy AI & Paisa Cash
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-700 dark:text-gray-200">
                {resume.summary}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={resume.contacts.website}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                Website
              </a>
              <a
                href={resume.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                LinkedIn
              </a>
              <a
                href={resume.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
              >
                GitHub
              </a>
              <a
                href={`mailto:${resume.contacts.email}`}
                className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-black"
              >
                Email
              </a>
            </div>
          </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-20">
        {/* Experience */}
        <Section id="experience" title="Work Experience">
          <ul className="space-y-6">
            {resume.experience.map((job, i) => (
              <li
                key={i}
                className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/60"
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
                <a
                  className="mt-4 inline-flex w-fit items-center rounded-xl border border-gray-200 px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Site
                </a>
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
                <a
                  className="mt-4 inline-flex w-fit items-center rounded-xl border border-gray-200 px-4 py-2 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
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
              <a
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                href={`mailto:${resume.contacts.email}`}
              >
                {resume.contacts.email}
              </a>
              <a
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                href={resume.contacts.website}
                target="_blank"
                rel="noreferrer"
              >
                {resume.contacts.website}
              </a>
              <div className="flex flex-wrap gap-2">
                <a
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                  href={resume.contacts.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800"
                  href={resume.contacts.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
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
        className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-3 text-xs shadow-md transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
        aria-label="Back to top"
      >
        ↑
      </a>
    </div>
  );
}
