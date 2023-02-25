import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

const Carousel = ({ pic }) => {
  return (
    <Image
      source={{ uri: pic.images }}
      style={styles.image}
      resizeMode={'cover'}
    />

  );
};

export default Carousel;