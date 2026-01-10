import type { ContactRequest } from '@/types/Request'

type State = {
  requests: ContactRequest[]
}

export default {
  requests(state: State) {
    return state.requests
  },
}
