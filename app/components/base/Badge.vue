<template>
  <span class="inline-block font-grotesk text-xs font-semibold uppercase tracking-widest border px-4 py-1.5 rounded-full"
    :class="[
      variant === 'light'
        ? 'border-dark/30 text-dark bg-transparent'
        : 'border-white/30 text-white bg-transparent'
    ]"
  >
    <slot />
  </span>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'dark', // 'dark' | 'light'
  },
})
</script>
