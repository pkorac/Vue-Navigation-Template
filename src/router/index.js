import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Animations from '@/views/Animations'

import SimpleNavigation from '@/views/SimpleNavigation'
import TabBarNavigation from '@/views/TabBarNavigation'
import MainScreen from '@/views/MainScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/animations',
      name: 'animations',
      component: Animations
    },
    {
      path: '/simplenav',
      name: 'SimpleNavigation',
      component: SimpleNavigation
    },
    {
      path: '/tabbar',
      name: 'TabBarNavigation',
      component: TabBarNavigation
    },
    {
      path: '/main',
      name: 'MainScreen',
      component: MainScreen
    }
  ]
})
