<template>
  <li
    :class="`border rounded-2xl px-3 py-1.5 text-sm text-white font-semibold ${type === 'frontend' && 'bg-blue-900'} ${type === 'career' && 'bg-pink-900'} ${type === 'backend' && 'bg-purple-900'}`"
  >
    {{ type.toUpperCase() }}
  </li>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
      validator: (value: string) => ['frontend', 'backend', 'career'].includes(value),
    },
  },
})
</script>
