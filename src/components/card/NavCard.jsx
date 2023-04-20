import React from "react";
import { Box, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const NavCard = ({ nav }) => {
  return (
    <Box
      width="full"
      px={1}
      py={3}
      textAlign={"center"}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bgColor={"gray.200"}
        borderRadius={"full"}
        width="55"
        height="55"
        justifyContent="center"
      >
        <Ionicons name={nav.icon} size={32} />
      </Box>
      <Text pt={2}>{nav.name}</Text>
    </Box>
  );
};

export default NavCard;
