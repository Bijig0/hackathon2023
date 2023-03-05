import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import tw from "../../../lib/tailwind";
import globalstyle from "../../../styles/globalstyle";
import Svg, { Circle } from "react-native-svg";
import { ArrowLeftIcon, EnvelopeIcon, LockOpenIcon } from "react-native-heroicons/outline";
import OAuthBar from "../../../components/OAuthBar";

const LoginScreen = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isTouch, setIsTouch] = useState(false);

  const navigate = useNavigation();

  const handleLogin = () => {
    // handle login logic here
    setIsTouch(true);
    navigate.navigate("MainApp", { screen: "Home" });
  };

  return (
    <SafeAreaView style={globalstyle.droidSafeArea}>
      <View style={tw`bg-white flex-1 items-center`}>
        <View style={tw`bg-white text-xl self-start ml-4 mt-8`}>
          <Button variant="secondary" onPress={() => navigate.goBack()}>
            <ArrowLeftIcon style={tw`h-6 w-6 text-black`} />
          </Button>
        </View>
        <View style={tw`w-4/5 mt-8`}>
          {/* header */}
          <View style={tw`mb-12`}>
            <Text style={tw`text-4xl font-bold text-gray-800`}>
              Login to your account
            </Text>
          </View>
          {/* input */}
          <View style={tw`mb-4`}>
            <Input
              leadingIcon={
                <EnvelopeIcon style={tw`flex w-6 h-6 text-gray-300`} />
              }
              error="Error message"
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
              touched={isTouch}
            />
          </View>
          {/* input */}
          <View>
            <Input
              // leadingIcon={
              //   <LockOpenIcon style={tw`w-6 h-6 text-black bg-red-400`} />
              // }
              error="Error message"
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              touched={isTouch}
            />
          </View>
          {/* button */}
          <View style={tw`mt-12`}>
            <Button onPress={handleLogin}>Login</Button>
          </View>
          {/* divider */}
          <View style={tw`flex flex-row w-full items-center my-8`}>
            <View style={tw`border-b-gray-300 border-b flex-1`}></View>
            <View style={tw`px-4`}>
              <Text style={tw`font-bold text-lg`}>or</Text>
            </View>
            <View style={tw`border-b-gray-300 border-b flex-1`}></View>
          </View>
          {/* Oauth */}
          <OAuthBar />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
