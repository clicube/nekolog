import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '~/plugins/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'
const db = firebase.database()
const eventsRef = db.ref('/events')

Vue.use(Vuex)

export default {
  state: () => {{
    events: []
  }},
  mutations: {
    ...firebaseMutations
  },
  actions: {
    INIT_EVENTS: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('events', eventsRef)
    })
  }
}
