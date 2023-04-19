import { View, Text } from "react-native";
import React from "react";

export const Article = ({ route }) => {
  const { category } = route.params;
  console.log(category);
  return (
    <View>
      <Text>{category}</Text>
    </View>
  );
};
