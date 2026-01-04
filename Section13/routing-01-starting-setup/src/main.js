import { createApp } from 'vue';
// import { createMemoryHistory, createRoute } from 'vue-router';

import App from './App.vue';
// import TeamsList from './components/teams/TeamsList.vue';
// import UsersList from './components/users/UsersList.vue';

// const routes = [
//   { path: '/teams', component: TeamsList },
//   { path: '/users', component: UsersList },
// ];

// const router = createRoute({
//   history: createMemoryHistory(),
//   route: routes,
// });

const app = createApp(App);

// app.use(router);

app.mount('#app');
