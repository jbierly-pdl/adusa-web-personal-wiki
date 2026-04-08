<script setup lang="ts">
const { data: notes } = await useAsyncData(
  'notes-index',
  () => queryCollection('notes').all()
)
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Notes</h1>
    <ul v-if="notes?.length" class="space-y-4">
      <li v-for="note in notes" :key="note.path">
        <NuxtLink
          :to="note.path"
          class="block rounded-lg border p-4 transition-colors hover:bg-elevated"
        >
          <h2 class="text-lg font-semibold">
            {{ note.title }}
          </h2>
          <p v-if="note.description" class="text-muted mt-1">
            {{ note.description }}
          </p>
          <div v-if="note.tags?.length" class="flex gap-2 mt-2">
            <UBadge
              v-for="tag in note.tags"
              :key="tag"
              :label="tag"
              variant="soft"
              size="sm"
            />
          </div>
        </NuxtLink>
      </li>
    </ul>
    <p v-else class="text-muted">No notes yet. Add markdown files to the <code>content/</code> directory.</p>
  </div>
</template>
