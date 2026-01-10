import type { ContactRequest } from '@/types/Request'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,

  state() {
    return {
      requests: [] as ContactRequest[],
    }
  },

  getters,
  mutations,
  actions,
}
