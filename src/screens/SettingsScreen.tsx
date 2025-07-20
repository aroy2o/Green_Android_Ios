import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../navigation/TabNavigator';

type SettingsScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'SettingsTab'>;

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const settingsItems = [
    { id: 1, title: 'My Orders', icon: '📦', hasArrow: true },
    { id: 2, title: 'My Details', icon: '👤', hasArrow: true },
    { id: 3, title: 'Address Book', icon: '🏠', hasArrow: true },
    { id: 4, title: 'Payment Methods', icon: '💳', hasArrow: true },
    { id: 5, title: 'Notifications', icon: '🔔', hasArrow: true },
    { id: 6, title: 'FAQs', icon: '❓', hasArrow: true },
    { id: 7, title: 'Help Center', icon: '🎧', hasArrow: true },
    { id: 8, title: 'Logout', icon: '🚪', hasArrow: false, isLogout: true },
  ];

  const handleItemPress = (item: any) => {
    // For now, just show an alert or console log
    console.log(`Pressed: ${item.title}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>👤</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Settings List */}
      <View style={styles.settingsList}>
        {settingsItems.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.settingsItem,
              item.isLogout && styles.logoutItem,
              index === settingsItems.length - 1 && styles.lastItem
            ]}
            onPress={() => handleItemPress(item)}
          >
            <View style={styles.itemLeft}>
              <Text style={styles.itemIcon}>{item.icon}</Text>
              <Text style={[
                styles.itemTitle,
                item.isLogout && styles.logoutText
              ]}>
                {item.title}
              </Text>
            </View>
            {item.hasArrow && (
              <Text style={styles.arrow}>→</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 95,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: '#ffffff',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 20,
  },
  backIcon: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  profileButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
  },
  settingsList: {
    flex: 1,
    paddingTop: 20,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  logoutItem: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  logoutText: {
    color: '#FF5722',
  },
  arrow: {
    fontSize: 16,
    color: '#999999',
  },
});

export default SettingsScreen;