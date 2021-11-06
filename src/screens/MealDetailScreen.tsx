import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { MEALS } from "../data/dummy-data";
import DefautlText from "../components/DefaultText";

const ListItem: React.FC = (props) => {
  return (
    <View style={styles.listItem}>
      <DefautlText>{props.children}</DefautlText>
    </View>
  );
};

const MealDetailScreen: NavigationStackScreenComponent = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const meal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: meal?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefautlText>{meal?.duration}m</DefautlText>
        <DefautlText>{meal?.complexity.toUpperCase()}</DefautlText>
        <DefautlText>{meal?.affordability.toUpperCase()}</DefautlText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal?.ingredients.map((ingredient) => {
        return <ListItem key={ingredient}>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {meal?.steps.map((step) => {
        return <ListItem key={step}>{step}</ListItem>;
      })}
    </ScrollView>
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
