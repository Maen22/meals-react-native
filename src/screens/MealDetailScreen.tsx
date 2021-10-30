import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen: NavigationStackScreenComponent = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{meal?.title}</Text>
      <Button
        title="Go Back to Home!"
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: MEALS.find((meal) => meal.id === navigation.getParam("mealId"))
      ?.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log("Favorite");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default MealDetailScreen;
