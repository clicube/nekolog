import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseAction} from 'vuexfire'

import db from '~/plugins/firestore'

const eventsRef = db.collection('events')

Vue.use(Vuex)

export const state = () => ({
  list: []
})

export const actions = {
  INIT_EVENTS: firebaseAction(({bindFirebaseRef}) => {
    bindFirebaseRef('list', eventsRef.orderBy("createdAt", "asc"))
  }),
  ADD_EVENT: firebaseAction((context, data) => {
    eventsRef.add(data);
  })
}

