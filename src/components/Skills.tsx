import { useRef } from 'react'
import { skills } from '../data/resume'
import { ScrollReveal } from './ScrollReveal'
import { useTitleUnderline } from '../hooks/useScrollReveal'

const allSkills = Object.values(skills).flat()

export function Skills() {
  const underlineRef = useRef<HTMLSpanElement>(null)
  useTitleUnderline(underlineRef)

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
            04 — Skills
          </span>
          <h2 className="mt-4 font-display text-4xl font-medium text-ink md:text-5xl">
            What I <span className="italic">work with</span>
          </h2>
          <span
            ref={underlineRef}
            className="title-underline mt-4 block h-px w-24 bg-copper"
          />
        </ScrollReveal>

        {/* Infinite marquee */}
        <div className="relative mt-16 -mx-6 overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />
          <div className="marquee-track flex w-max gap-4">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="whitespace-nowrap rounded-full border border-ink/10 bg-white/40 px-6 py-3 font-mono text-sm text-ink-muted backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="stagger-children mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skills).map(([category, items], i) => (
            <ScrollReveal key={category} delay={i * 80}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((skill) => (
                    <li key={skill}>
                      <span className="skill-pill inline-block rounded-lg px-3 py-1.5 text-sm text-ink-muted">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
