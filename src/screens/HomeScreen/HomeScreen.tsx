//* REACT IMPORTS \\
import React from 'react'
import { View, Text, Image } from 'react-native'

//* STYLES IMPORTS \\
import { styles } from './styles';

//* HOME SCREEN CODE BELOW \\
const HomeScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/TWTR.png')}
          style={styles.logo}
        />
        <Text style={styles.headerTxt}>
          <Text style={styles.dots}>...</Text>Let's MOBILE-ize Your Brand</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
