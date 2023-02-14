//* REACT IMPORTS \\
import { Platform, StatusBar } from "react-native";

//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//* STYLES, THEME, ICON IMPORTS \\
import { MaterialCommunityIcons } from '@expo/vector-icons';

//* SCREEN IMPORTS \\
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import { global } from "../theme/colors";


//* NAVIGATION CODE BELOW \\
const Tab = createMaterialTopTabNavigator();

const isAndroid = Platform.OS === 'android';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{
          marginTop: isAndroid ? StatusBar.currentHeight : 0,
        }}
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: global.primary,
          tabBarIndicatorStyle: { backgroundColor: global.accent }
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home-circle-outline"
                size={26}
                color={color}
              />
            )
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-tie"
                size={26}
                color={color}
              />
            )
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="cellphone"
                size={24}
                color={color}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
