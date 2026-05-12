<template>
  <div
    class="bg-stone-950 min-h-screen flex flex-col font-grotesk text-stone-300"
  >
    <LayoutNavbar />

    <main class="flex-1">
      <!-- ===== HERO ===== -->
      <header
        class="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden"
      >
        <img
          src="/images/service-interior.jpg"
          alt="Desain Interior"
          class="absolute inset-0 w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-950/10"
        />

        <!-- Breadcrumb -->
        <div class="absolute top-0 left-0 right-0 pt-28 px-6 md:px-16">
          <nav
            class="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-stone-400"
          >
            <a href="/" class="hover:text-stone-200 transition-colors"
              >Beranda</a
            >
            <span class="text-stone-700">/</span>
            <span class="text-orange-400">Desain Interior</span>
          </nav>
        </div>

        <!-- Service tag — upper right -->
        <div class="absolute top-28 right-6 md:right-16">
          <span
            class="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 border border-stone-700 px-3 py-1.5"
          >
            Interior Design &amp; Build
          </span>
        </div>

        <!-- Title block — bottom left -->
        <div
          class="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-14 md:pb-20"
        >
          <div class="max-w-[100rem] mx-auto">
            <!-- Thin horizontal rule -->
            <div class="w-12 h-px bg-orange-500 mb-6" />
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-5"
            >
              Layanan Utama
            </p>
            <div
              class="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
            >
              <h1
                class="text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.95] tracking-tight text-stone-50 uppercase"
              >
                Desain <span class="text-orange-400">Interior</span>
              </h1>
              <a
                href="https://wa.me/6282242058673"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-shrink-0 inline-flex items-center gap-3 border border-stone-50/30 hover:border-orange-400 text-stone-300 hover:text-orange-400 text-xs font-bold uppercase tracking-widest px-7 py-4 transition-all duration-300"
              >
                Konsultasi Gratis
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll line -->
        <div
          class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center pb-5 opacity-40"
        >
          <div class="w-px h-12 bg-stone-400" />
        </div>
      </header>

      <!-- ===== MANIFESTO — editorial paragraph ===== -->
      <section class="bg-white py-20 md:py-28 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <!-- Left vertical label -->
            <div class="lg:col-span-3 flex flex-col">
              <div class="flex items-start gap-4 lg:gap-0 lg:flex-col">
                <div class="w-px h-16 bg-orange-500 flex-shrink-0" />
                <p
                  class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 lg:mt-4 lg:writing-mode-vertical"
                >
                  Design &amp; Build Interior
                </p>
              </div>
            </div>

            <!-- Right: big paragraph -->
            <div class="lg:col-span-9">
              <p
                class="text-[clamp(1.2rem,2.5vw,2rem)] text-stone-700 leading-[1.6] font-light max-w-4xl mb-8"
              >
                Kami merancang dan mewujudkan interior yang fungsional, estetis,
                dan nyaman — dari rumah tinggal, kantor, apartemen, hingga ruang
                komersial. Setiap proyek dimulai dari pemahaman mendalam tentang
                <em class="not-italic font-semibold text-stone-950"
                  >siapa yang akan menggunakan ruang tersebut</em
                >, bukan sekadar mengikuti tren.
              </p>
              <p class="text-stone-500 text-base leading-relaxed max-w-2xl">
                Dari konsep hingga finishing — tim desainer dan pelaksana kami
                memastikan setiap detail ruang mencerminkan karakter, fungsi,
                dan estetika yang Anda inginkan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE SHOWCASE ===== -->
      <section class="bg-white py-12 md:py-16 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding border">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="w-full overflow-hidden aspect-[3/2]">
              <img
                src="/images/portfolio-1.jpg"
                alt="Proyek Desain Interior 1"
                class="w-full h-full object-cover brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </div>

            <div class="w-full overflow-hidden aspect-[3/2]">
              <img
                src="/images/portfolio-2.jpg"
                alt="Proyek Desain Interior 2"
                class="w-full h-full object-cover brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </div>

            <div class="w-full overflow-hidden aspect-[3/2]">
              <img
                src="/images/service-interior.jpg"
                alt="Proyek Desain Interior 3"
                class="w-full h-full object-cover object-center brightness-90 hover:brightness-100 hover:scale-105 transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ===== SERVICE PILLARS — numbered full-width rows ===== -->
      <section class="bg-stone-950 py-20 md:py-28 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="mb-14">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3"
            >
              Lingkup Layanan
            </p>
            <h2
              class="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-tight text-stone-50 leading-tight"
            >
              Apa yang Kami <span class="text-orange-400">Kerjakan</span>
            </h2>
          </div>

          <!-- Full-width numbered rows — easy to read, no cramped columns -->
          <div
            class="flex flex-col divide-y divide-stone-800 border-t border-stone-800"
          >
            <div
              v-for="(scope, idx) in scopes"
              :key="scope.title"
              class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14"
            >
              <!-- Step number + label -->
              <div
                class="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:pt-1"
              >
                <span
                  class="text-3xl font-bold font-mono text-orange-500 leading-none select-none"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </span>
              </div>

              <!-- Title + desc -->
              <div class="lg:col-span-5">
                <h3
                  class="text-xl md:text-2xl font-bold text-stone-50 uppercase tracking-tight mb-4"
                >
                  {{ scope.title }}
                </h3>
                <p class="text-stone-300 text-base leading-relaxed">
                  {{ scope.desc }}
                </p>
              </div>

              <!-- Feature list -->
              <div class="lg:col-span-6">
                <ul class="flex flex-col gap-4">
                  <li
                    v-for="f in scope.features"
                    :key="f"
                    class="flex items-start gap-4"
                  >
                    <span
                      class="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"
                    />
                    <span class="text-stone-300 text-base leading-relaxed">{{
                      f
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== DETAIL SCOPE — alternating split ===== -->
      <section class="bg-stone-50 py-20 md:py-28 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="mb-14">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3"
            >
              Detail Ruang Lingkup
            </p>
            <h2
              class="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-tight text-stone-950 leading-tight"
            >
              Setiap Detail <span class="text-orange-600">Dipikirkan</span>
            </h2>
          </div>

          <div
            class="flex flex-col gap-0 divide-y divide-stone-200 border-t border-stone-200"
          >
            <div
              v-for="(item, idx) in detailScopes"
              :key="item.title"
              class="group grid grid-cols-1 md:grid-cols-12 py-8 gap-6 hover:bg-orange-50 -mx-4 px-4 transition-colors duration-200"
            >
              <!-- Number -->
              <div class="md:col-span-1 flex md:items-start pt-0.5">
                <span
                  class="text-xs font-bold font-mono text-stone-400 group-hover:text-orange-600 transition-colors"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </span>
              </div>
              <!-- Title -->
              <div class="md:col-span-4">
                <h4
                  class="font-bold text-stone-950 text-base md:text-lg group-hover:text-orange-700 transition-colors"
                >
                  {{ item.title }}
                </h4>
              </div>
              <!-- Desc -->
              <div class="md:col-span-7">
                <p class="text-stone-600 text-sm leading-relaxed">
                  {{ item.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== DELIVERABLES — horizontal tag strip ===== -->
      <section class="bg-stone-950 py-20 md:py-28 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          >
            <div class="lg:col-span-4">
              <p
                class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3"
              >
                Output &amp; Deliverables
              </p>
              <h2
                class="text-[clamp(2rem,3.5vw,3rem)] font-bold uppercase tracking-tight text-stone-50 leading-tight mb-6"
              >
                Yang Anda<br /><span class="text-orange-400">Terima</span>
              </h2>
              <p class="text-stone-400 text-sm leading-relaxed">
                Setiap deliverable didokumentasikan dengan standar tinggi dan
                diserahkan tepat waktu sesuai kontrak.
              </p>
            </div>

            <div
              class="lg:col-span-8 flex flex-col gap-0 divide-y divide-stone-800 border-t border-stone-800"
            >
              <div
                v-for="(d, idx) in deliverables"
                :key="d.title"
                class="flex items-start gap-6 py-6"
              >
                <span
                  class="text-stone-700 text-xs font-mono font-bold mt-0.5 flex-shrink-0 w-6"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </span>
                <div
                  class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 flex-1"
                >
                  <h4 class="text-stone-100 font-semibold text-sm">
                    {{ d.title }}
                  </h4>
                  <p
                    class="text-stone-500 text-xs sm:text-right sm:max-w-xs leading-relaxed"
                  >
                    {{ d.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CTA BAND ===== -->
      <section class="bg-stone-950 py-24 md:py-32 border-t border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
          >
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-5"
              >
                Wujudkan Ruang Ideal Anda
              </p>
              <h2
                class="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight text-stone-50"
              >
                Mulai<br />Proyek <span class="text-orange-400">Anda</span>
              </h2>
            </div>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6282242058673"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-stone-950 text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200"
              >
                Hubungi via WhatsApp
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
              <a
                href="/#portfolio"
                class="inline-flex items-center gap-3 border border-stone-700 hover:border-stone-400 text-stone-300 hover:text-stone-100 text-sm font-bold uppercase tracking-widest px-8 py-4 transition-colors duration-200"
              >
                Lihat Portofolio
              </a>
            </div>
          </div>
          <div
            class="mt-16 pt-8 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-500"
          >
            <div>
              <span
                class="block font-semibold uppercase tracking-widest text-stone-600 mb-1"
                >Telepon</span
              >
              0271-7851871
            </div>
            <div>
              <span
                class="block font-semibold uppercase tracking-widest text-stone-600 mb-1"
                >WhatsApp</span
              >
              +62 822-4205-8673
            </div>
            <div>
              <span
                class="block font-semibold uppercase tracking-widest text-stone-600 mb-1"
                >Alamat</span
              >
              Jl. Keden No.33, Kartasura, Sukoharjo, Jawa Tengah
            </div>
          </div>
        </div>
      </section>
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Jasa Desain Interior | Rombong Raharjo",
  description:
    "Layanan desain dan build interior profesional untuk hunian, kantor, apartemen, dan ruang komersial. Fungsional, estetis, dan sesuai karakter Anda.",
});

const scopes = [
  {
    title: "Perancangan Konsep",
    desc: "Membangun fondasi estetika dan fungsi ruang melalui riset mendalam atas kebutuhan pengguna.",
    features: [
      "Space planning & sirkulasi",
      "Tema, palet material, pencahayaan",
      "Kajian aspek akustik & kenyamanan",
    ],
  },
  {
    title: "Visualisasi & Spesifikasi",
    desc: "Transformasi konsep menjadi visualisasi 3D dan dokumen teknis yang siap pelaksanaan.",
    features: [
      "3D render detail per ruang",
      "Spesifikasi material & finishing",
      "Layout plan, elevasi, cut-section",
    ],
  },
  {
    title: "Pelaksanaan & Supervisi",
    desc: "Koordinasi pengadaan, fabrikasi, dan pengawasan lapangan hingga serah terima ruang siap pakai.",
    features: [
      "Koordinasi MEP (elektrikal, HVAC)",
      "Pengadaan & instalasi FF&E",
      "Site supervision & quality control",
    ],
  },
];

const detailScopes = [
  {
    title: "Analisis Kebutuhan",
    desc: "Analisis pengguna dan space planning — aliran sirkulasi, kapasitas furnitur, dan kebutuhan fungsional ruang.",
  },
  {
    title: "Konsep Desain",
    desc: "Penentuan tema, palet material, pencahayaan, hingga pertimbangan aspek akustik untuk kenyamanan optimal.",
  },
  {
    title: "Visualisasi 3D",
    desc: "Pembuatan 3D render per ruang untuk presentasi detail kepada klien sebelum eksekusi lapangan dimulai.",
  },
  {
    title: "Spesifikasi Teknis",
    desc: "Detail material dan finishing — lantai, dinding, plafon — beserta daftar spesifikasi teknis lengkap.",
  },
  {
    title: "Koordinasi MEP",
    desc: "Pengaturan sistem elektrikal, HVAC, dan plumbing ringan di dalam interior secara terkoordinasi.",
  },
  {
    title: "FF&E & Supervisi Lapangan",
    desc: "Pengadaan, fabrikasi, dan pemasangan furniture, fixtures & equipment, serta pengawasan hingga serah terima.",
  },
];

const deliverables = [
  {
    title: "Layout Plan & Elevasi",
    desc: "Gambar denah, elevasi, dan cut-section interior lengkap siap pelaksanaan.",
  },
  {
    title: "3D Render & Moodboard",
    desc: "Visualisasi 3D per ruang dan material moodboard untuk kesepakatan estetika.",
  },
  {
    title: "Spesifikasi Finishing",
    desc: "Daftar lengkap material dan finishing — lantai, dinding, plafon, elemen dekoratif.",
  },
  {
    title: "Jadwal FF&E",
    desc: "Jadwal pengadaan dan instalasi furniture, fixtures, dan equipment yang terukur.",
  },
  {
    title: "Dokumentasi Serah Terima",
    desc: "As-built drawings dan dokumen serah terima lengkap bila diperlukan.",
  },
];
</script>
