<template>
  <section>
    <div v-if="this.resources.length === 0">
      <h1>No resource available</h1>
    </div>
    <ul v-else>
      <li v-for="resource in this.resources">
        <ResourceCard
          :id="resource.id"
          :title="resource.title"
          :description="resource.description"
          :href="resource.href"
          @deleteResource="deleteResource(resource.id)"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import ResourceCard from './ResourceCard.vue'

export default {
  components: {
    ResourceCard,
  },

  inject: ['resources', 'deleteResource'],
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-inline-start: 0px;
}
</style>
