const Router = require("express").Router();
const controller = require("../controllers/PostController");

Router.get("/post", controller.GetPosts);
Router.post("/:post_id", controller.CreatePost);
Router.put("/:post_id", controller.UpdatePost);
Router.delete("/:post_id", controller.DeletePost);
module.exports = Router;
