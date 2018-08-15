import Vue from 'vue/dist/vue.esm'
import App from './app.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
 
document.addEventListener('DOMContentLoaded', () => {
 const app = new Vue({
  el: '#app',
  render: h => h(App)
 })
})