import Vue from 'vue'
import Router from 'vue-router'
import myPanle from '@/components/myPanle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/depart/1',
      component: myPanle
    },
    {
      path: '/depart/:id',
      component: myPanle
    }


  ]
})
