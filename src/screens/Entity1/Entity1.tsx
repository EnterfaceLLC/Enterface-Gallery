//* REACT IMPORTS \\
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Modal } from 'react-native';

//* EXPO IMPORTS \\
import * as WebBrowser from 'expo-web-browser';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { entity1 } from '../../theme/colors';
import {
  MaterialIcons,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons
} from '@expo/vector-icons';


import Carousel from '../../components/Carousel';
import FloatingButton2 from '../../components/FAB/FloatingButton2';
import ModalView from './Modal';

import images from './assets/data/images.json';


const Entity1 = () => {
  const [showModal, setShowModal] = useState(false);

  const fbPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.facebook.com/omar.rascon.359'
    );
  };

  return (
    <View style={styles.page}>
      <Modal
        animationType='slide'
        visible={showModal}
        onRequestClose={() =>
          setShowModal(!showModal)
        }
        transparent={true}
      >
        <ModalView toggle={setShowModal} />
      </Modal>


      <View style={styles.header}>
        <Image
          source={require('./assets/THBS2.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
      </View>

      <View style={styles.body}>

        <View style={styles.links}>
          <TouchableOpacity onPress={fbPress}>
            <FontAwesome5 name="facebook-square" size={35} color={entity1.primary} />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="instagram-square" size={35} color={entity1.primary} />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="twitter-square" size={35} color={entity1.primary} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="snapchat-square" size={35} color={entity1.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={require('./assets/images/omar.jpg')}
              style={styles.profilePic}
              resizeMode={'center'}
            />
            <TouchableOpacity
              onPress={() => setShowModal(!showModal)}
              style={styles.servicesIcon}
            >
              <Ionicons name="cut-sharp" size={22} color={entity1.primary} />
              <Text style={styles.captionText}>Services</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.name}>Omar Sagarnaga</Text>
            <View style={styles.ratingContainer}>
              <Text style={{ color: entity1.primary, marginRight: 2 }}>Reviews:</Text>
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
            </View>
          </View>

        </View>

        <View style={styles.flatList}>
          <FlatList
            data={images}
            renderItem={({ item }) => <Carousel pic={item} />}
            horizontal
          />
        </View>
      </View>

      <View style={styles.homeButton}>
        <MaterialCommunityIcons name="home-circle-outline" size={60} color={entity1.primary} />
      </View>
      <FloatingButton2 />
    </View>
  );
};

export default Entity1;
