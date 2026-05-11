<template>
  <a
    :href="href"
    class="inline-flex items-center gap-2 font-grotesk text-sm font-semibold uppercase tracking-wider rounded-full px-7 py-3 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
    :class="[
      variant === 'primary'
        ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-orange-900/10'
        : variant === 'outline-light'
          ? 'border border-stone-50/70 text-stone-50 hover:bg-stone-50 hover:text-stone-950 focus-visible:ring-offset-stone-950'
          : variant === 'outline-dark'
            ? 'border border-stone-300 text-stone-800 hover:bg-stone-100 hover:border-stone-400'
            : 'bg-white text-stone-950 hover:bg-orange-50'
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
