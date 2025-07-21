import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OTPVerificationScreen from '../screens/OTPVerificationScreen';
import ResetConfirmationScreen from '../screens/ResetConfirmationScreen';
import SetNewPasswordScreen from '../screens/SetNewPasswordScreen';

export type ForgotPasswordStackParamList = {
  ForgotPassword: undefined;
  OTPVerification: { phoneNumber: string };
  ResetConfirmation: { phoneNumber: string };
  SetNewPassword: { phoneNumber: string };
};

const Stack = createStackNavigator<ForgotPasswordStackParamList>();

const ForgotPasswordStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
      <Stack.Screen name="ResetConfirmation" component={ResetConfirmationScreen} />
      <Stack.Screen name="SetNewPassword" component={SetNewPasswordScreen} />
    </Stack.Navigator>
  );
};

export default ForgotPasswordStackNavigator;