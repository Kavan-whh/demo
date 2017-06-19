import Vue from 'vue'
import Router from 'vue-router'
import Tools from 'components/tools'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tools
    }
  ]
})
