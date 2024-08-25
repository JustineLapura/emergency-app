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
    <SafeAreaView className="flex-1 flex bg-orange-100">
      <StatusBar style="dark" />
      <View className="flex-1 flex justify-around my-4">
        <StatusBar style="dark" />
        <View>
          <Text className="text-orange-500 font-bold text-4xl text-center">
            Please choose your
          </Text>

          <Text className="text-orange-500 font-bold text-4xl text-center">
            preferred option
          </Text>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/rescue.jpg")}
            style={{ width: 250, height: 250 }}
            className="rounded-full"
          />
        </View>
        <View className="space-y-4">
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="py-3 bg-orange-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Offline
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="py-3 bg-orange-400 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-white">
              Online
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="py-3 bg-orange-400 mx-7 rounded-xl"
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
