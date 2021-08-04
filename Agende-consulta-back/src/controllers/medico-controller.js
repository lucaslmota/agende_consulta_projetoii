const Medico = require("../models/medico-model");
const MedicoService = require("../services/medico-service");
var medicoService = new MedicoService();

exports.get = async (req, res) => {
    res.json(await medicoService.getAll());
  };

  exports.getByNome = async (req, res) =>{
    res.json(await medicoService.getByNome(req.query.nome));
  };

  exports.post = async (req, res) => {
    res.json(await medicoService.add(new Medico(req.body.email,req.body.senha,req.body.nome,req.body.sobrenome,req.body.celular,req.body.telfixo,req.body.cpf,req.body.crm )));
  };

  exports.put = async (req, res) => {
    res.json(
     await medicoService.update(
        req.params.id,
        new Medico(req.body.email,req.body.senha,req.body.nome,req.body.sobrenome,req.body.celular,req.body.telfixo,req.body.cpf,req.body.crm)
      )
    );
  };

  exports.delete = (req, res) => {
    res.json(medicoService.delete(req.params.id));
  };