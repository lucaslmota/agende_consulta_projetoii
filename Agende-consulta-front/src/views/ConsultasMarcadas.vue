<template>
  <div class="container">
        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-primary">
                        <!-- DIV ESQUERDA-->
                        <div class="col mx-auto text-center">
                        <br/>
                        <table class="table table-light">
                            <tr>
                                <td>PACIENTE</td>
                                <td>MÉDICO</td>
                                <td>DATA</td>
                                <td>HORÁRIO</td>
                            </tr>
                            <!-- FALTA ALTERAR -->
                            <tr  v-for="consulta in consultas " :key="consulta.id" >
                                <td></td>
                                <td>{{ consulta.paciente}}</td>
                                <td>{{ consulta.medico }}</td>
                                <td>{{ consulta.data }}</td>
                                <td>{{ consulta.horario }}</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        
                        <!-- DIV DIREITA-->
                        <div class="p-5">
                            
                            <hr>
                            <!-- <button type="submit" class="btn btn-primary btn-lg btn-block" @click="getAll">Mostrar</button><br/> -->
                            <button type="reset" class="btn btn-primary btn-lg btn-block" @click="this.$router.replace('pagina-inicial')">Voltar</button>
                                
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            paciente: "",
            medico: "",
            data: "",
            horario: "",
            consultas: [],
            baseURI:"http://localhost:3000/consultas"
        }
    },

    methods:{
        getAll() {
            axios.get(this.baseURI).then((result) =>{
                    this.consultas = result.data
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