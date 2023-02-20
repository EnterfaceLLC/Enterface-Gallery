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
      {/* <Text style={styles.headerTxt}>Contact Screen</Text> */}
      <View style={styles.contact}>
        <View style={styles.phone}>
          <Fontisto name="phone" size={40} color="aquamarine" />
          <Text style={styles.title}>785-806-7666</Text>
        </View>
        <View style={styles.email}>
          <Fontisto name="email" size={40} color="aquamarine" />
          <Text style={styles.title}>create@enterface.dev</Text>
        </View>
        <View style={styles.facebook}>
          <FontAwesome5 name="facebook-square" size={50} color="aquamarine" />
          <Text style={styles.title}>Facebook</Text>
        </View>
        <View style={styles.twitter}>
          <FontAwesome5 name="twitter-square" size={50} color="aquamarine" />
          <Text style={styles.title}>Twitter</Text>
        </View>
        <View style={styles.instagram}>
          <FontAwesome5 name="instagram-square" size={50} color="aquamarine" />
          <Text style={styles.title}>Instagram</Text>
        </View>
        <View style={styles.whatsapp}>
          <FontAwesome5 name="whatsapp-square" size={50} color="aquamarine" />
          <Text style={styles.title}>Whats-app</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactScreen;
