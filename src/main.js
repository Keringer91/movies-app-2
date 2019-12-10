import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import router from './router'

console.log(router) // eslint-disable-line

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
