//* REACT IMPORTS \\
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

//* STYLES, THEME, ICON IMPORTS \\
import { styles } from './styles';
import { entity1 } from '../../theme/colors';
import { AntDesign } from '@expo/vector-icons';

//* MODAL VIEW CODE BELOW \\
const ModalView = (props) => {

  const showModal = props.toggle;

  return (
    <View style={styles.modalPage}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>My Services</Text>
          <TouchableOpacity onPress={showModal}  >
            <AntDesign name="closesquare" size={35} color={entity1.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalSection}>
          <View style={styles.modalServices}>
            <View>
              <Text style={styles.modalText}>Haircut</Text>
              <Text style={styles.modalCaption}>Any Type &#8226; 45 minutes</Text>
            </View>
            <View>
              <Text style={styles.modalText}>Haircut & Beard</Text>
              <Text style={styles.modalCaption}>Combined Service</Text>
            </View>
            <View>
              <Text style={styles.modalText}>Kids Haircut</Text>
              <Text style={styles.modalCaption}>Children Under 10 yrs.</Text>
            </View>
            <View>
              <Text style={styles.modalText}>Beard Trim & Line-up</Text>
              <Text style={styles.modalCaption}>Full Beard & Razor Line-up</Text>
            </View>
            <View>
              <Text style={styles.modalText}>Custom Designs</Text>
              <Text style={styles.modalCaption}>Haircut &#8226; Depends on complexity</Text>
            </View>
          </View>
          <View style={styles.modalPrices}>
            <Text style={[styles.modalText, { fontWeight: '500' }]}>$30.00</Text>
            <Text style={[styles.modalText, { fontWeight: '500' }]}>$40.00</Text>
            <Text style={[styles.modalText, { fontWeight: '500' }]}>$30.00</Text>
            <Text style={[styles.modalText, { fontWeight: '500' }]}>$20.00</Text>
            <Text style={[styles.modalText, { fontWeight: '500' }]}>Varies</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalView;
