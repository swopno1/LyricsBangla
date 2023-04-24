import React from "react";
import { Box, ScrollView, Text } from "native-base";
import { TopBar } from "../../components/Layout";

export const Notification = () => {
  return (
    <ScrollView contentContainerStyle={{ width: "100%" }}>
      <Box pt={12} px={3} pb={3}>
        <TopBar />
        <Text>Notification</Text>
      </Box>
    </ScrollView>
  );
};
