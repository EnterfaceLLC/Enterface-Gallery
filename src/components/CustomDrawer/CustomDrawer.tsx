//* REACT IMPORTS \\
import React from 'react';
import { View, Text } from 'react-native';

//* NAVIGATION IMPORTS \\
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';

//* CUSTOM DRAWER CODE BELOW \\
const CustomDrawer = (props) => {
  return (
    <View style={styles.page}>

      <DrawerContentScrollView {...props}
        contentContainerStyle={styles.contentContainer}
      >
        <DrawerItemList {...props}
        />
      </DrawerContentScrollView>

      <View style={styles.drawerView1}>
        <Text style={styles.text}>ENTERFACE</Text>
      </View>

      <View style={styles.drawerView}>
        <Text style={styles.text}>ENTERFACE</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;
