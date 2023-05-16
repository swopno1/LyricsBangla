import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.pointsContainer}>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Keyword:</Text>
          <Text style={styles.pointText}>{data.label}</Text>
        </View>

        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Album:</Text>
          <Text style={styles.pointText}>
            {data.album ? data.album : "n/a"}
          </Text>
        </View>
        <View style={styles.pointWrapper}>
          <View style={styles.pointDot} />
          <Text style={styles.pointText}>Singer:</Text>
          <Text style={styles.pointText}>
            {data.singer ? data.singer : "n/a"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Specifics;
