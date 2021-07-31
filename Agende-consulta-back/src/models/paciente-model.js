class Paciente{
    constructor(email,celular,telFixo,nome,sobreNome,dataNascimento,sexo,cpf,rua,cep,numCasa,complemento,bairro,cidade){
        this.email = email;
        this.celular = celular;
        this.telFixo = telFixo;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.rua = rua;
        this.cep = cep;
        this.numCasa = numCasa;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cidade = cidade;
    }
}

module.exports = Paciente;