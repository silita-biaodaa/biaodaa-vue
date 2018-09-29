import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import industry from '@/page/industry/industry'
import tenders from '@/page/tenders/tenders'
import win from '@/page/win/win'
import platform from '@/page/platform/platform'
import lawworks from '@/page/lawworks/lawworks'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/company/:comId',
      name: 'index',
      component: index
    },
    {
      path: '/industry/:id',
      name: 'industry',
      component: industry
    },
    {
      path: '/tenders/:type/:id/:source',
      name: 'tenders',
      component: tenders
    },
    {
      path: '/win/:type/:id/:source',
      name: 'win',
      component: win
    },
    {
      path: '/platform',
      name: 'platform',
      component: platform
    },{
      path: '/lawworks/:type/:id',
      name: 'lawworks',
      component: lawworks
    },
  ]
})
