<template>
  <section class="bg-dark py-16 border-y border-white/10 section-padding overflow-hidden">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <p class="font-grotesk text-xs text-white/30 uppercase tracking-widest text-center mb-10">
      Dipercaya Oleh Berbagai Perusahaan Terkemuka
    </p>
    <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      <span
        v-for="partner in partners"
        :key="partner"
        class="font-grotesk font-semibold text-white/25 text-xl uppercase tracking-widest hover:text-white/60 transition-colors cursor-default"
      >
        {{ partner }}
      </span>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  'Vanguard', 'Meridian', 'Strata', 'Luxe & Co', 'Archon', 'Pillar', 'Summit'
]
</script>
