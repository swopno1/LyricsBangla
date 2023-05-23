import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

const BrandName = ({ link }) => {
  if (link) {
    return (
      <Link href="https://amirnft.com/" asChild>
        <Pressable>{({ hovered, pressed }) => <Text>AmirNFT</Text>}</Pressable>
      </Link>
    );
  }

  return <Text>AmirNFT</Text>;
};

export default BrandName;
