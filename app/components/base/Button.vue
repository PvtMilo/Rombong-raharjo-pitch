<template>
  <a
    :href="href"
    class="inline-flex items-center gap-2 font-grotesk text-sm font-semibold uppercase tracking-wider rounded-full px-7 py-3 transition-colors"
    :class="[
      variant === 'primary'
        ? 'bg-accent text-dark hover:bg-accent/80'
        : variant === 'outline-light'
          ? 'border border-white text-white hover:bg-white hover:text-dark'
          : variant === 'outline-dark'
            ? 'border border-dark text-dark hover:bg-dark hover:text-white'
            : 'bg-white text-dark hover:bg-white/80'
    ]"
  >
    <slot />
    <svg v-if="arrow" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
</template>

<script setup>
defineProps({
  href: { type: String, default: '#' },
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'outline-light' | 'outline-dark' | 'solid-white'
  },
  arrow: { type: Boolean, default: false },
})
</script>
