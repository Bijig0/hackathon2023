import React from "react";
import { View, Text } from "react-native";
import CancelIcon from "../assets/icons/cancel-svgrepo-com.svg";
import LoveIcon from "../assets/icons/love-svgrepo-com.svg";
import CapitalizeIcon from "../assets/icons/letter-case-capitalize-svgrepo-com.svg";
import ShareIcon from "../assets/icons/share-2-svgrepo-com.svg";
import tw from "../lib/tailwind";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const IconBar = () => {
  const iconSize = 30;
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row justify-between mb-4`}>
      <TouchableOpacity
        onPress={() => navigation.navigate("MainApp", { screen: "Home" })}
      >
        <CancelIcon width={iconSize} height={iconSize} />
      </TouchableOpacity>
      <View style={tw`flex-row`}>
        <LoveIcon style={tw`ml-3`} width={iconSize} height={iconSize} />
        <CapitalizeIcon style={tw`ml-3`} width={iconSize} height={iconSize} />
        <ShareIcon style={tw`ml-3`} width={iconSize} height={iconSize} />
      </View>
    </View>
  );
};

export default IconBar;
