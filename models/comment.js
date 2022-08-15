'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' })
      Comment.belongsTo(models.Post, { foreignKey: 'postId' })
    }
  }
  Comment.init(
    {
      postId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'posts',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      comment: DataTypes.STRING,
      numLikes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
