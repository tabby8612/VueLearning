import type { CoachState } from './CoachState'

export default {
  coaches(state: CoachState) {
    return state.coaches
  },

  hasCoaches(state: CoachState) {
    return state.coaches && state.coaches.length > 0
  },

  getIsFetching(state: CoachState) {
    return state.isFetching
  },
}
