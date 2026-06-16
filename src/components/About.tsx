import { useRef } from 'react'
import { ScrollReveal } from './ScrollReveal'
import { useTitleUnderline } from '../hooks/useScrollReveal'
import { education } from '../data/resume'

export function About() {
  const underlineRef = useRef<HTMLSpanElement>(null)
  useTitleUnderline(underlineRef)

  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.4fr]">
        <ScrollReveal variant="left">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
              01 — About
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium text-ink md:text-5xl">
              How I
              <br />
              <span className="italic">build</span>
            </h2>
            <span
              ref={underlineRef}
              className="title-underline mt-4 block h-px w-24 bg-copper"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" delay={150}>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            <p>
              I'm a Computer Science student at the University of Wisconsin–Madison
              pursuing my Master's while completing my Bachelor's with a Data Science
              minor. I build full-stack products, AI-powered pipelines, and
              high-throughput data systems — always optimizing for reliability and
              speed.
            </p>
            <p>
              From serverless backends on GCP and Firebase to RBAC SaaS platforms
              serving thousands of users, I focus on architecture that scales
              gracefully and interfaces that feel immediate.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <ScrollReveal>
          <h3 className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
            Education
          </h3>
        </ScrollReveal>
        <div className="stagger-children grid gap-6 md:grid-cols-2">
          {education.map((edu, i) => (
            <ScrollReveal key={edu.degree} delay={i * 120}>
              <article className="group rounded-2xl border border-ink/8 bg-cream-deep/50 p-8 transition-all duration-500 hover:border-ink/15 hover:bg-white/60">
                <p className="font-mono text-xs text-ink-faint">{edu.period}</p>
                <h4 className="mt-3 font-display text-2xl font-medium text-ink">
                  {edu.degree}
                </h4>
                <p className="mt-1 text-ink-muted">{edu.school}</p>
                {edu.detail && (
                  <p className="mt-2 text-sm text-copper">{edu.detail}</p>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
