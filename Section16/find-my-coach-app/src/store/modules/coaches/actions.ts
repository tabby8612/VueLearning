export default {
  filterCoaches(context: any, filters: string[]) {
    const allCoaches = context.getters['coaches'] as Coach[]
    const filteredCoaches = allCoaches.filter((coach) =>
      filters.some((filter) => coach.services.includes(filter)),
    )

    context.commit('filteredCoaches', filteredCoaches)
  },

  addNewCoach(context: any, coach: Coach) {
    context.commit('addNewCoach', coach)
  },

  async loadCoachesFromDB(context: any) {
    // context.commit('fetchCoachesFromDB')

    const response = await fetch(
      'https://coach-demo-ea0fe-default-rtdb.firebaseio.com/coaches.json',
    )
    const data = await response.json()

    context.state.coaches = []

    for (const key in data) {
      context.state.coaches.push(data[key])
    }
  },

  setIsFetching(context: any, isLoading: boolean) {
    context.commit('setIsFetching', isLoading)
  },
}
