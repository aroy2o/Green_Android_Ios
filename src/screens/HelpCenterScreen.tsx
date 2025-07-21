import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar, ScrollView, Linking } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsStackParamList } from '../navigation/SettingsStackNavigator';

type HelpCenterScreenNavigationProp = StackNavigationProp<SettingsStackParamList, 'HelpCenter'>;

interface HelpCenterScreenProps {
  navigation: HelpCenterScreenNavigationProp;
}

const HelpCenterScreen: React.FC<HelpCenterScreenProps> = ({ navigation }) => {
  const helpOptions = [
    {
      id: 1,
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: '💬',
      action: () => console.log('Open live chat'),
    },
    {
      id: 2,
      title: 'Call Us',
      description: '+1 800-123-4567',
      icon: '📞',
      action: () => Linking.openURL('tel:+18001234567'),
    },
    {
      id: 3,
      title: 'Email Support',
      description: 'support@example.com',
      icon: '📧',
      action: () => Linking.openURL('mailto:support@example.com'),
    },
    {
      id: 4,
      title: 'Report an Issue',
      description: 'Tell us about a problem',
      icon: '🐛',
      action: () => console.log('Report issue'),
    },
  ];

  const quickLinks = [
    { id: 1, title: 'Order Issues', icon: '📦' },
    { id: 2, title: 'Payment Problems', icon: '💳' },
    { id: 3, title: 'Account Settings', icon: '⚙️' },
    { id: 4, title: 'Delivery Questions', icon: '🚚' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help Center</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>How can we help you?</Text>
        
        <View style={styles.helpOptionsContainer}>
          {helpOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.helpOption}
              onPress={option.action}
            >
              <Text style={styles.helpIcon}>{option.icon}</Text>
              <View style={styles.helpInfo}>
                <Text style={styles.helpTitle}>{option.title}</Text>
                <Text style={styles.helpDescription}>{option.description}</Text>
              </View>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Quick Help</Text>
        
        <View style={styles.quickLinksContainer}>
          {quickLinks.map((link) => (
            <TouchableOpacity key={link.id} style={styles.quickLink}>
              <Text style={styles.quickLinkIcon}>{link.icon}</Text>
              <Text style={styles.quickLinkTitle}>{link.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.emergencySection}>
          <Text style={styles.emergencyTitle}>Need Immediate Help?</Text>
          <Text style={styles.emergencyDescription}>
            For urgent issues, please call our 24/7 support line
          </Text>
          <TouchableOpacity 
            style={styles.emergencyButton}
            onPress={() => Linking.openURL('tel:+18001234567')}
          >
            <Text style={styles.emergencyButtonText}>Call Now: +1 800-123-4567</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 16,
    marginTop: 20,
  },
  helpOptionsContainer: {
    marginBottom: 20,
  },
  helpOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  helpIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  helpInfo: {
    flex: 1,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  helpDescription: {
    fontSize: 14,
    color: '#666666',
  },
  arrow: {
    fontSize: 16,
    color: '#999999',
  },
  quickLinksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickLink: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  quickLinkIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickLinkTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  emergencySection: {
    backgroundColor: '#FFF3E0',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  emergencyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF9800',
    marginBottom: 8,
  },
  emergencyDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 16,
  },
  emergencyButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  emergencyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default HelpCenterScreen;