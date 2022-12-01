import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />,
        }}
      />
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
