import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Test from '../views/test'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
