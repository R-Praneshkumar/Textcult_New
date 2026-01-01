import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from 'react-native';

const BuyerSignUpScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoXk4ixHBlsa_nyGSev2ZHIU7J9bfIC-clxEhCb0-E5sMbEf3gXHxIYxZxujKxk4OrhQBSD6rdZKKWS1D5mghU6clzJUmbYG1R7RQGPYqFlELyS9UsQqY3Qf7EJgqoajdfmFRlA4ZA635mQgJLu_P7ACNOdt_3e1gRkqVP0IHiTfaXIMkbol6rv10v-vPzqBqc1A1KPrr8X_znNa2gw-Jzjnua5ZdO_JGjSLsZi8SxFjSK-O64OwQ4u6JnmDJS0ZS6uYvUjXTTCCQ' }}
      style={styles.background}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={[styles.tabButton, styles.activeTab]}>
                  <Text style={styles.activeTabText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton}>
                  <Text style={styles.tabText}>Login</Text>
                </TouchableOpacity>
              </View>
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
              <TextInput
                style={styles.input}
                placeholder="Company Name"
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
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
    flex: 1,
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
    // Note: backdrop-blur is not directly supported in React Native
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
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 16,
    color: 'white',
    marginBottom: 16,
  },
  signUpButton: {
    marginTop: 16,
    height: 56,
    width: '100%',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  signUpButtonText: {
    fontSize: 16,
    fontFamily: 'Manrope_700Bold',
    color: '#191919',
  },
});

export default BuyerSignUpScreen;
