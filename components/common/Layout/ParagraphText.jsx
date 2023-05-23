import { View, Text } from "react-native";
import React from "react";

const ParagraphText = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default ParagraphText;
