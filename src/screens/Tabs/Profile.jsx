import { Box, ScrollView, Text } from "native-base";
import React from "react";

export const Profile = () => {
  return (
    <Box pt={12}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <Box p={3}>
          <Text>Profile</Text>
        </Box>
      </ScrollView>
    </Box>
  );
};
