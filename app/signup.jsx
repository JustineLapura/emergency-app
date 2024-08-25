import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

const Signup = () => {
  const router = useRouter();
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
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="John Doe"
            value="John Doe"
          />
          <Text className="text-gray-700 ml-4 font-semibold">
            Email Address
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email@example.com"
            value="email@example.com"
          />
          <Text className="text-gray-700 ml-4 font-semibold">
            Mobile Number
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="12345678901"
            value="12345678901"
          />
          <Text className="text-gray-700 ml-4 font-semibold">Gender</Text>
          <View className=" bg-gray-100 text-gray-700 rounded-2xl mb-3">
            <Picker>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          <Text className="text-gray-700 ml-4 font-semibold">Password</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-5"
            placeholder="Enter Password"
            secureTextEntry
            value="test12345"
          />
          <TouchableOpacity
            onPress={() => router.push("/home")}
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
