import React from 'react';
import {Text} from 'react-native';

type Props = {
  style: any;
  error: any;
  visible: any;
};

const ErrorMessage = ({style, error, visible}: Props) => {
  if (!visible || !error) return null;
  return (
    <Text style={[{fontSize: 14, color: 'red', marginVertical: 5}, style]}>
      {error}
    </Text>
  );
};

export default ErrorMessage;
