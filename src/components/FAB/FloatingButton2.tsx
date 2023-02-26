//* REACT IMPORTS \\
import React, { useState } from 'react';
import { View, TouchableOpacity, Animated, Platform, Linking, Dimensions } from 'react-native';

//* EXPO IMPORTS \\
import * as WebBrowser from 'expo-web-browser';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { entity1, global } from '../../theme/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//* FAB2 CODE BELOW \\
const { height, width } = Dimensions.get('window');

const FloatingButton2 = () => {
  const [icon1] = useState(new Animated.Value(10));
  const [icon2] = useState(new Animated.Value(15));
  const [icon3] = useState(new Animated.Value(15));
  const [icon4] = useState(new Animated.Value(10));

  const [expanded, setExpanded] = useState(false);

  const expandView = () => {
    setExpanded(true);
    Animated.timing(icon1, {
      toValue: 90,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon2, {
      toValue: 180,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon3, {
      toValue: 260,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon4, {
      toValue: 170,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const closeView = () => {
    setExpanded(false);
    Animated.timing(icon1, {
      toValue: 10,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon2, {
      toValue: 15,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon3, {
      toValue: 15,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon4, {
      toValue: 10,
      duration: 500,
      useNativeDriver: false,
    }).start();
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
    <View style={styles.page2}>
      <Animated.View style={[styles.shape2, { left: icon1 }]}>
        <TouchableOpacity onPress={null}>
          <Entypo name="calendar" size={35} color={entity1.secondary} />
        </TouchableOpacity>
      </Animated.View>

      {/* <Animated.View style={[styles.shape2, { bottom: icon2 }]}>
        <TouchableOpacity onPress={tweetPress}>
          <Entypo name="twitter-with-circle" size={50} color={entity1.secondary} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.shape2, { bottom: icon3 }]}>
        <TouchableOpacity onPress={igPress}>
          <Entypo name="instagram-with-circle" size={50} color={entity1.secondary} />
        </TouchableOpacity>
      </Animated.View> */}

      <Animated.View style={[styles.shape2, { left: icon4 }]}>
        <TouchableOpacity onPress={dialPress}>
          <Entypo name="phone" size={40} color={entity1.secondary} />
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity
        style={styles.shape2}
        onPress={() => {
          expanded === false ? expandView() : closeView();
        }}
      >
        <MaterialCommunityIcons name="plus" size={40} color={entity1.secondary} />
      </TouchableOpacity>
    </View>
  )
}

export default FloatingButton2;
