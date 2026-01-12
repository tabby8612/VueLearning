import actions from './actions'
import type { AuthState } from './AuthState'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,

  state(): AuthState {
    return {
      auth: 'c3',
    }
  },

  getters,
  mutations,
  actions,
}
