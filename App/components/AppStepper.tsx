import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {stepperAction} from '../store/stepperSlice';
type Props = {
  orderIndex: number;
  quantity: number;
};

type stateProps = {
  state: any;
  stepper: any;
};
const AppStepper = ({orderIndex, quantity}: Props) => {
  const dispatch = useDispatch();

  const increament = () => {
    dispatch(stepperAction.handleAddQuantity({orderIndex}));
  };

  const decreament = () => {
    dispatch(stepperAction.handleSubtractQuantity({orderIndex}));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.stepper} onPress={decreament}>
        <Text style={styles.stepperText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counter}>
        {quantity !== undefined ? quantity : 0}
      </Text>
      <TouchableOpacity style={styles.stepper} onPress={increament}>
        <Text style={styles.stepperText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 9,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  stepper: {
    width: 29,
    height: 42,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepperText: {
    fontWeight: '800',
    color: '#5D5D5D',
  },
  counter: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
  },
});
export default AppStepper;
