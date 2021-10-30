import { createAppContainer } from "react-navigation";
import {
  NavigationNavigator,
  NavigationProp,
  NavigationState,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator: NavigationNavigator<
  any,
  NavigationProp<NavigationState>
> = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    mode: "modal", // for ios
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(MealsNavigator);
