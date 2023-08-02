import App from './App'
// import VueResource from 'vue-resource';
// import axios from 'axios'
// // Vue.use(VueResource);

// Vue.prototype.$axios = axios

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif



export default{//后端地址
	url: "http://127.0.0.1:9090",
	demandId : '0',
}