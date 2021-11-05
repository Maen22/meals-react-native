import { createAppContainer, NavigationRouteConfigMap } from "react-navigation";
import {
  NavigationNavigator,
  NavigationProp,
  NavigationState,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp,
} from "react-navigation-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createMaterialBottomTabNavigator,
  NavigationMaterialBottomTabOptions,
  NavigationTabProp as NavigationMaterialTabProp,
} from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import React from "react";

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

const favoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

const tabScreenRoutes: NavigationRouteConfigMap<
  NavigationBottomTabOptions | NavigationMaterialBottomTabOptions,
  NavigationTabProp | NavigationMaterialTabProp
> = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Favorites: {
    screen: favoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenRoutes, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenRoutes, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
