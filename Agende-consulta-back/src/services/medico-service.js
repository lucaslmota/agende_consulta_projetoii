const medicoRepo = require("../repositories/medico-repo");
class MedicoService {
   
    
    add(medico) {
      return medicoRepo.save(medico);
    }
    
    getAll() {
      return medicoRepo.findAll();
    }
    
    getByNome(nome) {
      return medicoRepo.findByName(nome);
      
    }

    update(id, medico) {
      return medicoRepo.update(id,medico);
    }
    
    delete(id) {
     return medicoRepo.delete(id);
  }
}
    
  module.exports = MedicoService;