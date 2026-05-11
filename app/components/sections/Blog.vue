<template>
  <section id="blog" class="bg-dark py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div>
        <BaseBadge class="mb-6">Our Blog</BaseBadge>
        <h2 class="font-grotesk font-bold text-white uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Latest <span class="text-accent">Insights</span>
        </h2>
      </div>
      <BaseButton href="#" variant="outline-light" arrow>All Articles</BaseButton>
    </div>

    <!-- 2×2 article grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <article
        v-for="post in posts"
        :key="post.title"
        class="group flex flex-col rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-colors"
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
            <BaseBadge>{{ post.category }}</BaseBadge>
            <span class="font-grotesk text-xs text-white/30">{{ post.date }}</span>
          </div>
          <h3 class="font-grotesk font-semibold text-white text-lg leading-snug group-hover:text-accent transition-colors">
            {{ post.title }}
          </h3>
          <p class="font-grotesk text-white/50 text-sm leading-relaxed flex-1">
            {{ post.excerpt }}
          </p>
          <a href="#" class="font-grotesk text-accent text-sm font-semibold uppercase tracking-widest flex items-center gap-2 mt-2">
            Read Article
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
    category: 'Sustainability',
    date: 'Mar 12, 2025',
    title: 'The Future of Green Architecture in Urban Environments',
    excerpt: 'How living walls, passive design, and biophilic principles are reshaping our cities for a sustainable tomorrow.',
  },
  {
    img: '/images/blog-2.jpg',
    category: 'Interior Design',
    date: 'Feb 28, 2025',
    title: 'Spa-Inspired Bathroom Trends Defining Luxury in 2025',
    excerpt: 'Explore the materials, forms, and lighting philosophies behind the most stunning residential bathrooms.',
  },
  {
    img: '/images/blog-3.jpg',
    category: 'Technology',
    date: 'Feb 10, 2025',
    title: 'Smart Homes: Integrating Technology Without Sacrificing Aesthetics',
    excerpt: 'A deep dive into how top designers seamlessly weave automation into premium interiors.',
  },
  {
    img: '/images/blog-4.jpg',
    category: 'Outdoor Living',
    date: 'Jan 22, 2025',
    title: 'Rooftop Terraces as the New Urban Oasis',
    excerpt: 'From private gardens to entertainment decks, rooftop design is elevating the urban residential experience.',
  },
]
</script>
