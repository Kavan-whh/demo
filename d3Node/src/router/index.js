import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import Force from '@/components/Force'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    // {
    //   path:'/temp',
    //   component:Force
    // }
  ]
})
