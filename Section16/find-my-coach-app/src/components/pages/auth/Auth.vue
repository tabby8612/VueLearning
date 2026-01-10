<script lang="ts">
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'

export default {
  components: {
    Button,
    Card,
  },

  data() {
    return {
      email: '',
      password: '',
      formIsValid: false,
      mode: 'login',
    }
  },

  computed: {
    mainButtonText() {
      if (this.mode === 'login') {
        return 'Login'
      } else {
        return 'Signup'
      }
    },

    alternativeButtonText() {
      if (this.mode === 'login') {
        return 'Signup'
      } else {
        return 'Login'
      }
    },
  },

  methods: {
    submitForm() {},

    switchMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
  },
}
</script>

<template>
  <Card>
    <form action="">
      <div>
        <label for="email" class="block text-lg font-bold">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          v-model="email"
          class="border mt-2 px-1.5 py-2 rounded w-full"
        />
      </div>
      <div class="mt-5">
        <label for="password" class="block text-lg font-bold">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          class="border mt-2 px-1.5 py-2 rounded w-full"
        />
      </div>
      <div class="mt-5 flex gap-5 items-center">
        <Button mode="flat" @on-click="submitForm">{{ mainButtonText }}</Button>
        <Button mode="ghost" @on-click="switchMode">{{ alternativeButtonText }} Instead</Button>
      </div>
    </form>
  </Card>
</template>
