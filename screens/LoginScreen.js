import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const LoginScreen = () => {
  const [emailUserType, setEmailUserType] = useState('buyer');
  const [phoneUserType, setPhoneUserType] = useState('buyer');

  return (
    <ImageBackground
      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoXk4ixHBlsa_nyGSev2ZHIU7J9bfIC-clxEhCb0-E5sMbEf3gXHxIYxZxujKxk4OrhQBSD6rdZKKWS1D5mghU6clzJUmbYG1R7RQGPYqFlELyS9UsQqY3Qf7EJgqoajdfmFRlA4ZA635mQgJLu_P7ACNOdt_3e1gRkqVP0IHiTfaXIMkbol6rv10v-vPzqBqc1A1KPrr8X_znNa2gw-Jzjnua5ZdO_JGjSLsZi8SxFjSK-O64OwQ4u6JnmDJS0ZS6uYvUjXTTCCQ' }}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.formContainer}>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.tabButton}>
                  <Text style={styles.tabText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
                  <Text style={styles.activeTabText}>Login</Text>
                </TouchableOpacity>
              </View>

              {/* Email Form */}
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
                secureTextEntry
              />
               <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={emailUserType}
                  onValueChange={(itemValue) => setEmailUserType(itemValue)}
                  style={styles.picker}
                  dropdownIconColor="rgba(255, 255, 255, 0.5)"
                >
                  <Picker.Item label="Login as Buyer" value="buyer" />
                  <Picker.Item label="Login as Seller" value="seller" />
                </Picker>
              </View>
              <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login with Email</Text>
              </TouchableOpacity>

              <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>OR</Text>
                <View style={styles.divider} />
              </View>

              {/* Phone Form */}
               <View style={styles.phoneInputContainer}>
                <Text style={styles.countryCode}>+91</Text>
                <TextInput
                  style={styles.phoneInput}
                  placeholder="Phone Number"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                  keyboardType="phone-pad"
                />
              </View>
              <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={phoneUserType}
                    onValueChange={(itemValue) => setPhoneUserType(itemValue)}
                    style={styles.picker}
                    dropdownIconColor="rgba(255, 255, 255, 0.5)"
                >
                    <Picker.Item label="Login as Buyer" value="buyer" />
                    <Picker.Item label="Login as Seller" value="seller" />
                </Picker>
              </View>
              <TouchableOpacity style={styles.otpButton}>
                <Text style={styles.otpButtonText}>Send OTP</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  safeArea: {
    flex: 1,
    fontFamily: 'Manrope_400Regular',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    width: '100%',
    maxWidth: 384,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  tabButton: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingBottom: 8,
    alignItems: 'center',
  },
  activeTab: {
    borderColor: '#f2f2f2',
  },
  tabText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: '500',
  },
  activeTabText: {
    fontSize: 16,
    color: '#f2f2f2',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 16,
    color: 'white',
    marginBottom: 16,
  },
  pickerContainer: {
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    marginBottom: 16,
  },
  picker: {
    color: 'white',
  },
  loginButton: {
    height: 56,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'Manrope_700Bold',
    color: '#191919',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  dividerText: {
    marginHorizontal: 16,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginBottom: 16,
  },
  countryCode: {
    color: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: 12,
  },
  phoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    color: 'white',
  },
  otpButton: {
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  otpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 24,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
});

export default LoginScreen;
