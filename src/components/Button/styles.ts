//* REACT IMPORTS \\
import { StyleSheet, Dimensions } from "react-native";

//* THEME IMPORTS \\
import { global } from '../.././theme/colors';

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: global.accent,
    width: 120,
    height: 50,
    marginVertical: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 3
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: global.primary
  },
  dot: {
    color: global.secondary
  },
});