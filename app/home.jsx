import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import BodyParts from "../components/BodyParts";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-wrhite flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      {/* punchline and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="uppercase font-bold tracking-wider text-neutral-700"
          >
            Report an
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="uppercase text-orange-500 font-bold tracking-wider "
          >
            Emergency
          </Text>
        </View>

        <View className="flex justify-center items-center space-y-2">
          <Image
            source={require("../assets/images/profile.jpg")}
            style={{ height: hp(6), width: hp(6) }}
            className="rounded-full"
          />
          <View
            style={{ height: hp(5.5), width: hp(5.5) }}
            className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
          >
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* Image Slider  */}
      <Image
        source={require("../assets/images/rescue.jpg")}
        className="w-[90%] h-[200px] rounded-3xl mx-auto object-cover"
      />

      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
