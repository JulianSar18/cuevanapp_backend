const express = require('express');
const dtoUsers = require('../Model/DTO_usuarios');

const router = express.Router()

router.get(
  '/getusers', async (req, res) => {
    const response = await dtoUsers.getUsers()
    return res.json({
      users: response
    })
  }
)

router.post(
  '/insertuser', async (req, res) => {
    const user = req.body
    const response = await dtoUsers.insertUser(user)
    res.statusCode = 200
    const users = dtoUsers.getUsers()
    res.json({
      msg: "User successfully inserted",
      users: users
    })
  }
)

router.put(
  '/updateuser', async (req, res) => {
    const user = req.body
    console.log(req.body)
    const response = await dtoUsers.updateUser(user)
    const users = await dtoUsers.getUsers()
    res.statusCode = 200
    res.json({
      msg: "User successfully updated",
      users: users
    })
  }
)

router.delete(
  '/deleteuser', async (req, res) => {
    const user = req.body
    console.log(user)
    const response = await dtoUsers.deleteUser(user)
    const users = await dtoUsers.getUsers()
    res.statusCode = 200
    res.json({
      msg: 'User deleted',
      users: users
    })
  }
)
module.exports = router