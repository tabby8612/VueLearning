import { Store } from 'vuex'

declare module 'vue' {
  // declare your own store states
  interface State {
    count: number
    coaches: Coach[]
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
