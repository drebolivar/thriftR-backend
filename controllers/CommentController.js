const { Comment, User, Post } = require('../models')

//gets a specific comment based on ID and includes the user
const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findByPk(req.params.comment_id, {
      include: {
        model: User
      }
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

//Creates a comment
const CreateComment = async (req, res) => {
  try {
    let commentCreate = await Comment.create(req.body)
    res.send(commentCreate)
  } catch (error) {
    throw error
  }
}

//gets all comments
const getAllComments = async (req, res) => {
  try {
    let comments = await Comment.findAll({
      include: [
        {
          model: Post
        },
        {
          model: User
        }
      ]
    })
    res.send(comments)
  } catch (error) {
    throw error
  }
}

//updates comment

const UpdateComment = async (req, res) => {
  try {
    let commentUpdate = await Comment.update(req.body, {
      where: { id: req.params.comment_id },
      returning: true
    })
    res.send(commentUpdate)
  } catch (error) {
    throw error
  }
}

//deletes comment
const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment,
  getAllComments
}
