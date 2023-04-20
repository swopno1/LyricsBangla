import React from "react";
import { Box, Text } from "native-base";

export const Article = ({ route }) => {
  const { category } = route.params;
  console.log(category);
  return (
    <Box>
      <Text>{category}</Text>
    </Box>
  );
};
