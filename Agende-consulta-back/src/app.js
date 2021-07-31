const express = require("express");
app = express();
port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rotas
const index = require("./routes/index");
const medicos = require("./routes/medico-route");
const pacientes = require("./routes/paciente-route")

app.use("/", index);
app.use("/medicos", medicos);
app.use("/pacientes",pacientes);
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