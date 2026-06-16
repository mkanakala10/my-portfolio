import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { hapticGrab, hapticThemeSnap, hapticThemeTick } from '../utils/haptics'

function normalizeAngle(angle: number) {
  return ((angle % 360) + 360) % 360
}

function angleFromPoint(cx: number, cy: number, x: number, y: number) {
  const rad = Math.atan2(y - cy, x - cx)
  return normalizeAngle((rad * 180) / Math.PI + 90)
}

function indexFromAngle(angle: number, count: number) {
  const segment = 360 / count
  return Math.round(angle / segment) % count
}

function angleFromIndex(index: number, count: number) {
  return normalizeAngle((index * 360) / count)
}

function useRingDimensions(wrapRef: React.RefObject<HTMLDivElement | null>) {
  const [dims, setDims] = useState({ size: 76, thumb: 18, radius: 28 })

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const read = () => {
      const style = getComputedStyle(el)
      const size = parseFloat(style.getPropertyValue('--ring-size')) || 76
      const thumb = parseFloat(style.getPropertyValue('--thumb-size')) || 18
      setDims({ size, thumb, radius: size / 2 - thumb / 2 - 2 })
    }

    read()
    const observer = new ResizeObserver(read)
    observer.observe(el)
    return () => observer.disconnect()
  }, [wrapRef])

  return dims
}

export function ThemeWheel() {
  const { theme, themeIndex, setThemeByIndex, themes: themeList } = useTheme()
  const wrapRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const lastIndexRef = useRef(themeIndex)
  const angleRef = useRef(0)

  const count = themeList.length
  const { size: ringSize, radius } = useRingDimensions(wrapRef)

  const [angle, setAngle] = useState(() => angleFromIndex(themeIndex, count))
  const [dragging, setDragging] = useState(false)

  angleRef.current = angle

  useEffect(() => {
    if (!draggingRef.current) {
      setAngle(angleFromIndex(themeIndex, count))
    }
  }, [themeIndex, count])

  const pointerToAngle = useCallback((clientX: number, clientY: number) => {
    const stage = stageRef.current
    if (!stage) return angleRef.current
    const rect = stage.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    return angleFromPoint(cx, cy, clientX, clientY)
  }, [])

  const applyAngle = useCallback(
    (nextAngle: number) => {
      const idx = indexFromAngle(nextAngle, count)
      setAngle(nextAngle)

      if (idx !== lastIndexRef.current) {
        lastIndexRef.current = idx
        setThemeByIndex(idx)
        hapticThemeTick()
      }
    },
    [count, setThemeByIndex],
  )

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    draggingRef.current = true
    setDragging(true)
    hapticGrab()
    applyAngle(pointerToAngle(e.clientX, e.clientY))
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    applyAngle(pointerToAngle(e.clientX, e.clientY))
  }

  const onPointerUp = () => {
    if (!draggingRef.current) return
    draggingRef.current = false
    setDragging(false)

    const idx = indexFromAngle(angleRef.current, count)
    const snapped = angleFromIndex(idx, count)
    setAngle(snapped)
    setThemeByIndex(idx)
    lastIndexRef.current = idx
    hapticThemeSnap()
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      const next = (themeIndex + 1) % count
      setThemeByIndex(next)
      lastIndexRef.current = next
      hapticThemeTick()
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = (themeIndex - 1 + count) % count
      setThemeByIndex(next)
      lastIndexRef.current = next
      hapticThemeTick()
    }
  }

  return (
    <div ref={wrapRef} className="theme-ring-wrap">
      <p className="theme-ring-label">{theme.name}</p>

      <div
        ref={stageRef}
        className={`theme-ring-stage ${dragging ? 'dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="slider"
        aria-label="Theme selector"
        aria-valuemin={0}
        aria-valuemax={count - 1}
        aria-valuenow={themeIndex}
        aria-valuetext={theme.name}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <svg
          className="theme-ring-track"
          viewBox={`0 0 ${ringSize} ${ringSize}`}
          aria-hidden
        >
          <circle
            cx={ringSize / 2}
            cy={ringSize / 2}
            r={radius}
            className="theme-ring-track-circle"
          />
        </svg>

        <div
          className="theme-ring-thumb-orbit"
          style={{ transform: `rotate(${angle}deg) translateY(-${radius}px)` }}
        >
          <div className="theme-ring-thumb" style={{ background: theme.wheel }} />
        </div>
      </div>
    </div>
  )
}
