import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import type { DrawerScreenProps } from "@react-navigation/drawer";

type HomeScreenProps = DrawerScreenProps<RootDrawerParamList, "Home">;

const Home: RNElement<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("Notifications")} title="Go to notifications" />
    </View>
  );
};

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
