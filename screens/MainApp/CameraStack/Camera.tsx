import { Camera, CameraType } from "expo-camera";
import { useState, useRef, useEffect } from "react";
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
import LoadingScreen from "../LoadingScreen";

type FlatListState = "left" | "center" | "right";

const categories = ["Foods", "Electronics", "Recyclables"] as const;

type Category = typeof categories[number];

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  console.log("hello");
  useEffect(() => {
    console.log("testing");
    const timeout = setTimeout(() => {
      setIsLoading(!isLoading);
      setTimeout(() => {
        navigation.navigate("Details");
        setIsLoading(!isLoading);
      }, 750);
    }, 10000);

    console.log("im being ran");

    // return clearTimeout(timeout);
  }, []);

  const [type, setType] = useState(CameraType.back);
  const flatListRef = useRef(null);
  const [selectedCategory, setSelectedCategory] =
    useState<Category>("Electronics");
  const [permission, requestPermission] = Camera.useCameraPermissions();
  let flatListState: FlatListState = "center";

  if (selectedCategory === "Electronics") {
    flatListState = "center";
  } else if (selectedCategory === "Foods") {
    flatListState = "left";
  } else if (selectedCategory === "Recyclables") {
    flatListState = "right";
  }

  const scrollToIndex = (index: number) => {
    // @ts-ignore
    flatListRef.current.scrollToIndex({ index: index, animated: true });
  };

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

  const screenHeight = Dimensions.get("window").height;

  const captureRectangleWidth = 500;

  // const blurWidth = (screenWidth - captureRectangleWidth) / 2;

  const blurWidth = 75;

  const onSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    // console.log(`index is ${categories.indexOf(category)}`)
    scrollToIndex(categories.indexOf(category));
  };

  // @ts-ignore
  const renderItem = ({ item: category }) => {
    const isSelected = category === selectedCategory;

    return (
      <Choice
        onPress={() => onSelectCategory(category)}
        text={category}
        isSelected={isSelected}
      />
    );
  };

  return (
    <LoadingScreen show={!isLoading}>
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
                style={tw`relative ${
                  flatListState === "left" ? "left-32" : "right-26"
                } ${
                  flatListState === "center" ? "left-7" : ""
                } w-full mt-4 overflow-visible`}
                horizontal
                renderItem={renderItem}
                ref={flatListRef}
                initialScrollIndex={0}
                keyExtractor={(item) => {
                  return item;
                }}
              />
            </View>

            <View style={tw`flex-3`}>
              <CameraButton />
            </View>
          </View>
        </View>
      </Camera>
    </LoadingScreen>
  );
}
