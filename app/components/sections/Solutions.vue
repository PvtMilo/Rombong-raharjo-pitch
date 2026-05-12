<template>
  <section id="solutions" class="bg-white section-padding">
    <!-- ===== PRODUCT SHOWCASE ===== -->
    <div class="w-11/12 max-w-[100rem] mx-auto pt-20 md:pt-28 pb-0">
      <!-- Asymmetric image grid -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="grid grid-cols-1 lg:grid-cols-12 gap-3"
      >
        <!-- Large feature image -->
        <div class="lg:col-span-7 overflow-hidden aspect-[4/3]">
          <img
            src="/images/portfolio-3.jpg"
            alt="Proyek arsitektur dan konstruksi"
            class="w-full h-full object-cover brightness-95 hover:brightness-100 transition-all duration-500"
            loading="lazy"
          />
        </div>
        <!-- Two stacked images -->
        <div class="lg:col-span-5 flex flex-col gap-3">
          <div class="overflow-hidden aspect-[3/2]">
            <img
              src="/images/service-construction.jpg"
              alt="Proses konstruksi bangunan"
              class="w-full h-full object-cover brightness-95 hover:brightness-100 transition-all duration-500"
              loading="lazy"
            />
          </div>
          <div class="overflow-hidden aspect-[3/2]">
            <img
              src="/images/portfolio-1.jpg"
              alt="Interior dan finishing"
              class="w-full h-full object-cover brightness-95 hover:brightness-100 transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ===== KENAPA PILIH KAMI ===== -->
    <div class="w-11/12 max-w-[100rem] mx-auto py-20 md:py-28">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14"
      >
        <div>
          <h2
            class="font-grotesk font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]"
          >
            Kenapa Pilih<br /><span class="text-orange-600">Kami?</span>
          </h2>
        </div>
        <p
          class="font-grotesk text-stone-500 text-base leading-relaxed max-w-sm lg:max-w-md lg:text-right"
        >
          Kami memberikan solusi desain dan konstruksi terbaik yang berfokus
          pada kualitas, efisiensi, dan kepuasan klien.
        </p>
      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-stone-200" />

      <!-- Numbered ledger rows -->
      <div class="flex flex-col divide-y divide-stone-200">
        <div
          v-for="(reason, idx) in reasons"
          :key="reason.title"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: idx * 80 },
          }"
          class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-8 lg:py-10"
        >
          <!-- Number -->
          <div
            class="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:pt-1"
          >
            <span
              class="text-2xl font-bold font-mono text-orange-500 leading-none select-none"
            >
              {{ String(idx + 1).padStart(2, "0") }}
            </span>
          </div>

          <!-- Title -->
          <div class="lg:col-span-4">
            <h3
              class="font-grotesk text-lg md:text-xl font-bold text-stone-950 uppercase tracking-tight"
            >
              {{ reason.title }}
            </h3>
          </div>

          <!-- Description -->
          <div class="lg:col-span-7">
            <p class="font-grotesk text-stone-500 text-base leading-relaxed">
              {{ reason.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    title: "Tim Ahli Kontraktor & Arsitektur",
    desc: "Didukung tim profesional berpengalaman di bidang kontraktor, desain arsitektur, interior, dan konstruksi bangunan untuk hasil yang detail dan berkualitas.",
  },
  {
    title: "Konsultasi & Perencanaan Profesional",
    desc: "Memberikan konsultasi arsitektur, interior, dan konstruksi untuk membantu klien merencanakan proyek yang efisien, fungsional, dan sesuai anggaran.",
  },
  {
    title: "Desain & Konstruksi Terintegrasi",
    desc: "Layanan arsitektur, interior, dan pembangunan dalam satu sistem kerja terintegrasi untuk proses proyek yang lebih efisien dan terpadu.",
  },
  {
    title: "Solusi Desain Sesuai Kebutuhan",
    desc: "Setiap proyek dirancang menyesuaikan kebutuhan ruang, anggaran, fungsi, dan gaya desain yang diinginkan klien.",
  },
  {
    title: "Material & Finishing Berkualitas",
    desc: "Menggunakan material pilihan dan standar pengerjaan premium untuk menciptakan bangunan dan interior yang kuat, estetis, dan tahan lama.",
  },
  {
    title: "Pengerjaan Tepat Waktu",
    desc: "Komitmen pada timeline proyek dengan proses kerja profesional agar pembangunan berjalan tepat waktu tanpa mengurangi kualitas hasil akhir.",
  },
];
</script>
