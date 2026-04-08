## 1. Install mermaid

```
npm install mermaid
```

## 2. Create the plugin

```
// plugins/mermaid.client.ts
import mermaid from 'mermaid'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      mermaid: () => mermaid,
    },
  }
})
```

## 3. Create the component

```vue
<!-- components/content/Mermaid.vue -->
<script setup lang="ts">
const { $mermaid } = useNuxtApp()
const el = ref<HTMLElement | null>(null)
const show = ref(false)

onMounted(async () => {
  show.value = true
  await nextTick()

  $mermaid().initialize({
    startOnLoad: false,
    theme: 'dark',        // or 'default', 'neutral', 'forest'
    securityLevel: 'loose',
  })

  if (el.value) {
    await $mermaid().run({ nodes: [el.value] })
  }
})
</script>

<template>
  <div v-if="show" ref="el" class="mermaid">
    <slot />
  </div>
</template>

<style>
.mermaid:not([data-processed]) {
  color: transparent;
}
</style>
```

## 4. Use it in your markdown

```
# My Document

Here's a flowchart:

::mermaid
graph LR
  A[Start] --> B{Decision}
  B -->|Yes| C[Do thing]
  B -->|No| D[Skip]
::
```

That's it. No config changes needed -- Nuxt Content auto-discovers components in components/content/.

---

**Key details:**

- The .client.ts plugin ensures mermaid only loads on the client (it uses DOM APIs that don't exist server-side)
- The run() method is the modern mermaid API (replaces the old init())
- The CSS hides the raw text flash before it's processed
- Works with Nuxt Content v2 and v3