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
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // New state for loading

  const validate = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email Address is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password && password.length < 6)
      newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validate()) {
      setLoading(true); // Start loading
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
        router.push("/home");
      } catch (error) {
        console.log("got error: ", error.message);

        let alertTitle = "Log in Failed";
        let alertMessage =
          "An unexpected error occurred. Please try again later.";

        switch (error.code) {
          case "auth/invalid-email":
            alertTitle = "Invalid Email Address";
            alertMessage =
              "The email address you entered is not valid. Please check the format and try again.";
            break;
          case "auth/invalid-credential":
            alertTitle = "Invalid Credentials";
            alertMessage =
              "The credentials you provided are invalid. Please check your email and password and try again.";
            break;
          case "auth/too-many-requests":
            alertTitle = "Log in Failed";
            alertMessage =
              "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
            break;
          default:
            alertMessage = error.message;
            break;
        }

        Alert.alert(alertTitle, alertMessage);
      } finally {
        setLoading(false); // Stop loading
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
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/e-kit.jpg")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tr-[50px] rounded-tl-[50px] ">
        <View className="form space-y-1">
          <Text className="text-gray-700 ml-4 font-semibold">
            Email Address
          </Text>
          <TextInput
            className={`p-2 text-gray-700 rounded-2xl mb-3 ${
              errors.email ? "border-red-500 border-2" : "bg-gray-100"
            }`}
            placeholder="email@example.com"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Text className="text-gray-700 ml-4 font-semibold">Password</Text>
          <TextInput
            className={`p-2 text-gray-700 rounded-2xl mb-3 ${
              errors.password ? "border-red-500 border-2" : "bg-gray-100"
            }`}
            placeholder="Enter Password"
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity className="flex items-end ">
            <Text className="text-gray-700 my-4">Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => router.push("/home")}
            onPress={handleSubmit}
            className={`py-3 rounded-xl ${
              loading ? "bg-gray-400" : "bg-red-500"
            }`}
            disabled={loading} // Disable button when loading
          >
            <Text className="text-white text-lg font-bold text-center">
              {loading ? "Logging in..." : "Login"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="text-gray-700 font-bold text-center my-3">Or</Text>

        <View className="flex-row justify-center mt-3">
          <Text className="text-gray-700 font-semibold ">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text className="text-red-500 ml-2 font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
