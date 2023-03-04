import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import tw from '../../../lib/tailwind';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // handle sign up logic here
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <View style={tw`w-4/5`}>
        <Text style={tw`text-3xl font-bold mb-4 text-gray-800`}>Sign Up</Text>
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 mb-4`}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 mb-4`}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 mb-4`}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 py-2 px-4 rounded`}
          onPress={handleSignUp}
        >
          <Text style={tw`text-white text-lg font-bold`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
