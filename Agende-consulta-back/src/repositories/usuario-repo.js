const pool = require("../dbs/postgres");



exports.save = async (usuario) => {
    const result = await pool.query(
      "INSERT INTO usuarios(nome,usuario,senha) VALUES ($1,$2,$3) RETURNING *;",
      [usuario.nome, usuario.usuario, usuario.senha]
    );
    return result.rows[0];
  };
   
//   exports.findAll = async () =>{
//     const result = await pool.query("SELECT * FROM medicos;");
//     return result.rows;
// };
   
  exports.update = async (id, usuario) => {
    const result = await pool.query(
      "UPDATE usuarios SET nome=$1, usuario=$2, senha=$3,  WHERE id=$4 RETURNING *;",
      [usuario.nome, usuario.usuario, usuario.senha, id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM usuarios WHERE id=$1;", [id]);
  };