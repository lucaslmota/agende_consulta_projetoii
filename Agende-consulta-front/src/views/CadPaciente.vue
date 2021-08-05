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
                <h1 class="h4 text-gray-900 mb-4">Cadastro de Paciente</h1>
              </div>
              <hr>

              
                <div>
                     <!-- Dados de contato -->
                    <label for=""><i class="fas fa-user"></i> Dados de Contato</label><br>


                  <div class="form-group left-inner-addon">
                    <!-- E-mail -->
                    <i class="fas fa-envelope"></i>
                    <input type="email" name="email"  class="form-control"
                      placeholder="E-mail do Paciente" v-model="email" required>
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
                        placeholder="Digite o telefone" v-model="telFixo">

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

                    <div class="col">
                      <!-- Sobrenome -->
                      <input type="text" class="form-control" placeholder="Sobrenome" v-model="sobrenome" required>
                      <div class="invalid-feedback">
                        O sobrenome é obrigatório.
                      </div>
                    </div>
                  </div>
                  <br>

                  <div class="form-row">
                    <!-- Data e Sexo -->
                    <div class="col">
                      <!-- Data -->
                      <input type="text" class="form-control" placeholder="Data de nascimento" v-model="datanacimento" required>
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
                    <input type="text" class="form-control" placeholder="CPF do Paciente"
                      pattern="/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})$/" data-mask="000.000.000.-00" v-model="cpf">
                  </div>
                </div>
                <hr>

                <div>
                  <!-- Endereço -->
                  <label for=""><i class="fas fa-map-marker-alt"></i> Endereço</label>

                  <div class="form-row">
                    <!-- Rua e CEP -->
                    <div class="form-group col-md-8">
                      <!-- Rua -->
                      <input type="text" class="form-control" placeholder="Digite a rua" v-model="rua" required>
                      <div class="invalid-feedback">
                        Seu endereço é obrigatório.
                      </div>
                    </div>

                    <div class="form-group col-md-4">
                      <!-- CEP -->
                      <input type="text" class="form-control" placeholder="Digite o CEP" v-model="cep"
                        pattern="\[0-9]{5}\[\s]-[0-9]{3}" data-mask="00000-000" required>
                        <div class="invalid-feedback">
                          O cep é obrigatório.
                        </div>
                    </div>
                  </div>

                  <div class="form-row">
                    <!-- Nº e Complemento -->
                    <div class="form-group col-md-4">
                      <!-- Nº -->
                      <input type="text" class="form-control" placeholder="Digite o Nº" v-model="numcasa">
                    </div>

                    <div class="form-group col-md-8">
                      <!-- Complemento -->
                      <input type="text" class="form-control" placeholder="Digite o complemento" v-model="complemento">
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <!-- Bairro -->
                    <input type="text" class="form-control" placeholder="Digite o Bairro" v-model="bairro">
                  </div>

                  <div class="form-row">
                    <!-- Cidade e Estado -->
                    <div class="form-group col-md-12">
                      <!-- Cidade -->
                      <input type="text" class="form-control" placeholder="Digite a cidade" required v-model="cidade">
                      <div class="invalid-feedback">
                        Digite uma cidade válida.
                      </div>
                    </div>
                  </div>
                  <hr>
                  <button type="submit" class="btn btn-primary btn-lg btn-block" @click="PostPaciente">Cadastar</button> <br/>
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
                id:"",
                email:"",
                celular:"",
                telFixo:"",
                nome:"",
                sobrenome:"",
                datanacimento:"",
                sexo:"",
                cpf:"",
                rua:"",
                cep:"",
                numcasa:"",
                complemento:"",
                bairro:"",
                cidade:"",
                pacientes:[],
                baseURI:"http://localhost:3000/pacientes"        
            }
      },
      methods: {
        // limpar(){
        //     this.email ="",
        //         this.celular="",
        //         this.telFixo="",
        //         this.nome="",
        //         this.sobreNome="",
        //         this.datanacimento="",
        //         this.sexo="",
        //         this.cpf="",
        //         this.rua="",
        //         this.cep="",
        //         this.numcasa="",
        //         this.complemento="",
        //         this.bairro="",
        //         this.cidade=""
        // },

        PostPaciente(){
            let obj ={
              nome: this.nome,
              sobrenome: this.sobrenome,
              email: this.email,
              telFixo: this.telFixo,
              celular: this.celular,
              datanacimento: this.datanacimento,
              sexo: this.sexo,
              cpf: this.cpf,
              rua: this.rua,
              cep: this.cep,
              numcasa: this.numcasa,
              complemento: this.complemento,
              bairro: this.bairro,
              cidade: this.cidade   
            };
            
            axios.post(this.baseURI, obj).then((result) =>{ 
                this.pacientes = result.data
            })
            alert("PACIENTE CADASTRADO!");
            
        },

        PutPaciente(){
            let obj ={
              nome: this.nome,
              sobrenome: this.sobrenome,
              email: this.email,
              telFixo: this.telFixo,
              celular: this.celular,
              datanacimento: this.datanacimento,
              sexo: this.sexo,
              cpf: this.cpf,
              rua: this.rua,
              cep: this.cep,
              numcasa: this.numcasa,
              complemento: this.complemento,
              bairro: this.bairro,
              cidade: this.cidade   
            };

            axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
              console.log(result)
            })
        },

        DeletePaciente(){
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