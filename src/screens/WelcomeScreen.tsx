import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
// Using custom eye icons instead of vector icons

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

interface Country {
    code: string;
    name: string;
    flag: string;
    dialCode: string;
}

interface WelcomeScreenProps {
    navigation: WelcomeScreenNavigationProp;
}

const countries: Country[] = [
    { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
    { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
    { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
    { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
    { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
    { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
    { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86' },
    { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
];

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation: _navigation }) => {
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
    const [showCountryModal, setShowCountryModal] = useState(false);

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleLogin = () => {
        console.log('Login pressed', { email: formData.email, password: formData.password });
        _navigation.navigate('MainTabs');
    };

    const handleSignup = () => {
        console.log('Signup pressed', formData);
        _navigation.navigate('MainTabs');
    };

    const handleSocialLogin = (provider: string) => {
        console.log(`${provider} login pressed`);
    };

    const handleCountrySelect = (country: Country) => {
        setSelectedCountry(country);
        setShowCountryModal(false);
    };



    const renderLoginForm = () => (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    placeholder=""
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        value={formData.password}
                        onChangeText={(value) => handleInputChange('password', value)}
                        placeholder=""
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <View style={styles.eyeIconContainer}>
                            {showPassword ? (
                                <View style={styles.eyeClosedIcon}>
                                    <View style={styles.eyeShape} />
                                    <View style={styles.eyeSlash} />
                                </View>
                            ) : (
                                <View style={styles.eyeOpenIcon}>
                                    <View style={styles.eyeShape} />
                                    <View style={styles.eyePupil} />
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.loginOptionsContainer}>
                <TouchableOpacity
                    style={styles.rememberMeContainer}
                    onPress={() => handleInputChange('rememberMe', !formData.rememberMe)}
                >
                    <View style={[styles.checkbox, formData.rememberMe && styles.checkboxChecked]}>
                        {formData.rememberMe && <Text style={styles.checkmark}>✓</Text>}
                    </View>
                    <Text style={styles.rememberMeText}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
                <Text style={styles.primaryButtonText}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or login with</Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity
                    style={[styles.socialButton, styles.googleButton]}
                    onPress={() => handleSocialLogin('Google')}
                >
                    <Text style={styles.googleIcon}>G</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.socialButton, styles.facebookButton]}
                    onPress={() => handleSocialLogin('Facebook')}
                >
                    <Text style={styles.facebookIcon}>f</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.socialButton, styles.appleButton]}
                    onPress={() => handleSocialLogin('Apple')}
                >
                    <Text style={styles.appleIcon}>🍎</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.socialButton, styles.phoneButton]}
                    onPress={() => handleSocialLogin('Phone')}
                >
                    <Text style={styles.phoneIcon}>📱</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const renderSignupForm = () => (
        <View style={styles.formContainer}>
            <View style={styles.nameRow}>
                <View style={[styles.inputContainer, styles.halfWidth]}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.firstName}
                        onChangeText={(value) => handleInputChange('firstName', value)}
                        placeholder=""
                    />
                </View>
                <View style={[styles.inputContainer, styles.halfWidth]}>
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={formData.lastName}
                        onChangeText={(value) => handleInputChange('lastName', value)}
                        placeholder=""
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                    placeholder=""
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Phone Number</Text>
                <View style={styles.phoneContainer}>
                    <TouchableOpacity
                        style={styles.countryCode}
                        onPress={() => setShowCountryModal(!showCountryModal)}
                    >
                        <Text style={styles.flagText}>{selectedCountry.flag}</Text>
                        <Text style={styles.dropdownArrow}>▼</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.phoneInput}
                        value={formData.phoneNumber}
                        onChangeText={(value) => handleInputChange('phoneNumber', value)}
                        placeholder=""
                        keyboardType="phone-pad"
                    />
                </View>
                {showCountryModal && (
                    <View style={styles.dropdownContainer}>
                        <ScrollView
                            style={styles.dropdownList}
                            showsVerticalScrollIndicator={true}
                            nestedScrollEnabled={true}
                        >
                            {countries.map((country) => (
                                <TouchableOpacity
                                    key={country.code}
                                    style={[
                                        styles.dropdownItem,
                                        selectedCountry.code === country.code && styles.selectedDropdownItem
                                    ]}
                                    onPress={() => handleCountrySelect(country)}
                                >
                                    <Text style={styles.dropdownFlag}>{country.flag}</Text>
                                    <Text style={styles.dropdownCountryName}>{country.name}</Text>
                                    <Text style={styles.dropdownDialCode}>{country.dialCode}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                )}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Set Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        value={formData.password}
                        onChangeText={(value) => handleInputChange('password', value)}
                        placeholder=""
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <View style={styles.eyeIconContainer}>
                            {showPassword ? (
                                <View style={styles.eyeClosedIcon}>
                                    <View style={styles.eyeShape} />
                                    <View style={styles.eyeSlash} />
                                </View>
                            ) : (
                                <View style={styles.eyeOpenIcon}>
                                    <View style={styles.eyeShape} />
                                    <View style={styles.eyePupil} />
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.passwordInput}
                        value={formData.confirmPassword}
                        onChangeText={(value) => handleInputChange('confirmPassword', value)}
                        placeholder=""
                        secureTextEntry={!showConfirmPassword}
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        <View style={styles.eyeIconContainer}>
                            {showConfirmPassword ? (
                                <View style={styles.eyeClosedIcon}>
                                    <View style={styles.eyeShape} />
                                    <View style={styles.eyeSlash} />
                                </View>
                            ) : (
                                <View style={styles.eyeOpenIcon}>
                                    <View style={styles.eyeShape} />
                                    <View style={styles.eyePupil} />
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.primaryButton} onPress={handleSignup}>
                <Text style={styles.primaryButtonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        <View style={styles.leafIcon}>
                            <View style={styles.leaf} />
                            <View style={styles.leafCurve} />
                        </View>
                    </View>
                    <Text style={styles.title}>
                        {activeTab === 'login' ? 'Welcome' : 'Get Started now'}
                    </Text>
                    <Text style={styles.subtitle}>
                        Create an account or log in to explore{'\n'}about our app
                    </Text>
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'login' && styles.activeTab]}
                        onPress={() => setActiveTab('login')}
                    >
                        <Text style={[styles.tabText, activeTab === 'login' && styles.activeTabText]}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.tab, activeTab === 'signup' && styles.activeTab]}
                        onPress={() => setActiveTab('signup')}
                    >
                        <Text style={[styles.tabText, activeTab === 'signup' && styles.activeTabText]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>

                {activeTab === 'login' ? renderLoginForm() : renderSignupForm()}
            </ScrollView>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
    },
    header: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 30,
    },
    logoContainer: {
        marginBottom: 20,
    },
    leafIcon: {
        width: 60,
        height: 60,
        position: 'relative',
    },
    leaf: {
        width: 60,
        height: 60,
        backgroundColor: '#4CAF50',
        borderRadius: 30,
        transform: [{ rotate: '45deg' }],
    },
    leafCurve: {
        position: 'absolute',
        top: 8,
        left: 8,
        width: 44,
        height: 2,
        backgroundColor: '#ffffff',
        borderRadius: 1,
        transform: [{ rotate: '45deg' }],
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666666',
        textAlign: 'center',
        lineHeight: 22,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
        padding: 4,
        marginBottom: 30,
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
    },
    activeTab: {
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    tabText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#666666',
    },
    activeTabText: {
        color: '#000000',
        fontWeight: '600',
    },
    formContainer: {
        flex: 1,
    },
    nameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfWidth: {
        width: '48%',
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        color: '#666666',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        backgroundColor: '#ffffff',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    passwordInput: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
    },
    eyeIcon: {
        paddingHorizontal: 16,
    },

    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        backgroundColor: '#ffffff',
    },
    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRightWidth: 1,
        borderRightColor: '#e0e0e0',
    },
    flagText: {
        fontSize: 18,
        marginRight: 4,
    },

    phoneInput: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
    },
    loginOptionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#d0d0d0',
        borderRadius: 4,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#4CAF50',
        borderColor: '#4CAF50',
    },
    checkmark: {
        color: '#ffffff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    rememberMeText: {
        fontSize: 14,
        color: '#666666',
    },
    forgotPasswordText: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
    },
    primaryButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 20,
    },
    primaryButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    orText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#666666',
        marginBottom: 20,
    },
    socialButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    socialButtonText: {
        fontSize: 20,
    },
    googleButton: {
        backgroundColor: '#ffffff',
    },
    googleIcon: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DB4437',
    },
    facebookButton: {
        backgroundColor: '#ffffff',
    },
    facebookIcon: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4267B2',
    },
    appleButton: {
        backgroundColor: '#ffffff',
    },
    appleIcon: {
        fontSize: 20,
    },
    phoneButton: {
        backgroundColor: '#ffffff',
    },
    phoneIcon: {
        fontSize: 20,
    },

    dropdownArrow: {
        fontSize: 12,
        color: '#666666',
        marginLeft: 4,
    },
    eyeIconContainer: {
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    eyeOpenIcon: {
        position: 'relative',
    },
    eyeClosedIcon: {
        position: 'relative',
    },
    eyeShape: {
        width: 18,
        height: 12,
        borderWidth: 1.5,
        borderColor: '#666666',
        borderRadius: 9,
        backgroundColor: 'transparent',
    },
    eyePupil: {
        position: 'absolute',
        width: 6,
        height: 6,
        backgroundColor: '#666666',
        borderRadius: 3,
        top: 3,
        left: 6,
    },
    eyeSlash: {
        position: 'absolute',
        width: 20,
        height: 1.5,
        backgroundColor: '#666666',
        top: 5,
        left: -1,
        transform: [{ rotate: '45deg' }],
    },
    closeButtonText: {
        fontSize: 20,
        color: '#666666',
        fontWeight: 'bold',
    },
    dropdownContainer: {
        position: 'relative',
        zIndex: 1000,
        marginTop: 4,
    },
    dropdownList: {
        maxHeight: 200,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    dropdownItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    selectedDropdownItem: {
        backgroundColor: '#f0f8ff',
    },
    dropdownFlag: {
        fontSize: 18,
        marginRight: 12,
    },
    dropdownCountryName: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
    },
    dropdownDialCode: {
        fontSize: 14,
        color: '#666666',
        fontWeight: '500',
    },
});

export default WelcomeScreen;