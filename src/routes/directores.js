const express = require('express');
const DTOdirectores = require('../Model/DTO_directores');

const router = express.Router()

router.get(
    '/getdirectores', async(req, res) => {
        const response = await DTOdirectores.getdirectores()
        return res.json({
            salas: response
        })
    }
)

router.post(
    '/insertdirectores', async(req, res) => {
        const director = req.body
        const response = await DTOdirectores.senddirectores(director)
        res.statusCode = 200
        const directores = DTOdirectores.getdirectores()
        res.json({
            msg: "director successfully inserted",
            directores: directores
        })
    }
)

router.put(
    '/updatedirectores', async(req, res) => {
        const director = req.body
        console.log(req.body)
        const response = await DTOdirectores.updatedirectores(director)
        const directores = await DTOdirectores.getdirectores()
        res.statusCode = 200
        res.json({
            msg: "director successfully updated",
            directores: directores
        })
    }
)

router.delete(
    '/deletedirectores', async(req, res) => {
        const director = req.body
        console.log(director)
        const response = await DTOdirectores.deletedirectores(director)
        const directores = await DTOdirectores.getdirectores()
        res.statusCode = 200
        res.json({
            msg: 'director deleted',
            directores: directores
        })
    }
)

module.exports = router