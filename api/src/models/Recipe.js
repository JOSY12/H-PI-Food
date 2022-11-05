const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true,
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      steps: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },

      // steps: {
      //   type: DataTypes.TEXT
      // },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      diets: {
        type: DataTypes.ARRAY(DataTypes.STRING),

        allowNull: true,
      },

      dishTypes: {
        type: DataTypes.ARRAY(DataTypes.STRING),

        allowNull: true,
      },
      healthScore: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};

// [ x] Receta con las siguientes propiedades:
// ID: *
// Nombre *
// Resumen del plato *
// Nivel de "comida saludable" (health score)
// Paso a paso
// [ x] Tipo de dieta con las siguientes propiedades:
// ID
// Nombre
