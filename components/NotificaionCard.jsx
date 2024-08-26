import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const NotificationCard = (item) => {
  const emergency = item.item;
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/notificationDetails")}
      className="w-full max-w-[150px] mb-5 mr-6 p-3 rounded-3xl bg-white blur-3xl"
    >
      <View className="flex-row justify-center">
        <Image
          source={{ uri: emergency.image }}
          className="h-20 w-20 rounded-full"
        />
      </View>
      <View className="flex-1 px-3 py-2 space-y-4">
        <Text className=" font-medium tracking-wider text-center">
          {emergency.name}
        </Text>
        <Text className="text-red-500 font-semibold text-xs">
          {emergency.desc}
        </Text>
      </View>

      <View className="flex-row justify-between items-center px-1">
        <View className="h-10 flex justify-between">
          <Text className="font-semibolds text-xs">{emergency.timeSent}</Text>
          <Text className="font-semibolds text-xs">{emergency.date}</Text>
        </View>
        <TouchableOpacity
          onPress={() => alert("Initiated a call to the person in need")}
          className="bg-green-500 p-3 rounded-full"
        >
          <Ionicons name="call" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
