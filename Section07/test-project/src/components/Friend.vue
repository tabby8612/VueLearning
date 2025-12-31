<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    fullName: String,
    phoneNumber: String,
    email: String,
    id: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  //   emits: {
  //     toggleFriendFavorite: (id) => {
  //       if (id) {
  //         return true
  //       } else {
  //         console.warn(`Id is missing`)
  //         return false
  //       }
  //     },
  //   },

  emits: ['toggleFriendFavorite'],

  data() {
    return {
      isVisible: true,
      friendFavorite: this.isFavorite,
    }
  },

  methods: {
    toggleVisibity() {
      this.isVisible = !this.isVisible
    },

    toggleFavorite() {
      this.$emit('toggleFriendFavorite', this.id)
    },
  },
})
</script>

<template>
  <li>
    <h2>{{ fullName }} - {{ this.friendFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleVisibity">{{ this.isVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite(id)">
      {{ this.friendFavorite ? 'Remove' : 'Add' }} Favorite
    </button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ email }}</li>
    </ul>
  </li>
</template>
