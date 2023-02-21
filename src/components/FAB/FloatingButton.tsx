//* REACT IMPORTS \\
import React, { useState } from 'react';
// import Animated from 'react-native-reanimated';
import { View, Text, TouchableOpacity, Animated, Platform, Linking } from 'react-native';

//* EXPO IMPORTS \\
import * as WebBrowser from 'expo-web-browser';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { global } from '../../theme/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//* FAB CODE BELOW \\
const FloatingButton = () => {
  const [icon1] = useState(new Animated.Value(30));
  const [icon2] = useState(new Animated.Value(30));
  const [icon3] = useState(new Animated.Value(30));
  const [icon4] = useState(new Animated.Value(30));

  const [expanded, setExpanded] = useState(false);

  const expandView = () => {
    setExpanded(true);
    Animated.timing(icon1, {
      toValue: 150,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon2, {
      toValue: 250,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon3, {
      toValue: 350,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon4, {
      toValue: 450,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeView = () => {
    setExpanded(false);
    Animated.timing(icon1, {
      toValue: 30,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon2, {
      toValue: 30,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon3, {
      toValue: 30,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon4, {
      toValue: 30,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fbPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.facebook.com/dotEnterface'
    );
  };

  const tweetPress = () => {
    WebBrowser.openBrowserAsync(
      'https://twitter.com/Dot_Enterface'
    );
  };

  const igPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.secure.instagram.com/enterfacellc/'
    );
  };

  const dialPress = () => {
    let phoneNum = '';

    if (Platform.OS === 'android') {
      phoneNum = 'tel:${+7858067666}';
    } else {
      phoneNum = 'telprompt: ${+7858067666}';
    }

    Linking.openURL(phoneNum);
  };

  return (
    <View style={styles.page}>
      <Animated.View style={[styles.shape, { top: icon1 }]}>
        <TouchableOpacity onPress={fbPress}>
          <Entypo name="facebook-with-circle" size={50} color={global.primary} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.shape, { top: icon2 }]}>
        <TouchableOpacity onPress={tweetPress}>
          <Entypo name="twitter-with-circle" size={50} color={global.primary} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.shape, { top: icon3 }]}>
        <TouchableOpacity onPress={igPress}>
          <Entypo name="instagram-with-circle" size={50} color={global.primary} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.shape, { top: icon4 }]}>
        <TouchableOpacity onPress={dialPress}>
          <Entypo name="phone" size={40} color={global.primary} />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.shape}
        onPress={() => {
          expanded === false ? expandView() : closeView();
        }}
      >
        <MaterialCommunityIcons name="plus" size={40} color={global.primary} />
      </TouchableOpacity>
      <Text style={styles.click}>CLICK!</Text>
    </View>
  )
}

export default FloatingButton;
