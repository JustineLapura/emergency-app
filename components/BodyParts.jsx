import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const BodyParts = () => {
  const router = useRouter();

  return (
    <View className="mx-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-3xl font-bold text-red-700">Emergencies</Text>
        <View className="flex-row">
          <View className="flex justify-center items-center mr-3 rounded-full bg-blue-500 p-2">
            <Ionicons name="chatbubble" size={15} color="white" />
          </View>
          <View className="flex justify-center items-center mr-3 rounded-full bg-yellow-600 p-2">
            <Ionicons name="send" size={15} color="white" />
          </View>
          <View className="flex justify-center items-center mr-3 rounded-full bg-green-800 p-2">
            <Ionicons name="call" size={15} color="white" />
          </View>
        </View>
      </View>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          alignItems: "start",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

const BodyPartCard = ({ item, router, index }) => {
  return (
    <View className="mb-5">
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex-1 justify-center items-center p-4 mb-2"
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px]"
        />
      </TouchableOpacity>

      {/* <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{ width: wp(44), height: wp(15) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-4 rounded-b-[35px]"
      /> */}
      <Text
        style={{
          fontSize: hp(2.3),
          maxWidth: wp(44),
        }}
        className="text-red-700 text-lg font-semibold ml-1 tracking-wide"
      >
        {item.name}
      </Text>
    </View>
  );
};

export default BodyParts;
