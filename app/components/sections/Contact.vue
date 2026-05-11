<template>
  <section id="contact" class="bg-light py-20 md:py-28 section-padding">
    <div class="w-11/12 max-w-[100rem] mx-auto">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-14">
        <BaseBadge variant="light" class="mb-6">Contact Us</BaseBadge>
        <h2 class="font-grotesk font-bold text-dark uppercase leading-tight tracking-tight text-[clamp(2rem,4.5vw,3.5rem)]">
          Start Your <span class="text-dark underline decoration-accent underline-offset-4">Project</span>
        </h2>
        <p class="font-grotesk text-dark/50 text-base leading-relaxed mt-4 max-w-md mx-auto">
          Ready to bring your vision to life? Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>

      <!-- Form -->
      <form class="flex flex-col gap-5" @submit.prevent>
        <!-- Name + Email row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="flex flex-col gap-2">
            <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-dark/60" for="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Architect"
              class="w-full bg-transparent border border-dark/20 rounded-xl px-5 py-3.5 font-grotesk text-dark text-sm placeholder:text-dark/30 focus:outline-none focus:border-dark"
            >
          </div>
          <div class="flex flex-col gap-2">
            <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-dark/60" for="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@studio.com"
              class="w-full bg-transparent border border-dark/20 rounded-xl px-5 py-3.5 font-grotesk text-dark text-sm placeholder:text-dark/30 focus:outline-none focus:border-dark"
            >
          </div>
        </div>

        <!-- Project type -->
        <div class="flex flex-col gap-2">
          <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-dark/60" for="type">
            Project Type
          </label>
          <select
            id="type"
            class="w-full bg-transparent border border-dark/20 rounded-xl px-5 py-3.5 font-grotesk text-dark text-sm focus:outline-none focus:border-dark appearance-none"
          >
            <option value="" disabled selected>Select a service</option>
            <option>Architectural Design</option>
            <option>Interior Design</option>
            <option>Construction Management</option>
            <option>Urban Planning</option>
          </select>
        </div>

        <!-- Message -->
        <div class="flex flex-col gap-2">
          <label class="font-grotesk text-xs font-semibold uppercase tracking-widest text-dark/60" for="message">
            Project Details
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Tell us about your project, timeline, and budget..."
            class="w-full bg-transparent border border-dark/20 rounded-xl px-5 py-3.5 font-grotesk text-dark text-sm placeholder:text-dark/30 focus:outline-none focus:border-dark resize-none"
          />
        </div>

        <!-- Submit -->
        <div class="flex justify-end pt-2">
          <button
            type="submit"
            class="inline-flex items-center gap-2 font-grotesk text-sm font-semibold uppercase tracking-wider rounded-full px-8 py-3.5 bg-dark text-white hover:bg-dark/80 transition-colors"
          >
            Send Inquiry
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
