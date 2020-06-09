<template>
  <div>
    <div v-if="loading" class="loading">
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
        </div>

        <div class="spinner-layer spinner-red">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
        </div>

        <div class="spinner-layer spinner-yellow">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
        </div>

        <div class="spinner-layer spinner-green">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
        </div>
      </div>
    </div>
    <div v-if="currentGame" class="content">
      <h1>{{ currentGame.name }}</h1>
      <div class="collection">
        <a href="#!" class="collection-item" v-for="faction in factionList" :key="faction.id">{{ faction.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../http-common'

export default {
  name: 'GameMenu',
  data () {
    return {
      currentGame: null,
      factionList: [],
      loading: true
    }
  },
  computed: {
    currentGameId: function () {
      return this.$route.params.id
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    $route: 'fetchData'
  },
  methods: {
    retrieveGame () {
      if (this.currentGameId > 0) {
        http.get('/restapi/minis/game/' + this.currentGameId).then(response => {
          this.currentGame = response.data
        })
      } else {
        this.currentGame = null
      }
    },
    retrieveFactions () {
      if (this.currentGameId > 0) {
        this.factionList = http.get('/restapi/minis/faction/?game=' + this.currentGameId).then(response => {
          this.factionList = response.data
          this.loading = false
        })
      } else {
        this.factionList = null
      }
    },
    fetchData () {
      this.currentGame = null
      this.loading = true
      this.retrieveGame()
      this.retrieveFactions()
    }
  },
  mounted () {
    this.currentGameId = this.$route.params.id
    this.retrieveGame()
    this.retrieveFactions()
  }
}
</script>

<style scoped>

</style>
