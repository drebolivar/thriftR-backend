const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//pulls info deom the ENV
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET

//creayes hashed password using salt rounds
const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  return hashedPassword
}

//checks that the password matches the stored one
const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}

//creates a token and matches a payload to it
const createToken = (payload) => {
  let token = jwt.sign(payload, APP_SECRET)
  return token
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  //verifies that the token is valid
  try {
    let payload = jwt.verify(token, APP_SECRET)
    //if the token is valid, assigns the payload to local storage as payload to be pulled from Check Session function
    if (payload) {
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({
      status: 'Error',
      msg: 'Unauthorized Payload'
    })
  } catch {
    res.status(401).send({
      status: 'Error!',
      msg: 'Unauthorized!'
    })
  }
}

//strips just the token string from the auth
const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next()
    }
  } catch {
    res.status(401).send({
      status: 'error',
      msg: 'Unauthorized - Strips'
    })
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  verifyToken,
  stripToken
}
