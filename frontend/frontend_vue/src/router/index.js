import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignupView.vue')
    },

    {
      path: '/newsLine',
      name: 'newsLine',
      component: () => import('../views/NewslineVIew.vue')
    },

    {
      path: '/Message',
      name: 'Message',
      component: () => import('../views/MessagesView.vue')
    },

    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
    },
  ]
})

export default router
