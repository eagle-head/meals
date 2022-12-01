import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const Notifications: RNElement = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      <Button title="Click" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export { Notifications };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
