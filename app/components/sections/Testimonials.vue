<template>
  <section
    id="testimonials"
    class="bg-dark py-20 md:py-28 section-padding border-b border-white/10 overflow-hidden"
  >
    <div class="w-11/12 max-w-[100rem] mx-auto mb-12">
      <BaseBadge class="mb-6">Testimonials</BaseBadge>
      <h2
        class="font-grotesk font-bold text-white uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]"
      >
        Apa Kata <br /><span class="text-accent">Klien Kami?</span>
      </h2>
    </div>

    <!-- Endless Loop Container -->
    <div class="relative w-11/12 max-w-[100rem] mx-auto overflow-hidden">
      <div class="flex w-max animate-scroll">
        <!-- First set -->
        <div
          v-for="(item, i) in testimonials"
          :key="'first-' + i"
          class="px-3 shrink-0 w-[300px] sm:w-[400px] md:w-[500px]"
        >
          <div
            class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 h-full hover:border-accent/30 transition-colors"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <div class="flex flex-col gap-2">
              <div>
                <h4 class="font-grotesk font-bold text-white text-base">
                  {{ item.name }}
                </h4>
                <p
                  class="font-grotesk text-accent/80 text-xs mt-1 leading-relaxed"
                >
                  {{ item.location }}
                </p>
              </div>
              <p
                class="font-grotesk text-white/70 text-sm leading-relaxed mt-2 italic"
              >
                "{{ item.testimonial }}"
              </p>
            </div>
          </div>
        </div>
        <!-- Duplicated set for seamless loop -->
        <div
          v-for="(item, i) in testimonials"
          :key="'second-' + i"
          class="px-3 shrink-0 w-[300px] sm:w-[400px] md:w-[500px]"
        >
          <div
            class="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-5 h-full hover:border-accent/30 transition-colors"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <div class="flex flex-col gap-2">
              <div>
                <h4 class="font-grotesk font-bold text-white text-base">
                  {{ item.name }}
                </h4>
                <p
                  class="font-grotesk text-accent/80 text-xs mt-1 leading-relaxed"
                >
                  {{ item.location }}
                </p>
              </div>
              <p
                class="font-grotesk text-white/70 text-sm leading-relaxed mt-2 italic"
              >
                "{{ item.testimonial }}"
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Fade Gradients -->
      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-dark to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-dark to-transparent"
      ></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  animation: scroll 90s linear infinite;
}
.animate-scroll:hover {
  animation-play-state: paused;
}
</style>

<script setup>
const testimonials = [
  {
    name: "Rina Wijayanti",
    location: "Perumahan Graha Kartasura Asri, Sukoharjo, Jawa Tengah",
    testimonial:
      "Saya memercayakan renovasi kantor kepada PT. Rombong Raharjo Anarawata, dan mereka tidak mengecewakan! Desainnya modern dan fungsional, sesuai dengan kebutuhan bisnis saya. Prosesnya sangat transparan dan komunikatif.",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Budi Santoso",
    location: "Solo Baru, Grogol, Sukoharjo",
    testimonial:
      "Hasil pembangunan rumah kami sungguh memuaskan. Tim Rombong Raharjo sangat profesional, pengerjaan rapi, dan tepat waktu. Sangat direkomendasikan untuk Anda yang mencari jasa kontraktor terpercaya.",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Andi Pratama",
    location: "Manahan, Banjarsari, Surakarta",
    testimonial:
      "Interior cafe saya disulap menjadi tempat yang super estetik dan nyaman. Setiap detail diperhatikan dengan baik. Terima kasih Rombong Raharjo!",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Siti Aisyah",
    location: "Colomadu, Karanganyar",
    testimonial:
      "Awalnya ragu untuk merenovasi rumah tua kami, tapi setelah konsultasi, solusinya sangat masuk akal dan harganya transparan. Hasil akhirnya luar biasa.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Hendra Gunawan",
    location: "Klaten Tengah, Klaten",
    testimonial:
      "Pelayanan yang luar biasa dari awal desain hingga serah terima kunci. Kualitas material yang digunakan sangat bagus dan sesuai dengan ekspektasi.",
    image: "https://i.pravatar.cc/150?img=15",
  },
];
</script>
