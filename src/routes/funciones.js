const express = require("express");
const DTOfunciones = require("../Model/DTO_funciones");

const router = express.Router();

router.get("/getfunciones", async (req, res) => {
  const response = await DTOfunciones.getfunciones();
  return res.json({
    funciones: response,
  });
});

router.post("/postfunciones", async (req, res) => {
  const funcion = req.body;
  const response = await DTOfunciones.insertfunciones(funcion);
  res.statusCode = 200;
  const funciones = await DTOfunciones.getfunciones();
  return res.json({
    msg: "Funcion successfully inserted",
    funciones: funciones,
  });
});

router.put("/putfunciones", async (req, res) => {
  const funcion = req.body;
  const response = await DTOfunciones.updatefunciones(funcion);
  res.statusCode = 200;
  const funciones = await DTOfunciones.getfunciones();
  return res.json({
    msg: "Funcion successfully update",
    funciones: funciones,
  });
});

router.delete("/deletefunciones", async (req, res) => {
  const funcion = req.body;
  const response = await DTOfunciones.deletefunciones(funcion);
  res.statusCode = 200;
  const funciones = await DTOfunciones.getfunciones();
  return res.json({
    msg: "Funcion successfully delete",
    funciones: funciones,
  });
});

module.exports = router;
