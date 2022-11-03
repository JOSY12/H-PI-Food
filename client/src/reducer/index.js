/* eslint-disable no-sequences */
/* eslint-disable array-callback-return */
import {
  GET_RECIPE,
  GET_RECIPES,
  GET_DIETS,
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
  HealthScore: 0,
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
    case FILTER_RECIPE:
      const data = state.recipes;
      const filter = action.payload;
      const filtetitle = !filter
        ? data
        : data.filter((e) =>
            e.title
              .toLocaleLowerCase()

              .includes(filter.toLocaleLowerCase())
          );

      return { ...state, recipes: filtetitle, searched: filter };

    case FILTER_TYPE:
      const alldata = state.recipes;
      const selectedtype = action.payload;
      const type =
        selectedtype === "all" && state.searched
          ? alldata.filter((e) => e.title.includes(state.searched))
          : alldata.filter(
              (e) =>
                e.title.includes(state.searched.toLocaleLowerCase()) &&
                e.diets.includes(selectedtype.toLocaleLowerCase())
            );

      return { ...state, recipes: type, type: selectedtype };

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
      const recipesdata = state.recipes;
      const HealthScore = action.payload;
      const healthScorefilter = HealthScore
        ? recipesdata.filter((e) => e.healthScore === HealthScore)
        : recipesdata;

      return { ...state, HealthScore: healthScorefilter };

    default:
      return { ...state };
  }
};

export default reducer;
