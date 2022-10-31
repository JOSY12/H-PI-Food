/* eslint-disable no-unused-vars */
import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPE = "FILTER_RECIPE";

const API_KEY = `ad9da6e060534e168458e3bc391b1d68`;
const API_KEY1 = `07b53d9ba28e42c7980df758189b49de`;

export const getrecipes = () => {
  return async function (dispatch) {
    const data = await axios.get(`http://localhost:3001/recipes`);

    dispatch({ type: GET_RECIPES, payload: data.data });
  };
};

export const getrecipe = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);

    console.log(response.data);
    dispatch({ type: GET_RECIPE, payload: response.data });

    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    // );
    // dispatch({ type: GET_RECIPE, payload: response.data });
  };
};

export const createrecipe = (
  title,
  summary,
  image,
  diets,
  healthScore,
  dishTypes
) => {
  const newrecipe = {
    title: title,
    summary: summary,
    image: image,
    diets: diets,
    healthScore: healthScore,
    dishTypes: dishTypes,
  };
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/recipes",
      newrecipe
    );
    dispatch({ type: CREATE_RECIPE, payload: newrecipe });
  };
};

// export const gerecipefilter = (title) => {
//   return async function (dispatch) {
//     const responseid = await axios.get(
//       `http://localhost:3000/recipes/?title=${title}`
//     );

//     const response = await axios.get(
//       `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
//     );
//     dispatch({ type: GET_RECIPE, payload: response.data });

//     dispatch({ type: GET_RECIPE, payload: responseid.data });
//   };
// };
