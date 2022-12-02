import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const Favorites: RNElement = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Favorites Screen</Text>
      <Button title="Go to Categories" onPress={() => navigation.navigate("Categories")} />
    </View>
  );
};

export { Favorites };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
