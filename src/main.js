
import Vue from 'vue'
import App from './App'
import router from './router/router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
  // mounted () {
  //   console.log(2222)
  //   location.href = localStorage.getItem('url')
  // }
})

