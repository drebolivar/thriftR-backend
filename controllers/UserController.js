const { User } = require("../models");

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findById(req.params);
    res.send(users);
  } catch (error) {
    throw error;
  }
};

const CreateProfile = async (req, res) => {
  try {
    let userCreated = await User.create(req.body);
    res.send(userCreated);
  } catch (error) {
    throw error;
  }
};

const UpdateProfile = async (req, res) => {
  try {
    let updatedProfile = await Twerts.update({
      where: { id: req.body },
      returning: true,
    });
    res.send(updatedProfile);
  } catch (error) {
    throw error;
  }
};

const DeleteProfile = async (req, res) => {
  try {
    let userId = req.params;
    await Twerts.destroy({ where: { id: req.body } });
    res.send(userId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetProfiles,
  CreateProfile,
  UpdateProfile,
  DeleteProfile,
};
