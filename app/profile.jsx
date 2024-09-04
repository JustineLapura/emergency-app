import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../config/firebase";

const Profile = () => {
  const router = useRouter();
  const auth = getAuth(app);
  const db = getFirestore(app);
  const [userData, setUserData] = useState(null);
  console.log("User Profile: ", userData);
  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <View className="flex-1 bg-red-200">
      <StatusBar style="dark" />
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => router.back()}
            className="bg-red-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mb-5">
          <Image
            source={require("../assets/images/john doe.jpg")}
            style={{ width: 150, height: 150 }}
            className="rounded-full"
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tr-[50px] rounded-tl-[50px] ">
        <View className="form space-y-1">
          <Text className="text-gray-700 ml-4 font-semibold">Fullname</Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="John Doe"
            value={userData?.fullName}
          />
          <Text className="text-gray-700 ml-4 font-semibold">
            Email Address
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="email@example.com"
            value={userData?.email}
          />
          <Text className="text-gray-700 ml-4 font-semibold">
            Mobile Number
          </Text>
          <TextInput
            className="p-3 bg-gray-100 text-gray-700 rounded-2xl mb-3"
            placeholder="12345678901"
            value={userData?.phoneNumber}
          />
          <Text className="text-gray-700 ml-4 font-semibold">Gender</Text>
          <View className=" bg-gray-100 text-gray-700 rounded-2xl mb-3">
            <Picker selectedValue={userData?.gender}>
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="py-3 bg-red-500 rounded-xl"
          >
            <Text className="text-white text-lg font-bold text-center">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
