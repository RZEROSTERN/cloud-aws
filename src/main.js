import Vue from 'vue'
import App from './App.vue'
import coreui from '@coreui/coreui'

import router from './router'
import "@/firebase.js"
import store from "./store"

import './styles/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  coreui,
  render: h => h(App),
}).$mount('#app')
