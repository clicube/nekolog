import Vuex from 'vuex'
import events from './events'
const store = () => new Vuex.Store({
  modules: {
    events: events
  }
})

export default store
