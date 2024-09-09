import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import useAuth from "../hooks/useAuth";
import { app } from "../config/firebase";

const SendEmergency = () => {
  const { user } = useAuth();
  const db = getFirestore(app);
  const auth = getAuth();

  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [emergency, setEmergency] = useState("");
  const [message, setMessage] = useState("");

  const [isDepartmentValid, setIsDepartmentValid] = useState(true);
  const [isLocationValid, setIsLocationValid] = useState(true);
  const [isEmergencyValid, setIsEmergencyValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const router = useRouter();

  const onSendEmergency = async () => {
    let valid = true;

    // Validate department
    if (department === "") {
      setIsDepartmentValid(false);
      valid = false;
    } else {
      setIsDepartmentValid(true);
    }

    // Validate location
    if (location === "") {
      setIsLocationValid(false);
      valid = false;
    } else {
      setIsLocationValid(true);
    }

    // Validate emergency
    if (emergency === "") {
      setIsEmergencyValid(false);
      valid = false;
    } else {
      setIsEmergencyValid(true);
    }

    // Validate message
    if (message === "") {
      setIsMessageValid(false);
      valid = false;
    } else {
      setIsMessageValid(true);
    }

    // Show a toast message if not valid
    if (!valid) {
      ToastAndroid.show(
        "Please fill in all fields before sending the emergency",
        ToastAndroid.SHORT
      );
      return;
    }

    // Get user details
    const { displayName, email } = user || {};

    try {
      // Add emergency data to Firestore
      const docRef = await addDoc(collection(db, "emergencies"), {
        department,
        location,
        emergency,
        message,
        displayName, // Include user's display name
        email, // Include user's email
        timestamp: new Date().toISOString(), // Capture current timestamp
      });

      console.log("Emergency sent with ID: ", docRef.id);
      ToastAndroid.show("Emergency sent successfully!", ToastAndroid.SHORT);

      // Optional: Navigate to another screen after successful send
      router.push("/emergencySent");
    } catch (e) {
      console.error("Error adding document: ", e);
      ToastAndroid.show("Failed to send emergency", ToastAndroid.SHORT);
    }
  };

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
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/e-kit.jpg")}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8 rounded-tr-[50px] rounded-tl-[50px] ">
        <View className="form space-y-2">
          <View className="space-y-1">
            <Text className="text-gray-700 text-xs ml-4 font-semibold">
              Where you are located right now (Department)
            </Text>
            <View
              className={`bg-gray-100 rounded-2xl mb-2 ${
                !isDepartmentValid ? "border border-red-500" : ""
              }`}
            >
              <Picker
                selectedValue={department}
                onValueChange={(v) => setDepartment(v)}
              >
                <Picker.Item label="Other" value="Other" />
                <Picker.Item label="COED" value="COED" />
                <Picker.Item label="CONHS" value="CONHS" />
                <Picker.Item label="COENG" value="COENG" />
                <Picker.Item label="CIT" value="CIT" />
                <Picker.Item label="CAS" value="CAS" />
              </Picker>
            </View>
          </View>
          <View className="space-y-1">
            <Text className="text-gray-700 ml-4 font-semibold">
              Please Specify:
            </Text>
            <TextInput
              className={`p-3 bg-gray-100 text-gray-700 rounded-2xl mb-2 ${
                !isLocationValid ? "border border-red-500" : ""
              }`}
              placeholder="First floor of Cas New Building"
              onChangeText={(v) => setLocation(v)}
            />
          </View>
          <View className="space-y-1 mb-2">
            <Text className="text-gray-700  ml-4 font-semibold">
              Choose an Emergency:
            </Text>
            <View
              className={`bg-gray-100 rounded-2xl mb-2 ${
                !isEmergencyValid ? "border border-red-500" : ""
              }`}
            >
              <Picker
                selectedValue={emergency}
                onValueChange={(v) => setEmergency(v)}
              >
                <Picker.Item label="Other" value="Other" />
                <Picker.Item label="Injury" value="Injury" />
                <Picker.Item
                  label="Natural Disaster"
                  value="Natural Disaster"
                />
                <Picker.Item label="Fire" value="Fire" />
              </Picker>
            </View>
          </View>
          <View className="space-y-1">
            <Text className="text-gray-700 ml-4 font-semibold">
              Write your emergency message:
            </Text>
            <TextInput
              className={`p-3 bg-gray-100 text-gray-700 rounded-2xl ${
                !isMessageValid ? "border border-red-500" : ""
              }`}
              placeholder="There's a fire on the first floor of Cas New Building. We need to get out now!"
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
              onChangeText={(v) => setMessage(v)}
            />
          </View>

          <TouchableOpacity
            onPress={onSendEmergency}
            className="py-3 bg-red-500 rounded-xl"
          >
            <Text className="text-white text-lg font-bold text-center tracking-wider">
              Send Emergency
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SendEmergency;
