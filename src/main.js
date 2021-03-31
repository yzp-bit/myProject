// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts';
import $api from '@/api'; //请求接口地址
import axios from 'axios'
Vue.prototype.$api = $api; //挂载请求接口
Vue.prototype.$http = axios; //挂载axios
Vue.prototype.$xxx = '2222222'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
