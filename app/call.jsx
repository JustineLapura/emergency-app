import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-red-200">
      <StatusBar style="dark" />
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => router.push("/home")}
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
        <Text className="text-center text-red-500 text-2xl font-black tracking-widest uppercase mt-2">
          Emergency Hotline
        </Text>

        <View className="mt-12 space-y-5">
          {/* Emergency hotline 1 */}
          <View>
            <Text className=" text-red-500  font-black tracking-widest uppercase mt-2">
              SSUDRMO
            </Text>
            <View className="flex-row justify-between items-center">
              <Text className=" text-red-500 text-2xl font-black tracking-widest uppercase mt-2">
                0998 456 6335
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL("tel:09984566335")}
                className="flex justify-center items-center mr-3 rounded-full bg-green-800 p-2"
              >
                <Ionicons name="call" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Emergency hotline 2 */}
          <View>
            <Text className=" text-red-500  font-black tracking-widest uppercase mt-2">
              SSU CLINIC
            </Text>
            <View className="flex-row justify-between items-center">
              <Text className=" text-red-500 text-2xl font-black tracking-widest uppercase mt-2">
                0998 456 6335
              </Text>
              <TouchableOpacity
                onPress={() => alert("Initiated emergency hotline call")}
                className="flex justify-center items-center mr-3 rounded-full bg-green-800 p-2"
              >
                <Ionicons name="call" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Emergency hotline 3 */}
          <View>
            <Text className=" text-red-500  font-black tracking-widest uppercase mt-2">
              SSU GUARD
            </Text>
            <View className="flex-row justify-between items-center">
              <Text className=" text-red-500 text-2xl font-black tracking-widest uppercase mt-2">
                0998 456 6335
              </Text>
              <TouchableOpacity
                onPress={() => alert("Initiated emergency hotline call")}
                className="flex justify-center items-center mr-3 rounded-full bg-green-800 p-2"
              >
                <Ionicons name="call" size={15} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
