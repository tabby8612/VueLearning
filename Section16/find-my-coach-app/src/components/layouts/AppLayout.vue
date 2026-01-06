<template>
  <TheHeader />

  <section class="my-5 w-12/12 mx-auto">
    <slot></slot>
  </section>

  <!-- <CoachSelector />

  <Card>
    <section class="">
      <Button mode="ghost">Refresh</Button>

      <CoachCard id="1" full-name="Tabish" rate-per-hr="10" :services="['backend']" />
      <CoachCard id="1" full-name="Danish" rate-per-hr="10" :services="['backend', 'frontend']" />
      <CoachCard
        id="1"
        full-name="Sumbul"
        rate-per-hr="10"
        :services="['backend', 'frontend', 'career']"
      />
    </section>
  </Card> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '../TheHeader.vue'
import CoachSelector from '../CoachSelector.vue'
import Card from '../ui/Card.vue'
import Button from '../ui/Button.vue'
import Tag from '../ui/Tag.vue'
import CoachCard from '../ui/CoachCard.vue'

export default defineComponent({
  components: {
    TheHeader,
    CoachSelector,
    Card,
    Button,
    Tag,
    CoachCard,
  },
})
</script>
