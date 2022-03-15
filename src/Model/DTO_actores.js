const bd = require('../bd_connection')

const getactores = async() => {
    const res = await bd.query('select * from actores;')
    console.log(res)
    return res
};

const sendactores = async(actores) => {
    const res = await bd.query(`insert into actores (nombre) values ('${actores.nombre}');`)
    console.log(res)
    return res
};

const updateactores = async(actores) => {
    const res = await bd.query(`update actores set nombre = '${actores.nombre}' where id = ${actores.id};`)
    console.log(res)
    return res
};

const deleteactores = async(actores) => {
    const res = await bd.query(`delete from actores where id = ${actores.id};`)
    console.log(res)
    return res
};

module.exports = { getactores, deleteactores, sendactores, updateactores }