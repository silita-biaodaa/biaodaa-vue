// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
})

// Vue.filter('phoneFilter', function(value) {
//   if(value&&value.indexOf(";")!=-1){ 
//     let newStrArr = value.split(";");

//       return newStrArr[1];
//   }
//   return value;
// });

import util from "./util/util";

router.beforeEach((to, from, next) => {
  let code = util.getCode('code')
  console.log(111111)
  alert(222)
  if(!code) {
    console.log('进来这里了！')
     util.weixinauth()
  }else {
     alert('发送code')
  }

   }
 )