<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <GameMenu/>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      class="gradient-45deg-purple-indigo">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Minis Reporting</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="start"
          justify="center"
        >
          <v-col lg="6">
        <router-view></router-view>

          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>

import GameMenu from './components/GameMenu'

export default {
  name: 'App',
  components: {
    GameMenu
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  created () {
    this.$vuetify.theme.dark = true
  }
}
</script>
<style lang="scss">
  .gradient-45deg-purple-light-blue{
    background: linear-gradient(45deg,#e040fb,#4fc3f7) !important;
  }
  .gradient-45deg-light-blue-purple{
    background: linear-gradient(45deg,#4fc3f7,#e040fb) !important;
  }
  .gradient-45deg-purple-deep-purple{
    background: linear-gradient(45deg,#7b1fa2,#7c4dff) !important;
  }
  .gradient-45deg-deep-purple-purple{
    background: linear-gradient(45deg,#7c4dff,#7b1fa2) !important;
  }
  .gradient-45deg-purple-indigo{
    background: linear-gradient(45deg,#7b1fa2,#303f9f) !important;
  }
  .gradient-45deg-indigo-purple{
    background: linear-gradient(45deg,#303f9f,#7b1fa2) !important;
  }
  .v-chip{
    background: linear-gradient(45deg,#303f9f,#7b1fa2) !important;
  }
</style>
