<script lang="ts">
import { computed } from 'vue'
import AppLayout from './components/layouts/AppLayout.vue'
import AddResource from './components/ui/AddResource.vue'
import ResourceSelector from './components/ui/ResourceSelector.vue'
import StoredResources from './components/ui/StoredResources.vue'

type Resource = {
  title: string
  description: string
  href: string
  id: string
}

export default {
  components: {
    AppLayout,
    ResourceSelector,
    StoredResources,
    AddResource,
  },

  provide() {
    return {
      resources: computed(() => this.resources),
      deleteResource: this.deleteHandler,
      addResource: this.addHandler,
    }
  },

  data() {
    return {
      selectedResource: 'StoredResources',
      resources: [
        {
          id: '1',
          title: 'Vue JS Official Guide',
          description: 'The Official Vue.js Documentation',
          href: 'https://vuejs.org',
        },
        {
          id: '2',
          title: 'React JS Official Guide',
          description: 'The Official React Documentation',
          href: 'https://react.dev',
        },
        {
          id: '3',
          title: 'Laravel PHP Official Guide',
          description: 'The Official Laravel Documentation',
          href: 'https://laravel.com/docs/12.x/',
        },
      ],
    }
  },

  methods: {
    resourceSelector(key: string) {
      this.selectedResource = key
    },

    deleteHandler(id: string) {
      this.resources = this.resources.filter((resource) => resource.id !== id)
    },

    addHandler(title: string, desc: string, href: string) {
      const newResource: Resource = {
        id: Math.round(Math.random() * 100).toString(),
        title: title,
        description: desc,
        href: href,
      }

      this.resources.push(newResource)
    },
  },
}
</script>

<template>
  <AppLayout headerTitle="Learning Resource">
    <ResourceSelector @resourceSelector="resourceSelector" />
    <component :is="selectedResource"></component>
  </AppLayout>
</template>

<style>
body {
  margin: 0;
}
</style>
