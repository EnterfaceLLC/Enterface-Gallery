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
  contact: {
    paddingLeft: '15%',
  },
  headerTxt: {
    color: global.accent,
  },
  title: {
    fontSize: 20,
    color: global.accent,
    marginLeft: 15
  },
  phone: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  twitter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  instagram: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  whatsapp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
}); 