//* REACT IMPORTS \\
import { StyleSheet, Dimensions } from "react-native";

//* STYLE EXPORT CODE \\
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: width,
    aspectRatio: 4 / 3,
    marginHorizontal: 1,
  }
});