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
    console.log('perrrro')
    const res = await bd.query(`delete from salas where id = ${salas.id};`)
    console.log(res)
    return res
};

const getsalascines = async(salas) => {
    const res = await bd.query(`select salas.id, salas.numero_sala, cines.nombre from salas inner join cines on salas.cines_id = cines.id;`)
    console.log(res)
    return res
};

module.exports = { getsalas, deletesalas, sendsalas, updatesalas, getsalascines }