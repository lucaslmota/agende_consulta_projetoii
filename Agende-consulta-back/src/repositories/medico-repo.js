const pool = require("../dbs/postgres");



exports.save = async (medico) => {
    const result = await pool.query(
      "INSERT INTO medicos(email, senha,nome,sobrenome,celular,telfixo,cpf,crm) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *;",
      [medico.email, medico.senha,medico.nome,medico.sobrenome,medico.celular,medico.telfixo,medico.cpf,medico.crm,]
    );
    return result.rows[0];
  };
   
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM medicos;");
    return result.rows;
};
   
  exports.findByName = async (nome) => {
    const result = await pool.query("SELECT * FROM medicos WHERE nome=$1;", [
      nome,
    ]);
    return result.rows;
  };
   
  exports.update = async (id, medico) => {
    const result = await pool.query(
      "UPDATE medicos SET email=$1, senha=$2,nome=$3,sobrenome=$4,celular=$5,telfixo=$6,cpf=$7,crm=$8  WHERE id=$9 RETURNING *;",
      [medico.email,medico.senha,medico.nome,medico.sobrenome,medico.celular,medico.telfixo,medico.cpf,medico.crm, id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM medicos WHERE id=$1;", [id]);
  };