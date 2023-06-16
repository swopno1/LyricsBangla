import React from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function Section({children, title}) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle(isDarkMode)}>{title}</Text>
      <Text style={styles.sectionDescription(isDarkMode)}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: isDarkMode => ({
    fontSize: 24,
    fontWeight: '600',
    color: isDarkMode ? Colors.white : Colors.black,
  }),
  sectionDescription: isDarkMode => ({
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: isDarkMode ? Colors.light : Colors.dark,
  }),
  highlight: {
    fontWeight: '700',
  },
});

export default Section;
