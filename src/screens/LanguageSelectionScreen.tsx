import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  isDefault?: boolean;
}

type LanguageSelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LanguageSelection'>;

interface LanguageSelectionScreenProps {
  navigation: LanguageSelectionScreenNavigationProp;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'Default', isDefault: true },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া' },
];

const LanguageSelectionScreen: React.FC<LanguageSelectionScreenProps> = ({ navigation: _navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
  };

  const handleContinue = () => {
    console.log('Selected language:', selectedLanguage);
    _navigation.navigate('Welcome');
  };

  const handleMoreLanguages = () => {
    // Handle more languages functionality
    console.log('More languages requested');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.content}>
        <Text style={styles.title}>Choose Your{'\n'}Language</Text>
        
        <View style={styles.languageList}>
          {languages.map((language) => (
            <TouchableOpacity
              key={language.code}
              style={[
                styles.languageItem,
                selectedLanguage === language.code && styles.selectedLanguageItem,
              ]}
              onPress={() => handleLanguageSelect(language.code)}
            >
              <View style={styles.languageContent}>
                <View style={styles.languageIcon}>
                  <Text style={styles.languageIconText}>
                    {language.code.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.languageText}>
                  <Text style={styles.languageName}>{language.nativeName}</Text>
                  <Text style={styles.languageSubname}>{language.name}</Text>
                </View>
              </View>
              <View style={styles.radioButton}>
                {selectedLanguage === language.code && (
                  <View style={styles.radioButtonSelected} />
                )}
              </View>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity
            style={styles.moreLanguagesItem}
            onPress={handleMoreLanguages}
          >
            <View style={styles.languageContent}>
              <View style={styles.moreLanguagesIcon}>
                <Text style={styles.moreLanguagesIconText}>+</Text>
              </View>
              <View style={styles.languageText}>
                <Text style={styles.languageName}>More Languages</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 40,
  },
  languageList: {
    flex: 1,
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedLanguageItem: {
    borderColor: '#4CAF50',
    backgroundColor: '#f1f8e9',
  },
  languageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  languageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  languageIconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  languageText: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  languageSubname: {
    fontSize: 14,
    color: '#666666',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
  },
  moreLanguagesItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  moreLanguagesIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  moreLanguagesIconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666666',
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default LanguageSelectionScreen;