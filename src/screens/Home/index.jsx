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
  Link,
  Pressable,
  Spacer,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import SearchBox from "../../components/form/SearchBox";
import FullCard from "../../components/card/FullCard";
import { mainNav } from "../../lib/data";
import NavCard from "../../components/card/NavCard";

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
            <VStack flex={1} flexDirection={"row"} py={3}>
              <Heading fontSize={"xl"}>Category</Heading>
              <Spacer />
              <Link href="#">See All</Link>
            </VStack>
            <FullCard />
            <VStack py={3}>
              <Box
                py={3}
                flex={1}
                flexDirection={"row"}
                flexWrap="wrap"
                width={"100%"}
              >
                {mainNav.map((nav, index) => (
                  <Pressable
                    onPress={() => {
                      navigation.navigate("Article", {
                        category: nav.name,
                      });
                    }}
                    key={nav._id}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    alignSelf={"center"}
                    width={"25%"}
                  >
                    <NavCard nav={nav} />
                  </Pressable>
                ))}
              </Box>
            </VStack>
          </VStack>
          <VStack></VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};
