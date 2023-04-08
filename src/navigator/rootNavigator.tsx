import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Box, Heading } from "native-base";

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
        name="Example"
        component={Example}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function Home() {
  return (
    <Box>
      <Heading>Lyrics Bangla</Heading>
    </Box>
  );
}

function Example() {
  return (
    <Box>
      <Heading>Lyrics Bangla Example</Heading>
    </Box>
  );
}
