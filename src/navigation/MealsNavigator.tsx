import {
  createAppContainer,
  NavigationRouteConfigMap,
  NavigationScreenConfig,
} from "react-navigation";
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
import { Platform, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createMaterialBottomTabNavigator,
  NavigationMaterialBottomTabOptions,
  NavigationTabProp as NavigationMaterialTabProp,
} from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import React from "react";
import FiltersScreen from "../screens/FiltersScreen";
import CustomDrawerContentComponent from "../components/CustomDrawerContentComponent";
import {
  StackNavigationOptions,
  StackNavigationProp,
} from "react-navigation-stack/lib/typescript/src/vendor/types";

const defaultNavOptions: NavigationScreenConfig<
  StackNavigationOptions,
  StackNavigationProp
> = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
};

const MealsStackNavigator: NavigationNavigator<
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
    defaultNavigationOptions: defaultNavOptions,
  }
);

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);

const tabScreenRoutes: NavigationRouteConfigMap<
  NavigationBottomTabOptions | NavigationMaterialBottomTabOptions,
  NavigationTabProp | NavigationMaterialTabProp
> = {
  Meals: {
    screen: MealsStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        ),
    },
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Favorites</Text>
        ) : (
          "Favorites"
        ),
    },
  },
};

const HomeTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenRoutes, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenRoutes, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        },
      });

const FiltersStackNavigator = createStackNavigator({
  Filters: { screen: FiltersScreen, navigationOptions: defaultNavOptions },
});

const MainNavigator = createDrawerNavigator(
  {
    Home: HomeTabNavigator,
    Filters: FiltersStackNavigator,
  },
  {
    contentComponent: CustomDrawerContentComponent,
  }
);

export default createAppContainer(MainNavigator);
