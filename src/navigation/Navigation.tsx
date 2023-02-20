//* REACT IMPORTS \\
import { Platform, StatusBar } from "react-native";

//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

//* STYLES, THEME, ICON IMPORTS \\
import { MaterialCommunityIcons } from '@expo/vector-icons';

//* SCREEN IMPORTS \\
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import Entity1 from "../screens/Entity1";
import Entity2 from "../screens/Entity2";
import Entity3 from "../screens/Entity3";
import Entity4 from "../screens/Entity4";

//* COMPONENT IMPORTS \\
import CustomDrawer from "../components/CustomDrawer";

//* STYLES, THEME, ICON IMPORTS \\
import { global } from "../theme/colors";

//* NAVIGATION CODE BELOW \\
const Draw = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();

const isAndroid = Platform.OS === 'android';

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Draw.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerStyle: { backgroundColor: 'transparent', width: '60%' },
          drawerType: 'front',
          drawerActiveTintColor: global.accent,
          drawerInactiveTintColor: global.white,
        }}
      >
        <Draw.Screen
          name="Welcome"
          component={TopTabNav}
          options={{
            headerStyle: { backgroundColor: global.accent },
            // drawerIcon: ({ focused, color }) => (
            //   <MaterialCommunityIcons name="star-circle-outline" size={24} color="white" />
            // ),
          }}
        />
        <Draw.Screen
          name="Entity1"
          component={Entity1}
        />
        <Draw.Screen
          name="Entity2"
          component={Entity2}
        />
        <Draw.Screen
          name="Entity3"
          component={Entity3}
        />
        <Draw.Screen
          name="Entity4"
          component={Entity4}
        />
      </Draw.Navigator>
    </NavigationContainer >
  );
};

const TopTabNav = () => {
  return (
    <Tab.Navigator
      style={{
        // marginTop: isAndroid ? StatusBar.currentHeight : 0,
      }}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: global.primary,
        tabBarIndicatorStyle: { backgroundColor: global.secondary }
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
  );
};

export default DrawerNav;
