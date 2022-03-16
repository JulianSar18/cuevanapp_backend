const express = require("express");

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4000
app.use(express.json());

app.use(require("./src/routes/boletas"));
app.use(require("./src/routes/usuarios"));
app.use(require("./src/routes/cines"));
app.use(require("./src/routes/descuentos"));
app.use(require("./src/routes/salas"));
app.use(require("./src/routes/actores"));
app.use(require("./src/routes/directores"));
app.use(require("./src/routes/genero"));
app.use(require("./src/routes/peliculas"));
app.use(require("./src/routes/funciones"));

app.listen(PORT, () => {
  console.log("server on port",PORT);
});
