<template>
  <section id="services" class="bg-dark py-20 md:py-28">
    <div class="w-11/12 max-w-[100rem] mx-auto">
      <!-- Section header -->
      <div class="section-padding mb-16">
        <BaseBadge class="mb-6">Layanan Kami</BaseBadge>
        <h2
          class="font-grotesk font-bold text-white uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]"
        >
          Layanan <span class="text-accent">Utama Kami</span>
        </h2>
      </div>

      <!-- Alternating service blocks -->
      <div class="flex flex-col divide-y divide-white/10">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="section-padding py-14 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <!-- Text side -->
          <div :class="i % 2 !== 0 ? 'lg:order-last' : ''">
            <h3
              class="font-grotesk font-bold text-white uppercase text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight mb-5"
            >
              {{ service.title }}
            </h3>
            <p
              class="font-grotesk text-white/50 text-base leading-relaxed mb-6 max-w-lg"
            >
              {{ service.desc }}
            </p>
            <!-- Feature list -->
            <ul class="flex flex-col gap-3 mb-6">
              <li
                v-for="feat in service.features"
                :key="feat"
                class="flex items-center gap-3 font-grotesk text-sm text-white/70"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                />
                {{ feat }}
              </li>
            </ul>
            <p class="font-grotesk text-white/60 text-sm leading-relaxed mb-10 max-w-lg">
              <strong class="text-white font-semibold">Keunggulan:</strong> {{ service.keunggulan }}
            </p>
            <BaseButton :href="service.link" variant="outline-light" arrow>
              {{ service.buttonText }}
            </BaseButton>
          </div>

          <!-- Image side -->
          <div class="rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3]">
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
    link: "/jasa-kontraktor-arsitektur",
    img: "/images/service-design.jpg",
  },
  {
    title: "JASA DESAIN INTERIOR",
    desc: "Kami menghadirkan layanan desain interior untuk rumah, kantor, café, retail, apartemen, dan ruang komersial dengan konsep yang estetis, nyaman, dan fungsional sesuai kebutuhan ruang Anda.",
    features: [
      "Konsep & Space Planning Interior",
      "Desain Interior Rumah & Komersial",
      "Visualisasi 3D Interior",
      "Interior Build & Finishing",
    ],
    keunggulan: "desain interior yang menyesuaikan gaya hidup, karakter brand, serta penggunaan ruang agar tampil modern, nyaman, dan optimal.",
    buttonText: "HUBUNGI KAMI",
    link: "/jasa-desain-interior",
    img: "/images/service-interior.jpg",
  },
  {
    title: "CUSTOM FURNITURE & INTERIOR BUILD",
    desc: "Kami memproduksi furniture custom dan interior build dengan desain yang menyesuaikan kebutuhan fungsi, dimensi ruangan, dan konsep interior secara menyeluruh.",
    features: [
      "Kitchen Set & Built-in Furniture",
      "Custom Lemari, Meja, dan Display",
      "Material & Finishing Berkualitas",
      "Produksi & Instalasi Profesional",
    ],
    keunggulan: "furniture dibuat custom dengan material pilihan, pengerjaan detail, serta hasil akhir yang menyatu dengan desain interior dan kebutuhan ruang.",
    buttonText: "KONSULTASI FURNITURE",
    link: "/custom-furniture-interior",
    img: "/images/service-construction.jpg",
  },
];
</script>
