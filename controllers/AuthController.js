const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  //Checks if a user exists in the db
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
      raw: true
    })
    //checks that the passwords match then assigns payload
    if (
      user &&
      (await middleware.comparePassword(user.passwordDigest, req.body.password))
    ) {
      let payload = {
        id: user.id,
        email: user.email
      }
      //creates token and assigns payload
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  //submits register data and creates the passwordDigest
  try {
    const { email, password, username, profileImg } = req.body

    let passwordDigest = await middleware.hashPassword(password)

    const user = await User.create({
      email,
      passwordDigest,
      username,
      profileImg
    })

    res.send(user)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  console.log('check session working')
  let { payload } = res.locals
  console.log(payload)
  res.send(payload)
}

module.exports = {
  Login,
  Register,
  CheckSession
}
