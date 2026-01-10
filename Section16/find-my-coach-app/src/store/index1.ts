import coaches from '@/data/coaches'
import { createStore } from 'vuex'

export interface State {
  coaches: typeof coaches
  selectedCoaches: typeof coaches | []
}

const store = createStore<State>({
  state() {
    return {
      coaches: coaches,
      selectedCoaches: [],
    }
  },

  getters: {
    coaches(state: State) {
      return state.selectedCoaches.length > 0 ? state.selectedCoaches : state.coaches
    },
  },

  mutations: {
    filterCoaches(state: State, keys: string[]) {
      if (keys.length <= 0) return state.coaches

      state.selectedCoaches = state.coaches.filter((coach) =>
        keys.some((key) => coach.services.includes(key)),
      )
    },
  },

  actions: {
    filterCoaches(context: any, keys: string[]) {
      context.commit('filterCoaches', keys)
    },
  },
})

export default store
