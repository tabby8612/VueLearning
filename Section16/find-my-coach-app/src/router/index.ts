import Auth from '@/components/pages/auth/Auth.vue'
import CoachDetails from '@/components/pages/coaches/CoachDetails.vue'
import CoachList from '@/components/pages/coaches/CoachList.vue'
// import CoachList from '@/components/pages/coaches/CoachList.vue'
import CoachRegistration from '@/components/pages/coaches/CoachRegistration.vue'
import NotFound from '@/components/pages/NotFound.vue'
import ContactCoach from '@/components/pages/requests/ContactCoach.vue'
import RequestsReceived from '@/components/pages/requests/RequestsReceived.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coach/:id',
      component: CoachDetails,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/auth', component: Auth },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
