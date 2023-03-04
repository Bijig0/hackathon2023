import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from '../../../lib/tailwind';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // handle forgot password logic here
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <View style={tw`w-4/5`}>
        <Text style={tw`text-3xl font-bold mb-4 text-gray-800`}>
          Forgot Password
        </Text>
        <Text style={tw`text-lg mb-4 text-gray-800`}>
          Enter your email address to reset your password.
        </Text>
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 mb-4`}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 py-2 px-4 rounded`}
          onPress={handleForgotPassword}
        >
          <Text style={tw`text-white text-lg font-bold`}>Send Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
