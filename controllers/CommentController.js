const { Comment } = require("../models");

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.send(comments);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetComments,
};

module.exports = {};
