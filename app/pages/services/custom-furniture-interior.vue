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
          src="/images/portfolio-4.jpg"
          alt="Custom Furniture Workshop"
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
            <span class="text-orange-400">Custom Furniture</span>
          </nav>
        </div>

        <!-- Tag — upper right -->
        <div class="absolute top-28 right-6 md:right-16">
          <span
            class="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 border border-stone-700 px-3 py-1.5"
          >
            Produksi &amp; Instalasi Langsung
          </span>
        </div>

        <!-- Title block — bottom left -->
        <div
          class="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-14 md:pb-20"
        >
          <div class="max-w-[100rem] mx-auto">
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
                Custom <span class="text-orange-400">Furniture</span>
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

      <!-- ===== STATEMENT ===== -->
      <section class="bg-white py-20 md:py-28 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            <div class="lg:col-span-8 lg:border-r border-stone-200 lg:pr-16">
              <p
                class="text-[clamp(1.2rem,2.5vw,2rem)] text-stone-800 leading-[1.6] font-light max-w-3xl"
              >
                Kami memproduksi furnitur
                <em class="not-italic font-semibold text-stone-950">custom</em>
                yang menyesuaikan dimensi ruangan, kebutuhan fungsi, dan cita
                rasa desain Anda — dari workshop sendiri langsung ke lokasi
                proyek. Setiap produk dirancang, diproduksi, dan dipasang oleh
                tim kami dengan kontrol kualitas penuh.
              </p>
            </div>
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

      <!-- ===== PRODUCT CATEGORIES — numbered full-width rows ===== -->
      <section class="bg-stone-950 py-20 md:py-28 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="mb-14">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3"
            >
              Yang Kami Produksi
            </p>
            <h2
              class="text-[clamp(2rem,4vw,3.5rem)] font-bold uppercase tracking-tight text-stone-50 leading-tight"
            >
              Kategori <span class="text-orange-400">Produk</span>
            </h2>
          </div>

          <!-- Full-width numbered rows -->
          <div
            class="flex flex-col divide-y divide-stone-800 border-t border-stone-800"
          >
            <div
              v-for="(cat, idx) in categories"
              :key="cat.name"
              class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 lg:py-14"
            >
              <!-- Step number -->
              <div
                class="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:pt-1"
              >
                <span
                  class="text-3xl font-bold font-mono text-orange-500 leading-none select-none"
                >
                  {{ String(idx + 1).padStart(2, "0") }}
                </span>
              </div>

              <!-- Name + desc -->
              <div class="lg:col-span-5">
                <h3
                  class="text-xl md:text-2xl font-bold text-stone-50 uppercase tracking-tight mb-4"
                >
                  {{ cat.name }}
                </h3>
                <p class="text-stone-300 text-base leading-relaxed">
                  {{ cat.desc }}
                </p>
              </div>

              <!-- Spec tags as list -->
              <div class="lg:col-span-6">
                <ul class="flex flex-col gap-4">
                  <li
                    v-for="tag in cat.tags"
                    :key="tag"
                    class="flex items-start gap-4"
                  >
                    <span
                      class="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"
                    />
                    <span class="text-stone-300 text-base leading-relaxed">{{
                      tag
                    }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== PROCESS — 4-step numbered row ===== -->
      <section class="bg-stone-50 py-20 md:py-28 border-b border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div class="mb-14">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-3"
            >
              Alur Produksi
            </p>
            <h2
              class="text-[clamp(2rem,4vw,3rem)] font-bold uppercase tracking-tight text-stone-950 leading-tight"
            >
              Dari Desain ke <span class="text-orange-600">Instalasi</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            <div
              v-for="(step, idx) in processSteps"
              :key="step.title"
              class="relative flex flex-col gap-4 pt-6 pb-10 pr-8 border-t-2"
              :class="idx % 2 === 0 ? 'border-orange-500' : 'border-stone-300'"
            >
              <!-- Connector line between steps on desktop -->
              <div
                v-if="idx < processSteps.length - 1"
                class="hidden lg:block absolute top-[-1px] right-0 w-8 h-0.5 bg-stone-200"
              />
              <span
                class="text-[clamp(3rem,5vw,4.5rem)] font-bold font-mono text-stone-200 leading-none select-none"
              >
                {{ String(idx + 1).padStart(2, "0") }}
              </span>
              <div>
                <h4
                  class="text-sm font-bold text-stone-950 uppercase tracking-wider mb-2"
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

      <!-- ===== MATERIALS & SPECS — table layout ===== -->
      <section class="bg-stone-950 py-20 md:py-28 border-b border-stone-800">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <div
            class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          >
            <div class="lg:col-span-4 lg:sticky lg:top-32">
              <p
                class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3"
              >
                Material &amp; Spesifikasi
              </p>
              <h2
                class="text-[clamp(2rem,3.5vw,3rem)] font-bold uppercase tracking-tight text-stone-50 leading-tight mb-6"
              >
                Pilihan<br /><span class="text-orange-400">Tanpa Batas</span>
              </h2>
              <p class="text-stone-400 text-sm leading-relaxed">
                Setiap material dipilih berdasarkan kebutuhan kekuatan,
                estetika, dan anggaran Anda. Tersedia dalam berbagai opsi
                finishing dan garansi pengerjaan.
              </p>
            </div>

            <!-- Spec table -->
            <div class="lg:col-span-8">
              <!-- Table header -->
              <div class="grid grid-cols-3 border-b border-stone-700 pb-3 mb-0">
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-stone-600"
                  >Material</span
                >
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-stone-600"
                  >Opsi Finishing</span
                >
                <span
                  class="text-[10px] font-bold uppercase tracking-widest text-stone-600"
                  >Karakteristik</span
                >
              </div>
              <div class="flex flex-col divide-y divide-stone-800">
                <div
                  v-for="m in materials"
                  :key="m.name"
                  class="group grid grid-cols-3 py-5 gap-4 hover:bg-stone-900 -mx-4 px-4 transition-colors duration-200"
                >
                  <h4
                    class="text-stone-100 font-semibold text-sm group-hover:text-orange-300 transition-colors"
                  >
                    {{ m.name }}
                  </h4>
                  <p class="text-stone-400 text-xs leading-relaxed">
                    {{ m.finish }}
                  </p>
                  <p class="text-stone-500 text-xs leading-relaxed">
                    {{ m.char }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ===== CTA BAND ===== -->
      <section class="bg-white py-28 md:py-40 border-t border-stone-200">
        <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
          <!-- Centered block -->
          <div class="text-center">
            <p
              class="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-600 mb-10"
            >
              Wujudkan Ruang Anda
            </p>
            <h2
              class="text-[clamp(3.5rem,8vw,9rem)] font-bold uppercase leading-[0.88] tracking-tight text-stone-950 mb-16"
            >
              Diskusikan<br />Kebutuhan
              <span class="text-orange-500">Anda</span>
            </h2>

            <!-- Rule separator -->
            <div class="w-full h-px bg-stone-200 mb-16" />

            <!-- Action -->
            <a
              href="https://wa.me/6282242058673"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 bg-stone-950 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-widest px-10 py-4 transition-colors duration-200"
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
          </div>

          <!-- Contact strip -->
          <div
            class="mt-20 pt-8 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-stone-400"
          >
            <div>
              <span
                class="block font-semibold uppercase tracking-widest text-stone-300 mb-1"
                >Telepon</span
              >
              0271-7851871
            </div>
            <div>
              <span
                class="block font-semibold uppercase tracking-widest text-stone-300 mb-1"
                >WhatsApp</span
              >
              +62 822-4205-8673
            </div>
            <div>
              <span
                class="block font-semibold uppercase tracking-widest text-stone-300 mb-1"
                >Alamat</span
              >
              Jl. Keden No.33, Dusun III, Singopuran, Kec. Kartasura, Kabupaten
              Sukoharjo, Jawa Tengah 57169
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
  description:
    "Produksi furniture custom berkualitas — kitchen set, lemari, meja kerja, display, dan berbagai kebutuhan interior. Dirancang, diproduksi, dan dipasang langsung oleh tim kami.",
});

const stats = [
  { value: "100%", label: "Custom Made" },
  { value: "Own", label: "Workshop" },
  { value: "Garansi", label: "Pengerjaan" },
];

const categories = [
  {
    name: "Kitchen Set",
    desc: "Dapur custom dengan layout dioptimalkan — kabinet bawah, atas, island, hingga backsplash material pilihan.",
    tags: ["Kabinet", "Island", "Backsplash"],
  },
  {
    name: "Wardrobe & Lemari",
    desc: "Lemari pakaian built-in yang memanfaatkan ruang secara maksimal. Sistem sliding atau swing door.",
    tags: ["Built-in", "Sliding", "Swing Door"],
  },
  {
    name: "Meja Kerja & Workstation",
    desc: "Meja kerja ergonomis untuk rumah, kantor, atau co-working space dengan manajemen kabel terintegrasi.",
    tags: ["Ergonomis", "Cable Mgmt", "Modular"],
  },
  {
    name: "Rak Display & Kabinet",
    desc: "Rak display multifungsi untuk koleksi, buku, atau produk retail dengan opsi backpanel dan lampu accent.",
    tags: ["Display", "Retail", "Accent Light"],
  },
  {
    name: "Retail & Counter",
    desc: "Solusi display dan fixture retail yang memperkuat identitas brand dan pengalaman pelanggan.",
    tags: ["Counter", "Gondola", "Shelving"],
  },
];

const processSteps = [
  {
    title: "Konsultasi & Ukur",
    desc: "Diskusi kebutuhan, survei lokasi, pengambilan ukuran presisi, dan estimasi anggaran awal.",
  },
  {
    title: "Desain & Approval",
    desc: "Gambar kerja detail, pemilihan material, finishing, dan presentasi desain untuk persetujuan klien.",
  },
  {
    title: "Produksi Workshop",
    desc: "Fabrikasi di workshop sendiri dengan kontrol kualitas ketat di setiap tahap produksi.",
  },
  {
    title: "Pengiriman & Instalasi",
    desc: "Pengiriman ke lokasi proyek, instalasi profesional, leveling, dan serah terima bergaransi.",
  },
];

const materials = [
  {
    name: "Kayu Solid",
    finish: "Natural oil, duco, stain",
    char: "Kuat, premium, natural grain",
  },
  {
    name: "Plywood Birch",
    finish: "HPL, veneer, cat duco",
    char: "Stabil, ringan, anti-melengkung",
  },
  {
    name: "MDF",
    finish: "HPL, laminasi, cat duco",
    char: "Permukaan halus, ekonomis",
  },
  {
    name: "Metal / Besi",
    finish: "Powder coat, stainless, raw",
    char: "Kokoh, industrial, tahan lama",
  },
  {
    name: "Particle Board",
    finish: "Melamine, HPL",
    char: "Ringan, cost-effective",
  },
  {
    name: "Aluminium",
    finish: "Anodize, powder coat",
    char: "Anti-karat, ringan, presisi tinggi",
  },
];
</script>
