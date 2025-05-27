<script setup>
defineProps({
  image: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="bg-neutral-800 rounded-lg shadow-sm shadow-primary-900 ring-2 ring-black/10">
    <div class="flex gap-2 bg-neutral-900/50 rounded-t-lg">
      <img
        v-if="image"
        :src="image"
        class="w-20 object-cover p-2 bg-neutral-300 rounded-tl-lg"
      >
      <div class="py-2">
        <slot name="title" />
      </div>
    </div>
    <div class="p-4 rounded-b-lg">
      <slot name="description" />
    </div>
  </div>
</template>
