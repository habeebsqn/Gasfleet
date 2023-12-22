import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useFormikContext} from 'formik';

type Props = {
  title: any;
  style: any;
  titleStyle: any;
  isDisabled: any;
  loader: any;
};

type FormikProps = {
  handleSubmit: any;
};
const AppFormSubmitButton = <T extends Props>({
  title,
  style,
  titleStyle,
  isDisabled,
  loader,
}: T) => {
  //trigers the onSubmit button on the formfield
  const {handleSubmit}: FormikProps = useFormikContext();

  return (
    <TouchableOpacity
      onPress={handleSubmit}
      style={[styles.button, style]}
      // disabled={isDisabled}
    >
      {/* added "titleStyle to make the title in the button flexible and customizable" */}
      {isDisabled ? (
        loader
      ) : (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppFormSubmitButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },

  title: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'reservationWide',
  },
});
