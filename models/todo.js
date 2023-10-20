'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todo.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    paranoid: true
  });
  return Todo;
};