import { View, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import backImage from "../assets/images/back.png";
import { TouchableOpacity } from "react-native";
import ExerciseListData from "../components/ExerciseListData";
import { ScrollView } from "react-native-virtualized-view";

const exercisesData = [
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "https://v2.exercisedb.io/image/BhHC6ZPj0-AVDe",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
    secondaryMuscles: ["biceps", "shoulders"],
    instructions: [
      "Attach a wide bar to the lat pulldown machine.",
      "Grip the bar with your palms facing forward.",
      "Pull the bar down to your chest while keeping your back straight.",
      "Slowly release the bar back to the starting position.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/DK7bC1R6WhodUr",
    id: "3293",
    name: "archer pull up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Grip the pull-up bar with a shoulder-width grip.",
      "Pull up towards one side while keeping the other arm extended.",
      "Lower yourself down and repeat on the other side.",
      "Alternate sides with each repetition.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "https://v2.exercisedb.io/image/GlQaqkUJpZVKOS",
    id: "0015",
    name: "assisted parallel close grip pull-up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Use an assisted pull-up machine with a parallel grip.",
      "Pull yourself up until your chin is above the handles.",
      "Lower yourself slowly back to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "https://v2.exercisedb.io/image/DsfzI29-cj82GX",
    id: "0017",
    name: "assisted pull-up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Use an assisted pull-up machine.",
      "Grip the handles with your palms facing forward.",
      "Pull yourself up until your chin is above the bar.",
      "Lower yourself slowly back to the starting position.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "https://v2.exercisedb.io/image/-UebZp9sZzk2B6",
    id: "1431",
    name: "assisted standing chin-up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Stand on the platform of an assisted chin-up machine.",
      "Grip the bar with an underhand grip.",
      "Pull yourself up until your chin is above the bar.",
      "Lower yourself back to the starting position.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "leverage machine",
    gifUrl: "https://v2.exercisedb.io/image/oGa88LLoMEIy67",
    id: "1432",
    name: "assisted standing pull-up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Stand on the platform of an assisted pull-up machine.",
      "Grip the handles with your palms facing forward.",
      "Pull yourself up until your chin is above the bar.",
      "Lower yourself back to the starting position.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "stability ball",
    gifUrl: "https://v2.exercisedb.io/image/2NT2uT6Jp6lX13",
    id: "1314",
    name: "back extension on exercise ball",
    target: "spine",
    secondaryMuscles: ["glutes", "hamstrings"],
    instructions: [
      "Lie face down on a stability ball with your hands behind your head.",
      "Lift your chest off the ball while keeping your feet on the ground.",
      "Lower yourself back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/2ZxZvy-bhR41mb",
    id: "3297",
    name: "back lever",
    target: "upper back",
    secondaryMuscles: ["shoulders", "core"],
    instructions: [
      "Hang from a bar with your body parallel to the ground.",
      "Keep your arms straight and hold the position.",
      "Maintain a tight core to keep your body stable.",
      "Lower yourself slowly back to the starting position.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/Nae9yQxb7UGj-7",
    id: "1405",
    name: "back pec stretch",
    target: "lats",
    secondaryMuscles: ["shoulders"],
    instructions: [
      "Stand with your feet shoulder-width apart.",
      "Reach both arms behind you and clasp your hands together.",
      "Pull your hands away from your back while keeping your chest lifted.",
      "Hold the stretch for 20-30 seconds.",
    ],
  },
  {
    bodyPart: "back",
    equipment: "band",
    gifUrl: "https://v2.exercisedb.io/image/1KvSCKwRB9yfRM",
    id: "0970",
    name: "band assisted pull-up",
    target: "lats",
    secondaryMuscles: ["biceps", "forearms"],
    instructions: [
      "Attach a resistance band to a pull-up bar.",
      "Place one foot in the band to reduce your body weight.",
      "Pull yourself up until your chin is above the bar.",
      "Lower yourself back to the starting position.",
    ],
  },
];

const Exercises = () => {
  const router = useRouter();

  return (
    <ScrollView>
      <StatusBar style="dark" />
      <Image
        source={backImage}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="flex justify-center items-center  pr-1 bg-rose-500 mx-4 absolute rounded-full"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises  */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          <Text className="uppercase font-bold tracking-wide">
            "{exercisesData[0].bodyPart}"
          </Text>
          {"  "}
          Exercises
        </Text>
        <View className="mb-10">
          <ExerciseListData data={exercisesData} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
