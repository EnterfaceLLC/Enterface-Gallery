//* REACT IMPORTS \\
import React from 'react'
import { View, Text } from 'react-native'

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

//* CONTACT SCREEN CODE BELOW \\
const ContactScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.headerTxt}>Contact Screen</Text>
      <FontAwesome5 name="facebook-square" size={50} color="aquamarine" />
      <FontAwesome5 name="twitter-square" size={50} color="aquamarine" />
      <FontAwesome5 name="instagram-square" size={50} color="aquamarine" />
      <FontAwesome5 name="whatsapp-square" size={50} color="aquamarine" />
      <Fontisto name="email" size={42} color="aquamarine" />
      <Fontisto name="phone" size={42} color="aquamarine" />
    </View>
  )
}

export default ContactScreen;