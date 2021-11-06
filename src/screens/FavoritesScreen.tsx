import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import CustomHeaderButton from "../components/CustomHeaderButton";
import MealList from "../components/MealList";
import DefautlText from "../components/DefaultText";

const FavoritesScreen: NavigationStackScreenComponent = (props) => {
  const favMeals = useSelector((state: any) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.fallback}>
        <DefautlText>No favorite meals found. Start adding some!</DefautlText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
});

export default FavoritesScreen;
