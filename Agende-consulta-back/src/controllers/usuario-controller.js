const Usuario = require("../models/usuario-model");
const UsuarioService = require("../services/usuario-service");

var usuarioService = new UsuarioService();





exports.post = async (req, res) =>{
    res.json(await usuarioService.add(new Usuario(
        req.body.nome, req.body.usuario,req.body.senha)));
};

exports.put = async (req,res) =>{
    res.json(await usuarioService.update(req.params.id,
        new Usuario( 
            req.body.nome, req.body.usuario,req.body.senha)));
};

exports.delete = (req,res) =>{
    res.json(usuarioService.delete(req.params.id));
};