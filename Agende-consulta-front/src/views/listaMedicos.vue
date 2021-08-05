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
                                <td>SOBRENOME</td>
                                <td>CPF</td>
                                <td>CRM</td>
                                <td>EMAIL</td>
                                <td>TELEFONE</td>
                                <td>CELULAR</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="medico in medicos " :key="medico.id" >
                                <td>{{ medico.nome}}</td>
                                <td>{{ medico.sobrenome}}</td>
                                <td>{{ medico.cpf }}</td>
                                <td>{{ medico.crm}}</td>
                                <td>{{ medico.email }}</td>
                                <td>{{ medico.telfixo }}</td>
                                <td>{{ medico.celular }}</td>
                            </tr>
                        </table>
                    </div>
                        <br/>
                        <hr/>
                        <br/>
                        <div class="mb-4 justify-content-md-center col-md-auto w-25 centraliza">
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-light btn-lg btn-block " @click="this.$router.replace('pagina-inicial')">Voltar</button>
                            
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
                email: "",
                nome: "",
                sobrenome:"",
                telfixo: "",
                celular: "",
                cpf: "",
                crm: "",
                medicos: [],
                baseURI:"http://localhost:3000/medicos"      
            }
      },
      methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.medicos = result.data
                })
        },

    },
    
    created: function(){
        this.$nextTick(this.getAll)
    }
}
</script>

<style>

.centraliza {
    width: 555px;
    margin: auto;
}

</style>