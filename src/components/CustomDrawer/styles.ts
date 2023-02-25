//* REACT IMPORTS \\
import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

//* THEME IMPORTS \\
import { global } from '../.././theme/colors';

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: global.primary,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
    marginLeft: 10,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    elevation: 3,
  },
  drawerView1: {
    backgroundColor: global.accent,
    height: 100,
    marginLeft: 10,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 25
  },
  drawerView: {
    backgroundColor: global.secondary,
    height: 200,
    marginLeft: 10,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 3,
  },
  text: {
    color: global.white,
    padding: 5
  },
});
