import React from "react";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen: NavigationStackScreenComponent = (props) => {
  const meals = [MEALS[0], MEALS[1]];

  return <MealList listData={meals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites!",
};

export default FavoritesScreen;
