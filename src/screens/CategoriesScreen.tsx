import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";

import Category from "../models/Category";
import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
  return (
    <View>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

const CategoriesScreen: NavigationStackScreenComponent = (props) => {
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default CategoriesScreen;
