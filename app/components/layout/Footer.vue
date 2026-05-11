<template>
  <footer class="bg-stone-950 border-t border-stone-800 pt-16 pb-8">
    <div class="w-11/12 max-w-[100rem] mx-auto section-padding">
      <!-- Top Row -->
      <div class="grid grid-cols-12 gap-y-10 gap-x-6 lg:gap-10 mb-16">
        <!-- Brand col -->
        <div class="col-span-12 md:col-span-6 lg:col-span-3">
          <NuxtLink to="/" class="flex items-center gap-2.5 mb-4">
            <img src="/images/rombong-logo.png" alt="Rombong Raharjo" class="h-16 w-auto" />
            <span class="font-grotesk font-black text-lg tracking-tight leading-none">
              <span class="text-orange-500">ROMBONG</span> <span class="text-stone-50">RAHARJO</span>
            </span>
          </NuxtLink>
          <p class="mt-4 text-stone-300 text-sm font-grotesk leading-relaxed max-w-xs">
            Menghadirkan solusi arsitektur, konstruksi, interior, dan furniture
            custom dengan pengerjaan profesional dan terukur.
          </p>
          <ul class="mt-5 flex flex-col gap-3">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:02717851871" class="font-grotesk text-base text-stone-300 hover:text-orange-300 transition-colors">0271-7851871</a>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-orange-400 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.04 3.2c-7.04 0-12.76 5.72-12.76 12.76 0 2.25.59 4.45 1.72 6.39L3.16 29.1l6.91-1.81a12.7 12.7 0 0 0 5.97 1.52h.01c7.04 0 12.76-5.72 12.76-12.76 0-3.41-1.33-6.61-3.74-9.03a12.68 12.68 0 0 0-9.03-3.82Zm0 23.45h-.01c-1.9 0-3.76-.51-5.39-1.48l-.39-.23-4.1 1.08 1.09-4-.26-.41a10.56 10.56 0 0 1-1.62-5.65c0-5.89 4.79-10.69 10.69-10.69 2.85 0 5.54 1.11 7.55 3.13a10.62 10.62 0 0 1 3.13 7.56c0 5.89-4.79 10.69-10.69 10.69Zm5.86-8c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.57.08-.86.4-.29.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z" />
              </svg>
              <a href="https://wa.me/6282242058673" target="_blank" rel="noopener noreferrer" class="font-grotesk text-base text-stone-300 hover:text-orange-300 transition-colors">+62 822-4205-8673</a>
            </li>
          </ul>
        </div>

        <!-- Navigation col -->
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <h4
            class="font-grotesk font-semibold text-sm uppercase tracking-widest text-stone-50 mb-5"
          >
            Navigasi
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="item in navLinks" :key="item.label">
              <a
                :href="item.href"
                class="font-grotesk text-sm text-stone-300 hover:text-orange-300 focus-visible:outline-none focus-visible:text-orange-300 transition-colors uppercase tracking-wide"
                >{{ item.label }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Follow col -->
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <h4
            class="font-grotesk font-semibold text-sm uppercase tracking-widest text-stone-50 mb-5"
          >
            Ikuti
          </h4>
          <ul class="flex flex-col gap-3">
            <li v-for="item in socialLinks" :key="item">
              <a
                href="#"
                class="font-grotesk text-sm text-stone-300 hover:text-orange-300 focus-visible:outline-none focus-visible:text-orange-300 transition-colors uppercase tracking-wide"
                >{{ item }}</a
              >
            </li>
          </ul>
        </div>

        <!-- Location col -->
        <div class="col-span-12 lg:col-span-5 flex flex-col min-h-[300px]">
          <h4
            class="font-grotesk font-semibold text-sm uppercase tracking-widest text-stone-50 mb-5"
          >
            Lokasi
          </h4>
          <div
            class="w-full flex-1 overflow-hidden border border-stone-800 bg-stone-900 mb-4 rounded-xl shadow-lg shadow-stone-950/20"
          >
            <iframe
              src="https://maps.google.com/maps?q=Jl.%20Keden%20No.33,%20Singopuran,%20Sukoharjo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <div class="flex items-start gap-3">
            <svg
              class="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
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
            <p class="font-grotesk text-sm text-stone-300 leading-relaxed">
              Jl. Keden No.33, Dusun III, Singopuran, Kec. Kartasura, Kabupaten
              Sukoharjo, Jawa Tengah 57169
            </p>
          </div>
        </div>

      </div>

      <!-- Divider -->
      <div
        class="border-t border-stone-800 pt-8 flex flex-col items-center justify-between"
      >
        <p class="font-grotesk text-xs text-stone-500 uppercase tracking-widest">
          &copy; {{ new Date().getFullYear() }} Rombong Raharjo. Hak cipta dilindungi.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { label: "Beranda", href: "/#hero" },
  { label: "Portofolio", href: "/#portfolio" },
  { label: "Layanan", href: "/#services" },
  { label: "FAQ", href: "/#faq" },
  { label: "Artikel", href: "/#blog" },
];
const socialLinks = ["Instagram", "Twitter", "LinkedIn", "YouTube"];
</script>
