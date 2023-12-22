import React from 'react';
import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
// import DropDownPicker from 'react-native-dropdown-picker';

type Props = {
  children: any;
};

type TextProps = {
  name: string;
  style: any;
};

type LabelProps = {
  children: any;
};

type ErrorProps = {
  name: string;
  style: any;
};

type FormikProps = {
  errors: any;
  touched: any;
};

const AppFormFields = ({children}: Props) => {
  return <View style={{marginVertical: 9}}>{children}</View>;
};

const textInput = <T extends TextProps>({name, style, ...other}: T) => {
  const {setFieldTouched, setFieldValue} = useFormikContext();

  return (
    <TextInput
      onBlur={() => setFieldTouched(name)}
      onChangeText={text => {
        setFieldValue(name, text);
      }}
      {...other}
      style={[styles.input, style]}
    />
  );
};

const label = ({children}: LabelProps) => {
  return <Text style={styles.label}>{children}</Text>;
};

const errorMessage = ({name, style}: ErrorProps) => {
  const {errors, touched}: FormikProps = useFormikContext();

  return (
    <ErrorMessage error={errors[name]} visible={touched[name]} style={style} />
  );
};

AppFormFields.Input = textInput;
AppFormFields.Label = label;
AppFormFields.ErrorMessage = errorMessage;

export default AppFormFields;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    lineHeight: 16,
    color: 'black',
    marginBottom: 10,
  },

  input: {
    fontSize: 14,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '100%',
  },
});
