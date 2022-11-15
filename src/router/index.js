import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../components/SignUp';
import { RouterName } from "../utility/constant"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: RouterName.Signup,
    component: SignUp
  },
  {
    path: '/login',
    name: RouterName.Login,
    component: () => import('../components/LogIn')
  },
  {
    path: '/Dashboard',
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
