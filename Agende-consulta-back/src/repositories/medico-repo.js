const pool = require("../dbs/postgres");

exports.findAll = async () =>{
    const result = await pool.query("SELECT * FROM medicos;");
    return result.rows;
};