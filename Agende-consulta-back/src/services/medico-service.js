class MedicoService {
    constructor() {
      this.medicos = [];
      this.id = 0;
      this.qtd = 0;
    }
    
    add(paciente) {
      this.id++;
      carro.id = this.id;
      this.medicos.push(paciente);
    }
    
    getAll() {
      return this.medicos;
    }
    
    
  
    getByNome(nome) {
      return this.medicos.filter(function (c) {
          return c.nome == nome;
      });
      
    }
  
    
    update(id, paciente) {
      this.medicos.forEach(function (c) {
        if (id && id == c.id) {
          for (var i in paciente) {
            c[i] = paciente[i];
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