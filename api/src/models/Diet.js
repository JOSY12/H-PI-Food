const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allownull: false,
        primaryKey: true,
      },
      diet: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
