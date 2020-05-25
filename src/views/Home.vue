<template>
  <div class="home">
    <GameMenu/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import GameMenu from '@/components/GameMenu.vue'
export default {
  name: 'Home',
  components: {
    GameMenu
  }
}
</script>
