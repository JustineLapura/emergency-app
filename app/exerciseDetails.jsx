import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const safetyTip = {
  id: "001",
  step: 1,
  tipCategory: "During",
  title: "Alert Others and Call 911",
  imageUrl:
    "https://media.istockphoto.com/id/1222185939/photo/black-man-holding-smart-phone-with-emergency-number.jpg?s=1024x1024&w=is&k=20&c=ccg95GUDtfpVUlW-gldWOD7ZvSmSS5K7_fdbzavcyds=",
  instruction:
    "If you see a fire, immediately alert others in the area. Call 911 to report the fire, providing as much detail as possible about the location and severity.",
};

const exerciseDetails = () => {
  const router = useRouter();
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: safetyTip.imageUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="flex justify-center items-center  pr-1 bg-orange-500 mx-4 absolute rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Text
          style={{
            fontSize: hp(3.5),
          }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {safetyTip.title}
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Step:{" "}
          <Text className="font-bold text-neutral-800">{safetyTip.step}</Text>
        </Text>
        {/* <Text
          style={{
            fontSize: hp(2),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Secondary Muscles:{" "}
          <Text className="font-bold text-neutral-800">
            {safetyTip.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Target:{" "}
          <Text className="font-bold text-neutral-800">{safetyTip.target}</Text>
        </Text> */}
        <Text
          style={{
            fontSize: hp(3),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Instructions:{" "}
          <Text className="font-bold text-neutral-800">
            <Text style={{ fontSize: hp(1.7) }} className="text-neutral-800">
              {safetyTip.instruction}
            </Text>
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
