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

const exerciseDetails = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  console.log("got item: ", item);
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="flex justify-center items-center  pr-1 bg-rose-500 mx-4 absolute rounded-full"
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
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Equipment:{" "}
          <Text className="font-bold text-neutral-800">{item?.equipment}</Text>
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Secondary Muscles:{" "}
          <Text className="font-bold text-neutral-800">
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Target:{" "}
          <Text className="font-bold text-neutral-800">{item?.target}</Text>
        </Text>
        <Text
          style={{
            fontSize: hp(3),
          }}
          className=" text-neutral-800 tracking-wide"
        >
          Instructions:{" "}
          <Text className="font-bold text-neutral-800">
            {item.instructions.split(",").map((instruction, index) => {
              return (
                <Text
                  key={instruction}
                  style={{ fontSize: hp(1.7) }}
                  className="text-neutral-800"
                >
                  {instruction}
                </Text>
              );
            })}
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
