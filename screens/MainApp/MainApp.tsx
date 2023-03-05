import { Text, View, FlatList, SectionList, StyleSheet } from 'react-native';
import tw from '../.././lib/tailwind';
import { useFonts } from 'expo-font';
import React, { useCallback, useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import useMainAppIsReady from "../../hooks/useAppIsReady";
import * as SplashScreen from 'expo-splash-screen';
import CameraScreen from './CameraStack/Camera';
import Home from './screens/Home/Home';
import Profile from './screens/Profile';
import Details from './screens/Details';
import CameraStack from './CameraStack/CameraStack';
import { Welcome } from '../Auth/screens/Welcome';
import LoginScreen from '../Auth/screens/Login';
import SignUp from '../Auth/screens/SignUp';
import ResetPassword from '../Auth/screens/ResetPassword';
import ForgotPassword from '../Auth/screens/ForgotPassword';

// SplashScreen.preventAutoHideAsync()

export default function MainApp() {
  const Tab = createBottomTabNavigator();

  // const mainAppIsReady = useMainAppIsReady(data[0].data[0]);

  const mainAppIsReady = true;

  useEffect(() => {
    const prepare = async () => {
      if (mainAppIsReady) {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, [mainAppIsReady]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        lazy: false,
      }}
      backBehavior="order"
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen
        name="CameraScreen"
        component={CameraStack}
        navigationKey="CameraScreen"
        options={{
          lazy: false,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="ResetPassword" component={ResetPassword} />
      <Tab.Screen name="ForgotPassword" component={ForgotPassword} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
