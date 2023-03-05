import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import tw from '../../../lib/tailwind';
import globalstyle from '../../../styles/globalstyle';
import { useNavigation } from '@react-navigation/native';

export const Welcome: React.FC = () => {
  const navigation = useNavigation();

  function onLoginPress() {
    navigation.navigate('Auth', { screen: 'Login' });
  }

  function onSignupPress() {
    navigation.navigate('Auth', { screen: 'SignUp' });
  }

  return (
    <SafeAreaView style={globalstyle.droidSafeArea}>
      <View style={tw`p-6 flex flex-col justify-center bg-white`}>
        <View style={tw`h-1/2`}>
          <Text style={tw`text-4xl font-bold w-1/2 mb-2`}>
            Welcome to my app!
          </Text>
          <View style={tw`w-1/2`}>
            <Typography>
              Together with you the AppName will help to save earth.
            </Typography>
          </View>
        </View>
      </View>
      <View style={tw`p-8 flex bg-emerald-400`}>
        <View style={tw`h-1/2 flex flex-col gap-4 justify-center`}>
          <Button variant="secondary" onPress={() => onLoginPress()}>
            Log In
          </Button>
          <Button variant="secondary" onPress={() => onSignupPress()}>
            Sign Up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
