import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Box, useColorModeValue, useToken } from "native-base";
import { RootStack } from "../navigator/rootNavigator";
import { BottomTabs } from "../navigator/bottomTabs";

export const Root = () => {
  const [lightBg, darkBg] = useToken("colors", ["white", "black"], "black");
  const bgColor = useColorModeValue(lightBg, darkBg);

  return (
    <NavigationContainer theme={{ colors: { background: bgColor } }}>
      <Box
        flex={1}
        w="100%"
        px={4}
        _light={{ bg: "white" }}
        _dark={{ bg: "black" }}
        _web={{ overflowX: "hidden" }}
      >
        <BottomTabs />
        {/* <RootStack /> */}
      </Box>
    </NavigationContainer>
  );
};
