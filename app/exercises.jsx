import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import fireImage from "../assets/images/fire.jpg";
import { TouchableOpacity } from "react-native";
import ExerciseListData from "../components/ExerciseListData";
import { ScrollView } from "react-native-virtualized-view";

const fireSafetyTips = [
  {
    id: "001",
    step: 1,
    tipCategory: "During",
    title: "Alert Others and Call 911",
    imageUrl:
      "https://media.istockphoto.com/id/1222185939/photo/black-man-holding-smart-phone-with-emergency-number.jpg?s=1024x1024&w=is&k=20&c=ccg95GUDtfpVUlW-gldWOD7ZvSmSS5K7_fdbzavcyds=",
    description:
      "If you see a fire, immediately alert others in the area. Call 911 to report the fire, providing as much detail as possible about the location and severity.",
  },
  {
    id: "002",
    step: 2,
    tipCategory: "During",
    title: "Use a Fire Extinguisher if Safe",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1721460167314-660575358909?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "If the fire is small and manageable, use a fire extinguisher following the PASS technique (Pull, Aim, Squeeze, Sweep). If the fire is too large, evacuate immediately.",
  },
  {
    id: "003",
    step: 3,
    tipCategory: "During",
    title: "Evacuate the Building",
    imageUrl:
      "https://media.istockphoto.com/id/468731550/photo/running-away.jpg?s=612x612&w=is&k=20&c=ShPH2eiDHN3is092zBtDfvXRbAgk8ddxTdsL8DhuYDw=",
    description:
      "Leave the building immediately, using the nearest safe exit. Do not use elevators during a fire. Assist others in evacuating if possible.",
  },
  {
    id: "004",
    step: 4,
    tipCategory: "During",
    title: "Crawl Low Under Smoke",
    imageUrl:
      "https://media.istockphoto.com/id/98843995/photo/man-lying-on-warehouse-floor.jpg?s=1024x1024&w=is&k=20&c=NxPgl5OWzFuuHdeSADo3GCKO8VyYJuOG9p2uH-_YycA=",
    description:
      "If there is smoke, stay low to the ground to avoid inhaling toxic fumes. Cover your mouth with a cloth if possible, and move quickly to the nearest exit.",
  },
  {
    id: "005",
    step: 5,
    tipCategory: "During",
    title: "Check Doors for Heat",
    imageUrl:
      "https://media.istockphoto.com/id/1415286950/photo/a-green-fire-exit-sign-is-placed-on-the-ceiling-along-the-dimly-lit-corridor-and-there-is.jpg?s=612x612&w=is&k=20&c=mk1n309bX4-UzbkubRxo7DGtYz6zXfeqhnTtsDKPpyc=",
    description:
      "Before opening any doors, use the back of your hand to check if the door is hot. If it is hot, do not open it. Look for an alternate exit.",
  },
  {
    id: "006",
    step: 6,
    tipCategory: "During",
    title: "Stop, Drop, and Roll",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1677993185867-7a19fa79b005?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "If your clothes catch on fire, stop immediately, drop to the ground, and roll back and forth to smother the flames. Cover your face with your hands to protect it.",
  },
  {
    id: "007",
    step: 7,
    tipCategory: "During",
    title: "Assist Those with Disabilities",
    imageUrl:
      "https://images.unsplash.com/photo-1599282271323-f4d8e3b18df1?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "If you are able, help individuals with disabilities or mobility issues evacuate safely. If you cannot help, inform emergency responders of their location.",
  },
  {
    id: "008",
    step: 8,
    tipCategory: "During",
    title: "Gather at a Designated Meeting Spot",
    imageUrl:
      "https://media.istockphoto.com/id/1224474299/photo/sunset.jpg?s=612x612&w=is&k=20&c=GBHJGlfG0zI79mRKE1aD4DKPAjvdHQ32tjXiwOriHtw=",
    description:
      "Once outside, gather at your designated meeting spot. Account for all family members or colleagues and inform emergency responders if anyone is missing.",
  },
  {
    id: "009",
    step: 9,
    tipCategory: "During",
    title: "Do Not Re-Enter the Building",
    imageUrl:
      "https://media.istockphoto.com/id/468731550/photo/running-away.jpg?s=612x612&w=is&k=20&c=ShPH2eiDHN3is092zBtDfvXRbAgk8ddxTdsL8DhuYDw=",
    description:
      "Do not re-enter the building until emergency responders have declared it safe. Wait for further instructions from the fire department.",
  },
];

const Exercises = () => {
  const router = useRouter();

  return (
    <ScrollView>
      <StatusBar style="dark" />
      <Image
        source={fireImage}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex justify-center items-center  pr-1 bg-red-500 mx-4 absolute rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises  */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-red-700"
        >
          <Text className="uppercase font-bold tracking-wide">"Fire"</Text>
          {"  "}
          Safety Tips
        </Text>
        <View className="mb-10">
          <ExerciseListData data={fireSafetyTips} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
