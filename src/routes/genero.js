const express = require('express');
const DTOgnero = require('../Model/DTO_genero');

const router = express.Router()

router.get(
    '/getgeneros', async(req, res) => {
        const response = await DTOgnero.getgeneros()
        return res.json({
            generos: response
        })
    }
)

router.post(
    '/insertgeneros', async(req, res) => {
        const actore = req.body
        const response = await DTOgnero.sendgeneros(actore)
        res.statusCode = 200
        const generos = DTOgnero.getgeneros()
        res.json({
            msg: "actore successfully inserted",
            generos: generos
        })
    }
)

router.put(
    '/updategeneros', async(req, res) => {
        const actore = req.body
        console.log(req.body)
        const response = await DTOgnero.updategeneros(actore)
        const generos = await DTOgnero.getgeneros()
        res.statusCode = 200
        res.json({
            msg: "actore successfully updated",
            generos: generos
        })
    }
)

router.delete(
    '/deletegeneros', async(req, res) => {
        const actore = req.body
        console.log(actore)
        const response = await DTOgnero.deletegeneros(actore)
        const generos = await DTOgnero.getgeneros()
        res.statusCode = 200
        res.json({
            msg: 'actore deleted',
            generos: generos
        })
    }
)

module.exports = router