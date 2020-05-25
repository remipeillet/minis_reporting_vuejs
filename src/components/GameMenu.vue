<template>
  <div>
    <div class="row">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3" v-for="game in games_list" :key="game.id"><router-link :to="{ name:'Game', params: { id: game.id}}">{{game.name}}</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GameMenu',
  data () {
    return {
      games_list: null
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/restapi/minis/game/')
      .then(response => (this.games_list = response.data))
      .catch(error => (console.log(error)))
  }
}

</script>

<style scoped>

</style>
