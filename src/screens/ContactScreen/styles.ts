//* REACT IMPORTS \\
import { StyleSheet, Dimensions } from "react-native";

//* THEME IMPORTS \\
import { global } from '../.././theme/colors';

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: global.primary,
  },
  text: {
    color: global.accent,
    fontSize: 20,
    padding: 5,
    textAlign: 'center',
  },
  footerTxt: {
    color: global.greyL,
    marginTop: 'auto',
    textAlign: 'center',
  },
}); 