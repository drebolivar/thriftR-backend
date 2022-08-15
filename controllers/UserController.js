const { User, Post, Comment } = require('../models')

const getAllUser = async (req, res) => {
  try {
    let users = await User.findAll({
      include: [
        {
          model: Post
        }
      ]
    })
    res.send(users)
  } catch (error) {
    throw error
  }
}

const getProfileByID = async (req, res) => {
  try {
    const users = await User.findByPk(req.params.user_id)
    res.send(users)
  } catch (error) {
    throw error
  }
}

const createProfile = async (req, res) => {
  try {
    let userCreated = await User.create(req.body)
    res.send(userCreated)
  } catch (error) {
    throw error
  }
}

const updateProfile = async (req, res) => {
  try {
    let updatedProfile = await User.update(req.body, {
      where: { id: req.params.user_id },
      returning: true
    })
    res.send(updatedProfile)
  } catch (error) {
    throw error
  }
}

const deleteProfile = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.user_id } })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getProfileByID,
  createProfile,
  updateProfile,
  deleteProfile,
  getAllUser
}
