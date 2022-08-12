const Router = require("express").Router();
const controller = require("../controllers/CommentController");

Router.get("/comment", controller.GetComments);
Router.post("/:comment_id", controller.CreateComment);
Router.put("/:comment_id", controller.UpdateComment);
Router.delete("/:comment_id", controller.DeleteComment);
module.exports = Router;
