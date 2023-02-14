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
  header: {
    // backgroundColor: 'grey',
    paddingVertical: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: global.accent,
    marginVertical: 10,
  },
  email: {
    color: global.secondary,
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: global.white,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: global.accent,
    elevation: 3,
  }
});