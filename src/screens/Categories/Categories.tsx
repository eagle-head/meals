import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import type { DrawerScreenProps } from "@react-navigation/drawer";
import type { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type CategoriesScreenProps = CompositeScreenProps<
  DrawerScreenProps<RootDrawerParamList, "Categories">,
  NativeStackScreenProps<RootNativeStackParamList>
>;

const Categories: RNElement<CategoriesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
      <Button onPress={() => navigation.navigate("Favorites")} title="Go to favorites" />
      <Button onPress={() => navigation.navigate("MealDetail")} title="Go to meal detail" />
      <Button onPress={() => navigation.navigate("MealsOverview")} title="Go to meals overview" />
    </View>
  );
};

export { Categories };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
