import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BodyParts from "../components/BodyParts";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import useAuth from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("User in component: ", user);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      router.push("/login");
    } catch (error) {
      console.log("Error signing out: ", error.message);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-wrhite flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      {/* punchline and avatar */}
      <View>
        <View className="flex-row justify-between items-center mx-5">
          {/* <TouchableOpacity
            onPress={handleLogout}
            className="bg-red-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="log-out-outline" size={20} color="white" />
          </TouchableOpacity> */}
          <View>
            <Text className="text-2xl text-red-500 font-black">RESCUE APP</Text>
          </View>

          <View className="flex-row gap-3">
            <View className="flex justify-center items-center space-y-2">
              <TouchableOpacity
                onPress={() => router.push("/notifications")}
                className="relative h-12 w-12 flex justify-center items-center "
              >
                <Ionicons name="notifications" size={40} color="gray" />
                <View className="absolute top-1 right-1 bg-red-600 h-5 w-5 rounded-full flex justify-center items-center">
                  <Text className="text-white text-xs font-bold">3</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => router.push("/profile")}>
              <Image
                source={require("../assets/images/john doe.jpg")}
                style={{ height: hp(6), width: hp(6) }}
                className="rounded-full"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleLogout}
              className="h-10 w-10 flex justify-center items-center bg-red-500 p-2 rounded-tr-2xl rounded-full ml-4"
            >
              <Ionicons name="log-out-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* <Text
          style={{ fontSize: hp(4) }}
          className="uppercase text-red-700 font-bold tracking-wider "
        >
          Report an Emergency
        </Text> */}
      </View>

      {/* Image Slider  */}
      <Image
        resizeMode="contain"
        source={require("../assets/images/e-kit.jpg")}
        className="w-[90%] h-[200px] rounded-3xl mx-auto object-cover"
      />

      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
