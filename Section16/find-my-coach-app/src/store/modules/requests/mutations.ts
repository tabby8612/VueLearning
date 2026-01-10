import type { ContactRequest } from '@/types/Request'

export default {
  addRequest(state: any, payload: ContactRequest) {
    state.requests.push(payload)
  },
}
