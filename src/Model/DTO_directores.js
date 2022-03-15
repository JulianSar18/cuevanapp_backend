const bd = require('../bd_connection')

const getdirectores = async() => {
    const res = await bd.query('select * from director;')
    console.log(res)
    return res
};

const senddirectores = async(directores) => {
    const res = await bd.query(`insert into director (nombre) values ('${directores.nombre}');`)
    console.log(res)
    return res
};

const updatedirectores = async(directores) => {
    const res = await bd.query(`update director set nombre = '${directores.nombre}' where id = ${directores.id};`)
    console.log(res)
    return res
};

const deletedirectores = async(directores) => {
    const res = await bd.query(`delete from director where id = ${directores.id};`)
    console.log(res)
    return res
};

module.exports = { getdirectores, deletedirectores, senddirectores, updatedirectores }