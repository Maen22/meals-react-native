import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import DefautlText from "../components/DefaultText";
import { toggleFavoriteAction } from "../store/actions/mealsActions";
import Colors from "../constants/Colors";

const ListItem: React.FC = (props) => {
  return (
    <View style={styles.listItem}>
      <DefautlText>{props.children}</DefautlText>
    </View>
  );
};

const MealDetailScreen: NavigationStackScreenComponent = (props) => {
  const availableMeals = useSelector((state: any) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state: any) =>
    state.meals.favoriteMeals.some((meal: any) => meal.id === mealId)
  );

  const mealId = props.navigation.getParam("mealId");
  const meal = availableMeals.find((meal: any) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavoriteAction(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  // useEffect(() => {
  //   props.navigation.setParams({ isFav: currentMealIsFavorite });
  // }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefautlText>{meal?.duration}m</DefautlText>
        <DefautlText>{meal?.complexity.toUpperCase()}</DefautlText>
        <DefautlText>{meal?.affordability.toUpperCase()}</DefautlText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal?.ingredients.map((ingredient: any) => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {meal?.steps.map((step: any) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const toggleFav = navigation.getParam("toggleFav");
  const isFavorite = navigation.getParam("isFav");
  return {
    headerTitle: navigation.getParam("mealTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFav}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
