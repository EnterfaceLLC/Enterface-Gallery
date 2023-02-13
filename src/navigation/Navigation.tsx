//* NAVIGATION IMPORTS \\
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//* SCREEN IMPORTS \\
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";


//* NAVIGATION CODE BELOW \\
const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
