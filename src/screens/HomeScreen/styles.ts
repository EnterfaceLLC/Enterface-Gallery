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
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    backgroundColor: global.white,
    borderWidth: 3,
    borderColor: global.accent,
    elevation: 3,
  },
  slogan: {
    fontSize: 22,
    color: global.accent,
  },
  dots: {
    color: global.secondary
  },
  body: {
    color: global.greyL,
    fontSize: 16,
    lineHeight: 22,
    paddingHorizontal: 25,
    textAlign: 'justify',
  },
  name: {
    color: global.accent,
  },
  icon: {
    alignSelf: 'center',
  }
});