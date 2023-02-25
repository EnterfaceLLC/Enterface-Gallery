//* REACT IMPORTS \\
import { StyleSheet, Dimensions } from "react-native";

//* THEME IMPORTS \\
import { entity1 } from '../.././theme/colors';

//* STYLE EXPORT CODE \\
const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: entity1.primary,
    // borderBottomColor: 'white',
    // borderBottomWidth: 1.5
  },
  image: {
    width: 300,
    height: 150,
  },
  body: {
    flex: 1,
  },
  content: {
  },
  title: {
    color: entity1.secondary,
    fontSize: 28,
    textAlign: 'right',
  },
  card: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#e1bc66',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    elevation: 2
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderColor: entity1.primary,
    borderWidth: 2,
  },
});