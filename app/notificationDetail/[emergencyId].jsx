import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../config/firebase";

const emergencyDetail = {
  name: "John Doe",
  date: "2024-08-26",
  timeSent: "01:45 PM",
  alertLevel: "🛑",
  desc: "Severe accident on Highway 50 involving multiple vehicles.",
  image: "https://randomuser.me/api/portraits/men/1.jpg",
};

const Page = () => {
  const [emergencyDetail, setEmergencyDetail] = useState(null);
  const { emergencyId } = useLocalSearchParams();
  const db = getFirestore(app);
  const router = useRouter();

  console.log("emergencyDetail: ", emergencyDetail);

  useEffect(() => {
    getEmergencyDetailById();
  }, []);

  const getEmergencyDetailById = async () => {
    const docRef = doc(db, "emergencies", emergencyId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setEmergencyDetail({ id: docSnap?.id, ...docSnap.data() });
    } else {
      console.log("No such document!");
    }
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="rounded-b-[40px] bg-red-500 h-[300px] w-full absolute" />
      <SafeAreaView>
        <View className="flex-row justify-between mx-4 mt-8 items-center">
          <TouchableOpacity
            onPress={() => router.push("/adminHome")}
            className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="arrow-back" size={20} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert("Initiated call to the person in need")}
            className="bg-green-500 rounded-2xl p-3 shadow"
          >
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex justify-center items-center">
          <Image
            source={require("../../assets/images/profile.jpg")}
            className="w-32 h-32 rounded-2xl"
          />
          <Text className="text-3xl mt-5 text-white">
            {emergencyDetail?.displayName}
          </Text>
        </View>

        {/* Add and Remove section  */}

        {/* Icons Section  */}
        <View className="flex-row justify-between items-center mt-14 mx-4 h-20 overflow-hidden">
          <View className="flex items-center space-y-2">
            <Ionicons name="flame" size={30} color="red" />
            <Text className="font-semibold">danger</Text>
          </View>
          <View className="flex items-center space-y-2">
            <Ionicons name="time" size={30} color="red" />
            <Text className="font-semibold">15-20 min</Text>
          </View>
          <View className="flex items-center space-y-2">
            <Ionicons name="chatbubble" size={30} color="red" />
            <Text className="font-semibold">4 msgs</Text>
          </View>
          <View className="flex items-center space-y-2">
            <Ionicons name="notifications" size={30} color="red" />
            <Text className="font-semibold">10 notifs</Text>
          </View>
        </View>

        {/* Information Section  */}
        <View className="mx-4 mt-4 space-y-3 min-h-[200px]">
          <Text className="text-3xl font-semibold text-gray-800">
            Emergency
          </Text>
          <Text className="tracking-wide mt-4 text-gray-800">
            {emergencyDetail?.message}
          </Text>
          <Text className="text-3xl font-semibold text-gray-800">
            Location:
          </Text>
          <Text className="tracking-wide mt-4 text-gray-800">
            {emergencyDetail?.location}
          </Text>
        </View>

        {/* Add to Cart section  */}
        <View className="mx-4 flex-row justify-between items-center">
          <Text className="text-xl font-semibold text-gray-800">
            {emergencyDetail?.department}
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => alert("Initiated response to the person in need")}
              className="bg-red-500 p-4 px-14 rounded-2xl"
            >
              <Text className="text-white text-xl font-semibold">Respond</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Page;
