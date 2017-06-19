import Vue from 'vue'
import Router from 'vue-router'
import Tools from 'components/tools'
// import Details from 'components/details'
// import Show from 'components/show'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Tools
    }
  ]
})
