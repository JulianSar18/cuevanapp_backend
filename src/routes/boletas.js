const express = require('express')
const { sendfile } = require('express/lib/response')
const deleteboletas = require('../Model/DTO_boletas')
const updatedboletas = require('../Model/DTO_boletas')
const sendboletas = require('../Model/DTO_boletas')
const getboletas = require('../Model/DTO_boletas')

const router = express.Router()

router.get(
    '/getboletas',
    async(req, res) => {
        getboletas()
        res.json(await getboletas())
    }
)

router.post(
    '/sendboletas',
    async(req, res) => {
        await sendboletas(req.body)
        res.statusCode = 200
        return res.json({ status: "buen trabajo " })
    }
)

router.put(
    '/updateboletas',
    async(req, res) => {
        await updatedboletas(req.body)
        res.statusCode = 200
        return res.json({ status: "buen trabajo " })
    }
)
router.delete(
    '/deleteboletas',
    async(req, res) => {
        await deleteboletas(req.body)
        res.statusCode = 200
        return res.json({ status: "buen trabajo " })
    }
)


module.exports = router