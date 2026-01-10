import { createStore } from 'vuex'
import CoachModule from './modules/coaches/index.ts'
import RequestModule from './modules/requests/index.ts'
import coaches from '@/data/coaches'

const store = createStore({
  //   state() {
  //     return {
  //       coaches: coaches,
  //     }
  //   },
  //   getters: {
  //     coaches(state: State) {
  //       return state.coaches
  //     },
  //   },
  modules: {
    coaches: CoachModule,
    requests: RequestModule,
  },
})

export default store
