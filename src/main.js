import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
