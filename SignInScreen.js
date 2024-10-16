import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

const SignInScreen = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Nửa trên chứa ảnh */}
        <View style={styles.topHalf}>
          <Image
            source={require("./assets/signup.jpg")}
            style={styles.image}
          />
        </View>

        {/* Nửa dưới chứa form đăng nhập */}
        <View style={styles.bottomHalf}>
            {/* Thêm dòng chữ "Get your phone number" */}
            <Text style={styles.phoneNumberLabel}>Get your groceries </Text>
            <Text style={styles.phoneNumberLabel}>with nectar</Text>
          <SafeAreaView style={styles.wrapper}>
            {showMessage && (
              <View style={styles.message}>
                <Text>Value: {value}</Text>
                <Text>Formatted Value: {formattedValue}</Text>
                <Text>Valid: {valid ? "true" : "false"}</Text>
              </View>
            )}
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="US"
              layout="first"
              onChangeText={(text) => setValue(text)}
              onChangeFormattedText={(text) => setFormattedValue(text)}
              withDarkTheme
              withShadow
              autoFocus
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (phoneInput.current) {
                  const checkValid = phoneInput.current.isValidNumber(value);
                  setShowMessage(true);
                  setValid(checkValid || false);
                }
              }}
            >
              <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>

            {/* Nút đăng nhập bằng Google và Facebook */}
            <Text style={styles.orText}>Or connect with social media</Text>

            <TouchableOpacity style={[styles.socialButton, styles.googleButton]}>
              <View style={styles.socialButtonContent}>
                <Image
                  source={require("./assets/search.png")} // Thêm logo Google
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>
                  Continue with Google
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.socialButton, styles.facebookButton]}
            >
              <View style={styles.socialButtonContent}>
                <Image
                  source={require("./assets/facebook.png")} // Thêm logo Facebook
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>
                  Continue with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 2, // Chiếm 2/5 màn hình
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  bottomHalf: {
    flex: 3, // Chiếm 3/5 màn hình
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    justifyContent: "center",
    padding: 16,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  phoneNumberLabel: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10, // Khoảng cách giữa chữ và ô input
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
    width: "90%",         
    alignSelf: "center",   
    
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  },
  socialButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row", // Căn logo và text theo hàng ngang
  },
  socialButtonContent: {
    flexDirection: "row", // Căn nội dung trong button theo hàng ngang
    alignItems: "center",
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10, // Khoảng cách giữa logo và văn bản
    resizeMode: "contain",
  },
  googleButton: {
    backgroundColor: "#4285F4",
    width: "90%",         
    alignSelf: "center",   
  },
  facebookButton: {
    backgroundColor: "#3b5998",
    width: "90%",         
    alignSelf: "center",   
  },
  socialButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SignInScreen;
