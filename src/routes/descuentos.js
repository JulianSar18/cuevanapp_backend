const express = require('express');
const DTOdescuento = require('../Model/DTO_descuento');

const router = express.Router()

router.get(
    '/getdescuentos', async(req, res) => {
        const response = await DTOdescuento.getdescuentos()
        return res.json({
            descuentos: response
        })
    }
)

router.post(
    '/insertdescuento', async(req, res) => {
        const descuento = req.body
        const response = await DTOdescuento.senddescuentos(descuento)
        res.statusCode = 200
        const descuentos = DTOdescuento.getdescuentos()
        res.json({
            msg: "descuento successfully inserted",
            descuentos: descuentos
        })
    }
)

router.put(
    '/updatedescuento', async(req, res) => {
        const descuento = req.body
        console.log(req.body)
        const response = await DTOdescuento.updatedescuentos(descuento)
        const descuentos = await DTOdescuento.getdescuentos()
        res.statusCode = 200
        res.json({
            msg: "descuento successfully updated",
            descuentos: descuentos
        })
    }
)

router.delete(
    '/deletedescuento', async(req, res) => {
        const descuento = req.body
        console.log(descuento)
        const response = await DTOdescuento.deletedescuentos(descuento)
        const descuentos = await DTOdescuento.getdescuentos()
        res.statusCode = 200
        res.json({
            msg: 'descuento deleted',
            descuentos: descuentos
        })
    }
)
module.exports = router