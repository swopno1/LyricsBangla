import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactUs from '../screens/ContactUs';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerTitle: 'বাংলা গানের ধরন নির্বাচন করুন',
        }}
      />
      <Stack.Screen
        name='ContactUs'
        component={ContactUs}
        options={{
          headerTitle: 'Contact us',
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
