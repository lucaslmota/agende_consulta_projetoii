const Consulta = require("../models/consulta-model");
const ConsultaService = require("../services/consulta-service");

var consultaService = new ConsultaService();

exports.get = async (req, res) => {
    res.json(await consultaService.getAll());
  };

exports.post = async (req, res) =>{
    res.json(await consultaService.add(new Consulta(
        req.body.data, req.body.hora)));
};

exports.put = async (req,res) =>{
    res.json(await consultaService.update(req.params.id,
        new Consulta( 
            req.body.data, req.body.hora)));
};

exports.delete = (req,res) =>{
    res.json(consultaService.delete(req.params.id));
};