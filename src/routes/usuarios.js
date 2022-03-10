const express = require('express');
const dtoUsers = require('../Model/DTO_usuarios');

const router = express.Router()

router.get(
  '/getusers', async (req, res) => {
    const response = await dtoUsers.getUsuarios()
    console.log(response)
    return res.json(response)
  }
)

router.post(
  '/insertuser', async (req, res) => {
    const user = req.body
    const response = await dtoUsers.insertUser(user)
    res.statusCode = 200
    res.json({
      msg: "User successfully inserted",
      res: response
    })
  }
)

router.put(
  '/updateuser', async (req, res) => {
    const user = req.body
    const response = await dtoUsers.updateUser(user)
    res.statusCode = 200
    res.json({
      msg: "User successfully updated",
      res: response
    })
  }
)

router.delete(
  '/deleteuser', async (req, res) => {
    const user = req.body
    console.log(user)
    const response = await dtoUsers.deleteUser(user)
    res.statusCode = 200
    res.json({
      msg: 'User deleted',
      res: response
    })
  }
)
module.exports = router