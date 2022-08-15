const { Comment } = require("../models");

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findByPk(req.params.comment_id);
    res.send(comments);
  } catch (error) {
    throw error;
  }
};
const CreateComment = async (req, res) => {
  try {
    let commentCreate = await Comment.create(req.body);
    res.send(commentCreate);
  } catch (error) {
    throw error;
  }
};

const UpdateComment = async (req, res) => {
  try {
    let commentUpdate = await Comment.update(req.body, {
      where: { id: req.params.comment_id },
      returning: true,
    });
    res.send(commentUpdate);
  } catch (error) {
    throw error;
  }
};

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment,
};
