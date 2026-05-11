/**
 * useReveal — shared scroll-reveal presets for @vueuse/motion
 *
 * Usage in template:
 *   v-motion
 *   :initial="reveal.fadeUp.initial"
 *   :visible-once="reveal.fadeUp.visibleOnce"
 */
export const useReveal = () => {
  const base = { transition: { duration: 600, ease: 'easeOut' } }

  return {
    // Generic fade + rise — for headings, paragraphs
    fadeUp: {
      initial: { opacity: 0, y: 40 },
      visibleOnce: { opacity: 1, y: 0, ...base },
    },
    // Subtle fade only — for full-width image strips, backgrounds
    fade: {
      initial: { opacity: 0 },
      visibleOnce: { opacity: 1, transition: { duration: 800, ease: 'easeOut' } },
    },
    // Slide in from left — for left-column content
    slideLeft: {
      initial: { opacity: 0, x: -40 },
      visibleOnce: { opacity: 1, x: 0, ...base },
    },
    // Slide in from right — for right-column content
    slideRight: {
      initial: { opacity: 0, x: 40 },
      visibleOnce: { opacity: 1, x: 0, ...base },
    },
    // Scale up slightly — for cards and images
    scaleUp: {
      initial: { opacity: 0, scale: 0.96 },
      visibleOnce: { opacity: 1, scale: 1, transition: { duration: 700, ease: 'easeOut' } },
    },
    // Staggered child delay helper — pass index
    stagger: (i = 0, base = 100) => ({
      initial: { opacity: 0, y: 32 },
      visibleOnce: {
        opacity: 1,
        y: 0,
        transition: { duration: 550, ease: 'easeOut', delay: i * base },
      },
    }),
  }
}
