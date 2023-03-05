import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../lib/tailwind";
import { useNavigation } from "@react-navigation/native";
import cn from "classnames";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HomeImg from "./Image";
import ThreeDotsIcon from "../assets/icons/three-dots-line-svgrepo-com.svg";

type Props = {
  variant: "small" | "large";
  renderRightButton: boolean;
  imgUrl: string;
  date: string;
  type: "Article" | "Newsletter";
  title: string;
};

// queueDetails

const Card = (props: Props) => {
  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <TouchableOpacity
      style={tw`${cn({
        "my-2": true,
        "w-full": props.variant === "large",
        "h-120": true,
        "bg-grey-dark": true,
        "rounded-xl": true,
        "overflow-hidden": true,
      })}`}
    >
      <HomeImg image_url={props.imgUrl} />
      <View style={tw`p-4 flex flex-col gap-2`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`text-white font-bold text-lg`}>{props.title}</Text>
        </View>
        <View style={tw`flex-row justify-between`}>
          <ThreeDotsIcon style={tw`mt-1 ml-1`} fill='white' width={15} height={15} />
          <View style={tw`flex`}>
            <Text style={tw`text-2 text-right text-white font-bold`}>
              {props.date}
            </Text>
            <Text style={tw`text-2 text-right text-white font-bold`}>
              {props.type}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
