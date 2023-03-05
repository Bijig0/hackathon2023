import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../lib/tailwind";

type Props = {
  text: string;
  isSelected: boolean;
  onPress?: () => any | void;
};

const Choice = ({ text, isSelected, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={tw`${
          isSelected ? "text-yellow-500" : "text-white"
        } ml-10 font-bold text-4 h-10`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Choice;
