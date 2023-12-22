import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {uiSliceAction} from '../store/uiSlice';

type Props = {
  data: any;
};

type stateProps = {
  state: any;
  ui: any;
};
function AppPopUpModal({data}: Props) {
  const isModalEnabled = useSelector(
    (state: stateProps) => state.ui.isModalEnabled,
  );
  const dispatch = useDispatch();

  const handleModalToggle = () => {
    //dismiss modal for sucessfully order placement
    dispatch(uiSliceAction.handleOpenModal());
  };

  return (
    <Modal transparent={true} animationType="slide" visible={isModalEnabled}>
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/logo1.png')}
              style={styles.image}
              alt={'logo1'}
            />
          </View>
          <Text style={styles.modalTitle}>
            Thanks for choosinig Gas Leet, here is a summary of your order,
            proceed to make payment
          </Text>

          <View style={styles.detailsContainer}>
            <View style={{justifyContent: 'center', gap: 15}}>
              <Text style={styles.detailsTitle}>Total Cost:</Text>
              <Text style={styles.detailsTitle}>Charges:</Text>
              <Text style={styles.detailsTitle}>Tax:</Text>
            </View>

            <View style={{justifyContent: 'center', gap: 15}}>
              <Text style={styles.detailsPrice}>80000</Text>
              <Text style={styles.detailsPrice}>900</Text>
              <Text style={styles.detailsPrice}>12.000</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleModalToggle}>
            <Text style={styles.btnText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  image: {
    resizeMode: 'contain',
    width: 55.5,
    height: 26,
  },
  modalBox: {
    backgroundColor: 'white',
    borderRadius: 19,
    height: 'auto',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 15,
  },
  modalTitle: {
    color: 'black',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    fontWeight: '400',
    width: 250,
  },
  detailsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    gap: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    paddingVertical: 20,
  },
  detailsTitle: {
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '800',
    color: 'grey',
  },
  detailsPrice: {
    fontSize: 9,
    lineHeight: 9,
    color: 'grey',
  },
  btn: {
    backgroundColor: '#5BCCF7',
    width: 116,
    height: 31,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 14,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default AppPopUpModal;
