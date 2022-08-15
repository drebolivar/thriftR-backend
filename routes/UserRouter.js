const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get('/:user_id', controller.getProfileByID)
Router.post('/', controller.createProfile)
Router.put('/:user_id', controller.updateProfile)
Router.delete('/:user_id', controller.deleteProfile)

module.exports = Router

