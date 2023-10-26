import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
      />
      <Button title="Login" /> 
      <Text style={styles.text}>Don't have an account?</Text>
      <Button title="Sign Up"  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
    resizeMode: 'contain', // You can adjust this to your needs
  },
  text: {
    marginTop: 16, // Adjust the spacing between text and buttons
  },
});

export default OnboardingScreen;
