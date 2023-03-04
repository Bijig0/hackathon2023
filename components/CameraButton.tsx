import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";

const CameraButton = () => {
  return (
    <TouchableOpacity
      style={tw`rounded-full relative left-5 w-16 h-16 border-solid border-black border-2 bg-white`}
    ></TouchableOpacity>
  );
};

export default CameraButton;
