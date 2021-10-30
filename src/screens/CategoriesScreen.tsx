import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
  Platform,
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import Category from "../models/Category";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const renderGridItem = (
  navigation: StackNavigationProp,
  itemData: ListRenderItemInfo<Category>
): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() =>
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        })
      }
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CategoriesScreen: NavigationStackScreenComponent = (props) => {
  props.navigation.navigate;
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem.bind(this, props.navigation)}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
