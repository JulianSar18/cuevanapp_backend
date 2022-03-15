const bd = require('../bd_connection')

const getpeliculas = async() => {
    const res = await bd.query('select * from peliculas;')
    console.log(res)
    return res
};

const sendpeliculas = async(peliculas) => {
    const res = await bd.query(`insert into peliculas (clacificacion_id,director_id,genero_id,nombre,sipnosis,image_url) values (${peliculas.clacificacion_id},
        ${peliculas.director_id},${peliculas.genero_id},'${peliculas.nombre}','${peliculas.sipnosis}','${peliculas.image_url}');`)
    console.log(res)
    return res
};

const updatepeliculas = async(peliculas) => {
    const res = await bd.query(`update peliculas set clacificacion_id = ${peliculas.clacificacion_id}, director_id = ${peliculas.director_id},
    genero_id = ${peliculas.genero_id}, nombre = '${peliculas.nombre}', sipnosis = '${peliculas.sipnosis}', image_url = '${peliculas.image_url}'  where id = ${peliculas.id};`)
    console.log(res)
    return res
};

const deletepeliculas = async(peliculas) => {
    const res = await bd.query(`delete from peliculas where id = ${peliculas.id};`)
    console.log(res)
    return res
};

module.exports = { getpeliculas, deletepeliculas, sendpeliculas, updatepeliculas }