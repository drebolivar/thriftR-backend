const router = require('express').Router()
const controller = require('../controllers/AuthController')
//use localhost:3001/auth
router.post('/login', controller.Login)
router.post('/register', controller.Register)

module.exports = router
