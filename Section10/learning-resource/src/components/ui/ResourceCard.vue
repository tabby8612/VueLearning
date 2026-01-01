<template>
  <section>
    <div>
      <h2>{{ title }}</h2>
      <p
        @click="deleteHandler(id)"
        style="color: blueviolet; text-decoration: underline; cursor: pointer"
      >
        Delete
      </p>
    </div>
    <p>{{ description }}</p>
    <p><a :href="href" target="_blank">View Resource</a></p>
  </section>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    href: String,
  },

  methods: {
    deleteHandler(id) {
      this.$emit('deleteResource', id)
    },
  },
}
</script>

<style scoped>
section {
  /* background-color: cadetblue; */
  padding: 10px 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px gray;
  margin: 40px 0px;
}

section > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
