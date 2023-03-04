import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";

const CameraButton = () => {
  return (
    <View style={tw`relative`}>
      <View
        style={tw`rounded-xl w-6 h-6 border-solid border-black border-2 absolute`}
      ></View>
      <View
        style={tw`rounded-xl w-4 h-4 border-solid border-black border-2 absolute`}
      ></View>
    </View>
  );
};

export default CameraButton;
