import React from "react";
import { View, Text } from "react-native";
import tw from "../lib/tailwind";

// @ts-ignore
const Choice = ({ text }) => {
  return <Text style={tw`text-white ml-10 font-bold text-4 h-10`}>{text}</Text>;
};

export default Choice;
