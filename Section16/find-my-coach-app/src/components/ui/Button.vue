<template>
  <button
    :class="`rounded-full cursor-pointer border px-3 py-2 ${mode === 'ghost' ? 'bg-transparent text-purple-800' : 'bg-purple-800 text-white'}`"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    mode: {
      type: String as PropType<'flat' | 'ghost'>,
      required: true,
      validator: (value: string) => ['flat', 'ghost'].includes(value),
    },
  },
})
</script>
