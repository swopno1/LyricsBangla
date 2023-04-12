import React from "react";
import { Box, ScrollView, Text } from "native-base";

export const Notification = () => {
  return (
    <Box pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Box p={3}>
          <Text>Notification</Text>
        </Box>
      </ScrollView>
    </Box>
  );
};
