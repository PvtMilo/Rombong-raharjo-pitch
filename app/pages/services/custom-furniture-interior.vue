<template>
  <div class="bg-stone-950 min-h-screen flex flex-col font-grotesk text-stone-300">
    <LayoutNavbar />
    <main class="flex-1">

      <!-- HEADER -->
      <header class="pt-20 bg-stone-950">
        <div class="grid grid-cols-4 gap-0.5 bg-stone-900">
          <div class="relative overflow-hidden bg-stone-800">
            <img src="/images/portfolio-4.jpg" alt="Custom Furniture"
              class="w-full h-full object-cover brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100" />
          </div>
          <div class="relative overflow-hidden bg-stone-800">
            <img src="/images/portfolio-3.jpg" alt="Kitchen Set Custom"
              class="w-full h-full object-cover object-center brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100" />
          </div>
          <div class="relative overflow-hidden bg-stone-950 flex items-center justify-center">
            <img src="/images/portfolio-4.jpg" alt=""
              class="absolute inset-0 w-full h-full object-cover opacity-40 brightness-90 transition-all duration-500 scale-110 hover:scale-100" />
            <div class="absolute inset-0 bg-gradient-to-br from-orange-950/60 to-transparent" />
            <div class="relative z-10 flex flex-col items-center gap-1">
              <div class="w-10 h-10 border-[3px] border-orange-400 rotate-45" />
              <div class="w-7 h-7 border-[3px] border-orange-400 rotate-45 -mt-5" />
            </div>
          </div>
          <div class="relative overflow-hidden bg-stone-800">
            <img src="/images/service-interior.jpg" alt="Workshop Furniture"
              class="w-full h-full object-cover object-right brightness-90 hover:brightness-100 transition-all duration-500 scale-110 hover:scale-100" />
          </div>
        </div>

        <!-- TITLE BAR -->
        <div class="bg-stone-950 border-b border-stone-800">
          <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
            <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-8 py-14 md:py-20">
              <div class="flex-1">
                <h1 class="font-bold text-stone-50 uppercase leading-[1.05] tracking-tight text-[clamp(2.8rem,5.5vw,5.5rem)] mb-6">
                  Custom <span class="text-orange-400">Furniture</span>
                </h1>
                <p class="text-stone-300 text-lg md:text-xl leading-relaxed max-w-2xl">
                  Kami memproduksi furnitur <em>custom</em> yang menyesuaikan dimensi ruangan, kebutuhan fungsi, dan cita rasa desain Anda — dari workshop sendiri langsung ke lokasi proyek.
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
              <p class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Produksi Custom</p>
              <h2 class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.5rem)]">
                Furnitur yang<br /><span class="text-orange-600">Dibuat untuk Anda</span>
              </h2>
            </div>
            <div class="lg:col-span-7 lg:pt-4">
              <p class="text-xl md:text-2xl text-stone-600 leading-relaxed border-l-2 border-orange-500 pl-8 mb-10">
                Setiap produk kami rancang dan produksi sendiri di workshop dengan kontrol kualitas ketat — dari desain, pemilihan material, hingga instalasi langsung di lokasi Anda.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div v-for="p in pillars" :key="p.title"
                  class="p-6 border border-stone-200 bg-stone-50 rounded-2xl flex flex-col gap-3 group hover:border-orange-300 hover:shadow-lg hover:shadow-stone-900/10 transition-all duration-300">
                  <div class="w-10 h-10 rounded-full border border-orange-200 bg-orange-50 flex items-center justify-center mb-1">
                    <span class="text-orange-600 text-lg">{{ p.icon }}</span>
                  </div>
                  <h4 class="font-bold text-stone-950 text-sm uppercase tracking-wider">{{ p.title }}</h4>
                  <p class="text-stone-600 text-sm leading-relaxed">{{ p.desc }}</p>
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
              <p class="text-xs font-bold uppercase tracking-widest text-orange-400 mb-2">Galeri Produksi</p>
              <h2 class="font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(1.5rem,3vw,2.5rem)]">
                Hasil Karya <span class="text-orange-400">Workshop Kami</span>
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
              Yang Kami<br /><span class="text-orange-400">Produksi</span>
            </h2>
            <p class="text-stone-300 text-lg leading-relaxed">Tiga area utama layanan furniture custom kami — dari desain hingga instalasi di lokasi Anda.</p>
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

      <!-- DETAIL PRODUK -->
      <section class="py-24 md:py-32 bg-stone-50 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div class="lg:sticky lg:top-32">
              <p class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Produk & Material</p>
              <h2 class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)] mb-6">
                Pilihan<br /><span class="text-orange-600">Tanpa Batas</span>
              </h2>
              <p class="text-stone-600 text-lg leading-relaxed max-w-md">
                Dari material hingga finishing, setiap komponen dipilih sesuai kebutuhan fungsional, estetika, dan anggaran Anda.
              </p>
            </div>
            <div class="flex flex-col">
              <div v-for="(item, idx) in detailItems" :key="item.title"
                class="group flex gap-6 py-8 border-b border-stone-200 last:border-b-0 hover:bg-orange-50 -mx-4 px-4 transition-colors duration-200">
                <div class="flex-shrink-0 w-9 h-9 rounded-full border-2 border-stone-300 group-hover:border-orange-500 flex items-center justify-center text-sm font-bold text-stone-400 group-hover:text-orange-600 transition-colors mt-1">
                  {{ String(idx + 1).padStart(2, '0') }}
                </div>
                <div class="flex flex-col gap-2">
                  <h4 class="font-bold text-stone-950 text-lg group-hover:text-orange-700 transition-colors">{{ item.title }}</h4>
                  <p class="text-stone-600 text-sm leading-relaxed">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- KEUNGGULAN -->
      <section class="py-24 md:py-32 bg-white border-b border-stone-200 overflow-hidden">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div class="relative">
              <div class="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-stone-900/10">
                <img src="/images/portfolio-4.jpg" alt="Workshop Furniture"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div class="hidden md:block absolute -bottom-5 -right-5 w-40 h-40 border border-orange-300 pointer-events-none rounded-2xl" />
              <div class="absolute bottom-6 left-6 bg-white border border-stone-200 p-5 max-w-xs shadow-lg rounded-xl">
                <p class="font-bold text-orange-600 text-3xl mb-1">Custom</p>
                <p class="text-stone-600 text-sm">Produksi sendiri di workshop dengan kontrol kualitas penuh</p>
              </div>
            </div>
            <div>
              <p class="text-xs font-bold uppercase tracking-widest text-orange-600 mb-4">Keunggulan &amp; Nilai Tambah</p>
              <h2 class="font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4vw,3.2rem)] mb-8">
                Kualitas<br /><span class="text-orange-600">Terjamin</span>
              </h2>
              <div class="border-l-2 border-orange-500 pl-6 mb-10">
                <p class="text-xl text-stone-700 leading-relaxed italic">
                  "Furnitur rancang-bangun yang menyatu sempurna dengan desain interior, menggunakan material terpilih, serta didukung dengan garansi pengerjaan untuk ketenangan pikiran Anda."
                </p>
              </div>
              <div class="grid grid-cols-2 gap-6 mb-10">
                <div v-for="v in values" :key="v.label"
                  class="flex flex-col gap-2 p-6 border border-stone-200 bg-stone-50 rounded-2xl hover:border-orange-300 hover:shadow-md transition-all">
                  <span class="text-3xl md:text-4xl font-bold text-stone-950 font-mono">{{ v.value }}</span>
                  <span class="text-xs uppercase tracking-widest text-stone-500 font-semibold">{{ v.label }}</span>
                </div>
              </div>
              <BaseButton href="https://wa.me/6282242058673" variant="primary" arrow>Diskusikan Kebutuhan Anda</BaseButton>
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
  title: "Custom Furniture & Interior | Rombong Raharjo",
  description: "Produksi furniture custom berkualitas — kitchen set, lemari, meja kerja, display, dan berbagai kebutuhan interior. Dirancang, diproduksi, dan dipasang langsung oleh tim kami.",
});

// Carousel
const carouselImages = [
  { src: "/images/services/image1.png", alt: "Furniture Custom 1" },
  { src: "/images/services/image2.png", alt: "Furniture Custom 2" },
  { src: "/images/services/image3.png", alt: "Furniture Custom 3" },
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
  { icon: "🪵", title: "Desain Furnitur Khusus", desc: "Kitchen set, lemari, meja kerja, rak display, dan berbagai kebutuhan interior lainnya dirancang sesuai dimensi ruang Anda." },
  { icon: "🎨", title: "Material & Finishing", desc: "Pilihan kayu solid, plywood, HPL, metal, hingga finishing cat dan laminasi sesuai anggaran dan preferensi Anda." },
  { icon: "🏭", title: "Produksi & Pemasangan", desc: "Diproduksi di workshop sendiri dengan kontrol kualitas ketat, dikirim, dan dipasang langsung di lokasi proyek." },
];

const scopes = [
  {
    title: "Furniture Proyek Interior",
    desc: "Pembuatan furniture custom untuk proyek hunian dan komersial dengan presisi tinggi.",
    features: ["Kabinet & storage custom", "Meja resepsionis & workstation", "Wardrobe & walk-in closet"],
  },
  {
    title: "Retail & Display",
    desc: "Solusi display dan fixture retail yang memperkuat identitas brand dan pengalaman pelanggan.",
    features: ["Rak display produk", "Counter kasir custom", "Gondola & shelving unit"],
  },
  {
    title: "Showroom & Distribusi",
    desc: "Layanan pengiriman, pemasangan, dan distribusi produk mebel ke seluruh area proyek.",
    features: ["Pengiriman ke lokasi proyek", "Instalasi & leveling profesional", "After-sales & garansi pengerjaan"],
  },
];

const detailItems = [
  { title: "Kitchen Set", desc: "Dapur custom dengan layout yang dioptimalkan — mulai kabinet bawah, atas, island, hingga backsplash dengan material pilihan." },
  { title: "Lemari & Wardrobe", desc: "Lemari pakaian built-in yang memanfaatkan ruang secara maksimal, tersedia dengan sistem sliding atau swing door." },
  { title: "Meja Kerja & Workstation", desc: "Meja kerja ergonomis untuk rumah, kantor, atau co-working space dengan manajemen kabel terintegrasi." },
  { title: "Rak Display & Kabinet", desc: "Rak display multifungsi untuk koleksi, buku, atau produk retail dengan opsi backpanel dan lampu accent." },
  { title: "Material Pilihan", desc: "Kayu solid, plywood birch, MDF, HPL, dan metal — dipilih berdasarkan kebutuhan kekuatan, estetika, dan anggaran." },
  { title: "Finishing & Garansi", desc: "Cat duco, HPL, veneer, atau laminasi dengan garansi pengerjaan untuk setiap produk yang kami hasilkan." },
];

const values = [
  { value: "100%", label: "Custom Made" },
  { value: "Own", label: "Workshop" },
  { value: "Ketat", label: "Quality Control" },
  { value: "Garansi", label: "Pengerjaan" },
];
</script>
