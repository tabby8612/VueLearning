type Request = {
  email: string
  message: string
}

export default {
  addRequestAction(context: any, request: Request) {
    context.commit('addRequest', request)
  },
}
