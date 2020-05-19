import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      redirect: '/report',
      component: () => import('./views/index.vue'),
      meta: {
        title: '报表',
        keepAlive: false
      },
      children: [{
          path: '/report',
          name: '/report',
          component: () => import('./views/index/report.vue'),
          meta: {
            title: '报表',
            keepAlive: false
          }
        },
        {
          path: '/mine',
          name: '/mine',
          component: () => import('./views/index/mine.vue'),
          meta: {
            title: '我的',
            keepAlive: false
          }
        },
      ]
    },
    {
      path: '/debug/:id',
      name: '/debug',
      component: () => import('./views/debug.vue'),
      meta: {
        title: '调试',
        keepAlive: false
      },
      props: (route) => {
        console.log(route)
        return {
          id: route.query.id,
          test: route
        }
      }
    },
    {
      path: '*',
      name: '404',
      component: () => import('./views/404.vue'),
      meta: {
        title: '404',
        keepAlive: false
      }
    },
  ]
})