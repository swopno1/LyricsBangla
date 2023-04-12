import React from "react";
import { ScrollView } from "react-native";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Spacer,
  Switch,
  Text,
  useColorMode,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const Home = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Heading p={3} flex={1} justifyContent="space-between">
          <Flex direction="row">
            <Text>Lyrics Bangla</Text>
            <Spacer />
            <Flex direction="row">
              <Ionicons name="sunny-sharp" size={16} />
              <Switch
                mx={1}
                onToggle={toggleColorMode}
                isChecked={colorMode === "dark"}
              />
              <Ionicons name="moon-sharp" size={16} />
            </Flex>
          </Flex>
        </Heading>
      </ScrollView>
    </Box>
  );
};
