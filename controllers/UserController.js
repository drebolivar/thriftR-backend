const { User } = require('../models')

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
    let updatedProfile = await Twerts.update({
      where: { id: req.body },
      returning: true
    })
    res.send(updatedProfile)
  } catch (error) {
    throw error
  }
}

const deleteProfile = async (req, res) => {
  try {
    let userId = req.params
    await Twerts.destroy({ where: { id: req.body } })
    res.send(userId)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getProfileByID,
  createProfile,
  updateProfile,
  deleteProfile
}
