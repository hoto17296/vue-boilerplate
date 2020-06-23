import Vue from 'vue'
import store from './store'
import App from './components/App.vue'

new Vue({
  el: 'main',
  store,
  render: h => h(App),
})