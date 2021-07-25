import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../components/Index.vue")
  },
  {
    path: "/pagina-inicial",
    name:"Pagina Inicial",
    component: () => import("../components/PaginaInicial.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
