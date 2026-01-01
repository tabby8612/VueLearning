<template>
  <section>
    <ul>
      <li v-for="goal in this.goals" :key="goal.title">
        <slot :item="goal" another-prop="..."></slot>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      goals: [
        {
          title: "Complete Vue Course",
          description: "Complete Vue Course in 2 weeks",
        },
        {
          title: "Create Vue Projects",
          description: "Complete Two Vue Projects in 1 week",
        },
      ],
    };
  },
};
</script>
