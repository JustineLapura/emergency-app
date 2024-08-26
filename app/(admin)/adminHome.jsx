import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { categories, emergencyAlerts } from "../../constants";
import NotificationCard from "../../components/NotificaionCard";
import { useRouter } from "expo-router";

const AdminHome = () => {
  const [activeCategory, setActiveCategory] = useState("Burger");
  const router = useRouter();

  return (
    <View className="flex-1 relative bg-red-100">
      <StatusBar style="dark" />
      {/* <Image
        blurRadius={40}
        source={require("../assets/images/abstract.jpeg")}
        className="absolute w-full full"
      /> */}
      <SafeAreaView className="flex-1 mt-4">
        {/* Header Container  */}
        <View className="flex-row justify-between items-center mx-4 mt-4">
          {/* Hamburger Menu  */}
          {/* <View
            style={{ elevation: 5 }}
            className="bg-white shadow-md rounded-2xl p-3 "
          >
            <Ionicons name="menu" size={25} />
          </View> */}
          <TouchableOpacity
            onPress={() => router.push("/categories")}
            className="bg-red-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>

          {/* Image Profile  */}
          <TouchableOpacity
            onPress={() => router.push("/adminNotifications")}
            className="relative h-12 w-12 flex justify-center items-center "
          >
            <Ionicons name="notifications" size={35} color="gray" />
            <View className="absolute top-1 right-1 bg-red-600 h-5 w-5 rounded-full flex justify-center items-center">
              <Text className="text-white text-xs font-bold">3</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="my-12 space-y-2">
          {/* Main Content  */}
          <Text className="mx-4 text-5xl font-bold text-red-600">
            <Text className="">Check</Text> for
          </Text>
          <Text className="mx-4 text-red-600 text-3xl font-bold ">
            <Text className="font-black ">Recent</Text> Emergencies
          </Text>
        </View>
        {/* Search Section  */}
        <View className="mx-4 flex-row justify-between items-center space-x-3">
          {/* Search  */}
          <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
            <Ionicons name="search" size={25} />
            <TextInput
              placeholder="Search"
              value="Search"
              className="ml-2 text-gray-800"
            />
          </View>
          {/* Filter  */}
          <View className="bg-white rounded-2xl p-4">
            <Ionicons name="options" size={25} />
          </View>
        </View>
        {/* Categories SCrollbar  */}
        <ScrollView
          className="my-2 py-6 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categories.map((category, index) => {
            let isActive = category == activeCategory;
            // let textClass = isActive ? "font-bold" : "";
            return (
              <TouchableOpacity
                key={category}
                className="mr-9"
                onPress={() => setActiveCategory(category)}
              >
                <Text
                  className={"text-red-600 text-base tracking-widest font-bold"}
                >
                  {category}
                </Text>
                {isActive ? (
                  <View className="flex-row justify-center mt-1">
                    <View className="w-5 h-[3px] bg-red-600" />
                  </View>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Food Cards */}
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20 }}
          horizontal
          showsHorizontalScrollIndicators={false}
        >
          {emergencyAlerts.map((item) => (
            <NotificationCard item={item} key={item.name} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default AdminHome;
