const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const routes = require("./routes/index.js");
const { Recipe, Op } = require("./db");
const { where } = require("sequelize");

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
server.get("/recipes?title=:title", async (req, res) => {
  const { title } = req.params;
  try {
    const getrecipe = await Recipe.findAll({ where: { title: title } });

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

server.post("/create", async (req, res) => {
  const { id, title, summary, image, diets, healthScore } = req.body;
  try {
    const newrecipe = await Recipe.create({
      id: id,
      title: title,
      summary: summary,
      image: image,
      diets: diets,
      healthScore: healthScore,
    });
    res.json(newrecipe);
  } catch (error) {
    res.status(400).json({ msg: "no recipe created" });
  }
});
// [ ] GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
server.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const getrecipeid = await Recipe.findByPk(id);

    res.status(200).json(getrecipeid);
  } catch (error) {
    res.status(400).json({ msg: "no recipe by id found" });
  }
});

server.get("/recipes", async (req, res) => {
  const { id } = req.params;

  try {
    const getallrecipes = await Recipe.findAll();

    res.status(200).json(getallrecipes);
  } catch (error) {
    res.status(400).json({ msg: "no recipes found" });
  }
});

module.exports = server;
