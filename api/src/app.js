const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const routes = require("./routes/index.js");

require("./db.js");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

// [ ] GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
server.get("/recipes?name=:title", async (req, res) => {
  const { title } = req.params;
  try {
    const getrecipe = await users.findAll();

    res.status(200).json(getrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe found" });
  }
});
// [ ] GET /diets:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá

// server.get("/diets", async (req, res) => {
//   try {
//     const getuser = await users.findAll();

//     res.status(200).json(getuser);
//   } catch (error) {
//     res.status(400).json({ msg: "error no se encontraron usuarios" });
//   }
// });
// [ ] POST /recipes:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos relacionada con sus tipos de dietas.

server.post("/recipes/create", async (req, res) => {
  const { id, title, summary, image, diets, healthscore } = req.body;
  try {
    const newrecipe = await users.create({
      id: id,
      title: title,
      summary: summary,
      image: image,
      diets: diets,
      healthscore: healthscore,
    });
    res.json(newrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe created" });
  }

  // id: { type: DataTypes.INTEGER, allowNull: false },
  //   title: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   summary: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   image: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //   },
  //   diets: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //   },
  //   healthscore: {
  //     type: DataTypes.STRING,
  //     allowNull: true,
  //   },
});
// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
server.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  // const {title,image} = req.body

  try {
    const getrecipeid = await users.findByPk(id);

    res.status(200).json(getrecipeid);
  } catch (error) {
    res.status(400).json({ msg: "no recipe by id found" });
  }
});

module.exports = server;
