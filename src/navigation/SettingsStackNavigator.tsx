import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import AddressBookScreen from '../screens/AddressBookScreen';
import PaymentMethodsScreen from '../screens/PaymentMethodsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import FAQsScreen from '../screens/FAQsScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyDetailsScreen from '../screens/MyDetailsScreen';

export type SettingsStackParamList = {
  Settings: undefined;
  AddressBook: undefined;
  PaymentMethods: undefined;
  Notifications: undefined;
  FAQs: undefined;
  HelpCenter: undefined;
  MyOrders: undefined;
  MyDetails: undefined;
};

const Stack = createStackNavigator<SettingsStackParamList>();

const SettingsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
      <Stack.Screen name="MyDetails" component={MyDetailsScreen} />
      <Stack.Screen name="AddressBook" component={AddressBookScreen} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="FAQs" component={FAQsScreen} />
      <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStackNavigator;