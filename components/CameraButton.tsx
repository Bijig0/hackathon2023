import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";

const CameraButton = () => {
  return (
    <TouchableOpacity
      style={tw`top-2 left-2 rounded-full w-16 h-16 border-solid border-black border-2 bg-white`}
    ></TouchableOpacity>
  );
};

export default CameraButton;
