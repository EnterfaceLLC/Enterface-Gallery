//* REACT IMPORTS \\
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import Button from '../../components/Button';

import { useNavigation } from '@react-navigation/native';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { global } from '../../theme/colors';

//* HOME SCREEN CODE BELOW \\
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/TWTR.png')}
          style={styles.logo}
        />

        <Text style={styles.slogan}>
          <Text style={styles.dots}>...</Text>
          Let's MOBILE-ize Your Brand
        </Text>
      </View>

      <Text style={styles.body}>
        Welcome to the <Text style={styles.dots}>.</Text><Text style={styles.name}>Enterface</Text> Showcase mobile application. Please be sure to interact and visit the links for a full demo experience.
      </Text>

      <Button />
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Ionicons
          name="arrow-forward-circle-sharp"
          size={65}
          color={global.secondary}
          style={styles.icon}
        />
      </TouchableOpacity>


      {/* <Text style={styles.body}>
        We at <Text style={styles.dots}>.</Text><Text style={styles.name}>Enterface</Text> are looking forward to working with your business, no matter how big or small. Our goal is to build lasting relationships with our clients through close collaborations. Together we can create amazing applications that will take your business the next level.
      </Text> */}

      {/* <Text style={styles.body}>
        Together we can create amazing applications that will undoubtedly set you apart from the competition. We Love Our Topeka community and look forward to working with you.
      </Text> */}

      {/* <Text style={styles.body}>
        This mobile application is to showcase what can be created through close collaborative efforts. I truly believe that teamwork and imagination are the keys to successfully taking your business to the next level. Lets get started<Text style={styles.dots}>.</Text>
      </Text> */}

    </View>
  );
};

export default HomeScreen;
