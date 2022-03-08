const db = require('../bd_connection')
const express = require('express')
const getboletas = require('../Model/DTO_boletas')

const router = express.Router()

router.get(
    '/getboletas',
    (req, res) => {
        getboletas()
    }
)
module.exports = router