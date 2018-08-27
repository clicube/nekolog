<template>
  <section class="container">
    <div>
      <button @click="addEvent_water">水交換</button>
      <button @click="addEvent_oshikko">おしっこ</button>
      <button @click="addEvent_unko">うんこ</button>
    </div>
    <ul>
      <li v-for="event in events" :key="event.createdAt">
        <p>{{ type(event.type) }} / {{ date(event.createdAt) }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import Vuex from 'vuex'

  export default {
    components: {
      AppLogo
    },
    computed: Vuex.mapState({
      events: state => state.events.list
    }),
    methods: {
      addEvent_water() {
        this.$store.dispatch('events/ADD_EVENT', {type: 'water', createdAt: Date.now()})
      },
      addEvent_oshikko() {
        this.$store.dispatch('events/ADD_EVENT', {type: 'oshikko', createdAt: Date.now()})
      },
      addEvent_unko() {
        this.$store.dispatch('events/ADD_EVENT', {type: 'unko', createdAt: Date.now()})
      },
      date(ms) {
        const date = new Date(0)
        date.setUTCMilliseconds(ms)
        return date.toString()
      },
      type(type) {
        switch (type) {
          case 'water':
            return '水交換'
          case 'oshikko':
            return 'おしっこ'
          case 'unko':
            return 'うんこ'
          default:
            return type
        }
      }
    },
    created() {
      this.$store.dispatch('events/INIT_EVENTS')
    }
  }
</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

