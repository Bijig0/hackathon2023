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

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

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

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const data = ["Foods and drinks", "Alcohol", "Plants and beverages"];

  const renderItem = ({ item: text }) => {
    return <Choice text={text} />;
  };

  return (
    <Camera style={tw`flex-1`} type={type}>
      <View style={tw`flex-1 justify-center items-center px-5 pt-24`}>
        <View style={tw`flex-0 basis-15`}>
          <Text style={tw`text-white text-center text-8`}>
            Capture Your Waste
          </Text>
        </View>
        <View
          style={tw`w-full flex-5 border-2 border-solid border-green-500`}
        ></View>
        <View
          style={tw`bg-black items-center flex-2 relative right-5 w-1000000`}
        >
          <View style={tw`flex-1`}>
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
