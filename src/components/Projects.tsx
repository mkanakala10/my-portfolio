import { useRef } from 'react'
import { projects } from '../data/resume'
import { ScrollReveal } from './ScrollReveal'
import { useTitleUnderline } from '../hooks/useScrollReveal'

function ProjectCard({
  project,
  delay,
  featured = false,
}: {
  project: (typeof projects)[number]
  delay: number
  featured?: boolean
}) {
  return (
    <ScrollReveal delay={delay} variant="scale">
      <article
        className={`project-card rounded-3xl border border-ink/8 bg-white/50 backdrop-blur-sm ${
          featured ? 'p-10 md:p-12' : 'p-10'
        }`}
        style={{ '--accent': project.accent } as React.CSSProperties}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div
            className="inline-block h-1 rounded-full"
            style={{ background: project.accent, width: featured ? '4rem' : '3rem' }}
          />
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-copper transition-colors hover:text-ink"
                >
                  Live site →
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
                >
                  GitHub →
                </a>
              )}
            </div>
          )}
        </div>

        <time className="mt-6 block font-mono text-xs text-ink-faint">{project.period}</time>
        <h3
          className={`mt-3 font-display font-medium text-ink ${
            featured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'
          }`}
        >
          {project.title}
        </h3>
        <p className={`mt-4 leading-relaxed text-ink-muted ${featured ? 'max-w-3xl text-lg' : ''}`}>
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="skill-pill rounded-full border border-ink/10 px-3 py-1 font-mono text-[11px] text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
    </ScrollReveal>
  )
}

export function Projects() {
  const underlineRef = useRef<HTMLSpanElement>(null)
  useTitleUnderline(underlineRef)

  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
            03 — Projects
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink md:text-5xl">
            What I've <span className="italic">built</span>
          </h2>
          <span
            ref={underlineRef}
            className="title-underline mt-4 block h-px w-24 bg-copper"
          />
        </ScrollReveal>

        <div className="mt-16 space-y-8">
          {featured && <ProjectCard project={featured} delay={0} featured />}

          <div className="stagger-children grid gap-8 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={(i + 1) * 150} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
