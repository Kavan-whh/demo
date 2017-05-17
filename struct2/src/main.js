// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index.js'
import axios from 'axios'


Vue.use(Vuex)
import 'normalize.css';//初始化样式
import './assets/css/base.scss';

// 在vue原型中添加$http方法等于axios
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#struct',
  router,store,
  template: '<App/>',
  components: { App }
})
