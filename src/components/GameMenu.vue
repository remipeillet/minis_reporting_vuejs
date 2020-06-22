<template>
  <v-list dense>
    <v-list-item :to="{name: 'Game', params: {game_id: game.id}}"  v-for="game in games_list" :key="game.id" link>
      <v-list-item-action>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{game.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import http from '../http-common'

export default {
  name: 'GameMenu',
  data () {
    return {
      games_list: null
    }
  },
  mounted () {
    http.get('/restapi/minis/game/')
      .then(response => (this.games_list = response.data))
      .catch(error => (console.log(error)))
  }
}

</script>

<style scoped>

</style>
