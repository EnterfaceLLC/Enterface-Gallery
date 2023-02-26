//* REACT IMPORTS \\
import React from 'react';
import { Image } from 'react-native';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';

//* CAROUSEL CODE BELOW \\
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
