import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, useColorMode, View } from "native-base";
import { TouchableOpacity } from "react-native";
import { Contact, HomeTab, Profile, Settings } from "../screens/Tabs";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      // tabBar={TabBar} // This is for customized tab bar. Yet need to update.
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen name="HomeTab" component={HomeTab} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Contact" component={Contact} />
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
