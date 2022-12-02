import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from "../screens/Categories";
import Favorites from "../screens/Favorites";
import Ionicons from "react-native-vector-icons/Ionicons";
import MealsOverview from "../screens/MealsOverview";
import MealDetail from "../screens/MealDetail";
import { RouteName } from "./enumerations";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={RouteName.CATEGORIES}>
      <Drawer.Screen
        name={RouteName.CATEGORIES}
        component={Categories}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.FAVORITES}
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
      <Stack.Screen options={{ headerShown: false }} name={RouteName.DRAWER} component={DrawerNavigation} />
      <Stack.Screen name={RouteName.MEALS_OVERVIEW} component={MealsOverview} />
      <Stack.Screen name={RouteName.MEAL_DETAIL} component={MealDetail} options={{ title: "About the Meal" }} />
    </Stack.Navigator>
  );
}

export { Router };
