import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsStackParamList } from '../navigation/SettingsStackNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type MyOrdersScreenNavigationProp = StackNavigationProp<SettingsStackParamList, 'MyOrders'>;

interface MyOrdersScreenProps {
  navigation: MyOrdersScreenNavigationProp;
}

const MyOrdersScreen: React.FC<MyOrdersScreenProps> = ({ navigation }) => {
  const orders = [
    {
      id: 1,
      orderNumber: '#ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$45.99',
      items: 3,
    },
    {
      id: 2,
      orderNumber: '#ORD-002',
      date: '2024-01-10',
      status: 'In Transit',
      total: '$32.50',
      items: 2,
    },
    {
      id: 3,
      orderNumber: '#ORD-003',
      date: '2024-01-05',
      status: 'Processing',
      total: '$78.25',
      items: 5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return '#4CAF50';
      case 'In Transit':
        return '#FF9800';
      case 'Processing':
        return '#2196F3';
      default:
        return '#666666';
    }
  };

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
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {orders.map((order) => (
          <TouchableOpacity key={order.id} style={styles.orderCard}>
            <View style={styles.orderHeader}>
              <Text style={styles.orderNumber}>{order.orderNumber}</Text>
              <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
                <Text style={styles.statusText}>{order.status}</Text>
              </View>
            </View>
            
            <Text style={styles.orderDate}>{order.date}</Text>
            
            <View style={styles.orderFooter}>
              <Text style={styles.orderItems}>{order.items} items</Text>
              <Text style={styles.orderTotal}>{order.total}</Text>
            </View>
          </TouchableOpacity>
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
    paddingTop: 10,
    paddingBottom: 16,
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
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  orderCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '500',
  },
  orderDate: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 12,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderItems: {
    fontSize: 14,
    color: '#666666',
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default MyOrdersScreen;