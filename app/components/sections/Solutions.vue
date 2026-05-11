<template>
  <section id="solutions" class="bg-white py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
      <!-- Top row: badge + heading -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 36 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 650, ease: 'easeOut' } }"
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16"
      >
        <div class="max-w-2xl">
          <h2
            class="font-grotesk font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]"
          >
            Kenapa Pilih<br />
            <span class="text-orange-600">Kami?</span>
          </h2>
        </div>
        <p
          class="font-grotesk text-stone-600 text-base leading-relaxed max-w-sm lg:max-w-xs xl:max-w-sm lg:text-right"
        >
          Kami memberikan solusi desain dan konstruksi terbaik yang berfokus
          pada kualitas, efisiensi, dan kepuasan klien.
        </p>
      </div>

      <!-- Editorial Image Strip -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1, transition: { duration: 800, ease: 'easeOut', delay: 100 } }"
        class="mb-16"
      >
        <!-- 3-panel asymmetric grid: wide left + 2 stacked right -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-2"
        >
          <!-- Panel A — wide landscape -->
          <div
            class="relative overflow-hidden bg-stone-100 aspect-[16/9] sm:aspect-[4/3] lg:aspect-[4/3]"
          >
            <img
              src="/images/hero-bg.jpg"
              alt="Proyek arsitektur Rombong Raharjo"
              class="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
          <!-- Panel B — portrait -->
          <div
            class="relative overflow-hidden bg-stone-100 aspect-[4/3] lg:aspect-auto"
          >
            <img
              src="/images/portfolio-1.jpg"
              alt="Interior hunian premium"
              class="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
          <!-- Panel C — portrait, hidden on mobile to avoid clutter -->
          <div
            class="relative overflow-hidden bg-stone-100 aspect-[4/3] lg:aspect-auto hidden sm:block"
          >
            <img
              src="/images/portfolio-3.jpg"
              alt="Konstruksi gedung komersial"
              class="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Grid cards — numbered editorial layout -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 650, ease: 'easeOut', delay: 150 } }"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-stone-200"
      >
        <div
          v-for="(service, i) in services"
          :key="i"
          class="group relative flex flex-col gap-5 p-8 md:p-10 border-b border-r border-stone-200 last:border-b-0 hover:bg-stone-50 transition-colors duration-200"
        >
          <!-- Orange top accent on hover -->
          <div
            class="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
          />

          <!-- Index number -->
          <span
            class="font-mono text-[2.5rem] font-bold leading-none text-stone-200 group-hover:text-orange-200 transition-colors duration-300 select-none"
          >
            {{ String(i + 1).padStart(2, "0") }}
          </span>

          <!-- Content -->
          <div class="flex flex-col gap-3">
            <h3
              class="font-grotesk font-bold text-stone-950 text-base uppercase tracking-wider leading-snug"
            >
              {{ service.title }}
            </h3>
            <p class="font-grotesk text-stone-500 text-sm leading-relaxed">
              {{ service.desc }}
            </p>
          </div>

          <!-- Bottom arrow — appears on hover -->
          <div
            class="mt-auto pt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "◈",
    title: "Tim Ahli Kontraktor & Arsitektur",
    desc: "Didukung tim profesional berpengalaman di bidang kontraktor, desain arsitektur, interior, dan konstruksi bangunan untuk hasil yang detail dan berkualitas.",
  },
  {
    icon: "◉",
    title: "Konsultasi & Perencanaan Profesional",
    desc: "Memberikan konsultasi arsitektur, interior, dan konstruksi untuk membantu klien merencanakan proyek yang efisien, fungsional, dan sesuai anggaran.",
  },
  {
    icon: "◫",
    title: "Desain & Konstruksi Terintegrasi",
    desc: "Layanan arsitektur, interior, dan pembangunan dalam satu sistem kerja terintegrasi untuk proses proyek yang lebih efisien dan terpadu.",
  },
  {
    icon: "⬡",
    title: "Solusi Desain Sesuai Kebutuhan",
    desc: "Setiap proyek dirancang menyesuaikan kebutuhan ruang, anggaran, fungsi, dan gaya desain yang diinginkan klien.",
  },
  {
    icon: "◰",
    title: "Material & Finishing Berkualitas",
    desc: "Menggunakan material pilihan dan standar pengerjaan premium untuk menciptakan bangunan dan interior yang kuat, estetis, dan tahan lama.",
  },
  {
    icon: "◷",
    title: "Pengerjaan Tepat Waktu",
    desc: "Komitmen pada timeline proyek dengan proses kerja profesional agar pembangunan berjalan tepat waktu tanpa mengurangi kualitas hasil akhir.",
  },
];
</script>
