<template>
  <section id="blog" class="bg-stone-950 py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div>
        <h2 class="font-grotesk font-bold text-stone-50 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Insight <span class="text-orange-400">Terbaru</span>
        </h2>
      </div>
      <BaseButton href="#" variant="outline-light" arrow>Semua Artikel</BaseButton>
    </div>

    <!-- 2x2 article grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <article
        v-for="post in posts"
        :key="post.title"
        class="group flex flex-col rounded-2xl overflow-hidden border border-stone-200 bg-white hover:border-orange-300 hover:shadow-xl hover:shadow-stone-950/20 transition-colors"
      >
        <!-- Thumbnail -->
        <div class="aspect-video overflow-hidden">
          <img
            :src="post.img"
            :alt="post.title"
            class="w-full h-full object-cover"
          >
        </div>
        <!-- Content -->
        <div class="p-6 flex flex-col gap-3 flex-1">
          <div class="flex items-center gap-3">
            <span class="font-grotesk text-xs text-stone-500">{{ post.date }}</span>
          </div>
          <h3 class="font-grotesk font-semibold text-stone-950 text-lg leading-snug group-hover:text-orange-600 transition-colors">
            {{ post.title }}
          </h3>
          <p class="font-grotesk text-stone-600 text-sm leading-relaxed flex-1">
            {{ post.excerpt }}
          </p>
          <a href="#" class="font-grotesk text-orange-600 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm text-sm font-semibold uppercase tracking-widest flex items-center gap-2 mt-2">
            Baca Artikel
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const posts = [
  {
    img: '/images/blog-1.jpg',
    category: 'Arsitektur Hijau',
    date: '12 Mar 2025',
    title: 'Masa Depan Arsitektur Hijau untuk Lingkungan Perkotaan',
    excerpt: 'Bagaimana pencahayaan alami, ventilasi pasif, dan prinsip biophilic membantu menciptakan bangunan yang lebih sehat dan hemat energi.',
  },
  {
    img: '/images/blog-2.jpg',
    category: 'Desain Interior',
    date: '28 Feb 2025',
    title: 'Tren Kamar Mandi Modern yang Nyaman dan Mewah',
    excerpt: 'Memahami pemilihan material, bentuk, dan pencahayaan yang membuat ruang mandi terasa lebih rapi, tenang, dan fungsional.',
  },
  {
    img: '/images/blog-3.jpg',
    category: 'Teknologi',
    date: '10 Feb 2025',
    title: 'Rumah Pintar Tanpa Mengorbankan Estetika Interior',
    excerpt: 'Cara mengintegrasikan teknologi otomatisasi rumah ke dalam desain interior agar tetap bersih, elegan, dan mudah digunakan.',
  },
  {
    img: '/images/blog-4.jpg',
    category: 'Ruang Luar',
    date: '22 Jan 2025',
    title: 'Teras Atap sebagai Ruang Santai Keluarga Modern',
    excerpt: 'Dari area hijau pribadi hingga ruang berkumpul, desain rooftop dapat meningkatkan kenyamanan hunian di kawasan padat.',
  },
]
</script>
