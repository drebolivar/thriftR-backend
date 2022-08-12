const Router = require("express").Router();
const controller = require("../controllers/UserController");

Router.get("/", controller.GetProfiles);
Router.post("/:user_id", controller.CreateProfile);
Router.put("/:user_id", controller.UpdateProfile);
Router.delete("/:user_id", controller.DeleteProfile);
module.exports = Router;
