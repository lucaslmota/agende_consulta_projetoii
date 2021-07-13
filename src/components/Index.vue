<template>
  <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-primary">
                        <div class="col mx-auto text-center">
                            <br>
                            <img src="../assets/Logo.png" id="logo">
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Seja bem vindo!</h1>
                            </div>
                            <hr>

                            <form action="pgInicial.html" name="form" class="needs-validation" novalidate>
                                <!-- Login -->
                                <div>
                                   
                                    <div class="form-group left-inner-addon">
                                        <i class="fa fa-user"></i>
                                        <input type="email" id="email" name="email" onblur="validarEmail(form.email)"
                                            class="form-control" placeholder="Digite seu Login" required>
                                        <div class="invalid-feedback">
                                            Login inválido.
                                        </div>
                                    </div>
                                    <!-- Senha -->
                                    <div class="form-group left-inner-addon">
                                        <i class="fas fa-lock"></i>
                                        <input type="password" id="senha" name="senha" class="form-control"
                                        pattern="[0-9a-fA-F]{8}" placeholder="Digite sua senha" required>
                                        <div class="invalid-feedback">
                                            Senha inválida.
                                        </div>
                                    </div>

                                    <button type="submit" class="btn btn-primary btn-lg btn-block"
                                        onclick="">Entrar</button>

                                    <hr>

                                    <div class="text-center">
                                        <a class="small text-primary" href="recSenha.html">Verifique seu agendamento</a>
                                    </div>

                                    <footer>
                                        <p class="mt-5 mb-3 text-muted text-center">AgendeConsulta &copy; 2021</p>
                                    </footer>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.botoes{
    width: 400px;
    position: relative;
    left: 35%;
}

.line {
    display: inline-block;
}

.bt{
    width: 100px;
}

.ml-2{
    text-align: center;
}

.left-inner-addon {
    position: relative;
}
.left-inner-addon i {
    position: absolute;
    padding: 10px 12px;
    pointer-events: none;
    /*color: ;*/
}
.left-inner-addon input.form-control {
    padding-left: 30px;
}

input[type="date"]:before {
    content: attr(placeholder) !important;
    color: #666;
    margin-right: 0.5em;
}

input[type="date"]:focus:before,
input[type="date"]:valid:before {
    content: "";
}

#register-image{
    background-color: #023e8a;
    background-position:center;
    background-size:cover;
}

#logo {
    width: 100%;
}

.img-arredondada {
    border-radius: 50%;
    background-position: -15px -15px;
    height: 195px;
    width: 195px;
    background-image: url(../assets/Avatar.png);
}

</style>