import { createApp } from "vue";
import { createMemoryHistory, createRouter, createWebHistory, onBeforeRouteLeave } from "vue-router";
import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/NotFound.vue";
import UsersFooter from "./components/users/UsersFooter.vue";
import TeamFooter from "./components/teams/TeamFooter.vue";

const routes = [
  { path: "/", redirect: "/teams" },
  {
    path: "/users",
    meta: { customData: true },
    components: {
      default: UsersList,
      footer: UsersFooter,
    },

    beforeEnter(to, from, next) {
      console.log(`before enter page guard`);
      console.log(to.meta.customData);
      console.log(from);
      next();
    },
  },

  {
    path: "/teams",
    components: {
      default: TeamsList,
      footer: TeamFooter,
    },
    children: [{ name: "teamMembers", path: ":teamID", component: TeamMembers }],
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);

    if (savedPosition) {
      return savedPosition;
    }

    return { left: 0, top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  console.log(to, from);
  // next(false);  // block the request
  // next('/users') // redirect to users route
  // next({ name: "teamMembers", path: ":teamID", component: TeamMembers }) // redirect to users route
  next();
});

const app = createApp(App);

app.use(router);
app.mount("#app");
