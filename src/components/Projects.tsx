import { useRef } from 'react'
import { projects } from '../data/resume'
import { ScrollReveal } from './ScrollReveal'
import { useTitleUnderline } from '../hooks/useScrollReveal'

function ProjectCard({
  project,
  delay,
  variant = 'default',
}: {
  project: (typeof projects)[number]
  delay: number
  variant?: 'featured' | 'default' | 'minor'
}) {
  const isFeatured = variant === 'featured'
  const isMinor = variant === 'minor'

  return (
    <ScrollReveal delay={delay} variant="scale">
      <article
        className={`project-card border border-ink/8 bg-white/50 backdrop-blur-sm ${
          isFeatured
            ? 'rounded-3xl p-10 md:p-12'
            : isMinor
              ? 'rounded-2xl p-6 md:max-w-sm'
              : 'rounded-3xl p-10'
        }`}
        style={{ '--accent': project.accent } as React.CSSProperties}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div
            className="inline-block h-0.5 rounded-full"
            style={{
              background: project.accent,
              width: isFeatured ? '4rem' : isMinor ? '2rem' : '3rem',
            }}
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

        <time
          className={`block font-mono text-ink-faint ${isMinor ? 'mt-4 text-[10px]' : 'mt-6 text-xs'}`}
        >
          {project.period}
        </time>
        <h3
          className={`mt-2 font-display font-medium text-ink ${
            isFeatured ? 'text-3xl md:text-4xl' : isMinor ? 'text-xl' : 'text-2xl md:text-3xl'
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-ink-muted ${
            isFeatured ? 'max-w-3xl text-lg' : isMinor ? 'text-sm' : ''
          }`}
        >
          {project.description}
        </p>
        <div className={`flex flex-wrap gap-2 ${isMinor ? 'mt-4' : 'mt-8'}`}>
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
  const rest = projects.filter((p) => !p.featured && !p.minor)
  const minor = projects.filter((p) => p.minor)

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
          {featured && <ProjectCard project={featured} delay={0} variant="featured" />}

          <div className="stagger-children grid gap-8 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} delay={(i + 1) * 150} />
            ))}
          </div>

          {minor.length > 0 && (
            <div className="flex flex-wrap gap-6 border-t border-ink/8 pt-8">
              {minor.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  delay={300 + i * 100}
                  variant="minor"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
