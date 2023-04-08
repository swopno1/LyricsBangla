import React from "react";
import {
  Box,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Switch,
  Text,
  useColorMode,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import ToggleMode from "../../components/ToggleMode";

export const Home = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "dark" ? "black" : "white"} pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Heading p={3} mx={2}>
          Lyrics Bangla
        </Heading>
        <Divider opacity={colorMode === "dark" ? "0.4" : "1"} />
        <HStack alignItems="center" space={6} py={4} px={3} mx={2}>
          <Ionicons
            name="sunny-sharp"
            size={24}
            color={colorMode === "dark" ? "white" : "black"}
          />
          <Text>Light Mode</Text>

          <Switch
            mx="auto"
            onToggle={toggleColorMode}
            isChecked={colorMode === "dark"}
            aria-label={
              colorMode === "dark"
                ? "switch to light mode"
                : "switch to dark mode"
            }
          />
          <Text>Dark Mode</Text>
          <Ionicons
            name="moon-sharp"
            size={24}
            color={colorMode === "dark" ? "white" : "black"}
          />
        </HStack>
        <Divider opacity={colorMode === "dark" ? "0.4" : "1"} />
        <Divider mt={12} opacity={colorMode === "dark" ? "0.4" : "1"} />
      </ScrollView>
    </Box>
  );
};
