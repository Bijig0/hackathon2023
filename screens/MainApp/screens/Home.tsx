import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";

type Props = {};

const Home = () => {
  return (
    <View style={tw`bg-black w-10 flex-1 items-center justify-center`}>
      <Text>Something</Text>
    </View>
  );
};

export default Home;
