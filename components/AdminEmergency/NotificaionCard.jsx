import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const NotificationCard = ({ item }) => {
  // console.log("Emergency: ", item);
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push(`/notificationDetail/${item.id}`)}
      className="max-w-[150px]"
    >
      <Text>Department: {item?.displayName}</Text>
      <Text numberOfLines={2} ellipsizeMode="tail">
        Emergency: {item?.message}
      </Text>
      <Text>Department: {item?.department}</Text>
      <Text>email: {item?.email}</Text>
      <Text>Location: {item?.location}</Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;
