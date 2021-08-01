const pacienteRepo = require("../repositories/paciente-repo");
class PacienteService {
    constructor() {
      this.pacientes = [];
      this.id = 0;
      this.qtd = 0;
    }
    
    add(paciente) {
      this.id++;
      carro.id = this.id;
      this.pacientes.push(paciente);
    }
    
    getAll(){
      return pacienteRepo.findAll();
    }
    
    
  
    getByNome(nome) {
      return this.pacientes.filter(function (c) {
          return c.nome == nome;
      });
      
    }
  
    
    update(id, paciente) {
      this.pacientes.forEach(function (c) {
        if (id && id == c.id) {
          for (var i in paciente) {
            c[i] = paciente[i];
          }
        }
      });
    }
    
    delete(id) {
      this.pacientes = this.pacientes.filter(function (c) {
        return c.id != id;
      });
    }
  }
    
  module.exports = PacienteService;