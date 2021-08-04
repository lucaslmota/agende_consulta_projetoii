<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-primary">
            <div class="text-center">
              <br>
              <img src="" alt="" id="logo">
            </div>
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Cadastro de Usuário</h1>
              </div>
              <hr>

              <form action="pgInicial.html" name="form" method="POST" class="needs-validation" novalidate>
                <div>
                  <!-- Dados para Acesso -->
                  <label for=""><i class="fas fa-user"></i> Dados do Usuário</label><br>

                  <div class="form-group left-inner-addon">
                    <!-- E-mail -->
                    <i class="fas fa-envelope"></i>
                    <input type="text" name="nome"  class="form-control"
                      placeholder="Digite o nome" v-model="nome" required>
                    <div class="invalid-feedback">
                      É obrigatório um nome
                    </div>
                  </div>

                  <div class="form-row">
                    <!-- Criar e Confirmar senha -->
                    <div class="col left-inner-addon">
                      <!-- Criar senha -->
                      <i class="fas fa-mobile"></i>
                      <input type="text" id="usuario" name="usuario" class="form-control"
                        placeholder="Digite o usuario" v-model="usuario" required>
                      <div class="invalid-feedback">
                        É obrigatório um usuário
                      </div>
                    </div>
                    <div class="col left-inner-addon">
                      <!-- Confirmar senha -->
                      <i class="fas fa-phone-alt"></i>
                      <input type="password" id="senha" name="senha" class="form-control"
                        placeholder="Digite a senha" v-model="senha">
                        <div class="invalid-feedback">
                        É obrigatório uma senha
                        </div>

                    </div>
                  </div>
                  <hr>
                  <button type="submit" class="btn btn-primary btn-lg btn-block" @click="PostUsuario">Cadastar</button><br/>
                  <router-link to="pagina-inicial">
                      <button type="reset" class="btn btn-primary btn-lg btn-block">Voltar</button>
                  </router-link>
                  

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
import axios from "axios";

export default {
  nome: 'CadUsuario',
      data() {
            return {
                nome: "",
                usuario: "",
                senha: "",
                usuarios: [],
                baseURI:"http://localhost:3000/usuarios"        
            }
      },
      methods: {
        PostUsuario(){
            let obj ={
              nome: this.nome,
              usuario: this.usuario,
              senha: this.senha  
            };

            axios.post(this.baseURI, obj).then((result) =>{ 
              this.usuarios = result.data
            })
            alert("USUARIO CADASTRADO!");
        },

        PutUsuario(){
            let obj ={
              nome: this.nome,
              usuario: this.usuario,
              senha: this.senha 
            };

            axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
              console.log(result)
            })
        },

        DeleteUsuario(){
          axios.delete(this.baseURI +"/"+this.id,).then((result) =>{})
        }
      },
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