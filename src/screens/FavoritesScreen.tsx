import React from "react";
import { DrawerActions } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import CustomHeaderButton from "../components/CustomHeaderButton";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen: NavigationStackScreenComponent = (props) => {
  const meals = [MEALS[0], MEALS[1]];

  return <MealList listData={meals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navData) => ({
  headerTitle: "Your Favorites!",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      ></Item>
    </HeaderButtons>
  ),
});

export default FavoritesScreen;
