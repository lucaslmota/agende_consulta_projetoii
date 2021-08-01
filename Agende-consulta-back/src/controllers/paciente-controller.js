const Paciente = require("../models/paciente-model");
const PacienteService = require("../services/paciente-service");

var pacienteService = new PacienteService();

exports.get = async (req, res)=>{
    res.json(await pacienteService.getAll());
};

exports.getByNome = (req,res) =>{
    res.json(pacienteService.getByNome(req.query.nome));
};

exports.post = (req, res) =>{
    res.json(pacienteService.add(new Paciente(
        req.body.email,
        req.body.celular,
        req.body.telFixo,
        req.body.nome,
        req.body.sobreNome,
        req.body.dataNascimento,
        req.body.sexo,
        req.body.cpf,
        req.body.rua,
        req.body.cep,
        req.body.numCasa,
        req.body.complemento,
        req.body.bairro,
        req.body.cidade)));
};

exports.put = (req,res) =>{
    res.json(pacienteService.update(req.params.id,
        new Paciente( 
            req.body.email,
        req.body.celular,
        req.body.telFixo,
        req.body.nome,
        req.body.sobreNome,
        req.body.dataNascimento,
        req.body.sexo,
        req.body.cpf,
        req.body.rua,
        req.body.cep,
        req.body.numCasa,
        req.body.complemento,
        req.body.bairro,
        req.body.cidade)));
};

exports.delete = (req,res) =>{
    res.json(pacienteService.delete(req.params.id));
};