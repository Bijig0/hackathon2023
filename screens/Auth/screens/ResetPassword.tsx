import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Input from '../../../components/Input';
import tw from '../../../lib/tailwind';

const ResetPasswordScreen = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleResetPassword = () => {
    // handle reset password logic here
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <View style={tw`w-4/5`}>
        <Text style={tw`text-3xl font-bold mb-4 text-gray-800`}>
          Reset Password
        </Text>
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 mb-4`}
          placeholder="New Password"
          secureTextEntry={true}
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />
        <Input
          label="Password"
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />
        <TextInput
          style={tw`bg-gray-100 border-2 border-gray-300 p-2 mb-4`}
          placeholder="Confirm New Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmNewPassword(text)}
          value={confirmNewPassword}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 py-2 px-4 rounded`}
          onPress={handleResetPassword}
        >
          <Text style={tw`text-white text-lg font-bold`}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
