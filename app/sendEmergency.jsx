import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

const SendEmergency = () => {
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
            style={{ width: 150, height: 150 }}
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tr-[50px] rounded-tl-[50px] ">
        <View className="form space-y-2">
          <View className="space-y-1">
            <Text className="text-gray-700 text-xs ml-4 font-semibold">
              Where you are located right now (Department)
            </Text>
            <View className=" bg-gray-100 text-gray-700 rounded-2xl mb-2">
              <Picker>
                <Picker.Item label="Other" />
                <Picker.Item label="COED" />
                <Picker.Item label="CONHS" />
                <Picker.Item label="COENG" />
                <Picker.Item label="CIT" />
                <Picker.Item label="CAS" />
              </Picker>
            </View>
          </View>
          <View className="space-y-1">
            <Text className="text-gray-700 ml-4 font-semibold">
              Please Specify:
            </Text>
            <TextInput
              className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2"
              placeholder="First floor of Cas New Building"
            />
          </View>
          <View className="space-y-1 mb-2">
            <Text className="text-gray-700  ml-4 font-semibold">
              Choose an Emergency:
            </Text>
            <View className=" bg-gray-100 text-gray-700 rounded-2xl mb-2">
              <Picker>
                <Picker.Item label="Other" />
                <Picker.Item label="Injury" />
                <Picker.Item label="Natural Disaster" />
                <Picker.Item label="Fire" />
              </Picker>
            </View>
            <View className="space-y-1">
              <Text className="text-gray-700 ml-4 font-semibold">
                Write your emergency message:
              </Text>
              <TextInput
                className="p-3 bg-gray-100 text-gray-700 rounded-2xl"
                placeholder="There's a fire on the first floor of Cas New Building. We need to get out now!"
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/emergencySent")}
            className="py-3 bg-red-500 rounded-xl"
          >
            <Text className="text-white text-lg font-bold text-center tracking-wider">
              Send Emergency
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SendEmergency;
