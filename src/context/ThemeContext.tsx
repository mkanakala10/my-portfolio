import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { defaultThemeId, themes, type SiteTheme } from '../data/themes'

const STORAGE_KEY = 'portfolio-theme'

interface ThemeContextValue {
  theme: SiteTheme
  themeIndex: number
  setThemeByIndex: (index: number) => void
  themes: SiteTheme[]
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(theme: SiteTheme) {
  const root = document.documentElement
  root.style.setProperty('--color-cream', theme.cream)
  root.style.setProperty('--color-cream-deep', theme.creamDeep)
  root.style.setProperty('--color-ink', theme.ink)
  root.style.setProperty('--color-ink-muted', theme.inkMuted)
  root.style.setProperty('--color-ink-faint', theme.inkFaint)
  root.style.setProperty('--color-copper', theme.copper)
  root.style.setProperty('--color-sage', theme.sage)
  root.style.setProperty('--color-blush', theme.blush)
  root.style.setProperty('--color-mist', theme.mist)
  root.style.setProperty('--mesh-1', theme.mesh1)
  root.style.setProperty('--mesh-2', theme.mesh2)
  root.style.setProperty('--mesh-3', theme.mesh3)
  root.style.setProperty('--color-surface', theme.surface)
  root.dataset.theme = theme.id
}

function indexFromId(id: string) {
  const idx = themes.findIndex((t) => t.id === id)
  return idx >= 0 ? idx : 0
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? indexFromId(saved) : indexFromId(defaultThemeId)
    } catch {
      return indexFromId(defaultThemeId)
    }
  })

  const theme = themes[themeIndex]

  useEffect(() => {
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme.id)
    } catch {
      /* ignore */
    }
  }, [theme])

  const setThemeByIndex = useCallback((index: number) => {
    const normalized = ((index % themes.length) + themes.length) % themes.length
    setThemeIndex(normalized)
  }, [])

  const value = useMemo(
    () => ({ theme, themeIndex, setThemeByIndex, themes }),
    [theme, themeIndex, setThemeByIndex],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
