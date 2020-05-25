<template>
  <div>
    <p>Game {{ $route.params.id }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GameMenu',
  data () {
    return {
      game: null
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8000/restapi/minis/game/' + this.$route.params.id)
      .then(response => (this.game = response.data))
      .catch(error => (console.log(error)))
  }
}
</script>

<style scoped>

</style>
