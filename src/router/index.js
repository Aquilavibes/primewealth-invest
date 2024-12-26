import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import Withdraw from '../views/Withdraw.vue'
import Deposit from '../views/Deposit.vue'
import ChangePassword from '../views/ChangePassword.vue'
import History from '../views/History.vue'
import AiTrading from '../views/AiTrading.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: Withdraw
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: Deposit
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: ChangePassword
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
    {
      path: '/aitrading',
      name: 'aitrading',
      component: AiTrading
    }
  ]
})

export default router
