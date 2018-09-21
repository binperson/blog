import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

let routes = [
  {
    path: '/about',
    name: 'about',
    component: App
  },
  {
    path: '/',
    name: 'sidebar',
    component: App
  }
]
let router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
