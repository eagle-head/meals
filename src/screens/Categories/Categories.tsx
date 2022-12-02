import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import type { DrawerScreenProps } from "@react-navigation/drawer";

type CategoriesScreenProps = DrawerScreenProps<RootDrawerParamList, "Categories">;

const Categories: RNElement<CategoriesScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
      <Button onPress={() => navigation.navigate("Favorites")} title="Go to favorites" />
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
