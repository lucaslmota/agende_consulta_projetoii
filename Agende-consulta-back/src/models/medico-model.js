class Medico{
    constructor(email,senha,nome,sobrenome,celular,telfixo,cpf,crm){
        this.email = email;
        this.senha = senha;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.celular = celular;
        this.telfixo = telfixo;
        this.cpf = cpf;
        this.crm = crm;
    }
}

module.exports = Medico;