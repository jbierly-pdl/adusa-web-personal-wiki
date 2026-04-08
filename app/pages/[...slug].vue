<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(
  `content-${route.path}`,
  () => queryCollection('notes').path(route.path).first(),
  { watch: [() => route.path] }
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<template>
  <article v-if="page" class="prose dark:prose-invert max-w-none">
    <ContentRenderer :value="page" />
  </article>
</template>
