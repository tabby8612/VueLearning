<template>
  <header>
    <h1>{{ headerTitle }}</h1>
  </header>

  <main>
    <slot></slot>
  </main>
</template>

<script>
export default {
  props: {
    headerTitle: String,
  },

  data: () => {
    return {}
  },
}
</script>

<style scoped>
header {
  background-color: brown;
  color: white;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-items: center;
  justify-content: center;
  width: 60%;
  margin: auto auto;
}
</style>
