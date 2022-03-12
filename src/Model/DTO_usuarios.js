const db = require('../bd_connection')

const getUsuarios = async () => {
  const res = await db.query(`SELECT * FROM users;`)
  return res
}

const deleteUser = async (user) => {
  const res = await db.query(`DELETE from users where id = ${user.id}`)
  return res
}

const insertUser = async (user) => {
  const res = await db.query(`INSERT into users (nombre, fecha_nacimiento, correo, rol, firebase_uid) values ('${user.name}', '${user.birth_date}', '${user.email}', '${user.role}', '${user.firebase_uid}');  `)
  return res
}

const updateUser = async (user) => {
  const res = await db.query(`UPDATE users SET nombre='${user.name}', fecha_nacimiento='${user.birth_date}', correo='${user.email}', rol ='${user.role}', firebase_uid ='${user.firebase_uid}' where id = ${user.id};`)
  return res
}
module.exports = {getUsuarios, deleteUser, insertUser, updateUser}