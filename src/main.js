import Vue from 'vue'
import App from './App'
import store from './store'

// vuex挂载到vue中
// Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
