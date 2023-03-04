import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../../../components/Button';
import tw from '../../../lib/tailwind';
import globalstyle from '../../../styles/globalstyle';

export const Welcome: React.FC = ({}) => {
  function onLoginPress() {
    console.log('go to login');
  }

  function onSignupPress() {
    console.log('go to sign up');
  }

  return (
    <SafeAreaView style={globalstyle.droidSafeArea}>
      <Text style={tw`text-2xl font-bold mb-8`}>Welcome to my app!</Text>
      <View>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </View>
    </SafeAreaView>
  );
};
