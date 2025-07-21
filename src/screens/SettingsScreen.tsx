
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsStackParamList } from '../navigation/SettingsStackNavigator';
import { CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type SettingsScreenNavigationProp = StackNavigationProp<SettingsStackParamList, 'Settings'>;

interface SettingsScreenProps {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const settingsItems = [
    {
      id: 1,
      title: 'My Orders',
      icon: 'cube-outline',
      hasArrow: true,
      screen: 'MyOrders'
    },
    {
      id: 2,
      title: 'My Details',
      icon: 'account-details-outline',
      hasArrow: true,
      screen: 'MyDetails'
    },
    {
      id: 3,
      title: 'Address Book',
      icon: 'home-outline',
      hasArrow: true,
      screen: 'AddressBook'
    },
    {
      id: 4,
      title: 'Payment Methods',
      icon: 'credit-card-outline',
      hasArrow: true,
      screen: 'PaymentMethods'
    },
    {
      id: 5,
      title: 'Notifications',
      icon: 'bell-outline',
      hasArrow: true,
      screen: 'Notifications'
    },
  ];

  const supportItems = [
    {
      id: 6,
      title: 'FAQs',
      icon: 'help-circle-outline',
      hasArrow: true,
      screen: 'FAQs'
    },
    {
      id: 7,
      title: 'Help Center',
      icon: 'headset',
      hasArrow: true,
      screen: 'HelpCenter'
    },
  ];

  const handleItemPress = (item: any) => {
    if (item.screen && navigation) {
      navigation.navigate(item.screen as keyof SettingsStackParamList);
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    // Navigate to Welcome screen and reset navigation stack
    // We need to get the root navigator to reset to Welcome screen
    const rootNavigation = navigation.getParent()?.getParent();
    if (rootNavigation) {
      rootNavigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Welcome' }],
        })
      );
    }
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const renderSettingsItem = (item: any, showBottomBorder: boolean = true, addSeparatorAfter: boolean = false) => (
    <View key={item.id}>
      <TouchableOpacity
        style={[styles.settingsItem, !showBottomBorder && styles.noBorder]}
        onPress={() => handleItemPress(item)}
      >
        <View style={styles.itemLeft}>
          <Icon name={item.icon} size={24} color="#333" style={styles.itemIcon} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        {item.hasArrow && (
          <Icon name="chevron-right" size={24} color="#999" />
        )}
      </TouchableOpacity>
      {addSeparatorAfter && <View style={styles.separator} />}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={24} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileIcon}>
            <Icon name="account" size={20} color="#666" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Main Settings Section */}
        <View style={styles.section}>
          {settingsItems.map((item, index) =>
            renderSettingsItem(
              item,
              index !== settingsItems.length - 1,
              index === 0 // Add separator after "My Orders" (first item)
            )
          )}
        </View>

        {/* Grey separator line */}
        <View style={styles.separator} />

        {/* Support Section */}
        <View style={styles.section}>
          {supportItems.map((item, index) =>
            renderSettingsItem(item, index !== supportItems.length - 1)
          )}
        </View>

        {/* Grey separator line */}
        <View style={styles.separator} />

        {/* Logout Section */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutItem} onPress={handleLogout}>
            <View style={styles.itemLeft}>
              <Icon name="logout" size={24} color="#FF5722" style={styles.itemIcon} />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        visible={showLogoutModal}
        transparent={true}
        animationType="fade"
        onRequestClose={cancelLogout}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Warning Icon */}
              <View style={styles.warningIconContainer}>
                <Icon name="alert-circle-outline" size={48} color="#FF5722" />
              </View>
              
              {/* Title */}
              <Text style={styles.modalTitle}>Logout?</Text>
              
              {/* Message */}
              <Text style={styles.modalMessage}>Are you sure you want to logout?</Text>
              
              {/* Buttons */}
              <View style={styles.modalButtons}>
                <TouchableOpacity 
                  style={styles.confirmButton}
                  onPress={confirmLogout}
                >
                  <Text style={styles.confirmButtonText}>Yes, Logout</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.cancelButton}
                  onPress={cancelLogout}
                >
                  <Text style={styles.cancelButtonText}>No, Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 14,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 20,
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
    width: 40,
    height: 40,
    borderRadius: 24,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 8,
  },
  section: {
    backgroundColor: '#ffffff',
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  separator: {
    height: 8,
    backgroundColor: '#f5f5f5',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
  },
  logoutSection: {
    backgroundColor: '#ffffff',
    marginTop: 16,
    marginBottom: 100, // Space for bottom tab
  },
  logoutItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF5722',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    maxWidth: 400,
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  warningIconContainer: {
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  modalButtons: {
    width: '100%',
  },
  confirmButton: {
    backgroundColor: '#FF5722',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
});

export default SettingsScreen;