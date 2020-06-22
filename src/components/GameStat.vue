<template>
  <v-card :loading="loading">
    <v-card-title v-if="game">
      {{ game.name }}
    </v-card-title>
    <v-container>
      <v-row
        align="center"
        justify="center">
        <v-col sm="10">
          <v-select
            :items="factions_list"
            item-text="name"
            :loading="loading_factions"
            chips
            deletable-chips
            multiple
            label="Factions"
          >
          </v-select>
        </v-col>
        <v-col sm="10">
          <v-select
            :items="army_list"
            item-text="name"
            :loading="loading_armies"
            chips
            deletable-chips
            multiple
            label="Armées"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-card-text>
        <v-tabs centered grow v-model="tab_value">
          <v-tab-item>
            <v-row
              align="center"
              justify="center">
              <Chart :chartData="stats_dataset"/>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-data-table
              :headers="unit_list_headers"
              :items="unit_list"
              :items-per-page="10"
              class="elevation-1">
            </v-data-table>
          </v-tab-item>
          <v-tab ripple>
            Statistiques
          </v-tab>
          <v-tab ripple>
            Liste
          </v-tab>
        </v-tabs>
      </v-card-text>
    </v-container>

  </v-card>
</template>

<script>
import http from '../http-common'
import Chart from './Chart'

export default {
  name: 'GameStat',
  components: {
    Chart
  },
  data () {
    return {
      game: null,
      factions_list: [],
      army_list: [],
      unit_list: [],
      unit_list_headers: [
        { text: 'Nom', value: 'name' },
        { text: 'Armée', value: 'army.name' },
        { text: 'Type d\'unité', value: 'type.name' },
        { text: 'Nombre de figurines', value: 'number_of_minis', align: 'center' }
      ],
      stats_dataset: {},
      loading_factions: false,
      loading_armies: false,
      tab_value: 0
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
    retrieveGame: function () {
      this.loading = true
      http.get('/restapi/minis/game/' + this.$route.params.game_id).then(response => {
        this.game = response.data
        this.loading = false
        http.get('/restapi/minis/faction/', { params: { game: this.game.id } })
          .then(response => {
            this.factions_list = response.data
            this.loading_factions = false
          })
          .catch(error => (console.log(error)))
        http.get('/restapi/minis/army/', { params: { game: this.game.id } })
          .then(response => {
            this.army_list = response.data
            this.loading_armies = false
          })
          .catch(error => (console.log(error)))
        this.retrieveStats()
        this.retrieveUnitsList()
      }).catch((err) => {
        this.loading = false
        console.log(err)
      })
    },
    retrieveStats: function () {
      http.get('/restapi/minis/game/' + this.game.id + '/get_units_stats/')
        .then(response => {
          const data = response.data
          this.stats_dataset = {
            labels: data.labels,
            datasets: [
              {
                label: 'Data One',
                backgroundColor: ['#f87979', '#007979', '#790079', '#79f879', '#7979f8', '#797900'],
                data: data.datas
              }
            ]
          }
        })
    },
    retrieveUnitsList: function () {
      http.get('/restapi/minis/unit/', { params: { game: this.game.id } })
        .then(response => {
          this.unit_list = response.data
        })
    },
    fetchData () {
      this.loading = true
      this.loading_factions = true
      this.loading_armies = true
      this.retrieveGame()
    }
  }
}
</script>

<style scoped>

</style>
