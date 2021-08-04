import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/pagina-inicial",
    name:"Pagina Inicial",
    component: () => import("../views/PaginaInicial.vue")
  },
  {
    path: "/cadastro-paciente",
    name:"Cadastro Paciente",
    component: () => import("../views/CadPaciente.vue")
  },
  {
    path: "/cadastro-medico",
    name:"Cadastro Médico",
    component: () => import("../views/CadMedico.vue")
  },
  {
    path: "/consultas-marcadas",
    name:"Consultas Marcadas",
    component: () => import("../views/ConsultasMarcadas.vue")
  },
  {
    path: "/lista-medicos",
    name:"Lista Médicos",
    component: () => import("../views/listaMedicos.vue")
  },
  {
    path: "/lista-pacientes",
    name:"Lista Pacientes",
    component: () => import("../views/ListaPacientes.vue")
  },
  {
    path: "/cadastro-usuario",
    name:"Cadastro Usúario",
    component: () => import("../views/CadUsuario.vue")
  },
  {
    path: "/marcar-consulta",
    name:"Marcar Consulta",
    component: () => import("../views/MarcarConsulta.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
