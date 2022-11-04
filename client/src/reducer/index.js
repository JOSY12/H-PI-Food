/* eslint-disable no-sequences */
/* eslint-disable array-callback-return */
import {
  GET_RECIPE,
  GET_RECIPES,
  // GET_DIETS,
  CREATE_RECIPE,
  FILTER_RECIPE,
  FILTER_TYPE,
  FILTER_AZ_ZA,
  HEALTHSCORE_FILTER,
} from "../actions";

const initialstate = {
  recipes: [],
  searched: "",
  order: "",
  type: "",
  healthScore: 0,
  recipe: {},
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return { ...state, recipes: action.payload };

    case GET_RECIPE:
      return { ...state, recipe: action.payload };

    // case GET_DIETS:
    //   return { ...state, diets: action.payload };

    case CREATE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload] };
    case FILTER_RECIPE:
      const filter = action.payload;

      return { ...state, searched: filter };

    case FILTER_TYPE:
      const selectedtype = action.payload;

      return { ...state, type: selectedtype };

    case FILTER_AZ_ZA:
      const recypesByOrder =
        action.payload === "ASC"
          ? state.recipes.sort((a, b) => {
              if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase())
                return 1;
              else return -1;
            })
          : state.recipes.sort((a, b) => {
              if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase())
                return 1;
              else return -1;
            });
      return { ...state, recipes: recypesByOrder, order: action.payload };

    case HEALTHSCORE_FILTER:
      const HealthScore = action.payload;

      return { ...state, healthScore: HealthScore };

    default:
      return { ...state };
  }
};

export default reducer;
