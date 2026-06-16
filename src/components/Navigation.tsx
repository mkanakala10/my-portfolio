import { useEffect, useState } from 'react'
import { personal } from '../data/resume'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' },
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/80 backdrop-blur-xl border-b border-ink/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          MK<span className="text-copper">K</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link text-sm font-medium tracking-wide text-ink-muted transition-colors hover:text-ink ${
                  active === item.href ? 'active text-ink' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          className="hidden rounded-full border border-ink/15 px-5 py-2 text-sm font-medium text-ink transition-all hover:border-copper hover:text-copper sm:block"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}
