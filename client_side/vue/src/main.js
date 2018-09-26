import Vue from 'vue'
import App from './App'
import About from '@/components/About'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

let routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'about',
    component: About
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

/* eslint-disable no-new */
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
