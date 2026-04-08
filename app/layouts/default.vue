<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div class="min-h-screen">
    <header class="border-b">
      <div class="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <BrandLogo />

        <div class="flex items-center gap-2">
          <UButton
            :icon="colorMode.value === 'dark' ? 'i-tabler-sun' : 'i-tabler-moon'"
            aria-label="Toggle color mode"
            color="neutral"
            variant="soft"
            size="sm"
            @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
          />
        </div>
      </div>
    </header>

    <main class="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>
