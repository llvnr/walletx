import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Connexion from '../views/Connexion.vue'
import Wallet from '../views/Wallet.vue'
import Network from '../views/Network.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      auth: true // A protected route
    },
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      auth: true // A protected route
    },
  },
  {
    path: '/network',
    name: 'Network',
    component: Network,
    meta: {
      auth: true // A protected route
    },
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {    
  let token = localStorage.getItem('token')

  if (to.meta.auth && token == null) {
    router.push({ name: 'Connexion' })
  }    
  else {
    next()
  }    
})

export default router
