const bd = require("../bd_connection");

const getfunciones = async () => {
  const res = await bd.query("select * from funciones;");
  console.log(res);
  return res;
};

const insertfunciones = async (funciones) => {
  const res = await bd.query(
    `INSERT INTO public.funciones (salas_id, peliculas_id, inicio_funcion, fin_funcion) VALUES('${funciones.salas_id}', '${funciones.peliculas_id}', '${funciones.inicio_funcion}', '${funciones.fin_funcion}');`
  );
  console.log(res);
  return res;
};

const updatefunciones = async (funciones) => {
  const res = await bd.query(`UPDATE public.funciones
  SET salas_id=${funciones.salas_id}, peliculas_id=${funciones.peliculas_id}, inicio_funcion= '${funciones.inicio_funcion}', fin_funcion='${funciones.fin_funcion}'
  WHERE id= ${funciones.id};
  `);
  console.log(res);
  return res;
};

const deletefunciones = async (funciones) => {
  const res = await bd.query(`DELETE FROM public.funciones
  WHERE id= ${funciones.id};
  `);
  console.log(res);
  return res;
};

module.exports = {
  getfunciones,
  insertfunciones,
  updatefunciones,
  deletefunciones,
};
