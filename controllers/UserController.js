const { User } = require('../models')

const getProfileByID = async (req, res) => {
  try {
<<<<<<< HEAD
    const users = await User.findAll();
    res.send(users);
=======
    const users = await User.findByPk(req.params.user_id)
    res.send(users)
>>>>>>> 820c9b654e73f8be345bd13a6860161035a46687
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
    let updatedProfile = await User.update({
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
<<<<<<< HEAD
    let userId = req.params;
    await User.destroy({ where: { id: req.body } });
    res.send(userId);
=======
    let userId = req.params
    await Twerts.destroy({ where: { id: req.body } })
    res.send(userId)
>>>>>>> 820c9b654e73f8be345bd13a6860161035a46687
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
