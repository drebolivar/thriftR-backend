const Router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

Router.get('/:post_id', controller.getPostsById)
Router.get('/', controller.getAllPosts)
Router.get('/profile/:user_id', controller.getAllPostsByUserId)
Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createPost
)
Router.put(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePost
)
Router.delete(
  '/:post_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deletePost
)
module.exports = Router
