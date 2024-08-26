import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

const EmergencySent = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-red-200">
      <StatusBar style="dark" />
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => router.back()}
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
      <View className="flex-1 bg-white px-8 rounded-tr-[50px] rounded-tl-[50px] ">
        <View className="flex-1 justify-center gap-20">
          <View className="flex items-center space-y-4">
            <Ionicons name="checkmark-circle" size={60} color="red" />

            <Text className="text-center uppercase text-4xl font-black tracking-widest text-red-500">
              Emergency sent{"\n"}successfully!
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="py-3 bg-red-500 rounded-xl"
          >
            <Text className="text-white text-lg font-bold text-center tracking-wider">
              Ok
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmergencySent;
