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
      path: '/login_up',
      name: 'login_up',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginUpView.vue')
    },

    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
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
  ]
})

export default router
