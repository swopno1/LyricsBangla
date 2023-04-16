import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box, StatusBar, useColorModeValue, useToken } from "native-base";
// import { RootStack } from "../navigator/rootNavigator";
import { BottomTabs } from "../navigator/bottomTabs";

export const Root = () => {
  const [light, dark] = useToken("colors", ["light", "dark"], "black");
  const bgColor = useColorModeValue(light, dark);
  const textColor = useColorModeValue(dark, light);

  return (
    <NavigationContainer
      theme={{ colors: { background: bgColor, text: textColor } }}
    >
      <Box flex={1} w="100%" _web={{ overflowX: "hidden" }}>
        <BottomTabs />
        {/* <RootStack /> */}
      </Box>
    </NavigationContainer>
  );
};
