const pgp = require('pg-promise')({});
const conexion = {
    user: 'pniuidktlrshff',
    password: '300697da0a144f393a94ea9b320d7a8cad06ae68d284c35ea1ac96f0ae9a732f',
    host: 'ec2-54-83-21-198.compute-1.amazonaws.com',
    port: '5432',
    database: 'dbok8bn60lmfi1'
}

const db = pgp(conexion)
module.exports = db