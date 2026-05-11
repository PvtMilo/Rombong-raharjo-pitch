<template>
  <section class="bg-orange-50/30 py-16 border-y border-stone-200 section-padding overflow-hidden">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <p class="font-grotesk text-xs text-stone-500 uppercase tracking-widest text-center mb-10">
      Dipercaya Oleh Berbagai Perusahaan Terkemuka
    </p>
    <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
      <span
        v-for="partner in partners"
        :key="partner"
        class="font-grotesk font-semibold text-stone-400 text-xl uppercase tracking-widest hover:text-orange-600 transition-colors cursor-default"
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
