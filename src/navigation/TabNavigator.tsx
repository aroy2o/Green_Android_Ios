import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import InsightsScreen from '../screens/InsightsScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';

export type TabParamList = {
    HomeTab: undefined;
    ScanTab: undefined;
    InsightsTab: undefined;
    CartTab: undefined;
    SettingsTab: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

// Custom icon components with line-based designs
const HomeIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <View style={styles.homeIcon}>
            <View style={[
                styles.homeIconBase,
                focused ? styles.focusedBorder : styles.unfocusedBorder
            ]} />
            <View style={[
                styles.homeIconRoof,
                focused ? styles.focusedRoof : styles.unfocusedRoof
            ]} />
        </View>
    </View>
);

const ScanIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <View style={[
            styles.scanIcon,
            focused ? styles.focusedBorder : styles.unfocusedBorder
        ]}>
            <View style={[
                styles.scanIconLine,
                focused ? styles.focusedBackground : styles.unfocusedBackground
            ]} />
        </View>
    </View>
);

const InsightsIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <View style={styles.insightsIcon}>
            <View style={[
                styles.bookPage,
                focused ? styles.focusedBorder : styles.unfocusedBorder
            ]} />
            <View style={[
                styles.bookPage,
                styles.bookPageRight,
                focused ? styles.focusedBorder : styles.unfocusedBorder
            ]} />
        </View>
    </View>
);

const CartIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <View style={[
            styles.cartIcon,
            focused ? styles.focusedBorder : styles.unfocusedBorder
        ]}>
            <View style={[
                styles.cartHandle,
                focused ? styles.focusedBorder : styles.unfocusedBorder
            ]} />
        </View>
    </View>
);

const SettingsIcon = ({ focused }: { focused: boolean }) => (
    <View style={[styles.iconContainer, focused && styles.activeIconContainer]}>
        <View style={[
            styles.settingsIcon,
            focused ? styles.focusedBorder : styles.unfocusedBorder
        ]}>
            <View style={[
                styles.settingsCenter,
                focused ? styles.focusedBackground : styles.unfocusedBackground
            ]} />
        </View>
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
                component={SettingsScreen}
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
    // Color styles
    focusedBorder: {
        borderColor: '#000000',
    },
    unfocusedBorder: {
        borderColor: '#999999',
    },
    focusedRoof: {
        borderTopColor: '#000000',
    },
    unfocusedRoof: {
        borderTopColor: '#999999',
    },
    focusedBackground: {
        backgroundColor: '#000000',
    },
    unfocusedBackground: {
        backgroundColor: '#999999',
    },
    // Home Icon
    homeIcon: {
        width: 20,
        height: 16,
        position: 'relative',
    },
    homeIconBase: {
        width: 16,
        height: 12,
        borderWidth: 1.5,
        borderTopWidth: 0,
        position: 'absolute',
        bottom: 0,
        left: 2,
    },
    homeIconRoof: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    // Scan Icon
    scanIcon: {
        width: 18,
        height: 14,
        borderWidth: 1.5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanIconLine: {
        width: 10,
        height: 1.5,
        borderRadius: 1,
    },
    // Insights Icon (Book)
    insightsIcon: {
        width: 16,
        height: 18,
        position: 'relative',
    },
    bookPage: {
        width: 12,
        height: 16,
        borderWidth: 1.5,
        borderRadius: 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    bookPageRight: {
        left: 4,
        top: 2,
    },
    // Cart Icon
    cartIcon: {
        width: 18,
        height: 14,
        borderWidth: 1.5,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        position: 'relative',
    },
    cartHandle: {
        width: 8,
        height: 6,
        borderWidth: 1.5,
        borderBottomWidth: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        position: 'absolute',
        top: -6,
        left: 4,
    },
    // Settings Icon (Gear)
    settingsIcon: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    settingsCenter: {
        width: 6,
        height: 6,
        borderRadius: 3,
    },
});

export default TabNavigator;