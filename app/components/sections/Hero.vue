<template>
  <section
    id="hero"
    class="relative min-h-screen flex flex-col bg-stone-950 overflow-hidden pt-20"
  >
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/hero-bg.jpg"
        alt="Arsitektur modern"
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-stone-950/30" />
    </div>

    <!-- Content -->
    <div
      class="relative z-10 flex-1 flex flex-col justify-center section-padding pt-10 pb-16 md:pb-20 lg:pb-24 w-11/12 max-w-[100rem] mx-auto"
    >
      <!-- Heading -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 800, ease: 'easeOut', delay: 200 },
        }"
        class="font-grotesk font-bold text-stone-50 uppercase leading-[1.1] tracking-tight mb-8 text-[clamp(2.5rem,5vw,5rem)]"
      >
        Sempurnakan Setiap <br />
        <span class="text-orange-400">Sudut Bersama</span><br />
        Kami!
      </h1>

      <!-- Sub + Buttons row -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: { duration: 700, ease: 'easeOut', delay: 500 },
        }"
        class="flex flex-col gap-8"
      >
        <div class="flex flex-wrap gap-4">
          <BaseButton href="#portfolio" variant="primary" arrow
            >Lihat Portofolio</BaseButton
          >
          <BaseButton href="#contact" variant="outline-light"
            >Konsultasi Sekarang</BaseButton
          >
        </div>
      </div>
    </div>

    <!-- Bottom stats strip -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { duration: 700, ease: 'easeOut', delay: 900 },
      }"
      class="relative z-10 border border-stone-200 grid grid-cols-2 md:grid-cols-4 w-11/12 max-w-[100rem] mx-auto bg-white/95 shadow-2xl shadow-stone-950/25"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="px-6 py-6 border border-stone-200 last:border-r-0 flex flex-col gap-1 text-center"
      >
        <span
          class="font-grotesk font-bold text-orange-600 text-3xl lg:text-4xl"
          >{{ stat.value }}</span
        >
        <span
          class="font-grotesk text-xs text-stone-600 uppercase tracking-widest"
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
