import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, useColorMode, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { Contact, Profile, Settings } from "../screens/Tabs";
import { MaterialCommunityIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { RootStack } from "./rootNavigator";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // tabBar={TabBar} // This is for customized tab bar. Yet need to update.
      screenOptions={{
        headerShown: false, // This is for hiding tab header
        tabBarActiveTintColor: "#e91e63", // Active tab color
      }}
      // sceneContainerStyle={{ backgroundColor: "white" }} // This is useful when tab header is shown
    >
      <Tab.Screen
        name="Home"
        component={() => <RootStack />}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-settings"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact Us",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-supervisor"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View flexDirection={"row"}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              backgroundColor: "white",
            }}
          >
            <Text color={"black"}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
