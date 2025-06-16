import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//criancao de rotas - ciar objetos 
  const routes = [
    {   //roteando
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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/solicitar',
      name: 'solicitar',
      component: () => import('../views/Solicitar.vue')
    }

  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
