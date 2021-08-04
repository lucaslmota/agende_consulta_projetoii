const pool = require("../dbs/postgres");



exports.save = async (consulta) => {
    const result = await pool.query(
      "INSERT INTO consultas(data,hora) VALUES ($1,$2) RETURNING *;",
      [consulta.data, consulta.hora]
    );
    return result.rows[0];
  };
   
  exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM consultas;");
    return result.rows;
};
   
 
   
  exports.update = async (id, consulta) => {
    const result = await pool.query(
      "UPDATE consultas SET data=$1, hora=$2  WHERE id=$3 RETURNING *;",
      [ consulta.data, consulta.hora,id]
    );
    return result.rows[0];
  };
   
  exports.delete = async (id) => {
    await pool.query("DELETE FROM consultas WHERE id=$1;", [id]);
  };