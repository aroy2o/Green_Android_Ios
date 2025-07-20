import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LanguageSelection');
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <View style={styles.logoContainer}>
        <View style={styles.leafIcon}>
          <View style={styles.leaf} />
          <View style={styles.leafCurve} />
        </View>
        <Text style={styles.brandText}>GREEN DUKAN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  leafIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    position: 'relative',
  },
  leaf: {
    width: 80,
    height: 80,
    backgroundColor: '#4CAF50',
    borderRadius: 40,
    transform: [{ rotate: '45deg' }],
  },
  leafCurve: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 60,
    height: 3,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  brandText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    letterSpacing: 2,
  },
});

export default SplashScreen;