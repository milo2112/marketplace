const { execQuery } = require('../databases/execQuery')
const bcrypt = require('bcryptjs')
const { HASHSALTSYNC } = require('../../config/constants')

const findSingleUserFromDB = async (email) => await execQuery('SELECT * FROM users WHERE email = $1;', [email])

const saveUserToDB = async ({ email, password, rol, name, lastname }) => {
  const encryptPass = await generateHash(password)
  const query = 'INSERT INTO usuarios (email, password, rol, name, lastname) VALUES ($1, $2, $3, $4) RETURNING *;'
  const values = [email, encryptPass, rol, name, lastname]
  return await execQuery(query, values)
}

const passCompare = async (email, password) => {
  const encrypt = await findSingleUserFromDB(email)
  if (encrypt.length < 1 || encrypt.length === undefined) return []
  return bcrypt.compareSync(password, encrypt[0].password)
}

const generateHash = async (password) => await bcrypt.hashSync(password, HASHSALTSYNC, null)

module.exports = {
  findSingleUserFromDB,
  saveUserToDB,
  passCompare
}
