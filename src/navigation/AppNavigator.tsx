import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import LanguageSelectionScreen from '../screens/LanguageSelectionScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigator';
import ForgotPasswordStackNavigator from './ForgotPasswordStackNavigator';

export type RootStackParamList = {
  Splash: undefined;
  LanguageSelection: undefined;
  Welcome: undefined;
  MainTabs: undefined;
  ForgotPasswordFlow: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="MainTabs" component={TabNavigator} />
        <Stack.Screen name="ForgotPasswordFlow" component={ForgotPasswordStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;