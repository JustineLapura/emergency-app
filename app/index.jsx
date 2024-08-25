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

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 flex bg-gray-200">
      <StatusBar style="dark" />
      <View className="flex-1 flex justify-around my-4">
        <View>
          <Text className="text-red-500 font-bold text-4xl text-center">
            Welcome to
          </Text>

          <Text className="text-red-500 font-bold text-4xl text-center">
            Emergency App!
          </Text>
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
            onPress={() => router.push("/categories")}
            className="py-3 bg-red-500 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
