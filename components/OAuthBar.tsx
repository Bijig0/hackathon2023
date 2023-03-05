import React from "react";
import { View, Image } from "react-native";
import GoogleIcon from "../assets/logos/google-color-svgrepo-com.svg";
import AppleIcon from "../assets/logos/apple-svgrepo-com.svg";
import FacebookIcon from "../assets/logos/facebook-svgrepo-com.svg";
import tw from "../lib/tailwind";

const OAuthBar = () => {
  const iconSize = 48;
  return (
    <View style={tw`flex flex-row justify-center items-center gap-6`}>
      <GoogleIcon width={42} height={42} style={tw`rounded-full`} />
      <AppleIcon width={52} height={52} style={tw`rounded-full`} />
      <FacebookIcon width={48} height={48} style={tw`rounded-full`} />
    </View>
  );
};

export default OAuthBar;
