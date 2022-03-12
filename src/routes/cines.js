const express = require('express')
const { sendfile } = require('express/lib/response')
const DTO_cines = require('../Model/DTO_cines')

const router = express.Router()

router.get(
    '/getcines',
    async(req, res) => {
        const cines = await DTO_cines.getcines()
        res.json({ cines })
    }
)

router.post(
    '/sendcines',
    async(req, res) => {
        await DTO_cines.sendcines(req.body)
        res.statusCode = 200
        return res.json({ status: "200" })
    }
)

router.put(
    '/updatecines',
    async(req, res) => {
        await DTO_cines.updatedcines(req.body)
        res.statusCode = 200
        return res.json({ status: "200" })
    }
)
router.delete(
    '/deletecines',
    async(req, res) => {
        await DTO_cines.deletecines(req.body)
        res.statusCode = 200
        return res.json({ status: "200" })
    }
)


module.exports = router