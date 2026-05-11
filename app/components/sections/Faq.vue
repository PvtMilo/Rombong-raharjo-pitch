<template>
  <section id="faq" class="bg-stone-50 py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[60rem] mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
        <div class="max-w-3xl">
          <h2 class="font-grotesk font-bold text-stone-950 uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
            Pertanyaan yang<br>
            <span class="text-orange-600">Sering Diajukan</span>
          </h2>
        </div>
        <p class="font-grotesk text-stone-600 text-base leading-relaxed max-w-sm lg:max-w-xs xl:max-w-sm lg:text-right">
          Temukan jawaban seputar layanan arsitektur, interior, konstruksi, furniture custom, dan proses kerja kami.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <BaseFaqItem
          v-for="item in faqs"
          :key="item.question"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: 'Apa saja layanan utama PT Rombong Raharjo Anarawata?',
    answer:
      'Layanan utama kami mencakup kontraktor arsitektur (design & build), desain interior untuk berbagai jenis ruang seperti rumah, kantor, dan retail, serta pembuatan furniture custom yang menyesuaikan kebutuhan dan estetika klien.',
  },
  {
    question: 'Apakah saya bisa hanya memesan jasa desain tanpa menggunakan jasa konstruksi?',
    answer:
      'Ya, kami menyediakan fleksibilitas bagi klien yang hanya membutuhkan jasa konsultasi dan desain arsitektur maupun interior tanpa harus menggunakan jasa konstruksi dari kami.',
  },
  {
    question: 'Apakah bisa membuat furniture sesuai ukuran dan desain sendiri?',
    answer:
      'Bisa. Kami memproduksi furniture custom yang dapat disesuaikan sepenuhnya dengan dimensi ruangan, fungsi yang dibutuhkan, serta cita rasa desain pribadi Anda.',
  },
  {
    question: 'Berapa lama waktu pengerjaan untuk proyek arsitektur atau interior?',
    answer:
      'Waktu pengerjaan sangat bervariasi tergantung pada skala dan kompleksitas proyek. Untuk tahap desain biasanya memakan waktu 2-4 minggu, sedangkan tahap konstruksi atau produksi furniture dapat memakan waktu 1-4 bulan. Estimasi jadwal yang lebih akurat akan diberikan setelah ruang lingkup pekerjaan disepakati.',
  },
  {
    question: 'Apakah proyek di luar Jawa Tengah bisa dilayani?',
    answer:
      'Ya, kami melayani proyek di seluruh Indonesia. Untuk proyek di luar wilayah Solo Raya seperti Sukoharjo, Solo, Boyolali, dan Karanganyar, akan ada penyesuaian biaya terkait mobilisasi tim dan pengiriman material sesuai dengan lokasi proyek.',
  },
  {
    question: 'Bagaimana metode pembayaran yang tersedia?',
    answer:
      'Kami menggunakan sistem pembayaran bertahap (termin) sesuai dengan kemajuan pekerjaan di lapangan. Pembayaran dapat dilakukan melalui transfer bank ke rekening resmi perusahaan kami guna memastikan keamanan dan transparansi transaksi.',
  },
]
</script>
