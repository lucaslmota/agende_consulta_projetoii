<template id="page-top">
<div id="wrapper">

    <div>
        <ul class="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" :href="pagina">
                <div class="sidebar-brand-icon">
                    <img src="../assets/Símbolo1.png" alt="" width="70%">
                </div>
                <div class="sidebar-brand-text mx-2">Agende Consulta</div>
            </a>

            <hr class="sidebar-divider my-0">

            <li class="nav-item">
                <router-link to="cadastro-paciente" class="nav-link">
                    <i class="fas fa-edit"></i><span>Cadastrar Paciente</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="cadastro-medico" class="nav-link">
                    <i class="fas fa-edit"></i><span>Cadastrar Médico</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="consultas-marcadas" class="nav-link">
                    <i class="fas fa-edit"></i><span>Consultas Marcadas</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="lista-medicos" class="nav-link">
                    <i class="fas fa-edit"></i><span>Lista de Medicos</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <i class="fas fa-edit"></i><span>Sair</span>
                </router-link>
            </li>

            <hr class="sidebar-divider d-none d-md-block">
        </ul>
    </div>

        <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Pesquisar..."
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link active" href="editarUser.html">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">João Pereira</span>
                                <img class="img-profile rounded-circle" src="../assets/Avatar.png">
                            </a>
                        </li>
                    </ul>
                </nav>

                <div class="container">


                    <div class="row">
                        <div class="col-sm-4" >
                            <div class="card">
                                <div class="card-header">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex justify-content-between align-items-center">

                                            <div class="ml-2">
                                                <div class="h4 m-0">Dr. Adalberto Canella - Pediatra</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="card-body">
                                        <div><img src="img/medico1.jpg" alt="" class="img-thumbnail"></div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary btn-lg btn-block btn-sm"
                                            onclick="location.href='pgInfo.html'">Informações</button>
                                        <button type="submit" class="btn btn-primary btn-lg btn-block btn-sm"
                                            onclick="location.href='pgMedico.html';">Agendar consulta</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
               
            </div>
             <footer class="sticky-footer bg-white shadow">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; Agende Consulta 2021</span>
                        </div>
                    </div>
                </footer>
        </div>
    </div>
</template>

<script>
export default {
    name:'Pagina Inicial',
    data() {
        return {
            id: "",
            pagina: 'http://localhost:8080/pagina-inicial'
        }
    },
}
</script>

<style>

</style>