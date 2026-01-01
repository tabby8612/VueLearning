<template>
  <section>
    <div
      :class="selectedResource === 'storedResources' ? 'active' : ''"
      @click="handleSelectedResource('storedResources')"
    >
      <h3>Stored Resources</h3>
    </div>
    <div
      :class="selectedResource === 'addResource' ? 'active' : ''"
      @click="handleSelectedResource('addResource')"
    >
      <h3>Add Resources</h3>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      selectedResource: 'storedResources',
    }
  },

  emits: ['resourceSelector'],

  methods: {
    handleSelectedResource(key) {
      this.selectedResource = key
      this.$emit('resourceSelector', key)
    },
  },
}
</script>

<style scoped>
section {
  /* background-color: blue; */
  margin: 50px 0px;
  box-shadow: 0px 0px 10px gray;
  border-radius: 10px;
  border: 0px solid gray;
  padding: 0px 10px;
  display: flex;
  gap: 20px;
}

section div {
  /* background-color: bisque; */
  padding: 3px 15px;
  margin: 10px 0px;
  border-radius: 10px;
  cursor: pointer;
}

section div:hover {
  background-color: bisque;
}

.active {
  background-color: brown;
  color: white;
}
.active:hover {
  background-color: brown;
  color: white;
}
</style>
