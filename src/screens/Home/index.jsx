import React from "react";
import { ScrollView } from "react-native";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  List,
  Switch,
  Text,
  useColorMode,
} from "native-base";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";

export const Home = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Heading p={3} mx={2}>
          <Text>Lyrics Bangla</Text>
          <HStack alignItems="center" space={4} py={3} px={3} mx={2}>
            <Ionicons name="sunny-sharp" size={16} />
            <Switch
              mx="auto"
              onToggle={toggleColorMode}
              isChecked={colorMode === "dark"}
            />
            <Ionicons name="moon-sharp" size={16} />
          </HStack>
        </Heading>
      </ScrollView>
    </Box>
  );
};
