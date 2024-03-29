import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
axios.defaults.baseURL = "https://a1.onesnowwarrior.cn:8080";
axios.defaults.withCredentials = true;

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
