import type { ComponentCustomProperties } from 'vue'
import type { CoachState } from './CoachState'

export default {
  filteredCoaches(state: CoachState, selectedCoaches: Coach[]) {
    state.coaches = selectedCoaches
  },

  addNewCoach(state: CoachState, coach: Coach) {
    state.coaches.push(coach)
  },

  async fetchCoachesFromDB(state: CoachState) {
    state.isFetching = true

    const response = await fetch(
      'https://coach-demo-ea0fe-default-rtdb.firebaseio.com/coaches.json',
    )
    const data = await response.json()

    state.coaches = []

    for (const key in data) {
      state.coaches.push(data[key])
    }

    state.isFetching = false
  },

  setIsFetching(state: CoachState, isLoading: boolean) {
    state.isFetching = isLoading
  },
}
