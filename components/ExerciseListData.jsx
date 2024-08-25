import { View, Text, FlatList } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";

const ExerciseListData = ({ data }) => {
  //   console.log("Exercises: " + data);
  const router = useRouter();
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

const ExerciseCard = ({ item, router }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
        className="flex py-3 space-y-2"
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.imageUrl }}
            contentFit="cover"
            style={{ width: wp(90), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{
            fontSize: hp(2),
            maxWidth: wp(100),
          }}
          className="text-red-700 font-semibold ml-1 tracking-wide"
        >
          <Text className="font-bold text-lg">Step {item.step}: </Text>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseListData;
