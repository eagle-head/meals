import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsOverview: RNElement = () => {
  return (
    <View style={styles.container}>
      <Text>MealsOverview Screen</Text>
    </View>
  );
};

export { MealsOverview };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
