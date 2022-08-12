const Router = require('express').Router()
const controller = require('../controllers/UserController')

<<<<<<< HEAD
Router.get("/users", controller.GetProfiles);
Router.post("/:user_id", controller.CreateProfile);
Router.put("/:user_id", controller.UpdateProfile);
Router.delete("/:use_id", controller.DeleteProfile);
module.exports = Router;
=======
Router.get('/:user_id', controller.getProfileByID)
Router.post('/', controller.createProfile)
Router.put('/:user_id', controller.updateProfile)
Router.delete('/:user_id', controller.deleteProfile)

module.exports = Router
>>>>>>> 820c9b654e73f8be345bd13a6860161035a46687
