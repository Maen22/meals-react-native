import React from "react";
import { useSelector } from "react-redux";
import { DrawerActions } from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";

const FavoritesScreen: NavigationStackScreenComponent = (props) => {
  const favMeals = useSelector((state: any) => state.meals.favoriteMeals);

  return <MealList listData={favMeals} navigation={props.navigation} />;
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
