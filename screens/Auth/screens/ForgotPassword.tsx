import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { EnvelopeIcon, LockOpenIcon } from 'react-native-heroicons/outline';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import tw from '../../../lib/tailwind';
import globalstyle from '../../../styles/globalstyle';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigation();

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  return (
    <SafeAreaView style={globalstyle.droidSafeArea}>
      <View style={tw`flex-1 items-center bg-white`}>
        <View style={tw`bg-white text-xl self-start ml-4 mt-8`}>
          <Button onPress={() => navigate.goBack()}>Back</Button>
        </View>
        {/* header */}
        <View style={tw`w-4/5 mt-8`}>
          <View style={tw`flex flex-col gap-2 mb-8`}>
            <Text
              style={tw`text-4xl break-words w-4/5 font-bold text-gray-800`}
            >
              Forgot Password?
            </Text>
            <Text style={tw`text-lg mb-4 text-gray-800`}>
              Enter your email address to reset your password.
            </Text>
          </View>
          <View style={tw`flex flex-col gap-8`}>
            <Input
              leadingIcon={
                <EnvelopeIcon style={tw`flex w-6 h-6 text-gray-300`} />
              }
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Button onPress={handleForgotPassword}>Send Email</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
