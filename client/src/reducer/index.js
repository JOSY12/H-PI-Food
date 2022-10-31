import { GET_RECIPE, GET_RECIPES, GET_DIETS, CREATE_RECIPE } from "../actions";

const initialstate = {
  recipes: [],

  recipe: {},
};

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

    default:
      return { ...state };
  }
};

export default reducer;
