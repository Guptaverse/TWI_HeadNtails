import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import FlashScreen from './screens/FlashScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <OnboardingScreen/> */}
      {/* <FlashScreen/> */}
      {/* <LoginScreen/> */}
      <ProfileSetupScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
