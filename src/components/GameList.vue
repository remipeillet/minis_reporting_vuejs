<template>
    <div>
      <ul class="collection with-header" v-for="game in gameList" :key="game.id">
        <li class="collection-header"><h2>{{ game.name }}</h2></li>
        <li v-for="faction in game.factions" :key="faction.id" class="collection-item">{{ faction.name }}</li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import http from '../http-common'
import Vue from 'vue'

export default {
  name: 'GameList',
  data () {
    return {
      gameList: []
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8001/restapi/minis/game/')
      .then(response => {
        this.gameList = response.data
        this.gameList.forEach((game) => {
          console.log(game.name)
          http.get('/restapi/minis/faction/?game=' + game.id).then(
            response => {
              Vue.set(game, 'factions', response.data)
            }
          )
        })
      }
      )
      .catch(error => (console.log(error)))
  }
}
</script>

<style scoped>

</style>
