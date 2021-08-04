<template>
  <div class="container">
      <h1 class="h4 text-light mb-4 align-center">Lista de Médicos</h1>
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0 d-none d-lg-block bg-primary text-center">
                <div class="px-2 border-0 shadow-lg my-5 ">
                        <h1 class="h4 text-light mb-4 align-center">Lista de Médicos</h1>
                        <table class="table table-striped table-light rounded">
                            <tr>
                                <td>NOME</td>
                                <td>CPF</td>
                                <td>DATA DE NASCIMENTO</td>
                                <td>SEXO</td>
                                <td>CRM</td>
                                <td>ESTADO</td>
                                <td>CBOS</td>
                                <td>EMAIL</td>
                                <td>TELEFONE</td>
                                <td>CELULAR</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="medico in medicos " :key="medico.id" >
                                <td>{{ medico.nome}}</td>
                                <td>{{ medico.cpf }}</td>
                                <td>{{ medico.dtNascimento }}</td>
                                <td>{{ medico.sexo }}</td>
                                <td>{{ medico.crm}}</td>
                                <td>{{ medico.estado }}</td>
                                <td>{{ medico.cbos }}</td>
                                <td>{{ medico.email }}</td>
                                <td>{{ medico.telefone }}</td>
                                <td>{{ medico.celular }}</td>
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
                crm: "",
                estado: "",
                cbos: "",
                medicos: [],
                baseURI:"http://localhost:3000/medicos"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.medicos = result.data
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