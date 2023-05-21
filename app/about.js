import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn } from "../components";
import { COLORS, SIZES, icons } from "../constants";

const About = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,

          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.heart}
              dimension="70%"
              handlePress="rateMyApp"
            />
          ),
          headerTitle: "",
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="70%"
              handlePress="toggleMenu"
            />
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Text>About Us</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
