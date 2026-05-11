<template>
  <section
    id="about"
    class="bg-stone-50 py-20 md:py-28 section-padding border-b border-stone-200"
  >
    <div class="w-11/12 max-w-[100rem] mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
      >
        <!-- Left: Image -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
          class="rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-xl shadow-stone-900/10"
        >
          <img
            src="/images/portfolio-2.jpg"
            alt="Proyek Rombong Raharjo"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Right: Text -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 150 } }"
        >
          <h2
            class="font-grotesk font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)] mb-8"
          >
            Rombong <span class="text-orange-600">Raharjo</span>
          </h2>
          <div
            class="font-grotesk text-stone-600 text-base leading-relaxed flex flex-col gap-5"
          >
            <p>
              Rombong Raharjo adalah perusahaan jasa kontraktor, arsitektur, dan
              interior di Indonesia yang menghadirkan solusi desain dan
              pembangunan untuk hunian, komersial, dan berbagai kebutuhan
              konstruksi modern. Sebagai bagian dari PT. Rombong Raharjo
              Anarawata, kami berkomitmen memberikan layanan profesional dengan
              hasil yang fungsional, estetis, dan berkualitas.
            </p>
            <p>
              Kami melayani jasa kontraktor rumah, desain arsitektur, renovasi,
              desain interior, hingga pembangunan ruang komersial dengan
              pendekatan yang detail dan terukur. Setiap proyek dirancang untuk
              menyesuaikan kebutuhan, kenyamanan, dan karakter ruang klien.
            </p>
            <p>
              Berlokasi di Kartasura, tepatnya di Jl. Keden No.33, Dusun III,
              Singopuran, Kec. Kartasura, Kabupaten Sukoharjo, Jawa Tengah
              57169, Rombong Raharjo melayani area Sukoharjo, Solo, Jawa Tengah,
              hingga seluruh Indonesia dengan fokus pada kualitas pengerjaan,
              ketepatan waktu, dan kepuasan klien.
            </p>
          </div>
          <BaseButton href="#contact" variant="primary" arrow class="mt-8">Hubungi Kami</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About Us Section
</script>
