import React from "react";
import { Box, ScrollView, Text } from "native-base";

export const Article = ({ route }) => {
  const { category } = route.params;
  console.log(category);
  return (
    <ScrollView>
      <Box>
        <Text>{category}</Text>
      </Box>
    </ScrollView>
  );
};
