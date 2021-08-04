const pool = require("../dbs/postgres");



exports.save = async (paciente) => {
    const result = await pool.query(
      "INSERT INTO pacientes(email, celular,telfixo,nome,sobrenome,datanascimento,sexo,cpf,rua,cep,numcasa,complemento,bairro,cidade) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *;",
      [paciente.email,paciente.celular,paciente.telfixo,paciente.nome,paciente.sobrenome,paciente.datanascimento,paciente.sexo,paciente.cpf,paciente.rua,paciente.cep,paciente.numcasa,paciente.complemento,paciente.bairro,paciente.cidade]
    );
    return result.rows[0];
  };
  
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM pacientes;");
    return result.rows;
};
   
  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM pacientes WHERE nome=$1;", [
      nome,
    ]);
    return result.rows;
  };
   
  exports.update = async (id, paciente) => {
    const result = await pool.query(
      "UPDATE pacientes SET email=$1, celular=$2,telfixo=$3,nome=$4,sobrenome=$5,datanascimento=$6,sexo=$7,cpf=$8,rua=$9,cep=$10,numcasa=$11,complemento=$12,bairro=$13,cidade=$14  WHERE id=$15 RETURNING *;",
      [paciente.email,paciente.celular,paciente.telfixo,paciente.nome,paciente.sobrenome,paciente.datanascimento,paciente.sexo,paciente.cpf,paciente.rua,paciente.cep,paciente.numcasa,paciente.complemento,paciente.bairro,paciente.cidade, id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM pacientes WHERE id=$1;", [id]);
  };