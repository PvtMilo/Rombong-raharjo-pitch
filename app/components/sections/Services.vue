<template>
  <section id="services" class="bg-stone-950 py-20 md:py-28">
    <div class="w-11/12 max-w-[100rem] mx-auto">
      <!-- Section header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="section-padding mb-16"
      >
        <h2
          class="font-grotesk font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]"
        >
          Layanan <span class="text-orange-400">Utama Kami</span>
        </h2>
      </div>

      <!-- Alternating service blocks -->
      <div class="flex flex-col divide-y divide-stone-800">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
          class="section-padding py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <!-- Text side -->
          <div :class="i % 2 !== 0 ? 'lg:order-last' : ''">
            <h3
              class="font-grotesk font-bold text-stone-50 uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight mb-5"
            >
              {{ service.title }}
            </h3>
            <p
              class="font-grotesk text-stone-300 text-base leading-relaxed mb-6 max-w-lg"
            >
              {{ service.desc }}
            </p>
            <!-- Feature list -->
            <ul class="flex flex-col gap-3 mb-6">
              <li
                v-for="feat in service.features"
                :key="feat"
                class="flex items-center gap-3 font-grotesk text-sm text-stone-200"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"
                />
                {{ feat }}
              </li>
            </ul>
            <p class="font-grotesk text-stone-300 text-sm leading-relaxed mb-10 max-w-lg">
              <strong class="text-stone-50 font-semibold">Keunggulan:</strong> {{ service.keunggulan }}
            </p>
            <BaseButton :href="service.link" variant="outline-light" arrow>
              {{ service.buttonText }}
            </BaseButton>
          </div>

          <!-- Image side -->
          <div class="rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3] shadow-2xl shadow-stone-950/30">
            <img
              :src="service.img"
              :alt="service.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "JASA KONTRAKTOR & ARSITEKTUR",
    desc: "Kami melayani jasa kontraktor rumah, desain arsitektur, renovasi, dan pembangunan bangunan dengan pendekatan desain yang fungsional, modern, dan berkualitas. Mulai dari tahap konsep, gambar kerja, hingga proses konstruksi, setiap proyek dikerjakan secara profesional dan terintegrasi.",
    features: [
      "Perencanaan & Konsultasi Proyek",
      "Desain Arsitektur Rumah & Bangunan",
      "Renovasi & Pembangunan Konstruksi",
      "Manajemen Proyek & Pengawasan",
    ],
    keunggulan: "proses desain dan pembangunan yang terintegrasi, pengerjaan detail, serta kualitas hasil yang terukur untuk hunian maupun bangunan komersial.",
    buttonText: "KONSULTASI SEKARANG",
    link: "/services/jasa-kontraktor-arsitektur",
    img: "/images/service-design.jpg",
  },
  {
    title: "JASA DESAIN INTERIOR",
    desc: "Kami menghadirkan layanan desain interior untuk rumah, kantor, cafe, retail, apartemen, dan ruang komersial dengan konsep yang estetis, nyaman, dan fungsional sesuai kebutuhan ruang Anda.",
    features: [
      "Konsep & Perencanaan Ruang Interior",
      "Desain Interior Rumah & Komersial",
      "Visualisasi 3D Interior",
      "Pembangunan & Finishing Interior",
    ],
    keunggulan: "desain interior yang menyesuaikan gaya hidup, karakter brand, serta penggunaan ruang agar tampil modern, nyaman, dan optimal.",
    buttonText: "HUBUNGI KAMI",
    link: "/services/jasa-desain-interior",
    img: "/images/service-interior.jpg",
  },
  {
    title: "FURNITURE CUSTOM & PEMBANGUNAN INTERIOR",
    desc: "Kami memproduksi furniture custom dan pembangunan interior dengan desain yang menyesuaikan kebutuhan fungsi, dimensi ruangan, dan konsep interior secara menyeluruh.",
    features: [
      "Kitchen Set & Furniture Tanam",
      "Lemari, Meja, dan Display Custom",
      "Material & Finishing Berkualitas",
      "Produksi & Instalasi Profesional",
    ],
    keunggulan: "furniture dibuat custom dengan material pilihan, pengerjaan detail, serta hasil akhir yang menyatu dengan desain interior dan kebutuhan ruang.",
    buttonText: "KONSULTASI FURNITURE",
    link: "/services/custom-furniture-interior",
    img: "/images/service-construction.jpg",
  },
];
</script>
