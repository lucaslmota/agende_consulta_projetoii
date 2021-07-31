const Medico = require("../models/medico-model");
const MedicoService = require("../services/medico-service");

var medicoService = new MedicoService();

exports.get = (req, res)=>{
    res.json(medicoService.getAll());
};

exports.getByNome = (req,res) =>{
    res.json(medicoService.getByNome(req.query.nome));
};

exports.post = (req, res) =>{
    res.json(medicoService.add(new Medico(
        req.body.email,
        req.body.senha,
        req.body.nome,
        req.body.sobreNome,
        req.body.celular,
        req.body.telFixo,
        req.body.cpf,
        req.body.crm)));
};

exports.put = (req,res) =>{
    res.json(medicoService.update(req.params.id,
        new Medico( 
            req.body.email,
            req.body.senha,
            req.body.nome,
            req.body.sobreNome,
            req.body.celular,
            req.body.telFixo,
            req.body.cpf,
            req.body.crm)));
};

exports.delete = (req,res) =>{
    res.json(medicoService.delete(req.params.id));
};