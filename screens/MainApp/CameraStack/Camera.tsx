import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import AppBox from "../../../components/AppBox";
import CameraButton from "../../../components/CameraButton";
import Choice from "../../../components/Choice";
import tw from "../../../lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import CaptureSquare from "../../../assets/icons/capture-square.svg";
import TickIcon from "../../../assets/icons/tick-svgrepo-com.svg";
import BackIcon from "../../../assets/icons/back-svgrepo-com (2).svg";
import CaptureRectangle from "../../../assets/icons/capture-rectangle.svg";
import { BlurView } from "expo-blur";
import { useWindowDimensions } from "react-native";

const categories = [
  "Foods and drinks",
  "Alcohol",
  "Plants and beverages",
] as const;

type Category = typeof categories[number];

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const flatListRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState<Category>("Alcohol");
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const screenWidth = Dimensions.get("window").width;

  console.log({ screenWidth });
  const screenHeight = Dimensions.get("window").height;

  const captureRectangleWidth = 500;

  // const blurWidth = (screenWidth - captureRectangleWidth) / 2;

  const blurWidth = 75;

  const onSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  // @ts-ignore
  const renderItem = ({ item: category }) => {
    const isSelected = category === selectedCategory;
    console.log({ category, isSelected });

    return (
      <Choice
        onPress={() => onSelectCategory(category)}
        text={category}
        isSelected={isSelected}
      />
    );
  };

  console.log({ blurWidth });

  return (
    <Camera style={tw`flex-1`} type={type}>
      <BlurView intensity={25} style={tw`absolute left-0 w-21 h-900`} />

      <BlurView intensity={25} style={tw`absolute right-0 w-21 h-900`} />
      <BlurView
        intensity={25}
        style={tw`absolute top-0 left-21 right-21 h-29`}
      />
      <BlurView
        intensity={25}
        style={tw`absolute bottom-0 left-21 right-21 h-62`}
      />

      <View style={tw`flex-1 justify-center items-center pt-16`}>
        <CaptureRectangle width={captureRectangleWidth} height={575} />
        <View
          style={tw`bg-black items-center flex-2 relative right-5 w-1000000`}
        >
          <View style={tw`flex-1 mb-4`}>
            <FlatList
              data={categories}
              style={tw`relative left-4 mt-4`}
              horizontal
              renderItem={renderItem}
              ref={flatListRef}
            />
          </View>

          <View style={tw`flex-3`}>
            <CameraButton />
          </View>
        </View>
      </View>
    </Camera>
  );
}
