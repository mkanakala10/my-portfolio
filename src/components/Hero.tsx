import { useEffect, useState } from 'react'
import { personal } from '../data/resume'
import { useMagnetic } from '../hooks/useMagnetic'

export function PageCurtain() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="page-curtain-wrap fixed inset-0 z-[100] pointer-events-none">
      <div className="page-curtain absolute inset-0 bg-ink" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-3xl font-medium tracking-widest text-cream uppercase">
          MK
        </span>
      </div>
    </div>
  )
}

export function Hero() {
  const { ref, onMove, onLeave } = useMagnetic(0.25)

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <p className="hero-sub mb-6 font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          {personal.title} · {personal.location}
        </p>

        <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.95] font-medium tracking-tight text-ink">
          <span className="hero-line block">Manas</span>
          <span className="hero-line block italic text-copper">Kanakala</span>
          <span className="hero-line block text-ink-muted/80">I build at scale.</span>
        </h1>

        <p className="hero-sub mt-10 max-w-xl text-lg leading-relaxed text-ink-muted">
          {personal.tagline}
        </p>

        <div className="hero-cta mt-12 flex flex-wrap items-center gap-4">
          <a
            ref={ref as React.RefObject<HTMLAnchorElement>}
            href="#experience"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="btn-magnetic inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream"
          >
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/15 px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink/5"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="scroll-indicator flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-ink/30 to-transparent" />
        </div>
      </div>

      {/* Decorative floating shapes */}
      <div
        className="float-slow pointer-events-none absolute top-1/4 right-[10%] hidden h-20 w-20 rounded-full border border-copper/20 lg:block"
        aria-hidden
      />
      <div
        className="float-slow pointer-events-none absolute bottom-1/3 left-[8%] hidden h-12 w-12 rotate-45 border border-sage/25 lg:block"
        aria-hidden
      />
    </section>
  )
}
