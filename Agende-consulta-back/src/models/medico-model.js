class Medico{
    constructor(email,senha,nome,sobreNome,celular,telFixo,cpf,crm){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.celular = celular;
        this.telFixo = telFixo;
        this.cpf = cpf;
        this.crm = crm;
    }
}

module.exports = Medico;