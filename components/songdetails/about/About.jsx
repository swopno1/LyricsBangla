import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>{info.title}</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info.lyrics}</Text>
      </View>
    </View>
  );
};

export default About;
