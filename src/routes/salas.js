const express = require('express');
const DTOsalas = require('../Model/DTO_salas');

const router = express.Router()

router.get(
    '/getsalas', async(req, res) => {
        const response = await DTOsalas.getsalas()
        return res.json({
            salas: response
        })
    }
)

router.get(
    '/getsalascines', async(req, res) => {
        const response = await DTOsalas.getsalascines()
        return res.json({
            salas: response
        })
    }
)

router.post(
    '/insertsala', async(req, res) => {
        const sala = req.body
        const response = await DTOsalas.sendsalas(sala)
        res.statusCode = 200
        const salas = DTOsalas.getsalas()
        res.json({
            msg: "sala successfully inserted",
            salas: salas
        })
    }
)

router.put(
    '/updatesala', async(req, res) => {
        const sala = req.body
        console.log(req.body)
        const response = await DTOsalas.updatesalas(sala)
        const salas = await DTOsalas.getsalas()
        res.statusCode = 200
        res.json({
            msg: "sala successfully updated",
            salas: salas
        })
    }
)

router.delete(
    '/deletesala', async(req, res) => {
        const sala = req.body
        const response = await DTOsalas.deletesalas(sala)
        const salas = await DTOsalas.getsalas()
        res.statusCode = 200
        res.json({
            msg: 'sala deleted',
            salas: salas
        })
    }
)

module.exports = router