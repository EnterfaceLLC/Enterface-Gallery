//* REACT IMPORTS \\
import { StyleSheet, Dimensions } from "react-native";

//* THEME IMPORTS \\
import { global } from '../.././theme/colors';

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    // flex: 1,
    // backgroundColor: global.white,
  },
  shape: {
    backgroundColor: global.secondary,
    width: 60,
    height: 60,
    position: 'absolute',
    top: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3
  },
  click: {
    color: global.greyL,
    textAlign: 'center',
    fontSize: 12

  }
});