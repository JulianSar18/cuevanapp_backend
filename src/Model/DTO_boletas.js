const bd = require('../bd_connection')

const getboletas = async() => {
    const res = await bd.query('select * from boletas;')
    console.log(res)
};

module.exports = getboletas