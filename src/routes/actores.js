const express = require('express');
const DTOactores = require('../Model/DTO_actores');

const router = express.Router()

router.get(
    '/getactores', async(req, res) => {
        const response = await DTOactores.getactores()
        return res.json({
            salas: response
        })
    }
)

router.post(
    '/insertactores', async(req, res) => {
        const actore = req.body
        const response = await DTOactores.sendactores(actore)
        res.statusCode = 200
        const actores = DTOactores.getactores()
        res.json({
            msg: "actore successfully inserted",
            actores: actores
        })
    }
)

router.put(
    '/updateactores', async(req, res) => {
        const actore = req.body
        console.log(req.body)
        const response = await DTOactores.updateactores(actore)
        const actores = await DTOactores.getactores()
        res.statusCode = 200
        res.json({
            msg: "actore successfully updated",
            actores: actores
        })
    }
)

router.delete(
    '/deleteactores', async(req, res) => {
        const actore = req.body
        console.log(actore)
        const response = await DTOactores.deleteactores(actore)
        const actores = await DTOactores.getactores()
        res.statusCode = 200
        res.json({
            msg: 'actore deleted',
            actores: actores
        })
    }
)

module.exports = router