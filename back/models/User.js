const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const bcrypt = require("bcrypt");

const User = sequelizeInstance.define("users", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      max: 14,
      min: 8,
    },
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = User;
