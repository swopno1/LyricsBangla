import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
  Pressable,
  Linking,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { ParagraphText, ScreenHeaderBtn, Title } from "../components";
import { COLORS, SIZES, icons } from "../constants";

const Contact = () => {
  const handleEmailPress = () => {
    Linking.openURL("mailto:amirhossain.limon@gmail.com");
  };

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
          <Title h1>Contact Us</Title>
          <Title h2>Get in Touch</Title>
          <ParagraphText>
            We would love to hear from you. If you have any questions,
            inquiries, or project proposals, please feel free to contact us
            using the information below:
          </ParagraphText>

          <Title h3>Contact Information</Title>
          <ul>
            <li>
              Email:
              <Text onPress={handleEmailPress}>
                amirhossain.limon@gmail.com
              </Text>
            </li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Street, City, State, ZIP</li>
          </ul>

          <Title h3>Business Hours</Title>
          <ParagraphText>Our office hours are as follows:</ParagraphText>
          <ul>
            <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 10:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Contact;
