import React from "react";
import { VStack, Box, Divider, HStack, Image, Text } from "native-base";
import Car from "../../assets/image/car.png";

const FullCard = () => {
  return (
    <VStack borderRadius="3xl" space="4" px={3} bgColor={"gray.200"}>
      <Box flex={1} justifyContent="space-between" flexDirection={"row"}>
        <Box width={"45%"} pl={4}>
          <Text fontSize={"5xl"} fontWeight={"bold"}>
            20%
          </Text>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Week Deals!
          </Text>
          <Text fontSize={"md"}>
            NativeBase is a free and open source framework
          </Text>
          <Box pb="4">...</Box>
        </Box>
        <Box
          width={"45%"}
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image src={Car} textAlign={"center"} alt="Car" size={"xl"} />
        </Box>
      </Box>
    </VStack>
  );
};

export default FullCard;
