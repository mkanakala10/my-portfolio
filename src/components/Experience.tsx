import { useRef } from 'react'
import { experience } from '../data/resume'
import { ScrollReveal } from './ScrollReveal'
import { useTitleUnderline } from '../hooks/useScrollReveal'

export function Experience() {
  const underlineRef = useRef<HTMLSpanElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  useTitleUnderline(underlineRef)
  useTitleUnderline(lineRef)

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
            02 — Experience
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink md:text-5xl">
            Where I've <span className="italic">shipped</span>
          </h2>
          <span
            ref={underlineRef}
            className="title-underline mt-4 block h-px w-24 bg-copper"
          />
        </ScrollReveal>

        <div className="relative mt-20">
          {/* Animated timeline */}
          <div className="absolute left-0 top-0 hidden h-full w-px md:left-6 md:block">
            <ScrollReveal variant="scale">
              <div ref={lineRef} className="timeline-line w-px bg-gradient-to-b from-copper via-sage to-transparent" />
            </ScrollReveal>
          </div>

          <div className="stagger-children space-y-16">
            {experience.map((job, i) => (
              <ScrollReveal key={job.company} delay={i * 100} variant="left">
                <article className="relative md:pl-20">
                  <div
                    className="timeline-dot absolute left-0 top-2 hidden h-3 w-3 rounded-full border-2 border-cream bg-copper md:left-[1.35rem] md:block"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="font-display text-2xl font-medium text-ink md:text-3xl">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-lg text-copper">
                        {job.company}
                        <span className="text-ink-faint"> · {job.location}</span>
                      </p>
                    </div>
                    <time className="font-mono text-xs text-ink-faint">{job.period}</time>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((point) => (
                      <li
                        key={point.slice(0, 40)}
                        className="flex gap-3 text-ink-muted leading-relaxed"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sage" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-ink/5 px-3 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
