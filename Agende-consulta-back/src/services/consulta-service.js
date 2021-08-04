const consultaRepo = require("../repositories/usuario-repo");
class ConsultaService {
   
    
    add(consulta) {
      return consultaRepo.save(consulta);
    }

    getAll() {
      return consultaRepo.findAll();
    }

    update(id, consulta) {
      return consultaRepo.update(id,consulta);
    }
    
    delete(id) {
     return consultaRepo.delete(id);
  }
}
    
  module.exports = ConsultaService;