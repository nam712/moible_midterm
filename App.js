import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen'; 

const Stack = createStackNavigator();

// Lấy kích thước màn hình
const { height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh intro full màn hình */}
      <Image
        source={require('./assets/intro.png')}
        style={styles.backgroundImageOnboarding}
      />
      
      {/* Các thành phần text và nút */}
      <View style={styles.overlayOnboarding}>
        <Image source={require('./assets/carrot.png')} style={styles.logo} />
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
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
    paddingTop: height * 0.30, // Đã sửa lỗi chiều cao
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain', // Đảm bảo logo giữ nguyên tỉ lệ
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
});
