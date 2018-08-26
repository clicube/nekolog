import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const eventsRef = db.ref('events')
const initPlugin = store => store.dispatch('INIT_EVENTS')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        type: 'water',
        value: 111
      }
    ]
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    INIT_EVENTS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('list', eventsRef)
    })
  },
  plugins: [initPlugin]
})
