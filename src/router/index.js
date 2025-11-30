import { createRouter, createWebHistory } from 'vue-router'

// Lazy load components
const HomeView = () => import('../views/HomeView.vue')
const SubmitView = () => import('../views/SubmitView.vue')
const AdminView = () => import('../views/AdminView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/submit',
      name: 'submit',
      component: SubmitView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    }
  ]
})

export default router
