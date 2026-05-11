<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-dark border-b border-white/10">
    <div
      class="flex items-center justify-between section-padding py-5 max-w-[100rem] mx-auto w-11/12"
    >
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <span class="text-accent font-grotesk font-bold text-xl tracking-tight"
          >AXIOM<span class="text-white">NEXUS</span></span
        >
      </div>

      <!-- Desktop Nav Links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="item in navItems" :key="item.label">
          <a
            :href="item.href"
            class="font-grotesk text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >{{ item.label }}</a
          >
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center">
        <a
          href="#contact"
          class="font-grotesk text-sm font-semibold uppercase tracking-wider border border-white rounded-full px-6 py-2.5 text-white hover:bg-white hover:text-dark transition-colors"
          >Get a Quote</a
        >
      </div>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <span
          :class="[
            'block w-6 h-0.5 bg-white transition-all',
            mobileOpen ? 'rotate-45 translate-y-2' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-0.5 bg-white transition-all',
            mobileOpen ? 'opacity-0' : '',
          ]"
        />
        <span
          :class="[
            'block w-6 h-0.5 bg-white transition-all',
            mobileOpen ? '-rotate-45 -translate-y-2' : '',
          ]"
        />
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div
      v-if="mobileOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-dark border-t border-white/10 px-5 py-6 flex flex-col gap-5"
    >
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        class="font-grotesk text-sm font-semibold uppercase tracking-widest text-white/80 hover:text-white transition-colors"
        @click="mobileOpen = false"
        >{{ item.label }}</a
      >
      <a
        href="#contact"
        class="font-grotesk text-sm font-semibold uppercase tracking-wider border border-white rounded-full px-6 py-2.5 text-white hover:bg-white hover:text-dark transition-colors text-center"
        @click="mobileOpen = false"
        >Get a Quote</a
      >
    </div>
  </nav>
</template>

<script setup>
const mobileOpen = ref(false);

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];
</script>
