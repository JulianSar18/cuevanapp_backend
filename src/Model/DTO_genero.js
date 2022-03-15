const bd = require('../bd_connection')

const getgeneros = async() => {
    const res = await bd.query('select * from genero;')
    console.log(res)
    return res
};

const sendgeneros = async(generos) => {
    const res = await bd.query(`insert into genero (genero) values ('${generos.genero}');`)
    console.log(res)
    return res
};

const updategeneros = async(generos) => {
    const res = await bd.query(`update genero set genero = '${generos.genero}' where id = ${generos.id};`)
    console.log(res)
    return res
};

const deletegeneros = async(generos) => {
    const res = await bd.query(`delete from genero where id = ${generos.id};`)
    console.log(res)
    return res
};

module.exports = { getgeneros, deletegeneros, sendgeneros, updategeneros }