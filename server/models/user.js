'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Username is required'
        },
        notEmpty: {
          msg: 'Username is required'
        },
        len: {
          args: [3, 15],
          msg: 'Username must be between 3 and 15 characters'
        }
      }
    },
  
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        },
        min: {
          args: 8,
          msg: 'Password must be at least 8 characters'
        },
        max: {
          args: 10,
          msg: 'Password must be less than 10 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  // unique username

  User.beforeCreate(async (user, options) => {
    const existingUser = await User.findOne({ where: { username: user.username } });
    if (existingUser) {
      throw new Error('Username already exists');
    }
  });


  return User;
};