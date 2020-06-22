import Vue from 'vue'
import store from './store'
import App from './components/App.vue'
import { mapActions } from 'vuex'

new Vue({
  el: 'main',
  store,
  render: h => h(App),
})