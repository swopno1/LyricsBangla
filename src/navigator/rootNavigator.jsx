import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Notification } from "../screens";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="LyricksBangla">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
