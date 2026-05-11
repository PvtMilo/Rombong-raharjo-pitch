<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col bg-dark overflow-hidden pt-20"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/hero-bg.jpg"
        alt="Modern architecture"
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-dark/60" />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex-1 flex flex-col justify-center section-padding pt-10 pb-16 md:pb-20 lg:pb-24 w-11/12 max-w-[100rem] mx-auto"
    >
      <!-- Badge row -->
      <div class="flex items-center gap-3 mb-8">
        <BaseBadge>Architecture Studio</BaseBadge>
        <span class="w-8 h-px bg-white/40" />
        <span
          class="font-grotesk text-xs text-white/50 uppercase tracking-widest"
          >Est. 2010</span
        >
      </div>

      <!-- Heading -->
      <h1
        class="font-grotesk font-bold text-white uppercase leading-[1.1] tracking-tight mb-8 text-[clamp(2.5rem,5vw,5rem)]"
      >
        Sempurnakan Setiap <br />
        <span class="text-accent">Sudut Bersama</span><br />
        Kami!
      </h1>

      <!-- Sub + Buttons row -->
      <div class="flex flex-col gap-8">
        <div class="flex flex-wrap gap-4">
          <BaseButton href="#portfolio" variant="primary" arrow
            >View Our Work</BaseButton
          >
          <BaseButton href="#contact" variant="outline-light"
            >Get a Quote</BaseButton
          >
        </div>
      </div>
    </div>

    <!-- Bottom stats strip -->
    <div
      class="relative z-10 border border-white/10 grid grid-cols-2 md:grid-cols-4 w-11/12 max-w-[100rem] mx-auto bg-gray-800"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="px-6 py-6 border border-white/10 last:border-r-0 flex flex-col gap-1 text-center"
      >
        <span class="font-grotesk font-bold text-accent text-3xl lg:text-4xl">{{
          stat.value
        }}</span>
        <span
          class="font-grotesk text-xs text-white/50 uppercase tracking-widest"
          >{{ stat.label }}</span
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "638+", label: "KLIEN KAMI" },
  { value: "762+", label: "PROJECT SELESAI" },
  { value: "16+", label: "PROJECT BERJALAN" },
  { value: "98%", label: "KEPUASAN KLIEN" },
];
</script>
