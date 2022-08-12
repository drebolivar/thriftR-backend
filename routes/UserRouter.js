const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get("/users", controller.GetProfiles);
Router.post("/:user_id", controller.CreateProfile);
Router.put("/:user_id", controller.UpdateProfile);
Router.delete("/:use_id", controller.DeleteProfile);
module.exports = Router;
