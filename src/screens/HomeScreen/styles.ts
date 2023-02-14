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
  headerTxt: {
    fontSize: 18,
    color: global.accent,
    marginTop: 10,
  },
  dots: {
    color: global.secondary
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: global.white,
    borderWidth: 3,
    borderColor: global.accent,
    elevation: 3,
  }
});