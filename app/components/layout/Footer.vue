<template>
  <footer class="bg-dark border-t border-white/10 pt-16 pb-8">
    <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
      <!-- Top Row -->
      <div class="grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-10 mb-16">
        <!-- Brand col -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <span class="font-grotesk font-bold text-xl text-accent"
            >AXIOM<span class="text-white">NEXUS</span></span
          >
          <p
            class="mt-4 text-white/50 text-sm font-grotesk leading-relaxed max-w-xs"
          >
            Building tomorrow's architectural visions through innovation,
            precision, and sustainable design.
          </p>
        </div>

        <!-- Navigation col -->
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <h4
            class="font-grotesk font-semibold text-sm uppercase tracking-widest text-white mb-5"
          >
            Navigation
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="item in navLinks" :key="item">
              <a
                :href="'#' + item.toLowerCase()"
                class="font-grotesk text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wide"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Follow col -->
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <h4
            class="font-grotesk font-semibold text-sm uppercase tracking-widest text-white mb-5"
          >
            Follow
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="item in socialLinks" :key="item">
              <a
                href="#"
                class="font-grotesk text-sm text-white/50 hover:text-white transition-colors uppercase tracking-wide"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Location col -->
        <div class="col-span-12 lg:col-span-5 flex flex-col min-h-[300px]">
          <h4
            class="font-grotesk font-semibold text-sm uppercase tracking-widest text-white mb-5"
          >
            Location
          </h4>
          <div
            class="w-full flex-1 overflow-hidden border border-white/10 bg-white/5 mb-4 rounded-xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Keden%20No.33,%20Singopuran,%20Sukoharjo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="flex items-start gap-3">
            <svg
              class="w-5 h-5 text-white flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p class="font-grotesk text-sm text-white/70 leading-relaxed">
              Jl. Keden No.33, Dusun III, Singopuran, Kec. Kartasura, Kabupaten
              Sukoharjo, Jawa Tengah 57169
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="font-grotesk text-xs text-white/30 uppercase tracking-widest">
          © {{ new Date().getFullYear() }} AxiomNexus. All rights reserved.
        </p>
        <p class="font-grotesk text-xs text-white/30 uppercase tracking-widest">
          Designed by Framer
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = ["Home", "Portfolio", "Services", "Blog"];
const socialLinks = ["Instagram", "Twitter", "LinkedIn", "YouTube"];
</script>
