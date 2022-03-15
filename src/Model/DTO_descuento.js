const bd = require('../bd_connection')

const getdescuentos = async() => {
    const res = await bd.query('select * from descuentos;')
    console.log(res)
    return res
};

const senddescuentos = async(descuentos) => {
    const res = await bd.query(`insert into descuentos (boletas_id,cines_id,descuento) values (${descuentos.boletas_id}, ${descuentos.cines_id}, ${descuentos.descuento});`)
    console.log(res)
    return res
};

const updatedescuentos = async(descuentos) => {
    const res = await bd.query(`update descuentos set boletas_id = ${descuentos.boletas_id}, cines_id = ${descuentos.cines_id}, descuento = ${descuentos.descuento} where id = ${descuentos.id};`)
    console.log(res)
    return res
};

const deletedescuentos = async(descuento) => {
    const res = await bd.query(`delete from descuentos where id = ${descuento.id};`)
    console.log(res)
    return res
};

module.exports = { getdescuentos, deletedescuentos, senddescuentos, updatedescuentos }