'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'authorId' })
      Post.hasMany(models.Comment, { foreignKey: 'postId' })
      // define association here
    }
  }
  Post.init(
    {
      authorId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      captions: DataTypes.STRING,
      imgSrc: DataTypes.STRING,
      location: DataTypes.STRING,
      numLikes: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}
