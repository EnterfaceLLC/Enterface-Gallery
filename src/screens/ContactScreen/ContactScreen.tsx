//* REACT IMPORTS \\
import React from 'react';
import { View, Text } from 'react-native';

//* SCREEN IMPORTS \\
import FloatingButton from '../../components/FAB';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';

//* CONTACT SCREEN CODE BELOW \\
const ContactScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Be sure to follow Enterface, LLC</Text>
      <FloatingButton />
      <Text style={styles.footerTxt}>2023 ENTERFACE, LLC</Text>
    </View>
  );
};

export default ContactScreen;
