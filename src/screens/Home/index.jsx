import React from "react";
import { ScrollView } from "react-native";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Spacer,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SearchBox from "../../components/form/SearchBox";

export const Home = ({ navigation }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Box p={3}>
          <VStack>
            <VStack direction="row">
              <Flex direction="row" alignItems={"center"}>
                <Avatar
                  size="sm"
                  bg="green.500"
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                >
                  Amir
                </Avatar>
                <Box pl={3}>
                  <Text color="gray.500">Good Morning</Text>
                  <Text fontWeight="extrabold">Md Amir Hossain</Text>
                </Box>
              </Flex>
              <Spacer />
              <Flex direction="row">
                <IconButton
                  onPress={() => {
                    navigation.navigate("Notification");
                  }}
                  icon={<Ionicons name="notifications-outline" size={28} />}
                />
                <IconButton
                  icon={<Ionicons name="heart-outline" size={28} />}
                />
              </Flex>
            </VStack>
            <SearchBox />
          </VStack>
          <VStack>
            <Box></Box>
            <Box></Box>
          </VStack>
          <VStack></VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};
