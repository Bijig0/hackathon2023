import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, Image } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import tw from "../../../lib/tailwind";
import globalstyle from "../../../styles/globalstyle";
import GoogleIcon from "../../../assets/logos/Google.png";
import FacebookIcon from "../../../assets/logos/Facebook.png";
import AppleIcon from "../../../assets/logos/Apple.png";
import OAuthBar from "../../../components/OAuthBar";

const SignUp = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigation();

  const handleSignUp = () => {
    // handle sign up logic here
  };

  return (
    <SafeAreaView style={globalstyle.droidSafeArea}>
      <View style={tw`flex-1 items-center bg-white`}>
        <View style={tw`text-xl self-start ml-4 mt-8`}>
          <Button variant="secondary" onPress={() => navigate.goBack()}>
            <ArrowLeftIcon style={tw`h-6 w-6 text-black`} />
          </Button>
        </View>
        <View style={tw`w-4/5 mt-8`}>
          {/* header */}
          <View style={tw`mb-12`}>
            <Text style={tw`text-4xl font-bold text-gray-800`}>
              Create your Account
            </Text>
          </View>
          {/* input */}
          <View style={tw`flex flex-col gap-4`}>
            <Input
              leadingIcon={<UserIcon style={tw`w-6 h-6 text-gray-300`} />}
              error="Error message"
              placeholder="Name"
              onChangeText={(text) => setName(text)}
              value={name}
            />
            <Input
              leadingIcon={<EnvelopeIcon style={tw`w-6 h-6 text-gray-300`} />}
              error="Error message"
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Input
              leadingIcon={<LockClosedIcon style={tw`w-6 h-6 text-gray-300`} />}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          {/* button */}
          <View style={tw`mt-12`}>
            <Button onPress={() => navigation.navigate("")}>Sign up</Button>
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

export default SignUp;
