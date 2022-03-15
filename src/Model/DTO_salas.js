const bd = require('../bd_connection')

const getsalas = async() => {
    const res = await bd.query('select * from salas;')
    console.log(res)
    return res
};

const sendsalas = async(salas) => {
    const res = await bd.query(`insert into salas (numero_sala,cines_id) values ('${salas.numero_sala}', ${salas.cines_id});`)
    console.log(res)
    return res
};

const updatesalas = async(salas) => {
    const res = await bd.query(`update salas set numero_sala = '${salas.numero_sala}', cines_id = ${salas.cines_id} where id = ${salas.id};`)
    console.log(res)
    return res
};

const deletesalas = async(salas) => {
    const res = await bd.query(`delete from salas where id = ${salas.id};`)
    console.log(res)
    return res
};

module.exports = { getsalas, deletesalas, sendsalas, updatesalas }