<template>
  <div class="bg-stone-950 min-h-screen flex flex-col font-grotesk text-stone-300">
    <LayoutNavbar />
    <main class="flex-1">

      <!-- HEADER -->
      <header class="pt-20 bg-stone-950">
        <div class="grid grid-cols-4 gap-0.5 bg-stone-900">
          <div class="relative overflow-hidden bg-stone-800">
            <img src="/images/service-interior.jpg" alt="Desain Interior"
              class="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100" />
          </div>
          <div class="relative overflow-hidden bg-stone-800">
            <img src="/images/portfolio-1.jpg" alt="Interior Hunian"
              class="w-full h-full object-cover object-center brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100" />
          </div>
          <div class="relative overflow-hidden bg-stone-950 flex items-center justify-center">
            <img src="/images/service-interior.jpg" alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-40 brightness-90 transition-all duration-500 scale-110 hover:scale-100" />
            <div class="absolute inset-0 bg-gradient-to-br from-orange-950/60 to-transparent" />
            <div class="relative z-10 flex flex-col items-center gap-1">
              <div class="w-10 h-10 border-[3px] border-orange-400 rotate-45" />
              <div class="w-7 h-7 border-[3px] border-orange-400 rotate-45 -mt-5" />
            </div>
          </div>
          <div class="relative overflow-hidden bg-stone-800">
            <img src="/images/portfolio-2.jpg" alt="Interior Detail"
              class="w-full h-full object-cover object-right brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100" />
          </div>
        </div>

        <!-- TITLE BAR -->
        <div class="bg-stone-950 border-b border-stone-800">
          <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 py-14 md:py-20">
              <div class="flex-1">
                <h1 class="font-bold text-stone-50 uppercase leading-[1.05] tracking-tight text-[clamp(2.8rem,5.5vw,5.5rem)] mb-6">
                  Desain <span class="text-orange-400">Interior</span>
                </h1>
                <p class="text-stone-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Kami merancang dan mewujudkan interior yang fungsional, estetis, dan nyaman — dari rumah tinggal, kantor, apartemen, retail, hingga ruang komersial lainnya.
                </p>
              </div>
              <div class="flex-shrink-0 flex flex-row md:flex-col items-center gap-6">
                <a href="https://wa.me/6282242058673" target="_blank" rel="noopener noreferrer"
                  class="group w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-orange-600/50 hover:border-orange-500 flex items-center justify-center text-center transition-all duration-300 hover:bg-orange-500/10">
                  <span class="text-[11px] md:text-[13px] font-bold uppercase tracking-widest text-orange-400 group-hover:text-orange-300 leading-snug transition-colors">
                    Hubungi<br />Sekarang
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- OVERVIEW -->
      <section class="py-24 md:py-32 bg-white border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div class="lg:col-span-5">
              <p class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Design &amp; Build Interior</p>
              <h2 class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.5rem)]">
                Ruang yang<br /><span class="text-orange-600">Bercerita</span>
              </h2>
            </div>
            <div class="lg:col-span-7 lg:pt-4">
              <p class="text-xl md:text-2xl text-stone-600 leading-relaxed border-l-2 border-orange-500 pl-8 mb-10">
                Dari konsep hingga finishing — tim desainer dan pelaksana kami memastikan setiap detail ruang mencerminkan karakter, fungsi, dan estetika yang Anda inginkan.
              </p>
              <div class="flex flex-col divide-y divide-stone-200">
                <div v-for="(p, idx) in pillars" :key="p.title" class="group flex items-start gap-6 py-6">
                  <span class="font-mono text-xs font-bold text-stone-400 pt-0.5 flex-shrink-0 w-5">{{ String(idx + 1).padStart(2, '0') }}</span>
                  <div class="flex flex-col gap-1.5">
                    <h4 class="font-bold text-stone-950 text-sm uppercase tracking-wider">{{ p.title }}</h4>
                    <p class="text-stone-500 text-sm leading-relaxed">{{ p.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CAROUSEL -->
      <section class="bg-stone-950 py-16 md:py-24 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="flex items-end justify-between mb-8">
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">Galeri Proyek</p>
              <h2 class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(1.5rem,3vw,2.5rem)]">
                Karya Nyata <span class="text-orange-400">Kami</span>
              </h2>
            </div>
            <div class="flex items-center gap-3 pb-1">
              <button v-for="(_, i) in carouselImages" :key="i" @click="goToSlide(i)"
                :class="['transition-all duration-300 rounded-full', currentSlide === i ? 'w-8 h-2 bg-orange-400' : 'w-2 h-2 bg-stone-600 hover:bg-stone-400']"
                :aria-label="`Gambar ${i + 1}`" />
            </div>
          </div>
          <div class="relative overflow-hidden rounded-xl" @mouseenter="pauseAuto" @mouseleave="resumeAuto">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(img, i) in carouselImages" :key="i" class="w-full flex-shrink-0">
                <div class="aspect-[16/7] w-full overflow-hidden bg-stone-900">
                  <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
            <button @click="prev"
              class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-950/80 border border-stone-700 hover:border-orange-500 flex items-center justify-center text-stone-300 hover:text-orange-400 transition-all duration-200 backdrop-blur-sm"
              aria-label="Sebelumnya">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button @click="next"
              class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-950/80 border border-stone-700 hover:border-orange-500 flex items-center justify-center text-stone-300 hover:text-orange-400 transition-all duration-200 backdrop-blur-sm"
              aria-label="Selanjutnya">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- LINGKUP LAYANAN -->
      <section class="py-24 md:py-32 bg-stone-950 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="max-w-2xl mb-16 md:mb-20">
            <p class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Lingkup Layanan</p>
            <h2 class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.5rem)] mb-5">
              Apa yang Kami<br /><span class="text-orange-400">Tangani</span>
            </h2>
            <p class="text-stone-300 text-lg leading-relaxed">Tiga pilar utama layanan interior kami dari ide hingga ruang siap pakai.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div v-for="(scope, idx) in scopes" :key="scope.title"
              class="group relative p-8 md:p-10 bg-stone-900 border border-stone-800 hover:border-orange-500/40 transition-all duration-500 overflow-hidden flex flex-col">
              <div class="absolute inset-0 bg-gradient-to-br from-orange-900/0 to-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div class="relative z-10 flex flex-col flex-1">
                <span class="font-mono text-stone-700 text-6xl font-bold leading-none mb-8 select-none">0{{ idx + 1 }}</span>
                <h3 class="text-xl md:text-2xl font-bold text-stone-50 uppercase tracking-tight mb-5 group-hover:text-orange-300 transition-colors">{{ scope.title }}</h3>
                <p class="text-stone-400 leading-relaxed mb-8 flex-1">{{ scope.desc }}</p>
                <ul class="flex flex-col gap-2.5 mt-auto">
                  <li v-for="f in scope.features" :key="f" class="flex items-start gap-3 text-sm text-stone-300">
                    <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- DETAIL RUANG LINGKUP -->
      <section class="py-24 md:py-32 bg-stone-50 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div class="lg:sticky lg:top-32">
              <p class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Detail Ruang Lingkup</p>
              <h2 class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)] mb-6">
                Setiap Detail<br /><span class="text-orange-600">Dipikirkan</span>
              </h2>
              <p class="text-stone-600 text-lg leading-relaxed max-w-md">
                Dari analisis kebutuhan hingga supervisi lapangan, setiap langkah dijalankan dengan standar profesional.
              </p>
            </div>
            <div class="flex flex-col">
              <div v-for="(item, idx) in detailScopes" :key="item.title"
                class="group flex gap-6 py-7 border-b border-stone-200 last:border-b-0">
                <span class="font-mono text-xs font-bold text-stone-400 pt-1 flex-shrink-0 w-5">{{ String(idx + 1).padStart(2, '0') }}</span>
                <div class="flex flex-col gap-1.5">
                  <h4 class="font-bold text-stone-950 text-base group-hover:text-orange-700 transition-colors">{{ item.title }}</h4>
                  <p class="text-stone-600 text-sm leading-relaxed">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- DELIVERABLES -->
      <section class="py-24 md:py-32 bg-stone-950 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div class="lg:col-span-4">
              <p class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">Output &amp; Deliverables</p>
              <h2 class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3rem)] mb-5">
                Yang Anda<br /><span class="text-orange-400">Terima</span>
              </h2>
              <p class="text-stone-400 text-sm leading-relaxed">Setiap deliverable didokumentasikan dengan standar tinggi dan diserahkan tepat waktu.</p>
            </div>
            <div class="lg:col-span-8 lg:border-l lg:border-stone-800 lg:pl-16">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-stone-800 sm:divide-y-0">
                <div v-for="(d, idx) in deliverables" :key="d.title"
                  class="group flex items-start gap-5 py-6 sm:px-6 sm:border-b sm:border-stone-800">
                  <span class="font-mono text-xs font-bold text-stone-700 pt-0.5 flex-shrink-0 w-5">{{ String(idx + 1).padStart(2, '0') }}</span>
                  <div class="flex flex-col gap-1">
                    <h4 class="font-bold text-stone-100 text-sm uppercase tracking-wide group-hover:text-orange-300 transition-colors">{{ d.title }}</h4>
                    <p class="text-stone-500 text-xs leading-relaxed">{{ d.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- KEUNGGULAN -->
      <section class="py-24 md:py-32 bg-white border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div class="overflow-hidden aspect-[4/3] w-full bg-stone-100">
              <img src="/images/service-interior.jpg" alt="Pengawasan Interior"
                class="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700 ease-out" />
            </div>
            <div class="flex flex-col justify-between h-full">
              <div>
                <p class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Keunggulan &amp; Nilai Tambah</p>
                <h2 class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3rem)] mb-8">
                  Personalisasi<br /><span class="text-orange-600">Terpandu</span>
                </h2>
                <div class="border-l-2 border-orange-500 pl-6 mb-10">
                  <p class="text-lg text-stone-600 leading-relaxed">
                    Desain yang disesuaikan dengan gaya hidup dan karakter brand Anda, serta pengawasan ketat di lapangan guna memastikan hasil akhir benar-benar sesuai dengan desain yang telah disepakati.
                  </p>
                </div>
                <div class="flex flex-col divide-y divide-stone-200 mb-10">
                  <div v-for="v in values" :key="v.label" class="flex items-start gap-5 py-4">
                    <span class="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0 mt-2" />
                    <div>
                      <span class="font-bold text-stone-950 text-sm uppercase tracking-wide">{{ v.label }}</span>
                      <span class="text-stone-500 text-sm"> — {{ v.desc }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <BaseButton href="https://wa.me/6282242058673" variant="primary" arrow>Diskusikan Proyek Anda</BaseButton>
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
  description: "Layanan desain dan build interior profesional untuk hunian, kantor, apartemen, dan ruang komersial. Fungsional, estetis, dan sesuai karakter Anda.",
});

// Carousel
const carouselImages = [
  { src: "/images/services/image1.png", alt: "Interior Proyek 1" },
  { src: "/images/services/image2.png", alt: "Interior Proyek 2" },
  { src: "/images/services/image3.png", alt: "Interior Proyek 3" },
];
const currentSlide = ref(0);
let autoTimer = null;
function next() { currentSlide.value = (currentSlide.value + 1) % carouselImages.length; }
function prev() { currentSlide.value = (currentSlide.value - 1 + carouselImages.length) % carouselImages.length; }
function goToSlide(i) { currentSlide.value = i; }
function pauseAuto() { clearInterval(autoTimer); }
function resumeAuto() { autoTimer = setInterval(next, 4000); }
onMounted(() => { autoTimer = setInterval(next, 4000); });
onUnmounted(() => { clearInterval(autoTimer); });

const pillars = [
  { icon: "🎨", title: "Perancangan Konsep", desc: "Space planning, pemilihan tema, warna, material, dan pencahayaan sesuai karakter ruang Anda." },
  { icon: "🖥️", title: "Visualisasi 3D", desc: "Render 3D detail membantu Anda melihat wujud nyata ruangan sebelum pembangunan dimulai." },
  { icon: "🔨", title: "Pelaksanaan & Finishing", desc: "Pengadaan material, pengerjaan dinding, plafon, lantai, hingga instalasi listrik dan pencahayaan." },
];

const scopes = [
  {
    title: "Perancangan Konsep",
    desc: "Membangun fondasi estetika dan fungsi ruang melalui riset mendalam atas kebutuhan pengguna.",
    features: ["Space planning & sirkulasi", "Tema, palet material, pencahayaan", "Aspek akustik & kenyamanan"],
  },
  {
    title: "Visualisasi & Spesifikasi",
    desc: "Transformasi konsep menjadi visualisasi 3D dan dokumen teknis yang siap pelaksanaan.",
    features: ["3D render detail per ruang", "Spesifikasi material & finishing", "Layout plan, elevasi, cut-section"],
  },
  {
    title: "Pelaksanaan & Supervisi",
    desc: "Koordinasi pengadaan, fabrikasi, dan pengawasan lapangan hingga serah terima.",
    features: ["Koordinasi MEP (elektrikal, HVAC)", "Pengadaan & instalasi FF&E", "Site supervision & quality control"],
  },
];

const detailScopes = [
  { title: "Analisis Kebutuhan", desc: "Analisis pengguna dan space planning — aliran sirkulasi, kapasitas furnitur, dan kebutuhan fungsional ruang." },
  { title: "Konsep Desain", desc: "Penentuan tema, palet material, pencahayaan, hingga pertimbangan aspek akustik untuk kenyamanan optimal." },
  { title: "Visualisasi 3D", desc: "Pembuatan 3D render per ruang untuk presentasi detail kepada klien sebelum eksekusi lapangan dimulai." },
  { title: "Spesifikasi Teknis", desc: "Detail material dan finishing — lantai, dinding, plafon — beserta daftar spesifikasi teknis lengkap." },
  { title: "Koordinasi MEP", desc: "Pengaturan sistem elektrikal, HVAC, dan plumbing ringan di dalam interior secara terkoordinasi." },
  { title: "FF&E & Supervisi", desc: "Pengadaan, fabrikasi, dan pemasangan furniture, fixtures & equipment, serta pengawasan hingga serah terima." },
];

const deliverables = [
  { title: "Layout Plan & Elevasi", desc: "Gambar denah, elevasi, dan cut-section interior lengkap siap pelaksanaan." },
  { title: "3D Render & Moodboard", desc: "Visualisasi 3D per ruang dan material moodboard untuk kesepakatan estetika." },
  { title: "Spesifikasi Finishing", desc: "Daftar lengkap material dan finishing — lantai, dinding, plafon, dan elemen dekoratif." },
  { title: "Jadwal FF&E", desc: "Jadwal pengadaan dan instalasi furniture, fixtures, dan equipment yang terukur." },
  { title: "Dokumentasi Serah Terima", desc: "As-built drawings dan dokumen serah terima lengkap bila diperlukan." },
];

const values = [
  { label: "Personalisasi Penuh", desc: "Setiap keputusan desain didasarkan pada riset gaya hidup dan preferensi klien." },
  { label: "Visualisasi Sebelum Eksekusi", desc: "Render 3D per ruang disepakati sebelum satu material pun dibeli." },
  { label: "Kontrol Kualitas Lapangan", desc: "Tim supervisi memastikan setiap detail dikerjakan sesuai gambar kerja." },
  { label: "Tepat Waktu & Serah Terima", desc: "Jadwal FF&E dan instalasi terstruktur dengan dokumen serah terima lengkap." },
];
</script>
