import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';



const Button = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Entity1')}
      >
        <Text style={styles.text}><Text style={styles.dot}>.</Text>Explore</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;