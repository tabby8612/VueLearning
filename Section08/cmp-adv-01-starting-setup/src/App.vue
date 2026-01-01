<template>
  <!-- <base-card>
    <template v-slot:header>
      <TheHeader />
    </template>
    <template v-slot:default>
      <BadgeList></BadgeList>
    </template>
    <template #footer>
      <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role"></UserInfo>
    </template>
  </base-card>
  <GoalsCard v-slot="slotProps">
    <h2>{{ slotProps.item.title }}</h2>
    <h3>{{ slotProps.item.description }}</h3>
    <h3>{{ slotProps["another-prop"] }}</h3>
  </GoalsCard> -->
  <button @click="setSelectedComponents('active-goals')">Active Goals</button>
  <button @click="setSelectedComponents('manage-goals')">Manage Goals</button>

  <teleport to="#app">
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </teleport>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

// import BadgeList from "./components/BadgeList.vue";
// import TheHeader from "./components/TheHeader.vue";
// import UserInfo from "./components/UserInfo.vue";
// import GoalsCard from "./components/GoalsCard.vue";

export default {
  components: {
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },

      selectedComponent: "active-goals",
    };
  },

  methods: {
    setSelectedComponents(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
