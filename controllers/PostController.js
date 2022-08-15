const { Post, User, Comment } = require('../models')

const getPostsById = async (req, res) => {
  try {
    const posts = await Post.findByPk(req.params.post_id)
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const getAllPostsByUserId = async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: {
        authorId: req.params.user_id
      },
      include: [
        {
          model: User
        },
        {
          model: Comment
        }
      ]
    })
    res.send(userPosts)
  } catch (error) {
    throw error
  }
}

const getAllPosts = async (req, res) => {
  try {
    let posts = await Post.findAll({
      include: [
        {
          model: User
        },
        {
          model: Comment
        }
      ]
    })
    res.send(posts)
  } catch (error) {
    throw error
  }
}

const createPost = async (req, res) => {
  try {
    let postCreate = await Post.create(req.body)
    res.send(postCreate)
  } catch (error) {
    throw error
  }
}

const updatePost = async (req, res) => {
  try {
    let postUpdate = await Post.update(req.body, {
      where: { id: req.params.post_id },
      returning: true
    })
    res.send(postUpdate)
  } catch (error) {
    throw error
  }
}

const deletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.post_id } })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getPostsById,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getAllPostsByUserId
}
