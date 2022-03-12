const bd = require('../bd_connection')

const getcines = async() => {
    const res = await bd.query('select * from cines;')
    console.log(res)
    return res
};

const sendcines = async(cine) => {
    const res = await bd.query(`insert into cines (nombre,direccion,telefono) values ('${cine.nombre}', '${cine.direccion}', ${cine.telefono});`)
    console.log(res)
    return res
};

const updatedcines = async(cine) => {
    const res = await bd.query(`update cines set nombre = '${cine.nombre}', direccion = '${cine.direccion}', telefono = '${cine.telefono}' where id=${cine.id};`)
    console.log(res)
    return res
};

const deletecines = async(cine) => {
    const res = await bd.query(`delete from cines where id=${cine.id};`)
    console.log(res)
    return res
};


module.exports = { getcines, sendcines, updatedcines, deletecines }