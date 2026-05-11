<template>
  <section id="portfolio" class="bg-stone-950 py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <!-- Header -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 30 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
    >
      <div>
        <h2 class="font-grotesk font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Proyek<br><span class="text-orange-400">Pilihan</span>
        </h2>
      </div>
      <BaseButton href="#" variant="outline-light" arrow>Lihat Semua Proyek</BaseButton>
    </div>

    <!-- Masonry-style 2-col grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      <!-- Left column - tall item first, then small -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="flex flex-col gap-4 lg:gap-6"
      >
        <div class="relative rounded-2xl overflow-hidden group shadow-2xl shadow-stone-950/30" style="aspect-ratio: 4/5;">
          <img
            src="/images/portfolio-1.jpg"
            alt="Interior Hunian Modern Kartasura"
            class="w-full h-full object-cover"
          >
          <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-950/90 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
            <h3 class="font-grotesk font-bold text-stone-50 text-xl uppercase tracking-wide">Hunian Modern Kartasura</h3>
            <p class="font-grotesk text-stone-300 text-sm">Sukoharjo, Jawa Tengah</p>
          </div>
        </div>
        <!-- Short card -->
        <div class="relative rounded-2xl overflow-hidden group shadow-2xl shadow-stone-950/30" style="aspect-ratio: 16/9;">
          <img
            src="/images/portfolio-3.jpg"
            alt="Gedung Komersial Solo"
            class="w-full h-full object-cover"
          >
          <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-950/90 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
            <h3 class="font-grotesk font-bold text-stone-50 text-xl uppercase tracking-wide">Gedung Komersial Solo</h3>
            <p class="font-grotesk text-stone-300 text-sm">Solo, Jawa Tengah</p>
          </div>
        </div>
      </div>

      <!-- Right column - small first, then tall -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }"
        class="flex flex-col gap-4 lg:gap-6"
      >
        <div class="relative rounded-2xl overflow-hidden group shadow-2xl shadow-stone-950/30" style="aspect-ratio: 16/9;">
          <img
            src="/images/portfolio-2.jpg"
            alt="Villa Tropis Karanganyar"
            class="w-full h-full object-cover"
          >
          <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-950/90 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
            <h3 class="font-grotesk font-bold text-stone-50 text-xl uppercase tracking-wide">Villa Tropis Karanganyar</h3>
            <p class="font-grotesk text-stone-300 text-sm">Karanganyar, Jawa Tengah</p>
          </div>
        </div>
        <!-- Tall card -->
        <div class="relative rounded-2xl overflow-hidden group shadow-2xl shadow-stone-950/30" style="aspect-ratio: 4/5;">
          <img
            src="/images/portfolio-4.jpg"
            alt="Dapur Keluarga Premium"
            class="w-full h-full object-cover"
          >
          <div class="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-stone-950/90 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-start gap-2">
            <h3 class="font-grotesk font-bold text-stone-50 text-xl uppercase tracking-wide">Dapur Keluarga Premium</h3>
            <p class="font-grotesk text-stone-300 text-sm">Yogyakarta</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
