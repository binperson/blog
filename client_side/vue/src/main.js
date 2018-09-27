import Vue from 'vue'
import App from './App'
import About from '@/components/About'
import BlogPager from '@/components/BlogPager'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.config.productionTip = false

let routes = [
  {
    path: '/',
    redirect: '/'
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/',
    name: 'main',
    component: BlogPager
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
