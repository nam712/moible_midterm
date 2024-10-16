import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Lấy kích thước màn hình
const { height } = Dimensions.get('window');

// Onboarding Screen Component
function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Hình ảnh intro full màn hình */}
      <Image
        source={require('./assets/intro.png')}
        style={styles.backgroundImageOnboarding}
      />
      
      {/* Các thành phần text và nút */}
      <View style={styles.overlayOnboarding}>
        <Text style={styles.titleOnboarding}>Welcome</Text>
        <Text style={styles.titleOnboarding}>to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
        
        {/* Nút "Get Started" */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.replace('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// SignIn Screen Component
function SignInScreen() {
  return (
    <View style={styles.container}>
      {/* Full-screen background image */}
      <Image
        source={require('./assets/signup.jpg')} // Add your image path here
        style={styles.backgroundImageSignIn}
      />

      {/* Content overlay (Text and buttons) */}
      <View style={styles.overlaySignIn}>
        <Text style={styles.subtitleSign}>Get your groceries </Text>
        <Text style={styles.subtitleSign}>with nectar</Text>
        {/* Display phone number input or social media login */}
        <View style={styles.phoneInputContainer}>
          <Text style={styles.flag}>🇧🇩 +880</Text>
        </View>

        <Text style={styles.orText}>Or connect with social media</Text>

        {/* Google and Facebook login buttons */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Stack Navigator Setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignInScreen} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImageOnboarding: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  overlayOnboarding: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: height * 0.30,
    zIndex: 1,
  },
  titleOnboarding: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitleSign: {
    fontSize: 30, // Đổi kích thước chữ thành 30
    textAlign: 'left', // Căn trái
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '90%',  // Mở rộng nút 90% chiều rộng màn hình
    backgroundColor: '#28a745', // Màu xanh lá cây cho nút
    paddingVertical: 15,  // Thêm khoảng đệm trên và dưới 15px
    borderRadius: 5, // Bo tròn các góc của nút
    alignItems: 'center',
    marginTop: 10, // Khoảng cách phía trên nút
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backgroundImageSignIn: {
    width: '100%',
    height: '40%', // Adjust the height for a top-banner style image
    resizeMode: 'cover',
  },
  overlaySignIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -height * 0.05, // Adjust the content positioning
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    marginBottom: 20,
  },
  flag: {
    fontSize: 18,
    marginRight: 10,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  googleButton: {
    width: '80%',
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  facebookButton: {
    width: '80%',
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});
