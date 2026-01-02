<template>
  <section>
    <ul>
      <li :class="{ active: this.modelValue === 'poor' }">
        <button type="button" @click="activate('poor')">Poor</button>
      </li>
      <li :class="{ active: this.modelValue === 'average' }">
        <button type="button" @click="activate('average')">Average</button>
      </li>
      <li :class="{ active: this.modelValue === 'great' }">
        <button type="button" @click="activate('great')">Great</button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      activeOption: this.modelValue,
    };
  },

  methods: {
    activate(type) {
      this.activeOption = type;
      this.$emit('update:modelValue', type);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  gap: 50px;
}
button {
  padding: 10px 20px;
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid gray;
}
li.active button {
  border-color: brown;
  color: brown;
}
</style>
