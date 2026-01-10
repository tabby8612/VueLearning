import coaches from '@/data/coaches'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import type { CoachState } from './CoachState'

export default {
  namespace: true,
  state(): CoachState {
    return {
      coaches: [] as Coach[],
      isFetching: false,
    }
  },
  getters,
  mutations,
  actions,
}
