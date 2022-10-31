// import axios from "axios";
import {
  GET_RECIPE,
  GET_RECIPES,
  GET_DIETS,
  CREATE_RECIPE,
  FILTER_RECIPE,
} from "../actions";

const initialstate = {
  recipes: [],
  diets: [],
  recipe: {},
  filter: "",
};
// const getrecipes = () => {
//   return async function (dispatch) {
//     const responselocal = await axios.get(`http://localhost:3001/recipes`);

//     for (let i of responselocal.data) {
//       initialstate.recipes.push(i);
//     }
//   };
// };
// getrecipes();
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };
    case GET_RECIPE:
      return { ...state, recipe: action.payload };

    case GET_DIETS:
      return { ...state, diets: action.payload };

    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case FILTER_RECIPE:
      return { ...state, filter: action.payload };

    default:
      return { ...state };
  }
};

export default reducer;
