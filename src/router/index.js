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
import ForgottenPass from '../views/ForgottenPass.vue'
import Kyc from '../views/Kyc.vue'
import Hero from '../views/Hero.vue'
import panel from '@/views/admin/panel.vue'
import depositApproval from '@/views/admin/depositApproval.vue'
import kycApproval from '@/views/admin/kycApproval.vue'
import CustomerCare from '../views/CustomerCare.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hero',
      component: Hero
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
    },
    {
      path: '/forgottenpass',
      name: 'forgottenpass',
      component: ForgottenPass
    },
    {
      path: '/kyc',
      name: 'kyc',
      component: Kyc
    },
    {
      path: '/panel',
      name: 'panel',
      component: panel
    },
    {
      path: '/depositapproval',
      name: 'depositapproval',
      component: depositApproval
    },
    {
      path: '/kycapproval',
      name: 'kycapproval',
      component: kycApproval
    },
    {
      path: '/customercare',
      name: 'customercare',
      component: CustomerCare
    }
  ]
})

export default router
