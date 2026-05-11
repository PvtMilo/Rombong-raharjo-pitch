<template>
  <div
    class="bg-stone-950 min-h-screen flex flex-col font-grotesk text-stone-300"
  >
    <LayoutNavbar />

    <main class="flex-1">
      <!-- ===================== SERVICE PAGE HEADER ===================== -->
      <header class="pt-20 bg-stone-950">
        <!-- PHOTO MOSAIC STRIP -->
        <div class="grid grid-cols-4 gap-0.5 bg-stone-900">
          <!-- Panel 1 -->
          <div class="relative overflow-hidden bg-stone-800">
            <img
              src="/images/hero-bg.jpg"
              alt="Sketsa Arsitektur"
              class="w-full h-full object-cover object-left brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100"
            />
          </div>
          <!-- Panel 2 -->
          <div class="relative overflow-hidden bg-stone-800">
            <img
              src="/images/service-design.jpg"
              alt="Konsultasi Desain"
              class="w-full h-full objecty-cover object-center brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100"
            />
          </div>
          <!-- Panel 3: Brand mark / accent panel -->
          <div
            class="relative overflow-hidden bg-stone-950 flex items-center justify-center"
          >
            <img
              src="/images/hero-bg.jpg"
              alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-40 brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100"
            />
            <div
              class="absolute inset-0 bg-gradient-to-br from-orange-950/60 to-transparent"
            />
            <div class="relative z-10 flex flex-col items-center gap-1">
              <div class="w-10 h-10 border-[3px] border-orange-400 rotate-45" />
              <div
                class="w-7 h-7 border-[3px] border-orange-400 rotate-45 -mt-5"
              />
            </div>
          </div>
          <!-- Panel 4 -->
          <div class="relative overflow-hidden bg-stone-800">
            <img
              src="/images/service-construction.jpg"
              alt="Konstruksi Detail"
              class="w-full h-full object-cover object-right brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100"
            />
          </div>
        </div>

        <!-- TITLE BAR -->
        <div class="bg-stone-950 border-b border-stone-800">
          <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
            <div
              class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 py-14 md:py-20"
            >
              <div class="flex-1">
                <h1
                  class="font-bold text-stone-50 uppercase leading-[1.05] tracking-tight text-[clamp(2.8rem,5.5vw,5.5rem)] mb-6"
                >
                  Kontraktor &amp;
                  <span class="text-orange-400">Arsitektur</span>
                </h1>
                <p
                  class="text-stone-300 text-lg md:text-xl leading-relaxed max-w-2xl"
                >
                  Kami menghadirkan solusi <em>design &amp; build</em> dari awal
                  hingga serah terima bangunan. Tim arsitek dan manajer proyek
                  kami menggabungkan kreativitas desain dengan ketelitian
                  pelaksanaan di lapangan.
                </p>
              </div>

              <!-- Right: circular CTA -->
              <div
                class="flex-shrink-0 flex flex-row md:flex-col items-center gap-6"
              >
                <a
                  href="https://wa.me/6282242058673"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-orange-600/50 hover:border-orange-500 flex items-center justify-center text-center transition-all duration-300 hover:bg-orange-500/10"
                >
                  <span
                    class="text-[11px] md:text-[13px] font-bold uppercase tracking-widest text-orange-400 group-hover:text-orange-300 leading-snug transition-colors"
                  >
                    Hubungi<br />Sekarang
                  </span>
                </a>
                <a
                  href="/#portfolio"
                  class="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-stone-200 transition-colors md:hidden"
                >
                  Lihat Proyek
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- ===================== OVERVIEW ===================== -->
      <section class="py-24 md:py-32 bg-white border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          >
            <div class="lg:col-span-5">
              <p
                class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4"
              >
                Design &amp; Build Terintegrasi
              </p>
              <h2
                class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.5rem)]"
              >
                Desain &amp; Konstruksi<br /><span class="text-orange-600"
                  >dalam Satu Tangan</span
                >
              </h2>
            </div>
            <div class="lg:col-span-7 lg:pt-4">
              <p
                class="text-xl md:text-2xl text-stone-600 leading-relaxed border-l-2 border-orange-500 pl-8 mb-10"
              >
                Tim arsitek dan manajer proyek kami menggabungkan kreativitas
                desain dengan ketelitian pelaksanaan di lapangan — mulai survei
                lahan, gambar 2D/3D, perizinan, hingga bangunan siap huni.
              </p>
              <!-- 3 pillars -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div
                  v-for="p in pillars"
                  :key="p.title"
                  class="p-6 border border-stone-200 bg-stone-50 rounded-2xl flex flex-col gap-3 group hover:border-orange-300 hover:shadow-lg hover:shadow-stone-900/10 transition-all duration-300"
                >
                  <div
                    class="w-10 h-10 rounded-full border border-orange-200 bg-orange-50 flex items-center justify-center mb-1"
                  >
                    <span class="text-orange-600 text-lg">{{ p.icon }}</span>
                  </div>
                  <h4
                    class="font-bold text-stone-950 text-sm uppercase tracking-wider"
                  >
                    {{ p.title }}
                  </h4>
                  <p class="text-stone-600 text-sm leading-relaxed">
                    {{ p.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== CAROUSEL ===================== -->
      <section class="bg-stone-950 py-16 md:py-24 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <!-- Section label -->
          <div class="flex items-end justify-between mb-8">
            <div>
              <p
                class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2"
              >
                Galeri Proyek
              </p>
              <h2
                class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(1.5rem,3vw,2.5rem)]"
              >
                Hasil Nyata di <span class="text-orange-400">Lapangan</span>
              </h2>
            </div>
            <!-- Dot indicators -->
            <div class="flex items-center gap-3 pb-1">
              <button
                v-for="(_, i) in carouselImages"
                :key="i"
                @click="goToSlide(i)"
                :class="[
                  'transition-all duration-300 rounded-full',
                  currentSlide === i
                    ? 'w-8 h-2 bg-orange-400'
                    : 'w-2 h-2 bg-stone-600 hover:bg-stone-400',
                ]"
                :aria-label="`Gambar ${i + 1}`"
              />
            </div>
          </div>

          <!-- Carousel track -->
          <div
            class="relative overflow-hidden rounded-xl"
            @mouseenter="pauseAuto"
            @mouseleave="resumeAuto"
          >
            <!-- Slides wrapper -->
            <div
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(img, i) in carouselImages"
                :key="i"
                class="w-full flex-shrink-0"
              >
                <div class="aspect-[16/7] w-full overflow-hidden bg-stone-900">
                  <img
                    :src="img.src"
                    :alt="img.alt"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <!-- Prev arrow -->
            <button
              @click="prev"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-950/80 border border-stone-700 hover:border-orange-500 flex items-center justify-center text-stone-300 hover:text-orange-400 transition-all duration-200 backdrop-blur-sm"
              aria-label="Sebelumnya"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <!-- Next arrow -->
            <button
              @click="next"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-950/80 border border-stone-700 hover:border-orange-500 flex items-center justify-center text-stone-300 hover:text-orange-400 transition-all duration-200 backdrop-blur-sm"
              aria-label="Selanjutnya"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <!-- Slide counter -->
            <!-- <div class="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-sm border border-stone-700 px-3 py-1 rounded-full">
              <span class="text-xs font-bold text-stone-300 font-mono">{{ currentSlide + 1 }} / {{ carouselImages.length }}</span>
            </div> -->
          </div>
        </div>
      </section>

      <!-- ===================== LINGKUP PEKERJAAN ===================== -->
      <section class="py-24 md:py-32 bg-stone-950 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="max-w-2xl mb-16 md:mb-20">
            <p
              class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4"
            >
              Lingkup Pekerjaan
            </p>
            <h2
              class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.5rem)] mb-5"
            >
              Apa yang Kami<br /><span class="text-orange-400">Kerjakan</span>
            </h2>
            <p class="text-stone-300 text-lg leading-relaxed">
              Tiga tahap utama yang memastikan proyek Anda berjalan terukur,
              efisien, dan tepat sasaran.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div
              v-for="(scope, idx) in scopes"
              :key="scope.title"
              class="group relative p-8 md:p-10 bg-stone-900 border border-stone-800 hover:border-orange-500/40 transition-all duration-500 overflow-hidden flex flex-col"
            >
              <!-- subtle gradient on hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-orange-900/0 to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
              <div class="relative z-10 flex flex-col flex-1">
                <span
                  class="font-mono text-stone-700 text-6xl font-bold leading-none mb-8 select-none group-hover:text-orange-900/60 transition-colors duration-500"
                  >0{{ idx + 1 }}</span
                >
                <h3
                  class="text-xl md:text-2xl font-bold text-stone-50 uppercase tracking-tight mb-5 group-hover:text-orange-300 transition-colors"
                >
                  {{ scope.title }}
                </h3>
                <p class="text-stone-400 leading-relaxed mb-8 flex-1">
                  {{ scope.desc }}
                </p>
                <ul class="flex flex-col gap-2.5 mt-auto">
                  <li
                    v-for="f in scope.features"
                    :key="f"
                    class="flex items-start gap-3 text-sm text-stone-300"
                  >
                    <span
                      class="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"
                    />
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== DETAIL RUANG LINGKUP ===================== -->
      <section class="py-24 md:py-32 bg-stone-50 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <!-- left sticky heading -->
            <div class="lg:sticky lg:top-32">
              <p
                class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4"
              >
                Detail Ruang Lingkup
              </p>
              <h2
                class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)] mb-6"
              >
                Setiap Tahap<br /><span class="text-orange-600"
                  >Terencana Matang</span
                >
              </h2>
              <p class="text-stone-600 text-lg leading-relaxed max-w-md">
                Dari studi awal tapak hingga serah terima, setiap proses
                dijalankan dengan standar profesional dan dokumentasi lengkap.
              </p>
            </div>
            <!-- right: step list -->
            <div class="flex flex-col">
              <div
                v-for="(item, idx) in detailScopes"
                :key="item.title"
                class="group flex gap-6 py-8 border-b border-stone-200 last:border-b-0 hover:bg-orange-50 -mx-4 px-4 transition-colors duration-200"
              >
                <div
                  class="flex-shrink-0 w-9 h-9 rounded-full border-2 border-stone-300 group-hover:border-orange-500 flex items-center justify-center text-sm font-bold text-stone-400 group-hover:text-orange-600 transition-colors mt-1"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </div>
                <div class="flex flex-col gap-2">
                  <h4
                    class="font-bold text-stone-950 text-lg group-hover:text-orange-700 transition-colors"
                  >
                    {{ item.title }}
                  </h4>
                  <p class="text-stone-600 text-sm leading-relaxed">
                    {{ item.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== DELIVERABLES ===================== -->
      <section class="py-24 md:py-32 bg-stone-950 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="max-w-2xl mb-16">
            <p
              class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4"
            >
              Output &amp; Deliverables
            </p>
            <h2
              class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)] mb-5"
            >
              Yang Anda<br /><span class="text-orange-400">Terima</span>
            </h2>
            <p class="text-stone-300 text-lg leading-relaxed">
              Setiap deliverable didokumentasikan dengan standar tinggi dan
              diserahkan tepat waktu.
            </p>
          </div>

          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <div
              v-for="(d, idx) in deliverables"
              :key="d.title"
              class="group p-7 bg-stone-900 border border-stone-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col gap-4"
            >
              <div
                class="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-stone-950 transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4
                class="font-bold text-stone-50 text-base leading-snug group-hover:text-orange-300 transition-colors"
              >
                {{ d.title }}
              </h4>
              <p class="text-stone-400 text-sm leading-relaxed">{{ d.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== KEUNGGULAN ===================== -->
      <section
        class="py-24 md:py-32 bg-white border-b border-stone-200 overflow-hidden"
      >
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <!-- image side -->
            <div class="relative">
              <div
                class="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-stone-900/10"
              >
                <img
                  src="/images/hero-bg.jpg"
                  alt="Koordinasi Proyek"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <!-- decorative frame -->
              <div
                class="hidden md:block absolute -bottom-5 -right-5 w-40 h-40 border border-orange-300 pointer-events-none rounded-2xl"
              />
              <!-- callout badge -->
              <div
                class="absolute bottom-6 left-6 bg-white border border-stone-200 p-5 max-w-xs shadow-lg rounded-xl"
              >
                <p class="font-bold text-orange-600 text-3xl mb-1">Presisi</p>
                <p class="text-stone-600 text-sm">
                  Eksekusi terukur dengan kontrol kualitas ketat di setiap fase
                  proyek
                </p>
              </div>
            </div>

            <!-- content side -->
            <div>
              <p
                class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4"
              >
                Keunggulan &amp; Nilai Tambah
              </p>
              <h2
                class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)] mb-8"
              >
                Koordinasi<br /><span class="text-orange-600">Terpadu</span>
              </h2>

              <!-- highlight quote -->
              <div class="border-l-2 border-orange-500 pl-6 mb-10">
                <p class="text-xl text-stone-700 leading-relaxed italic">
                  "Kombinasi desain dan pelaksanaan mengurangi kesenjangan
                  antara perancang dan pelaksana — koordinasi lebih rapi,
                  kontrol biaya lebih terjaga, risiko perubahan desain di
                  lapangan terminimalisir."
                </p>
              </div>

              <div class="grid grid-cols-2 gap-6 mb-10">
                <div
                  v-for="v in values"
                  :key="v.label"
                  class="flex flex-col gap-2 p-6 border border-stone-200 bg-stone-50 rounded-2xl hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <span
                    class="text-3xl md:text-4xl font-bold text-stone-950 font-mono"
                    >{{ v.value }}</span
                  >
                  <span
                    class="text-xs uppercase tracking-widest text-stone-500 font-semibold"
                    >{{ v.label }}</span
                  >
                </div>
              </div>

              <BaseButton
                href="https://wa.me/6282242058673"
                variant="primary"
                arrow
                >Diskusikan Proyek Anda</BaseButton
              >
            </div>
          </div>
        </div>
      </section>

      <!-- ===================== CTA BOTTOM ===================== -->
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Jasa Kontraktor & Arsitektur | Rombong Raharjo",
  description:
    "Solusi design & build profesional dari konsep hingga serah terima. Layanan arsitektur, konstruksi, dan manajemen proyek terintegrasi.",
});

// ---- Carousel ----
const carouselImages = [
  { src: "/images/services/image1.png", alt: "Proyek Arsitektur 1" },
  { src: "/images/services/image2.png", alt: "Proyek Arsitektur 2" },
  { src: "/images/services/image3.png", alt: "Proyek Arsitektur 3" },
];

const currentSlide = ref(0);
let autoTimer = null;

function next() {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length;
}
function prev() {
  currentSlide.value =
    (currentSlide.value - 1 + carouselImages.length) % carouselImages.length;
}
function goToSlide(i) {
  currentSlide.value = i;
}
function pauseAuto() {
  clearInterval(autoTimer);
}
function resumeAuto() {
  autoTimer = setInterval(next, 4000);
}

onMounted(() => {
  autoTimer = setInterval(next, 4000);
});
onUnmounted(() => {
  clearInterval(autoTimer);
});
// ------------------

const pillars = [
  {
    icon: "📐",
    title: "Perencanaan",
    desc: "Survei lokasi, analisis lahan, dan diskusi konsep sesuai kebutuhan dan anggaran klien.",
  },
  {
    icon: "🖥️",
    title: "Desain Lengkap",
    desc: "Gambar 2D/3D, denah, struktur, serta dokumen perizinan IMB/PBG siap pakai.",
  },
  {
    icon: "🏗️",
    title: "Konstruksi",
    desc: "Pengadaan material, pengawasan ketat, laporan progres, hingga bangunan siap huni.",
  },
];

const scopes = [
  {
    title: "Perencanaan & Konsultasi",
    desc: "Fondasi proyek yang kuat dimulai dari pemahaman menyeluruh atas lahan, regulasi, dan visi klien.",
    features: [
      "Survei lokasi & analisis lahan",
      "Analisis regulasi setempat",
      "Diskusi konsep & anggaran",
    ],
  },
  {
    title: "Desain Arsitektur Lengkap",
    desc: "Transformasi ide menjadi dokumen teknis yang komprehensif dan siap pelaksanaan.",
    features: [
      "Gambar 2D/3D & moodboard",
      "Gambar struktur & MEP",
      "Dokumen perizinan IMB/PBG",
    ],
  },
  {
    title: "Konstruksi & Manajemen",
    desc: "Eksekusi lapangan dengan kontrol kualitas ketat dari awal hingga serah terima bangunan.",
    features: [
      "Pengadaan material berkualitas",
      "Pengawasan & laporan berkala",
      "Serah terima bangunan siap huni",
    ],
  },
];

const detailScopes = [
  {
    title: "Studi Awal & Asesmen Tapak",
    desc: "Survei lokasi, analisis kondisi lahan, serta kajian regulasi dan tata ruang setempat untuk memastikan kelayakan proyek.",
  },
  {
    title: "Perancangan Konseptual",
    desc: "Moodboard visual, sketsa massing, dan zoning untuk membangun panduan desain yang kohesif dan komunikatif.",
  },
  {
    title: "Gambar Kerja & Perizinan",
    desc: "Penyusunan gambar arsitektur, struktur, dan MEP lengkap untuk pengurusan IMB/PBG dan kebutuhan teknis lapangan.",
  },
  {
    title: "Estimasi Biaya & RAB",
    desc: "Bill of Quantities (BOQ) dan Rencana Anggaran Biaya yang transparan, akurat, dan dapat dipertanggungjawabkan.",
  },
  {
    title: "Pengadaan & Manajemen Kontrak",
    desc: "Seleksi kontraktor/sub-kontraktor, manajemen kontrak kerja, penjadwalan proyek, dan koordinasi antar pihak.",
  },
  {
    title: "Pengawasan & Quality Control",
    desc: "Monitoring ketat standar mutu di setiap fase pelaksanaan hingga bangunan siap diserahterimakan.",
  },
];

const deliverables = [
  {
    title: "Proposal & Kontrak Tertulis",
    desc: "Dokumen resmi yang memuat lingkup kerja, timeline, dan ketentuan hukum yang jelas.",
  },
  {
    title: "Gambar Konsep + Moodboard",
    desc: "Sketsa 2D awal dan referensi visual untuk membangun kesepakatan estetika bersama.",
  },
  {
    title: "Gambar Kerja Lengkap",
    desc: "DED arsitektur, struktur, dan MEP siap untuk proses perizinan dan pelaksanaan lapangan.",
  },
  {
    title: "RAB & Jadwal Kerja",
    desc: "Rencana anggaran biaya detail dan timeline proyek yang realistis dan terukur.",
  },
  {
    title: "Laporan Progres Berkala",
    desc: "Update rutin dengan foto dokumentasi dan catatan kemajuan pekerjaan di lapangan.",
  },
  {
    title: "Dokumentasi Foto Proyek",
    desc: "Arsip foto komprehensif dari setiap fase pembangunan sebagai bukti kualitas pekerjaan.",
  },
  {
    title: "Sertifikat Serah Terima",
    desc: "Dokumen resmi penanda bangunan telah selesai dikerjakan sesuai standar dan kesepakatan kontrak.",
  },
];

const values = [
  { value: "1×", label: "Satu Tim Terpadu" },
  { value: "0", label: "Gap Komunikasi" },
  { value: "100%", label: "Transparansi Biaya" },
  { value: "Tepat", label: "Waktu & Mutu" },
];

const contactInfo = [
  {
    label: "Perusahaan",
    value: "PT Rombong Raharjo Anarawata",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    label: "Alamat",
    value:
      "Jl. Keden No.33, Dusun III, Singopuran,<br/>Kec. Kartasura, Kab. Sukoharjo, Jawa Tengah 57169",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
  {
    label: "Telepon",
    value: "0271-7851871",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "WhatsApp",
    value: "+62 822-4205-8673",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];
</script>
