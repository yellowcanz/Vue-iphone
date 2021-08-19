import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/gobal.css'
import $ from 'jquery' 
import PxLoader from 'pxloader'
Vue.prototype.PxLoader = PxLoader
Vue.prototype.$ = $
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
