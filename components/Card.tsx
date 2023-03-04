import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import cn from "classnames";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeImg from "./Image";

type Props = {
  variant: "small" | "large";
  renderRightButton: boolean;
  imgUrl: string;
};

// queueDetails

const Card = (props: Props) => {
  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <TouchableOpacity
      style={tw`${cn({
        "my-2": true,
        "w-card": props.variant === "small",
        "w-full": props.variant === "large",
        "h-64": true,
        "bg-green": true,
        "rounded-xl": true,
        "overflow-hidden": true,
      })}`}
    >
      <HomeImg image_url={props.imgUrl} />
      <View style={tw`flex-1`}>
        <View style={tw`flex-1`}>
          <Text style={tw`text-2 text-right mr-3 mt-2 text-white font-bold`}>
            Article
          </Text>
        </View>
        <View style={tw`flex-2`}>
          <Text style={tw`text-white font-bold text-sm text-left ml-3`}>
            Lorem Ipsum
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
