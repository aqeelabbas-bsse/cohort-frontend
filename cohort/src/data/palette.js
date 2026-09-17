/**
 * Semantic fills for the 14-day strip.
 *
 * These are the only four states a testing day can be in, and every screen that
 * draws a strip reads them from here — so "what does a late day look like?" has
 * exactly one answer in the codebase.
 */
export const DAY = {
  OK: 'rgba(143,215,176,.55)', // proof received and verified
  LATE: 'rgba(255,180,163,.7)', // proof received outside the window
  MISS: 'rgba(236,48,19,.75)', // no proof — the day that breaks a streak
  OFF: 'rgba(255,255,255,.09)', // day not reached yet
}

/** Avatar gradients, cycled by index. Deterministic, so a person keeps theirs. */
export const AVATARS = [
  'linear-gradient(140deg,#5a6cff,#2b2f5e)',
  'linear-gradient(140deg,#ff8a75,#ae1800)',
  'linear-gradient(140deg,#8fd7b0,#1f5c43)',
  'linear-gradient(140deg,#d7d3d3,#605d5d)',
  'linear-gradient(140deg,#ffc4b8,#c94b39)',
  'linear-gradient(140deg,#9bb7ff,#3a4a8f)',
]

export const avatarAt = (i) => AVATARS[i % AVATARS.length]

/** Build a strip of `n` cells from a function of the index. */
export const strip = (n, fn) => Array.from({ length: n }, (_, i) => ({ bg: fn(i) }))
