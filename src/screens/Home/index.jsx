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
  const components = [
    {
      name: "Home",
    },
    {
      name: "Notification",
    },
  ];

  return (
    <Box bg={colorMode === "dark" ? "black" : "white"} pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Heading p={3} mx={2}>
          <Text>Lyrics Bangla</Text>
          <HStack alignItems="center" space={4} py={3} px={3} mx={2}>
            <Ionicons
              name="sunny-sharp"
              size={16}
              color={colorMode === "dark" ? "white" : "black"}
            />
            <Switch
              mx="auto"
              onToggle={toggleColorMode}
              isChecked={colorMode === "dark"}
            />
            <Ionicons
              name="moon-sharp"
              size={16}
              color={colorMode === "dark" ? "white" : "black"}
            />
          </HStack>
        </Heading>
        <Divider opacity={colorMode === "dark" ? "0.4" : "1"} />

        <Divider opacity={colorMode === "dark" ? "0.4" : "1"} />
        <Divider mt={12} opacity={colorMode === "dark" ? "0.4" : "1"} />
        <List
          divider={
            <Divider
              ml={16}
              opacity={colorMode == "dark" ? "0.4" : "1"}
              px={3}
              py={0}
              borderWidth={0}
              borderRightWidth={0}
              w="100%"
            />
          }
        >
          {components.map((comp, index) => (
            <List.Item
              key={index}
              onPress={() => navigation.navigate("Notification")}
              _hover={{ bg: "coolGray.300" }}
            >
              <HStack>
                <Box mr={4}>
                  <Entypo
                    name="circular-graph"
                    size={32}
                    color={colorMode === "dark" ? "white" : "black"}
                  />
                </Box>
                <Text>{comp.name}</Text>
                <Box ml="auto">
                  <Icon
                    mr={2}
                    size="sm"
                    as={<MaterialCommunityIcons name="chevron-right" />}
                    color="coolGray.500"
                  />
                </Box>
              </HStack>
            </List.Item>
          ))}
        </List>
      </ScrollView>
    </Box>
  );
};
