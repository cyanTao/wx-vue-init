import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import WeVue from 'we-vue'
import Mint from 'mint-ui'
import fastclick from 'fastclick' // 消除移动端点击延迟
import gallery from 'img-vuer'

import common from '@/assets/js/common.js'
import url from '@/assets/js/url.js'

import 'we-vue/lib/style.css'
import 'mint-ui/lib/style.css'
import '@/assets/less/index.less'
Vue.prototype.$common = common
Vue.prototype.$url = url

Vue.config.productionTip = false

Vue.use(gallery, {
  swipeThreshold: 150  // default 100 ,new in 0.12.0
})
Vue.use(WeVue)
Vue.use(Mint)
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
