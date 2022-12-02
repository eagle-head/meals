import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../screens/Categories";
import Favorites from "../screens/Favorites";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Categories">
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
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
