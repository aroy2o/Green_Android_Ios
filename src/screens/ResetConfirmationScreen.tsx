import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ForgotPasswordStackParamList } from '../navigation/ForgotPasswordStackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

type ResetConfirmationScreenNavigationProp = StackNavigationProp<
  ForgotPasswordStackParamList,
  'ResetConfirmation'
>;

type ResetConfirmationScreenRouteProp = RouteProp<
  ForgotPasswordStackParamList,
  'ResetConfirmation'
>;

interface ResetConfirmationScreenProps {
  navigation: ResetConfirmationScreenNavigationProp;
  route: ResetConfirmationScreenRouteProp;
}

const ResetConfirmationScreen: React.FC<ResetConfirmationScreenProps> = ({ 
  navigation, 
  route 
}) => {
  const { phoneNumber } = route.params;
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('SetNewPassword', { phoneNumber });
    }, 1000);
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
          <Icon name="chevron-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Reset Confirmation</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon name="shield-checkmark-outline" size={64} color="#4CAF50" />
        </View>

        <Text style={styles.title}>Password Reset</Text>
        
        <Text style={styles.description}>
          Your account has been verified successfully. You can now reset your password for {phoneNumber}.
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Icon name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.infoText}>Account verified</Text>
          </View>
          <View style={styles.infoItem}>
            <Icon name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.infoText}>Ready to reset password</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={[styles.confirmButton, loading && styles.confirmButtonDisabled]}
          onPress={handleConfirm}
          disabled={loading}
        >
          <Text style={styles.confirmButtonText}>
            {loading ? 'Processing...' : 'Confirm'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
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
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 40,
  },
  infoContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 12,
    fontWeight: '500',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  confirmButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  cancelButton: {
    backgroundColor: 'transparent',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666666',
  },
});

export default ResetConfirmationScreen;