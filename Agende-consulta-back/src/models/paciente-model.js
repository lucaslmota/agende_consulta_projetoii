class Paciente{
    constructor(email,celular,telfixo,nome,sobrenome,datanacimento,sexo,cpf,rua,cep,numcasa,complemento,bairro,cidade){
        this.email = email;
        this.celular = celular;
        this.telfixo = telfixo;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.datanacimento = datanacimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.rua = rua;
        this.cep = cep;
        this.numcasa = numcasa;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

module.exports = Paciente;