<template>
  <div class="container">
      <h1 class="h4 text-light mb-5 align-center">Lista de Pacietes</h1>
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                <div class="px-2 border-0 shadow-lg my-5 ">
                        <h1 class="h4 text-light mb-4 align-center">Lista de Pacientes</h1>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>NOME</td>
                                <td>CPF</td>
                                <td>DT NASCIMENTO</td>
                                <td>SEXO</td>
                                <td>RUA</td>
                                <td>NÚMERO</td>
                                <!-- <td>COMPLEMENTO</td> -->
                                <td>CEP</td>
                                <td>BAIRRO</td>
                                <td>CIDADE</td>
                                <td>EMAIL</td>
                                <td>TELEFONE</td>
                                <td>CELULAR</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="paciente in pacientes " :key="paciente.id" >
                                <td>{{ paciente.nome}}</td>
                                <td>{{ paciente.cpf }}</td>
                                <td>{{ paciente.dtNascimento }}</td>
                                <td>{{ paciente.sexo }}</td>
                                <td>{{ paciente.rua}}</td>
                                <td>{{ paciente.numCasa }}</td>
                                <!-- <td>{{ paciente.complemento }}</td> -->
                                <td>{{ paciente.cep }}</td>
                                <td>{{ paciente.bairro }}</td>
                                <td>{{ paciente.cidade }}</td>
                                <td>{{ paciente.email }}</td>
                                <td>{{ paciente.telefone }}</td>
                                <td>{{ paciente.celular }}</td>
                            </tr>
                        </table>
                    </div>
                        <br/>
                        <hr/>
                        <br/>
                        <div class="mb-4 row justify-content-md-center">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <router-link to="pagina-inicial">
                                <button type="reset" class="btn btn-light btn-lg btn-block">Voltar</button>
                            </router-link>
                        </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
      data() {
            return {
                nome: "",
                email: "",
                telefone: "",
                celular: "",
                dtNascimento: "",
                sexo: "",
                cpf: "",
                rua: "",
                cep: "",
                numCasa: "",
                complemento: "",
                bairro: "",
                cidade: "",
                pacientes: [],
                baseURI:"http://localhost:3000/pacientes"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.pacientes = result.data
                })
        }
    },
    
    created: function(){
        this.$nextTick(this.getAll)
    }
}
</script>

<style>

</style>