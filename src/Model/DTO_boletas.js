const bd = require('../bd_connection')

const getboletas = async() => {
    const res = await bd.any('select * from boletas;')
    console.log(res)
    return res
};

const sendboletas = async(boleta) => {
    const res = await bd.query(`insert into boletas (precios,categoria,descuento) values (${boleta.precios}, '${boleta.categoria}', ${boleta.descuento});`)
    console.log(res)
    return res
};

const updatedboletas = async(boleta) => {
    const res = await bd.query(`update boletas set precios = ${boleta.precios}, categoria = '${boleta.categoria}', descuento = ${boleta.descuento} where id=${boleta.id};`)
    console.log(res)
    return res
};

const deleteboletas = async(boleta) => {
    const res = await bd.query(`delete from boletas where id=${boleta.id};`)
    console.log(res)
    return res
};

module.exports = getboletas
module.exports = sendboletas
module.exports = updatedboletas
module.exports = deleteboletas