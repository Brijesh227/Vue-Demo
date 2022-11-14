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
    path: '/logIN',
    name: RouterName.Login,
    component: () => import('../components/LogIn')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
