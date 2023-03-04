import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

export default function App() {
  const [type, setType] = useState(CameraType.back);
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

  const data = ["Foods and drinks", "Alcohol", "Plants and beverages"];

  const renderItem = ({ item: text }) => {
    return <Choice text={text} />;
  };

  return (
    <Camera style={tw`flex-1`} type={type}>
      <View style={tw`flex-1 justify-center items-center pt-16`}>
        <CaptureRectangle width={500} height={575} />
        <View
          style={tw`bg-black items-center flex-2 relative right-5 w-1000000`}
        >
          <View style={tw`flex-1 mb-4`}>
            <FlatList
              data={data}
              style={tw`relative left-4 mt-4`}
              horizontal
              renderItem={renderItem}
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
