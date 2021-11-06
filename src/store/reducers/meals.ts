import { AnyAction } from "redux";

import Meal from "../../models/Meal";
import { MEALS } from "../../data/dummy-data";

const initalState: State = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state: State = initalState, action: AnyAction) => {
  return state;
};

type State = {
  meals: Array<Meal>;
  filteredMeals: Array<Meal>;
  favoriteMeals: Array<Meal>;
};

export default mealsReducer;
