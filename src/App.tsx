import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./routes/Router";

const App: RNElement = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
