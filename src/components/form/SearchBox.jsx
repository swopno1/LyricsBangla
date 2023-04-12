import React from "react";
import { Icon, Input, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const SearchBox = () => {
  return (
    <VStack py={3}>
      <Input
        placeholder="Search"
        width="100%"
        borderRadius={4}
        fontSize={14}
        py={3}
        px={1}
        InputLeftElement={
          <Icon
            m="2"
            mr="3"
            size="6"
            color="gray.400"
            as={<Ionicons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            m="2"
            mr="3"
            size="6"
            color="gray.400"
            as={<Ionicons name="mic" />}
          />
        }
      />
    </VStack>
  );
};

export default SearchBox;
