const medicoRepo = require("../repositories/medico-repo");
class MedicoService {
    constructor() {
      this.medicos = [];
      this.id = 0;
    }
    
    add(medico) {
      this.id++;
      medico.id = this.id;
      this.medicos.push(medico);
    }
    
    getAll() {
      return medicoRepo.findAll();
    }
    
    getByNome(nome) {
      return this.medicos.filter(function (c) {
          return c.nome == nome;
      });
      
    }
  
    
    
    update(id, medico) {
      this.medicos.forEach(function (c) {
        if (id && id == c.id) {
          for (var i in medico) {
            c[i] = medico[i];
          }
        }
      });
    }
    
    delete(id) {
      this.medicos = this.medicos.filter(function (c) {
        return c.id != id;
      });
    }
  }
    
  module.exports = MedicoService;