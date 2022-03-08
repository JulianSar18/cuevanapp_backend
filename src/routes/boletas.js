const express = require('express')
const getboletas = require('../Model/DTO_boletas')

const router = express.Router()

router.get(
    '/getboletas',
    (req, res) => {
        getboletas()
        console.log('hola')
    }
)
module.exports = router