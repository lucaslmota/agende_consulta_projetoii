const pool = require("../dbs/postgres");

exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM pacientes;");
    return result.rows;
};