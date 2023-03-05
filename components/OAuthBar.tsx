import React from "react";
import { View, Image } from "react-native";
import GoogleIcon from "../assets/logos/Google.png";
import AppleIcon from "../assets/logos/Apple.png";
import FacebookIcon from "../assets/logos/Facebook.png";
import tw from "../lib/tailwind";

const OAuthBar = () => {
  return (
    <View style={tw`flex flex-row justify-center gap-6`}>
      <Image source={GoogleIcon} style={tw`w-12 h-12  rounded-full`} />
      <Image source={AppleIcon} style={tw`w-12 h-12 rounded-full`} />
      <Image source={FacebookIcon} style={tw`w-12 h-12  rounded-full`} />
    </View>
  );
};

export default OAuthBar;
