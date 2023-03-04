import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Camera from "./Camera";
import TickIcon from "../../../assets/icons/tick-svgrepo-com.svg";
import BackIcon from "../../../assets/icons/back-svgrepo-com (2).svg";
import tw from "../../../lib/tailwind";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const CameraStack = () => {
  const navigation = useNavigation();
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Capture Your Waste",
          headerRight: () => {
            return (
              <TouchableOpacity>
                <TickIcon style={tw`mr-4`} width={30} height={30} />
              </TouchableOpacity>
            );
          },
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={onBackPress}>
                <BackIcon style={tw`ml-4`} width={30} height={30} />
              </TouchableOpacity>
            );
          },
        }}
        name="Camera"
        component={Camera}
      />
    </Stack.Navigator>
  );
};

export default CameraStack;
