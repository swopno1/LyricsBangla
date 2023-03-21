import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const MenuCard = ({ title, name, onPress }) => {
  const handlePress = () => {};

  return (
    <View style={styles.container}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: 80,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
