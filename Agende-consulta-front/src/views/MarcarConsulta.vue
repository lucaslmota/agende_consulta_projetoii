<template>
    <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">

                    <!-- DIV ESQUERDA-->
                    <div class="col-lg-5 d-none d-lg-block bg-primary text-center">
                        <div class="col mx-auto text-center">
                            <br/>
                            <br/>
                        
                        <div class="form-row">
                            <div class="col">
                                <table class="table table-light">
                                    <tr>
                                        <td>CÓDIGO</td>
                                        <td>MÉDICO</td>
                                    </tr>
                                    <tr  v-for="medico in medicos " :key="medico.id" >
                                        <td>{{ medico.id }}</td>
                                        <td>{{ medico.nome }}</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="col">
                                <table class="table table-light">
                                    <tr>
                                        <td>CÓDIGO</td>
                                        <td>PACIENTE</td>
                                    </tr>

                                    <tr  v-for="paciente in pacientes " :key="paciente.id" >
                                        <td>{{ paciente.id }}</td>
                                        <td>{{ paciente.nome }}</td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                        </div>
                    </div>

                    
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Marcar Consulta</h1>
                            </div>
                        <hr>

                        <form action="pgInicial.html" name="form" method="POST" class="needs-validation" novalidate>
                            <div>
                            <label for=""><i class="fas fa-user"></i> Dados da Consulta</label><br>

                            <div class="form-group left-inner-addon">
                                <div class="form-row">
                    
                                    <div class="col left-inner-addon">
                      
                                        <!-- <i class="fas fa-mobile"></i> -->
                                        <input type="text" id="medico" name="medico" class="form-control"
                                            placeholder="Digite o código do médico" v-model="medico" required>
                                            <div class="invalid-feedback">
                                                É obrigatório código do médico
                                            </div>
                                    </div>
                                    <div class="col left-inner-addon">
                                        <!--  <i class="fas fa-phone-alt"></i> -->
                                        <input type="text" id="paciente" name="paciente" class="form-control"
                                            placeholder="Digite o código do paciente" v-model="paciente">
                                        <div class="invalid-feedback">
                                            É obrigatório código do paciente
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                    
                            <div class="col left-inner-addon">
                                <input type="date" class="form-control" placeholder="Data" v-model="data" required>
                                <div class="invalid-feedback">
                                    Data da consulta é obrigatória
                                </div>
                            </div>
                            <div class="col left-inner-addon">
                      
                                <!-- <i class="fas fa-phone-alt"></i> -->
                                <input type="text" id="hora" name="hora" class="form-control" placeholder="Hora da consulta"
                                    pattern="\[0-9]{2}\[\s]-[0-9]{2}" data-mask="00:00" v-model="hora">
                                <div class="invalid-feedback">
                                    Hora da consulta é obrigatória
                                </div>

                            </div>
                        </div>
                  <hr>
                  <button type="submit" class="btn btn-primary btn-lg btn-block" @click="PostConsulta">Marcar</button><br/>
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
  nome: 'MarcarConsulta',
      data() {
            return {
                medico: "",
                paciente: "",
                data: "",
                hora: "",
                consultas: [],
                medicos: [],
                pacientes: [],
                baseURI:"http://localhost:3000/consultas",
                baseURIMedicos:"http://localhost:3000/medicos",
                baseURIPacientes:"http://localhost:3000/pacientes"        
            }
        },

      methods: {
        PostConsulta(){
            let obj ={
                paciente: this.paciente,
                medico: this.medico,
                data: this.data,
                hora: this.hora    
            };

            
            axios.post(this.baseURI, obj).then((result) =>{ 
              this.consultas = result.data
            })
        },

        PutConsulta(){
            let obj ={
                paciente: this.paciente,
                medico: this.medico,
                data: this.data,
                hora: this.hora   
            };

            
            axios.put(this.baseURI+"/" + this.id, obj).then((result) =>{
              console.log(result)
            })
        },

        DeleteConsulta(){
          axios.delete(this.baseURI +"/"+this.id,).then((result) =>{
              console.log(result)
          })
        },

        getMedicoPaciente() {
            axios.get(this.baseURIMedicos).then((result) =>{
                    this.medicos = result.data
                }),

            axios.get(this.baseURIPacientes).then((result) =>{
                    this.pacientes = result.data
                })
        }
    },
   
    created: function(){
        this.$nextTick(this.getMedicoPaciente)
    }
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