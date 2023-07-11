import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS} from '../layout/theme';

const NecessaryLinkCard = ({icon, title, url}) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.iconStyle} resizeMode="stretch" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NecessaryLinkCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 10,
  },
  iconStyle: {
    width: 50,
    height: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '900',
  },
});
