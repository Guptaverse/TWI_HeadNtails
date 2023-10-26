import React, { useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FlashScreen = ({ navigation }) => {
  useEffect(() => {
    // You can add a timer or other logic to control when to navigate away from the flash screen.
    // For example, you can use setTimeout or any other logic that suits your needs.
    setTimeout(() => {
      navigation.navigate('MainScreen'); // Replace 'MainScreen' with your target screen.
    }, 3000); // Change the delay to your desired duration (in milliseconds).
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
      />
      <Image
        source={require('../assets/image1.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Your Flash Screen Text</Text>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('MainScreen')}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set the background color of your flash screen.
  },
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
    resizeMode: 'contain', // You can adjust this to your needs
    marginBottom: 16, // Adjust the spacing between images and text
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16, // Adjust the spacing between text and the skip button
  },
  skipButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  skipText: {
    fontSize: 16,
    color: 'blue', // Customize the color of the skip text.
  },
});

export default FlashScreen;
