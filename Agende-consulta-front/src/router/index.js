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
  },
  {
    path: "/cadastro-paciente",
    name:"Cadastro Paciente",
    component: () => import("../components/cadPaciente.vue")
  },
  {
    path: "/cadastro-medico",
    name:"Cadastro Médico",
    component: () => import("../components/cadMedico.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
