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
      <View style={tw`w-full flex-1 px-5 pt-24`}>
        <Text style={tw`text-white text-center mb-4 text-8`}>
          Capture Your Waste
        </Text>
        <View
          style={tw`w-full h-140 border-2 border-solid border-green-500`}
        ></View>
        <View style={tw`bg-red-600 h-full relative right-5 w-1000000`}>
          <FlatList
            // style={tw`flex-1 relative right-15`}
            horizontal
            data={data}
            renderItem={renderItem}
                  />
                  <View style={tw`flex-3 bg-white`}>
                      
                  </View>
          <CameraButton />
        </View>
      </View>
    </Camera>
  );
}
