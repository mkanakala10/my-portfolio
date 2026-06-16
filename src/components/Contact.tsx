import { useRef } from 'react'
import { personal } from '../data/resume'
import { ScrollReveal } from './ScrollReveal'
import { useTitleUnderline } from '../hooks/useScrollReveal'
import { useMagnetic } from '../hooks/useMagnetic'

export function Contact() {
  const underlineRef = useRef<HTMLSpanElement>(null)
  const { ref, onMove, onLeave } = useMagnetic(0.3)
  useTitleUnderline(underlineRef)

  return (
    <section id="contact" className="relative px-6 py-32 pb-20">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="scale">
          <div className="rounded-[2.5rem] border border-ink/8 bg-gradient-to-br from-white/70 via-cream-deep/40 to-blush/30 p-12 text-center backdrop-blur-md md:p-20">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
              05 — Contact
            </span>
            <h2 className="mt-6 font-display text-4xl font-medium text-ink md:text-6xl">
              Let's build something
              <br />
              <span className="italic text-copper">remarkable</span>
            </h2>
            <span
              ref={underlineRef}
              className="title-underline mx-auto mt-6 block h-px w-24 bg-copper"
            />

            <p className="mx-auto mt-8 max-w-md text-lg text-ink-muted">
              I'm open to internships, research collaborations, and interesting engineering
              challenges. Based in {personal.location}.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                ref={ref as React.RefObject<HTMLAnchorElement>}
                href={`mailto:${personal.email}`}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
                className="contact-link btn-magnetic rounded-full bg-ink px-10 py-4 text-sm font-medium text-cream"
              >
                {personal.email}
              </a>
              <a
                href={personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper"
              >
                LinkedIn
              </a>
              <a
                href={personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper"
              >
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-8 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {personal.name}</p>
          <p className="font-mono text-xs">Designed & built with care</p>
        </footer>
      </div>
    </section>
  )
}
