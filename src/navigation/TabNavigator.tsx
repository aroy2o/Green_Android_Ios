import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import InsightsScreen from '../screens/InsightsScreen';
import CartScreen from '../screens/CartScreen';
import SettingsStackNavigator from './SettingsStackNavigator';

export type TabParamList = {
    HomeTab: undefined;
    ScanTab: undefined;
    InsightsTab: undefined;
    CartTab: undefined;
    SettingsTab: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

// Ionicon components
const HomeIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <Icon
            name="home-outline"
            size={24}
            color={focused ? '#000000' : '#999999'}
        />
    </View>
);

const ScanIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <Icon
            name="scan-outline"
            size={24}
            color={focused ? '#000000' : '#999999'}
        />
    </View>
);

const InsightsIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <Icon
            name="book-outline"
            size={24}
            color={focused ? '#000000' : '#999999'}
        />
    </View>
);

const CartIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <Icon
            name="bag-outline"
            size={24}
            color={focused ? '#000000' : '#999999'}
        />
    </View>
);

const SettingsIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <Icon
            name="settings-outline"
            size={24}
            color={focused ? '#000000' : '#999999'}
        />
    </View>
);

const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#f5f5f5',
                    borderTopWidth: 0,
                    paddingTop: 15,
                    paddingBottom: 15,
                    height: 75,
                    elevation: 0,
                    shadowOpacity: 0,
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    right: 10,
                    borderRadius: 25,
                },

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: 5,
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#999999',
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => <HomeIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name="ScanTab"
                component={ScanScreen}
                options={{
                    tabBarLabel: 'Scan',
                    tabBarIcon: ({ focused }) => <ScanIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name="InsightsTab"
                component={InsightsScreen}
                options={{
                    tabBarLabel: 'Insights',
                    tabBarIcon: ({ focused }) => <InsightsIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name="CartTab"
                component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ focused }) => <CartIcon focused={focused} />,
                }}
            />
            <Tab.Screen
                name="SettingsTab"
                component={SettingsStackNavigator}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ focused }) => <SettingsIcon focused={focused} />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    activeIconContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#e8e8e8',
        marginTop: -30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
        borderWidth: 3,
        borderColor: '#ffffff',
    },
});

export default TabNavigator;