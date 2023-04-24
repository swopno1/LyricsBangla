import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Article, Home, Notification } from "../screens";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}
