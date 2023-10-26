import React from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ProfileSetupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <Image
              source={require('../assets/Settings.png')}
              style={styles.iconImg}
            />
          </View>
          <View style={styles.icon}>
            <Image
              source={require('../assets/Vector.png')}
              style={styles.iconImg}
            />
          </View>
          <View style={styles.icon}>
            <Image
              source={require('../assets/Group.png')}
              style={styles.iconImg}
            />
          </View>
        </View>
      </View>
      <ScrollView style={styles.formContainer}>
        <View style={styles.ProfileNameContainer}>
          <View style={styles.Name}>
            <Text>Name</Text>
            <TextInput style={styles.input}  />
          </View>
          <View style={styles.profileImageContainer}>
            {/* Profile image component here */}
            <Image
              source={require('../assets/dog1.png')}
              style={styles.profileImage}
            />
          </View>
        </View>
        <Text>Age</Text>
        <TextInput style={styles.input}  />
        <Text>Breed</Text>
        <TextInput style={styles.input}  />
        <Text>Bio</Text>
        <TextInput style={styles.inputBio}  />
        <Text>Favourite Activity</Text>
        <TextInput style={styles.input}  />
        <Text>Favourite Food</Text>
        <TextInput style={styles.input}  />
      </ScrollView>
      <View>
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Changes</Text>
      </TouchableOpacity></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: 120,
    // backgroundColor:"red"
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:"blue",
    height:"100%"
  },
  icon: {
    width: 35, // Adjust the icon container's width
    height: 20, // Adjust the icon container's height
    marginHorizontal: 10, // Add some horizontal spacing between icons
    // backgroundColor:"green"
  },
  iconImg: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
  },
  Name: {
    width: '70%',
  },
  ProfileNameContainer: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBio:{
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#8d9570',
    borderRadius: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 10,
    backgroundColor: '#8d9570',
    borderRadius: 10,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50, // To make the image circular
  },
  confirmButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dda15e',
    borderRadius:10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    
  },
});

export default ProfileSetupScreen;
