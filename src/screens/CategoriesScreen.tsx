import React from "react";
import { StyleSheet, FlatList, ListRenderItemInfo } from "react-native";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/Category";
import { CATEGORIES } from "../data/dummy-data";
import { DrawerActions } from "react-navigation-drawer";

const renderGridItem = (
  navigation: StackNavigationProp,
  itemData: ListRenderItemInfo<Category>
): JSX.Element => {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onClick={() => {
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
          },
        });
      }}
    />
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

CategoriesScreen.navigationOptions = (navData) => ({
  headerTitle: "Meal Categories",
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
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default CategoriesScreen;
