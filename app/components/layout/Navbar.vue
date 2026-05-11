<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-stone-950/95 border-b border-stone-800/80 shadow-lg shadow-stone-950/20 backdrop-blur">
    <div
      class="flex items-center justify-between section-padding py-5 max-w-[100rem] mx-auto w-11/12"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2.5">
        <img src="/images/rombong-logo.png" alt="Rombong Raharjo" class="h-12 w-auto" />
        <span class="font-grotesk font-black text-lg tracking-tight leading-none">
          <span class="text-orange-500">ROMBONG</span> <span class="text-stone-50">RAHARJO</span>
        </span>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="font-grotesk text-sm font-semibold uppercase tracking-widest text-stone-200 hover:text-orange-300 focus-visible:outline-none focus-visible:text-orange-300 transition-colors"
            >{{ item.label }}</a
          >
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center">
        <a
          href="/#contact"
          class="font-grotesk text-sm font-semibold uppercase tracking-wider border border-orange-500 rounded-full px-6 py-2.5 text-white bg-orange-600 hover:bg-orange-700 hover:border-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 transition-colors shadow-sm shadow-orange-950/20"
          >Konsultasi</a
        >
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 rounded-md"
        aria-label="Buka menu navigasi"
        @click="mobileOpen = !mobileOpen"
      >
        <span
          :class="[
            'block w-6 h-0.5 bg-stone-50 transition-all',
            mobileOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-0.5 bg-stone-50 transition-all',
            mobileOpen ? 'opacity-0' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-0.5 bg-stone-50 transition-all',
            mobileOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        />
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="mobileOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-stone-950 border-t border-stone-800 px-5 py-6 flex flex-col gap-5 shadow-xl shadow-stone-950/30"
    >
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        class="font-grotesk text-sm font-semibold uppercase tracking-widest text-stone-200 hover:text-orange-300 focus-visible:outline-none focus-visible:text-orange-300 transition-colors"
        @click="mobileOpen = false"
        >{{ item.label }}</a
      >
      <a
        href="/#contact"
        class="font-grotesk text-sm font-semibold uppercase tracking-wider border border-orange-500 rounded-full px-6 py-2.5 text-white bg-orange-600 hover:bg-orange-700 hover:border-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 transition-colors text-center shadow-sm shadow-orange-950/20"
        @click="mobileOpen = false"
        >Konsultasi</a
      >
    </div>
  </nav>
</template>

<script setup>
const mobileOpen = ref(false);

const navItems = [
  { label: "Beranda", href: "/#hero" },
  { label: "Portofolio", href: "/#portfolio" },
  { label: "Layanan", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Artikel", href: "/#blog" },
];
</script>
