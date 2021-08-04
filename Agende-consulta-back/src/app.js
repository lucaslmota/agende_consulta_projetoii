const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
const index = require("./routes/index");
const pacientes = require("./routes/paciente-route");
const medicos = require("./routes/medico-route");
const consultas = require("./routes/consulta-rout");
const usuarios = require("./routes/usuarui-route");

app.use("/", index);
app.use("/pacientes",pacientes);
app.use("/medicos",medicos);
app.use("/consultas",consultas);
app.use("./usuarios",usuarios);
app.use((req, res, next) => {
    res.status(404).send({
      status: 404,
      error: "Not found",
    });
  });


//Server
app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});