import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuCard from '../components/MenuCard';
import { HomeMenu } from '../assets/lib/data';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {HomeMenu.map((menu) => (
          <MenuCard
            key={menu.id}
            title={menu.name}
            onPress={() => navigation.navigate(menu.screen)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
