import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueIframe from 'vue-iframes'


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueIframe)

