import React from "react";
import { Box, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const NavCard = ({ nav }) => {
  return (
    <Box p={1} textAlign={"center"}>
      <Ionicons name="musical-notes-sharp" size={28} />
      <Text>{nav.name}</Text>
    </Box>
  );
};

export default NavCard;
