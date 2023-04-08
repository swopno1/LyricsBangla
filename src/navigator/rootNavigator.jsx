import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, MasonLayout } from "../screens";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="LyricksBangla">
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MasonLayout"
        component={MasonLayout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
