import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 flex bg-gray-200">
      <StatusBar style="dark" />
      <View className="flex-1 flex justify-around my-4">
        <StatusBar style="dark" />
        <View>
          <View className="flex-row justify-start">
            <TouchableOpacity
              onPress={() => router.push("/")}
              className="bg-red-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
              <Ionicons name="arrow-back" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/e-kit.jpg")}
            style={{ width: 250, height: 250 }}
            className="rounded-full"
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="py-3 bg-red-500 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Offline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/login")}
            className="py-3 bg-red-500 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Online
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/adminLogin")}
            className="py-3 bg-red-500 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Admin
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
