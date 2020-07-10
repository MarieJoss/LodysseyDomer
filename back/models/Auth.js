const Sequelize = require("sequelize");
const sequelizeInstance = require("../sequelize");

const bcrypt = require("bcrypt");

const Auth = sequelizeInstance.define(
  "auths",
  {
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
  },
  {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      },
    },
  }
);
Auth.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
  //   if (password === this.password) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};

module.exports = Auth;
