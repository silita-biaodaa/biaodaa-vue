import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import surroundinglist from '@/page/surrounding/surroundingList'
import dynamic from '@/page/dynamic/dynamic'
import allList from '@/page/all/allList'
import listDetails from '@/page/all/listDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:type/:id/:source',
      name: 'index',
      component: index
    },
    {
      path: '/surroundinglist',
      name: 'surroundinglist',
      component: surroundinglist
    },
    {
      path: '/dynamic/:type/:id/:source',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/allList/:type/:id/:source',
      name: 'allList',
      component: allList
    },
    {
      path: '/listDetails',
      name: 'listDetails',
      component: listDetails
    }
  ]
})
