import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../config/firebase";
import NotificationCard from "./NotificaionCard";

const Emergencies = () => {
  const [emergencyList, setEmergencyList] = useState([]);
  const db = getFirestore(app);
  console.log("Emergencies: ", emergencyList);

  useEffect(() => {
    getemergencyList();
  }, []);

  const getemergencyList = async () => {
    setEmergencyList([]);
    const querySnapshot = await getDocs(collection(db, "emergencies"));

    querySnapshot.forEach((doc) => {
      setEmergencyList((latestItemList) => [
        ...latestItemList,
        { id: doc?.id, ...doc.data() },
      ]);
    });
  };
  return (
    <View className="mt-4 mx-4 ">
      <FlatList
        data={emergencyList}
        horizontal={true}
        renderItem={({ item }) => <NotificationCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Emergencies;
