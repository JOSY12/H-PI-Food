/* eslint-disable no-unused-vars */
import axios from "axios";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPESLOCAL = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPE = "FILTER_RECIPE";

const API_KEY = `ad9da6e060534e168458e3bc391b1d68`;
const API_KEY1 = `07b53d9ba28e42c7980df758189b49de`;
// const getbyidurl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
// const getallurl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`;
export const getrecipes = () => {
  return async function (dispatch) {
    const responselocal = await axios.get(`http://localhost:3001/recipes`);
    dispatch(
      // { type: GET_RECIPES, payload: response.data.results },
      { type: GET_RECIPESLOCAL, payload: responselocal.data }
    );
    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`
    // );

    // dispatch({ type: GET_RECIPES, payload: response.data.results });
  };
};

export const getrecipe = (id) => {
  return async function (dispatch) {
    const responseid = await axios.get(`http://localhost:3001/recipes/${id}`);

    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    // );
    // dispatch({ type: GET_RECIPE, payload: response.data });

    dispatch({ type: GET_RECIPE, payload: responseid.data });
  };
};

export const createrecipe = (title, summary, image, diets, healthScore) => {
  const newrecipe = {
    title: title,
    summary: summary,
    image: image,
    diets: diets,
    healthScore: healthScore,
  };
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3001/create",
      newrecipe
    );
    dispatch({ type: CREATE_RECIPE, payload: newrecipe });
  };
};

export const gerecipefilter = (title) => {
  return async function (dispatch) {
    const responseid = await axios.get(
      `http://localhost:3000/recipes/?title=${title}`
    );

    // const response = await axios.get(
    //   `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    // );
    // dispatch({ type: GET_RECIPE, payload: response.data });

    dispatch({ type: GET_RECIPE, payload: responseid.data });
  };
};
