import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';

//* EXPO IMPORTS \\
import * as WebBrowser from 'expo-web-browser';

import { styles } from './styles';
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { entity1 } from '../../theme/colors';
import Carousel from '../../components/Carousel';
import images from './assets/data/images.json';
import FloatingButton2 from '../../components/FAB/FloatingButton2';



const Entity1 = () => {

  const fbPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.facebook.com/omar.rascon.359'
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <Image
          source={require('./assets/THBS2.png')}
          resizeMode={'contain'}
          style={styles.image}
        />
      </View>

      <View style={styles.body}>

        <View style={styles.card}>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>

          <Image
            source={require('./assets/images/omar.jpg')}
            style={{ width: 70, height: 70, borderRadius: 35, marginLeft: 10, borderWidth: 2, }}
            resizeMode={'center'}
          />

          <View style={{}}>
            <Text style={{ fontSize: 26, fontWeight: '500', textAlign: 'right', paddingRight: 10, color: entity1.primary }}>Omar Sagarnaga</Text>
            {/* <Text style={{ fontSize: 14, textAlign: 'right', paddingRight: 10, color: entity1.primary }}>Status: <Text style={{ color: 'green', fontWeight: '500' }}>Available</Text></Text> */}
            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-end', paddingRight: 10 }}>
              <Text style={{ color: entity1.primary, marginRight: 2 }}>Reviews:</Text>
              {/* <MaterialIcons name="star-rate" size={14} color={entity1.secondary} /> */}
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
              <MaterialIcons name="star-rate" size={14} color={entity1.secondary} />
            </View>
          </View>

        </View>

        <View style={{ backgroundColor: entity1.secondary, width: '100%', aspectRatio: 4 / 3, elevation: 2, borderTopWidth: 2.5, borderBottomWidth: 2.5, borderColor: entity1.primary }}>
          <FlatList
            data={images}
            renderItem={({ item }) => <Carousel pic={item} />}
            horizontal
          />
        </View>
      </View>
      <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: entity1.secondary, position: 'absolute', bottom: 15, right: 10, justifyContent: 'center', alignItems: 'center' }}>
        <MaterialCommunityIcons name="home-circle-outline" size={50} color={entity1.primary} />
      </View>
      <FloatingButton2 />
    </View>
  );
};

export default Entity1;





{/* <TouchableOpacity style={{ position: 'absolute', bottom: 15, right: 15, backgroundColor: entity1.primary, width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome5 name="plus" size={28} color={entity1.secondary} />
        </TouchableOpacity> */}
