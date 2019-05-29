import Vue from 'vue'
import App from './App.vue'
import router from './router'  // 默认引入 ./router/index.js
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
