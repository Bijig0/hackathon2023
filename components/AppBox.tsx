import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import tw from "../lib/tailwind";

type Props = { children: React.ReactNode; style?: Object };

const AppBox = (props: Props) => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-1 px-5 pt-4`}>{props.children}</View>
    </SafeAreaView>
  );
};

export default AppBox;
