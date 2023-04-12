import { Box, ScrollView, Text } from "native-base";
import React from "react";

export const Settings = () => {
  return (
    <Box pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Box p={3}>
          <Text>Settings</Text>
        </Box>
      </ScrollView>
    </Box>
  );
};
