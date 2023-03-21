import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import SearchScreen from './screens/SearchScreen';
import HomeStack from './Layout/HomeStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{ tabBarActiveTintColor: 'red' }}
          initialRouteName='Home'
        >
          <Tab.Screen
            name='Home'
            component={HomeStack}
            options={{
              tabBarIcon: () => <Entypo name='home' size={24} color='#000' />,
              headerTitle: 'বাংলা গানের কথা, লিরিক্স বাংলা | Lyrics Bangla',
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen
            name='Search'
            component={SearchScreen}
            options={{
              tabBarIcon: () => (
                <FontAwesome name='search' size={24} color='#000' />
              ),
              headerTitle: 'বাংলা গানের কথা/লিরিক্স খুজুন | Lyrics Bangla',
              tabBarLabel: 'Search',
            }}
          />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
