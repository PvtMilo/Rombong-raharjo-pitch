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
          src="/images/service-construction.jpg"
          alt="Konstruksi Arsitektur"
          class="absolute inset-0 w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        <!-- Gradient veil — heavy at bottom, subtle at top -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/10"
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
            <span class="text-orange-400">Kontraktor &amp; Arsitektur</span>
          </nav>
        </div>

        <!-- Title block — bottom left -->
        <div
          class="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-14 md:pb-20"
        >
          <div
            class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 max-w-[100rem] mx-auto"
          >
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-5"
              >
                Layanan Utama
              </p>
              <h1
                class="text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.95] tracking-tight text-stone-50 uppercase"
              >
                Kontraktor<br />&amp;
                <span class="text-orange-400">Arsitektur</span>
              </h1>
            </div>
            <div class="flex items-end gap-8 pb-1">
              <a
                href="https://wa.me/6282242058673"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-3 border border-stone-50/30 hover:border-orange-400 text-stone-300 hover:text-orange-400 text-xs font-bold uppercase tracking-widest px-7 py-4 transition-all duration-300"
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
          class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pb-5 opacity-40"
        >
          <div class="w-px h-12 bg-stone-400" />
        </div>
      </header>

      <!-- ===== STATEMENT — asymmetric grid ===== -->
      <section class="bg-white py-20 md:py-28 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            <!-- Pull-quote col -->
            <div class="lg:col-span-8 lg:border-r border-stone-200 lg:pr-16">
              <p
                class="text-[clamp(1.25rem,2.5vw,2rem)] text-stone-800 leading-[1.5] font-light max-w-3xl"
              >
                Tim arsitek dan manajer proyek kami menggabungkan kreativitas
                desain dengan ketelitian pelaksanaan — dari survei lahan, gambar
                2D/3D, pengurusan perizinan, hingga serah terima bangunan siap
                huni.
                <em class="not-italic font-semibold text-stone-950">
                  Satu tim. Satu tanggung jawab.</em
                >
              </p>
            </div>

            <!-- Stats sidebar -->
            <div
              class="lg:col-span-4 lg:pl-16 flex flex-col justify-center gap-10"
            >
              <div
                v-for="s in stats"
                :key="s.label"
                class="flex flex-col gap-1"
              >
                <span
                  class="text-[clamp(2.5rem,4vw,3.5rem)] font-bold text-stone-950 leading-none tracking-tight font-mono"
                  >{{ s.value }}</span
                >
                <span
                  class="text-xs font-semibold uppercase tracking-widest text-stone-400"
                  >{{ s.label }}</span
                >
              </div>
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

      <!-- ===== SCOPE — expandable numbered panels ===== -->
      <section class="bg-stone-950 py-20 md:py-28 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="flex items-end justify-between mb-14">
            <div>
              <p
                class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3"
              >
                Lingkup Pekerjaan
              </p>
              <h2
                class="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-tight text-stone-50 leading-tight"
              >
                Apa yang Kami<br /><span class="text-orange-400">Kerjakan</span>
              </h2>
            </div>
          </div>

          <!-- Accordion panels -->
          <div
            class="flex flex-col divide-y divide-stone-800 border-t border-stone-800"
          >
            <div
              v-for="(scope, idx) in scopes"
              :key="scope.title"
              class="group"
            >
              <button
                @click="toggleScope(idx)"
                class="w-full flex items-start gap-6 md:gap-10 py-8 text-left transition-colors duration-200 hover:text-stone-50"
                :aria-expanded="openScope === idx"
              >
                <!-- Number -->
                <span
                  class="text-[clamp(2rem,4vw,3.5rem)] font-bold font-mono leading-none text-stone-700 group-hover:text-stone-500 transition-colors w-16 flex-shrink-0 select-none"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </span>
                <!-- Title + toggle -->
                <div
                  class="flex flex-1 items-center justify-between gap-4 pt-1"
                >
                  <h3
                    class="text-xl md:text-2xl font-bold text-stone-200 group-hover:text-stone-50 uppercase tracking-tight transition-colors"
                  >
                    {{ scope.title }}
                  </h3>
                  <div
                    class="flex-shrink-0 w-8 h-8 border border-stone-700 flex items-center justify-center text-stone-400 transition-transform duration-300"
                    :class="
                      openScope === idx
                        ? 'rotate-45 border-orange-500 text-orange-400'
                        : ''
                    "
                  >
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
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <!-- Expanded content -->
              <div
                class="overflow-hidden transition-all duration-500"
                :class="openScope === idx ? 'max-h-96 pb-10' : 'max-h-0'"
              >
                <div
                  class="pl-[calc(1rem+4rem+1.5rem)] md:pl-[calc(1rem+10rem)] grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  <p class="text-stone-400 text-base leading-relaxed">
                    {{ scope.desc }}
                  </p>
                  <ul class="flex flex-col gap-3">
                    <li
                      v-for="f in scope.features"
                      :key="f"
                      class="flex items-start gap-4 text-sm text-stone-300"
                    >
                      <span class="mt-2 w-4 h-px bg-orange-500 flex-shrink-0" />
                      {{ f }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PROCESS TIMELINE — horizontal ===== -->
      <section
        class="bg-stone-50 py-20 md:py-28 border-b border-stone-200 overflow-hidden"
      >
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="mb-14">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3"
            >
              Alur Kerja
            </p>
            <h2
              class="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-tight text-stone-950 leading-tight"
            >
              Proses <span class="text-orange-600">Terstruktur</span>
            </h2>
          </div>

          <!-- Steps row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            <div
              v-for="(step, idx) in processSteps"
              :key="step.title"
              class="relative flex flex-col gap-4 pt-6 pb-10 pr-8 border-t-2 border-stone-300"
              :class="idx % 2 === 0 ? 'border-orange-500' : 'border-stone-300'"
            >
              <!-- Step number -->
              <span
                class="text-[clamp(3rem,6vw,5rem)] font-bold font-mono text-stone-200 leading-none select-none"
              >
                {{ String(idx + 1).padStart(2, "0") }}
              </span>
              <div>
                <h4
                  class="text-base font-bold text-stone-950 uppercase tracking-wider mb-2"
                >
                  {{ step.title }}
                </h4>
                <p class="text-stone-600 text-sm leading-relaxed">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== DELIVERABLES — two-column list ===== -->
      <section class="bg-stone-950 py-20 md:py-28 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          >
            <!-- Left: heading -->
            <div class="lg:col-span-4 lg:sticky lg:top-32">
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
              <p class="text-stone-400 text-base leading-relaxed">
                Setiap deliverable didokumentasikan dengan standar tinggi dan
                diserahkan tepat waktu sesuai kontrak.
              </p>
            </div>

            <!-- Right: two-column list -->
            <div class="lg:col-span-8">
              <div
                class="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-stone-800 border-t border-stone-800"
              >
                <div
                  v-for="(d, idx) in deliverables"
                  :key="d.title"
                  class="flex gap-5 py-7 pr-8"
                  :class="
                    idx % 2 !== 0 ? 'sm:border-l border-stone-800 sm:pl-8' : ''
                  "
                >
                  <span
                    class="text-stone-700 text-xs font-mono font-bold mt-0.5 select-none flex-shrink-0"
                  >
                    {{ String(idx + 1).padStart(2, "0") }}
                  </span>
                  <div>
                    <h4 class="text-stone-100 font-semibold text-sm mb-1">
                      {{ d.title }}
                    </h4>
                    <p class="text-stone-500 text-xs leading-relaxed">
                      {{ d.desc }}
                    </p>
                  </div>
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
                Siap Membangun?
              </p>
              <h2
                class="text-[clamp(2.5rem,6vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight text-stone-50"
              >
                Diskusikan<br />Proyek <span class="text-orange-400">Anda</span>
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

          <!-- Horizontal rule with contact strip -->
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
  title: "Jasa Kontraktor & Arsitektur | Rombong Raharjo",
  description:
    "Solusi design & build profesional dari konsep hingga serah terima. Layanan arsitektur, konstruksi, dan manajemen proyek terintegrasi.",
});

// Accordion state
const openScope = ref(0);
function toggleScope(idx) {
  openScope.value = openScope.value === idx ? -1 : idx;
}

const stats = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "100%", label: "Transparansi Biaya" },
  { value: "1×", label: "Tim Terpadu" },
];

const scopes = [
  {
    title: "Perencanaan & Konsultasi",
    desc: "Fondasi proyek yang kuat dimulai dari pemahaman menyeluruh atas lahan, regulasi, dan visi klien.",
    features: [
      "Survei lokasi & analisis lahan",
      "Analisis regulasi & tata ruang setempat",
      "Diskusi konsep & estimasi anggaran",
    ],
  },
  {
    title: "Desain Arsitektur Lengkap",
    desc: "Transformasi ide menjadi dokumen teknis yang komprehensif dan siap untuk proses perizinan dan pelaksanaan.",
    features: [
      "Gambar 2D/3D & moodboard visual",
      "Gambar struktur & MEP",
      "Dokumen perizinan IMB/PBG",
    ],
  },
  {
    title: "Konstruksi & Manajemen Proyek",
    desc: "Eksekusi lapangan dengan kontrol kualitas ketat dari pengadaan material hingga serah terima bangunan.",
    features: [
      "Pengadaan material berkualitas",
      "Pengawasan & laporan progres berkala",
      "Serah terima bangunan siap huni",
    ],
  },
];

const processSteps = [
  {
    title: "Studi & Asesmen Tapak",
    desc: "Survei lokasi, analisis kondisi lahan, dan kajian regulasi tata ruang untuk memastikan kelayakan proyek.",
  },
  {
    title: "Perancangan Konseptual",
    desc: "Moodboard visual, sketsa massing, zoning, dan panduan desain yang kohesif sesuai visi klien.",
  },
  {
    title: "Gambar Kerja & Perizinan",
    desc: "Gambar arsitektur, struktur, MEP lengkap untuk pengurusan IMB/PBG dan kebutuhan teknis lapangan.",
  },
  {
    title: "Estimasi Biaya & RAB",
    desc: "BOQ dan Rencana Anggaran Biaya yang transparan, akurat, dan dapat dipertanggungjawabkan.",
  },
  {
    title: "Pengadaan & Manajemen Kontrak",
    desc: "Seleksi kontraktor, manajemen kontrak, penjadwalan proyek, dan koordinasi antar pihak.",
  },
  {
    title: "Pengawasan & Quality Control",
    desc: "Monitoring standar mutu di setiap fase pelaksanaan hingga bangunan siap diserahterimakan.",
  },
];

const deliverables = [
  {
    title: "Proposal & Kontrak Tertulis",
    desc: "Dokumen resmi memuat lingkup kerja, timeline, dan ketentuan hukum yang jelas.",
  },
  {
    title: "Gambar Konsep + Moodboard",
    desc: "Sketsa 2D awal dan referensi visual untuk membangun kesepakatan estetika.",
  },
  {
    title: "Gambar Kerja Lengkap (DED)",
    desc: "Gambar arsitektur, struktur, dan MEP siap perizinan dan pelaksanaan lapangan.",
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
    desc: "Arsip foto komprehensif dari setiap fase pembangunan sebagai bukti kualitas.",
  },
  {
    title: "Sertifikat Serah Terima",
    desc: "Dokumen resmi penanda bangunan selesai sesuai standar dan kesepakatan kontrak.",
  },
  {
    title: "As-Built Drawing",
    desc: "Gambar kondisi akhir bangunan sesuai pelaksanaan di lapangan untuk arsip resmi.",
  },
];
</script>
