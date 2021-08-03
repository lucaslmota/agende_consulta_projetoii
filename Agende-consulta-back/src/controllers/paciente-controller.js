const Paciente = require("../models/paciente-model");
const PacienteService = require("../services/paciente-service");

var pacienteService = new PacienteService();

exports.get = async (req, res)=>{
    res.json(await pacienteService.getAll());
};

exports.getByNome = async (req,res) =>{
    res.json(await pacienteService.getByNome(req.query.nome));
};

exports.post = async (req, res) =>{
    res.json(await pacienteService.add(new Paciente(
        req.body.email,
        req.body.celular,
        req.body.telfixo,
        req.body.nome,
        req.body.sobrenome,
        req.body.datanascimento,
        req.body.sexo,
        req.body.cpf,
        req.body.rua,
        req.body.cep,
        req.body.numcasa,
        req.body.complemento,
        req.body.bairro,
        req.body.cidade)));
};

exports.put = async (req,res) =>{
    res.json(await pacienteService.update(req.params.id,
        new Paciente( 
            req.body.email,
        req.body.celular,
        req.body.telfixo,
        req.body.nome,
        req.body.sobrenome,
        req.body.datanascimento,
        req.body.sexo,
        req.body.cpf,
        req.body.rua,
        req.body.cep,
        req.body.numcasa,
        req.body.complemento,
        req.body.bairro,
        req.body.cidade)));
};

exports.delete = (req,res) =>{
    res.json(pacienteService.delete(req.params.id));
};