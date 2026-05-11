<template>
  <section id="solutions" class="bg-dark py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
      <!-- Top row: badge + heading -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <div class="max-w-2xl">
          <BaseBadge class="mb-6">Keunggulan</BaseBadge>
          <h2 class="font-grotesk font-bold text-white uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
            Kenapa Pilih<br>
            <span class="text-accent">Kami?</span>
          </h2>
        </div>
        <p class="font-grotesk text-white/50 text-base leading-relaxed max-w-sm lg:max-w-xs xl:max-w-sm lg:text-right">
          Kami memberikan solusi desain dan konstruksi terbaik yang berfokus pada kualitas, efisiensi, dan kepuasan klien.
        </p>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-white/10 mb-16" />

      <!-- Grid cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, i) in services"
          :key="i"
          class="border border-white/10 rounded-2xl p-8 flex flex-col gap-4 hover:border-accent/40 transition-colors"
        >
          <!-- Icon block -->
          <div class="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-2">
            <span class="text-accent text-lg">{{ service.icon }}</span>
          </div>
          <h3 class="font-grotesk font-semibold text-white text-lg uppercase tracking-wide">
            {{ service.title }}
          </h3>
          <p class="font-grotesk text-white/50 text-sm leading-relaxed flex-1">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '◈',
    title: 'Tim Ahli Kontraktor & Arsitektur',
    desc: 'Didukung tim profesional berpengalaman di bidang kontraktor, desain arsitektur, interior, dan konstruksi bangunan untuk hasil yang detail dan berkualitas.',
  },
  {
    icon: '◉',
    title: 'Konsultasi & Perencanaan Profesional',
    desc: 'Memberikan konsultasi arsitektur, interior, dan konstruksi untuk membantu klien merencanakan proyek yang efisien, fungsional, dan sesuai anggaran.',
  },
  {
    icon: '◫',
    title: 'Desain & Konstruksi Terintegrasi',
    desc: 'Layanan arsitektur, interior, dan pembangunan dalam satu sistem kerja terintegrasi untuk proses proyek yang lebih efisien dan seamless.',
  },
  {
    icon: '⬡',
    title: 'Solusi Desain Sesuai Kebutuhan',
    desc: 'Setiap proyek dirancang menyesuaikan kebutuhan ruang, anggaran, fungsi, dan gaya desain yang diinginkan klien.',
  },
  {
    icon: '◰',
    title: 'Material & Finishing Berkualitas',
    desc: 'Menggunakan material pilihan dan standar pengerjaan premium untuk menciptakan bangunan dan interior yang kuat, estetis, dan tahan lama.',
  },
  {
    icon: '◷',
    title: 'Pengerjaan Tepat Waktu',
    desc: 'Komitmen pada timeline proyek dengan proses kerja profesional agar pembangunan berjalan tepat waktu tanpa mengurangi kualitas hasil akhir.',
  },
]
</script>
