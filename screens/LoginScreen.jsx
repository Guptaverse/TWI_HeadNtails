import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <ScrollView style={styles.formContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
      </ScrollView>
      <View> 
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View></View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
    margin:'auto'
  },
  formContainer: {
    flex: 1, // Expand to fill available space
    // backgroundColor:"red",
    marginBottom: 16, // Add some spacing between the form and the "Login" button
    width:250
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#8d9570',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#dda15e',
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default LoginScreen;
