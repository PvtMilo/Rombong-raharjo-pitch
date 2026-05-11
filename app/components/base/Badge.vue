<template>
  <span class="inline-block font-grotesk text-xs font-semibold uppercase tracking-widest border px-4 py-1.5 rounded-full"
    :class="[
      variant === 'light'
        ? 'border-stone-300 text-stone-900 bg-white/90'
        : 'border-orange-200 text-orange-700 bg-orange-50'
    ]"
  >
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'dark',
  },
})
</script>
