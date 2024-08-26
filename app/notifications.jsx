import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Notifications = () => {
  return (
    <View className="flex-1 ">
      <StatusBar style="dark" />
      <View className="pt-12 mx-4">
        {/* Header  */}
        <View className="flex-row justify-between items-center">
          <View className="flex-row gap-2">
            <Text className="text-red-500 text-2xl font-bold ">
              Notifications
            </Text>
            <View className="flex justify-center items-center bg-red-500 rounded-lg py-2 px-3">
              <Text className="text-white font-black ">3</Text>
            </View>
          </View>
          <Text className="text-gray-500">Mark all as read</Text>
        </View>

        {/* Notifications List  */}
        <View className="w-full mt-8 space-y-2">
          {/* Card 1 */}
          <View className="flex-row items-start gap-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
            <Image
              source={require("../assets/images/e-kit.jpg")}
              className="w-12 h-12 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-gray-500">
                The <Text className="font-bold">Admin</Text> has responded to
                your emergency message
              </Text>
              <Text className="text-gray-400 mt-1">2 hours ago</Text>
            </View>
          </View>

          {/* Card 2 */}
          <View className="flex-row items-start gap-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
            <Image
              source={require("../assets/images/e-kit.jpg")}
              className="w-12 h-12 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-gray-500">
                <Text className="font-bold">Emergency Team</Text> is on their
                way to the fire at 123 Elm Street
              </Text>
              <Text className="text-gray-400 mt-1">1 hour ago</Text>
            </View>
          </View>

          {/* Card 3 */}
          <View className="flex-row items-start gap-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
            <Image
              source={require("../assets/images/e-kit.jpg")}
              className="w-12 h-12 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-gray-500">
                The <Text className="font-bold">Police Department</Text> has
                secured the area near the accident site
              </Text>
              <Text className="text-gray-400 mt-1">30 minutes ago</Text>
            </View>
          </View>

          {/* Card 4 */}
          <View className="flex-row items-start gap-4 py-4 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto">
            <Image
              source={require("../assets/images/e-kit.jpg")}
              className="w-12 h-12 rounded-full"
            />
            <View className="flex-1">
              <Text className="text-gray-500">
                <Text className="font-bold">Medical Team</Text> is arriving
                shortly to assist with the flood
              </Text>
              <Text className="text-gray-400 mt-1">15 minutes ago</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notifications;
