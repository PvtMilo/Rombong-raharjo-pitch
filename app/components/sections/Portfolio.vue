<template>
  <section id="portfolio" class="bg-dark py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
      <div>
        <BaseBadge class="mb-6">Our Portfolio</BaseBadge>
        <h2 class="font-grotesk font-bold text-white uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Featured<br><span class="text-accent">Projects</span>
        </h2>
      </div>
      <BaseButton href="#" variant="outline-light" arrow>View All Projects</BaseButton>
    </div>

    <!-- Masonry-style 2-col grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      <!-- Left column — tall item first, then small -->
      <div class="flex flex-col gap-4 lg:gap-6">
        <!-- Tall card -->
        <div class="relative rounded-2xl overflow-hidden group" style="aspect-ratio: 4/5;">
          <img
            src="/images/portfolio-1.jpg"
            alt="Skyline Residence Interior"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-dark/40" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
            <BaseBadge variant="light">Residential</BaseBadge>
            <h3 class="font-grotesk font-bold text-white text-xl uppercase tracking-wide mt-2">Skyline Residence</h3>
            <p class="font-grotesk text-white/60 text-sm">New York, USA</p>
          </div>
        </div>
        <!-- Short card -->
        <div class="relative rounded-2xl overflow-hidden group" style="aspect-ratio: 16/9;">
          <img
            src="/images/portfolio-3.jpg"
            alt="Nexus Tower Commercial"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-dark/40" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
            <BaseBadge variant="light">Commercial</BaseBadge>
            <h3 class="font-grotesk font-bold text-white text-xl uppercase tracking-wide mt-2">Nexus Tower</h3>
            <p class="font-grotesk text-white/60 text-sm">Dubai, UAE</p>
          </div>
        </div>
      </div>

      <!-- Right column — small first, then tall -->
      <div class="flex flex-col gap-4 lg:gap-6">
        <!-- Short card -->
        <div class="relative rounded-2xl overflow-hidden group" style="aspect-ratio: 16/9;">
          <img
            src="/images/portfolio-2.jpg"
            alt="Villa Natura Exterior"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-dark/40" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
            <BaseBadge variant="light">Residential</BaseBadge>
            <h3 class="font-grotesk font-bold text-white text-xl uppercase tracking-wide mt-2">Villa Natura</h3>
            <p class="font-grotesk text-white/60 text-sm">Barcelona, Spain</p>
          </div>
        </div>
        <!-- Tall card -->
        <div class="relative rounded-2xl overflow-hidden group" style="aspect-ratio: 4/5;">
          <img
            src="/images/portfolio-4.jpg"
            alt="The Pantry Kitchen Interior"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-dark/40" />
          <div class="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
            <BaseBadge variant="light">Interior</BaseBadge>
            <h3 class="font-grotesk font-bold text-white text-xl uppercase tracking-wide mt-2">The Pantry</h3>
            <p class="font-grotesk text-white/60 text-sm">London, UK</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>
