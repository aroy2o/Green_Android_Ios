import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, Switch, ScrollView } from 'react-native';

const NotificationsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailNotifications: false,
    orderUpdates: true,
    promotions: false,
    newProducts: true,
    priceAlerts: false,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const notificationItems = [
    {
      key: 'pushNotifications' as keyof typeof notifications,
      title: 'Push Notifications',
      description: 'Receive notifications on your device',
      icon: '📱',
    },
    {
      key: 'emailNotifications' as keyof typeof notifications,
      title: 'Email Notifications',
      description: 'Receive notifications via email',
      icon: '📧',
    },
    {
      key: 'orderUpdates' as keyof typeof notifications,
      title: 'Order Updates',
      description: 'Get notified about order status changes',
      icon: '📦',
    },
    {
      key: 'promotions' as keyof typeof notifications,
      title: 'Promotions & Offers',
      description: 'Receive special deals and discounts',
      icon: '🎉',
    },
    {
      key: 'newProducts' as keyof typeof notifications,
      title: 'New Products',
      description: 'Be the first to know about new arrivals',
      icon: '✨',
    },
    {
      key: 'priceAlerts' as keyof typeof notifications,
      title: 'Price Alerts',
      description: 'Get notified when prices drop',
      icon: '💰',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Notification Preferences</Text>
        
        {notificationItems.map((item) => (
          <View key={item.key} style={styles.notificationItem}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemIcon}>{item.icon}</Text>
              <View style={styles.itemInfo}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </View>
            </View>
            <Switch
              value={notifications[item.key]}
              onValueChange={() => toggleNotification(item.key)}
              trackColor={{ false: '#e0e0e0', true: '#4CAF50' }}
              thumbColor={notifications[item.key] ? '#ffffff' : '#ffffff'}
            />
          </View>
        ))}
      </ScrollView>
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
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  itemIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666666',
  },
});

export default NotificationsScreen;