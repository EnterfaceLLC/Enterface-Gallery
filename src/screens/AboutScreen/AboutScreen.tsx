//* REACT IMPORTS \\
import React from 'react'
import { View, Text, Image } from 'react-native'

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';

//* ABOUT SCREEN CODE BELOW \\
const AboutScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/JRZ_Profile.jpg')}
          style={styles.logo}
        />
        <Text style={styles.name}>J.R. Zamora | Developer</Text>
        <Text style={styles.email}>jr.zamora@enterfacellc.dev</Text>
      </View>
    </View >
  );
};

export default AboutScreen;
