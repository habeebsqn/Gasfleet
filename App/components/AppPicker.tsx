import React, {useEffect} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {stepperAction} from '../store/stepperSlice';
import {useDispatch} from 'react-redux';

type Props = {
  dataSet: Array<{gas_cylinder_size: string; gas_cylinder_id: string}>;
  orderIndex: number;
};

type stateProps = {
  state: any;
  stepper: any;
};

const AppPicker = <T extends Props>({dataSet, orderIndex, ...other}: T) => {
  const dispatch = useDispatch();

  return (
    <SelectDropdown
      data={dataSet}
      {...other}
      onSelect={(selectedItem, index) => {
        dispatch(
          stepperAction.handleSelectCylinder({orderIndex, selectedItem}),
        );
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem.gas_cylinder_size;
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown
        return item.gas_cylinder_size;
      }}
    />
  );
};

export default AppPicker;
