import Vue from 'vue'
import VueRouter from 'vue-router'
import { RouterName } from "../utility/constant"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouterName.Signup,
    component: () => import('../components/LogIn')
  },
  {
    path: '/login',
    name: RouterName.Login,
    component: () => import('../components/LogIn')
  },
  {
    path: '/dashboard',
    name: RouterName.DashBoard,
    component: () => import('../components/DashBoard')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
