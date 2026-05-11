<template>
  <section id="contact" class="bg-orange-50/30 py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-14">
        <h2 class="font-grotesk font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Mulai <span class="text-orange-600 underline decoration-orange-500 underline-offset-4">Proyek Anda</span>
        </h2>
        <p class="font-grotesk text-stone-600 text-base leading-relaxed mt-4 max-w-md mx-auto">
          Siap mewujudkan ruang impian Anda? Ceritakan kebutuhan proyek Anda dan tim kami akan segera menghubungi Anda.
        </p>
      </div>

      <!-- Form -->
      <form class="flex flex-col gap-5" @submit.prevent>
        <!-- Name + Email row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="flex flex-col gap-2">
            <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-stone-700" for="name">
              Nama Lengkap
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nama Anda"
              class="w-full bg-white border border-stone-300 rounded-xl px-5 py-3.5 font-grotesk text-stone-950 text-sm placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            >
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-stone-700" for="email">
              Alamat Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="nama@email.com"
              class="w-full bg-white border border-stone-300 rounded-xl px-5 py-3.5 font-grotesk text-stone-950 text-sm placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            >
          </div>
        </div>

        <!-- Project type -->
        <div class="flex flex-col gap-2">
          <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-stone-700" for="type">
            Jenis Proyek
          </label>
          <select
            id="type"
            class="w-full bg-white border border-stone-300 rounded-xl px-5 py-3.5 font-grotesk text-stone-950 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 appearance-none shadow-sm"
          >
            <option value="" disabled selected>Pilih layanan</option>
            <option>Desain Arsitektur</option>
            <option>Desain Interior</option>
            <option>Kontraktor & Konstruksi</option>
            <option>Furniture Custom</option>
          </select>
        </div>

        <!-- Message -->
        <div class="flex flex-col gap-2">
          <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-stone-700" for="message">
            Detail Proyek
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Ceritakan kebutuhan ruang, lokasi, timeline, dan estimasi anggaran Anda..."
            class="w-full bg-white border border-stone-300 rounded-xl px-5 py-3.5 font-grotesk text-stone-950 text-sm placeholder:text-stone-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 resize-none shadow-sm"
          />
        </div>

        <!-- Submit -->
        <div class="flex justify-end pt-2">
          <button
            type="submit"
            class="inline-flex items-center gap-2 font-grotesk text-sm font-semibold uppercase tracking-wider rounded-full px-8 py-3.5 bg-orange-600 text-white hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-50 transition-colors shadow-sm shadow-orange-900/10"
          >
            Kirim Pertanyaan
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
    </div>
  </section>
</template>
