import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../constants";

const Title = ({ children, h1, h2, h3, h4, h5, h6, style }) => {
  return (
    <View
      style={{
        paddingVertical: 10,
      }}
    >
      <Text
        style={{
          fontSize: h1
            ? SIZES.xLarge
            : h2
            ? SIZES.large
            : h3
            ? SIZES.medium
            : h4 || h5 || h6
            ? SIZES.small
            : SIZES.xSmall,
          color: COLORS.primary,
          fontFamily: FONT.bold,
          ...style,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

export default Title;
