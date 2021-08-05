<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-primary">
            <div class="text-center">
              <br>
              <img src="" alt="" id="logo" width="70%">
            </div>
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Cadastro de Médico</h1>
              </div>
              <hr>

              
                <div>
                     <!-- Dados de contato -->
                    <label for=""><i class="fas fa-user"></i> Dados de Contato</label><br>


                  <div class="form-group left-inner-addon">
                    <!-- E-mail -->
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email" onblur="validarEmail(form.email)" class="form-control"
                      placeholder="E-mail do medico" v-model="email" required>
                    <div class="invalid-feedback">
                      Seu e-mail é obrigatório.
                    </div>
                  </div>

                  <div class="form-row">
                    <!-- Criar e Confirmar senha -->
                    <div class="col left-inner-addon">
                      <!-- Criar senha -->
                      <i class="fas fa-mobile"></i>
                      <input type="text" id="celular" name="celular" class="form-control"
                        pattern="\([0-9]{2})\[\s][0-9]{4}-[0-9]{4,5}" data-mask="(00) 00000-0000"
                        placeholder="Digite o celular" v-model="celular" required>
                      <div class="invalid-feedback">
                        É obrigatório um número de celular
                      </div>
                    </div>
                    <div class="col left-inner-addon">
                      <!-- Confirmar senha -->
                      <i class="fas fa-phone-alt"></i>
                      <input type="text" id="telefone" name="telefone" class="form-control"
                        pattern="\([0-9]{2})\[\s][0-9]{4}-[0-9]{4,5}" data-mask="(00) 00000-0000"
                        placeholder="Digite o telefone" v-model="telefone">

                    </div>
                  </div>
                  <hr>
                </div>

                <div>
                  <!-- Dados Pessoais -->
                  <label for=""><i class="fas fa-list-ul"></i> Dados do Pessoais</label>

                  <div class="form-row">
                    <div class="col">
                      <!-- Nome -->
                      <input type="text" class="form-control" placeholder="Nome" v-model="nome" required>
                      <div class="invalid-feedback">
                        O nome é obrigatório.
                      </div>
                    </div>
                  </div>
                  <br>

                  <div class="form-row">
                    <!-- Data e Sexo -->
                    <div class="col">
                      <!-- Data -->
                      <input type="text" class="form-control" placeholder="Data de nascimento" v-model="dtNascimento" required>
                      <div class="invalid-feedback">
                        Data de nascimento é obrigatória.
                      </div>
                    </div>

                    <div class="form-group col-md-4">
                      <!-- Sexo -->
                      <input type="text" class="form-control" placeholder="Sexo" v-model="sexo" required>
                      <div class="invalid-feedback">
                        Selecione o sexo.
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="CPF do médico"
                      pattern="/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})$/" data-mask="000.000.000.-00" v-model="cpf">
                  </div>
                </div>
                <hr>

                <div>
                  <!-- Dados Médicos -->
                  <label for=""><i class="fas fa-map-marker-alt"></i> Dados Médicos</label>

                  <div class="form-row">
                    <!-- CRM e Estado -->
                    <div class="form-group col-md-8">
                      <!-- CRM -->
                      <input type="text" class="form-control" placeholder="Digite o CRM" v-model="crm" required>
                      <div class="invalid-feedback">
                        CRM é obrigatório.
                      </div>
                    </div>

                    <div class="form-group col-md-4">
                      <!-- ESTADO -->
                      <input type="text" class="form-control" placeholder="Digite o estado" v-model="estado" required>
                        <div class="invalid-feedback">
                          Estado é obrigatório.
                        </div>
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <!-- CBOS -->
                    <input type="text" class="form-control" placeholder="Digite o CBOS" v-model="cbos">
                  </div>
                  <hr>
                  <button type="submit" class="btn btn-primary btn-lg btn-block" @click="PostMedico">Cadastar</button> <br/>
                  <button type="reset" class="btn btn-primary btn-lg btn-block" @click="this.$router.replace('pagina-inicial')">Voltar</button>
                

                </div>
              
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
    nome: 'CadMedico',
      data() {
            return {
                nome: "",
                email: "",
                telefone: "",
                celular: "",
                dtNascimento: "",
                sexo: "",
                cpf: "",
                crm: "",
                estado: "",
                cbos: "",
                medicos: [],
                baseURI:"http://localhost:3000/medicos"         
            }
      },
      methods: {
        limpar(){
            this.nome = "",
            this.email = "",
            this.telefone = "",
            this.celular = "",
            this.dtNascimento = "",
            this.sexo = "",
            this.cpf = "",
            this.crm = "",
            this.estado = "",
            this.cbos = "" 
        },

        PostMedico(){
            let obj ={
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
                celular: this.celular,
                dtNascimento: this.dtNascimento,
                sexo: this.sexo,
                cpf: this.cpf,
                crm: this.crm,
                estado: this.estado,
                cbos: this.cbos  
            };
            
            axios.post(this.baseURI, obj).then((result) =>{ 
                this.medicos = result.data
            })
            alert("MEDICO CADASTRADO!");
            this.limpar();
        },

        PutMedico(){
            let obj ={
                nome: this.nome,
                email: this.email,
                telefone: this.telefone,
                celular: this.celular,
                dtNascimento: this.dtNascimento,
                sexo: this.sexo,
                cpf: this.cpf,
                crm: this.crm,
                estado: this.estado,
                cbos: this.cbos  
            };

            axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
              console.log(result)
            })
        },

        DeleteMedico(){
          axios.delete(this.baseURI +"/"+this.id,).then((result) =>{
            console.log(result)
          })
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