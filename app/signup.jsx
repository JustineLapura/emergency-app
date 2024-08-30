import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Signup = () => {
  const router = useRouter();

  // State for user inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  // State for error handling
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Full Name is required.";
    if (!email) newErrors.email = "Email Address is required.";
    if (!mobileNumber) newErrors.mobileNumber = "Mobile Number is required.";
    if (!gender) newErrors.gender = "Gender is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password && password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle signup submission
  const handleSubmit = async () => {
    if (validate()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up successfully");
        router.push("/home");
      } catch (error) {
        console.log("Sign up error: ", error.message);

        // Enhanced error handling
        let alertTitle = "Sign Up Failed";
        let alertMessage =
          "An unexpected error occurred. Please try again later.";

        switch (error.code) {
          case "auth/invalid-email":
            alertTitle = "Invalid Email Address";
            alertMessage =
              "The email address you entered is not valid. Please check the format and try again.";
            break;
          case "auth/email-already-in-use":
            alertTitle = "Email Already Registered";
            alertMessage =
              "The email address you entered is already in use. Please use a different email or try logging in.";
            break;
          case "auth/weak-password":
            sa;
            alertTitle = "Weak Password";
            alertMessage =
              "Your password is too weak. Please choose a password with at least 6 characters, including letters and numbers.";
            break;
          default:
            alertMessage = error.message;
            break;
        }

        alert(alertTitle, alertMessage);
      }
    }
  };

  return (
    <View className="flex-1 bg-red-200">
      <StatusBar style="dark" />
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => router.push("/categories")}
            className="bg-red-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row h-[50px] justify-center">{/*  */}</View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tr-[50px] rounded-tl-[50px] ">
        <View className="form space-y-1">
          <Text className="text-gray-700 ml-4 font-semibold">Full Name</Text>
          <TextInput
            className={`p-2 text-gray-700 rounded-2xl mb-3 ${
              errors.fullName ? "border-red-500 border-2" : "bg-gray-100"
            }`}
            placeholder="John Doe"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />

          <Text className="text-gray-700 ml-4 font-semibold">
            Email Address
          </Text>
          <TextInput
            className={`p-2 text-gray-700 rounded-2xl mb-3 ${
              errors.email ? "border-red-500 border-2" : "bg-gray-100"
            }`}
            placeholder="email@example.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Text className="text-gray-700 ml-4 font-semibold">
            Mobile Number
          </Text>
          <TextInput
            className={`p-2 text-gray-700 rounded-2xl mb-3 ${
              errors.mobileNumber ? "border-red-500 border-2" : "bg-gray-100"
            }`}
            placeholder="12345678901"
            value={mobileNumber}
            onChangeText={(text) => setMobileNumber(text)}
            keyboardType="numeric"
          />

          <Text className="text-gray-700 ml-4 font-semibold">Gender</Text>
          <View
            className={`rounded-2xl mb-3 ${
              errors.gender ? "border-red-500 border-2" : "bg-gray-100"
            }`}
          >
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          <Text className="text-gray-700 ml-4 font-semibold">Password</Text>
          <TextInput
            className={`p-2 text-gray-700 rounded-2xl mb-5 ${
              errors.password ? "border-red-500 border-2" : "bg-gray-100"
            }`}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={handleSubmit}
            className="py-3 bg-red-500 rounded-xl"
          >
            <Text className="text-white text-lg font-bold text-center">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center mt-3">
          <Text className="text-gray-700 font-semibold ">
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text className="text-red-500 ml-2 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
