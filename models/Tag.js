const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // DONE: define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: async (newTagData) => {
        // convert new tag_name to lowercase for NEW record
        newTagData.tag_name = newTagData.tag_name.toLowerCase();
        return newTagData;
      },
      beforeUpdate: async (updatedTagData) => {
        // convert new tag_name to lowercase
        updatedTagData.tag_name = updatedTagData.tag_name.toLowerCase();
        return updatedTagData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
