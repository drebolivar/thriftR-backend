const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/:post_id', controller.getPostsById)
Router.get('/', controller.getAllPosts)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createPost
)
Router.put('/:post_id', controller.updatePost)
Router.delete('/:post_id', controller.deletePost)
module.exports = Router
