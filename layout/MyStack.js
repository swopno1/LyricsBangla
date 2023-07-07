import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/home';
import Notifications from '../screens/notifications';
import {COLORS} from './theme';
import Category from '../screens/category';
import Search from '../screens/search';
import {useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? COLORS.secondary : COLORS.lightWhite,
  };
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: backgroundStyle,
          headerShadowVisible: false,
          // headerRight: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.menu}
          //     dimension="70%"
          //     handlePress="toggleMenu"
          //   />
          // ),
          // headerLeft: () => (
          //   <ScreenHeaderBtn
          //     iconUrl={icons.heart}
          //     dimension="70%"
          //     handlePress="rateMyApp"
          //   />
          // ),
          headerTitle: '',
        }}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          headerStyle: backgroundStyle,
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerStyle: backgroundStyle,
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;
