import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../Auth/SignIn';
import InstantBuy from '../QuickBuy/InstantBuy';
import 'react-native-gesture-handler';

type RootStackParamList = {
  onBoarding: undefined;
  auth: undefined;
  mainHome: undefined;
  SignUp: undefined;
  Login: undefined;
  SignIn: undefined;
  InstantBuy: undefined;
};

export default function Routes() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="InstantBuy" component={InstantBuy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
