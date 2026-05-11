<template>
  <div class="fixed bottom-5 right-5 z-[60] flex items-center gap-3 md:bottom-7 md:right-7">
    <a
      :href="whatsappHref"
      target="_blank"
      rel="noopener noreferrer"
      class="rounded-xl bg-white px-5 py-3 font-grotesk text-base font-medium text-stone-900 shadow-xl shadow-stone-950/20 ring-1 ring-stone-200 transition-all hover:-translate-y-0.5 hover:bg-stone-50 hover:shadow-2xl hover:shadow-stone-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
    >
      Hubungi Kami!
    </a>
    <a
      :href="whatsappHref"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi kami lewat WhatsApp"
      class="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-stone-950/20  transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d] hover:shadow-2xl hover:shadow-stone-950/25 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-500"
    >
      <svg
        class="h-10 w-10"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.04 3.2c-7.04 0-12.76 5.72-12.76 12.76 0 2.25.59 4.45 1.72 6.39L3.16 29.1l6.91-1.81a12.7 12.7 0 0 0 5.97 1.52h.01c7.04 0 12.76-5.72 12.76-12.76 0-3.41-1.33-6.61-3.74-9.03a12.68 12.68 0 0 0-9.03-3.82Zm0 23.45h-.01c-1.9 0-3.76-.51-5.39-1.48l-.39-.23-4.1 1.08 1.09-4-.26-.41a10.56 10.56 0 0 1-1.62-5.65c0-5.89 4.79-10.69 10.69-10.69 2.85 0 5.54 1.11 7.55 3.13a10.62 10.62 0 0 1 3.13 7.56c0 5.89-4.79 10.69-10.69 10.69Zm5.86-8c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.38.48-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.57.08-.86.4-.29.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z"
        />
      </svg>
    </a>
  </div>
</template>

<script setup>
const whatsappHref =
  'https://wa.me/?text=Halo%20Rombong%20Raharjo%2C%20saya%20ingin%20konsultasi%20proyek.'
</script>
