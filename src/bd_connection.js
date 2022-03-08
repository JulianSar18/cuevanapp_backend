const pgp = require("pg-promise")({});

const conexion = {
    user: 'pniuidktlrshff',
    host: 'ec2-54-83-21-198.compute-1.amazonaws.com',
    database: 'dbok8bn60lmfi1',
    password: '300697da0a144f393a94ea9b320d7a8cad06ae68d284c35ea1ac96f0ae9a732f',
    port: 5432,
    ssl: {
      rejectUnauthorized: false
    }
}

const db = pgp(conexion);

module.exports = db
