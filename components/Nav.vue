<script setup>
</script>

<template>
  <div class="w-full">
    <div class="container mx-auto">
      <div class="flex items-center py-4">
        <NuxtLink to="/">
          <img
            src="/logo.png"
            alt="Logo"
            class="h-10"
          >
        </NuxtLink>
        <div class="ml-auto flex gap-2">
          <a
            href="https://github.com/calebanthony/"
            target="_blank"
          >
            <UButton
              icon="mdi:github"
              class="cursor-pointer"
              size="xl"
              color="primary"
              variant="solid"
            />
          </a>
          <a
            href="https://linkedin.com/in/calebanthony"
            target="_blank"
          >
            <UButton
              icon="mdi:linkedin"
              class="cursor-pointer"
              size="xl"
              color="primary"
              variant="solid"
            />
          </a>
          <a
            href="mailto:caleb.m.anthony+website@gmail.com"
          >
            <UButton
              icon="mdi:email"
              class="cursor-pointer"
              size="xl"
              color="primary"
              variant="solid"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
