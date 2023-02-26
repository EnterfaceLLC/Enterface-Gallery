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
  },
  logo: {
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
  links: {
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
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
    borderColor: entity1.secondary,
    borderWidth: 2,
  },
  servicesIcon: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  captionText: {
    fontSize: 10,
    color: entity1.primary
  },
  name: {
    color: entity1.primary,
    fontSize: 26,
    fontWeight: '500',
    textAlign: 'right',
    paddingRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingRight: 10
  },
  flatList: {
    backgroundColor: entity1.secondary,
    width: '100%',
    aspectRatio: 4 / 3,
    borderTopWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: entity1.primary,
    elevation: 2,
  },
  homeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: entity1.secondary,
    position: 'absolute',
    bottom: 15,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  },
  modalPage: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: entity1.secondary,
    width: width,
    height: height / 2,
    // alignItems: 'center',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    bottom: 0.5,
    elevation: 5
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 40
  },
  modalTitle: {
    color: entity1.primary,
    fontSize: 25,
  },
  modalSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: entity1.primary,
    justifyContent: 'space-evenly',
  },
  modalServices: {
    justifyContent: 'space-evenly',
  },
  modalText: {
    color: 'white',
    fontSize: 16
  },
  modalCaption: {
    color: entity1.secondary,
    fontSize: 12,
  },
  modalPrices: {
    justifyContent: 'space-evenly',
  }
});