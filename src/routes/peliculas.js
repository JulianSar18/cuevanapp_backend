const express = require('express');
const DTOpeliculas = require('../Model/DTO_peliculas');

const router = express.Router()

router.get(
    '/getpeliculas', async(req, res) => {
        const response = await DTOpeliculas.getpeliculas()
        return res.json({
            peliculas: response
        })
    }
)

router.post(
    '/insertpeliculas', async(req, res) => {
        const pelicula = req.body
        const response = await DTOpeliculas.sendpeliculas(pelicula)
        res.statusCode = 200
        const peliculas = DTOpeliculas.getpeliculas()
        res.json({
            msg: "pelicula successfully inserted",
            peliculas: peliculas
        })
    }
)

router.put(
    '/updatepeliculas', async(req, res) => {
        const pelicula = req.body
        console.log(req.body)
        const response = await DTOpeliculas.updatepeliculas(pelicula)
        const peliculas = await DTOpeliculas.getpeliculas()
        res.statusCode = 200
        res.json({
            msg: "pelicula successfully updated",
            peliculas: peliculas
        })
    }
)

router.delete(
    '/deletepeliculas', async(req, res) => {
        const pelicula = req.body
        console.log(pelicula)
        const response = await DTOpeliculas.deletepeliculas(pelicula)
        const peliculas = await DTOpeliculas.getpeliculas()
        res.statusCode = 200
        res.json({
            msg: 'pelicula deleted',
            pelicula: peliculas
        })
    }
)

module.exports = router