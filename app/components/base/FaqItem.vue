<template>
  <div
    class="group cursor-pointer border bg-white p-6 shadow-sm shadow-stone-900/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
    :class="[
      isOpen
        ? 'border-orange-300 shadow-xl shadow-stone-900/10'
        : 'border-stone-200 hover:border-orange-300',
    ]"
    role="button"
    tabindex="0"
    :aria-expanded="isOpen.toString()"
    @click="toggle"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <div
      class="flex items-start justify-between gap-5 font-grotesk text-base font-semibold text-stone-950 md:text-lg"
    >
      <span>{{ question }}</span>
      <span
        class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-orange-200 bg-orange-50 text-orange-600 transition-transform duration-300"
        :class="isOpen ? 'rotate-45' : ''"
        aria-hidden="true"
      >
        +
      </span>
    </div>

    <div
      class="grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out"
      :class="isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'"
    >
      <div class="overflow-hidden">
        <p class="font-grotesk text-sm leading-relaxed text-stone-600 md:text-base">
          {{ answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

defineProps({
  question: { type: String, required: true },
  answer: { type: String, required: true },
})
</script>
