import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tw from "../../lib/tailwind";
const tailwindConfig = require("../../tailwind.config.js");

type Props = {
  children: React.ReactElement;
  show: boolean;
};

const LoadingScreen = (props: Props): React.ReactElement => {
  const fullConfig = resolveConfig(tailwindConfig) as any;
  const orange = fullConfig.theme.colors.orange.regular;

  if (props.show) {
    return props.children;
  }

  return (
    <>
      {props.children}
      <View
        style={tw`flex-1 justify-center items-center inset-0 absolute bg-grey-overlay`}
      >
        <ActivityIndicator size="large" color={orange} />
      </View>
    </>
  );
};

export default LoadingScreen;
