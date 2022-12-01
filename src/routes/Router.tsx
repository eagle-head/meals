import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
}

export default Router;
