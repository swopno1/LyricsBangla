import {
  View,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Text,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import {
  BrandName,
  ParagraphText,
  ScreenHeaderBtn,
  Title,
} from "../components";
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
          <Title h1>About Us</Title>
          <ParagraphText>
            Welcome to <BrandName link />, your trusted partner for innovative
            mobile app development and web solutions. As a team of experienced
            freelance app developers, we are passionate about crafting
            cutting-edge solutions that empower businesses and individuals to
            thrive in the digital world.
          </ParagraphText>

          <Title h2>Our Expertise</Title>
          <ParagraphText>
            At <BrandName />, we specialize in creating high-quality Android,
            iOS, and web applications that deliver exceptional user experiences.
            Whether you need a feature-rich mobile app, a responsive web
            application, or a dynamic website, we have the expertise to bring
            your ideas to life. Our team is proficient in the latest
            technologies and frameworks, with a strong focus on JavaScript-based
            development, including React.js, Next.js, Node.js, Express.js, and
            MongoDB.
          </ParagraphText>

          <Title h2>Tailored Solutions</Title>
          <ParagraphText>
            We understand that each project is unique, and we take pride in our
            ability to provide customized solutions that meet your specific
            requirements. From the initial concept to the final product, we work
            closely with our clients to ensure that every detail is carefully
            considered. Whether you need a simple app to streamline your
            business processes or a complex solution that integrates multiple
            systems, we have the knowledge and experience to deliver results.
          </ParagraphText>

          <Title h2>Seamless Integration</Title>
          <ParagraphText>
            In addition to app and web development, we offer seamless API
            integration and workflow automation services. Our team can help you
            connect different platforms, systems, and databases, allowing for
            efficient data exchange and automation of repetitive tasks. We also
            specialize in Google Workspace integration, helping you harness the
            power of Google's suite of productivity tools to optimize your
            business operations.
          </ParagraphText>

          <Title h2>Commitment to Excellence</Title>
          <ParagraphText>
            At <BrandName />, our commitment to excellence is unwavering. We
            strive to exceed expectations by delivering high-quality solutions
            that are not only visually stunning but also reliable, scalable, and
            secure. We follow industry best practices and adhere to stringent
            quality assurance processes to ensure that your app or website
            functions flawlessly across different devices and platforms.
          </ParagraphText>

          <Title h2>Client-Centric Approach</Title>
          <ParagraphText>
            We believe in building long-term relationships with our clients
            based on trust, transparency, and open communication. Your
            satisfaction is our top priority, and we work tirelessly to
            understand your goals, challenges, and vision. By keeping you
            involved throughout the development process, we ensure that our
            solutions align with your business objectives and deliver tangible
            results.
          </ParagraphText>

          <Title h2 style={{ fontStyle: "italic" }}>
            Get in Touch
          </Title>
          <ParagraphText>
            If you are ready to take your digital presence to the next level, we
            would love to hear from you. Contact us today to discuss your
            project requirements, and let us help you transform your ideas into
            reality.
          </ParagraphText>

          <Text>
            Contact Information:
            <br />
            Email: [email protected]
            <br />
            Phone: 123-456-7890
            <br />
            Website:{" "}
            <Link href="https://amirnft.com/">https://amirnft.com/</Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
