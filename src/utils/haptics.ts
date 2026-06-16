const canVibrate =
  typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'

/** Light tap when crossing a theme — works on most Android browsers */
export function hapticThemeTick() {
  if (canVibrate) navigator.vibrate(6)
}

/** Slightly stronger pulse when the thumb snaps into place */
export function hapticThemeSnap() {
  if (canVibrate) navigator.vibrate([10, 24, 6])
}

/** Gentle pulse when grabbing the thumb */
export function hapticGrab() {
  if (canVibrate) navigator.vibrate(4)
}
