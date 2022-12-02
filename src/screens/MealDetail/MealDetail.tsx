import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetail: RNElement = () => {
  return (
    <View style={styles.container}>
      <Text>MealDetail Screen</Text>
    </View>
  );
};

export { MealDetail };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
